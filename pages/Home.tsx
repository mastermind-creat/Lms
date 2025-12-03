import React from 'react';
import Hero from '../components/Hero';
import ValueProps from '../components/ValueProps';
import FeaturedCourses from '../components/FeaturedCourses';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import CallToAction from '../components/CallToAction';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <ValueProps />
      <FeaturedCourses />
      <Features />
      <Testimonials />
      <CallToAction />
    </>
  );
};

export default Home;