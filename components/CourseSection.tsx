
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import CourseCard from './CourseCard';
import { Course } from '../data/courses';

interface CourseSectionProps {
  title: string;
  subtitle?: string;
  courses: Course[];
  bgColor?: string;
  viewAllLink?: string;
}

const CourseSection: React.FC<CourseSectionProps> = ({ 
  title, 
  subtitle, 
  courses, 
  bgColor = 'bg-white',
  viewAllLink = '/courses'
}) => {
  return (
    <section className={`py-16 md:py-24 ${bgColor}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 tracking-tight">
              {title}
            </h2>
            {subtitle && (
              <p className="text-gray-500 text-sm md:text-base max-w-2xl">
                {subtitle}
              </p>
            )}
          </div>
          {viewAllLink && (
            <Link 
              to={viewAllLink} 
              className="hidden md:flex items-center gap-2 text-sm font-bold text-brand-600 hover:text-brand-800 transition-colors group"
            >
              View All <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
        
        {viewAllLink && (
          <div className="mt-10 text-center md:hidden">
            <Link to={viewAllLink} className="inline-flex items-center justify-center gap-2 w-full px-6 py-3 border border-gray-200 rounded-xl text-sm font-bold text-gray-900 hover:bg-gray-50 transition-colors">
              View All <ArrowRight size={16} />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default CourseSection;
