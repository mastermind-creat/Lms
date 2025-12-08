import React from 'react';
import { Target, Lightbulb, Users, MapPin, CheckCircle, ArrowRight } from 'lucide-react';
import Partners from '../components/Partners';

const About: React.FC = () => {
  return (
    <div className="bg-white dark:bg-gray-900 transition-colors duration-300">
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1484807352052-23338990c6c6?auto=format&fit=crop&w=2000&q=80" 
            alt="Nairobi Skyline" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-brand-900/90 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-brand-300 text-xs font-bold uppercase tracking-widest mb-4 animate-fade-in-up">
            Our Story
          </span>
          <h1 className="text-4xl md:text-7xl font-bold text-white mb-6 tracking-tight animate-fade-in-up [animation-delay:100ms]">
            Powering the <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-orange-400">Silicon Savannah</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed animate-fade-in-up [animation-delay:200ms]">
            ElimuTech isn't just an LMS. It's a movement to bridge the gap between African talent and global opportunity through accessible, practical digital education.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center">
            <div className="space-y-8 animate-fade-in-up">
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-2xl bg-brand-100 dark:bg-brand-900/20 flex items-center justify-center text-brand-600 dark:text-brand-400 shrink-0">
                  <Target size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Our Mission</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    To democratize tech education across East Africa by providing low-bandwidth, high-impact learning resources that lead directly to employment.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-2xl bg-orange-100 dark:bg-orange-900/20 flex items-center justify-center text-orange-600 dark:text-orange-400 shrink-0">
                  <Lightbulb size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Our Vision</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    A future where geography does not dictate opportunity, and where African developers, designers, and data scientists lead the global digital economy.
                  </p>
                </div>
              </div>

              <div className="pt-4">
                 <button className="flex items-center gap-2 text-brand-600 dark:text-brand-400 font-bold hover:gap-4 transition-all">
                   Join our journey <ArrowRight size={20} />
                 </button>
              </div>
            </div>

            <div className="relative animate-scale-up [animation-delay:200ms]">
              <div className="absolute inset-0 bg-brand-500 rounded-[2rem] rotate-3 opacity-20 blur-xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80" 
                alt="Team collaboration" 
                className="relative rounded-[2rem] shadow-2xl border-4 border-white dark:border-gray-800"
              />
              <div className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 max-w-xs">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="text-brand-500" size={20} />
                  <span className="font-bold text-gray-900 dark:text-white">Nairobi, Kenya</span>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400">HQ at Westlands, ensuring we are at the heart of the tech ecosystem.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="bg-brand-900 py-12">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
          <div>
            <div className="text-4xl font-bold mb-1">50k+</div>
            <div className="text-brand-200 text-xs uppercase tracking-widest">Graduates</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-1">92%</div>
            <div className="text-brand-200 text-xs uppercase tracking-widest">Employment Rate</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-1">47</div>
            <div className="text-brand-200 text-xs uppercase tracking-widest">Partner Companies</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-1">12</div>
            <div className="text-brand-200 text-xs uppercase tracking-widest">Countries Reached</div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-gray-50 dark:bg-gray-950/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Meet the Leadership</h2>
            <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
              Built by educators, engineers, and entrepreneurs passionate about Africa's potential.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Dr. Sarah Kamau", role: "Co-Founder & CEO", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80" },
              { name: "David Ochieng", role: "CTO", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80" },
              { name: "Grace Wanjiku", role: "Head of Learning", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80" }
            ].map((member, i) => (
              <div key={i} className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-sm border border-gray-100 dark:border-gray-800 hover:-translate-y-2 transition-transform duration-300">
                <div className="aspect-[4/5] relative">
                  <img src={member.img} alt={member.name} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
                  <div className="absolute bottom-0 left-0 p-6 text-white">
                    <h3 className="text-xl font-bold">{member.name}</h3>
                    <p className="text-brand-300 font-medium text-sm">{member.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="pb-20">
         <Partners />
      </div>

    </div>
  );
};

export default About;