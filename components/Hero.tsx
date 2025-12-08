
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
      {/* 1. Background Image Layer - Fixed/Absolute for cinematic feel */}
      <div className="absolute inset-0 w-full h-full bg-gray-900 z-0">
         <img 
           src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=2000&q=80" 
           alt="Learning" 
           className="w-full h-full object-cover opacity-60 animate-ken-burns will-change-transform"
         />
         {/* Cinematic Gradients for readability */}
         <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent"></div>
         <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-transparent"></div>
         
         {/* Noise Texture */}
         <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
      </div>
      
      {/* 2. Ambient Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-brand-500/20 rounded-full blur-[100px] animate-blob"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent-500/20 rounded-full blur-[80px] animate-blob [animation-delay:2s]"></div>
      </div>

      {/* 3. Content Layer */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-end pb-24 md:pb-0 md:justify-center min-h-[100dvh]">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-brand-300 text-xs font-bold uppercase tracking-widest mb-6 animate-fade-in-up">
            <Sparkles size={12} className="text-brand-400" />
            <span>Future of Education</span>
          </div>

          {/* Text Content */}
          <div className="animate-fade-in-up [animation-delay:200ms]">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6 font-display leading-[1.1] tracking-tight drop-shadow-lg">
              Learning that <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 via-brand-200 to-white">
                gets you hired.
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed max-w-lg font-light opacity-90 drop-shadow-md">
              Master the skills driving the Silicon Savannah. From fintech to agritech, start your journey with a curriculum built for impact.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
               <button 
                 onClick={() => navigate('/courses')}
                 className="group relative px-8 py-4 bg-brand-600 hover:bg-brand-500 text-white font-bold rounded-xl transition-all shadow-[0_0_20px_rgba(243,111,33,0.3)] hover:shadow-[0_0_30px_rgba(243,111,33,0.5)] hover:-translate-y-1 overflow-hidden w-full sm:w-auto"
               >
                 <span className="relative z-10 flex items-center justify-center gap-2">
                   Explore Courses <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                 </span>
                 <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-[100%] group-hover:animate-shimmer" />
               </button>
               
               <button 
                 onClick={() => navigate('/signup')}
                 className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/20 text-white font-bold rounded-xl backdrop-blur-md transition-all hover:-translate-y-1 w-full sm:w-auto"
               >
                 Join for Free
               </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator for mobile */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 md:hidden animate-bounce text-white/50">
        <span className="text-[10px] uppercase tracking-widest">Scroll</span>
        <div className="w-1 h-8 rounded-full border border-white/30 flex justify-center pt-1">
           <div className="w-0.5 h-2 bg-white rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
    