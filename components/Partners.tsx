import React from 'react';

const Partners: React.FC = () => {
  // Using text for logos to be safe, but styled to look like logos
  const partners = [
    "Safaricom", "Equity Group", "M-PESA", "Andela", "Microsoft Africa", 
    "Google Nairobi", "Cellulant", "Twiga Foods", "KCB Bank", "Britam",
    // Repeat for seamless scroll
    "Safaricom", "Equity Group", "M-PESA", "Andela", "Microsoft Africa", 
    "Google Nairobi", "Cellulant", "Twiga Foods", "KCB Bank", "Britam"
  ];

  return (
    <section className="py-10 bg-white border-y border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 text-center">
        <p className="text-sm font-semibold text-gray-400 uppercase tracking-widest">
          Trusted by Kenya's Top Innovators
        </p>
      </div>
      
      <div className="relative w-full overflow-hidden">
        {/* Gradients to fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10"></div>
        
        <div className="flex animate-scroll whitespace-nowrap">
          {partners.map((partner, index) => (
            <div key={index} className="mx-8 md:mx-12 flex items-center justify-center grayscale hover:grayscale-0 opacity-40 hover:opacity-100 transition-all duration-300 cursor-pointer">
              <span className="text-xl md:text-2xl font-display font-bold text-gray-800">{partner}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;