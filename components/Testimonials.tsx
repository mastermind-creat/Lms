
import React, { useState, useEffect, useCallback } from 'react';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const reviews = [
    {
      name: "Mercy Wanjiku",
      role: "Software Engineer at Equity Bank",
      location: "Nairobi",
      image: "https://images.unsplash.com/photo-1589156191108-c762ff4b96ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      text: "I was a self-taught beginner struggling with tutorials. ElimuTech's structured path helped me land a junior role in just 6 months. The localized curriculum made all the difference."
    },
    {
      name: "Emmanuel Kiprop",
      role: "Freelance UI Designer",
      location: "Eldoret",
      image: "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      text: "The mentorship feature is a game changer. Being able to get code reviews from seniors in Nairobi while living in Eldoret was invaluable. It felt like I was in a real bootcamp."
    },
    {
      name: "Amina Yusuf",
      role: "Data Analyst",
      location: "Mombasa",
      image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      text: "ElimuTech's offline mode allowed me to study during my commute. It's the most accessible platform for African students I've found. The data science track is world-class."
    },
    {
      name: "David Ochieng",
      role: "Mobile Developer",
      location: "Kisumu",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      text: "Switching from finance to tech seemed impossible until I found ElimuTech. The project-based learning approach gave me a portfolio that impressed my current employers."
    },
    {
      name: "Sarah Kamau",
      role: "Product Manager",
      location: "Nairobi",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      text: "I learned not just how to code, but how to build products. The blend of technical skills and soft skills training is exactly what the Kenyan market needs right now."
    }
  ];

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % reviews.length);
  }, [reviews.length]);

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  useEffect(() => {
    let interval: number;
    if (isAutoPlaying) {
      interval = window.setInterval(nextSlide, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">Voices of Impact</h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Join 15,000+ Kenyans transforming their careers and building the future.
          </p>
        </div>

        <div 
          className="relative"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Slider Track */}
          <div className="overflow-hidden py-10 -my-10 px-4 -mx-4">
             {/* 
                We use a simple transform logic here. 
                On mobile: Show 1 card (100% width)
                On Tablet: Show 2 cards (50% width)
                On Desktop: Show 3 cards (33.33% width)
             */}
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {reviews.map((review, index) => (
                <div 
                  key={index} 
                  className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-3 md:px-4"
                >
                  <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 h-full flex flex-col relative group">
                    <div className="absolute top-8 right-8 text-gray-100 group-hover:text-brand-100 transition-colors duration-300">
                      <Quote size={48} fill="currentColor" />
                    </div>
                    
                    <div className="flex gap-1 mb-6 text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={16} fill="currentColor" />
                      ))}
                    </div>

                    <p className="text-gray-600 leading-relaxed text-lg mb-8 relative z-10 flex-grow italic">
                      "{review.text}"
                    </p>
                    
                    <div className="flex items-center gap-4 pt-6 border-t border-gray-50 mt-auto">
                      <div className="relative">
                        <img 
                          src={review.image} 
                          alt={review.name} 
                          className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-md" 
                        />
                        <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 text-sm">{review.name}</h4>
                        <p className="text-xs text-brand-600 font-bold uppercase tracking-wide mt-0.5">{review.role}</p>
                        <p className="text-xs text-gray-400 mt-0.5">{review.location}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Controls */}
          <div className="flex justify-between items-center mt-10">
             {/* Dots */}
            <div className="flex gap-2 mx-auto md:mx-0">
              {reviews.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`transition-all duration-300 rounded-full ${
                    activeIndex === idx ? 'w-8 h-2 bg-gray-900' : 'w-2 h-2 bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            {/* Arrows (Hidden on mobile for cleaner look, swipe implies navigation) */}
            <div className="hidden md:flex gap-3">
              <button 
                onClick={prevSlide}
                className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all shadow-sm active:scale-95"
              >
                <ChevronLeft size={20} />
              </button>
              <button 
                onClick={nextSlide}
                className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all shadow-sm active:scale-95"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
