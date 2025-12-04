
import React, { useState } from 'react';
import { Search, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import { courses } from '../data/courses';
import CourseCard from '../components/CourseCard';

const AllCourses: React.FC = () => {
  const categories = ["All", "Development", "Design", "Marketing", "Data Science", "Finance", "AgriTech", "Fintech"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredCourses = activeCategory === "All" 
    ? courses 
    : courses.filter(c => c.category === activeCategory || (activeCategory === "Development" && (c.category === "Web Dev" || c.category === "Technology")));

  return (
    <div className="pt-24 md:pt-32 pb-20 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Minimal Header with Fade In */}
        <div className="mb-8 md:mb-12 animate-fade-in-up">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 tracking-tight">Course Catalog</h1>
          
          <div className="flex flex-col md:flex-row gap-4 justify-between items-start md:items-center">
            {/* Categories as clean tabs */}
            <div className="flex gap-1 overflow-x-auto pb-2 no-scrollbar w-full md:w-auto mask-gradient">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3 py-1.5 rounded-full text-xs md:text-sm font-medium transition-all duration-300 whitespace-nowrap shrink-0 ${
                    activeCategory === cat 
                      ? 'bg-gray-900 text-white shadow-lg shadow-gray-900/20 transform scale-105' 
                      : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Simple Search */}
            <div className="relative w-full md:w-64 shrink-0 group">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-hover:text-brand-500 transition-colors" size={14} />
              <input 
                type="text" 
                placeholder="Search..." 
                className="w-full bg-gray-50 border-none rounded-full py-2.5 pl-9 pr-4 text-xs md:text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:bg-white transition-all placeholder:text-gray-400 shadow-sm"
              />
            </div>
          </div>
        </div>

        {/* Responsive Grid: 2 cols on mobile, 3 on md, 4 on lg */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6 min-h-[50vh]">
          {filteredCourses.map((course, index) => (
            <div 
              key={course.id} 
              className="animate-fade-in-up" 
              style={{ animationDelay: `${index * 50}ms`, animationFillMode: 'both' }}
            >
              <CourseCard course={course} />
            </div>
          ))}
        </div>
        
        {/* Empty State */}
        {filteredCourses.length === 0 && (
          <div className="flex flex-col items-center justify-center py-32 text-gray-400 animate-fade-in">
            <BookOpen size={48} strokeWidth={1} className="mb-4 opacity-50" />
            <p className="text-sm font-medium">No courses found matching that category.</p>
          </div>
        )}

      </div>
    </div>
  );
};

export default AllCourses;
