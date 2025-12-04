
import React from 'react';
import { Link } from 'react-router-dom';
import { Star, User, ShoppingCart, Heart } from 'lucide-react';
import { Course } from '../data/courses';

interface CourseCardProps {
  course: Course;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  const handleAction = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    // In a real app, this would trigger global state updates
    console.log("Action triggered");
  };

  return (
    <Link 
      to={`/courses/${course.id}`} 
      className="group relative flex flex-col bg-white rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1 h-full border border-gray-100"
    >
      {/* Illuminated Hover Border Effect */}
      <div className="absolute inset-0 rounded-xl ring-2 ring-transparent group-hover:ring-brand-100 transition-all duration-500 pointer-events-none z-10"></div>
      
      {/* Image Container */}
      <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
        <img 
          src={course.image} 
          alt={course.title} 
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        {/* Dark Gradient Overlay on Hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Category Badge */}
        <div className="absolute top-2 left-2 bg-white/95 backdrop-blur-md px-2 py-0.5 rounded text-[9px] md:text-[10px] font-bold uppercase tracking-wider text-gray-900 shadow-sm z-10">
          {course.category}
        </div>

        {/* Action Buttons (Visible on Hover/Touch) */}
        <div className="absolute top-2 right-2 flex flex-col gap-2 z-20 translate-x-10 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 ease-out delay-75">
          <button 
            onClick={handleAction}
            className="p-1.5 md:p-2 bg-white/90 backdrop-blur-md rounded-full text-gray-700 hover:text-red-500 hover:bg-white shadow-sm transition-colors border border-gray-100"
            aria-label="Add to Wishlist"
          >
            <Heart size={14} className="md:w-4 md:h-4" />
          </button>
          <button 
            onClick={handleAction}
            className="p-1.5 md:p-2 bg-white/90 backdrop-blur-md rounded-full text-gray-700 hover:text-brand-600 hover:bg-white shadow-sm transition-colors border border-gray-100"
            aria-label="Add to Cart"
          >
            <ShoppingCart size={14} className="md:w-4 md:h-4" />
          </button>
        </div>

        {/* Price Badge */}
        <div className={`absolute bottom-2 right-2 px-2 py-0.5 rounded text-[9px] md:text-[10px] font-bold shadow-sm z-10 backdrop-blur-md ${
          course.price === 'Free' 
            ? 'bg-green-500/90 text-white' 
            : 'bg-white/90 text-gray-900'
        }`}>
          {course.price}
        </div>
      </div>

      {/* Content - Compact Layout */}
      <div className="p-3 md:p-4 flex flex-col flex-grow relative bg-white">
        
        {/* Title */}
        <h3 className="text-xs md:text-sm font-bold text-gray-900 leading-snug mb-1.5 md:mb-2 line-clamp-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-brand-600 group-hover:to-accent-500 transition-colors">
          {course.title}
        </h3>
        
        {/* Description - Hidden on very small screens, visible on md */}
        <p className="hidden md:block text-[11px] text-gray-500 line-clamp-2 mb-3 leading-relaxed">
          {course.description}
        </p>

        {/* Footer Info */}
        <div className="mt-auto flex items-center justify-between border-t border-gray-50 pt-2 md:pt-3">
          <div className="flex items-center gap-1.5 min-w-0">
             <div className="w-4 h-4 rounded-full bg-gray-100 flex items-center justify-center shrink-0">
               <User size={8} className="text-gray-500" />
             </div>
             <span className="text-[10px] md:text-[11px] text-gray-600 font-medium truncate">
               {course.instructor}
             </span>
          </div>
          
          <div className="flex items-center gap-0.5 text-[10px] md:text-[11px] font-bold text-gray-900 shrink-0 bg-yellow-50 px-1.5 py-0.5 rounded border border-yellow-100">
            <Star size={8} className="text-yellow-500 fill-current md:w-2.5 md:h-2.5" />
            {course.rating}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CourseCard;
