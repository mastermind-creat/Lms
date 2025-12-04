
import React from 'react';
import { Play, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-28 pb-12 md:pt-32 md:pb-16 lg:pt-48 lg:pb-24 overflow-hidden bg-white">
      {/* Abstract Background Elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-50 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/4 z-0 pointer-events-none animate-pulse-slow"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent-500/5 rounded-full blur-3xl opacity-50 translate-y-1/2 -translate-x-1/4 z-0 pointer-events-none animate-float"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center">
          
          {/* Badge */}
          <div className="animate-fade-in-up flex items-center gap-2 px-3 py-1.5 md:px-4 rounded-full bg-gray-50 border border-gray-200 text-gray-600 text-xs md:text-sm font-medium mb-6 md:mb-8 hover:bg-white hover:shadow-sm transition-all cursor-default">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
            </span>
            <span>Powering Silicon Savannah's Workforce</span>
          </div>
          
          {/* Headline - reduced font size slightly for better scaling */}
          <h1 className="animate-fade-in-up [animation-delay:200ms] text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-gray-900 leading-[1.1] tracking-tight mb-6 md:mb-8">
            Build the <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-accent-500">Future</span> <br />
            of Africa.
          </h1>
          
          {/* Subheadline */}
          <p className="animate-fade-in-up [animation-delay:400ms] text-base md:text-xl text-gray-500 mb-8 md:mb-12 max-w-2xl leading-relaxed px-4">
            ElimuTech is Kenya's premier digital skills ecosystem. We bridge the gap between talent and opportunity with world-class mentorship and practical projects.
          </p>
          
          {/* CTA Buttons */}
          <div className="animate-fade-in-up [animation-delay:600ms] flex flex-col sm:flex-row items-center gap-3 md:gap-4 w-full sm:w-auto px-4 sm:px-0">
            <Link to="/courses" className="w-full sm:w-auto px-6 py-3 md:px-8 md:py-4 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 hover:scale-105 transition-all flex items-center justify-center gap-2 shadow-lg shadow-gray-900/20 text-sm md:text-base group">
              Start Learning
              <Zap size={18} className="fill-current group-hover:text-yellow-400 transition-colors" />
            </Link>
            <button className="w-full sm:w-auto px-6 py-3 md:px-8 md:py-4 bg-white text-gray-900 border border-gray-200 rounded-full font-medium hover:bg-gray-50 hover:border-gray-300 transition-all flex items-center justify-center gap-2 text-sm md:text-base">
              <Play size={18} />
              Watch Success Stories
            </button>
          </div>

          {/* Floating UI Elements (Decorative) */}
          <div className="mt-12 md:mt-20 relative w-full max-w-5xl mx-auto hidden md:block animate-fade-in-up [animation-delay:800ms]">
             <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-white via-transparent to-transparent z-10 h-20"></div>
             
             {/* Main Dashboard Preview */}
             <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200 bg-white group hover:shadow-3xl transition-shadow duration-500">
               <img src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" alt="Platform Dashboard" className="w-full h-auto opacity-90 group-hover:scale-105 transition-transform duration-1000 ease-out" />
               
               {/* Floating Card 1: Progress */}
               <div className="absolute top-12 left-12 glass-card p-4 rounded-xl shadow-lg flex items-center gap-4 animate-float [animation-duration:6s]">
                 <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                   <Zap size={20} fill="currentColor" />
                 </div>
                 <div>
                   <p className="text-xs text-gray-500 font-semibold uppercase">Weekly Streak</p>
                   <p className="text-gray-900 font-bold">5 Days</p>
                 </div>
               </div>

               {/* Floating Card 2: Live Class */}
               <div className="absolute bottom-12 right-12 glass-card p-4 rounded-xl shadow-lg animate-float [animation-duration:5s] [animation-delay:1s]">
                  <div className="flex items-center gap-3">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                    </span>
                    <div>
                      <p className="text-sm font-bold text-gray-900">Live: Intro to Python</p>
                      <p className="text-xs text-gray-500">Dr. Wanjiku • 240 watching</p>
                    </div>
                  </div>
               </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
