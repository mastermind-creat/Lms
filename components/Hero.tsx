import React from 'react';
import { useNavigate } from 'react-router-dom';

const Hero: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="relative pt-[72px]">
      <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] bg-gray-100 overflow-hidden">
        {/* Background Image */}
        <img 
          src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=2000&q=80" 
          alt="Learning" 
          className="w-full h-full object-cover object-center"
        />
        
        {/* Floating Card (Udemy Style) */}
        <div className="absolute top-8 left-4 md:left-12 lg:left-24 bg-white dark:bg-gray-800 p-6 md:p-8 max-w-[90%] md:max-w-[440px] shadow-lg rounded-none md:rounded-sm z-10">
          <h1 className="text-2xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3 font-display">
            Learning that gets you
          </h1>
          <p className="text-sm md:text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
            Skills for your present (and your future). Get started with us today.
          </p>
          <div className="flex gap-2">
             <button 
               onClick={() => navigate('/courses')}
               className="bg-brand-900 dark:bg-brand-500 text-white font-bold py-3 px-6 hover:bg-brand-800 transition-colors w-full md:w-auto text-sm md:text-base"
             >
               Explore Courses
             </button>
          </div>
        </div>
      </div>
      
      {/* Mobile-only tagline below image */}
      <div className="md:hidden bg-brand-900 text-white p-4 text-center">
        <p className="font-bold text-sm">New to ElimuTech? Courses from KES 500 ends today.</p>
      </div>
    </section>
  );
};

export default Hero;