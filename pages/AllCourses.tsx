import React, { useState } from 'react';
import { Search, BookOpen } from 'lucide-react';
import { courses } from '../data/courses';
import CourseCard from '../components/CourseCard';

const AllCourses: React.FC = () => {
  const categories = ["All", "Development", "Design", "Marketing", "Data Science", "Finance", "AgriTech", "Fintech"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredCourses = activeCategory === "All" 
    ? courses 
    : courses.filter(c => c.category === activeCategory || (activeCategory === "Development" && (c.category === "Web Dev" || c.category === "Technology")));

  return (
    <div className="pt-24 md:pt-32 pb-20 min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        
        {/* Minimal Header with Fade In */}
        <div className="mb-6 md:mb-12 animate-fade-in-up">
          <h1 className="text-xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight px-2 md:px-0">Course Catalog</h1>
          
          <div className="flex flex-col md:flex-row gap-4 justify-between items-start md:items-center px-2 md:px-0">
            {/* Categories as clean tabs */}
            <div className="flex gap-1 overflow-x-auto pb-2 no-scrollbar w-full md:w-auto mask-gradient">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3 py-1.5 rounded-full text-[10px] md:text-sm font-medium transition-all duration-300 whitespace-nowrap shrink-0 ${
                    activeCategory === cat 
                      ? 'bg-gray-900 dark:bg-brand-600 text-white shadow-lg shadow-gray-900/20 dark:shadow-brand-900/20 transform scale-105' 
                      : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Simple Search */}
            <div className="relative w-full md:w-64 shrink-0 group">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500 group-hover:text-brand-500 dark:group-hover:text-brand-400 transition-colors" size={14} />
              <input 
                type="text" 
                placeholder="Search..." 
                className="w-full bg-gray-50 dark:bg-gray-800 border-none rounded-full py-2 pl-9 pr-4 text-xs md:text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:bg-white dark:focus:bg-gray-900 transition-all placeholder:text-gray-400 dark:placeholder:text-gray-500 text-gray-900 dark:text-white shadow-sm"
              />
            </div>
          </div>
        </div>

        {/* Responsive Grid: FORCED 4 COLUMNS ON MOBILE as requested */}
        {/* Gap is reduced to 1.5 (6px) on mobile to fit content */}
        <div className="grid grid-cols-4 gap-1.5 md:gap-6 min-h-[50vh]">
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
          <div className="flex flex-col items-center justify-center py-32 text-gray-400 dark:text-gray-500 animate-fade-in">
            <BookOpen size={48} strokeWidth={1} className="mb-4 opacity-50" />
            <p className="text-sm font-medium">No courses found matching that category.</p>
          </div>
        )}

      </div>
    </div>
  );
};

export default AllCourses;