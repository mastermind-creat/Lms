import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  const navigate = useNavigate();
  const [scrollY, setScrollY] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const handleMouseMove = (e: MouseEvent) => {
      // Calculate normalized mouse position from center
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setMousePos({ x, y });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section className="relative h-[85vh] min-h-[600px] overflow-hidden group">
      {/* 1. Background Image Layer - Moves slowest (Parallax) */}
      <div 
        className="absolute inset-0 w-full h-[120%] bg-gray-900 overflow-hidden"
        style={{ transform: `translateY(${scrollY * 0.15}px)` }} // Slow movement
      >
        <img 
          src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=2000&q=80" 
          alt="Learning" 
          className="w-full h-full object-cover object-center opacity-40 scale-105 transition-transform duration-[2s]"
        />
        {/* Cinematic Grain Overlay */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
      </div>
      
      {/* 2. Abstract Particles Layer - Drifting */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Large drifting blobs */}
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-brand-500/10 rounded-full blur-[120px] animate-blob"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent-500/10 rounded-full blur-[100px] animate-blob [animation-delay:2s]"></div>
        
        {/* Small floating particles */}
        <div className="absolute top-[20%] left-[10%] w-2 h-2 bg-white/30 rounded-full blur-[1px] animate-float"></div>
        <div className="absolute top-[60%] right-[15%] w-3 h-3 bg-brand-400/30 rounded-full blur-[2px] animate-float-delayed"></div>
        <div className="absolute bottom-[30%] left-[40%] w-1.5 h-1.5 bg-accent-400/40 rounded-full blur-[1px] animate-float [animation-duration:12s]"></div>
      </div>

      {/* 3. Gradient Overlay - Static but adds depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent"></div>

      {/* 4. Content Layer - Moves slightly faster than background */}
      <div 
        className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center"
        style={{ transform: `translateY(${scrollY * -0.1}px)` }} // Counter movement for depth
      >
        <div 
          className="max-w-2xl"
          style={{ transform: `translate(${mousePos.x * -0.5}px, ${mousePos.y * -0.5}px)` }} // Subtle mouse parallax
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-brand-300 text-xs font-bold uppercase tracking-widest mb-6 animate-fade-in-up">
            <Sparkles size={12} className="text-brand-400" />
            <span>Future of Education</span>
          </div>

          {/* Premium Glass Card for Text */}
          <div className="relative p-8 md:p-10 rounded-3xl bg-gray-900/30 backdrop-blur-xl border border-white/10 shadow-2xl animate-fade-in-up [animation-delay:200ms]">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 font-display leading-[1.1] tracking-tight drop-shadow-sm">
              Learning that <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 via-brand-200 to-white">
                gets you hired.
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed max-w-lg font-light opacity-90">
              Master the skills driving the Silicon Savannah. From fintech to agritech, start your journey with a curriculum built for impact.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
               <button 
                 onClick={() => navigate('/courses')}
                 className="group relative px-8 py-4 bg-brand-600 hover:bg-brand-500 text-white font-bold rounded-xl transition-all shadow-[0_0_20px_rgba(243,111,33,0.3)] hover:shadow-[0_0_30px_rgba(243,111,33,0.5)] hover:-translate-y-1 overflow-hidden"
               >
                 <span className="relative z-10 flex items-center gap-2">
                   Explore Courses <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                 </span>
                 <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-[100%] group-hover:animate-shimmer" />
               </button>
               
               <button 
                 onClick={() => navigate('/signup')}
                 className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/20 text-white font-bold rounded-xl backdrop-blur-md transition-all hover:-translate-y-1"
               >
                 Join for Free
               </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile-only tagline below image */}
      <div className="md:hidden absolute bottom-0 left-0 w-full bg-gray-900/95 backdrop-blur-md text-white p-4 text-center border-t border-white/10 z-20">
        <p className="font-bold text-sm">New to ElimuTech? Courses from KES 500 ends today.</p>
      </div>
    </section>
  );
};

export default Hero;