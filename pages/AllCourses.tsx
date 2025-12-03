
import React, { useState } from 'react';
import { Search, BookOpen, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { courses } from '../data/courses';

const AllCourses: React.FC = () => {
  const categories = ["All", "Development", "Design", "Marketing", "Data Science", "Finance", "AgriTech", "Fintech"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredCourses = activeCategory === "All" 
    ? courses 
    : courses.filter(c => c.category === activeCategory || (activeCategory === "Development" && (c.category === "Web Dev" || c.category === "Technology")));

  return (
    <div className="pt-24 md:pt-32 pb-20 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Minimal Header */}
        <div className="mb-8 md:mb-12">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 tracking-tight">Course Catalog</h1>
          
          <div className="flex flex-col md:flex-row gap-4 justify-between items-start md:items-center">
            {/* Categories as clean tabs */}
            <div className="flex gap-1 overflow-x-auto pb-2 no-scrollbar w-full md:w-auto mask-gradient">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3 py-1.5 rounded text-xs md:text-sm font-medium transition-colors whitespace-nowrap shrink-0 ${
                    activeCategory === cat 
                      ? 'bg-gray-900 text-white' 
                      : 'text-gray-500 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Simple Search */}
            <div className="relative w-full md:w-64 shrink-0">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={14} />
              <input 
                type="text" 
                placeholder="Search..." 
                className="w-full bg-gray-50 border-none rounded-lg py-2 pl-9 pr-4 text-xs md:text-sm focus:outline-none focus:ring-1 focus:ring-gray-300 transition-all placeholder:text-gray-400"
              />
            </div>
          </div>
        </div>

        {/* Responsive Grid: 2 cols on mobile, 3 on md, 4 on lg */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6">
          {filteredCourses.map((course) => (
            <Link to={`/courses/${course.id}`} key={course.id} className="group flex flex-col cursor-pointer hover:-translate-y-1 transition-transform duration-300">
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden rounded-lg bg-gray-100 mb-3 md:mb-4">
                <img 
                  src={course.image} 
                  alt={course.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Price Badge */}
                <div className={`absolute top-1.5 right-1.5 md:top-2 md:right-2 backdrop-blur-md px-1.5 py-0.5 md:px-2.5 md:py-1 rounded-md text-[8px] md:text-[10px] font-bold shadow-sm ${
                  course.price === 'Free' 
                    ? 'bg-green-500/90 text-white' 
                    : 'bg-white/90 text-gray-900'
                }`}>
                  {course.price}
                </div>
              </div>

              {/* Content - Dense layout */}
              <div className="flex flex-col flex-grow">
                <div className="mb-1">
                   <h3 className="text-xs md:text-sm font-bold text-gray-900 leading-tight group-hover:text-brand-600 transition-colors line-clamp-2 pr-1">
                    {course.title}
                  </h3>
                </div>

                <div className="flex items-center gap-2 mb-2 md:mb-3 text-[10px] md:text-[11px] text-gray-500 font-medium">
                  <span>{course.level}</span>
                  <span className="w-0.5 h-0.5 bg-gray-300 rounded-full"></span>
                  <span>{course.duration}</span>
                </div>

                <div className="mt-auto flex items-center justify-between border-t border-gray-100 pt-2 md:pt-3">
                   <div className="flex items-center gap-1.5">
                     <span className="text-[10px] md:text-[11px] text-gray-600 truncate max-w-[80px] md:max-w-none">{course.instructor}</span>
                   </div>
                   <div className="flex items-center gap-0.5 md:gap-1 text-[10px] md:text-[11px] font-bold text-gray-900">
                     <Star size={10} className="text-gray-900 fill-current md:w-3 md:h-3" />
                     {course.rating}
                   </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        {/* Empty State */}
        {filteredCourses.length === 0 && (
          <div className="flex flex-col items-center justify-center py-32 text-gray-400">
            <BookOpen size={48} strokeWidth={1} className="mb-4 opacity-50" />
            <p className="text-sm font-medium">No courses found matching that category.</p>
          </div>
        )}

      </div>
    </div>
  );
};

export default AllCourses;
