
import React from 'react';
import Hero from '../components/Hero';
import Partners from '../components/Partners';
import Stats from '../components/Stats';
import Categories from '../components/Categories';
import CourseSection from '../components/CourseSection';
import CallToAction from '../components/CallToAction';
import Testimonials from '../components/Testimonials';
import { courses } from '../data/courses';

const IlluminatedSeparator = () => (
  <div className="relative h-px w-full bg-gray-100 dark:bg-gray-800 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-500/30 to-transparent w-1/3 mx-auto"></div>
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
      
      <CourseSection 
        title="Featured Courses" 
        subtitle="Curriculum designed by Kenya's top tech leads."
        courses={featuredCourses}
        bgColor="bg-white dark:bg-gray-900"
        dark={false} // Will inherit parent dark mode due to transparent bg
      />

      <IlluminatedSeparator />
      
      <Categories />

      <CourseSection 
        title="Most Studied" 
        subtitle="Join thousands of students learning these trending skills."
        courses={popularCourses}
        bgColor="bg-gray-50/50 dark:bg-gray-800/30"
        dark={false}
      />

      {/* Dark/Live Section for New Courses - Always Dark */}
      <CourseSection 
        title="Fresh on ElimuTech" 
        subtitle="Latest curriculum updates to keep you ahead."
        courses={newCourses}
        bgColor="bg-gray-900"
        dark={true}
      />

      <Testimonials />

      <CourseSection 
        title="Top Picks for You" 
        subtitle="Highly rated courses to boost your career trajectory."
        courses={recommendedCourses}
        bgColor="bg-white dark:bg-gray-900"
        dark={false}
      />

      <CallToAction />
    </div>
  );
};

export default Home;
