import React from 'react';
import { Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const reviews = [
    {
      name: "Michael Torres",
      role: "Frontend Developer",
      image: "https://picsum.photos/100/100?random=30",
      text: "ElimuTech changed my career trajectory. The React course was incredibly detailed, and the projects helped me build a portfolio that got me hired."
    },
    {
      name: "Sarah Al-Fayed",
      role: "UX Designer",
      image: "https://picsum.photos/100/100?random=31",
      text: "I loved the flexibility. Being a working mom, I needed a platform that allowed me to learn in short bursts. The mobile experience is seamless."
    },
    {
      name: "James Wilson",
      role: "Data Analyst",
      image: "https://picsum.photos/100/100?random=32",
      text: "The instructors aren't just reading slides; they are industry experts. The real-world examples in the Data Science track were eye-opening."
    }
  ];

  return (
    <section className="py-24 bg-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Trusted by students worldwide</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Hear from the community of learners who are achieving their goals with ElimuTech.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 relative">
              <Quote className="absolute top-6 right-6 text-primary-100 w-10 h-10" />
              <div className="flex items-center gap-4 mb-6">
                <img src={review.image} alt={review.name} className="w-14 h-14 rounded-full object-cover border-2 border-primary-100" />
                <div>
                  <h4 className="font-bold text-gray-900">{review.name}</h4>
                  <p className="text-sm text-gray-500">{review.role}</p>
                </div>
              </div>
              <p className="text-gray-700 italic leading-relaxed relative z-10">"{review.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;