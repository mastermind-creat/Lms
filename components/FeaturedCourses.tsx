import React from 'react';
import CourseSection from './CourseSection';
import { courses } from '../data/courses';

// This component is kept for backward compatibility if imported elsewhere,
// but effectively just renders the standard CourseSection now.
const FeaturedCourses: React.FC = () => {
  return (
    <CourseSection 
      title="Featured Courses" 
      subtitle="Curriculum designed by Kenya's top tech leads to get you hired."
      courses={courses.slice(0, 4)}
    />
  );
};

export default FeaturedCourses;