import React, { useState } from 'react';
import { Search, BookOpen, Filter } from 'lucide-react';
import { courses } from '../data/courses';
import CourseCard from '../components/CourseCard';

const AllCourses: React.FC = () => {
  const categories = ["All", "Development", "Design", "Marketing", "Data Science", "Finance", "AgriTech", "Fintech"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredCourses = activeCategory === "All" 
    ? courses 
    : courses.filter(c => c.category === activeCategory || (activeCategory === "Development" && (c.category === "Web Dev" || c.category === "Technology")));

  return (
    <div className="pt-[72px] min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-8">
        
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8">
          All Courses
        </h1>

        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Sidebar Filters (Desktop) */}
          <div className="hidden lg:block w-64 flex-shrink-0 space-y-6">
             <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
               <h3 className="font-bold text-gray-900 dark:text-white mb-3">Categories</h3>
               <div className="flex flex-col gap-2">
                 {categories.map(cat => (
                   <label key={cat} className="flex items-center gap-2 cursor-pointer group">
                     <input 
                       type="radio" 
                       name="category"
                       checked={activeCategory === cat}
                       onChange={() => setActiveCategory(cat)}
                       className="w-4 h-4 text-brand-900 focus:ring-brand-500 border-gray-300"
                     />
                     <span className={`text-sm ${activeCategory === cat ? 'text-brand-900 font-bold' : 'text-gray-600 dark:text-gray-400 group-hover:text-brand-900'}`}>
                       {cat}
                     </span>
                   </label>
                 ))}
               </div>
             </div>
             
             <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
               <h3 className="font-bold text-gray-900 dark:text-white mb-3">Ratings</h3>
               <div className="space-y-2">
                 {[4.5, 4.0, 3.5, 3.0].map(rating => (
                   <div key={rating} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                     <input type="radio" name="rating" className="w-4 h-4" />
                     <span className="flex items-center gap-1">
                       <span className="text-yellow-500 font-bold">★★★★★</span> {rating} & up
                     </span>
                   </div>
                 ))}
               </div>
             </div>
          </div>

          {/* Course Grid */}
          <div className="flex-grow">
             {/* Mobile Filters */}
             <div className="lg:hidden mb-4 flex gap-2 overflow-x-auto pb-2 no-scrollbar">
                <button className="flex items-center gap-2 px-4 py-3 border border-gray-900 dark:border-white text-gray-900 dark:text-white font-bold text-sm whitespace-nowrap">
                  <Filter size={16} /> Filter
                </button>
                {categories.map(cat => (
                   <button 
                     key={cat}
                     onClick={() => setActiveCategory(cat)}
                     className={`px-4 py-3 border text-sm font-bold whitespace-nowrap ${
                       activeCategory === cat 
                         ? 'bg-gray-900 text-white border-gray-900' 
                         : 'border-gray-300 text-gray-700 bg-transparent'
                     }`}
                   >
                     {cat}
                   </button>
                ))}
             </div>

             <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {filteredCourses.map((course) => (
                  <CourseCard key={course.id} course={course} />
                ))}
             </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AllCourses;