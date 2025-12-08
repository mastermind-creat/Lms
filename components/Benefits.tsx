import React from 'react';
import { Award, Download, Users, Briefcase, Zap, Globe } from 'lucide-react';

const Benefits: React.FC = () => {
  const benefits = [
    {
      icon: <Award size={24} />,
      title: "Recognized Certifications",
      description: "Earn certificates valued by top employers across East Africa and beyond.",
      color: "text-yellow-500",
      bg: "bg-yellow-50 dark:bg-yellow-900/20"
    },
    {
      icon: <Download size={24} />,
      title: "Offline Access",
      description: "Download lessons and learn on the go, even without an internet connection.",
      color: "text-blue-500",
      bg: "bg-blue-50 dark:bg-blue-900/20"
    },
    {
      icon: <Briefcase size={24} />,
      title: "Career Support",
      description: "Get resume reviews, interview prep, and direct referrals to hiring partners.",
      color: "text-brand-500",
      bg: "bg-brand-50 dark:bg-brand-900/20"
    },
    {
      icon: <Users size={24} />,
      title: "Community & Mentorship",
      description: "Join local cohorts and get 1-on-1 guidance from industry experts.",
      color: "text-green-500",
      bg: "bg-green-50 dark:bg-green-900/20"
    },
    {
      icon: <Zap size={24} />,
      title: "Hands-on Projects",
      description: "Build a real portfolio. No boring lectures, just building real software.",
      color: "text-purple-500",
      bg: "bg-purple-50 dark:bg-purple-900/20"
    },
    {
      icon: <Globe size={24} />,
      title: "Localized Content",
      description: "Examples and case studies tailored to the African tech ecosystem.",
      color: "text-orange-500",
      bg: "bg-orange-50 dark:bg-orange-900/20"
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-500 font-bold text-xs uppercase tracking-widest mb-2 block">Why Choose Us</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Everything you need to grow
          </h2>
          <p className="text-gray-500 dark:text-gray-400">
            We've built a learning experience designed for the modern African learner. Accessible, practical, and career-focused.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((item, index) => (
            <div 
              key={index} 
              className="p-8 rounded-2xl border border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800 hover:shadow-xl dark:hover:shadow-gray-900/50 transition-all duration-300 group"
            >
              <div className={`w-12 h-12 rounded-xl ${item.bg} ${item.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{item.title}</h3>
              <p className="text-gray-500 dark:text-gray-400 leading-relaxed text-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;