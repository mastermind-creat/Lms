
import React from 'react';
import { BookOpen, Twitter, Linkedin, Facebook, Instagram, Apple, Play } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-8 pb-6 md:pt-16 md:pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-12 mb-8 md:mb-12">
          
          {/* Brand Column */}
          <div className="col-span-2 lg:col-span-2">
            <div className="flex items-center gap-1.5 md:gap-2 mb-2 md:mb-4">
              <div className="bg-brand-600 p-1 md:p-1.5 rounded-lg text-white">
                <BookOpen size={14} className="md:w-5 md:h-5" />
              </div>
              <span className="text-base md:text-xl font-bold text-gray-900">ElimuTech</span>
            </div>
            <p className="text-gray-500 text-[10px] md:text-sm leading-relaxed mb-4 md:mb-6 max-w-xs">
              ElimuTech is an online learning platform dedicated to providing accessible, high-quality digital education to students worldwide.
            </p>
            <div className="flex gap-3 md:gap-4 mb-4 md:mb-8">
              <a href="#" className="text-gray-400 hover:text-brand-600 transition-colors"><Twitter size={14} className="md:w-5 md:h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-brand-600 transition-colors"><Linkedin size={14} className="md:w-5 md:h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-brand-600 transition-colors"><Facebook size={14} className="md:w-5 md:h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-brand-600 transition-colors"><Instagram size={14} className="md:w-5 md:h-5" /></a>
            </div>
          </div>

          {/* Links 1 */}
          <div>
            <h4 className="font-bold text-gray-900 mb-3 md:mb-6 text-xs md:text-base">Platform</h4>
            <ul className="space-y-2 md:space-y-4 text-[10px] md:text-sm text-gray-500">
              <li><a href="#" className="hover:text-brand-600 transition-colors">Browse Courses</a></li>
              <li><a href="#" className="hover:text-brand-600 transition-colors">Mentorship</a></li>
              <li><a href="#" className="hover:text-brand-600 transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-brand-600 transition-colors">For Business</a></li>
            </ul>
          </div>

          {/* Links 2 */}
          <div>
            <h4 className="font-bold text-gray-900 mb-3 md:mb-6 text-xs md:text-base">Company</h4>
            <ul className="space-y-2 md:space-y-4 text-[10px] md:text-sm text-gray-500">
              <li><a href="#" className="hover:text-brand-600 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-brand-600 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-brand-600 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-brand-600 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Download App */}
          <div className="col-span-2 md:col-span-1">
             <h4 className="font-bold text-gray-900 mb-3 md:mb-6 text-xs md:text-base">Get the App</h4>
             <div className="flex flex-row md:flex-col gap-2 md:gap-3">
               <button className="flex-1 flex items-center gap-2 md:gap-3 bg-gray-900 text-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg md:rounded-xl hover:bg-gray-800 transition-colors text-left">
                 <Apple size={16} className="md:w-5 md:h-5" />
                 <div>
                   <div className="text-[8px] md:text-[10px] uppercase font-bold text-gray-400">Download on the</div>
                   <div className="text-xs md:text-sm font-bold leading-none">App Store</div>
                 </div>
               </button>
               <button className="flex-1 flex items-center gap-2 md:gap-3 bg-gray-900 text-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg md:rounded-xl hover:bg-gray-800 transition-colors text-left">
                 <Play size={16} className="fill-current md:w-5 md:h-5" />
                 <div>
                   <div className="text-[8px] md:text-[10px] uppercase font-bold text-gray-400">Get it on</div>
                   <div className="text-xs md:text-sm font-bold leading-none">Google Play</div>
                 </div>
               </button>
             </div>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-4 md:pt-8 flex flex-col md:flex-row justify-between items-center gap-2 md:gap-4 text-[10px] md:text-sm text-gray-400">
          <p>© 2025 ElimuTech. All rights reserved.</p>
          <div className="flex gap-4 md:gap-6">
            <a href="#" className="hover:text-gray-900 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gray-900 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
