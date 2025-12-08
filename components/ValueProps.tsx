import React, { useEffect, useRef, useState } from 'react';
import { CheckCircle2, Zap, Rocket, Globe, Shield, Code, Cpu } from 'lucide-react';

const ValueProps: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const features = [
    { title: "Offline-first architecture", desc: "Keep learning even in low-bandwidth areas.", icon: Globe },
    { title: "M-PESA Integration", desc: "Seamless local payments tailored for you.", icon: Shield },
    { title: "Silicon Savannah Curriculum", desc: "Skills aligned with top Nairobi tech employers.", icon: Code }
  ];

  return (
    <section 
      ref={sectionRef} 
      className="py-24 bg-gray-50 dark:bg-gray-900 transition-colors duration-300 relative overflow-hidden"
    >
      {/* Dynamic Background Glow */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-500/5 dark:bg-brand-900/10 rounded-full blur-[120px] animate-blob pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent-500/5 dark:bg-accent-900/10 rounded-full blur-[100px] animate-blob [animation-delay:5s] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Left Content - Scroll Reveal */}
          <div className={`w-full lg:w-1/2 transition-all duration-1000 transform ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-100/50 dark:bg-brand-900/30 text-brand-600 dark:text-brand-400 text-xs font-bold uppercase tracking-widest mb-6 border border-brand-200 dark:border-brand-800/50">
              <Zap size={14} fill="currentColor" /> Why ElimuTech?
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-8 leading-tight tracking-tight">
              The only platform to <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-orange-500">master your future.</span>
            </h2>
            
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-10 leading-relaxed font-light">
              We've stripped away the complexity. No confusing paths, no bloat. Just direct access to world-class education tailored for the African tech ecosystem.
            </p>

            <div className="space-y-4">
              {features.map((item, i) => (
                <div 
                  key={i} 
                  className={`group p-4 rounded-2xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md hover:border-brand-200 dark:hover:border-brand-800 transition-all duration-500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                  style={{ transitionDelay: `${i * 150 + 500}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2.5 rounded-xl bg-brand-50 dark:bg-brand-900/20 text-brand-600 dark:text-brand-400 group-hover:scale-110 transition-transform duration-300">
                      <item.icon size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white mb-1 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">{item.title}</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual - Orbiting System */}
          <div className={`w-full lg:w-1/2 flex justify-center items-center transition-all duration-1000 delay-300 transform ${isVisible ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}`}>
            <div className="relative w-full max-w-[500px] aspect-square flex items-center justify-center">
               
               {/* Orbits Rings */}
               <div className="absolute border border-gray-200 dark:border-gray-700 rounded-full w-[70%] h-[70%] animate-[spin_30s_linear_infinite]"></div>
               <div className="absolute border border-gray-200 dark:border-gray-700/50 rounded-full w-[100%] h-[100%] animate-[spin_40s_linear_reverse_infinite]"></div>

               {/* Center Icon */}
               <div className="relative z-10 w-32 h-32 md:w-40 md:h-40 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-2xl shadow-brand-500/10 animate-float">
                 <div className="absolute inset-0 bg-gradient-to-br from-brand-500/20 to-transparent rounded-full blur-xl"></div>
                 <img src="/icon.png" alt="Icon" className="w-16 h-16 md:w-20 md:h-20 object-contain relative z-20" />
               </div>
               
               {/* Orbiting Planets - Inner Ring */}
               <div className="absolute w-[70%] h-[70%] animate-orbit">
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl shadow-lg flex items-center justify-center animate-orbit-reverse text-blue-500">
                     <Rocket size={20} />
                  </div>
                  <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl shadow-lg flex items-center justify-center animate-orbit-reverse text-green-500">
                     <Code size={20} />
                  </div>
               </div>

               {/* Orbiting Planets - Outer Ring */}
               <div className="absolute w-[100%] h-[100%] animate-orbit-reverse">
                  <div className="absolute top-1/2 -right-8 -translate-y-1/2 w-14 h-14 bg-brand-600 text-white rounded-2xl shadow-xl shadow-brand-500/30 flex items-center justify-center animate-orbit">
                     <span className="font-bold text-lg">A+</span>
                  </div>
                  <div className="absolute top-1/2 -left-8 -translate-y-1/2 w-14 h-14 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl shadow-lg flex items-center justify-center animate-orbit text-purple-500">
                     <Cpu size={24} />
                  </div>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ValueProps;