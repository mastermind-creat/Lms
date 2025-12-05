
import React, { useState, useEffect } from 'react';
import { Menu, X, BookOpen, ChevronRight, Home, Zap, Users, CreditCard, LogIn } from 'lucide-react';
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

  // Lock body scroll when mobile menu is open
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
  
  // Logic for Navbar Background
  const navBackground = isOpen
    ? 'bg-white shadow-none' 
    : (isScrolled || !isHome 
        ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-200/50' 
        : 'bg-transparent');
    
  const padding = isScrolled ? 'py-2 md:py-3' : 'py-3 md:py-5';

  // Text Color Logic
  const textColor = (isScrolled || !isHome || isOpen) ? 'text-gray-900' : 'text-white';
  const iconColor = (isScrolled || !isHome || isOpen) ? 'text-gray-600' : 'text-white/80';
  const hoverBg = (isScrolled || !isHome || isOpen) ? 'hover:bg-gray-100' : 'hover:bg-white/10';

  const navLinks = [
    { name: 'Home', path: '/', icon: <Home size={16} /> },
    { name: 'Courses', path: '/courses', icon: <BookOpen size={16} /> },
    { name: 'Features', path: '#', icon: <Zap size={16} /> },
    { name: 'Mentors', path: '#', icon: <Users size={16} /> },
    { name: 'Pricing', path: '#', icon: <CreditCard size={16} /> },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${navBackground} ${padding}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group relative z-50">
            <div className={`p-1.5 md:p-2 rounded-xl transition-all duration-300 ${isScrolled || !isHome || isOpen ? 'bg-brand-600 text-white shadow-lg shadow-brand-500/30' : 'bg-white text-brand-600'}`}>
              <BookOpen size={18} className="md:w-5 md:h-5" />
            </div>
            <span className={`text-lg md:text-xl font-bold tracking-tight font-display transition-colors duration-300 ${textColor}`}>
              ElimuTech
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-2 lg:gap-6">
            <div className={`flex items-center rounded-full p-1 border backdrop-blur-sm transition-colors duration-300 ${isScrolled || !isHome ? 'bg-gray-100/50 border-gray-200/50' : 'bg-white/10 border-white/10'}`}>
              {navLinks.map((link) => (
                <Link 
                  key={link.name}
                  to={link.path} 
                  className={`relative flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    location.pathname === link.path
                      ? 'bg-white text-brand-600 shadow-sm'
                      : `${iconColor} ${hoverBg} hover:text-white`
                  }`}
                >
                  <span className={`${location.pathname === link.path ? 'text-brand-500' : ''}`}>
                    {link.icon}
                  </span>
                  <span className={location.pathname === link.path ? 'text-brand-600' : ''}>
                    {link.name}
                  </span>
                </Link>
              ))}
            </div>
            
            <div className="flex items-center gap-3 pl-4">
              <button className={`flex items-center gap-2 text-sm font-bold transition-colors px-3 py-2 rounded-lg ${hoverBg} ${textColor}`}>
                <LogIn size={18} />
                Log In
              </button>
              <button className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all shadow-lg hover:-translate-y-0.5 ${isScrolled || !isHome ? 'bg-gray-900 text-white shadow-gray-900/20' : 'bg-white text-brand-600 shadow-black/20'}`}>
                Get Started
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden relative z-50">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className={`p-2 transition-colors focus:outline-none rounded-lg backdrop-blur-sm ${
                isOpen
                  ? 'bg-gray-100 text-gray-900 hover:bg-gray-200' 
                  : (isScrolled || !isHome ? 'bg-gray-100 text-gray-900' : 'bg-white/20 text-white hover:bg-white/30')
              }`}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-white z-40 md:hidden transition-transform duration-500 ease-in-out flex flex-col pt-20 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full px-4 pb-6 overflow-y-auto">
          {/* Links */}
          <div className="flex flex-col gap-2 mb-6">
            {navLinks.map((link, index) => (
              <Link 
                key={link.name}
                to={link.path} 
                className="flex items-center justify-between p-3 rounded-xl bg-gray-50 border border-gray-100 active:scale-[0.98] transition-all group"
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <div className="flex items-center gap-3">
                  <div className={`p-1.5 rounded-lg ${
                    location.pathname === link.path 
                      ? 'bg-brand-100 text-brand-600' 
                      : 'bg-white text-gray-500 group-hover:text-brand-500'
                  }`}>
                    {link.icon}
                  </div>
                  <span className={`text-sm font-bold ${
                    location.pathname === link.path ? 'text-brand-700' : 'text-gray-900'
                  }`}>
                    {link.name}
                  </span>
                </div>
                <ChevronRight size={16} className="text-gray-300 group-hover:text-brand-500 transition-colors" />
              </Link>
            ))}
          </div>
          
          {/* CTA Section */}
          <div className="mt-auto space-y-3">
            <div className="p-3 bg-brand-50 rounded-xl border border-brand-100">
              <h4 className="font-bold text-brand-900 mb-0.5 text-xs">Ready to learn?</h4>
              <p className="text-[10px] text-brand-700 mb-2">Join 5,000+ students today.</p>
              <button className="w-full bg-brand-600 text-white font-bold py-2.5 rounded-lg shadow-lg shadow-brand-500/30 active:scale-95 transition-transform flex items-center justify-center gap-2 text-xs">
                Get Started Free <ChevronRight size={14} />
              </button>
            </div>
            
            <button className="w-full flex items-center justify-center gap-2 text-gray-700 font-bold py-3 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors text-xs">
              <LogIn size={16} />
              Log In to Account
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
