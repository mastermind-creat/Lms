
import React from 'react';
import { BookOpen, Users, Award, Briefcase, Monitor, Wand2, Database, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const Categories: React.FC = () => {
  const categories = [
    { name: 'Theology', desc: "Faith & Spiritual Studies", icon: <BookOpen size={24} /> },
    { name: 'Counseling', desc: "Psychology & Care", icon: <Users size={24} /> },
    { name: 'Leadership', desc: "Management & Influence", icon: <Award size={24} /> },
    { name: 'Business', desc: "Strategy & Entrepreneurship", icon: <Briefcase size={24} /> },
    { name: 'Development', desc: "Web, Mobile & Software", icon: <Monitor size={24} /> },
    { name: 'Marketing', desc: "Digital & Social Media", icon: <Wand2 size={24} /> },
    { name: 'Data Science', desc: "AI, ML & Analytics", icon: <Database size={24} /> },
    { name: 'Cybersecurity', desc: "Network & Info Sec", icon: <Shield size={24} /> },
  ];

  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Browse Categories</h2>

        <div className="relative">
          <div className="flex overflow-x-auto gap-4 pb-4 no-scrollbar snap-x">
            {categories.map((cat, index) => (
              <Link 
                key={index}
                to="/courses"
                className="min-w-[200px] flex flex-col items-center gap-3 p-6 rounded-2xl bg-transparent transition-transform hover:-translate-y-1 snap-start"
              >
                {/* Neumorphic Icon Container */}
                <div className="w-16 h-16 flex items-center justify-center text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 rounded-2xl shadow-[5px_5px_10px_#d1d1d1,-5px_-5px_10px_#ffffff] dark:shadow-[5px_5px_10px_#0b0c15,-5px_-5px_10px_#1e293b] group-hover:text-brand-500 transition-all duration-300">
                  {cat.icon}
                </div>
                <div className="text-center">
                  <h3 className="font-bold text-base text-gray-900 dark:text-gray-100">{cat.name}</h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{cat.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;
