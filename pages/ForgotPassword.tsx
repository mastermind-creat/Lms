import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, ArrowRight, ArrowLeft } from 'lucide-react';

const ForgotPassword: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen pt-20 pb-12 flex items-center justify-center bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      <div className="w-full max-w-md p-8 m-4 rounded-[2rem] bg-gray-100 dark:bg-gray-900 shadow-[20px_20px_60px_#d1d1d1,-20px_-20px_60px_#ffffff] dark:shadow-[20px_20px_60px_#0b0c15,-20px_-20px_60px_#171c2b] transition-all">
        
        <div className="text-center mb-10">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2">Reset Password</h1>
          <p className="text-gray-500 dark:text-gray-400">We'll send you instructions to reset it.</p>
        </div>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-600 dark:text-gray-300 ml-2">Email Address</label>
              <div className="relative flex items-center">
                <Mail className="absolute left-4 text-gray-400" size={20} />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="john@example.com"
                  className="w-full bg-gray-100 dark:bg-gray-900 border-none rounded-xl py-4 pl-12 pr-4 text-gray-700 dark:text-gray-200 outline-none shadow-[inset_5px_5px_10px_#d1d1d1,inset_-5px_-5px_10px_#ffffff] dark:shadow-[inset_5px_5px_10px_#0b0c15,inset_-5px_-5px_10px_#171c2b] focus:ring-2 focus:ring-brand-500/20 transition-all placeholder:text-gray-400"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-xl font-bold text-brand-600 dark:text-brand-400 bg-gray-100 dark:bg-gray-900 shadow-[5px_5px_10px_#d1d1d1,-5px_-5px_10px_#ffffff] dark:shadow-[5px_5px_10px_#0b0c15,-5px_-5px_10px_#171c2b] hover:shadow-[inset_5px_5px_10px_#d1d1d1,inset_-5px_-5px_10px_#ffffff] dark:hover:shadow-[inset_5px_5px_10px_#0b0c15,inset_-5px_-5px_10px_#171c2b] active:scale-95 transition-all flex items-center justify-center gap-2"
            >
              Send Reset Link <ArrowRight size={20} />
            </button>
          </form>
        ) : (
          <div className="text-center animate-fade-in">
            <div className="w-16 h-16 bg-green-100 dark:bg-green-900/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail size={32} />
            </div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Check your inbox</h3>
            <p className="text-gray-500 dark:text-gray-400 mb-6">We've sent a password reset link to {email}</p>
            <button 
              onClick={() => setSubmitted(false)} 
              className="text-brand-600 font-bold hover:underline"
            >
              Try another email
            </button>
          </div>
        )}

        <div className="mt-8 text-center text-sm">
          <Link to="/login" className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 flex items-center justify-center gap-2">
            <ArrowLeft size={16} /> Back to Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;