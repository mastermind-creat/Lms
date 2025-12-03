import React from 'react';
import { Award, Clock, Users, MonitorPlay } from 'lucide-react';

const ValueProps: React.FC = () => {
  const props = [
    {
      icon: <MonitorPlay className="w-5 h-5" />,
      title: "Practical Learning",
      description: "Learn by doing with real-world scenarios."
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: "Self-Paced Study",
      description: "Access content 24/7 on your own schedule."
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "Expert Mentorship",
      description: "Get guidance from industry professionals."
    },
    {
      icon: <Award className="w-5 h-5" />,
      title: "Recognized Certs",
      description: "Earn certificates to showcase your new skills."
    }
  ];

  return (
    <section className="py-16 border-b border-gray-100 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {props.map((prop, index) => (
            <div key={index} className="flex flex-col items-start">
              <div className="w-10 h-10 bg-gray-50 rounded-lg flex items-center justify-center mb-4 text-gray-900 border border-gray-100">
                {prop.icon}
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-2">{prop.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{prop.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProps;