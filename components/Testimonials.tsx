
import React, { useState, useEffect, useRef } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'students' | 'mentors'>('students');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleItems, setVisibleItems] = useState(1);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const testimonials = {
    students: [
      {
        name: "Mercy Wanjiku",
        role: "Now at Equity Bank",
        image: "https://images.unsplash.com/photo-1589156191108-c762ff4b96ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
        quote: "ElimuTech's structured path helped me land a junior role in just 6 months. The localized curriculum made all the difference."
      },
      {
        name: "David Ochieng",
        role: "Freelance Dev",
        image: "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
        quote: "Switching from finance to tech seemed impossible. The project-based learning gave me a portfolio that impressed employers."
      },
      {
        name: "Amina Yusuf",
        role: "Data Analyst",
        image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
        quote: "The offline mode allowed me to study during my commute in Mombasa. It's the most accessible platform I've found."
      },
      {
        name: "Brian Kiprop",
        role: "Mobile Developer",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
        quote: "I built my first Flutter app within weeks. The mentors are incredibly supportive and the community is vibrant."
      },
      {
        name: "Grace Muthoni",
        role: "UX Designer",
        image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=200&q=80",
        quote: "Learning design principles tailored for the African market opened my eyes. Highly recommended for creative minds."
      }
    ],
    mentors: [
      {
        name: "Dr. Zainab Ahmed",
        role: "Lead Data Scientist",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
        quote: "I love mentoring here because the students are hungry for knowledge. The platform makes code reviews seamless."
      },
      {
        name: "Kevin Omondi",
        role: "Senior Engineer",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
        quote: "Seeing students go from 'Hello World' to building M-PESA integrations is incredibly rewarding. The curriculum is top-notch."
      },
      {
        name: "Sarah Kamau",
        role: "Product Manager",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
        quote: "ElimuTech focuses on the skills that actually matter in the Kenyan tech ecosystem. It's practical, not just theoretical."
      },
      {
        name: "John Njoroge",
        role: "DevOps Engineer",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80",
        quote: "We teach industry standards from day one. CI/CD, Cloud deployment, and security best practices."
      }
    ]
  };

  const activeData = testimonials[activeTab];

  // Responsive items per page
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setVisibleItems(3);
      else if (window.innerWidth >= 768) setVisibleItems(2);
      else setVisibleItems(1);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Reset index on tab change
  useEffect(() => {
    setCurrentIndex(0);
  }, [activeTab]);

  // Max index for scrolling
  const maxIndex = Math.max(0, activeData.length - visibleItems);

  // Auto-play
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev >= maxIndex ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(interval);
  }, [maxIndex, activeTab]);

  const nextSlide = () => {
    setCurrentIndex(prev => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex(prev => (prev <= 0 ? maxIndex : prev - 1));
  };

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) nextSlide();
    if (isRightSwipe) prevSlide();

    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <section className="py-12 md:py-24 bg-gray-900 relative overflow-hidden select-none">
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-500/10 rounded-full blur-[100px] animate-pulse-slow"></div>
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-accent-500/10 rounded-full blur-[80px] animate-float"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-xl md:text-5xl font-bold text-white mb-4 md:mb-6 tracking-tight">
            Community Voices
          </h2>
          
          {/* Tabs */}
          <div className="inline-flex bg-gray-800/50 p-1 rounded-full border border-gray-700 backdrop-blur-sm">
            {(['students', 'mentors'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-1.5 md:px-8 md:py-2.5 rounded-full text-xs md:text-sm font-bold capitalize transition-all duration-300 ${
                  activeTab === tab 
                    ? 'bg-brand-600 text-white shadow-lg shadow-brand-500/20' 
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative group">
          {/* Controls - Hidden on mobile */}
          <button 
            onClick={prevSlide}
            className="hidden md:block absolute -left-12 top-1/2 -translate-y-1/2 z-20 bg-gray-800/80 hover:bg-brand-600 text-white p-3 rounded-full backdrop-blur-md border border-gray-700 transition-all opacity-0 group-hover:opacity-100 focus:opacity-100 disabled:opacity-30"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            onClick={nextSlide}
            className="hidden md:block absolute -right-12 top-1/2 -translate-y-1/2 z-20 bg-gray-800/80 hover:bg-brand-600 text-white p-3 rounded-full backdrop-blur-md border border-gray-700 transition-all opacity-0 group-hover:opacity-100 focus:opacity-100"
          >
            <ChevronRight size={24} />
          </button>

          {/* Slides Wrapper */}
          <div 
            className="overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div 
              className="flex transition-transform duration-700 cubic-bezier(0.4, 0, 0.2, 1)"
              style={{ transform: `translateX(-${currentIndex * (100 / visibleItems)}%)` }}
            >
              {activeData.map((item, index) => (
                <div 
                  key={index} 
                  className="flex-shrink-0 px-1 md:px-3"
                  style={{ width: `${100 / visibleItems}%` }}
                >
                  <div className="bg-gray-800/40 backdrop-blur-md border border-gray-700/50 p-4 md:p-8 rounded-2xl md:rounded-3xl h-full flex flex-col hover:bg-gray-800/60 transition-colors duration-300">
                    <div className="mb-3 md:mb-6 text-brand-500">
                      <Quote size={20} className="md:w-8 md:h-8 opacity-50" />
                    </div>
                    
                    <p className="text-gray-300 text-xs md:text-lg leading-relaxed mb-4 md:mb-8 italic flex-grow line-clamp-4 md:line-clamp-none">
                      "{item.quote}"
                    </p>
                    
                    <div className="flex items-center gap-2 md:gap-4 mt-auto">
                      <div className="relative">
                        <div className="absolute inset-0 bg-brand-500 rounded-full blur opacity-20"></div>
                        <img 
                          src={item.image} 
                          alt={item.name} 
                          className="w-8 h-8 md:w-12 md:h-12 rounded-full object-cover border-2 border-gray-700 relative z-10"
                        />
                      </div>
                      <div className="min-w-0">
                        <h4 className="font-bold text-white text-xs md:text-base truncate">{item.name}</h4>
                        <p className="text-[10px] md:text-sm text-brand-400 font-medium truncate">{item.role}</p>
                      </div>
                      <div className="ml-auto flex gap-0.5">
                         {[...Array(5)].map((_, i) => (
                           <Star key={i} size={8} className="text-yellow-500 fill-current md:w-3 md:h-3" />
                         ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Dots Pagination */}
        <div className="flex justify-center gap-1 md:gap-2 mt-6 md:mt-12">
          {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-1 md:h-1.5 rounded-full transition-all duration-300 ${
                idx === currentIndex ? 'w-4 md:w-8 bg-brand-500' : 'w-1.5 md:w-2 bg-gray-700 hover:bg-gray-600'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
