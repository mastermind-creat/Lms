import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Search, ShoppingCart, Heart, Bell, Sun, Moon, Home, Info, Mail, HelpCircle, BookOpen, User, LayoutDashboard, Presentation } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { theme, setTheme } = useTheme();

  // Handle scroll effect for glassmorphism
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { name: 'Home', path: '/', icon: <Home size={18} /> },
    { name: 'Courses', path: '/courses', icon: <BookOpen size={18} /> },
    { name: 'Student', path: '/dashboard', icon: <LayoutDashboard size={18} /> },
    { name: 'Instructor', path: '/instructor', icon: <Presentation size={18} /> },
    { name: 'Contact', path: '/contact', icon: <Mail size={18} /> },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b border-transparent ${
        scrolled || isOpen
          ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-gray-200 dark:border-gray-800 shadow-sm' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 h-[72px] flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="flex-shrink-0 flex items-center gap-2" onClick={closeMenu}>
           <img 
             src="/logo.png" 
             alt="ElimuTech" 
             className="h-8 md:h-10 w-auto object-contain" 
           />
           <span className="font-display font-bold text-xl tracking-tight text-gray-900 dark:text-white hidden sm:block">
             Elimu<span className="text-brand-500">Tech</span>
           </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-1 bg-gray-100/50 dark:bg-gray-800/50 p-1 rounded-full border border-gray-200 dark:border-gray-700 backdrop-blur-sm">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold transition-all duration-300 ${
                isActive(link.path)
                  ? 'bg-white dark:bg-gray-700 text-brand-600 dark:text-brand-400 shadow-[inset_2px_2px_4px_#bebebe,inset_-2px_-2px_4px_#ffffff] dark:shadow-[inset_2px_2px_4px_#1a1a1a,inset_-2px_-2px_4px_#333333]'
                  : 'text-gray-600 dark:text-gray-300 hover:text-brand-500 hover:bg-white/50 dark:hover:bg-gray-700/50 [text-shadow:1px_1px_2px_rgba(255,255,255,0.8),-1px_-1px_2px_rgba(0,0,0,0.1)] dark:[text-shadow:1px_1px_2px_rgba(0,0,0,0.8),-1px_-1px_2px_rgba(255,255,255,0.1)]'
              }`}
            >
              {link.icon}
              {link.name}
            </Link>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2 md:gap-4">
          
          {/* Theme Toggle */}
          <button 
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2.5 rounded-full text-gray-600 dark:text-gray-300 hover:text-brand-500 transition-all shadow-[3px_3px_6px_#bebebe,-3px_-3px_6px_#ffffff] dark:shadow-[3px_3px_6px_#1a1a1a,-3px_-3px_6px_#333333] active:shadow-[inset_2px_2px_4px_#bebebe,inset_-2px_-2px_4px_#ffffff] dark:active:shadow-[inset_2px_2px_4px_#1a1a1a,inset_-2px_-2px_4px_#333333]"
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* Cart & Wishlist (Desktop) */}
          <div className="hidden md:flex gap-3">
            <button className="p-2.5 rounded-full text-gray-600 dark:text-gray-300 hover:text-brand-500 transition-all shadow-[3px_3px_6px_#bebebe,-3px_-3px_6px_#ffffff] dark:shadow-[3px_3px_6px_#1a1a1a,-3px_-3px_6px_#333333] active:shadow-[inset_2px_2px_4px_#bebebe,inset_-2px_-2px_4px_#ffffff] dark:active:shadow-[inset_2px_2px_4px_#1a1a1a,inset_-2px_-2px_4px_#333333]">
              <Heart size={18} />
            </button>
            <button className="p-2.5 rounded-full text-gray-600 dark:text-gray-300 hover:text-brand-500 transition-all shadow-[3px_3px_6px_#bebebe,-3px_-3px_6px_#ffffff] dark:shadow-[3px_3px_6px_#1a1a1a,-3px_-3px_6px_#333333] active:shadow-[inset_2px_2px_4px_#bebebe,inset_-2px_-2px_4px_#ffffff] dark:active:shadow-[inset_2px_2px_4px_#1a1a1a,inset_-2px_-2px_4px_#333333]">
              <ShoppingCart size={18} />
            </button>
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center gap-3 ml-2">
            <Link 
              to="/login"
              className="px-5 py-2 rounded-xl text-gray-700 dark:text-gray-200 font-bold text-sm hover:text-brand-500 transition-colors [text-shadow:1px_1px_2px_rgba(255,255,255,0.8),-1px_-1px_2px_rgba(0,0,0,0.1)] dark:[text-shadow:1px_1px_2px_rgba(0,0,0,0.8),-1px_-1px_2px_rgba(255,255,255,0.1)]"
            >
              Log in
            </Link>
            <Link 
              to="/signup"
              className="px-5 py-2.5 bg-brand-600 text-white font-bold text-sm rounded-xl shadow-lg hover:bg-brand-700 hover:shadow-brand-500/30 transition-all transform hover:-translate-y-0.5"
            >
              Sign up
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="lg:hidden p-2 text-gray-600 dark:text-gray-300 hover:text-brand-500 transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div 
        className={`lg:hidden absolute top-[72px] left-0 w-full bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border-b border-gray-100 dark:border-gray-800 shadow-xl transition-all duration-300 origin-top overflow-hidden ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="p-6 space-y-6">
          <div className="grid grid-cols-2 gap-3">
             {navLinks.map((link) => (
               <Link
                 key={link.name}
                 to={link.path}
                 onClick={closeMenu}
                 className={`flex flex-col items-center justify-center gap-2 p-4 rounded-2xl transition-all ${
                   isActive(link.path)
                     ? 'bg-brand-50 dark:bg-brand-900/20 text-brand-600 dark:text-brand-400 border border-brand-100 dark:border-brand-800 shadow-inner'
                     : 'bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 shadow-sm'
                 }`}
               >
                 {link.icon}
                 <span className="text-sm font-bold [text-shadow:1px_1px_1px_rgba(0,0,0,0.1)]">{link.name}</span>
               </Link>
             ))}
          </div>

          <div className="pt-4 border-t border-gray-100 dark:border-gray-800 flex flex-col gap-3">
            <Link 
              to="/login" 
              onClick={closeMenu}
              className="w-full py-3 text-center rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white font-bold shadow-[5px_5px_10px_#d1d1d1,-5px_-5px_10px_#ffffff] dark:shadow-[5px_5px_10px_#0b0c15,-5px_-5px_10px_#171c2b]"
            >
              Log in
            </Link>
            <Link 
              to="/signup" 
              onClick={closeMenu}
              className="w-full py-3 text-center rounded-xl bg-brand-600 text-white font-bold shadow-lg shadow-brand-500/20"
            >
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;