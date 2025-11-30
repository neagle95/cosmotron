from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, EmailStr
from typing import List
import uuid
from datetime import datetime
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# Define Models
class StatusCheck(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=datetime.utcnow)

class StatusCheckCreate(BaseModel):
    client_name: str

class ContactForm(BaseModel):
    name: str
    email: EmailStr
    phone: str = ""
    subject: str = ""
    message: str

# Add your routes to the router instead of directly to app
@api_router.get("/")
async def root():
    return {"message": "Hello World"}

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.dict()
    status_obj = StatusCheck(**status_dict)
    _ = await db.status_checks.insert_one(status_obj.dict())
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    status_checks = await db.status_checks.find().to_list(1000)
    return [StatusCheck(**status_check) for status_check in status_checks]

@api_router.post("/contact")
async def submit_contact_form(form_data: ContactForm):
    """
    Submit contact form and send email to cosmotrongym@gmail.com
    """
    try:
        # Create email message
        msg = MIMEMultipart()
        msg['From'] = form_data.email
        msg['To'] = "cosmotrongym@gmail.com"
        msg['Subject'] = f"Contact Form: {form_data.subject or 'No Subject'}"
        
        # Create email body
        body = f"""
New Contact Form Submission from Cosmotron Website

Name: {form_data.name}
Email: {form_data.email}
Phone: {form_data.phone or 'Not provided'}
Subject: {form_data.subject or 'No subject'}

Message:
{form_data.message}

---
This email was sent from the Cosmotron website contact form.
        """
        
        msg.attach(MIMEText(body, 'plain'))
        
        # Get SMTP credentials from environment variables
        smtp_host = os.environ.get('SMTP_HOST', 'smtp.gmail.com')
        smtp_port = int(os.environ.get('SMTP_PORT', '587'))
        smtp_user = os.environ.get('SMTP_USER')
        smtp_password = os.environ.get('SMTP_PASSWORD')
        
        if not smtp_user or not smtp_password:
            # Store in database as fallback
            contact_data = {
                "id": str(uuid.uuid4()),
                "name": form_data.name,
                "email": form_data.email,
                "phone": form_data.phone,
                "subject": form_data.subject,
                "message": form_data.message,
                "timestamp": datetime.utcnow(),
                "status": "pending_email_config"
            }
            await db.contact_forms.insert_one(contact_data)
            logger.warning("SMTP credentials not configured. Contact form saved to database.")
            return {
                "success": True,
                "message": "Your message has been received! We will get back to you soon.",
                "note": "Email delivery pending configuration"
            }
        
        # Send email via SMTP
        server = smtplib.SMTP(smtp_host, smtp_port)
        server.starttls()
        server.login(smtp_user, smtp_password)
        server.send_message(msg)
        server.quit()
        
        # Also store in database for record keeping
        contact_data = {
            "id": str(uuid.uuid4()),
            "name": form_data.name,
            "email": form_data.email,
            "phone": form_data.phone,
            "subject": form_data.subject,
            "message": form_data.message,
            "timestamp": datetime.utcnow(),
            "status": "sent"
        }
        await db.contact_forms.insert_one(contact_data)
        
        logger.info(f"Contact form submitted and email sent from {form_data.email}")
        return {
            "success": True,
            "message": "Your message has been sent successfully! We will get back to you soon."
        }
        
    except Exception as e:
        logger.error(f"Error processing contact form: {str(e)}")
        # Store in database even if email fails
        try:
            contact_data = {
                "id": str(uuid.uuid4()),
                "name": form_data.name,
                "email": form_data.email,
                "phone": form_data.phone,
                "subject": form_data.subject,
                "message": form_data.message,
                "timestamp": datetime.utcnow(),
                "status": "email_failed",
                "error": str(e)
            }
            await db.contact_forms.insert_one(contact_data)
        except:
            pass
        
        raise HTTPException(
            status_code=500,
            detail="Failed to send message. Please try again or contact us directly via email."
        )

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
