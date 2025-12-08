import React from 'react';
import { CheckCircle2, Zap } from 'lucide-react';

const ValueProps: React.FC = () => {
  return (
    <section className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-900/20 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
          
          {/* Left Content */}
          <div className="w-full md:w-1/2">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-900/50 text-brand-400 text-xs font-bold uppercase tracking-widest mb-6 border border-brand-800">
              <Zap size={14} fill="currentColor" /> Why ElimuTech?
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              The only platform you need to <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-orange-500">master your future.</span>
            </h2>
            
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              We've stripped away the complexity. No confusing paths, no bloat. Just direct access to world-class education tailored for the African tech ecosystem.
            </p>

            <div className="space-y-4">
              {[
                "Offline-first architecture for low-bandwidth areas",
                "Direct integration with local payment systems (M-PESA)",
                "Curriculum aligned with top Silicon Savannah employers"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="text-brand-500 shrink-0" size={20} />
                  <span className="font-medium text-gray-200">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual */}
          <div className="w-full md:w-1/2 flex justify-center items-center">
            <div className="relative w-full max-w-sm aspect-square">
               {/* Center Icon with Neumorphic effect */}
               <div className="absolute inset-0 m-auto w-48 h-48 bg-gray-800 rounded-full flex items-center justify-center shadow-[20px_20px_60px_#0f172a,-20px_-20px_60px_#1e293b] animate-float">
                 <img src="/icon.png" alt="Icon" className="w-24 h-24 object-contain" />
               </div>
               
               {/* Orbiting Elements */}
               <div className="absolute top-0 right-10 w-16 h-16 bg-gray-800 rounded-2xl shadow-lg flex items-center justify-center animate-bounce [animation-delay:0.5s] border border-gray-700">
                  <span className="text-2xl">🚀</span>
               </div>
               <div className="absolute bottom-10 left-0 w-16 h-16 bg-gray-800 rounded-2xl shadow-lg flex items-center justify-center animate-bounce [animation-delay:1s] border border-gray-700">
                  <span className="text-2xl">🎓</span>
               </div>
               <div className="absolute bottom-0 right-0 w-20 h-20 bg-brand-600 rounded-2xl shadow-lg flex items-center justify-center animate-bounce text-white font-bold">
                  A+
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ValueProps;