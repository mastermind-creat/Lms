
import React, { useState } from 'react';
import { Search, Filter, MapPin, Users, BookOpen, Star, Linkedin, Twitter, Globe, X, ExternalLink, Award, Briefcase, ChevronRight } from 'lucide-react';
import { courses } from '../data/courses';
import { useNavigate } from 'react-router-dom';

// Shared Styles
const cardStyle = "bg-white dark:bg-gray-800 rounded-2xl shadow-[6px_6px_12px_#e5e7eb,-6px_-6px_12px_#ffffff] dark:shadow-[6px_6px_12px_#0b0c15,-6px_-6px_12px_#1e293b] transition-colors duration-300 border border-gray-100 dark:border-gray-700";
const btnPrimary = "px-6 py-2.5 rounded-xl bg-brand-600 text-white font-bold text-sm shadow-[4px_4px_10px_rgba(243,111,33,0.3)] hover:bg-brand-700 active:shadow-none hover:-translate-y-0.5 transition-all";
const inputStyle = "w-full bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-brand-500 transition-all text-gray-900 dark:text-white";

// Mock Instructor Data
const instructorsData = [
  {
    id: 1,
    name: "Kevin Omondi",
    role: "Senior Engineer",
    company: "Safaricom",
    image: "https://i.pravatar.cc/150?u=Kevin",
    category: "Development",
    students: "12.5k",
    courses: 8,
    rating: 4.9,
    bio: "Kevin is a Senior Software Engineer at Safaricom with over 10 years of experience in Fintech. He was instrumental in the development of the M-PESA Daraja API 2.0. His teaching style focuses on practical, real-world implementations of payment systems.",
    skills: ["Fintech", "Node.js", "System Design"],
    socials: { twitter: "#", linkedin: "#", website: "#" }
  },
  {
    id: 2,
    name: "Dr. Zainab Ahmed",
    role: "Lead Data Scientist",
    company: "Microsoft Africa",
    image: "https://i.pravatar.cc/150?u=Zainab",
    category: "Data Science",
    students: "8.5k",
    courses: 5,
    rating: 5.0,
    bio: "Dr. Zainab leads the AI research division at Microsoft Africa Research Institute (MARI). She specializes in using machine learning for agricultural optimization. Her courses demystify complex AI concepts for beginners.",
    skills: ["Python", "Machine Learning", "AgriTech"],
    socials: { twitter: "#", linkedin: "#" }
  },
  {
    id: 3,
    name: "Brian Kipkorir",
    role: "Product Designer",
    company: "Andela",
    image: "https://i.pravatar.cc/150?u=Brian",
    category: "Design",
    students: "10k",
    courses: 6,
    rating: 4.8,
    bio: "Brian is a Product Designer at Andela who believes that good design solves problems. He has helped startups across Nairobi launch user-centric products. He teaches UI/UX principles using Figma and Adobe XD.",
    skills: ["UI/UX", "Figma", "User Research"],
    socials: { linkedin: "#", website: "#" }
  },
  {
    id: 4,
    name: "Grace Wanjiku",
    role: "Cloud Architect",
    company: "Google",
    image: "https://i.pravatar.cc/150?u=Grace",
    category: "Development",
    students: "6k",
    courses: 4,
    rating: 4.9,
    bio: "Grace is a certified Google Cloud Architect. She is passionate about serverless architecture and helping African businesses migrate to the cloud securely and cost-effectively.",
    skills: ["AWS", "Google Cloud", "DevOps"],
    socials: { twitter: "#", linkedin: "#" }
  },
  {
    id: 5,
    name: "Destiny Centre",
    role: "Institution",
    company: "Destiny Leadership",
    image: "/images/destiny.jpg",
    category: "Theology",
    students: "2.1k",
    courses: 12,
    rating: 4.7,
    bio: "The Destiny Centre provides comprehensive theological and leadership training. Focusing on faith-based leadership, counseling, and community development.",
    skills: ["Theology", "Leadership", "Counseling"],
    socials: { website: "#" }
  },
  {
    id: 6,
    name: "Alex Chen",
    role: "Mobile Lead",
    company: "Cellulant",
    image: "https://i.pravatar.cc/150?u=Alex",
    category: "Development",
    students: "9k",
    courses: 3,
    rating: 4.8,
    bio: "Alex is a Flutter Expert and Google Developer Expert (GDE). He builds high-performance mobile applications for the African market, focusing on offline-first architectures.",
    skills: ["Flutter", "Dart", "Mobile"],
    socials: { twitter: "#", linkedin: "#", website: "#" }
  },
  {
    id: 7,
    name: "Emily Roth",
    role: "Marketing Director",
    company: "Twiga Foods",
    image: "https://i.pravatar.cc/150?u=Emily",
    category: "Marketing",
    students: "15k",
    courses: 2,
    rating: 4.6,
    bio: "Emily leads digital strategy at Twiga Foods. She teaches data-driven digital marketing, SEO, and content strategy tailored for e-commerce growth.",
    skills: ["SEO", "Growth Hacking", "Analytics"],
    socials: { linkedin: "#" }
  },
  {
    id: 8,
    name: "James Wilson",
    role: "Investment Banker",
    company: "KCB Bank",
    image: "https://i.pravatar.cc/150?u=James",
    category: "Finance",
    students: "4k",
    courses: 3,
    rating: 4.7,
    bio: "James bridges the gap between traditional finance and modern fintech. He teaches Python for Finance and algorithmic trading strategies.",
    skills: ["Python", "Finance", "Algo Trading"],
    socials: { linkedin: "#" }
  }
];

