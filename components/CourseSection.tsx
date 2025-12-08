import React from 'react';
import { Link } from 'react-router-dom';
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
  dark = false
}) => {
  return (
    <section className={`py-8 md:py-12 ${bgColor} dark:bg-gray-900 transition-colors duration-300 border-b border-gray-100 dark:border-gray-800`}>
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
        <div className="mb-6 flex justify-between items-end">
          <div>
            <h2 className={`text-xl md:text-2xl font-bold tracking-tight mb-2 ${dark ? 'text-white' : 'text-gray-900 dark:text-white'}`}>
              {title}
            </h2>
            {subtitle && (
              <p className={`text-sm md:text-base max-w-2xl ${dark ? 'text-gray-400' : 'text-gray-600 dark:text-gray-400'}`}>
                {subtitle}
              </p>
            )}
          </div>
          {/* Scroll Hint */}
          <div className="hidden md:block text-xs font-bold text-brand-600 dark:text-brand-400 uppercase tracking-widest animate-pulse">
            Scroll for more &rarr;
          </div>
        </div>

        {/* Horizontal Scroll Container (Udemy Slider Style) */}
        <div className="relative group">
          {/* Fading Edges for scroll indication */}
          <div className="absolute top-0 left-0 h-full w-8 bg-gradient-to-r from-white dark:from-gray-900 to-transparent z-10 pointer-events-none md:hidden"></div>
          <div className="absolute top-0 right-0 h-full w-8 bg-gradient-to-l from-white dark:from-gray-900 to-transparent z-10 pointer-events-none md:hidden"></div>

          <div className="flex overflow-x-auto gap-4 pb-6 pt-2 px-1 no-scrollbar snap-x snap-mandatory scroll-smooth">
            {courses.map((course) => (
              <div 
                key={course.id} 
                className="min-w-[260px] md:min-w-[280px] max-w-[280px] snap-start transition-transform duration-300 hover:-translate-y-2"
              >
                <CourseCard course={course} />
              </div>
            ))}
             {/* Duplicate for simulated length/scroll feel */}
             {courses.map((course) => (
              <div 
                key={`${course.id}-duplicate`} 
                className="min-w-[260px] md:min-w-[280px] max-w-[280px] snap-start transition-transform duration-300 hover:-translate-y-2"
              >
                <CourseCard course={course} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseSection;