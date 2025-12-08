import React from 'react';
import { useNavigate } from 'react-router-dom';

const Hero: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="relative pt-[72px] overflow-hidden group">
      <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] bg-gray-900 overflow-hidden">
        {/* Background Image with subtle zoom animation */}
        <div className="absolute inset-0 w-full h-full animate-pulse-slow">
            <img 
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=2000&q=80" 
              alt="Learning" 
              className="w-full h-full object-cover object-center opacity-60"
            />
        </div>
        
        {/* Ambient Glows */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-500/20 rounded-full blur-[100px] animate-float"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent-500/20 rounded-full blur-[100px] animate-float [animation-delay:2s]"></div>

        {/* Floating Card (Premium Glassmorphism) */}
        <div className="absolute top-8 left-4 md:left-12 lg:left-24 bg-white/70 dark:bg-gray-900/60 backdrop-blur-xl border border-white/20 dark:border-gray-700/30 p-6 md:p-8 max-w-[90%] md:max-w-[440px] shadow-2xl rounded-2xl z-10 animate-fade-in-up">
          <h1 className="text-2xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3 font-display drop-shadow-sm">
            Learning that gets you
          </h1>
          <p className="text-sm md:text-lg text-gray-800 dark:text-gray-200 mb-6 leading-relaxed font-medium">
            Skills for your present (and your future). Get started with us today.
          </p>
          <div className="flex gap-2">
             <button 
               onClick={() => navigate('/courses')}
               className="bg-brand-600 hover:bg-brand-700 text-white font-bold py-3 px-6 rounded-xl transition-all w-full md:w-auto text-sm md:text-base shadow-lg shadow-brand-500/30 hover:shadow-brand-500/50 hover:-translate-y-0.5"
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