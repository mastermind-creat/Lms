
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { User, Mail, Lock, ArrowRight, Phone, Briefcase, Globe, BookOpen, GraduationCap, Eye, EyeOff, ChevronDown, Building, MapPin, CheckSquare, AlignLeft } from 'lucide-react';

type Role = 'student' | 'instructor' | 'organization';

// Extracted Component to fix focus loss bug and add visibility toggle
const StyledInput = ({ icon: Icon, isPassword = false, isTextArea = false, ...props }: any) => {
  const [show, setShow] = useState(false);
  const inputType = isPassword ? (show ? 'text' : 'password') : props.type;

  return (
    <div className="relative flex items-start group">
      {/* Neumorphic Icon Container */}
      <div className={`absolute left-0 z-10 w-12 h-12 flex items-center justify-center text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 rounded-xl shadow-[5px_5px_10px_#d1d1d1,-5px_-5px_10px_#ffffff] dark:shadow-[5px_5px_10px_#0b0c15,-5px_-5px_10px_#171c2b] ${isTextArea ? 'mt-0' : ''}`}>
        <Icon size={20} />
      </div>
      
      {/* Clean Modern Input */}
      {isTextArea ? (
        <textarea
          {...props}
          className="w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl py-3.5 pl-16 pr-4 text-gray-700 dark:text-gray-200 outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 transition-all placeholder:text-gray-400 min-h-[100px] resize-y"
        />
      ) : (
        <input
          {...props}
          type={inputType}
          className="w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl py-3.5 pl-16 pr-12 text-gray-700 dark:text-gray-200 outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 transition-all placeholder:text-gray-400"
        />
      )}

      {/* Visibility Toggle */}
      {isPassword && (
        <button
          type="button"
          onClick={() => setShow(!show)}
          className="absolute right-4 top-3.5 text-gray-400 hover:text-brand-500 transition-colors"
        >
          {show ? <EyeOff size={20} /> : <Eye size={20} />}
        </button>
      )}
    </div>
  );
};

// New Styled Select Component for consistent UI
const StyledSelect = ({ icon: Icon, children, ...props }: any) => {
  return (
    <div className="relative flex items-center group">
      <div className="absolute left-0 z-10 w-12 h-12 flex items-center justify-center text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 rounded-xl shadow-[5px_5px_10px_#d1d1d1,-5px_-5px_10px_#ffffff] dark:shadow-[5px_5px_10px_#0b0c15,-5px_-5px_10px_#171c2b]">
        <Icon size={20} />
      </div>
      <select
        {...props}
        className="w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl py-3.5 pl-16 pr-12 text-gray-700 dark:text-gray-200 outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 transition-all appearance-none cursor-pointer"
      >
        {children}
      </select>
      <div className="absolute right-4 pointer-events-none text-gray-400">
        <ChevronDown size={20} />
      </div>
    </div>
  );
};

