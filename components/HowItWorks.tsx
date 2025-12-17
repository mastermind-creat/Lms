
import React from 'react';
import { UserPlus, Video, Code, Award } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      id: 1,
      title: "Create Account",
      desc: "Join for free and choose your learning track.",
      icon: UserPlus,
      color: "bg-blue-500",
      shadow: "shadow-blue-500/50"
    },
    {
      id: 2,
      title: "Watch & Learn",
      desc: "Download lessons for offline study.",
      icon: Video,
      color: "bg-brand-500",
      shadow: "shadow-brand-500/50"
    },
    {
      id: 3,
      title: "Build Projects",
      desc: "Apply skills to real-world local problems.",
      icon: Code,
      color: "bg-purple-500",
      shadow: "shadow-purple-500/50"
    },
    {
      id: 4,
      title: "Get Certified",
      desc: "Earn a certificate recognized by partners.",
      icon: Award,
      color: "bg-green-500",
      shadow: "shadow-green-500/50"
    }
  ];

  return (
    <section className="py-24 bg-white dark:bg-gray-900 transition-colors duration-300 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 relative z-10">
          <span className="text-brand-500 font-bold text-xs uppercase tracking-widest mb-2 block">The Journey</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            From Beginner to Pro
          </h2>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          
          {/* Energy Flow Beam (Desktop) */}
          <div className="hidden md:block absolute top-10 left-[12%] right-[12%] h-1.5 bg-gray-100 dark:bg-gray-800 z-0 rounded-full overflow-hidden">
            <div className="absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-brand-500 to-transparent blur-md animate-[shimmer_3s_infinite_linear]"></div>
          </div>

          {/* Energy Flow Beam (Mobile) */}
          <div className="md:hidden absolute left-1/2 top-4 bottom-20 w-1.5 -translate-x-1/2 bg-gray-100 dark:bg-gray-800 z-0 rounded-full overflow-hidden">
             <div className="absolute inset-0 h-1/3 bg-gradient-to-b from-transparent via-brand-500 to-transparent blur-md animate-[shimmer_3s_infinite_linear]"></div>
          </div>

          {steps.map((step, index) => (
            <div key={index} className="relative z-10 flex flex-col items-center text-center group">
              {/* Animated Icon Container */}
              <div 
                className={`w-20 h-20 rounded-3xl ${step.color} text-white flex items-center justify-center shadow-lg ${step.shadow} mb-8 relative transition-transform duration-500 hover:scale-110 hover:-translate-y-2`}
              >
                {/* Pulse Ring */}
                <div className={`absolute inset-0 rounded-3xl ${step.color} opacity-0 animate-ping-slow`} style={{ animationDelay: `${index * 0.5}s` }}></div>
                
                <step.icon size={36} className="relative z-10 drop-shadow-md" />
                
                {/* Step Number Badge */}
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-full flex items-center justify-center font-bold border-4 border-white dark:border-gray-900 shadow-sm text-sm z-20">
                  {step.id}
                </div>
              </div>

              <div className="bg-white dark:bg-gray-900 px-4 py-2 relative rounded-xl border border-transparent hover:border-gray-100 dark:hover:border-gray-800 transition-colors">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{step.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed max-w-[200px] mx-auto">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