const InstructorModal = ({ instructor, isOpen, onClose }: { instructor: any, isOpen: boolean, onClose: () => void }) => {
  const navigate = useNavigate();
  if (!isOpen || !instructor) return null;

  // Find courses by this instructor
  // In a real app, we'd filter by ID, but for mock data we match names or use partial match
  const instructorCourses = courses.filter(c => 
    c.instructor === instructor.name || 
    (instructor.name === "Destiny Centre" && c.instructor === "Destiny Centre")
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose}></div>
      <div className="relative bg-white dark:bg-gray-900 w-full max-w-4xl rounded-3xl shadow-2xl overflow-hidden animate-scale-up flex flex-col md:flex-row max-h-[90vh]">
        
        {/* Left Sidebar (Profile) */}
        <div className="w-full md:w-1/3 bg-gray-50 dark:bg-gray-800/50 p-8 flex flex-col items-center text-center border-r border-gray-100 dark:border-gray-800 overflow-y-auto">
           <button onClick={onClose} className="absolute top-4 left-4 md:hidden p-2 bg-white dark:bg-gray-700 rounded-full shadow-sm">
             <X size={20} />
           </button>

           <div className="w-32 h-32 rounded-full p-1 bg-gradient-to-br from-brand-500 to-purple-600 mb-6 shadow-lg">
             <img src={instructor.image} alt={instructor.name} className="w-full h-full rounded-full object-cover border-4 border-white dark:border-gray-900" />
           </div>
           
           <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{instructor.name}</h2>
           <p className="text-sm font-bold text-brand-600 dark:text-brand-400 mb-1">{instructor.role}</p>
           <p className="text-xs text-gray-500 mb-6">@ {instructor.company}</p>

           <div className="flex gap-3 mb-8">
             {instructor.socials.linkedin && <button className="p-2 bg-white dark:bg-gray-700 rounded-full text-blue-600 hover:scale-110 transition-transform shadow-sm"><Linkedin size={18} /></button>}
             {instructor.socials.twitter && <button className="p-2 bg-white dark:bg-gray-700 rounded-full text-sky-500 hover:scale-110 transition-transform shadow-sm"><Twitter size={18} /></button>}
             {instructor.socials.website && <button className="p-2 bg-white dark:bg-gray-700 rounded-full text-gray-600 dark:text-gray-300 hover:scale-110 transition-transform shadow-sm"><Globe size={18} /></button>}
           </div>

           <div className="w-full grid grid-cols-2 gap-4 text-center">
             <div className="p-3 bg-white dark:bg-gray-700 rounded-xl shadow-sm">
               <div className="text-lg font-bold text-gray-900 dark:text-white">{instructor.students}</div>
               <div className="text-[10px] text-gray-500 uppercase tracking-wider">Students</div>
             </div>
             <div className="p-3 bg-white dark:bg-gray-700 rounded-xl shadow-sm">
               <div className="text-lg font-bold text-gray-900 dark:text-white">{instructor.rating}</div>
               <div className="text-[10px] text-gray-500 uppercase tracking-wider">Rating</div>
             </div>
           </div>
        </div>

        {/* Right Content (Bio & Courses) */}
        <div className="w-full md:w-2/3 p-8 overflow-y-auto">
           <button onClick={onClose} className="absolute top-6 right-6 hidden md:block p-2 text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
             <X size={24} />
           </button>

           <section className="mb-8">
             <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
               <Users size={20} className="text-brand-500" /> About Me
             </h3>
             <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm md:text-base">
               {instructor.bio}
             </p>
             <div className="flex flex-wrap gap-2 mt-4">
               {instructor.skills.map((skill: string, i: number) => (
                 <span key={i} className="px-3 py-1 bg-brand-50 dark:bg-brand-900/20 text-brand-700 dark:text-brand-300 text-xs font-bold rounded-full">
                   {skill}
                 </span>
               ))}
             </div>
           </section>

           <section>
             <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
               <BookOpen size={20} className="text-brand-500" /> My Courses
             </h3>
             
             {instructorCourses.length > 0 ? (
               <div className="space-y-3">
                 {instructorCourses.map(course => (
                   <div key={course.id} className="flex gap-4 p-3 rounded-xl border border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors group cursor-pointer" onClick={() => navigate(`/courses/${course.id}`)}>
                      <div className="w-20 h-14 bg-gray-200 rounded-lg overflow-hidden shrink-0">
                        <img src={course.image} alt="" className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-bold text-gray-900 dark:text-white text-sm truncate group-hover:text-brand-600 transition-colors">{course.title}</h4>
                        <div className="flex items-center gap-3 text-xs text-gray-500 mt-1">
                          <span className="flex items-center gap-1"><Users size={12} /> {course.students}</span>
                          <span className="flex items-center gap-1"><Star size={12} className="text-yellow-500 fill-current" /> {course.rating}</span>
                        </div>
                      </div>
                      <div className="flex items-center text-gray-300 group-hover:text-brand-500">
                        <ChevronRight size={20} />
                      </div>
                   </div>
                 ))}
               </div>
             ) : (
               <p className="text-gray-500 italic text-sm">No active courses listed.</p>
             )}
           </section>
        </div>
      </div>
    </div>
  );
};

