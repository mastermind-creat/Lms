import React from 'react';
import { Monitor, Briefcase, PenTool, Laptop, Calculator, Wand2, Database, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const Categories: React.FC = () => {
  const categories = [
    { name: 'Development', icon: <Monitor size={24} /> },
    { name: 'Business', icon: <Briefcase size={24} /> },
    { name: 'Design', icon: <PenTool size={24} /> },
    { name: 'IT & Software', icon: <Laptop size={24} /> },
    { name: 'Data Science', icon: <Database size={24} /> },
    { name: 'Marketing', icon: <Wand2 size={24} /> },
    { name: 'Cybersecurity', icon: <Shield size={24} /> },
    { name: 'Finance', icon: <Calculator size={24} /> },
  ];

  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Top Categories</h2>

        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-4">
          {categories.map((cat, index) => (
            <Link 
              key={index}
              to="/courses"
              className="group flex flex-col items-center gap-3 p-4 transition-transform hover:-translate-y-1"
            >
              {/* Neumorphic Icon Container */}
              <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 rounded-2xl shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff] dark:shadow-[5px_5px_10px_#1a1a1a,-5px_-5px_10px_#333333] hover:text-brand-500 transition-colors">
                {cat.icon}
              </div>
              <span className="font-bold text-sm text-gray-700 dark:text-gray-300 text-center">{cat.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;