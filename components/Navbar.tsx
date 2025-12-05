import React, { useState, useEffect } from 'react';
import { Menu, X, BookOpen, ChevronRight, Home, Zap, Users, CreditCard, LogIn, Moon, Sun, Laptop } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const isHome = location.pathname === '/';
  
  const navBackground = isOpen
    ? 'bg-white dark:bg-gray-900 shadow-sm' 
    : (isScrolled || !isHome 
        ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-sm border-b border-gray-200/50 dark:border-gray-800/50' 
        : 'bg-transparent');
    
  const padding = isScrolled ? 'py-2 md:py-3' : 'py-3 md:py-5';
  const textColor = (isScrolled || !isHome || isOpen) ? 'text-gray-900 dark:text-white' : 'text-white';
  const iconColor = (isScrolled || !isHome || isOpen) ? 'text-gray-600 dark:text-gray-300' : 'text-white/80';
  const hoverBg = (isScrolled || !isHome || isOpen) ? 'hover:bg-gray-100 dark:hover:bg-gray-800' : 'hover:bg-white/10';

  const navLinks = [
    { name: 'Home', path: '/', icon: <Home size={16} /> },
    { name: 'Courses', path: '/courses', icon: <BookOpen size={16} /> },
    { name: 'Features', path: '#', icon: <Zap size={16} /> },
    { name: 'Mentors', path: '#', icon: <Users size={16} /> },
    { name: 'Pricing', path: '#', icon: <CreditCard size={16} /> },
  ];

  const toggleTheme = () => {
    if (theme === 'light') setTheme('dark');
    else if (theme === 'dark') setTheme('system');
    else setTheme('light');
  };

  const ThemeIcon = () => {
    if (theme === 'dark') return <Moon size={18} />;
    if (theme === 'light') return <Sun size={18} />;
    return <Laptop size={18} />;
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${navBackground} ${padding}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center relative">
          <Link to="/" className="flex items-center gap-2 group relative z-50">
            <div className={`transition-all duration-300 ${isScrolled || !isHome || isOpen ? 'opacity-100' : 'brightness-0 invert opacity-90'}`}>
               <img src="/logo.png" alt="ElimuTech Logo" className="h-8 md:h-10 w-auto object-contain" />
            </div>
            <span className="sr-only">ElimuTech</span> 
          </Link>

          <div className="hidden md:flex items-center gap-2 lg:gap-6">
            <div className={`flex items-center rounded-full p-1 border backdrop-blur-sm transition-colors duration-300 ${isScrolled || !isHome ? 'bg-gray-100/50 border-gray-200/50 dark:bg-gray-800/50 dark:border-gray-700/50' : 'bg-white/10 border-white/10'}`}>
              {navLinks.map((link) => (
                <Link 
                  key={link.name}
                  to={link.path} 
                  className={`relative flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    location.pathname === link.path
                      ? 'bg-white dark:bg-gray-800 text-brand-500 dark:text-brand-400 shadow-sm'
                      : `${iconColor} ${hoverBg} hover:text-white dark:hover:text-white`
                  }`}
                >
                  <span className={`${location.pathname === link.path ? 'text-brand-500' : ''}`}>
                    {link.icon}
                  </span>
                  <span className={location.pathname === link.path ? 'text-brand-600 dark:text-brand-400' : ''}>
                    {link.name}
                  </span>
                </Link>
              ))}
            </div>
            
            <div className="flex items-center gap-3 pl-4">
              <button 
                onClick={toggleTheme}
                className={`p-2 rounded-full transition-colors ${hoverBg} ${textColor}`}
                aria-label="Toggle theme"
              >
                <ThemeIcon />
              </button>
              <button className={`flex items-center gap-2 text-sm font-bold transition-colors px-3 py-2 rounded-lg ${hoverBg} ${textColor}`}>
                <LogIn size={18} />
                Log In
              </button>
              <button className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all shadow-lg hover:-translate-y-0.5 ${isScrolled || !isHome ? 'bg-brand-900 text-white shadow-brand-900/20 dark:bg-brand-500 dark:text-white' : 'bg-white text-brand-500 shadow-black/20'}`}>
                Get Started
              </button>
            </div>
          </div>

          <div className="md:hidden flex items-center gap-2 relative z-50">
            <button 
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-colors ${
                isOpen 
                ? 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white' 
                : (isScrolled || !isHome ? 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white' : 'bg-white/20 text-white')
              }`}
            >
              <ThemeIcon />
            </button>
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className={`p-2 transition-colors focus:outline-none rounded-lg backdrop-blur-sm ${
                isOpen
                  ? 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-200' 
                  : (isScrolled || !isHome ? 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white' : 'bg-white/20 text-white hover:bg-white/30')
              }`}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-[2px] z-30 md:hidden animate-fade-in"
          onClick={() => setIsOpen(false)}
        />
      )}

      <div 
        className={`absolute top-full left-4 right-4 mt-2 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl z-40 md:hidden rounded-2xl shadow-2xl border border-white/50 dark:border-gray-800 origin-top transition-all duration-300 ease-out overflow-hidden ${
          isOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-4 pointer-events-none'
        }`}
      >
        <div className="flex flex-col p-2">
          <div className="grid grid-cols-2 gap-2 mb-2">
            {navLinks.map((link, index) => (
              <Link 
                key={link.name}
                to={link.path} 
                className={`flex flex-col items-center justify-center p-3 rounded-xl border active:scale-[0.98] transition-all group ${
                   location.pathname === link.path 
                    ? 'bg-brand-50 dark:bg-brand-900/20 border-brand-100 dark:border-brand-800' 
                    : 'bg-gray-50/50 dark:bg-gray-800/50 border-transparent hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <div className={`mb-1 ${
                  location.pathname === link.path ? 'text-brand-500 dark:text-brand-400' : 'text-gray-500 dark:text-gray-400'
                }`}>
                  {link.icon}
                </div>
                <span className={`text-xs font-bold ${
                  location.pathname === link.path ? 'text-brand-700 dark:text-brand-300' : 'text-gray-700 dark:text-gray-300'
                }`}>
                  {link.name}
                </span>
              </Link>
            ))}
          </div>
          
          <div className="flex gap-2">
             <button className="flex-1 flex items-center justify-center gap-2 text-gray-700 dark:text-gray-200 font-bold py-2.5 border border-gray-200 dark:border-gray-700 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors text-xs bg-white dark:bg-gray-800">
              <LogIn size={14} />
              Log In
            </button>
             <button className="flex-[2] bg-brand-500 text-white font-bold py-2.5 rounded-xl shadow-lg shadow-brand-500/30 active:scale-95 transition-transform flex items-center justify-center gap-2 text-xs">
              Get Started <ChevronRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;