const AllInstructors: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedInstructor, setSelectedInstructor] = useState<any>(null);

  const categories = ["All", "Development", "Design", "Business", "Marketing", "Data Science", "Theology", "Finance"];

  const filteredInstructors = instructorsData.filter(instructor => {
    const matchesSearch = instructor.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          instructor.company.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || instructor.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="pt-24 pb-20 bg-white dark:bg-gray-900 min-h-screen transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in-up">
          <span className="inline-block py-1 px-3 rounded-full bg-brand-100 dark:bg-brand-900/30 text-brand-600 dark:text-brand-400 text-xs font-bold uppercase tracking-widest mb-4">
            World-Class Mentors
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Learn from the Industry's Best
          </h1>
          <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-8">
            Our instructors are industry leaders from top tech companies like Safaricom, Microsoft, and Google.
          </p>

          <div className="max-w-xl mx-auto relative">
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
              <Search className="text-gray-400" size={20} />
            </div>
            <input 
              type="text" 
              placeholder="Find an instructor by name or company..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full py-4 pl-12 pr-4 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-xl shadow-brand-900/5 dark:shadow-none text-gray-900 dark:text-white outline-none focus:ring-2 focus:ring-brand-500 transition-all"
            />
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 animate-fade-in-up [animation-delay:100ms]">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${
                selectedCategory === cat 
                  ? 'bg-brand-600 text-white shadow-lg shadow-brand-500/30' 
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredInstructors.map((instructor, index) => (
            <div 
              key={instructor.id} 
              className={`${cardStyle} p-6 flex flex-col items-center text-center hover:-translate-y-2 hover:shadow-xl transition-all duration-300 animate-fade-in-up group`}
              style={{ animationDelay: `${(index + 2) * 50}ms` }}
            >
              <div className="relative mb-4">
                <div className="w-24 h-24 rounded-full p-1 bg-gradient-to-br from-brand-500 to-purple-600">
                  <img src={instructor.image} alt={instructor.name} className="w-full h-full rounded-full object-cover border-4 border-white dark:border-gray-800" />
                </div>
                <div className="absolute -bottom-2 -right-2 bg-white dark:bg-gray-800 p-1.5 rounded-full shadow-md border border-gray-100 dark:border-gray-700">
                   <div className="w-6 h-6 bg-brand-100 dark:bg-brand-900/30 rounded-full flex items-center justify-center text-brand-600 text-[10px] font-bold">
                     <Briefcase size={12} />
                   </div>
                </div>
              </div>

              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1 group-hover:text-brand-600 transition-colors">{instructor.name}</h3>
              <p className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-1">{instructor.role}</p>
              <p className="text-xs text-brand-600 dark:text-brand-400 font-bold mb-4">@ {instructor.company}</p>

              <div className="w-full border-t border-gray-100 dark:border-gray-700 py-4 mb-4 grid grid-cols-2 gap-2">
                <div>
                  <p className="text-lg font-bold text-gray-900 dark:text-white">{instructor.students}</p>
                  <p className="text-[10px] text-gray-500 uppercase">Students</p>
                </div>
                <div>
                  <p className="text-lg font-bold text-gray-900 dark:text-white">{instructor.courses}</p>
                  <p className="text-[10px] text-gray-500 uppercase">Courses</p>
                </div>
              </div>

              <button 
                onClick={() => setSelectedInstructor(instructor)}
                className="w-full py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 font-bold text-sm text-gray-600 dark:text-gray-300 hover:bg-brand-600 hover:text-white hover:border-brand-600 dark:hover:bg-brand-600 dark:hover:border-brand-600 transition-all flex items-center justify-center gap-2"
              >
                View Profile <ExternalLink size={14} />
              </button>
            </div>
          ))}
        </div>

        {filteredInstructors.length === 0 && (
          <div className="text-center py-20">
            <div className="w-20 h-20 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4 text-gray-400">
              <Search size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">No instructors found</h3>
            <p className="text-gray-500">Try adjusting your search criteria</p>
          </div>
        )}

        <InstructorModal 
          isOpen={!!selectedInstructor} 
          instructor={selectedInstructor} 
          onClose={() => setSelectedInstructor(null)} 
        />

      </div>
    </div>
  );
};

export default AllInstructors;
