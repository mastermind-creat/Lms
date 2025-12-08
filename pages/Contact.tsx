import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen pt-24 pb-12 bg-gray-50 dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Get in Touch</h1>
          <p className="text-gray-500 dark:text-gray-400">We'd love to hear from you. Our team is always here to chat.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Info */}
          <div className="space-y-8">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-brand-100 dark:bg-brand-900/20 rounded-xl flex items-center justify-center text-brand-600">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-500">Email</p>
                    <p className="text-gray-900 dark:text-white">support@elimutech.ke</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                   <div className="w-12 h-12 bg-brand-100 dark:bg-brand-900/20 rounded-xl flex items-center justify-center text-brand-600">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-500">Phone</p>
                    <p className="text-gray-900 dark:text-white">+254 700 123 456</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                   <div className="w-12 h-12 bg-brand-100 dark:bg-brand-900/20 rounded-xl flex items-center justify-center text-brand-600">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-500">Office</p>
                    <p className="text-gray-900 dark:text-white">Westlands, Nairobi, Kenya</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <form className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Name</label>
                <input type="text" className="w-full bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-brand-500" placeholder="Your name" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Email</label>
                <input type="email" className="w-full bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-brand-500" placeholder="john@example.com" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Message</label>
                <textarea rows={4} className="w-full bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-brand-500" placeholder="How can we help?"></textarea>
              </div>
              <button className="w-full bg-brand-600 hover:bg-brand-700 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all">
                Send Message <Send size={18} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;