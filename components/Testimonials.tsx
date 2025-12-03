import React from 'react';
import { Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const reviews = [
    {
      name: "Mercy Wanjiku",
      role: "Software Engineer at Equity Bank",
      location: "Nairobi",
      image: "https://images.unsplash.com/photo-1589156191108-c762ff4b96ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      text: "I was a self-taught beginner struggling with tutorials. ElimuTech's structured path helped me land a junior role in just 6 months."
    },
    {
      name: "Emmanuel Kiprop",
      role: "Freelance UI Designer",
      location: "Eldoret",
      image: "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      text: "The mentorship feature is a game changer. Being able to get code reviews from seniors in Nairobi while living in Eldoret was invaluable."
    },
    {
      name: "Amina Yusuf",
      role: "Data Analyst",
      location: "Mombasa",
      image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      text: "ElimuTech's offline mode allowed me to study during my commute. It's the most accessible platform for African students I've found."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">From Students to Professionals</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Join 15,000+ Kenyans transforming their careers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-3xl border border-gray-100 hover:shadow-lg transition-all relative group">
              <div className="absolute top-8 right-8 text-gray-200 group-hover:text-brand-100 transition-colors">
                <Quote size={40} />
              </div>
              
              <div className="flex items-center gap-4 mb-6 relative z-10">
                <img src={review.image} alt={review.name} className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-sm" />
                <div>
                  <h4 className="font-bold text-gray-900">{review.name}</h4>
                  <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">{review.role}</p>
                  <p className="text-xs text-brand-600 mt-0.5">{review.location}</p>
                </div>
              </div>
              
              <p className="text-gray-600 leading-relaxed relative z-10">"{review.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;