import React from 'react';
import { Briefcase, Wifi, Award, Users } from 'lucide-react';

const ValueProps: React.FC = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
            Why ElimuTech?
          </h2>
          <p className="text-gray-500">
            We've reimagined online learning for the African context. Low data usage, high impact content, and direct pathways to employment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Large Card */}
          <div className="md:col-span-2 bg-white rounded-3xl p-8 shadow-sm border border-gray-100 relative overflow-hidden group hover:shadow-md transition-all">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <Briefcase size={120} />
            </div>
            <div className="relative z-10">
              <div className="w-12 h-12 bg-brand-100 rounded-2xl flex items-center justify-center text-brand-600 mb-6">
                <Briefcase size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Direct Job Linkages</h3>
              <p className="text-gray-500 leading-relaxed max-w-md">
                We don't just teach; we connect. Our partnership with Nairobi's top tech hubs ensures that top performers get interviews with companies like Safaricom and Cellulant immediately upon graduation.
              </p>
            </div>
          </div>

          {/* Tall Card */}
          <div className="bg-gray-900 rounded-3xl p-8 shadow-sm border border-gray-800 text-white relative overflow-hidden group">
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-accent-500 rounded-full blur-3xl opacity-20"></div>
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-white mb-6 backdrop-blur-sm">
                   <Wifi size={24} />
                </div>
                <h3 className="text-xl font-bold mb-2">Offline Mode</h3>
                <p className="text-gray-400 leading-relaxed text-sm">
                  Download lessons and learn on the go. Optimized for fluctuating connectivity across the region.
                </p>
              </div>
              <div className="mt-8">
                <div className="w-full bg-gray-800 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-accent-500 w-3/4 h-full rounded-full animate-pulse"></div>
                </div>
                <p className="text-xs text-gray-500 mt-2 text-right">Download active...</p>
              </div>
            </div>
          </div>

          {/* Small Card 1 */}
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 group hover:border-brand-200 transition-all">
            <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center text-orange-600 mb-4">
              <Award size={24} />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">NITA Certified</h3>
            <p className="text-sm text-gray-500">
              Our curriculum is recognized by the National Industrial Training Authority.
            </p>
          </div>

          {/* Small Card 2 */}
          <div className="md:col-span-2 bg-white rounded-3xl p-8 shadow-sm border border-gray-100 flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mb-4">
                <Users size={24} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Community Mentorship</h3>
              <p className="text-sm text-gray-500">
                Join local study groups in Nairobi, Kisumu, and Mombasa. Learn together with peers in your city.
              </p>
            </div>
            <div className="flex -space-x-4">
               {[1,2,3,4].map(i => (
                 <img key={i} className="w-12 h-12 rounded-full border-4 border-white" src={`https://picsum.photos/100/100?random=${i+50}`} alt="Mentor" />
               ))}
               <div className="w-12 h-12 rounded-full border-4 border-white bg-gray-100 flex items-center justify-center text-xs font-bold text-gray-600">
                 +2k
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ValueProps;