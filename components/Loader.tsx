
import React from 'react';
import { BookOpen } from 'lucide-react';

const Loader: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[100] bg-white flex flex-col items-center justify-center">
      <div className="relative">
        <div className="absolute inset-0 bg-brand-500 blur-xl opacity-20 animate-pulse"></div>
        <div className="relative bg-white p-4 rounded-2xl shadow-xl border border-gray-100 animate-bounce">
          <BookOpen size={48} className="text-brand-600" />
        </div>
      </div>
      <div className="mt-8 flex flex-col items-center gap-2">
        <h1 className="text-2xl font-bold font-display text-gray-900 tracking-tight">ElimuTech</h1>
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
