import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, CheckCircle2, PlayCircle, Star } from 'lucide-react';

const Hero: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-[90vh] flex items-center bg-white dark:bg-gray-900 transition-colors duration-300 overflow-hidden pt-20 lg:pt-0">
      
      {/* Abstract Background Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-brand-500/10 rounded-full blur-[100px] animate-blob mix-blend-multiply dark:mix-blend-normal"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[80px] animate-blob [animation-delay:2s] mix-blend-multiply dark:mix-blend-normal"></div>
        <div className="absolute top-[20%] left-[20%] w-[300px] h-[300px] bg-purple-500/10 rounded-full blur-[60px] animate-blob [animation-delay:4s] mix-blend-multiply dark:mix-blend-normal"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Content */}
          <div className="max-w-2xl animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 dark:bg-brand-900/20 text-brand-600 dark:text-brand-400 text-xs font-bold uppercase tracking-wider mb-6 border border-brand-100 dark:border-brand-800">
              <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse"></span>
              Live: 2025 Curriculum Updated
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-[1.1] tracking-tight font-display">
              Master the skills <br/>
              driving the <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-brand-400">Silicon Savannah.</span>
            </h1>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed font-light max-w-lg">
              ElimuTech bridges the gap between talent and opportunity. Access world-class courses, local mentorship, and career pathways in Africa's booming tech ecosystem.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
               <button 
                 onClick={() => navigate('/courses')}
                 className="px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-bold rounded-full hover:scale-105 active:scale-95 transition-all shadow-xl shadow-gray-900/20 flex items-center justify-center gap-2 group"
               >
                 Start Learning <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
               </button>
               <button 
                 onClick={() => navigate('/signup')}
                 className="px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 font-bold rounded-full hover:bg-gray-50 dark:hover:bg-gray-700 transition-all flex items-center justify-center gap-2"
               >
                 <PlayCircle size={18} className="text-gray-400" /> Watch Demo
               </button>
            </div>

            <div className="flex items-center gap-6 text-sm text-gray-500 dark:text-gray-400 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-green-500" /> No Credit Card Required
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-green-500" /> Offline Access
              </div>
            </div>
          </div>

          {/* Right Column: Dynamic Visual */}
          <div className="relative lg:h-[600px] flex items-center justify-center animate-fade-in-up [animation-delay:200ms]">
             {/* Main Image Card */}
             <div className="relative z-20 w-full max-w-md aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white dark:border-gray-800 transform rotate-[-2deg] hover:rotate-0 transition-transform duration-500">
               <img 
                 src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80" 
                 alt="African Tech Student" 
                 className="w-full h-full object-cover"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
               <div className="absolute bottom-0 left-0 p-8 text-white">
                 <div className="flex items-center gap-2 mb-2">
                   <div className="flex -space-x-2">
                     {[1,2,3].map(i => (
                       <img key={i} src={`https://i.pravatar.cc/100?img=${i+10}`} className="w-8 h-8 rounded-full border-2 border-white" alt="Student" />
                     ))}
                   </div>
                   <span className="text-sm font-bold ml-2">+12k Students</span>
                 </div>
                 <p className="text-lg font-bold">"This platform changed my career trajectory entirely."</p>
               </div>
             </div>

             {/* Floating Badge 1 */}
             <div className="absolute top-20 right-0 md:right-10 z-30 bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 animate-float">
               <div className="flex items-center gap-3">
                 <div className="p-3 bg-brand-100 dark:bg-brand-900/30 text-brand-600 rounded-xl">
                   <Star size={24} fill="currentColor" />
                 </div>
                 <div>
                   <p className="text-2xl font-bold text-gray-900 dark:text-white">4.9/5</p>
                   <p className="text-xs text-gray-500">Course Rating</p>
                 </div>
               </div>
             </div>

             {/* Floating Badge 2 */}
             <div className="absolute bottom-20 left-[-20px] md:left-0 z-30 bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 animate-float-delayed">
               <div className="flex items-center gap-3">
                 <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 text-green-600 rounded-full flex items-center justify-center">
                   <CheckCircle2 size={20} />
                 </div>
                 <div>
                   <p className="text-sm font-bold text-gray-900 dark:text-white">Job Ready</p>
                   <p className="text-xs text-gray-500">Curriculum</p>
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