const Signup: React.FC = () => {
  const [role, setRole] = useState<Role>('student');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  // Common Fields (Shared for Person Name / Org Name)
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Instructor Fields
  const [expertise, setExpertise] = useState('');
  const [otherExpertise, setOtherExpertise] = useState('');
  const [experience, setExperience] = useState('');
  const [linkedin, setLinkedin] = useState('');

  // Student Fields
  const [interests, setInterests] = useState('');
  const [education, setEducation] = useState('');

  // Organization Fields
  const [orgWebsite, setOrgWebsite] = useState('');
  const [orgType, setOrgType] = useState('');
  const [orgCountry, setOrgCountry] = useState('');
  const [orgAddress, setOrgAddress] = useState('');
  const [orgDescription, setOrgDescription] = useState('');
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactRole, setContactRole] = useState('');
  const [orgTerms, setOrgTerms] = useState(false);
  const [orgRights, setOrgRights] = useState(false);

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Organization Specific Validation
    if (role === 'organization') {
      if (!orgTerms || !orgRights) {
        alert("Please accept the Terms & Conditions and confirm rights to offer content.");
        return;
      }
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    setIsLoading(true);

    const finalExpertise = expertise === 'Other' ? otherExpertise : expertise;

    // Simulate API Call
    setTimeout(() => {
        console.log("Signing up as", role);
        console.log("Details:", { 
            name, email, phone, role, 
            finalExpertise, experience, 
            interests, education,
            orgDetails: role === 'organization' ? { orgWebsite, orgType, orgCountry, orgAddress, contactName } : undefined
        });
        setIsLoading(false);
        navigate('/login');
    }, 2000);
  };

  const interestOptions = [
    "Web Development",
    "Data Science",
    "Mobile Development",
    "UI/UX Design",
    "Digital Marketing",
    "Cybersecurity",
    "Cloud Computing",
    "Finance & Fintech"
  ];

  const educationOptions = [
    "High School",
    "Undergraduate",
    "Postgraduate",
    "Bootcamp / Certificate",
    "Self-Taught",
    "Other"
  ];

  const expertiseOptions = [
    "Software Engineering",
    "Data Science & Analytics",
    "Product Design",
    "Digital Marketing",
    "Network Security",
    "Business & Finance",
    "Other"
  ];

  const orgTypeOptions = [
    "University / College",
    "Technical Training Institute",
    "Corporate Training",
    "NGO / Non-Profit",
    "Online Academy",
    "High School",
    "Other"
  ];

  return (
    <div className="min-h-screen pt-24 pb-20 flex items-center justify-center bg-gray-50 dark:bg-gray-900 transition-colors duration-300 px-4">
      <div className="w-full max-w-3xl p-6 md:p-10 rounded-[2.5rem] bg-gray-100 dark:bg-gray-900 shadow-[20px_20px_60px_#d1d1d1,-20px_-20px_60px_#ffffff] dark:shadow-[20px_20px_60px_#0b0c15,-20px_-20px_60px_#171c2b] transition-all">
        
        <div className="text-center mb-10 animate-fade-in-up">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-2">Join ElimuTech</h1>
          <p className="text-gray-500 dark:text-gray-400">Create an account to start your journey</p>
        </div>

        {/* Role Toggle */}
        <div className="flex justify-center mb-10 animate-fade-in-up [animation-delay:100ms]">
          <div className="bg-gray-200 dark:bg-gray-800 p-1.5 rounded-full flex shadow-inner overflow-x-auto max-w-full">
            <button
              type="button"
              onClick={() => setRole('student')}
              className={`px-6 md:px-8 py-3 rounded-full text-sm font-bold transition-all duration-300 whitespace-nowrap ${
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
              className={`px-6 md:px-8 py-3 rounded-full text-sm font-bold transition-all duration-300 whitespace-nowrap ${
                role === 'instructor'
                  ? 'bg-brand-600 text-white shadow-lg'
                  : 'text-gray-500 dark:text-gray-400 hover:text-gray-700'
              }`}
            >
              Instructor
            </button>
            <button
              type="button"
              onClick={() => setRole('organization')}
              className={`px-6 md:px-8 py-3 rounded-full text-sm font-bold transition-all duration-300 whitespace-nowrap ${
                role === 'organization'
                  ? 'bg-brand-600 text-white shadow-lg'
                  : 'text-gray-500 dark:text-gray-400 hover:text-gray-700'
              }`}
            >
              Organization
            </button>
          </div>
        </div>

        <form onSubmit={handleSignup} className="space-y-6 animate-fade-in-up [animation-delay:200ms]">
          
          {/* Header depending on role */}
          {role === 'organization' && (
             <div className="border-l-4 border-brand-500 pl-4 py-2 bg-brand-50 dark:bg-brand-900/10 mb-6 rounded-r-lg">
                <h3 className="font-bold text-brand-900 dark:text-brand-100">Organization Account</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400">Manage multiple courses and instructors under one verified entity.</p>
             </div>
          )}

          {/* Basic Info (Adaptive Labels) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-2">
                {role === 'organization' ? 'Organization Name' : 'Full Name'}
              </label>
              <StyledInput 
                icon={role === 'organization' ? Building : User} 
                type="text" 
                value={name} 
                onChange={(e: any) => setName(e.target.value)} 
                placeholder={role === 'organization' ? "e.g. Nairobi Tech Institute" : "John Doe"} 
                required 
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-2">
                {role === 'organization' ? 'Organization Email' : 'Email'}
              </label>
              <StyledInput 
                icon={Mail} 
                type="email" 
                value={email} 
                onChange={(e: any) => setEmail(e.target.value)} 
                placeholder={role === 'organization' ? "admin@institute.ac.ke" : "john@example.com"} 
                required 
              />
            </div>
          </div>

          <div className="space-y-2">
             <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-2">
               {role === 'organization' ? 'Organization Phone' : 'Mobile Number (For OTP)'}
             </label>
             <StyledInput icon={Phone} type="tel" value={phone} onChange={(e: any) => setPhone(e.target.value)} placeholder="+254 700 000 000" required />
          </div>

          {/* Student Specific Fields */}
          {role === 'student' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in-up">
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-2">Primary Interest</label>
                <StyledSelect 
                  icon={BookOpen} 
                  value={interests} 
                  onChange={(e: any) => setInterests(e.target.value)} 
                  required
                >
                  <option value="" disabled>Select Interest</option>
                  {interestOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                </StyledSelect>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-2">Education Level (Optional)</label>
                <StyledSelect 
                  icon={GraduationCap} 
                  value={education} 
                  onChange={(e: any) => setEducation(e.target.value)}
                >
                  <option value="" disabled>Select Level</option>
                  {educationOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                </StyledSelect>
              </div>
            </div>
          )}

          {/* Instructor Specific Fields */}
          {role === 'instructor' && (
            <div className="space-y-6 animate-fade-in-up">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-2">Area of Expertise</label>
                  <StyledSelect 
                    icon={Briefcase} 
                    value={expertise} 
                    onChange={(e: any) => setExpertise(e.target.value)} 
                    required
                  >
                    <option value="" disabled>Select Expertise</option>
                    {expertiseOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                  </StyledSelect>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-2">Years of Experience (Optional)</label>
                  <StyledInput icon={GraduationCap} type="number" value={experience} onChange={(e: any) => setExperience(e.target.value)} placeholder="e.g. 5" />
                </div>
              </div>
              
              {expertise === 'Other' && (
                <div className="space-y-2 animate-fade-in">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-2">Specify Expertise</label>
                  <StyledInput 
                    icon={Briefcase} 
                    type="text" 
                    value={otherExpertise} 
                    onChange={(e: any) => setOtherExpertise(e.target.value)} 
                    placeholder="e.g. Blockchain Development" 
                    required 
                  />
                </div>
              )}

              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-2">LinkedIn / Portfolio URL</label>
                <StyledInput icon={Globe} type="url" value={linkedin} onChange={(e: any) => setLinkedin(e.target.value)} placeholder="https://..." />
              </div>
            </div>
          )}

          {/* Organization Specific Fields */}
          {role === 'organization' && (
            <div className="space-y-6 animate-fade-in-up">
              {/* Profile Section */}
              <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">Organization Profile (Optional)</h4>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-2">Website</label>
                    <StyledInput icon={Globe} type="url" value={orgWebsite} onChange={(e: any) => setOrgWebsite(e.target.value)} placeholder="https://www.example.com" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-2">Organization Type</label>
                    <StyledSelect 
                      icon={Briefcase} 
                      value={orgType} 
                      onChange={(e: any) => setOrgType(e.target.value)} 
                    >
                      <option value="" disabled>Select Type</option>
                      {orgTypeOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                    </StyledSelect>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-2">Country</label>
                    <StyledInput icon={Globe} type="text" value={orgCountry} onChange={(e: any) => setOrgCountry(e.target.value)} placeholder="e.g. Kenya" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-2">Physical Address</label>
                    <StyledInput icon={MapPin} type="text" value={orgAddress} onChange={(e: any) => setOrgAddress(e.target.value)} placeholder="e.g. Westlands, Nairobi" />
                  </div>
                </div>

                <div className="space-y-2 mb-6">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-2">Short Description</label>
                  <StyledInput isTextArea icon={AlignLeft} value={orgDescription} onChange={(e: any) => setOrgDescription(e.target.value)} placeholder="Tell us about your institution..." />
                </div>
              </div>

              {/* Contact Person Section */}
              <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">Primary Contact Person (Recommended)</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-2">Contact Name</label>
                    <StyledInput icon={User} type="text" value={contactName} onChange={(e: any) => setContactName(e.target.value)} placeholder="Admin Name" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-2">Contact Email</label>
                    <StyledInput icon={Mail} type="email" value={contactEmail} onChange={(e: any) => setContactEmail(e.target.value)} placeholder="admin@example.com" />
                  </div>
                </div>
                <div className="space-y-2 mt-6">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-2">Contact Role / Title</label>
                    <StyledInput icon={Briefcase} type="text" value={contactRole} onChange={(e: any) => setContactRole(e.target.value)} placeholder="e.g. Head of IT" />
                </div>
              </div>
            </div>
          )}

          {/* Password Fields (Common) */}
          <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
            <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">Security</h4>
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
          </div>

          {/* Legal Acknowledgements (Organization Only) */}
          {role === 'organization' && (
            <div className="bg-blue-50 dark:bg-blue-900/10 p-4 rounded-xl space-y-3">
              <label className="flex items-start gap-3 cursor-pointer">
                <div className="relative flex items-center">
                  <input type="checkbox" required checked={orgTerms} onChange={(e) => setOrgTerms(e.target.checked)} className="peer h-5 w-5 cursor-pointer appearance-none rounded border border-gray-300 dark:border-gray-600 shadow transition-all checked:border-brand-500 checked:bg-brand-500 hover:shadow-md" />
                  <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 peer-checked:opacity-100">
                    <CheckSquare size={14} />
                  </span>
                </div>
                <span className="text-sm text-gray-700 dark:text-gray-300 pt-0.5">
                  I accept the <a href="#" className="text-brand-600 font-bold hover:underline">Terms & Conditions</a> for Organizations.
                </span>
              </label>
              
              <label className="flex items-start gap-3 cursor-pointer">
                <div className="relative flex items-center">
                  <input type="checkbox" required checked={orgRights} onChange={(e) => setOrgRights(e.target.checked)} className="peer h-5 w-5 cursor-pointer appearance-none rounded border border-gray-300 dark:border-gray-600 shadow transition-all checked:border-brand-500 checked:bg-brand-500 hover:shadow-md" />
                  <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 peer-checked:opacity-100">
                    <CheckSquare size={14} />
                  </span>
                </div>
                <span className="text-sm text-gray-700 dark:text-gray-300 pt-0.5">
                  I confirm that this organization has the right to offer educational content and certificates.
                </span>
              </label>
            </div>
          )}

          <div className="pt-4">
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-4 rounded-xl font-bold text-brand-600 dark:text-brand-400 bg-gray-100 dark:bg-gray-900 shadow-[5px_5px_10px_#d1d1d1,-5px_-5px_10px_#ffffff] dark:shadow-[5px_5px_10px_#0b0c15,-5px_-5px_10px_#171c2b] hover:shadow-[inset_5px_5px_10px_#d1d1d1,inset_-5px_-5px_10px_#ffffff] dark:hover:shadow-[inset_5px_5px_10px_#0b0c15,inset_-5px_-5px_10px_#171c2b] active:scale-95 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <>
                  <div className="loader border-brand-500 dark:border-brand-400 border-t-transparent"></div>
                  <span>Processing...</span>
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
