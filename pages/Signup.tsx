import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { User, Mail, Lock, ArrowRight, Phone, Briefcase, Globe, BookOpen, GraduationCap, Eye, EyeOff } from 'lucide-react';

type Role = 'student' | 'instructor';

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

const Signup: React.FC = () => {
  const [role, setRole] = useState<Role>('student');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  // Common Fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Instructor Fields
  const [expertise, setExpertise] = useState('');
  const [experience, setExperience] = useState('');
  const [linkedin, setLinkedin] = useState('');

  // Student Fields
  const [interests, setInterests] = useState('');
  const [education, setEducation] = useState('');

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API Call
    setTimeout(() => {
        console.log("Signing up as", role);
        setIsLoading(false);
        navigate('/login');
    }, 2000);
  };

  return (
    <div className="min-h-screen pt-24 pb-20 flex items-center justify-center bg-gray-50 dark:bg-gray-900 transition-colors duration-300 px-4">
      <div className="w-full max-w-2xl p-6 md:p-10 rounded-[2.5rem] bg-gray-100 dark:bg-gray-900 shadow-[20px_20px_60px_#d1d1d1,-20px_-20px_60px_#ffffff] dark:shadow-[20px_20px_60px_#0b0c15,-20px_-20px_60px_#171c2b] transition-all">
        
        <div className="text-center mb-10 animate-fade-in-up">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-2">Join ElimuTech</h1>
          <p className="text-gray-500 dark:text-gray-400">Create an account to start your journey</p>
        </div>

        {/* Role Toggle */}
        <div className="flex justify-center mb-10 animate-fade-in-up [animation-delay:100ms]">
          <div className="bg-gray-200 dark:bg-gray-800 p-1.5 rounded-full flex shadow-inner">
            <button
              type="button"
              onClick={() => setRole('student')}
              className={`px-8 py-3 rounded-full text-sm font-bold transition-all duration-300 ${
                role === 'student'
                  ? 'bg-brand-600 text-white shadow-lg'
                  : 'text-gray-500 dark:text-gray-400 hover:text-gray-700'
              }`}
            >
              Student
            </button>
            <button
              type="button"
              onClick={() => setRole('instructor')}
              className={`px-8 py-3 rounded-full text-sm font-bold transition-all duration-300 ${
                role === 'instructor'
                  ? 'bg-brand-600 text-white shadow-lg'
                  : 'text-gray-500 dark:text-gray-400 hover:text-gray-700'
              }`}
            >
              Instructor
            </button>
          </div>
        </div>

        <form onSubmit={handleSignup} className="space-y-6 animate-fade-in-up [animation-delay:200ms]">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-2">Full Name</label>
              <StyledInput icon={User} type="text" value={name} onChange={(e: any) => setName(e.target.value)} placeholder="John Doe" required />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-2">Email</label>
              <StyledInput icon={Mail} type="email" value={email} onChange={(e: any) => setEmail(e.target.value)} placeholder="john@example.com" required />
            </div>
          </div>

          <div className="space-y-2">
             <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-2">Mobile Number (For OTP)</label>
             <StyledInput icon={Phone} type="tel" value={phone} onChange={(e: any) => setPhone(e.target.value)} placeholder="+254 700 000 000" required />
          </div>

          {/* Student Specific Fields */}
          {role === 'student' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in-up">
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-2">Primary Interest</label>
                <StyledInput icon={BookOpen} type="text" value={interests} onChange={(e: any) => setInterests(e.target.value)} placeholder="e.g. Web Development" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-2">Education Level</label>
                <StyledInput icon={GraduationCap} type="text" value={education} onChange={(e: any) => setEducation(e.target.value)} placeholder="e.g. Undergraduate" />
              </div>
            </div>
          )}

          {/* Instructor Specific Fields */}
          {role === 'instructor' && (
            <div className="space-y-6 animate-fade-in-up">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-2">Area of Expertise</label>
                  <StyledInput icon={Briefcase} type="text" value={expertise} onChange={(e: any) => setExpertise(e.target.value)} placeholder="e.g. Data Science" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-2">Years of Experience</label>
                  <StyledInput icon={GraduationCap} type="number" value={experience} onChange={(e: any) => setExperience(e.target.value)} placeholder="e.g. 5" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-2">LinkedIn / Portfolio URL</label>
                <StyledInput icon={Globe} type="url" value={linkedin} onChange={(e: any) => setLinkedin(e.target.value)} placeholder="https://..." />
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-2">Password</label>
              <StyledInput icon={Lock} isPassword={true} value={password} onChange={(e: any) => setPassword(e.target.value)} placeholder="••••••••" required />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-2">Confirm Password</label>
              <StyledInput icon={Lock} isPassword={true} value={confirmPassword} onChange={(e: any) => setConfirmPassword(e.target.value)} placeholder="••••••••" required />
            </div>
          </div>

          <div className="pt-4">
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-4 rounded-xl font-bold text-brand-600 dark:text-brand-400 bg-gray-100 dark:bg-gray-900 shadow-[5px_5px_10px_#d1d1d1,-5px_-5px_10px_#ffffff] dark:shadow-[5px_5px_10px_#0b0c15,-5px_-5px_10px_#171c2b] hover:shadow-[inset_5px_5px_10px_#d1d1d1,inset_-5px_-5px_10px_#ffffff] dark:hover:shadow-[inset_5px_5px_10px_#0b0c15,inset_-5px_-5px_10px_#171c2b] active:scale-95 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <>
                  <div className="loader border-brand-500 dark:border-brand-400 border-t-transparent"></div>
                  <span>Creating Account...</span>
                </>
              ) : (
                <>Create Account <ArrowRight size={20} /></>
              )}
            </button>
          </div>
        </form>

        <div className="mt-8 text-center text-sm text-gray-500">
          Already have an account?{' '}
          <Link to="/login" className="text-brand-600 font-bold hover:underline">
            Log In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;