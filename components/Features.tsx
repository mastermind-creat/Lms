import React from 'react';
import { Target, Layers, FileCheck, MessageSquare } from 'lucide-react';

const Features: React.FC = () => {
  return (
    <section className="py-20 bg-gray-900 text-white relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-10">
        <div className="absolute top-10 right-10 w-64 h-64 bg-primary-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-secondary-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Text */}
          <div>
            <h2 className="text-primary-400 font-bold tracking-wider uppercase mb-3 text-sm">Platform Power</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              Everything you need to <br /> learn effectively.
            </h3>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              ElimuTech isn't just a video library. It's a complete learning ecosystem designed to keep you engaged, track your progress, and validate your achievements.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-gray-800 flex items-center justify-center shrink-0 text-primary-400 border border-gray-700">
                  <Target size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Smart Progress Tracking</h4>
                  <p className="text-gray-400 text-sm">Visualize your journey. Pick up exactly where you left off and see how far you've come with intuitive dashboards.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-gray-800 flex items-center justify-center shrink-0 text-secondary-400 border border-gray-700">
                  <Layers size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Structured Learning Paths</h4>
                  <p className="text-gray-400 text-sm">Don't get lost in random tutorials. Follow curated paths designed to take you from beginner to job-ready.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-gray-800 flex items-center justify-center shrink-0 text-pink-400 border border-gray-700">
                  <FileCheck size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Interactive Assessments</h4>
                  <p className="text-gray-400 text-sm">Test your knowledge with quizzes, coding challenges, and peer-reviewed assignments.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Visual */}
          <div className="relative">
             <div className="bg-gray-800 rounded-2xl border border-gray-700 p-2 shadow-2xl">
               <img 
                 src="https://picsum.photos/600/500?random=20" 
                 alt="Dashboard Interface" 
                 className="rounded-xl w-full h-auto opacity-90" 
               />
               
               {/* Floating Overlay Element */}
               <div className="absolute -bottom-6 -left-6 bg-white text-gray-900 p-5 rounded-xl shadow-xl max-w-xs border-l-4 border-primary-600 hidden md:block">
                 <div className="flex items-start gap-3">
                   <MessageSquare className="text-primary-600 mt-1" size={20} />
                   <div>
                     <p className="font-bold text-sm mb-1">Community Support</p>
                     <p className="text-xs text-gray-600">"I was stuck on module 4, but the community discussion helped me solve it in minutes!"</p>
                   </div>
                 </div>
               </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Features;