
import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Hero: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate('/courses');
    }
  };

  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden bg-white">
      {/* Animated Mesh Gradient Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,rgba(14,165,233,0.15),rgba(255,255,255,0))] z-0 pointer-events-none"></div>
      
      {/* Floating Elements for "Live" feel */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-brand-500 rounded-full animate-float opacity-50"></div>
      <div className="absolute top-40 right-20 w-3 h-3 bg-accent-500 rounded-full animate-pulse opacity-50"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Welcome Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-gray-200 shadow-sm text-gray-600 text-xs md:text-sm font-medium mb-8 animate-fade-in-up hover:border-brand-300 transition-colors cursor-default">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          <span className="tracking-wide">Admissions Open for 2026</span>
        </div>
        
        {/* Headline */}
        <h1 className="animate-fade-in-up [animation-delay:200ms] text-4xl sm:text-5xl md:text-7xl font-bold text-gray-900 leading-[1.1] tracking-tight mb-6">
          Growth Starts Here. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 via-accent-500 to-brand-600 bg-[length:200%_auto] animate-scroll">
            Master Real Skills.
          </span>
        </h1>
        
        {/* Subheadline */}
        <p className="animate-fade-in-up [animation-delay:400ms] text-base md:text-lg text-gray-500 mb-10 max-w-2xl mx-auto leading-relaxed">
          Join a community of learners building the future of Africa. Practical courses, expert mentors, and real-world projects await you.
        </p>
        
        {/* Search Bar */}
        <div className="animate-fade-in-up [animation-delay:600ms] max-w-xl mx-auto mb-8">
          <form onSubmit={handleSearch} className="relative group">
            {/* Illuminated Glow behind search */}
            <div className="absolute inset-0 bg-gradient-to-r from-brand-200 to-accent-200 rounded-full blur-md opacity-30 group-hover:opacity-60 transition-opacity duration-500"></div>
            
            <div className="relative flex items-center bg-white border border-gray-200 rounded-full p-1.5 shadow-lg focus-within:border-brand-300 transition-all">
              <Search className="ml-4 text-gray-400" size={18} />
              <input 
                type="text" 
                placeholder="What do you want to learn today?" 
                className="flex-grow bg-transparent border-none focus:ring-0 text-gray-900 placeholder-gray-400 px-3 text-sm h-10 outline-none"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button 
                type="submit" 
                className="bg-gray-900 text-white px-5 py-2.5 rounded-full font-bold hover:bg-gray-800 transition-colors text-xs md:text-sm shadow-md"
              >
                Search
              </button>
            </div>
          </form>
        </div>

        {/* Links */}
        <div className="animate-fade-in-up [animation-delay:800ms] flex items-center justify-center gap-4 text-xs md:text-sm font-medium text-gray-500">
          <span className="opacity-60">Trending:</span>
          <div className="flex gap-3 overflow-x-auto no-scrollbar py-2">
            <button onClick={() => navigate('/courses')} className="hover:text-brand-600 transition-colors hover:underline">Web Dev</button>
            <button onClick={() => navigate('/courses')} className="hover:text-brand-600 transition-colors hover:underline">Data Science</button>
            <button onClick={() => navigate('/courses')} className="hover:text-brand-600 transition-colors hover:underline">UX Design</button>
          </div>
        </div>
      </div>

      {/* Illuminated Line Separator */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-500 to-transparent w-1/2 mx-auto opacity-50"></div>
      </div>
    </section>
  );
};

export default Hero;
