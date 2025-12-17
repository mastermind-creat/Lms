
import React, { useState } from 'react';
import { 
  Search, HelpCircle, ChevronDown, ChevronUp, Mail, 
  MessageSquare, FileText, PlayCircle, CreditCard, 
  User, Shield, CheckCircle, AlertTriangle, Send, 
  ExternalLink, LifeBuoy, BookOpen, Settings, Zap
} from 'lucide-react';
import { Link } from 'react-router-dom';

// Shared Styles consistent with the theme
const cardStyle = "bg-white dark:bg-gray-800 rounded-2xl shadow-[6px_6px_12px_#e5e7eb,-6px_-6px_12px_#ffffff] dark:shadow-[6px_6px_12px_#0b0c15,-6px_-6px_12px_#1e293b] transition-colors duration-300 border border-gray-100 dark:border-gray-700";
const innerCardStyle = "bg-gray-50 dark:bg-gray-900 rounded-xl shadow-[inset_4px_4px_8px_#d1d5db,inset_-4px_-4px_8px_#ffffff] dark:shadow-[inset_4px_4px_8px_#0b0c15,inset_-4px_-4px_8px_#1e293b]";
const btnPrimary = "px-6 py-3 rounded-xl bg-brand-600 text-white font-bold text-sm shadow-[4px_4px_10px_rgba(243,111,33,0.3)] hover:bg-brand-700 active:shadow-none hover:-translate-y-0.5 transition-all";
const inputStyle = "w-full bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-brand-500 transition-all text-gray-900 dark:text-white";

const faqs = [
  {
    category: "Account & Profile",
    icon: <User size={20} />,
    questions: [
      { q: "How do I reset my password?", a: "Go to the Login page and click 'Forgot Password'. Follow the instructions sent to your email to create a new password." },
      { q: "Can I change my email address?", a: "Yes, you can update your email address in the Settings tab of your Dashboard profile." },
      { q: "How do I delete my account?", a: "Account deletion is permanent. You can request this from the Settings page in your Dashboard under 'Danger Zone'." }
    ]
  },
  {
    category: "Courses & Learning",
    icon: <BookOpen size={20} />,
    questions: [
      { q: "How do I access purchased courses?", a: "All purchased courses appear in the 'My Courses' tab of your Student Dashboard immediately after payment." },
      { q: "Do courses expire?", a: "No, once you buy a course, you have lifetime access to the content and any future updates." },
      { q: "Can I download videos for offline viewing?", a: "Yes, use the ElimuTech mobile app to download lessons and watch them without an internet connection." }
    ]
  },
  {
    category: "Payments & Purchases",
    icon: <CreditCard size={20} />,
    questions: [
      { q: "What payment methods do you accept?", a: "We accept M-PESA, Visa, Mastercard, and PayPal. M-PESA is the preferred method for instant enrollment." },
      { q: "I paid via M-PESA but the course isn't showing.", a: "Payments are usually instant. If it takes longer than 5 minutes, please contact support with your M-PESA transaction code." },
      { q: "How do I get a refund?", a: "We offer a 7-day money-back guarantee. Go to the course page in your dashboard and click 'Request Refund'." }
    ]
  },
  {
    category: "Certificates",
    icon: <Shield size={20} />,
    questions: [
      { q: "When do I get my certificate?", a: "Certificates are automatically generated once you complete 100% of the course content and pass all quizzes." },
      { q: "Is the certificate recognized?", a: "Our certificates are recognized by leading tech companies in Kenya and partners like Microsoft Africa." }
    ]
  }
];

