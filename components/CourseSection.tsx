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
        <div className="mb-6">
          <h2 className={`text-xl md:text-2xl font-bold tracking-tight mb-2 ${dark ? 'text-white' : 'text-gray-900 dark:text-white'}`}>
            {title}
          </h2>
          {subtitle && (
            <p className={`text-sm md:text-base max-w-2xl ${dark ? 'text-gray-400' : 'text-gray-600 dark:text-gray-400'}`}>
              {subtitle}
            </p>
          )}
        </div>

        {/* Horizontal Scroll Container (Udemy Slider Style) */}
        <div className="relative">
          <div className="flex overflow-x-auto gap-4 pb-4 no-scrollbar snap-x snap-mandatory">
            {courses.map((course) => (
              <div 
                key={course.id} 
                className="min-w-[260px] md:min-w-[280px] max-w-[280px] snap-start"
              >
                <CourseCard course={course} />
              </div>
            ))}
             {courses.map((course) => (
              <div 
                key={`${course.id}-duplicate`} 
                className="min-w-[260px] md:min-w-[280px] max-w-[280px] snap-start"
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