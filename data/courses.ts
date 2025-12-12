
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
    title: "Theology",
    category: "Theology",
    instructor: "Destiny Centre",
    rating: 5.0,
    students: 150,
    duration: "12 weeks",
    level: "All Levels",
    price: "KES 5,000",
    image: "/public/images/destiny.jpg",
    description: "Explore the foundations of faith, biblical interpretation, and theological history to deepen your spiritual understanding.",
    syllabus: ["Introduction to Theology", "Biblical Studies", "Systematic Theology", "Church History", "Ethics and Faith"],
    isPopular: true
  },
  {
    id: 2,
    title: "Counseling and Psychology",
    category: "Counseling",
    instructor: "Destiny Centre",
    rating: 4.9,
    students: 120,
    duration: "10 weeks",
    level: "Intermediate",
    price: "KES 6,000",
    image: "/public/images/destiny.jpg",
    description: "Gain essential skills in pastoral counseling, human psychology, and conflict resolution for community support.",
    syllabus: ["Fundamentals of Psychology", "Counseling Techniques", "Crisis Intervention", "Family & Marriage Counseling", "Ethics in Counseling"],
    isNew: true
  },
  {
    id: 3,
    title: "Leadership",
    category: "Leadership",
    instructor: "Destiny Centre",
    rating: 5.0,
    students: 200,
    duration: "8 weeks",
    level: "All Levels",
    price: "KES 4,500",
    image: "/images/destiny.jpg",
    description: "Develop your potential to lead with integrity, vision, and purpose in various organizational and community contexts.",
    syllabus: ["Principles of Leadership", "Strategic Planning", "Team Dynamics", "Conflict Management", "Servant Leadership"],
    isPopular: true
  },
  {
    id: 4,
    title: "Business Studies",
    category: "Business",
    instructor: "Destiny Centre",
    rating: 4.8,
    students: 180,
    duration: "12 weeks",
    level: "Beginner",
    price: "KES 5,500",
    image: "/images/destiny.jpg",
    description: "Understand the mechanics of business management, entrepreneurship, and ethics in the modern marketplace.",
    syllabus: ["Entrepreneurship Basics", "Business Ethics", "Financial Management", "Marketing Fundamentals", "Operations Management"]
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
