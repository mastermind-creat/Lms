import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, ArrowRight, Smartphone, Eye, EyeOff } from 'lucide-react';

// Extracted Component to fix focus loss bug and add visibility toggle
const StyledInput = ({ icon: Icon, isPassword = false, ...props }: any) => {
  const [show, setShow] = useState(false);
  const inputType = isPassword ? (show ? 'text' : 'password') : props.type;

  return (
    <div className="relative flex items-center group">
      {/* Neumorphic Icon Container */}
      <div className="absolute left-0 z-10 w-12 h-12 flex items-center justify-center text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 rounded-xl shadow-[5px_5px_10px_#d1d1d1,-5px_-5px_10px_#ffffff] dark:shadow-[5px_5px_10px_#0b0c15,-5px_-5px_10px_#171c2b]">
        <Icon size={20} />
      </div>
      
      {/* Clean Modern Input */}
      <input
        {...props}
        type={inputType}
        className="w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl py-3.5 pl-16 pr-12 text-gray-700 dark:text-gray-200 outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 transition-all placeholder:text-gray-400"
      />

      {/* Visibility Toggle */}
      {isPassword && (
        <button
          type="button"
          onClick={() => setShow(!show)}
          className="absolute right-4 text-gray-400 hover:text-brand-500 transition-colors"
        >
          {show ? <EyeOff size={20} /> : <Eye size={20} />}
        </button>
      )}
    </div>
  );
};

const Login: React.FC = () => {
  const [step, setStep] = useState<'credentials' | 'otp'>('credentials');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [otp, setOtp] = useState('');
  const navigate = useNavigate();

  const handleCredentialsSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && password) {
      setStep('otp');
    }
  };

  const handleOtpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/');
  };

  return (
    <div className="min-h-screen pt-24 pb-12 flex items-center justify-center bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="w-full max-w-md p-8 m-4 rounded-[2rem] bg-gray-100 dark:bg-gray-900 shadow-[20px_20px_60px_#d1d1d1,-20px_-20px_60px_#ffffff] dark:shadow-[20px_20px_60px_#0b0c15,-20px_-20px_60px_#171c2b] transition-all">
        
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-2">
            {step === 'credentials' ? 'Welcome Back' : 'Security Verification'}
          </h1>
          <p className="text-gray-500 dark:text-gray-400">
            {step === 'credentials' ? 'Sign in to continue learning' : `Enter the code sent to ${email}`}
          </p>
        </div>

        {step === 'credentials' ? (
          <form onSubmit={handleCredentialsSubmit} className="space-y-6 animate-fade-in">
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-600 dark:text-gray-300 ml-2">Email</label>
              <StyledInput icon={Mail} type="email" value={email} onChange={(e: any) => setEmail(e.target.value)} placeholder="john@example.com" required />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-600 dark:text-gray-300 ml-2">Password</label>
              <StyledInput icon={Lock} isPassword={true} value={password} onChange={(e: any) => setPassword(e.target.value)} placeholder="••••••••" required />
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="rounded text-brand-600 focus:ring-brand-500" />
                <span className="text-gray-600 dark:text-gray-400">Remember me</span>
              </label>
              <Link to="/forgot-password" className="text-brand-600 hover:text-brand-700 font-bold">Forgot Password?</Link>
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-xl font-bold text-brand-600 dark:text-brand-400 bg-gray-100 dark:bg-gray-900 shadow-[5px_5px_10px_#d1d1d1,-5px_-5px_10px_#ffffff] dark:shadow-[5px_5px_10px_#0b0c15,-5px_-5px_10px_#171c2b] hover:shadow-[inset_5px_5px_10px_#d1d1d1,inset_-5px_-5px_10px_#ffffff] dark:hover:shadow-[inset_5px_5px_10px_#0b0c15,inset_-5px_-5px_10px_#171c2b] active:scale-95 transition-all flex items-center justify-center gap-2"
            >
              Verify Credentials <ArrowRight size={20} />
            </button>
          </form>
        ) : (
          <form onSubmit={handleOtpSubmit} className="space-y-6 animate-fade-in-up">
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-600 dark:text-gray-300 ml-2">One-Time Password (OTP)</label>
              <div className="relative flex items-center group">
                <div className="absolute left-0 z-10 w-12 h-12 flex items-center justify-center text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 rounded-xl shadow-[5px_5px_10px_#d1d1d1,-5px_-5px_10px_#ffffff] dark:shadow-[5px_5px_10px_#0b0c15,-5px_-5px_10px_#171c2b]">
                   <Smartphone size={20} />
                </div>
                <input
                  type="text"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  placeholder="1 2 3 4 5 6"
                  maxLength={6}
                  className="w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl py-3.5 pl-16 pr-4 text-gray-700 dark:text-gray-200 outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 transition-all text-center tracking-[0.5em] font-mono text-xl"
                  required
                />
              </div>
            </div>

            <div className="text-center text-sm">
              <p className="text-gray-500">Didn't receive code?</p>
              <button type="button" className="text-brand-600 font-bold hover:underline mt-1">Resend OTP</button>
            </div>

            <div className="flex gap-4">
              <button
                type="button"
                onClick={() => setStep('credentials')}
                className="w-1/3 py-4 rounded-xl font-bold text-gray-500 bg-transparent hover:text-gray-700 transition-colors"
              >
                Back
              </button>
              <button
                type="submit"
                className="w-2/3 py-4 rounded-xl font-bold text-white bg-brand-600 shadow-xl hover:bg-brand-700 active:scale-95 transition-all flex items-center justify-center gap-2"
              >
                Log In <ArrowRight size={20} />
              </button>
            </div>
          </form>
        )}

        <div className="mt-8 text-center text-sm text-gray-500">
          Don't have an account?{' '}
          <Link to="/signup" className="text-brand-600 font-bold hover:underline">
            Create Account
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;