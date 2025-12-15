import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, PlayCircle, Star, Users, Rocket, Code, Zap } from 'lucide-react';

const Hero: React.FC = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

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
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000); // Change slide every 6 seconds

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const setSlide = (index: number) => setCurrentSlide(index);

  return (
    <section className="relative min-h-[90vh] flex items-center bg-white dark:bg-gray-900 transition-colors duration-300 overflow-hidden pt-20 lg:pt-0">
      
      {/* Dynamic Background Shapes - Changing based on slide */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none transition-colors duration-1000">
        <div className={`absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full blur-[100px] animate-blob mix-blend-multiply dark:mix-blend-normal transition-all duration-1000 ${
          currentSlide === 0 ? 'bg-brand-500/10' : currentSlide === 1 ? 'bg-blue-500/10' : 'bg-purple-500/10'
        }`}></div>
        <div className={`absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full blur-[80px] animate-blob [animation-delay:2s] mix-blend-multiply dark:mix-blend-normal transition-all duration-1000 ${
          currentSlide === 0 ? 'bg-blue-500/10' : currentSlide === 1 ? 'bg-cyan-500/10' : 'bg-pink-500/10'
        }`}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Animated Content */}
          <div className="max-w-2xl">
            {slides.map((slide, index) => (
              <div 
                key={slide.id}
                className={`transition-all duration-700 absolute lg:relative top-0 left-0 w-full ${
                  index === currentSlide 
                    ? 'opacity-100 translate-y-0 pointer-events-auto' 
                    : 'opacity-0 translate-y-8 pointer-events-none absolute lg:absolute'
                }`}
                style={{ position: index === currentSlide ? 'relative' : 'absolute' }}
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white text-xs font-bold uppercase tracking-wider mb-6 border border-gray-200 dark:border-gray-700">
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
                
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed font-light max-w-lg h-24 sm:h-auto">
                  {slide.description}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 mb-10">
                   <button 
                     onClick={() => navigate('/courses')}
                     className="px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-bold rounded-full hover:scale-105 active:scale-95 transition-all shadow-xl shadow-gray-900/20 flex items-center justify-center gap-2 group z-20 relative"
                   >
                     Start Learning <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                   </button>
                   <button 
                     onClick={() => navigate('/signup')}
                     className="px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 font-bold rounded-full hover:bg-gray-50 dark:hover:bg-gray-700 transition-all flex items-center justify-center gap-2 z-20 relative"
                   >
                     <PlayCircle size={18} className="text-gray-400" /> Watch Demo
                   </button>
                </div>
              </div>
            ))}

            {/* Slide Indicators */}
            <div className="flex items-center gap-3 mt-8 sm:mt-0 relative z-20">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setSlide(idx)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    idx === currentSlide 
                      ? 'w-8 bg-gray-900 dark:bg-white' 
                      : 'w-2 bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Right Column: Dynamic Visual & Transitions */}
          <div className="relative lg:h-[600px] flex items-center justify-center min-h-[400px]">
             
             {slides.map((slide, index) => (
               <div 
                 key={slide.id}
                 className={`absolute inset-0 flex items-center justify-center transition-all duration-1000 ${
                   index === currentSlide 
                     ? 'opacity-100 scale-100 rotate-0' 
                     : 'opacity-0 scale-90 rotate-6 pointer-events-none'
                 }`}
               >
                 {/* Main Image Card */}
                 <div className="relative z-20 w-full max-w-md aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white dark:border-gray-800 transform transition-transform duration-500 hover:scale-[1.02]">
                   <img 
                     src={slide.image} 
                     alt="Student" 
                     className="w-full h-full object-cover animate-ken-burns"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                   <div className="absolute bottom-0 left-0 p-8 text-white">
                     <div className="flex items-center gap-2 mb-2">
                       <div className="flex -space-x-2">
                         {[1,2,3].map(i => (
                           <img key={i} src={`https://i.pravatar.cc/100?img=${i + (index * 5) + 10}`} className="w-8 h-8 rounded-full border-2 border-white" alt="Student" />
                         ))}
                       </div>
                       <span className="text-sm font-bold ml-2">+{slide.stats.value} {slide.stats.label}</span>
                     </div>
                     <p className="text-lg font-bold">"This platform changed my career trajectory entirely."</p>
                   </div>
                 </div>

                 {/* Floating Badge 1 (Top Right) */}
                 <div className={`absolute top-20 right-0 md:right-10 z-30 bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 animate-float transition-all delay-100 duration-700 ${index === currentSlide ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
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
                 <div className={`absolute bottom-20 left-[-20px] md:left-0 z-30 bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 animate-float-delayed transition-all delay-300 duration-700 ${index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                   <div className="flex items-center gap-3">
                     <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
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