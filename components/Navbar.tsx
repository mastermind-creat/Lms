import React, { useState, useEffect } from 'react';
import { Menu, X, BookOpen } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHome = location.pathname === '/';
  // If not home, we always want a solid background for readability
  const navClass = isScrolled || !isHome 
    ? 'bg-white/80 backdrop-blur-lg border-b border-gray-100 py-4' 
    : 'bg-transparent py-6';

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${navClass}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="bg-gray-900 text-white p-2 rounded-lg group-hover:bg-primary-600 transition-colors">
              <BookOpen size={20} />
            </div>
            <span className="text-lg font-bold text-gray-900 tracking-tight">ElimuTech</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/courses" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">Courses</Link>
            <a href="#" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">Features</a>
            <a href="#" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">Mentors</a>
            <a href="#" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">Pricing</a>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-sm font-medium text-gray-900 hover:text-primary-600 transition-colors">
              Log In
            </button>
            <button className="bg-gray-900 hover:bg-gray-800 text-white px-5 py-2 rounded-full text-sm font-medium transition-all shadow-sm hover:shadow">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-xl py-4 px-4 flex flex-col space-y-2">
          <Link to="/courses" className="text-gray-600 hover:text-gray-900 font-medium py-3 px-2 rounded-lg hover:bg-gray-50">Courses</Link>
          <a href="#" className="text-gray-600 hover:text-gray-900 font-medium py-3 px-2 rounded-lg hover:bg-gray-50">Features</a>
          <a href="#" className="text-gray-600 hover:text-gray-900 font-medium py-3 px-2 rounded-lg hover:bg-gray-50">Mentors</a>
          <a href="#" className="text-gray-600 hover:text-gray-900 font-medium py-3 px-2 rounded-lg hover:bg-gray-50">Pricing</a>
          <div className="flex flex-col space-y-3 pt-4 border-t border-gray-50 mt-2">
            <button className="w-full text-center text-gray-900 font-medium py-2.5 border border-gray-200 rounded-lg">
              Log In
            </button>
            <button className="w-full bg-gray-900 text-white font-medium py-3 rounded-lg">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;