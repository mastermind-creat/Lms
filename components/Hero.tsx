import React, { useState } from 'react';
import { Search, Monitor, Briefcase, PenTool, Laptop, Calculator, Wand2 } from 'lucide-react';
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

  const handleCategoryClick = (category: string) => {
    navigate('/courses');
  };

  const categories = [
    { name: 'Tech & Coding', icon: <Monitor size={24} className="w-4 h-4 md:w-6 md:h-6" />, color: 'text-brand-500', bg: 'bg-brand-50' },
    { name: 'Business', icon: <Briefcase size={24} className="w-4 h-4 md:w-6 md:h-6" />, color: 'text-purple-500', bg: 'bg-purple-50' },
    { name: 'Design', icon: <PenTool size={24} className="w-4 h-4 md:w-6 md:h-6" />, color: 'text-yellow-500', bg: 'bg-yellow-50' },
    { name: 'IT & Software', icon: <Laptop size={24} className="w-4 h-4 md:w-6 md:h-6" />, color: 'text-blue-500', bg: 'bg-blue-50' },
    { name: 'Mathematics', icon: <Calculator size={24} className="w-4 h-4 md:w-6 md:h-6" />, color: 'text-green-500', bg: 'bg-green-50' },
    { name: 'Marketing', icon: <Wand2 size={24} className="w-4 h-4 md:w-6 md:h-6" />, color: 'text-orange-500', bg: 'bg-orange-50' },
  ];

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center pt-24 md:pt-32 pb-10 md:pb-20 px-4 overflow-hidden bg-brand-900">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=2000&q=80" 
          alt="Students learning" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-brand-900/90 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center w-full">
        
        <h1 className="animate-fade-in-up text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight tracking-tight">
          Take the First Step of Your <br className="hidden md:block" />
          Journey to Success
        </h1>
        
        <p className="animate-fade-in-up [animation-delay:200ms] text-xs md:text-lg text-gray-200 mb-8 md:mb-10 max-w-3xl mx-auto leading-relaxed">
          Who tells you can't do it? Build the confidence, skills, and qualifications to take control of your future. Start one of our 1000 high quality courses from the world's leading experts today!
        </p>
        
        <div className="animate-fade-in-up [animation-delay:300ms] mb-6 md:mb-8">
           <span className="inline-block bg-brand-500 text-white text-[10px] md:text-sm font-bold px-3 py-1 rounded-full animate-pulse shadow-lg shadow-brand-500/50">
             🚀 Admissions Open for 2026
           </span>
        </div>
        
        <div className="animate-fade-in-up [animation-delay:400ms] max-w-2xl mx-auto mb-8 md:mb-16">
          <div className="bg-white/10 backdrop-blur-md p-1 md:p-1.5 rounded-xl md:rounded-2xl border border-white/20 shadow-2xl">
             <div className="bg-white rounded-lg md:rounded-xl p-1 md:p-2 flex flex-col md:flex-row items-center gap-2">
                <div className="hidden md:flex items-center justify-center px-4 py-2 bg-gray-100 rounded-lg text-gray-600 text-sm font-bold whitespace-nowrap">
                  What do you want to learn?
                </div>
                <form onSubmit={handleSearch} className="flex-grow flex items-center w-full relative">
                  <Search className="absolute left-3 text-gray-400" size={16} />
                  <input 
                    type="text" 
                    placeholder="Search courses..." 
                    className="w-full pl-9 pr-3 py-2 md:py-3 bg-transparent text-gray-900 placeholder-gray-500 outline-none font-medium text-xs md:text-base"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </form>
             </div>
          </div>
        </div>

        <div className="animate-fade-in-up [animation-delay:600ms] grid grid-cols-4 md:grid-cols-3 gap-2 md:gap-6 max-w-4xl mx-auto">
          {categories.map((cat, index) => (
            <button 
              key={index}
              onClick={() => handleCategoryClick(cat.name)}
              className="group bg-white rounded-lg md:rounded-xl p-2 md:p-8 flex flex-col items-center justify-center gap-2 md:gap-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-900/20 active:scale-95"
            >
              <div className={`w-8 h-8 md:w-14 md:h-14 rounded-full ${cat.bg} flex items-center justify-center ${cat.color} transition-transform duration-300 group-hover:scale-110 shrink-0`}>
                {cat.icon}
              </div>
              <span className="font-bold text-gray-900 text-[9px] md:text-base text-center leading-tight">{cat.name}</span>
            </button>
          ))}
        </div>

      </div>

      <div className="absolute bottom-0 left-0 w-full h-12 md:h-24 bg-gradient-to-t from-white dark:from-gray-900 to-transparent z-0"></div>
    </section>
  );
};

export default Hero;