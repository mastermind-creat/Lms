import React from 'react';
import { ArrowRight, PlayCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Text Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-50 text-gray-600 text-xs font-medium mb-8 border border-gray-200">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              New courses available now
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-[1.1] mb-8 tracking-tight">
              Master new skills, <br />
              <span className="text-gray-400">shape your future.</span>
            </h1>
            
            <p className="text-lg text-gray-500 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed font-light">
              ElimuTech provides the tools and mentorship you need to thrive in the digital economy. Practical, accessible, and designed for you.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link to="/courses" className="w-full sm:w-auto px-8 py-4 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition-all flex items-center justify-center gap-2">
                Browse Courses
                <ArrowRight size={18} />
              </Link>
              <button className="w-full sm:w-auto px-8 py-4 bg-white text-gray-900 border border-gray-200 rounded-full font-medium hover:bg-gray-50 transition-all flex items-center justify-center gap-2">
                <PlayCircle size={18} />
                View Demo
              </button>
            </div>
            
            <div className="mt-12 flex items-center justify-center lg:justify-start gap-4 text-sm text-gray-400">
               <div className="flex -space-x-2">
                 {[1,2,3].map(i => (
                   <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                     <img src={`https://picsum.photos/100/100?random=${i}`} alt="User" className="w-full h-full object-cover" />
                   </div>
                 ))}
               </div>
               <p>Trusted by 2,000+ students</p>
            </div>
          </div>

          {/* Minimalist Image Composition */}
          <div className="w-full lg:w-1/2 relative lg:h-[600px] flex items-center justify-center">
             <div className="relative w-full max-w-md lg:max-w-full aspect-[4/5] lg:aspect-auto lg:h-full rounded-2xl overflow-hidden shadow-2xl bg-gray-100">
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Students working" 
                  className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
                />
                
                {/* Minimal Overlay Card */}
                <div className="absolute bottom-8 left-8 right-8 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Current Course</p>
                      <p className="font-bold text-gray-900">Product Design</p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-gray-900">84%</p>
                      <p className="text-xs text-green-600">On Track</p>
                    </div>
                  </div>
                  <div className="w-full bg-gray-100 h-1.5 rounded-full mt-4 overflow-hidden">
                    <div className="bg-gray-900 h-full w-[84%] rounded-full"></div>
                  </div>
                </div>
             </div>
             
             {/* Decorative minimalist element */}
             <div className="absolute -top-12 -right-12 w-64 h-64 border border-gray-200 rounded-full opacity-50 z-[-1]"></div>
             <div className="absolute top-12 -right-24 w-64 h-64 border border-gray-100 rounded-full opacity-50 z-[-1]"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;