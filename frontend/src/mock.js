// Mock data for Cosmotron Powerlifting Gym

export const mockData = {
  // Hero Section
  hero: {
    title: "COSMOTRON",
    slogan: "WHERE STRENGTH IS FORGED",
    subtitle: "Elite powerlifting protocols meet neural enhancement training in Perth's most advanced strength facility. Join the revolution.",
    backgroundImage: "https://customer-assets.emergentagent.com/job_cosmotron-lift/artifacts/y7cv6qi4_file_0000000015586230bbc3a706feb53869_conversation_id%3D67ffb4f5-5e74-8012-b17e-3fbcd28753a7%26message_id%3D829414af-438b-439d-ab88-a793497798f3.png"
  },

  // About Section
  about: {
    title: "FORGED IN IRON, BUILT FOR CHAMPIONS",
    description: "Since 2018, Cosmotron has been Perth's home for serious strength training. We believe that every lifter - from first-timer to elite competitor - deserves world-class coaching, premium equipment, and a community that pushes them to exceed their limits.",
    philosophy: "Our philosophy is simple: technique first, intensity second, community always. Whether you're prepping for your first meet or chasing national records, we provide the tools, knowledge, and support to unlock your true potential.",
    stats: [
      { number: "500+", label: "Members Strong" },
      { number: "50+", label: "Competition Medals" },
      { number: "6", label: "Years of Excellence" },
      { number: "24/7", label: "Gym Access" }
    ]
  },

  // Training Programs
  programs: [
    {
      id: 1,
      title: "Competition Prep",
      description: "12-16 week intensive programs designed to peak your squat, bench, and deadlift for competition day.",
      features: ["Meet simulation training", "Competition commands practice", "Peak strength programming", "Mental preparation coaching"],
      price: "$180/week",
      duration: "12-16 weeks"
    },
    {
      id: 2,
      title: "Beginner Foundations",
      description: "Learn the fundamentals of powerlifting with expert coaching focused on proper technique and injury prevention.",
      features: ["Movement pattern mastery", "Progressive loading", "Safety protocols", "Nutrition guidance"],
      price: "$120/week",
      duration: "8-12 weeks"
    },
    {
      id: 3,
      title: "Technique Refinement",
      description: "Perfect your lifts with video analysis and personalized coaching to break through plateaus.",
      features: ["Video movement analysis", "Accessory exercise selection", "Weakness identification", "Form optimization"],
      price: "$150/week",
      duration: "6-8 weeks"
    },
    {
      id: 4,
      title: "Personal Training",
      description: "One-on-one coaching tailored to your specific goals, schedule, and experience level.",
      features: ["Customized programming", "Flexible scheduling", "Individual attention", "Goal-specific training"],
      price: "$80/session",
      duration: "Ongoing"
    }
  ],

  // Equipment Showcase
  equipment: [
    {
      id: 1,
      name: "IPF-Standard Power Racks",
      description: "Competition-spec Eleiko power racks with adjustable spotting arms and safety bars.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3"
    },
    {
      id: 2,
      name: "Calibrated Plates",
      description: "Full set of Eleiko calibrated competition plates from 0.5kg to 25kg.",
      image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-4.0.3"
    },
    {
      id: 3,
      name: "Deadlift Platforms",
      description: "6 custom-built deadlift platforms with premium rubber matting and proper dimensions.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3"
    },
    {
      id: 4,
      name: "Monolift System",
      description: "Professional monolift for walk-out free squatting, perfect for max attempts.",
      image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-4.0.3"
    }
  ],

  // Trainer Profiles
  trainers: [
    {
      id: 1,
      name: "Marcus Steel",
      title: "Head Coach & Founder",
      bio: "Former Australian powerlifting champion with 15+ years coaching experience. Specializes in competition preparation and technique refinement.",
      achievements: ["Australian Record Holder (2019-2021)", "IPF World Championships Bronze", "15+ National Champions coached"],
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3",
      specialties: ["Competition Prep", "Advanced Technique", "Mental Performance"]
    },
    {
      id: 2,
      name: "Sarah Thunder",
      title: "Senior Coach",
      bio: "Exercise science graduate and competitive powerlifter. Expert in beginner development and injury prevention protocols.",
      achievements: ["State Champion (3x)", "Exercise Science Degree", "100+ beginners coached"],
      image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-4.0.3",
      specialties: ["Beginner Training", "Injury Prevention", "Movement Analysis"]
    },
    {
      id: 3,
      name: "Jake Ironside",
      title: "Strength Coach",
      bio: "Former strongman competitor turned powerlifting coach. Brings unique perspective on accessory work and strength development.",
      achievements: ["WA Strongest Man (2x)", "Powerlifting Coach Certification", "Accessory Specialist"],
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3",
      specialties: ["Accessory Programming", "Strength Development", "Program Design"]
    }
  ],

  // Membership Plans
  memberships: [
    {
      id: 1,
      name: "Day Pass",
      price: "$25",
      period: "per day",
      description: "Perfect for trying us out or occasional training",
      features: ["Full gym access", "Equipment usage", "Basic spotting available", "Valid for 24 hours"],
      popular: false
    },
    {
      id: 2,
      name: "Weekly Pass",
      price: "$75",
      period: "per week",
      description: "Great for short-term training blocks",
      features: ["7 days unlimited access", "All equipment included", "Group class access", "Locker rental available"],
      popular: false
    },
    {
      id: 3,
      name: "Monthly Unlimited",
      price: "$120",
      period: "per month",
      description: "Our most popular membership option",
      features: ["24/7 gym access", "All equipment included", "Free initial assessment", "Group classes included", "Guest pass (2 per month)"],
      popular: true
    },
    {
      id: 4,
      name: "Student Monthly",
      price: "$90",
      period: "per month",
      description: "Special rate for full-time students",
      features: ["24/7 gym access", "All equipment included", "Student ID required", "Group classes included"],
      popular: false
    }
  ],

  // Class Schedule
  schedule: [
    {
      day: "Monday",
      classes: [
        { time: "6:00 AM", name: "Morning Strength", coach: "Marcus Steel", spots: "8/12" },
        { time: "12:00 PM", name: "Lunch Power Hour", coach: "Sarah Thunder", spots: "5/10" },
        { time: "6:00 PM", name: "Competition Prep", coach: "Marcus Steel", spots: "12/15" }
      ]
    },
    {
      day: "Tuesday",
      classes: [
        { time: "7:00 AM", name: "Beginner Basics", coach: "Sarah Thunder", spots: "6/8" },
        { time: "5:30 PM", name: "Technique Focus", coach: "Jake Ironside", spots: "4/8" },
        { time: "7:00 PM", name: "Open Training", coach: "All Coaches", spots: "Available" }
      ]
    },
    {
      day: "Wednesday",
      classes: [
        { time: "6:00 AM", name: "Morning Strength", coach: "Jake Ironside", spots: "10/12" },
        { time: "12:00 PM", name: "Lunch Power Hour", coach: "Sarah Thunder", spots: "7/10" },
        { time: "6:00 PM", name: "Heavy Singles", coach: "Marcus Steel", spots: "9/12" }
      ]
    },
    {
      day: "Thursday",
      classes: [
        { time: "7:00 AM", name: "Beginner Basics", coach: "Sarah Thunder", spots: "3/8" },
        { time: "5:30 PM", name: "Accessory Focus", coach: "Jake Ironside", spots: "6/10" },
        { time: "7:00 PM", name: "Open Training", coach: "All Coaches", spots: "Available" }
      ]
    },
    {
      day: "Friday",
      classes: [
        { time: "6:00 AM", name: "Morning Strength", coach: "Marcus Steel", spots: "11/12" },
        { time: "12:00 PM", name: "Lunch Power Hour", coach: "Jake Ironside", spots: "8/10" },
        { time: "6:00 PM", name: "Friday Night Lights", coach: "All Coaches", spots: "15/20" }
      ]
    },
    {
      day: "Saturday",
      classes: [
        { time: "9:00 AM", name: "Weekend Warriors", coach: "Sarah Thunder", spots: "12/15" },
        { time: "11:00 AM", name: "Competition Simulation", coach: "Marcus Steel", spots: "8/10" },
        { time: "2:00 PM", name: "Open Training", coach: "Available", spots: "Available" }
      ]
    },
    {
      day: "Sunday",
      classes: [
        { time: "10:00 AM", name: "Recovery Session", coach: "Jake Ironside", spots: "6/12" },
        { time: "1:00 PM", name: "Open Training", coach: "Available", spots: "Available" }
      ]
    }
  ],

  // Contact Information
  contact: {
    address: "123 Iron Street, Perth WA 6000",
    phone: "+61 8 9123 4567",
    email: "info@cosmotrongym.com.au",
    hours: {
      weekdays: "5:00 AM - 11:00 PM",
      saturday: "6:00 AM - 10:00 PM", 
      sunday: "7:00 AM - 9:00 PM"
    },
    socialMedia: {
      instagram: "@cosmotrongym",
      facebook: "CosmotronPowerlifting",
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