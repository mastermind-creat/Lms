import React, { useState, useEffect } from 'react';
import { Menu, X, BookOpen } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer">
            <div className="bg-primary-600 p-2 rounded-lg text-white">
              <BookOpen size={24} />
            </div>
            <span className="text-xl font-bold text-gray-900 tracking-tight">ElimuTech</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-600 hover:text-primary-600 font-medium transition-colors">Courses</a>
            <a href="#" className="text-gray-600 hover:text-primary-600 font-medium transition-colors">Features</a>
            <a href="#" className="text-gray-600 hover:text-primary-600 font-medium transition-colors">Mentors</a>
            <a href="#" className="text-gray-600 hover:text-primary-600 font-medium transition-colors">Pricing</a>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-gray-900 font-medium hover:text-primary-600 transition-colors">
              Log In
            </button>
            <button className="bg-primary-600 hover:bg-primary-700 text-white px-5 py-2.5 rounded-full font-medium transition-all transform hover:scale-105 shadow-md hover:shadow-lg">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-lg py-4 px-4 flex flex-col space-y-4">
          <a href="#" className="text-gray-700 hover:text-primary-600 font-medium py-2 border-b border-gray-50">Courses</a>
          <a href="#" className="text-gray-700 hover:text-primary-600 font-medium py-2 border-b border-gray-50">Features</a>
          <a href="#" className="text-gray-700 hover:text-primary-600 font-medium py-2 border-b border-gray-50">Mentors</a>
          <a href="#" className="text-gray-700 hover:text-primary-600 font-medium py-2">Pricing</a>
          <div className="flex flex-col space-y-3 pt-2">
            <button className="w-full text-center text-gray-700 font-medium py-2 border border-gray-200 rounded-lg">
              Log In
            </button>
            <button className="w-full bg-primary-600 text-white font-medium py-3 rounded-lg shadow-md">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;