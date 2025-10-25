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
    title: "NEURAL ENHANCEMENT PROTOCOLS",
    description: "Since 2018, Cosmotron has been Perth's nexus for advanced strength augmentation. We believe that every lifter - from neural newcomers to cybernetic champions - deserves access to cutting-edge training protocols, quantum-grade equipment, and a collective that transcends human limitations.",
    philosophy: "Our philosophy: Data-driven precision, AI-enhanced intensity, digital community convergence. Whether you're initializing your first training sequence or optimizing for competitive parameters, we provide the neural pathways, technological infrastructure, and collective intelligence to unlock your maximum potential.",
    stats: [
      { number: "500+", label: "Neural Links Active" },
      { number: "50+", label: "Victory Protocols" },
      { number: "6", label: "Years Online" },
      { number: "24/7", label: "System Uptime" }
    ]
  },

  // Training Programs
  programs: [
    {
      id: 1,
      title: "ELITE PROTOCOL",
      description: "12-16 week neural optimization sequence designed to maximize your squat, bench, and deadlift performance matrix for competitive deployment.",
      features: ["Combat simulation training", "Neural command integration", "Peak performance algorithms", "Cognitive enhancement protocols"],
      price: "$180/cycle",
      duration: "12-16 cycles"
    },
    {
      id: 2,
      title: "INITIALIZATION SEQUENCE", 
      description: "Master the fundamental movement algorithms with AI-guided coaching focused on biomechanical optimization and system integrity.",
      features: ["Movement pattern encoding", "Progressive load distribution", "Safety firewall protocols", "Nutritional data optimization"],
      price: "$120/cycle",
      duration: "8-12 cycles"
    },
    {
      id: 3,
      title: "TECHNIQUE ENHANCEMENT",
      description: "Perfect your lifting sequences with holographic analysis and personalized AI coaching to bypass performance bottlenecks.",
      features: ["3D movement analysis", "Auxiliary system selection", "Performance gap identification", "Biomechanical optimization"],
      price: "$150/cycle", 
      duration: "6-8 cycles"
    },
    {
      id: 4,
      title: "NEURAL INTERFACE",
      description: "Direct one-on-one neural linking with elite trainers tailored to your specific enhancement goals and operational schedule.",
      features: ["Custom algorithm programming", "Adaptive scheduling matrix", "Individual neural attention", "Goal-specific enhancement"],
      price: "$80/session",
      duration: "Continuous"
    }
  ],

  // Equipment Showcase
  equipment: [
    {
      id: 1,
      name: "QUANTUM POWER MATRICES",
      description: "Competition-spec Eleiko power racks with neural interface spotting systems and quantum-stabilized safety protocols.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3"
    },
    {
      id: 2,
      name: "CALIBRATED MASS UNITS",
      description: "Full spectrum Eleiko calibrated competition plates from 0.5kg to 25kg with molecular precision weighting.",
      image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-4.0.3"
    },
    {
      id: 3,
      name: "DEADLIFT PLATFORMS 2.0",
      description: "6 custom-engineered deadlift platforms with quantum-dampened rubber matrices and biomechanical optimization zones.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3"
    },
    {
      id: 4,
      name: "NEURAL MONOLIFT SYSTEM",
      description: "AI-enhanced monolift for walk-out free squatting with predictive load assistance and maximum lift protocols.",
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