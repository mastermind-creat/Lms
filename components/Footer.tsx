
import React from 'react';
import { BookOpen, Twitter, Linkedin, Facebook, Instagram, Smartphone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-brand-600 p-1.5 rounded-lg text-white">
                <BookOpen size={20} />
              </div>
              <span className="text-xl font-bold text-gray-900">ElimuTech</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-6 max-w-xs">
              ElimuTech is an online learning platform dedicated to providing accessible, high-quality digital education to students worldwide.
            </p>
            <div className="flex gap-4 mb-8">
              <a href="#" className="text-gray-400 hover:text-brand-600 transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-brand-600 transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-brand-600 transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-brand-600 transition-colors"><Instagram size={20} /></a>
            </div>

            {/* App Store Buttons */}
            <div>
              <p className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-3">Download App</p>
              <div className="flex flex-wrap gap-3">
                <button className="flex items-center gap-2 bg-gray-900 text-white px-3 py-2 rounded-lg hover:bg-gray-800 transition-colors">
                   <div className="text-left">
                     <p className="text-[10px] leading-none text-gray-300">GET IT ON</p>
                     <p className="text-xs font-bold leading-none mt-0.5">Google Play</p>
                   </div>
                </button>
                <button className="flex items-center gap-2 bg-gray-900 text-white px-3 py-2 rounded-lg hover:bg-gray-800 transition-colors">
                   <div className="text-left">
                     <p className="text-[10px] leading-none text-gray-300">Download on the</p>
                     <p className="text-xs font-bold leading-none mt-0.5">App Store</p>
                   </div>
                </button>
              </div>
            </div>
          </div>

          {/* Link Columns */}
          <div>
            <h4 className="font-bold text-gray-900 mb-6">Platform</h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li><a href="#" className="hover:text-brand-600 transition-colors">Browse Courses</a></li>
              <li><a href="#" className="hover:text-brand-600 transition-colors">Mentorship</a></li>
              <li><a href="#" className="hover:text-brand-600 transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-brand-600 transition-colors">For Business</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-6">Company</h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li><a href="#" className="hover:text-brand-600 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-brand-600 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-brand-600 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-brand-600 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-6">Support</h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li><a href="#" className="hover:text-brand-600 transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-brand-600 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-brand-600 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-brand-600 transition-colors">Cookie Settings</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-8 text-center md:text-left flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} ElimuTech Inc. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-gray-900">Privacy</a>
            <a href="#" className="hover:text-gray-900">Terms</a>
            <a href="#" className="hover:text-gray-900">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
