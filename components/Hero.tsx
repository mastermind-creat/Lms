import React from 'react';
import { ArrowRight, PlayCircle } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-primary-100 rounded-full blur-3xl opacity-50 z-0 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-secondary-100 rounded-full blur-3xl opacity-40 z-0 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Text Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-50 text-primary-700 text-sm font-semibold mb-6 border border-primary-100">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
              </span>
              New courses available now
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Grow your skills, <br className="hidden lg:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-500">
                build your future.
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              ElimuTech is the place where ambition meets opportunity. Master in-demand digital skills with practical, hands-on courses designed for real-world success.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button className="w-full sm:w-auto px-8 py-4 bg-primary-600 text-white rounded-full font-semibold hover:bg-primary-700 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-2">
                Get Started
                <ArrowRight size={20} />
              </button>
              <button className="w-full sm:w-auto px-8 py-4 bg-white text-gray-700 border border-gray-200 rounded-full font-semibold hover:bg-gray-50 hover:border-gray-300 transition-all flex items-center justify-center gap-2 group">
                <PlayCircle size={20} className="text-primary-600 group-hover:scale-110 transition-transform" />
                View Demo
              </button>
            </div>
            
            <div className="mt-10 flex items-center justify-center lg:justify-start gap-4 text-sm text-gray-500">
              <div className="flex -space-x-3">
                 <img className="w-10 h-10 rounded-full border-2 border-white" src="https://picsum.photos/100/100?random=1" alt="Student" />
                 <img className="w-10 h-10 rounded-full border-2 border-white" src="https://picsum.photos/100/100?random=2" alt="Student" />
                 <img className="w-10 h-10 rounded-full border-2 border-white" src="https://picsum.photos/100/100?random=3" alt="Student" />
                 <div className="w-10 h-10 rounded-full border-2 border-white bg-gray-100 flex items-center justify-center font-semibold text-gray-600 text-xs">
                   +2k
                 </div>
              </div>
              <p>Join over 2,000 students learning today.</p>
            </div>
          </div>

          {/* Image/Visual */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <img 
                src="https://picsum.photos/800/600?random=4" 
                alt="Student learning on laptop" 
                className="w-full h-auto object-cover transform hover:scale-105 transition-duration-700 transition-transform duration-700"
              />
              
              {/* Floating Card 1 */}
              <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg animate-[bounce_3s_infinite]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-semibold">Course Completed</p>
                    <p className="text-sm font-bold text-gray-900">Web Design 101</p>
                  </div>
                </div>
              </div>

               {/* Floating Card 2 */}
               <div className="absolute bottom-8 right-8 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg max-w-xs">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 font-bold text-xs">
                    JD
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-900">Jane Doe</p>
                    <p className="text-[10px] text-gray-500">Instructor</p>
                  </div>
                </div>
                <p className="text-xs text-gray-600">"Great job on the last assignment! Keep it up."</p>
              </div>
            </div>
            
            {/* Decoration Dots */}
            <div className="absolute -bottom-6 -left-6 z-[-1] hidden md:block">
               <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                   <circle cx="2" cy="2" r="2" className="text-gray-200" fill="currentColor" />
                 </pattern>
                 <rect width="100" height="100" fill="url(#dots)" />
               </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;