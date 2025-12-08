import React from 'react';
import { Globe, Send } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white pt-12 pb-8 border-t border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
        
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between gap-8 mb-12 border-b border-gray-200 dark:border-gray-800 pb-8">
           <div className="space-y-4 max-w-sm">
             <h4 className="font-bold text-lg">Teach the world online</h4>
             <p className="text-sm text-gray-600 dark:text-gray-300">
               Create an online video course, reach students across the globe, and earn money.
             </p>
             <Link to="/signup" className="px-6 py-2 border border-gray-900 dark:border-white font-bold hover:bg-gray-200 dark:hover:bg-white/10 transition-colors w-fit h-fit text-sm rounded-lg inline-block">
               Teach on ElimuTech
             </Link>
           </div>

           {/* Newsletter Form */}
           <div className="bg-gray-200 dark:bg-gray-800 p-6 rounded-2xl w-full lg:w-auto shadow-sm">
             <h4 className="font-bold text-gray-900 dark:text-white mb-2">Subscribe to our Newsletter</h4>
             <p className="text-xs text-gray-600 dark:text-gray-400 mb-4">Get the latest updates, course discounts, and tech news.</p>
             <form className="flex gap-2">
               <input 
                 type="email" 
                 placeholder="Enter your email" 
                 className="bg-white dark:bg-gray-700 border-none rounded-lg px-4 py-2 text-sm text-gray-900 dark:text-white focus:ring-2 focus:ring-brand-500 outline-none w-full md:w-64 placeholder:text-gray-400"
               />
               <button type="submit" className="bg-brand-600 hover:bg-brand-700 text-white px-4 py-2 rounded-lg transition-colors flex items-center justify-center shadow-lg shadow-brand-500/20">
                 <Send size={18} />
               </button>
             </form>
           </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 text-xs md:text-sm">
          <div className="flex flex-col gap-3">
            <h5 className="font-bold text-gray-500 uppercase tracking-wider text-[10px] mb-1">Company</h5>
            <a href="#" className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors">Contact us</a>
            <a href="#" className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors">Careers</a>
            <a href="#" className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors">Blog</a>
          </div>
          <div className="flex flex-col gap-3">
             <h5 className="font-bold text-gray-500 uppercase tracking-wider text-[10px] mb-1">Community</h5>
            <a href="#" className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors">Learners</a>
            <a href="#" className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors">Partners</a>
            <a href="#" className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors">Developers</a>
            <a href="#" className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors">Affiliate</a>
          </div>
          <div className="flex flex-col gap-3">
             <h5 className="font-bold text-gray-500 uppercase tracking-wider text-[10px] mb-1">More</h5>
            <a href="#" className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors">Terms</a>
            <a href="#" className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors">Privacy policy</a>
            <a href="#" className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors">Cookie settings</a>
            <a href="#" className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors">Accessibility</a>
          </div>
          <div className="flex flex-col gap-4 items-start md:items-end">
             <button className="flex items-center gap-2 border border-gray-400 dark:border-gray-600 rounded px-4 py-1.5 font-bold hover:bg-gray-200 dark:hover:bg-white/5 text-sm transition-colors text-gray-700 dark:text-gray-300">
               <Globe size={16} /> English
             </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-gray-200 dark:border-gray-800">
          <div className="flex items-center gap-2">
             <img src="/logo.png" alt="ElimuTech" className="h-6 w-auto dark:brightness-0 dark:invert" />
             <span className="font-display font-bold text-lg text-brand-900 dark:text-white">ElimuTech</span>
          </div>
          <p className="text-[10px] text-gray-500">© 2025 ElimuTech, Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;