
import React from 'react';
import Hero from '../components/Hero';
import Partners from '../components/Partners';
import CourseSection from '../components/CourseSection';
import CallToAction from '../components/CallToAction';
import { courses } from '../data/courses';

const Home: React.FC = () => {
  // Filter courses for different sections
  const featuredCourses = courses.slice(0, 4); // Just take first 4 for now
  const popularCourses = courses.filter(c => c.isPopular).slice(0, 4);
  const newCourses = courses.filter(c => c.isNew).slice(0, 4);
  // Simple recommendation logic: Top rated
  const recommendedCourses = [...courses].sort((a, b) => b.rating - a.rating).slice(0, 4);

  return (
    <div className="bg-white">
      <Hero />
      <Partners />
      
      {/* 1. Featured Courses */}
      <CourseSection 
        title="Featured Courses" 
        subtitle="Explore our most impactful programs chosen by industry experts."
        courses={featuredCourses}
        bgColor="bg-white"
      />

      {/* 2. Most Studied */}
      <CourseSection 
        title="Most Studied" 
        subtitle="Join thousands of students learning these trending skills right now."
        courses={popularCourses}
        bgColor="bg-gray-50"
      />

      {/* 3. New Courses */}
      <CourseSection 
        title="New on ElimuTech" 
        subtitle="Stay ahead of the curve with our latest curriculum updates."
        courses={newCourses}
        bgColor="bg-white"
      />

      {/* 4. Recommended */}
      <CourseSection 
        title="Top Picks for You" 
        subtitle="Highly rated courses to boost your career trajectory."
        courses={recommendedCourses}
        bgColor="bg-gray-50"
      />

      <CallToAction />
    </div>
  );
};

export default Home;
