import React, { useState, useEffect } from 'react';
import { Search, Filter, X } from 'lucide-react';
import { courses } from '../data/courses';
import CourseCard from '../components/CourseCard';
import { useLocation } from 'react-router-dom';

const AllCourses: React.FC = () => {
  const categories = ["All", "Development", "Design", "Marketing", "Data Science", "Finance", "AgriTech", "Fintech"];
  const location = useLocation();
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  // Initialize search from navigation state (e.g., from Instructor Profile)
  useEffect(() => {
    if (location.state?.searchQuery) {
      setSearchQuery(location.state.searchQuery);
    }
  }, [location.state]);

  const filteredCourses = courses.filter(course => {
    const matchesCategory = activeCategory === "All" || course.category === activeCategory || (activeCategory === "Development" && (course.category === "Web Dev" || course.category === "Technology"));
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) || course.instructor.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-[72px] min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-8">
        
        {/* Header & Search */}
        <div className="flex flex-col md:flex-row justify-between items-end md:items-center mb-8 gap-4">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
            Course Catalog
          </h1>

          <div className="relative w-full md:w-96">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search size={18} className="text-gray-400" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search courses, skills, instructors..."
              className="w-full bg-gray-100 dark:bg-gray-800 border-none rounded-2xl py-3 pl-10 pr-10 text-gray-900 dark:text-white outline-none focus:ring-2 focus:ring-brand-500/50 transition-all shadow-inner"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery("")}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
              >
                <X size={16} />
              </button>
            )}
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Sidebar Filters (Desktop) - Neumorphic Style */}
          <div className="hidden lg:block w-64 flex-shrink-0 space-y-8">
             <div>
               <h3 className="font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                 <Filter size={18} className="text-brand-500" /> Categories
               </h3>
               <div className="flex flex-col gap-3">
                 {categories.map(cat => (
                   <button 
                     key={cat}
                     onClick={() => setActiveCategory(cat)}
                     className={`w-full text-left px-5 py-3 rounded-xl text-sm font-bold transition-all duration-200 ${
                       activeCategory === cat 
                         ? 'text-brand-600 dark:text-brand-400 bg-gray-100 dark:bg-gray-800 shadow-[inset_3px_3px_6px_rgba(0,0,0,0.1),inset_-3px_-3px_6px_rgba(255,255,255,0.8)] dark:shadow-[inset_3px_3px_6px_rgba(0,0,0,0.6),inset_-3px_-3px_6px_rgba(255,255,255,0.05)]' 
                         : 'text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-900 shadow-[4px_4px_8px_#d1d1d1,-4px_-4px_8px_#ffffff] dark:shadow-[4px_4px_8px_#0b0c15,-4px_-4px_8px_#171c2b] hover:transform hover:-translate-y-0.5'
                     }`}
                   >
                     {cat}
                   </button>
                 ))}
               </div>
             </div>
          </div>

          {/* Course Grid */}
          <div className="flex-grow">
             {/* Mobile Filters - Neumorphic Horizontal Scroll */}
             <div className="lg:hidden mb-6 flex gap-3 overflow-x-auto pb-4 no-scrollbar px-1">
                {categories.map(cat => (
                   <button 
                     key={cat}
                     onClick={() => setActiveCategory(cat)}
                     className={`px-5 py-2.5 rounded-xl text-sm font-bold whitespace-nowrap transition-all duration-200 flex-shrink-0 ${
                       activeCategory === cat 
                         ? 'text-brand-600 dark:text-brand-400 bg-gray-100 dark:bg-gray-800 shadow-[inset_3px_3px_6px_rgba(0,0,0,0.1),inset_-3px_-3px_6px_rgba(255,255,255,0.8)] dark:shadow-[inset_3px_3px_6px_rgba(0,0,0,0.6),inset_-3px_-3px_6px_rgba(255,255,255,0.05)]' 
                         : 'text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-900 shadow-[3px_3px_6px_#d1d1d1,-3px_-3px_6px_#ffffff] dark:shadow-[3px_3px_6px_#0b0c15,-3px_-3px_6px_#171c2b]'
                     }`}
                   >
                     {cat}
                   </button>
                ))}
             </div>

             {filteredCourses.length > 0 ? (
               <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {filteredCourses.map((course, index) => (
                    <div key={course.id} className="animate-fade-in-up" style={{ animationDelay: `${index * 50}ms` }}>
                      <CourseCard course={course} />
                    </div>
                  ))}
               </div>
             ) : (
               <div className="flex flex-col items-center justify-center py-20 text-center">
                 <div className="w-20 h-20 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mb-4">
                   <Search size={32} className="text-gray-400" />
                 </div>
                 <h3 className="text-xl font-bold text-gray-900 dark:text-white">No courses found</h3>
                 <p className="text-gray-500">Try adjusting your search or filters.</p>
               </div>
             )}
          </div>
        </div>

      </div>
    </div>
  );
};

export default AllCourses;