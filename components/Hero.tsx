
import React, { useState } from 'react';
import { Search, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Hero: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // In a real app, this would filter. For now, navigate to courses.
      navigate('/courses');
    }
  };

  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-white">
      {/* Subtle Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-white z-0 pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Welcome Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-50 border border-brand-100 text-brand-700 text-sm font-medium mb-8 animate-fade-in-up">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
          </span>
          <span>Unlock Your Potential with ElimuTech</span>
        </div>
        
        {/* Headline */}
        <h1 className="animate-fade-in-up [animation-delay:200ms] text-4xl sm:text-5xl md:text-7xl font-bold text-gray-900 leading-[1.1] tracking-tight mb-6">
          Growth Starts Here. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-accent-500">Master Real Skills.</span>
        </h1>
        
        {/* Subheadline */}
        <p className="animate-fade-in-up [animation-delay:400ms] text-lg md:text-xl text-gray-500 mb-10 max-w-2xl mx-auto leading-relaxed">
          Join a community of learners building the future of Africa. Practical courses, expert mentors, and real-world projects await you.
        </p>
        
        {/* Search Bar */}
        <div className="animate-fade-in-up [animation-delay:600ms] max-w-xl mx-auto mb-8">
          <form onSubmit={handleSearch} className="relative group">
            <div className="absolute inset-0 bg-brand-200 rounded-full blur-md opacity-20 group-hover:opacity-40 transition-opacity"></div>
            <div className="relative flex items-center bg-white border border-gray-200 rounded-full p-2 shadow-lg focus-within:ring-4 focus-within:ring-brand-100 transition-all">
              <Search className="ml-4 text-gray-400" size={20} />
              <input 
                type="text" 
                placeholder="What do you want to learn today?" 
                className="flex-grow bg-transparent border-none focus:ring-0 text-gray-900 placeholder-gray-400 px-4 text-sm md:text-base h-10 md:h-12 outline-none"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button 
                type="submit" 
                className="bg-gray-900 text-white px-6 py-2.5 rounded-full font-medium hover:bg-gray-800 transition-colors flex items-center gap-2 text-sm md:text-base"
              >
                Search
              </button>
            </div>
          </form>
        </div>

        {/* Links */}
        <div className="animate-fade-in-up [animation-delay:800ms] flex items-center justify-center gap-6 text-sm font-medium text-gray-600">
          <span>Popular:</span>
          <div className="flex gap-3 overflow-x-auto no-scrollbar py-2">
            <button onClick={() => navigate('/courses')} className="whitespace-nowrap hover:text-brand-600 transition-colors underline decoration-gray-300 underline-offset-4 hover:decoration-brand-600">Web Dev</button>
            <button onClick={() => navigate('/courses')} className="whitespace-nowrap hover:text-brand-600 transition-colors underline decoration-gray-300 underline-offset-4 hover:decoration-brand-600">Data Science</button>
            <button onClick={() => navigate('/courses')} className="whitespace-nowrap hover:text-brand-600 transition-colors underline decoration-gray-300 underline-offset-4 hover:decoration-brand-600">UX Design</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
