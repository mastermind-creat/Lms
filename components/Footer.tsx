
import React from 'react';
import { Twitter, Linkedin, Facebook, Instagram, Apple, Play, Send } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-gray-950 border-t border-gray-100 dark:border-gray-800 pt-8 pb-6 md:pt-16 md:pb-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-12 md:mb-16 bg-brand-50 dark:bg-brand-900/10 rounded-2xl md:rounded-3xl p-6 md:p-10 flex flex-col lg:flex-row items-center justify-between gap-6 md:gap-10 border border-brand-100 dark:border-brand-900/30">
          <div className="text-center lg:text-left">
            <h3 className="text-lg md:text-2xl font-bold text-gray-900 dark:text-white mb-2">Subscribe to our newsletter</h3>
            <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400 max-w-md mx-auto lg:mx-0">
              Get the latest course updates, tech news from Silicon Savannah, and exclusive offers delivered to your inbox.
            </p>
          </div>
          <div className="w-full max-w-md">
            <form className="flex flex-col sm:flex-row gap-2">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="flex-grow px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-500 text-sm"
              />
              <button 
                type="button"
                className="px-6 py-3 bg-brand-500 hover:bg-brand-600 text-white font-bold rounded-xl transition-colors flex items-center justify-center gap-2 shadow-lg shadow-brand-500/20"
              >
                Subscribe <Send size={16} />
              </button>
            </form>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-12 mb-8 md:mb-12">
          
          <div className="col-span-2 lg:col-span-2">
            <div className="flex items-center gap-1.5 md:gap-2 mb-2 md:mb-4">
              <img 
                src="/logo.png" 
                alt="ElimuTech" 
                className="h-8 md:h-10 w-auto object-contain dark:brightness-0 dark:invert" 
              />
            </div>
            <p className="text-gray-500 dark:text-gray-400 text-[10px] md:text-sm leading-relaxed mb-4 md:mb-6 max-w-xs">
              ElimuTech is an online learning platform dedicated to providing accessible, high-quality digital education to students worldwide.
            </p>
            <div className="flex gap-3 md:gap-4 mb-4 md:mb-8">
              <a href="#" className="text-gray-400 hover:text-brand-500 dark:hover:text-brand-400 transition-colors"><Twitter size={14} className="md:w-5 md:h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-brand-500 dark:hover:text-brand-400 transition-colors"><Linkedin size={14} className="md:w-5 md:h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-brand-500 dark:hover:text-brand-400 transition-colors"><Facebook size={14} className="md:w-5 md:h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-brand-500 dark:hover:text-brand-400 transition-colors"><Instagram size={14} className="md:w-5 md:h-5" /></a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 dark:text-white mb-3 md:mb-6 text-xs md:text-base">Platform</h4>
            <ul className="space-y-2 md:space-y-4 text-[10px] md:text-sm text-gray-500 dark:text-gray-400">
              <li><a href="#" className="hover:text-brand-500 dark:hover:text-brand-400 transition-colors">Browse Courses</a></li>
              <li><a href="#" className="hover:text-brand-500 dark:hover:text-brand-400 transition-colors">Mentorship</a></li>
              <li><a href="#" className="hover:text-brand-500 dark:hover:text-brand-400 transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-brand-500 dark:hover:text-brand-400 transition-colors">For Business</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 dark:text-white mb-3 md:mb-6 text-xs md:text-base">Company</h4>
            <ul className="space-y-2 md:space-y-4 text-[10px] md:text-sm text-gray-500 dark:text-gray-400">
              <li><a href="#" className="hover:text-brand-500 dark:hover:text-brand-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-brand-500 dark:hover:text-brand-400 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-brand-500 dark:hover:text-brand-400 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-brand-500 dark:hover:text-brand-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div className="col-span-2 md:col-span-1">
             <h4 className="font-bold text-gray-900 dark:text-white mb-3 md:mb-6 text-xs md:text-base">Get the App</h4>
             <div className="flex flex-row md:flex-col gap-2 md:gap-3">
               <button className="flex-1 flex items-center gap-2 md:gap-3 bg-brand-900 dark:bg-white text-white dark:text-gray-900 px-3 py-1.5 md:px-4 md:py-2 rounded-lg md:rounded-xl hover:bg-brand-800 dark:hover:bg-gray-100 transition-colors text-left">
                 <Apple size={16} className="md:w-5 md:h-5" />
                 <div>
                   <div className="text-[8px] md:text-[10px] uppercase font-bold text-gray-400 dark:text-gray-500">Download on the</div>
                   <div className="text-xs md:text-sm font-bold leading-none">App Store</div>
                 </div>
               </button>
               <button className="flex-1 flex items-center gap-2 md:gap-3 bg-brand-900 dark:bg-white text-white dark:text-gray-900 px-3 py-1.5 md:px-4 md:py-2 rounded-lg md:rounded-xl hover:bg-brand-800 dark:hover:bg-gray-100 transition-colors text-left">
                 <Play size={16} className="fill-current md:w-5 md:h-5" />
                 <div>
                   <div className="text-[8px] md:text-[10px] uppercase font-bold text-gray-400 dark:text-gray-500">Get it on</div>
                   <div className="text-xs md:text-sm font-bold leading-none">Google Play</div>
                 </div>
               </button>
             </div>
          </div>
        </div>

        <div className="border-t border-gray-100 dark:border-gray-800 pt-4 md:pt-8 flex flex-col md:flex-row justify-between items-center gap-2 md:gap-4 text-[10px] md:text-sm text-gray-400 dark:text-gray-500">
          <p>© 2025 ElimuTech. All rights reserved.</p>
          <div className="flex gap-4 md:gap-6">
            <a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
