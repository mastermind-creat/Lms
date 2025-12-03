import React from 'react';

const CallToAction: React.FC = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-5xl mx-auto bg-indigo-600 rounded-3xl shadow-2xl overflow-hidden relative">
        {/* Abstract shapes */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-white opacity-10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-teal-400 opacity-20 rounded-full blur-2xl"></div>

        <div className="relative z-10 py-16 px-6 md:px-12 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to start your journey?</h2>
          <p className="text-indigo-100 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            Join thousands of learners building the skills of tomorrow. Your first course is on us when you sign up today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-indigo-600 font-bold rounded-full hover:bg-gray-50 transition-colors shadow-lg">
              Create Free Account
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-full hover:bg-white/10 transition-colors">
              Browse Course Catalog
            </button>
          </div>
          
          <p className="mt-6 text-xs text-indigo-200 uppercase tracking-widest">No credit card required</p>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;