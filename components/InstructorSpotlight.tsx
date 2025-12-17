
import React from 'react';
import { Linkedin, Twitter, ExternalLink } from 'lucide-react';

const InstructorSpotlight: React.FC = () => {
  const instructors = [
    {
      name: "Kevin Omondi",
      role: "Senior Engineer",
      company: "Safaricom",
      image: "https://i.pravatar.cc/150?u=Kevin",
      expertise: "Fintech & APIs",
      students: "12k+"
    },
    {
      name: "Dr. Zainab Ahmed",
      role: "Data Scientist",
      company: "Microsoft Africa",
      image: "https://i.pravatar.cc/150?u=Zainab",
      expertise: "AI & Machine Learning",
      students: "8.5k+"
    },
    {
      name: "Brian Kipkorir",
      role: "Product Designer",
      company: "Andela",
      image: "https://i.pravatar.cc/150?u=Brian",
      expertise: "UI/UX & Systems",
      students: "10k+"
    },
    {
      name: "Grace Wanjiku",
      role: "Cloud Architect",
      company: "Google",
      image: "https://i.pravatar.cc/150?u=Grace",
      expertise: "AWS & Azure",
      students: "6k+"
    }
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800/50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <span className="text-brand-500 font-bold text-xs uppercase tracking-widest mb-2 block">World-Class Mentors</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              Learn from the Industry's Best
            </h2>
          </div>
          <button className="text-brand-600 dark:text-brand-400 font-bold text-sm hover:underline flex items-center gap-1">
            Become an Instructor <ExternalLink size={16} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {instructors.map((instructor, index) => (
            <div key={index} className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-full p-1 bg-gradient-to-br from-brand-500 to-purple-600">
                  <img src={instructor.image} alt={instructor.name} className="w-full h-full rounded-full object-cover border-2 border-white dark:border-gray-900" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white text-base">{instructor.name}</h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{instructor.role}</p>
                  <p className="text-[10px] font-bold text-brand-600 dark:text-brand-400 mt-0.5">@ {instructor.company}</p>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between text-sm py-2 border-t border-gray-100 dark:border-gray-800">
                  <span className="text-gray-500">Expertise</span>
                  <span className="font-medium text-gray-900 dark:text-white">{instructor.expertise}</span>
                </div>
                <div className="flex justify-between text-sm py-2 border-t border-gray-100 dark:border-gray-800">
                  <span className="text-gray-500">Students</span>
                  <span className="font-medium text-gray-900 dark:text-white">{instructor.students}</span>
                </div>
              </div>

              <div className="flex gap-2 mt-4 pt-4 border-t border-gray-100 dark:border-gray-800 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="p-2 bg-gray-100 dark:bg-gray-800 rounded-full text-blue-600 hover:bg-blue-50 transition-colors"><Linkedin size={16} /></button>
                <button className="p-2 bg-gray-100 dark:bg-gray-800 rounded-full text-sky-500 hover:bg-sky-50 transition-colors"><Twitter size={16} /></button>
                <button className="flex-1 py-2 bg-brand-600 text-white rounded-lg text-xs font-bold hover:bg-brand-700 transition-colors">View Courses</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstructorSpotlight;
