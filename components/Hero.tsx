
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, PlayCircle, Star, Users, Rocket, Code, Zap } from 'lucide-react';

const Hero: React.FC = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const slides = [
    {
      id: 1,
      tag: "Live: 2025 Curriculum Updated",
      title: "Master the skills driving the",
      highlight: "Silicon Savannah.",
      description: "ElimuTech bridges the gap between talent and opportunity. Access world-class courses, local mentorship, and career pathways in Africa's booming tech ecosystem.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
      accentColor: "from-brand-600 to-brand-400",
      stats: { value: "12k+", label: "Students" },
      icon: <Code size={24} />
    },
    {
      id: 2,
      tag: "Project-Based Learning",
      title: "Build real apps for the",
      highlight: "Digital Economy.",
      description: "Stop watching tutorials and start building. From M-PESA integrations to AI models, gain the practical experience employers actually look for.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
      accentColor: "from-blue-600 to-cyan-400",
      stats: { value: "95%", label: "Hiring Rate" },
      icon: <Rocket size={24} />
    },
    {
      id: 3,
      tag: "Community Driven",
      title: "Connect with expert",
      highlight: "Local Mentors.",
      description: "You're never learning alone. Join cohorts of peers from Nairobi, Lagos, and beyond. Get code reviews and guidance from seniors at top tech firms.",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80",
      accentColor: "from-purple-600 to-pink-400",
      stats: { value: "500+", label: "Mentors" },
      icon: <Users size={24} />
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000); 

    return () => clearInterval(timer);
  }, [isAutoPlaying, slides.length]);

  const setSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    // Restart auto-play after 10 seconds of inactivity
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <section className="relative min-h-[90vh] flex items-center bg-white dark:bg-gray-900 transition-colors duration-500 overflow-hidden pt-20 lg:pt-0">
      
      {/* Dynamic Background Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {slides.map((slide, index) => (
           <div 
             key={slide.id}
             className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
           >
              <div className={`absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full blur-[100px] animate-blob mix-blend-multiply dark:mix-blend-normal opacity-50 ${
                index === 0 ? 'bg-brand-500/10' : index === 1 ? 'bg-blue-500/10' : 'bg-purple-500/10'
              }`}></div>
              <div className={`absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full blur-[80px] animate-blob [animation-delay:2s] mix-blend-multiply dark:mix-blend-normal opacity-50 ${
                index === 0 ? 'bg-blue-500/10' : index === 1 ? 'bg-cyan-500/10' : 'bg-pink-500/10'
              }`}></div>
           </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Stacked Text for Cross-fade */}
          <div className="max-w-2xl flex flex-col justify-center min-h-[400px]">
            <div className="grid grid-cols-1">
              {slides.map((slide, index) => (
                <div 
                  key={slide.id}
                  className={`col-start-1 row-start-1 transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] transform ${
                    index === currentSlide 
                      ? 'opacity-100 translate-y-0 scale-100 z-10 blur-0' 
                      : 'opacity-0 translate-y-8 scale-95 pointer-events-none z-0 blur-sm'
                  }`}
                >
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white text-xs font-bold uppercase tracking-wider mb-6 border border-gray-200 dark:border-gray-700 shadow-sm">
                    <span className={`w-2 h-2 rounded-full animate-pulse ${
                      index === 0 ? 'bg-brand-500' : index === 1 ? 'bg-blue-500' : 'bg-purple-500'
                    }`}></span>
                    {slide.tag}
                  </div>
                  
                  <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-[1.1] tracking-tight font-display">
                    {slide.title} <br/>
                    <span className={`text-transparent bg-clip-text bg-gradient-to-r ${slide.accentColor}`}>
                      {slide.highlight}
                    </span>
                  </h1>
                  
                  <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed font-light max-w-lg">
                    {slide.description}
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 mb-10">
                     <button 
                       onClick={() => navigate('/courses')}
                       className="px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-bold rounded-full hover:scale-105 active:scale-95 transition-all shadow-xl shadow-gray-900/20 dark:shadow-white/10 flex items-center justify-center gap-2 group relative overflow-hidden"
                     >
                       <span className="relative z-10 flex items-center gap-2">Start Learning <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" /></span>
                     </button>
                     <button 
                       onClick={() => navigate('/signup')}
                       className="px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 font-bold rounded-full hover:bg-gray-50 dark:hover:bg-gray-700 transition-all flex items-center justify-center gap-2 relative shadow-sm"
                     >
                       <PlayCircle size={18} className="text-gray-400" /> Watch Demo
                     </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Slide Indicators */}
            <div className="flex items-center gap-3 mt-4 z-20">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setSlide(idx)}
                  className={`h-1.5 rounded-full transition-all duration-500 ease-out ${
                    idx === currentSlide 
                      ? 'w-12 bg-gray-900 dark:bg-white' 
                      : 'w-2 bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600 hover:w-4'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Right Column: Dynamic Visual & Transitions */}
          <div className="relative lg:h-[650px] flex items-center justify-center min-h-[450px]">
             {slides.map((slide, index) => (
               <div 
                 key={slide.id}
                 className={`absolute inset-0 flex items-center justify-center transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                   index === currentSlide 
                     ? 'opacity-100 scale-100 rotate-0 translate-x-0 blur-0' 
                     : 'opacity-0 scale-110 rotate-3 translate-x-8 blur-lg pointer-events-none'
                 }`}
               >
                 {/* Main Image Card */}
                 <div className="relative z-20 w-full max-w-md aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white dark:border-gray-800 transform hover:scale-[1.02] transition-transform duration-500">
                   <img 
                     src={slide.image} 
                     alt="Student" 
                     className="w-full h-full object-cover animate-ken-burns"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                   
                   {/* Card Content */}
                   <div className="absolute bottom-0 left-0 p-8 text-white w-full">
                     <div className="flex items-center gap-2 mb-3">
                       <div className="flex -space-x-3">
                         {[1,2,3].map(i => (
                           <img key={i} src={`https://i.pravatar.cc/100?img=${i + (index * 5) + 10}`} className="w-10 h-10 rounded-full border-2 border-white dark:border-gray-800" alt="Student" />
                         ))}
                       </div>
                       <div className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold border border-white/30 ml-2">
                         +{slide.stats.value} {slide.stats.label}
                       </div>
                     </div>
                     <p className="text-lg font-bold leading-tight text-white/90">"This platform changed my career trajectory entirely."</p>
                   </div>
                 </div>

                 {/* Floating Badge 1 (Top Right) */}
                 <div 
                    className={`absolute top-24 right-4 md:right-8 z-30 bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 animate-float transition-all duration-1000 delay-200 ease-out ${
                        index === currentSlide ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
                    }`}
                 >
                   <div className="flex items-center gap-3">
                     <div className={`p-3 rounded-xl bg-gray-100 dark:bg-gray-700 ${
                        index === 0 ? 'text-brand-600' : index === 1 ? 'text-blue-600' : 'text-purple-600'
                     }`}>
                       <Star size={24} fill="currentColor" />
                     </div>
                     <div>
                       <p className="text-2xl font-bold text-gray-900 dark:text-white">4.9/5</p>
                       <p className="text-xs text-gray-500">Average Rating</p>
                     </div>
                   </div>
                 </div>

                 {/* Floating Badge 2 (Bottom Left) */}
                 <div 
                    className={`absolute bottom-24 left-0 md:left-4 z-30 bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 animate-float-delayed transition-all duration-1000 delay-300 ease-out ${
                        index === currentSlide ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
                    }`}
                 >
                   <div className="flex items-center gap-3">
                     <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                        index === 0 ? 'bg-brand-100 text-brand-600' : index === 1 ? 'bg-blue-100 text-blue-600' : 'bg-purple-100 text-purple-600'
                     }`}>
                       {slide.icon}
                     </div>
                     <div>
                       <p className="text-sm font-bold text-gray-900 dark:text-white">
                         {index === 0 ? "Job Ready" : index === 1 ? "Real Projects" : "Expert Help"}
                       </p>
                       <p className="text-xs text-gray-500">Guaranteed</p>
                     </div>
                   </div>
                 </div>
               </div>
             ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
