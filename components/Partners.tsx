import React from 'react';

const Partners: React.FC = () => {
  const partners = [
    "KEPSA", "Safaricom", "Equity Group", "M-PESA", "Andela", 
    "Microsoft Africa", "Google", "Cellulant", "Twiga Foods", "KCB Bank",
    "KEPSA", "Safaricom", "Equity Group", "M-PESA", "Andela", 
    "Microsoft Africa", "Google", "Cellulant", "Twiga Foods", "KCB Bank"
  ];

  return (
    <section className="py-12 md:py-16 bg-gray-50 dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
        <p className="text-[10px] md:text-xs font-bold text-brand-500 dark:text-brand-400 uppercase tracking-widest mb-3">
          Trusted Partners & Collaborators
        </p>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Bridging the Gap Between Talent and Industry
        </h2>
        <p className="text-sm md:text-base text-gray-500 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
          We collaborate with Kenya's leading corporations and tech giants to design relevant curriculum and provide direct employment pathways for our top graduates.
        </p>
      </div>
      
      <div className="relative w-full overflow-hidden group py-4">
        <div className="absolute left-0 top-0 bottom-0 w-8 md:w-32 bg-gradient-to-r from-gray-50 dark:from-gray-900 to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-8 md:w-32 bg-gradient-to-l from-gray-50 dark:from-gray-900 to-transparent z-10"></div>
        
        <div className="flex animate-scroll whitespace-nowrap group-hover:[animation-play-state:paused]">
          {partners.map((partner, index) => (
            <div key={index} className="mx-6 md:mx-12 flex items-center justify-center opacity-40 dark:opacity-30 hover:opacity-100 dark:hover:opacity-100 transition-opacity duration-300 cursor-default">
              <span className="text-lg md:text-2xl font-display font-bold text-gray-900 dark:text-white">{partner}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;