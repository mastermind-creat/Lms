import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const CallToAction: React.FC = () => {
  return (
    <section className="py-10 md:py-24 px-2 md:px-4 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-5xl mx-auto bg-gray-50 dark:bg-gray-800 rounded-[1.5rem] md:rounded-[2rem] shadow-xl dark:shadow-2xl overflow-hidden relative border border-gray-100 dark:border-gray-700 transition-colors">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-48 h-48 md:w-96 md:h-96 bg-brand-500 opacity-10 dark:opacity-20 rounded-full blur-[60px] md:blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-40 h-40 md:w-80 md:h-80 bg-accent-500 opacity-10 dark:opacity-20 rounded-full blur-[60px] md:blur-[100px] translate-y-1/2 -translate-x-1/2"></div>

        <div className="relative z-10 py-10 px-4 md:py-20 md:px-12 text-center">
          <h2 className="text-xl md:text-5xl font-bold text-gray-900 dark:text-white mb-3 md:mb-6 tracking-tight">
            Start your learning journey today.
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-xs md:text-xl mb-6 md:mb-12 max-w-2xl mx-auto leading-relaxed">
            Find the course that moves you forward. From local fintech integration to global software standards, your path begins here.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              to="/courses"
              className="px-6 py-3 md:px-8 md:py-4 bg-brand-600 hover:bg-brand-700 text-white font-bold rounded-full transition-all shadow-lg hover:shadow-brand-500/30 hover:scale-105 flex items-center gap-2 text-xs md:text-base"
            >
              Browse All Courses <ArrowRight size={14} className="md:w-5 md:h-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;