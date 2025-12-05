
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import CourseCard from './CourseCard';
import { Course } from '../data/courses';

interface CourseSectionProps {
  title: string;
  subtitle?: string;
  courses: Course[];
  bgColor?: string;
  viewAllLink?: string;
  dark?: boolean;
}

const CourseSection: React.FC<CourseSectionProps> = ({ 
  title, 
  subtitle, 
  courses, 
  bgColor = 'bg-white',
  viewAllLink = '/courses',
  dark = false
}) => {
  return (
    <section className={`py-12 md:py-20 ${bgColor} relative overflow-hidden transition-colors duration-300`}>
      {/* Decorative background glow */}
      {dark && (
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-500/10 rounded-full blur-[100px] pointer-events-none"></div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              {dark && <Sparkles size={16} className="text-brand-400 animate-pulse" />}
              <h2 className={`text-2xl md:text-3xl font-bold tracking-tight ${dark ? 'text-white' : 'text-gray-900 dark:text-white'}`}>
                {title}
              </h2>
            </div>
            {subtitle && (
              <p className={`text-sm md:text-base max-w-2xl ${dark ? 'text-gray-400' : 'text-gray-500 dark:text-gray-400'}`}>
                {subtitle}
              </p>
            )}
          </div>
          {viewAllLink && (
            <Link 
              to={viewAllLink} 
              className={`hidden md:flex items-center gap-2 text-xs md:text-sm font-bold transition-all group px-4 py-2 rounded-full border ${
                dark 
                  ? 'text-brand-300 border-brand-500/30 hover:bg-brand-500/10' 
                  : 'text-brand-600 border-brand-100 hover:bg-brand-50 dark:text-brand-400 dark:border-brand-900 dark:hover:bg-brand-900/50'
              }`}
            >
              View All <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          )}
        </div>

        {/* Responsive Grid: 4 cols on mobile (squeezed) and desktop */}
        <div className="grid grid-cols-4 gap-2 md:gap-5 lg:gap-6">
          {courses.map((course, index) => (
            <div 
              key={course.id} 
              className="animate-fade-in-up" 
              style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'both' }}
            >
              <CourseCard course={course} />
            </div>
          ))}
        </div>
        
        {viewAllLink && (
          <div className="mt-8 text-center md:hidden">
            <Link 
              to={viewAllLink} 
              className={`inline-flex items-center justify-center gap-2 w-full px-6 py-3 border rounded-xl text-sm font-bold transition-colors ${
                dark 
                ? 'border-gray-700 text-white hover:bg-gray-800' 
                : 'border-gray-200 text-gray-900 hover:bg-gray-50 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800'
              }`}
            >
              View All <ArrowRight size={16} />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default CourseSection;
