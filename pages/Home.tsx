import React from 'react';
import Hero from '../components/Hero';
import Partners from '../components/Partners';
import Stats from '../components/Stats';
import Categories from '../components/Categories';
import CourseSection from '../components/CourseSection';
import CallToAction from '../components/CallToAction';
import Testimonials from '../components/Testimonials';
import ValueProps from '../components/ValueProps';
import { courses } from '../data/courses';

const IlluminatedSeparator = () => (
  <div className="relative h-[2px] w-full bg-gray-100 dark:bg-gray-800 overflow-hidden my-0">
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-500 to-transparent w-1/3 blur-sm animate-scroll" style={{ animationDuration: '3s' }}></div>
  </div>
);

const Home: React.FC = () => {
  const featuredCourses = courses.slice(0, 4);
  const popularCourses = courses.filter(c => c.isPopular).slice(0, 4);
  const newCourses = courses.filter(c => c.isNew).slice(0, 4);
  const recommendedCourses = [...courses].sort((a, b) => b.rating - a.rating).slice(0, 4);

  return (
    <div className="bg-white dark:bg-gray-900 transition-colors duration-300">
      <Hero />
      <Partners />
      <Stats />
      
      <IlluminatedSeparator />

      <CourseSection 
        title="Featured Courses" 
        subtitle="Curriculum designed by Kenya's top tech leads."
        courses={featuredCourses}
        bgColor="bg-white dark:bg-gray-900"
      />

      <IlluminatedSeparator />
      
      <Categories />
      
      <ValueProps />
      
      {/* Benefits section removed as requested */}

      <CourseSection 
        title="Most Studied" 
        subtitle="Join thousands of students learning these trending skills."
        courses={popularCourses}
        bgColor="bg-gray-50/50 dark:bg-gray-800/30"
      />

      <CourseSection 
        title="Fresh on ElimuTech" 
        subtitle="Latest curriculum updates to keep you ahead."
        courses={newCourses}
        bgColor="bg-white dark:bg-gray-900"
      />

      <Testimonials />

      <IlluminatedSeparator />

      <CourseSection 
        title="Top Picks for You" 
        subtitle="Highly rated courses to boost your career trajectory."
        courses={recommendedCourses}
        bgColor="bg-gray-50/50 dark:bg-gray-800/30"
      />

      <CallToAction />
    </div>
  );
};

export default Home;