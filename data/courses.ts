export interface Course {
  id: number;
  title: string;
  category: string;
  instructor: string;
  rating: number;
  students: number;
  duration: string;
  level: string;
  price: string;
  image: string;
  description: string;
  syllabus: string[];
  isNew?: boolean;
  isPopular?: boolean;
}

export const courses: Course[] = [
  {
    id: 1,
    title: "M-PESA Integration & API Development",
    category: "Fintech",
    instructor: "Kevin Omondi",
    rating: 5.0,
    students: 1250,
    duration: "12 weeks",
    level: "Intermediate",
    price: "KES 5,000",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80",
    description: "Master the Daraja API. Learn to integrate STK Push, B2C, and C2B payments into real-world applications.",
    syllabus: ["Introduction to Daraja API", "Authentication & Security", "STK Push Implementation", "B2C & C2B Transactions", "Handling Callbacks", "Final Project: E-commerce Integration"],
    isPopular: true
  },
  {
    id: 2,
    title: "Data Science for Agriculture",
    category: "AgriTech",
    instructor: "Dr. Zainab Ahmed",
    rating: 4.8,
    students: 850,
    duration: "10 weeks",
    level: "Intermediate",
    price: "Free",
    image: "https://images.unsplash.com/photo-1586771107445-d3ca888129ff?auto=format&fit=crop&w=800&q=80",
    description: "Leverage Python and Satellite data to solve food security challenges. Analyze soil data and predict weather patterns.",
    syllabus: ["Python for Data Analysis", "Satellite Imagery with GIS", "Machine Learning for Crop Prediction", "Soil Data Visualization", "IoT in Agriculture"],
    isNew: true
  },
  {
    id: 3,
    title: "Frontend Development with React",
    category: "Web Dev",
    instructor: "Wanjiku Kimani",
    rating: 4.9,
    students: 3200,
    duration: "12 weeks",
    level: "Beginner",
    price: "KES 8,500",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=800&q=80",
    description: "Build modern, responsive web applications using React.js. From hooks to state management, become job-ready.",
    syllabus: ["HTML/CSS/JS Refresher", "React Basics & Components", "Hooks & State Management", "Routing with React Router", "API Integration", "Deployment"],
    isPopular: true
  },
  {
    id: 4,
    title: "UX Design for Mobile Money Apps",
    category: "Design",
    instructor: "Brian Kipkorir",
    rating: 4.9,
    students: 1500,
    duration: "8 weeks",
    level: "Beginner",
    price: "KES 6,000",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80",
    description: "Design inclusive financial interfaces for the African market. Focus on USSD, low-data environments, and trust.",
    syllabus: ["User Research in Kenya", "Wireframing & Prototyping", "Designing for Trust", "USSD vs App Interfaces", "Usability Testing"]
  },
  {
    id: 5,
    title: "Digital Marketing Masterclass 2025",
    category: "Marketing",
    instructor: "Emily Roth",
    rating: 4.7,
    students: 2100,
    duration: "6 weeks",
    level: "All Levels",
    price: "Free",
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=800&q=80",
    description: "Learn SEO, Social Media, and Email marketing strategies tailored for the East African digital landscape.",
    syllabus: ["Social Media Strategy", "SEO Fundamentals", "Content Marketing", "Paid Advertising (FB & Google)", "Analytics & Reporting"],
    isPopular: true
  },
  {
    id: 6,
    title: "Mobile App Development with Flutter",
    category: "Development",
    instructor: "Alex Chen",
    rating: 4.7,
    students: 950,
    duration: "10 weeks",
    level: "Intermediate",
    price: "KES 14,000",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80",
    description: "Build beautiful, natively compiled applications for mobile, web, and desktop from a single codebase.",
    syllabus: ["Dart Programming", "Flutter Widgets", "State Management (Provider/Bloc)", "Firebase Integration", "Publishing to Stores"],
    isNew: true
  },
  {
    id: 7,
    title: "Cybersecurity Essentials",
    category: "Technology",
    instructor: "Maria Garcia",
    rating: 4.8,
    students: 900,
    duration: "8 weeks",
    level: "Beginner",
    price: "KES 9,500",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80",
    description: "Protect systems and networks. Learn ethical hacking basics, network security, and compliance standards.",
    syllabus: ["Network Security Basics", "Ethical Hacking Intro", "Cryptography", "Web Application Security", "Security Compliance"]
  },
  {
    id: 8,
    title: "Python for Finance",
    category: "Finance",
    instructor: "James Wilson",
    rating: 4.6,
    students: 1200,
    duration: "8 weeks",
    level: "Intermediate",
    price: "KES 12,000",
    image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=800&q=80",
    description: "Analyze financial data using Python. Build predictive models for stock markets and automate trading.",
    syllabus: ["Python for Finance", "Pandas & NumPy", "Financial Data Visualization", "Algorithmic Trading Basics", "Risk Management"],
    isNew: true
  }
];