const Support: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedCategory, setExpandedCategory] = useState<string | null>("Account & Profile");
  const [expandedQuestion, setExpandedQuestion] = useState<string | null>(null);
  const [contactFormStatus, setContactFormStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    if (e.target.value) {
      setExpandedCategory(null); // Close categories to show search results focused
    } else {
      setExpandedCategory("Account & Profile");
    }
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setContactFormStatus('sending');
    // Simulate API call
    setTimeout(() => {
      setContactFormStatus('sent');
      setTimeout(() => setContactFormStatus('idle'), 3000);
    }, 1500);
  };

  const filteredFaqs = searchTerm 
    ? faqs.map(cat => ({
        ...cat,
        questions: cat.questions.filter(q => 
          q.q.toLowerCase().includes(searchTerm.toLowerCase()) || 
          q.a.toLowerCase().includes(searchTerm.toLowerCase())
        )
      })).filter(cat => cat.questions.length > 0)
    : faqs;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-24 pb-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-12 animate-fade-in-up">
          <span className="inline-block py-1 px-3 rounded-full bg-brand-100 dark:bg-brand-900/30 text-brand-600 dark:text-brand-400 text-xs font-bold uppercase tracking-widest mb-4">
            Help Center
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            How can we help you?
          </h1>
          
          <div className="max-w-2xl mx-auto relative">
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
              <Search className="text-gray-400" size={20} />
            </div>
            <input 
              type="text" 
              placeholder="Search for answers (e.g., 'refund', 'certificate', 'password')" 
              value={searchTerm}
              onChange={handleSearch}
              className="w-full py-4 pl-12 pr-4 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg text-gray-900 dark:text-white outline-none focus:ring-2 focus:ring-brand-500 transition-all text-lg"
            />
          </div>
        </div>

        {/* Quick Help Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 animate-fade-in-up [animation-delay:100ms]">
          <Link to="/forgot-password" className={`${cardStyle} p-6 flex flex-col items-center text-center hover:scale-[1.02] active:scale-95 group`}>
            <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/20 text-blue-600 flex items-center justify-center mb-3 group-hover:bg-blue-600 group-hover:text-white transition-colors">
              <Settings size={24} />
            </div>
            <h3 className="font-bold text-gray-900 dark:text-white text-sm">Reset Password</h3>
          </Link>
          <Link to="/dashboard" className={`${cardStyle} p-6 flex flex-col items-center text-center hover:scale-[1.02] active:scale-95 group`}>
            <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/20 text-green-600 flex items-center justify-center mb-3 group-hover:bg-green-600 group-hover:text-white transition-colors">
              <PlayCircle size={24} />
            </div>
            <h3 className="font-bold text-gray-900 dark:text-white text-sm">My Courses</h3>
          </Link>
          <Link to="/dashboard" className={`${cardStyle} p-6 flex flex-col items-center text-center hover:scale-[1.02] active:scale-95 group`}>
            <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/20 text-purple-600 flex items-center justify-center mb-3 group-hover:bg-purple-600 group-hover:text-white transition-colors">
              <Shield size={24} />
            </div>
            <h3 className="font-bold text-gray-900 dark:text-white text-sm">Certificates</h3>
          </Link>
          <button onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })} className={`${cardStyle} p-6 flex flex-col items-center text-center hover:scale-[1.02] active:scale-95 group`}>
            <div className="w-12 h-12 rounded-full bg-orange-100 dark:bg-orange-900/20 text-orange-600 flex items-center justify-center mb-3 group-hover:bg-orange-600 group-hover:text-white transition-colors">
              <Mail size={24} />
            </div>
            <h3 className="font-bold text-gray-900 dark:text-white text-sm">Contact Support</h3>
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* FAQ Section */}
          <div className="lg:col-span-2 space-y-6 animate-fade-in-up [animation-delay:200ms]">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Frequently Asked Questions</h2>
            
            {filteredFaqs.length > 0 ? (
              <div className="space-y-4">
                {filteredFaqs.map((cat, idx) => (
                  <div key={idx} className={`${cardStyle} overflow-hidden`}>
                    <button 
                      onClick={() => setExpandedCategory(expandedCategory === cat.category ? null : cat.category)}
                      className="w-full flex items-center justify-between p-6 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <div className="p-2 bg-gray-100 dark:bg-gray-900 rounded-lg text-brand-600 dark:text-brand-400">
                          {cat.icon}
                        </div>
                        <h3 className="font-bold text-lg text-gray-900 dark:text-white">{cat.category}</h3>
                      </div>
                      <ChevronDown 
                        size={20} 
                        className={`text-gray-400 transition-transform duration-300 ${expandedCategory === cat.category ? 'rotate-180' : ''}`} 
                      />
                    </button>
                    
                    {/* Questions Accordion */}
                    <div className={`transition-all duration-300 ease-in-out overflow-hidden ${expandedCategory === cat.category || searchTerm ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                      <div className="px-6 pb-6 pt-0 space-y-3">
                        {cat.questions.map((q, qIdx) => (
                          <div key={qIdx} className="border-t border-gray-100 dark:border-gray-800 pt-3">
                            <button 
                              onClick={() => setExpandedQuestion(expandedQuestion === q.q ? null : q.q)}
                              className="w-full flex justify-between items-center text-left py-2 text-sm font-bold text-gray-700 dark:text-gray-300 hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
                            >
                              {q.q}
                              {expandedQuestion === q.q ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                            </button>
                            {expandedQuestion === q.q && (
                              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mt-2 pl-2 border-l-2 border-brand-500 animate-fade-in">
                                {q.a}
                              </p>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-gray-100 dark:bg-gray-800 rounded-2xl">
                <p className="text-gray-500">No results found for "{searchTerm}"</p>
                <button onClick={() => setSearchTerm("")} className="text-brand-600 font-bold hover:underline mt-2">Clear Search</button>
              </div>
            )}
          </div>

          {/* Sidebar: Status & Contact */}
          <div className="space-y-8 animate-fade-in-up [animation-delay:300ms]">
            
            {/* System Status */}
            <div className={`${cardStyle} p-6`}>
              <div className="flex items-center gap-3 mb-4">
                <div className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white">System Status</h3>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">All systems operational. No reported outages.</p>
              <div className="space-y-2 text-xs text-gray-500">
                <div className="flex justify-between"><span>Website</span> <span className="text-green-500 font-bold">Operational</span></div>
                <div className="flex justify-between"><span>Payments API</span> <span className="text-green-500 font-bold">Operational</span></div>
                <div className="flex justify-between"><span>Video Player</span> <span className="text-green-500 font-bold">Operational</span></div>
              </div>
            </div>

            {/* Resources Links */}
            <div className={`${cardStyle} p-6`}>
              <h3 className="font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <LifeBuoy size={18} className="text-brand-500" /> Helpful Resources
              </h3>
              <div className="space-y-3">
                <a href="#" className="block p-3 rounded-xl bg-gray-50 dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center justify-between group">
                  Getting Started Guide <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
                <a href="#" className="block p-3 rounded-xl bg-gray-50 dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center justify-between group">
                  Instructor Handbook <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
                <a href="#" className="block p-3 rounded-xl bg-gray-50 dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center justify-between group">
                  Community Guidelines <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div id="contact-form" className={`${cardStyle} p-6`}>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">Still need help?</h3>
              <p className="text-sm text-gray-500 mb-6">Our team typically responds within 2 hours.</p>
              
              {contactFormStatus === 'sent' ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
                    <CheckCircle size={32} />
                  </div>
                  <h4 className="font-bold text-gray-900 dark:text-white">Message Sent!</h4>
                  <p className="text-sm text-gray-500">We'll get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div>
                    <label className="text-xs font-bold text-gray-500 uppercase mb-1 block">Full Name</label>
                    <input required type="text" className={inputStyle} placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-gray-500 uppercase mb-1 block">Email</label>
                    <input required type="email" className={inputStyle} placeholder="john@example.com" />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-gray-500 uppercase mb-1 block">Subject</label>
                    <select className={inputStyle}>
                      <option>General Inquiry</option>
                      <option>Billing Issue</option>
                      <option>Technical Support</option>
                      <option>Report Content</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-xs font-bold text-gray-500 uppercase mb-1 block">Message</label>
                    <textarea required rows={4} className={inputStyle + " resize-none"} placeholder="Describe your issue..."></textarea>
                  </div>
                  <button 
                    type="submit" 
                    disabled={contactFormStatus === 'sending'}
                    className={btnPrimary + " w-full flex justify-center items-center gap-2"}
                  >
                    {contactFormStatus === 'sending' ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        Sending...
                      </>
                    ) : (
                      <>Send Message <Send size={18} /></>
                    )}
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
