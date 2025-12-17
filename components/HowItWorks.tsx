
import React from 'react';
import { UserPlus, Video, Code, Award, ArrowRight } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      id: 1,
      title: "Create Account",
      desc: "Join for free and choose your learning track.",
      icon: UserPlus,
      color: "bg-blue-500"
    },
    {
      id: 2,
      title: "Watch & Learn",
      desc: "Download lessons for offline study.",
      icon: Video,
      color: "bg-brand-500"
    },
    {
      id: 3,
      title: "Build Projects",
      desc: "Apply skills to real-world local problems.",
      icon: Code,
      color: "bg-purple-500"
    },
    {
      id: 4,
      title: "Get Certified",
      desc: "Earn a certificate recognized by partners.",
      icon: Award,
      color: "bg-green-500"
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-brand-500 font-bold text-xs uppercase tracking-widest mb-2 block">The Journey</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            How ElimuTech Works
          </h2>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Connecting Line (Desktop Only) */}
          <div className="hidden md:block absolute top-8 left-[12%] right-[12%] h-0.5 bg-gray-100 dark:bg-gray-800 z-0"></div>

          {steps.map((step, index) => (
            <div key={index} className="relative z-10 flex flex-col items-center text-center group">
              <div className={`w-16 h-16 rounded-2xl ${step.color} text-white flex items-center justify-center shadow-lg shadow-gray-200 dark:shadow-none mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <step.icon size={32} />
              </div>
              <div className="bg-white dark:bg-gray-900 px-2 relative">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{step.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                  {step.desc}
                </p>
              </div>
              
              {/* Mobile Arrow */}
              {index < steps.length - 1 && (
                <div className="md:hidden mt-6 text-gray-300">
                  <ArrowRight size={24} className="rotate-90" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
