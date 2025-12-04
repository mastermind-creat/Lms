
import React, { useState } from 'react';
import { Quote, Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'students' | 'mentors'>('students');

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
      }
    ]
  };

  const activeData = testimonials[activeTab];

  return (
    <section className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-500/20 rounded-full blur-[100px] animate-pulse-slow"></div>
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-accent-500/20 rounded-full blur-[80px] animate-float"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Community Voices
          </h2>
          
          {/* Tabs */}
          <div className="flex justify-center gap-2 mb-8">
            {(['students', 'mentors'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 rounded-full text-sm font-bold capitalize transition-all duration-300 ${
                  activeTab === tab 
                    ? 'bg-white text-gray-900 shadow-lg shadow-white/20 scale-105' 
                    : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {activeData.map((item, index) => (
            <div 
              key={index} 
              className="bg-gray-800/50 backdrop-blur-md border border-gray-700/50 p-6 rounded-2xl hover:bg-gray-800 transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="flex gap-1 mb-4 text-yellow-500">
                {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
              </div>
              
              <p className="text-gray-300 text-sm leading-relaxed mb-6 italic min-h-[60px]">
                "{item.quote}"
              </p>
              
              <div className="flex items-center gap-3 pt-4 border-t border-gray-700/50">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-10 h-10 rounded-full object-cover border border-gray-600 group-hover:border-brand-500 transition-colors"
                />
                <div>
                  <h4 className="font-bold text-white text-sm">{item.name}</h4>
                  <p className="text-xs text-brand-400 font-medium">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
