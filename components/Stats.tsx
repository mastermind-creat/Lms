
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
      icon: <Users className="w-8 h-8 md:w-10 md:h-10 text-purple-600" />,
      value: 7520,
      label: "Expert Instructors",
      color: "bg-purple-50 text-purple-600"
    },
    {
      icon: <Globe className="w-8 h-8 md:w-10 md:h-10 text-orange-600" />,
      value: 54252,
      label: "Foreign Followers",
      color: "bg-orange-50 text-orange-600"
    },
    {
      icon: <BookOpen className="w-8 h-8 md:w-10 md:h-10 text-brand-600" />,
      value: 97220,
      label: "Students Enrolled",
      color: "bg-brand-50 text-brand-600"
    },
    {
      icon: <Award className="w-8 h-8 md:w-10 md:h-10 text-green-600" />,
      value: 20,
      label: "Years of Experience",
      color: "bg-green-50 text-green-600"
    }
  ];

  return (
    <section ref={sectionRef} className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <StatItem 
              key={index} 
              icon={stat.icon} 
              value={stat.value} 
              label={stat.label} 
              color={stat.color}
              isVisible={isVisible}
              delay={index * 200}
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
  color: string;
  isVisible: boolean;
  delay: number;
}> = ({ icon, value, label, color, isVisible, delay }) => {
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
    <div className="flex flex-col items-center text-center p-4">
      <div className={`w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center mb-4 md:mb-6 transition-transform duration-500 hover:scale-110 ${color}`}>
        {icon}
      </div>
      <h3 className="text-2xl md:text-4xl font-bold text-gray-900 mb-1 md:mb-2 font-display">
        {count.toLocaleString()}{value > 100 ? '+' : ''}
      </h3>
      <p className="text-[10px] md:text-xs font-bold text-gray-500 uppercase tracking-widest">
        {label}
      </p>
    </div>
  );
};

export default Stats;
