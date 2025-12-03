
import React, { useState, useEffect } from 'react';
import { Menu, X, BookOpen, ChevronRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const isHome = location.pathname === '/';
  
  // Dynamic styles based on scroll and page
  const navBackground = isScrolled || !isHome 
    ? 'bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-200/50' 
    : 'bg-transparent';
    
  const padding = isScrolled ? 'py-3' : 'py-5';

  const navLinks = [
    { name: 'Courses', path: '/courses' },
    { name: 'Features', path: '#' },
    { name: 'Mentors', path: '#' },
    { name: 'Pricing', path: '#' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${navBackground} ${padding}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group relative z-50">
            <div className={`p-2 rounded-xl transition-colors duration-300 ${isScrolled || !isHome ? 'bg-gray-900 text-white' : 'bg-gray-900 text-white'}`}>
              <BookOpen size={20} />
            </div>
            <span className={`text-xl font-bold tracking-tight transition-colors duration-300 ${isScrolled || !isHome ? 'text-gray-900' : 'text-gray-900'}`}>
              ElimuTech
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex gap-6">
              {navLinks.map((link) => (
                <Link 
                  key={link.name}
                  to={link.path} 
                  className="relative text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors py-1 group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-500 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </div>
            
            <div className="flex items-center gap-3 pl-6 border-l border-gray-200">
              <button className="text-sm font-bold text-gray-900 hover:text-brand-600 transition-colors">
                Log In
              </button>
              <button className="bg-gray-900 hover:bg-gray-800 text-white px-5 py-2.5 rounded-full text-sm font-bold transition-all shadow-lg shadow-gray-900/20 hover:-translate-y-0.5 hover:shadow-xl">
                Get Started
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden relative z-50">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="p-2 text-gray-600 hover:text-gray-900 focus:outline-none bg-gray-100/50 rounded-lg backdrop-blur-sm"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-white z-40 md:hidden transition-transform duration-500 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full pt-24 px-6 pb-8">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link 
                key={link.name}
                to={link.path} 
                className="text-2xl font-bold text-gray-900 py-4 border-b border-gray-100 flex justify-between items-center group"
              >
                {link.name}
                <ChevronRight size={20} className="text-gray-300 group-hover:text-brand-500 transition-colors" />
              </Link>
            ))}
          </div>
          
          <div className="mt-auto flex flex-col gap-4">
            <button className="w-full text-center text-gray-900 font-bold py-4 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors">
              Log In
            </button>
            <button className="w-full bg-gray-900 text-white font-bold py-4 rounded-xl shadow-lg shadow-gray-900/20 active:scale-95 transition-transform">
              Get Started Free
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
