
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const CallToAction: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-5xl mx-auto bg-gray-900 rounded-[2rem] shadow-2xl overflow-hidden relative">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-500 opacity-20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent-500 opacity-20 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>

        <div className="relative z-10 py-20 px-6 md:px-12 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Start your learning journey today.
          </h2>
          <p className="text-gray-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
            Find the course that moves you forward. From local fintech integration to global software standards, your path begins here.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              to="/courses"
              className="px-8 py-4 bg-white text-gray-900 font-bold rounded-full hover:bg-gray-50 transition-all shadow-lg hover:scale-105 flex items-center gap-2"
            >
              Browse All Courses <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
