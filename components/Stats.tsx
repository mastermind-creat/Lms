import React, { useEffect, useState, useRef } from 'react';
import { Users, Globe, BookOpen, Award } from 'lucide-react';

const Stats: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const stats = [
    {
      icon: <Users className="w-5 h-5 md:w-8 md:h-8" />,
      value: 7520,
      label: "Expert Instructors"
    },
    {
      icon: <Globe className="w-5 h-5 md:w-8 md:h-8" />,
      value: 54252,
      label: "Foreign Followers"
    },
    {
      icon: <BookOpen className="w-5 h-5 md:w-8 md:h-8" />,
      value: 97220,
      label: "Students Enrolled"
    },
    {
      icon: <Award className="w-5 h-5 md:w-8 md:h-8" />,
      value: 20,
      label: "Years of Experience"
    }
  ];

  return (
    <section ref={sectionRef} className="py-8 md:py-20 bg-white dark:bg-gray-900 transition-colors duration-300 border-b border-gray-100 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-4 gap-2 md:gap-12">
          {stats.map((stat, index) => (
            <StatItem 
              key={index} 
              icon={stat.icon} 
              value={stat.value} 
              label={stat.label} 
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const StatItem: React.FC<{ 
  icon: React.ReactNode; 
  value: number; 
  label: string; 
  isVisible: boolean; 
}> = ({ icon, value, label, isVisible }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isVisible) {
      let start = 0;
      const end = value;
      const duration = 2000;
      const incrementTime = 20; // ms
      const step = Math.ceil(end / (duration / incrementTime));

      const timer = setInterval(() => {
        start += step;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(start);
        }
      }, incrementTime);

      return () => clearInterval(timer);
    }
  }, [isVisible, value]);

  return (
    <div className="flex flex-col items-center text-center p-1 md:p-4">
      {/* Neumorphic Icon Container */}
      <div className="w-12 h-12 md:w-20 md:h-20 flex items-center justify-center text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 rounded-2xl md:rounded-3xl shadow-[5px_5px_10px_#d1d1d1,-5px_-5px_10px_#ffffff] dark:shadow-[5px_5px_10px_#0b0c15,-5px_-5px_10px_#1e293b] mb-3 md:mb-6 transition-transform duration-500 hover:scale-110 hover:text-brand-500">
        {icon}
      </div>
      <h3 className="text-sm md:text-4xl font-bold text-gray-900 dark:text-white mb-0.5 md:mb-2 font-display">
        {count.toLocaleString()}{value > 100 ? '+' : ''}
      </h3>
      <p className="text-[8px] md:text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest leading-tight">
        {label}
      </p>
    </div>
  );
};

export default Stats;