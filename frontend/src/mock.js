// Mock data for Cosmotron Powerlifting Gym

export const mockData = {
// Mock data for Cosmotron Powerlifting Gym

export const mockData = {
  // Hero Section
  hero: {
    title: "COSMOTRON",
    slogan: "POWER BEYOND GRAVITY",
    subtitle: "A powerlifting-focused gym where beginners, returning athletes, and professionals alike can find their place in Szeged.",
    backgroundImage: "https://customer-assets.emergentagent.com/job_cosmotron-lift/artifacts/y7cv6qi4_file_0000000015586230bbc3a706feb53869_conversation_id%3D67ffb4f5-5e74-8012-b17e-3fbcd28753a7%26message_id%3D829414af-438b-439d-ab88-a793497798f3.png"
  },

  // About Section
  about: {
    title: "ABOUT US",
    description: "Cosmotron is a powerlifting-focused gym where beginners, returning athletes, and professionals alike can find their place. Our goal is progress for everyone — that's why we welcome not only powerlifters but anyone who wants to become stronger, more conscious, or simply more active.",
    philosophy: "At the heart of our community lie performance, technique, and unity – and to celebrate this, we've launched the Cosmotron Leaderboard, featuring the strongest lifters from our gym and the city of Szeged. Step in. Show your strength. Get on the list.",
    stats: [
      { number: "100+", label: "Active Members" },
      { number: "Top 20", label: "Leaderboard Spots" },
      { number: "3", label: "Years in Szeged" },
      { number: "24/7", label: "Member Access" }
    ]
  },

  // Leaderboard Data
  leaderboard: {
    men: [
      { rank: 1, name: "Kovács János", photo: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3", squat: 250, bench: 180, deadlift: 280, total: 710, dots: 485.2 },
      { rank: 2, name: "Nagy Péter", photo: "https://images.unsplash.com/photo-1583468982228-19f19164aee2?ixlib=rb-4.0.3", squat: 240, bench: 175, deadlift: 275, total: 690, dots: 472.1 },
      { rank: 3, name: "Szabó Gábor", photo: "https://images.unsplash.com/photo-1594736797933-d0d00c9e1b7a?ixlib=rb-4.0.3", squat: 235, bench: 170, deadlift: 270, total: 675, dots: 461.8 },
      { rank: 4, name: "Tóth Márton", photo: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3", squat: 230, bench: 165, deadlift: 265, total: 660, dots: 451.2 },
      { rank: 5, name: "Kiss Dániel", photo: "https://images.unsplash.com/photo-1583468982228-19f19164aee2?ixlib=rb-4.0.3", squat: 225, bench: 160, deadlift: 260, total: 645, dots: 440.9 },
      { rank: 6, name: "Molnár László", photo: "https://images.unsplash.com/photo-1594736797933-d0d00c9e1b7a?ixlib=rb-4.0.3", squat: 220, bench: 155, deadlift: 255, total: 630, dots: 430.5 },
      { rank: 7, name: "Horváth Zoltán", photo: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3", squat: 215, bench: 150, deadlift: 250, total: 615, dots: 420.1 },
      { rank: 8, name: "Varga Tamás", photo: "https://images.unsplash.com/photo-1583468982228-19f19164aee2?ixlib=rb-4.0.3", squat: 210, bench: 145, deadlift: 245, total: 600, dots: 409.8 },
      { rank: 9, name: "Fekete András", photo: "https://images.unsplash.com/photo-1594736797933-d0d00c9e1b7a?ixlib=rb-4.0.3", squat: 205, bench: 140, deadlift: 240, total: 585, dots: 399.4 },
      { rank: 10, name: "Balogh Róbert", photo: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3", squat: 200, bench: 135, deadlift: 235, total: 570, dots: 389.1 }
    ],
    women: [
      { rank: 1, name: "Takács Anna", photo: "https://images.unsplash.com/photo-1494790108755-2616c78129c4?ixlib=rb-4.0.3", squat: 140, bench: 85, deadlift: 160, total: 385, dots: 421.5 },
      { rank: 2, name: "Németh Kata", photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3", squat: 135, bench: 80, deadlift: 155, total: 370, dots: 405.2 },
      { rank: 3, name: "Papp Viktória", photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3", squat: 130, bench: 75, deadlift: 150, total: 355, dots: 388.9 },
      { rank: 4, name: "Simon Eszter", photo: "https://images.unsplash.com/photo-1494790108755-2616c78129c4?ixlib=rb-4.0.3", squat: 125, bench: 70, deadlift: 145, total: 340, dots: 372.6 },
      { rank: 5, name: "Farkas Ágnes", photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3", squat: 120, bench: 65, deadlift: 140, total: 325, dots: 356.3 },
      { rank: 6, name: "Oláh Bernadett", photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3", squat: 115, bench: 60, deadlift: 135, total: 310, dots: 340.0 },
      { rank: 7, name: "Rácz Tímea", photo: "https://images.unsplash.com/photo-1494790108755-2616c78129c4?ixlib=rb-4.0.3", squat: 110, bench: 55, deadlift: 130, total: 295, dots: 323.7 },
      { rank: 8, name: "Juhász Petra", photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3", squat: 105, bench: 50, deadlift: 125, total: 280, dots: 307.4 },
      { rank: 9, name: "Mészáros Réka", photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3", squat: 100, bench: 45, deadlift: 120, total: 265, dots: 291.1 },
      { rank: 10, name: "Lakatos Noémi", photo: "https://images.unsplash.com/photo-1494790108755-2616c78129c4?ixlib=rb-4.0.3", squat: 95, bench: 40, deadlift: 115, total: 250, dots: 274.8 }
    ]
  },

  // Equipment Showcase
  equipment: [
    {
      id: 1,
      name: "CALIBRATED PLATES",
      description: "Competition-grade calibrated plates meeting IPF standards for precise weight measurements.",
      image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-4.0.3"
    },
    {
      id: 2,
      name: "COMPETITION BARBELLS",
      description: "IPF-approved competition barbells for squat, bench press, and deadlift with proper specifications.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3"
    },
    {
      id: 3,
      name: "COMBO RACKS",
      description: "Versatile combo racks for safe squatting and bench pressing with adjustable safety settings.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3"
    },
    {
      id: 4,
      name: "MACHINES & ACCESSORIES",
      description: "Supporting machines and accessories for auxiliary work and comprehensive strength training.",
      image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-4.0.3"
    }
  ],

  // Trainer Profiles
  trainers: [
    {
      id: 1,
      name: "Marcus Steel",
      title: "Chief Neural Engineer & System Architect",
      bio: "Former Australian powerlifting champion with 15+ years neural coaching protocols. Specializes in competitive enhancement and biomechanical optimization algorithms.",
      achievements: ["Australian Data Record Holder (2019-2021)", "IPF World Championships Neural Bronze", "15+ Elite Operatives Developed"],
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3",
      specialties: ["Elite Protocol Development", "Advanced Neural Techniques", "Cognitive Performance"]
    },
    {
      id: 2,
      name: "Sarah Thunder",
      title: "Senior Enhancement Specialist",
      bio: "Exercise science neural graduate and competitive powerlifter. Expert in initiate development and system integrity prevention protocols.",
      achievements: ["State Neural Champion (3x)", "Exercise Science Neural Degree", "100+ Initiates Enhanced"],
      image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-4.0.3",
      specialties: ["Initiate Training", "System Integrity", "Movement Analysis"]
    },
    {
      id: 3,
      name: "Jake Ironside",
      title: "Quantum Strength Engineer",
      bio: "Former strongman competitor turned powerlifting neural coach. Brings unique perspective on auxiliary work and quantum strength development algorithms.",
      achievements: ["WA Strongest Cyborg (2x)", "Powerlifting Neural Coach Certification", "Auxiliary Systems Specialist"],
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3",
      specialties: ["Auxiliary Programming", "Quantum Development", "Algorithm Design"]
    }
  ],

  // Pricing Plans
  pricing: {
    dayPasses: [
      { type: "Day Pass", price: "2,000 Ft", note: "Single entry" },
      { type: "Student Day Pass", price: "1,500 Ft", note: "Valid with student ID, up to age 23, single entry" },
      { type: "Master Day Pass", price: "1,500 Ft", note: "For ages 60+, single entry" }
    ],
    memberships: [
      { type: "10-Session Pass", price: "15,000 Ft", validity: "60 days", note: "One entry per day, includes 1 leaderboard attempt", popular: false },
      { type: "Monthly Pass", price: "15,000 Ft", validity: "30 days", note: "One entry per day, includes 1 leaderboard attempt", popular: true },
      { type: "Student Monthly Pass", price: "12,000 Ft", validity: "30 days", note: "Valid with student ID, up to age 23, includes 1 leaderboard attempt", popular: false },
      { type: "Master Monthly Pass", price: "12,000 Ft", validity: "30 days", note: "For ages 60+, includes 1 leaderboard attempt", popular: false },
      { type: "6-Month Pass", price: "63,000 Ft", validity: "6 months", note: "Includes 1 leaderboard attempt per month", popular: false },
      { type: "Annual Pass", price: "126,000 Ft", validity: "12 months", note: "Includes 1 leaderboard attempt per month", popular: false },
      { type: "Leaderboard Entry", price: "5,000 Ft / attempt", validity: "–", note: "For multiple leaderboard attempts per month", popular: false }
    ],
    paymentMethods: ["Cash", "Bank card (POS terminal)", "Revolut / Bank transfer"],
    rules: [
      "Memberships are personal and non-transferable.",
      "Lost passes cannot be replaced.",
      "In case of illness, validity can be extended upon request.",
      "Prices include VAT.",
      "Invoices are provided in all cases."
    ]
  },

  // Class Schedule
  schedule: [
    {
      day: "Monday",
      classes: [
        { time: "6:00 AM", name: "Morning Enhancement", coach: "Marcus Steel", spots: "8/12" },
        { time: "12:00 PM", name: "Lunch Neural Hour", coach: "Sarah Thunder", spots: "5/10" },
        { time: "6:00 PM", name: "Elite Protocol Training", coach: "Marcus Steel", spots: "12/15" }
      ]
    },
    {
      day: "Tuesday",
      classes: [
        { time: "7:00 AM", name: "Initiate Fundamentals", coach: "Sarah Thunder", spots: "6/8" },
        { time: "5:30 PM", name: "Technique Matrix", coach: "Jake Ironside", spots: "4/8" },
        { time: "7:00 PM", name: "Open Neural Training", coach: "All Neural Engineers", spots: "Available" }
      ]
    },
    {
      day: "Wednesday",
      classes: [
        { time: "6:00 AM", name: "Morning Enhancement", coach: "Jake Ironside", spots: "10/12" },
        { time: "12:00 PM", name: "Lunch Neural Hour", coach: "Sarah Thunder", spots: "7/10" },
        { time: "6:00 PM", name: "Heavy Neural Singles", coach: "Marcus Steel", spots: "9/12" }
      ]
    },
    {
      day: "Thursday",
      classes: [
        { time: "7:00 AM", name: "Initiate Fundamentals", coach: "Sarah Thunder", spots: "3/8" },
        { time: "5:30 PM", name: "Auxiliary Neural Focus", coach: "Jake Ironside", spots: "6/10" },
        { time: "7:00 PM", name: "Open Neural Training", coach: "All Neural Engineers", spots: "Available" }
      ]
    },
    {
      day: "Friday",
      classes: [
        { time: "6:00 AM", name: "Morning Enhancement", coach: "Marcus Steel", spots: "11/12" },
        { time: "12:00 PM", name: "Lunch Neural Hour", coach: "Jake Ironside", spots: "8/10" },
        { time: "6:00 PM", name: "Friday Night Neural Lights", coach: "All Neural Engineers", spots: "15/20" }
      ]
    },
    {
      day: "Saturday",
      classes: [
        { time: "9:00 AM", name: "Weekend Neural Warriors", coach: "Sarah Thunder", spots: "12/15" },
        { time: "11:00 AM", name: "Competition Neural Simulation", coach: "Marcus Steel", spots: "8/10" },
        { time: "2:00 PM", name: "Open Neural Training", coach: "Available", spots: "Available" }
      ]
    },
    {
      day: "Sunday",
      classes: [
        { time: "10:00 AM", name: "Recovery Neural Session", coach: "Jake Ironside", spots: "6/12" },
        { time: "1:00 PM", name: "Open Neural Training", coach: "Available", spots: "Available" }
      ]
    }
  ],

  // Contact Information
  contact: {
    address: "Szeged, Hungary (Address will be provided later)",
    phone: "(Phone number will be provided later)",
    email: "(Email will be provided later)",
    hours: {
      weekdays: "(Opening hours will be provided later)",
      saturday: "(Opening hours will be provided later)", 
      sunday: "(Opening hours will be provided later)"
    },
    socialMedia: {
      instagram: "@cosmotron_szeged",
      facebook: "CosmotronSzeged",
      youtube: "CosmotronGym"
    }
  }
};

// Mock API functions for future backend integration
export const mockAPI = {
  // Contact form submission
  submitContactForm: (formData) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('Contact form submitted:', formData);
        resolve({ success: true, message: 'Message sent successfully!' });
      }, 1000);
    });
  },

  // Class booking
  bookClass: (classId, userInfo) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('Class booked:', classId, userInfo);
        resolve({ success: true, message: 'Class booked successfully!' });
      }, 1000);
    });
  },

  // Membership inquiry
  submitMembershipInquiry: (membershipId, userInfo) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('Membership inquiry:', membershipId, userInfo);
        resolve({ success: true, message: 'We\'ll contact you within 24 hours!' });
      }, 1000);
    });
  }
};