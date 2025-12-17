
import React from 'react';
import { Linkedin, Twitter, ExternalLink, Star, CheckCircle, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const InstructorSpotlight: React.FC = () => {
  const instructors = [
    {
      name: "Kevin Omondi",
      role: "Senior Engineer",
      company: "Safaricom",
      image: "https://i.pravatar.cc/150?u=Kevin",
      expertise: "Fintech & APIs",
      students: "12k+",
      rating: 4.9,
      isOnline: true,
      topMentor: true
    },
    {
      name: "Dr. Zainab Ahmed",
      role: "Data Scientist",
      company: "Microsoft Africa",
      image: "https://i.pravatar.cc/150?u=Zainab",
      expertise: "AI & Machine Learning",
      students: "8.5k+",
      rating: 5.0,
      isOnline: false,
      topMentor: true
    },
    {
      name: "Brian Kipkorir",
      role: "Product Designer",
      company: "Andela",
      image: "https://i.pravatar.cc/150?u=Brian",
      expertise: "UI/UX & Systems",
      students: "10k+",
      rating: 4.8,
      isOnline: true,
      topMentor: false
    },
    {
      name: "Grace Wanjiku",
      role: "Cloud Architect",
      company: "Google",
      image: "https://i.pravatar.cc/150?u=Grace",
      expertise: "AWS & Azure",
      students: "6k+",
      rating: 4.9,
      isOnline: false,
      topMentor: false
    }
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800/50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <span className="text-brand-500 font-bold text-xs uppercase tracking-widest mb-2 block">World-Class Mentors</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              Learn from the Industry's Best
            </h2>
          </div>
          <Link 
            to="/signup" 
            state={{ role: 'instructor' }} // Auto-switch tab on signup page
            className="group text-brand-600 dark:text-brand-400 font-bold text-sm hover:underline flex items-center gap-1 transition-all"
          >
            Become an Instructor <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {instructors.map((instructor, index) => (
            <div key={index} className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden">
              
              {/* Cool Feature: Top Mentor Badge */}
              {instructor.topMentor && (
                <div className="absolute top-0 right-0 bg-yellow-400 text-yellow-900 text-[10px] font-bold px-3 py-1 rounded-bl-xl shadow-sm z-10 flex items-center gap-1">
                  <AwardIcon size={12} /> Top Rated
                </div>
              )}

              {/* Hover Gradient Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-500/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="flex items-center gap-4 mb-4 relative z-10">
                <div className="relative">
                  <div className="w-16 h-16 rounded-full p-1 bg-gradient-to-br from-brand-500 to-purple-600">
                    <img src={instructor.image} alt={instructor.name} className="w-full h-full rounded-full object-cover border-2 border-white dark:border-gray-900" />
                  </div>
                  {/* Cool Feature: Live Indicator */}
                  {instructor.isOnline && (
                    <span className="absolute bottom-1 right-1 w-3.5 h-3.5 bg-green-500 border-2 border-white dark:border-gray-900 rounded-full animate-pulse" title="Online Now"></span>
                  )}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white text-base flex items-center gap-1">
                    {instructor.name}
                    <CheckCircle size={14} className="text-blue-500" fill="currentColor" color="white" />
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{instructor.role}</p>
                  <p className="text-[10px] font-bold text-brand-600 dark:text-brand-400 mt-0.5">@ {instructor.company}</p>
                </div>
              </div>
              
              <div className="space-y-3 relative z-10">
                <div className="flex justify-between text-sm py-2 border-t border-gray-100 dark:border-gray-800">
                  <span className="text-gray-500">Rating</span>
                  <div className="flex items-center gap-1 font-bold text-gray-900 dark:text-white">
                    <Star size={14} className="text-yellow-400 fill-current" /> {instructor.rating}
                  </div>
                </div>
                <div className="flex justify-between text-sm py-2 border-t border-gray-100 dark:border-gray-800">
                  <span className="text-gray-500">Expertise</span>
                  <span className="font-medium text-gray-900 dark:text-white truncate max-w-[100px] text-right">{instructor.expertise}</span>
                </div>
                <div className="flex justify-between text-sm py-2 border-t border-gray-100 dark:border-gray-800">
                  <span className="text-gray-500">Students</span>
                  <span className="font-medium text-gray-900 dark:text-white">{instructor.students}</span>
                </div>
              </div>

              <div className="flex gap-2 mt-4 pt-4 border-t border-gray-100 dark:border-gray-800 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 relative z-10">
                <button className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg text-blue-600 hover:bg-blue-50 transition-colors"><Linkedin size={18} /></button>
                <button className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg text-sky-500 hover:bg-sky-50 transition-colors"><Twitter size={18} /></button>
                <Link to="/courses" className="flex-1 flex items-center justify-center py-2 bg-brand-600 text-white rounded-lg text-xs font-bold hover:bg-brand-700 transition-colors shadow-lg shadow-brand-500/20">
                  View Courses
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Helper Icon for the badge
const AwardIcon = ({ size }: { size: number }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="3" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <circle cx="12" cy="8" r="7"></circle>
    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
  </svg>
);

export default InstructorSpotlight;
