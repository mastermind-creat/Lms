
import React from 'react';

const Loader: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[100] bg-white dark:bg-gray-900 flex flex-col items-center justify-center transition-colors duration-300">
      <div className="relative">
        <div className="absolute inset-0 bg-brand-500 blur-xl opacity-20 animate-pulse"></div>
        <div className="relative bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 animate-bounce">
           <img src="/icon.png" alt="Loading..." className="w-12 h-12 object-contain" />
        </div>
      </div>
      <div className="mt-8 flex flex-col items-center gap-2">
        <h1 className="text-2xl font-bold font-display text-gray-900 dark:text-white tracking-tight">ElimuTech</h1>
        <div className="flex gap-1">
          <div className="w-2 h-2 bg-brand-500 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
          <div className="w-2 h-2 bg-brand-500 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
          <div className="w-2 h-2 bg-brand-500 rounded-full animate-bounce"></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
