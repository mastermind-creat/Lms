
import React from 'react';
import { TrendingUp } from 'lucide-react';

const TrendingMarquee: React.FC = () => {
  const skills = [
    "Flutter Mobile Dev", "M-PESA Integration", "React Native", "Python for Finance", 
    "Cybersecurity Ops", "Data Science", "AWS Cloud", "UI/UX Design", "DevOps", 
    "Blockchain", "Digital Marketing", "AgriTech IoT"
  ];

  return (
    <div className="bg-brand-900 text-white py-3 overflow-hidden flex items-center relative z-20">
      <div className="bg-brand-800 px-4 py-1 ml-4 rounded-lg text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-lg z-10 shrink-0">
        <TrendingUp size={14} className="animate-pulse" /> Trending Now
      </div>
      <div className="flex animate-scroll whitespace-nowrap">
        {/* Triple duplication for seamless infinite scroll */}
        {[...skills, ...skills, ...skills].map((skill, index) => (
          <div key={index} className="mx-6 flex items-center">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-500 mr-3"></span>
            <span className="text-xs md:text-sm font-medium text-brand-100">{skill}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingMarquee;
