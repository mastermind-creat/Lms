
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
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Master the Daraja API. Learn to integrate STK Push, B2C, and C2B payments into real-world applications used by Kenyan businesses.",
    syllabus: ["Introduction to Daraja API", "Authentication & Security", "STK Push Implementation", "B2C & C2B Transactions", "Handling Callbacks", "Final Project: E-commerce Integration"]
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
    image: "https://images.unsplash.com/photo-1625246333195-551e51263d97?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Leverage Python and Satellite data to solve food security challenges. Analyze soil data, predict weather patterns, and optimize crop yields.",
    syllabus: ["Python for Data Analysis", "Satellite Imagery with GIS", "Machine Learning for Crop Prediction", "Soil Data Visualization", "IoT in Agriculture"]
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
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Build modern, responsive web applications using React.js. From hooks to state management with Redux, become a job-ready frontend engineer.",
    syllabus: ["HTML/CSS/JS Refresher", "React Basics & Components", "Hooks & State Management", "Routing with React Router", "API Integration", "Deployment"]
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
    image: "https://images.unsplash.com/photo-1586717791821-3f44a5638d48?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Design inclusive financial interfaces for the African market. Focus on USSD, low-data environments, and trust-building UI patterns.",
    syllabus: ["User Research in Kenya", "Wireframing & Prototyping", "Designing for Trust", "USSD vs App Interfaces", "Usability Testing"]
  },
  {
    id: 5,
    title: "Digital Marketing Masterclass 2024",
    category: "Marketing",
    instructor: "Emily Roth",
    rating: 4.7,
    students: 2100,
    duration: "6 weeks",
    level: "All Levels",
    price: "Free",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Learn SEO, Social Media, and Email marketing strategies tailored for the East African digital landscape.",
    syllabus: ["Social Media Strategy", "SEO Fundamentals", "Content Marketing", "Paid Advertising (FB & Google)", "Analytics & Reporting"]
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
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Build beautiful, natively compiled applications for mobile, web, and desktop from a single codebase.",
    syllabus: ["Dart Programming", "Flutter Widgets", "State Management (Provider/Bloc)", "Firebase Integration", "Publishing to Stores"]
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
    image: "https://images.unsplash.com/photo-1614064641938-3e8211d936e6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
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
    image: "https://images.unsplash.com/photo-1611974765270-ca12586343bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Analyze financial data using Python. Build predictive models for stock markets and automate trading strategies.",
    syllabus: ["Python for Finance", "Pandas & NumPy", "Financial Data Visualization", "Algorithmic Trading Basics", "Risk Management"]
  }
];
