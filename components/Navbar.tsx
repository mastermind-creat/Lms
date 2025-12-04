
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
  
  // Dynamic styles based on scroll, page, and mobile menu state
  // If menu is open, force white background to match overlay
  const navBackground = isOpen
    ? 'bg-white' 
    : (isScrolled || !isHome 
        ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-200/50' 
        : 'bg-transparent');
    
  const padding = isScrolled ? 'py-3' : 'py-4 md:py-5';

  const navLinks = [
    { name: 'Home', path: '/', icon: <Home size={18} /> },
    { name: 'Courses', path: '/courses', icon: <BookOpen size={18} /> },
    { name: 'Features', path: '#', icon: <Zap size={18} /> },
    { name: 'Mentors', path: '#', icon: <Users size={18} /> },
    { name: 'Pricing', path: '#', icon: <CreditCard size={18} /> },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${navBackground} ${padding}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group relative z-50">
            <div className={`p-2 rounded-xl transition-all duration-300 ${isScrolled || !isHome || isOpen ? 'bg-brand-600 text-white shadow-lg shadow-brand-500/30' : 'bg-gray-900 text-white'}`}>
              <BookOpen size={20} />
            </div>
            <span className={`text-xl font-bold tracking-tight font-display transition-colors duration-300 ${isScrolled || !isHome || isOpen ? 'text-gray-900' : 'text-gray-900'}`}>
              ElimuTech
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-2 lg:gap-6">
            <div className="flex items-center bg-gray-100/50 rounded-full p-1 border border-gray-200/50 backdrop-blur-sm">
              {navLinks.map((link) => (
                <Link 
                  key={link.name}
                  to={link.path} 
                  className={`relative flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    location.pathname === link.path
                      ? 'bg-white text-brand-600 shadow-sm'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-200/50'
                  }`}
                >
                  <span className={`${location.pathname === link.path ? 'text-brand-500' : 'text-gray-400 group-hover:text-gray-600'}`}>
                    {link.icon}
                  </span>
                  {link.name}
                </Link>
              ))}
            </div>
            
            <div className="flex items-center gap-3 pl-4">
              <button className="flex items-center gap-2 text-sm font-bold text-gray-700 hover:text-brand-600 transition-colors px-3 py-2 rounded-lg hover:bg-gray-50">
                <LogIn size={18} />
                Log In
              </button>
              <button className="bg-gray-900 hover:bg-brand-600 text-white px-5 py-2.5 rounded-full text-sm font-bold transition-all shadow-lg shadow-gray-900/20 hover:-translate-y-0.5 hover:shadow-brand-500/30">
                Get Started
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden relative z-50">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className={`p-2.5 transition-colors focus:outline-none rounded-xl backdrop-blur-sm ${
                isOpen || isScrolled || !isHome 
                  ? 'bg-gray-100 text-gray-900 hover:bg-gray-200' 
                  : 'bg-white/20 text-gray-900 hover:bg-white/30'
              }`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-white z-40 md:hidden transition-transform duration-500 ease-in-out flex flex-col pt-24 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full px-6 pb-8 overflow-y-auto">
          {/* Links */}
          <div className="flex flex-col gap-2 mb-8">
            {navLinks.map((link, index) => (
              <Link 
                key={link.name}
                to={link.path} 
                className="flex items-center justify-between p-4 rounded-2xl bg-gray-50 border border-gray-100 active:scale-[0.98] transition-all group"
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <div className="flex items-center gap-4">
                  <div className={`p-2.5 rounded-xl ${
                    location.pathname === link.path 
                      ? 'bg-brand-100 text-brand-600' 
                      : 'bg-white text-gray-500 group-hover:text-brand-500'
                  }`}>
                    {link.icon}
                  </div>
                  <span className={`text-lg font-bold ${
                    location.pathname === link.path ? 'text-brand-700' : 'text-gray-900'
                  }`}>
                    {link.name}
                  </span>
                </div>
                <ChevronRight size={20} className="text-gray-300 group-hover:text-brand-500 transition-colors" />
              </Link>
            ))}
          </div>
          
          {/* CTA Section */}
          <div className="mt-auto space-y-4">
            <div className="p-4 bg-brand-50 rounded-2xl border border-brand-100">
              <h4 className="font-bold text-brand-900 mb-1">Ready to learn?</h4>
              <p className="text-sm text-brand-700 mb-3">Join 5,000+ students today.</p>
              <button className="w-full bg-brand-600 text-white font-bold py-3.5 rounded-xl shadow-lg shadow-brand-500/30 active:scale-95 transition-transform flex items-center justify-center gap-2">
                Get Started Free <ChevronRight size={18} />
              </button>
            </div>
            
            <button className="w-full flex items-center justify-center gap-2 text-gray-700 font-bold py-4 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors">
              <LogIn size={20} />
              Log In to Account
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
