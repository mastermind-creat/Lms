import React from 'react';
import { Terminal, Users, Cpu } from 'lucide-react';

const Features: React.FC = () => {
  return (
    <section className="py-24 bg-gray-900 relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 left-0 w-full h-full z-0 opacity-20">
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-brand-500 rounded-full blur-[128px]"></div>
        <div className="absolute bottom-0 left-20 w-[400px] h-[400px] bg-purple-600 rounded-full blur-[128px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Built for the Modern Learner</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Experience a platform that adapts to your pace, your device, and your goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 p-8 rounded-3xl hover:bg-gray-800 transition-all group">
            <div className="w-14 h-14 bg-brand-500/10 rounded-2xl flex items-center justify-center text-brand-400 mb-6 group-hover:scale-110 transition-transform">
              <Terminal size={28} />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Interactive Labs</h3>
            <p className="text-gray-400 leading-relaxed">
              Forget passive videos. Write code, design interfaces, and analyze data directly in your browser with our built-in IDEs.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 p-8 rounded-3xl hover:bg-gray-800 transition-all group">
            <div className="w-14 h-14 bg-purple-500/10 rounded-2xl flex items-center justify-center text-purple-400 mb-6 group-hover:scale-110 transition-transform">
              <Users size={28} />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Peer Cohorts</h3>
            <p className="text-gray-400 leading-relaxed">
              You're never learning alone. You'll be placed in a cohort of 20 students from your region to collaborate and compete.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 p-8 rounded-3xl hover:bg-gray-800 transition-all group">
            <div className="w-14 h-14 bg-green-500/10 rounded-2xl flex items-center justify-center text-green-400 mb-6 group-hover:scale-110 transition-transform">
              <Cpu size={28} />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">AI Tutor</h3>
            <p className="text-gray-400 leading-relaxed">
              Stuck on a bug at 2 AM? Our localized AI assistant understands context and helps debug your code instantly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;