
import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ArrowRight } from 'lucide-react';
import { Course } from '../data/courses';

interface CourseCardProps {
  course: Course;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  return (
    <div className="group flex flex-col bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-gray-200/50 hover:-translate-y-1 transition-all duration-300 h-full">
      {/* Image */}
      <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
        <img 
          src={course.image} 
          alt={course.title} 
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
        
        {/* Category Badge */}
        <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider text-gray-900 shadow-sm">
          {course.category}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex items-center justify-between mb-2">
          <div className="text-xs font-bold text-brand-600">{course.instructor}</div>
          <div className="flex items-center gap-1 text-xs font-bold text-gray-700 bg-gray-50 px-1.5 py-0.5 rounded">
            <Star size={10} className="text-yellow-500 fill-current" />
            {course.rating}
          </div>
        </div>

        <Link to={`/courses/${course.id}`} className="block mb-2">
          <h3 className="text-lg font-bold text-gray-900 leading-tight group-hover:text-brand-600 transition-colors line-clamp-2">
            {course.title}
          </h3>
        </Link>
        
        <p className="text-sm text-gray-500 line-clamp-2 mb-4 leading-relaxed">
          {course.description}
        </p>

        <div className="mt-auto pt-4 border-t border-gray-50 flex items-center justify-between">
          <span className={`text-sm font-bold ${course.price === 'Free' ? 'text-green-600' : 'text-gray-900'}`}>
            {course.price}
          </span>
          <Link 
            to={`/courses/${course.id}`}
            className="text-sm font-bold text-gray-900 hover:text-brand-600 flex items-center gap-1 transition-colors"
          >
            View Course <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
