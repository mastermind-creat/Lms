
import React from 'react';
import { Monitor, Briefcase, PenTool, Laptop, Calculator, Wand2, Database, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const Categories: React.FC = () => {
  const categories = [
    { name: 'Development', icon: <Monitor size={24} className="w-4 h-4 md:w-6 md:h-6" />, count: '120+ Courses', color: 'bg-blue-50 text-blue-600' },
    { name: 'Business', icon: <Briefcase size={24} className="w-4 h-4 md:w-6 md:h-6" />, count: '85+ Courses', color: 'bg-purple-50 text-purple-600' },
    { name: 'Design', icon: <PenTool size={24} className="w-4 h-4 md:w-6 md:h-6" />, count: '40+ Courses', color: 'bg-pink-50 text-pink-600' },
    { name: 'IT & Software', icon: <Laptop size={24} className="w-4 h-4 md:w-6 md:h-6" />, count: '90+ Courses', color: 'bg-cyan-50 text-cyan-600' },
    { name: 'Data Science', icon: <Database size={24} className="w-4 h-4 md:w-6 md:h-6" />, count: '35+ Courses', color: 'bg-green-50 text-green-600' },
    { name: 'Marketing', icon: <Wand2 size={24} className="w-4 h-4 md:w-6 md:h-6" />, count: '50+ Courses', color: 'bg-orange-50 text-orange-600' },
    { name: 'Cybersecurity', icon: <Shield size={24} className="w-4 h-4 md:w-6 md:h-6" />, count: '25+ Courses', color: 'bg-red-50 text-red-600' },
    { name: 'Finance', icon: <Calculator size={24} className="w-4 h-4 md:w-6 md:h-6" />, count: '30+ Courses', color: 'bg-yellow-50 text-yellow-600' },
  ];

  return (
    <section className="py-12 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12 animate-fade-in-up">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-2 md:mb-4">Top Categories</h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-xs md:text-base">
            Explore our comprehensive catalog across various domains.
          </p>
        </div>

        <div className="grid grid-cols-4 gap-2 md:gap-6">
          {categories.map((cat, index) => (
            <Link 
              key={index}
              to="/courses"
              className="group bg-white p-2 md:p-6 rounded-xl md:rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 flex flex-col items-center text-center animate-fade-in-up h-full"
              style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'both' }}
            >
              <div className={`w-8 h-8 md:w-14 md:h-14 rounded-lg md:rounded-xl flex items-center justify-center mb-2 md:mb-4 transition-transform group-hover:scale-110 ${cat.color}`}>
                {cat.icon}
              </div>
              <h3 className="font-bold text-gray-900 mb-0.5 md:mb-1 group-hover:text-brand-600 transition-colors text-[9px] md:text-base leading-tight">{cat.name}</h3>
              <p className="hidden md:block text-xs text-gray-400 font-medium">{cat.count}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
