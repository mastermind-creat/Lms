
import React from 'react';

const Partners: React.FC = () => {
  const partners = [
    "KEPSA", "Safaricom", "Equity Group", "M-PESA", "Andela", 
    "Microsoft Africa", "Google", "Cellulant", "Twiga Foods", "KCB Bank",
    "KEPSA", "Safaricom", "Equity Group", "M-PESA", "Andela", 
    "Microsoft Africa", "Google", "Cellulant", "Twiga Foods", "KCB Bank"
  ];

  return (
    <section className="py-4 md:py-8 bg-gray-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-3 md:mb-6 text-center">
        <p className="text-[8px] md:text-xs font-bold text-gray-400 uppercase tracking-widest">
          Trusted Partners & Collaborators
        </p>
      </div>
      
      <div className="relative w-full overflow-hidden group">
        <div className="absolute left-0 top-0 bottom-0 w-8 md:w-32 bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-8 md:w-32 bg-gradient-to-l from-gray-50 to-transparent z-10"></div>
        
        <div className="flex animate-scroll whitespace-nowrap group-hover:[animation-play-state:paused]">
          {partners.map((partner, index) => (
            <div key={index} className="mx-4 md:mx-12 flex items-center justify-center opacity-40 hover:opacity-100 transition-opacity duration-300 cursor-default">
              <span className="text-xs md:text-xl font-display font-bold text-gray-900">{partner}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
