import React from 'react';
import { Award, Clock, Users, MonitorPlay } from 'lucide-react';

const ValueProps: React.FC = () => {
  const props = [
    {
      icon: <MonitorPlay className="w-6 h-6 text-primary-600" />,
      title: "Practical Learning",
      description: "Learn by doing with interactive projects and real-world scenarios that prepare you for the job market."
    },
    {
      icon: <Clock className="w-6 h-6 text-secondary-600" />,
      title: "Self-Paced Study",
      description: "Access content 24/7. Whether you're a night owl or an early bird, learn on your own schedule."
    },
    {
      icon: <Users className="w-6 h-6 text-purple-600" />,
      title: "Expert Mentorship",
      description: "Get guidance from industry professionals who have walked the path and know what it takes to succeed."
    },
    {
      icon: <Award className="w-6 h-6 text-orange-600" />,
      title: "Recognized Certs",
      description: "Earn certificates upon completion to showcase your new skills on LinkedIn and your resume."
    }
  ];

  return (
    <section className="py-16 bg-gray-50 border-t border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-sm font-bold text-primary-600 uppercase tracking-wider mb-2">Why Choose ElimuTech</h2>
          <p className="text-3xl font-bold text-gray-900">Designed for your success</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {props.map((prop, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
              <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center mb-4">
                {prop.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{prop.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{prop.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProps;