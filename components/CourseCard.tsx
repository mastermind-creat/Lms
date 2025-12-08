import React from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { Course } from '../data/courses';

interface CourseCardProps {
  course: Course;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  return (
    <Link 
      to={`/courses/${course.id}`} 
      className="group flex flex-col w-full h-full bg-transparent hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors p-1"
    >
      {/* Image */}
      <div className="relative aspect-video w-full overflow-hidden border border-gray-200 dark:border-gray-700 rounded-sm mb-2">
        <img 
          src={course.image} 
          alt={course.title} 
          className="w-full h-full object-cover group-hover:opacity-90 transition-opacity"
        />
        {course.isPopular && (
           <div className="absolute top-2 left-0 bg-yellow-200 text-yellow-900 text-[10px] font-bold px-2 py-0.5 uppercase tracking-wide">
             Bestseller
           </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col gap-0.5">
        <h3 className="font-bold text-sm md:text-base text-gray-900 dark:text-white leading-tight line-clamp-2 group-hover:text-brand-900 dark:group-hover:text-brand-400 transition-colors">
          {course.title}
        </h3>
        
        <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
          {course.instructor}
        </p>
        
        <div className="flex items-center gap-1 mb-1">
          <span className="font-bold text-sm text-brand-900 dark:text-brand-400">{course.rating}</span>
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                size={12} 
                className={`${i < Math.floor(course.rating) ? 'text-yellow-500 fill-current' : 'text-gray-300'}`} 
              />
            ))}
          </div>
          <span className="text-xs text-gray-400">({(course.students / 10).toFixed(0)})</span>
        </div>
        
        <div className="flex items-center gap-2">
          <span className="font-bold text-base text-gray-900 dark:text-white">
            {course.price === 'Free' ? 'Free' : course.price}
          </span>
          {course.price !== 'Free' && (
             <span className="text-xs text-gray-400 line-through decoration-gray-400">
               KES {(parseInt(course.price.replace(/[^0-9]/g, '')) * 1.5).toLocaleString()}
             </span>
          )}
        </div>
      </div>
    </Link>
  );
};

export default CourseCard;