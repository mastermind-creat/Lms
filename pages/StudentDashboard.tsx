import React, { useState, useEffect, useRef } from 'react';
import { 
  LayoutDashboard, BookOpen, Heart, Video, MessageCircle, 
  Bell, User, Settings, Menu, LogOut, CheckCircle, 
  Clock, Award, PlayCircle, MoreVertical, Search, Zap,
  Calendar, ChevronRight, Send, Camera, Mic, Paperclip,
  Trash2, Shield, Moon, Sun, Smartphone, Mail, Globe, MapPin, 
  Edit3, Save, X, Lock, BarChart2, TrendingUp, Eye, EyeOff, ArrowLeft, 
  FileText, Youtube, Download, ExternalLink, CheckSquare, Square,
  Star, ThumbsUp, ThumbsDown, CreditCard, DollarSign, Receipt, Printer, AlertTriangle
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { courses } from '../data/courses';
import CourseCard from '../components/CourseCard';
import { useTheme } from '../context/ThemeContext';

// --- Shared Styles ---
const cardStyle = "bg-white dark:bg-gray-800 rounded-2xl shadow-[6px_6px_12px_#e5e7eb,-6px_-6px_12px_#ffffff] dark:shadow-[6px_6px_12px_#0b0c15,-6px_-6px_12px_#1e293b] transition-colors duration-300 border border-gray-100 dark:border-gray-700";
const innerCardStyle = "bg-gray-50 dark:bg-gray-900 rounded-xl shadow-[inset_4px_4px_8px_#d1d5db,inset_-4px_-4px_8px_#ffffff] dark:shadow-[inset_4px_4px_8px_#0b0c15,inset_-4px_-4px_8px_#1e293b]";
const iconButtonStyle = "p-3 rounded-xl bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-300 shadow-[5px_5px_10px_#d1d5db,-5px_-5px_10px_#ffffff] dark:shadow-[5px_5px_10px_#0b0c15,-5px_-5px_10px_#1e293b] hover:text-brand-500 dark:hover:text-brand-400 active:shadow-[inset_5px_5px_10px_#d1d5db,inset_-5px_-5px_10px_#ffffff] dark:active:shadow-[inset_5px_5px_10px_#0b0c15,inset_-5px_-5px_10px_#1e293b] transition-all";
const btnPrimary = "px-6 py-3 rounded-xl bg-brand-600 text-white font-bold text-sm shadow-[4px_4px_10px_rgba(243,111,33,0.3)] hover:bg-brand-700 active:shadow-none hover:-translate-y-0.5 transition-all";

// --- Shared Components ---

const Toast = ({ message, onClose }: { message: string, onClose: () => void }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-6 py-3 rounded-full shadow-2xl z-50 flex items-center gap-3 animate-fade-in-up">
      <CheckCircle size={18} className="text-green-500" />
      <span className="font-bold text-sm">{message}</span>
    </div>
  );
};

const InvoiceModal = ({ isOpen, onClose, transaction }: { isOpen: boolean, onClose: () => void, transaction: any }) => {
  if (!isOpen || !transaction) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 print:p-0">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm print:hidden" onClick={onClose}></div>
      <div className="relative bg-white text-gray-900 w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden animate-scale-up print:shadow-none print:w-full print:max-w-none print:rounded-none print:animate-none">
        
        {/* Invoice Header */}
        <div className="bg-brand-600 text-white p-8 flex justify-between items-start print:bg-white print:text-black print:border-b print:border-gray-300">
          <div>
            <div className="flex items-center gap-2 mb-2 print:mb-4">
              <img src="/logo.png" alt="Logo" className="h-8 w-auto brightness-0 invert print:filter-none print:invert-0" />
              <span className="font-bold text-2xl tracking-tight">ElimuTech</span>
            </div>
            <p className="text-brand-100 text-sm print:text-gray-500">The Future of Learning</p>
          </div>
          <div className="text-right">
            <h2 className="text-3xl font-bold opacity-50 print:opacity-100 print:text-gray-900">INVOICE</h2>
            <p className="font-mono text-brand-100 print:text-gray-600">#{transaction.id}</p>
          </div>
        </div>

        {/* Invoice Details */}
        <div className="p-8">
          <div className="flex flex-col md:flex-row justify-between gap-8 mb-12">
            <div>
              <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Billed To</h3>
              <p className="font-bold text-lg">Jane Doe</p>
              <p className="text-gray-500 text-sm">jane.doe@student.elimutech.ke</p>
              <p className="text-gray-500 text-sm">Nairobi, Kenya</p>
            </div>
            <div className="md:text-right">
              <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Payment Details</h3>
              <p className="text-sm"><span className="font-bold">Date:</span> {transaction.date}</p>
              <p className="text-sm"><span className="font-bold">Method:</span> {transaction.method}</p>
              <p className="text-sm"><span className="font-bold">Status:</span> <span className="text-green-600 font-bold">{transaction.status}</span></p>
            </div>
          </div>

          {/* Line Items */}
          <div className="border rounded-xl overflow-hidden mb-8">
            <table className="w-full text-left">
              <thead className="bg-gray-50 text-gray-500 text-xs uppercase">
                <tr>
                  <th className="px-6 py-4">Description</th>
                  <th className="px-6 py-4 text-right">Amount</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="px-6 py-4">
                    <p className="font-bold text-gray-800">{transaction.course}</p>
                    <p className="text-xs text-gray-500">Lifetime Access • Certificate Included</p>
                  </td>
                  <td className="px-6 py-4 text-right font-mono font-bold">KES {transaction.amount.toLocaleString()}</td>
                </tr>
              </tbody>
              <tfoot className="bg-gray-50">
                <tr>
                  <td className="px-6 py-4 font-bold text-right text-gray-600">Total</td>
                  <td className="px-6 py-4 text-right font-bold text-xl text-brand-600">KES {transaction.amount.toLocaleString()}</td>
                </tr>
              </tfoot>
            </table>
          </div>

          {/* Footer Notes */}
          <div className="text-center text-sm text-gray-500 mb-8">
            <p>Thank you for choosing ElimuTech!</p>
            <p className="text-xs mt-1">If you have any questions about this invoice, please contact support@elimutech.ke</p>
          </div>

          {/* Actions */}
          <div className="flex gap-4 print:hidden">
            <button 
              onClick={handlePrint}
              className="flex-1 py-3 rounded-xl bg-gray-100 text-gray-700 font-bold hover:bg-gray-200 transition-colors flex items-center justify-center gap-2"
            >
              <Printer size={18} /> Print / Save PDF
            </button>
            <button 
              onClick={onClose}
              className="flex-1 py-3 rounded-xl bg-brand-600 text-white font-bold hover:bg-brand-700 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const ReviewModal = ({ isOpen, onClose, courseTitle, onSubmit }: { isOpen: boolean, onClose: () => void, courseTitle: string, onSubmit: (data: any) => void }) => {
  const [rating, setRating] = useState(0);
  const [testimonial, setTestimonial] = useState("");
  const [satisfaction, setSatisfaction] = useState<boolean | null>(null);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ rating, testimonial, satisfaction });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose}></div>
      <div className="relative bg-white dark:bg-gray-900 w-full max-w-md rounded-2xl shadow-2xl overflow-hidden animate-scale-up p-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">Rate Course</h3>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full text-gray-500">
            <X size={20} />
          </button>
        </div>

        <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
          How was your experience with <span className="font-bold text-gray-900 dark:text-white">{courseTitle}</span>?
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Star Rating */}
          <div className="flex flex-col items-center gap-2">
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setRating(star)}
                  className={`p-1 transition-transform hover:scale-110 ${rating >= star ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300 dark:text-gray-600'}`}
                >
                  <Star size={32} fill={rating >= star ? "currentColor" : "none"} />
                </button>
              ))}
            </div>
            <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Tap to Rate</span>
          </div>

          {/* Satisfaction Toggle */}
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-xl text-center">
            <label className="text-xs font-bold text-gray-500 uppercase tracking-wider block mb-3">Were the lessons satisfactory?</label>
            <div className="flex justify-center gap-4">
              <button
                type="button"
                onClick={() => setSatisfaction(true)}
                className={`px-4 py-2 rounded-lg flex items-center gap-2 text-sm font-bold transition-all ${satisfaction === true ? 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 border-2 border-green-500' : 'bg-white dark:bg-gray-700 text-gray-600 dark:text-gray-300 border-2 border-transparent'}`}
              >
                <ThumbsUp size={16} /> Yes
              </button>
              <button
                type="button"
                onClick={() => setSatisfaction(false)}
                className={`px-4 py-2 rounded-lg flex items-center gap-2 text-sm font-bold transition-all ${satisfaction === false ? 'bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 border-2 border-red-500' : 'bg-white dark:bg-gray-700 text-gray-600 dark:text-gray-300 border-2 border-transparent'}`}
              >
                <ThumbsDown size={16} /> No
              </button>
            </div>
          </div>

          {/* Testimonial */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">Write a Review</label>
            <textarea
              rows={4}
              value={testimonial}
              onChange={(e) => setTestimonial(e.target.value)}
              placeholder="Tell us what you liked or how we can improve..."
              className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-3 outline-none focus:ring-2 focus:ring-brand-500 text-sm text-gray-900 dark:text-white resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={rating === 0 || satisfaction === null}
            className="w-full py-3 rounded-xl bg-brand-600 text-white font-bold hover:bg-brand-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg"
          >
            Submit Review
          </button>
        </form>
      </div>
    </div>
  );
};

const JitsiModal = ({ isOpen, onClose, roomName }: { isOpen: boolean, onClose: () => void, roomName: string }) => {
  const [loading, setLoading] = useState(true);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black flex flex-col">
       {/* Toolbar */}
       <div className="p-4 bg-gray-900 flex justify-between items-center text-white border-b border-gray-800">
          <div className="flex items-center gap-2">
            <Video size={20} className="text-brand-500" />
            <h3 className="font-bold">{roomName}</h3>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-gray-800 rounded-full text-red-500">
            <X size={24} />
          </button>
       </div>

       <div className="flex-1 relative bg-black flex items-center justify-center">
          {loading && (
             <div className="absolute inset-0 flex flex-col items-center justify-center text-white gap-4">
                <div className="w-12 h-12 border-4 border-gray-700 border-t-brand-500 rounded-full animate-spin"></div>
                <p>Connecting to secure room...</p>
             </div>
          )}
          
          <iframe 
            src={`https://meet.jit.si/${roomName.replace(/\s/g, '')}ElimuTechSecure`} 
            className="w-full h-full border-none relative z-10" 
            allow="camera; microphone; fullscreen; display-capture; autoplay"
            onLoad={() => setLoading(false)}
          ></iframe>
       </div>
    </div>
  );
};

// --- Sub-Views ---

const EnrolledCourseDetailView = ({ course, onBack }: { course: any, onBack: () => void }) => {
  const [activeModule, setActiveModule] = useState<number | null>(0);
  const [showReviewModal, setShowReviewModal] = useState(false);
  // Default to false, can be passed via props in real app
  const [reviewSubmitted, setReviewSubmitted] = useState(course.reviewSubmitted || false); 

  // Mock Modules Data with Resources
  const modules = [
    {
      id: 1,
      title: "Introduction & Environment Setup",
      duration: "45 min",
      completed: true,
      resources: [
        { type: "pdf", title: "Course Syllabus.pdf", size: "1.2 MB" },
        { type: "video", title: "Setting up VS Code for Success", duration: "12:30" }
      ]
    },
    {
      id: 2,
      title: "Core Concepts Deep Dive",
      duration: "1h 20m",
      completed: true,
      resources: [
        { type: "link", title: "Official Documentation Reference" },
        { type: "pdf", title: "Cheatsheet - v1.0.pdf", size: "0.5 MB" }
      ]
    },
    {
      id: 3,
      title: "Building the User Interface",
      duration: "2h 15m",
      completed: false, // In Progress
      resources: [
        { type: "video", title: "Live Coding Session: Header Component", duration: "45:00" },
        { type: "file", title: "Starter_Code.zip", size: "15 MB" }
      ]
    },
    {
      id: 4,
      title: "API Integration & State Management",
      duration: "3h 10m",
      completed: false,
      resources: []
    }
  ];

  const handleReviewSubmit = (data: any) => {
    console.log("Review Submitted:", data);
    setReviewSubmitted(true);
    // Here you would typically send data to backend
  };

  return (
    <div className="animate-fade-in-up pb-12">
      <button onClick={onBack} className="flex items-center gap-2 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white font-bold mb-6 transition-colors">
        <ArrowLeft size={20} /> Back to Courses
      </button>

      {/* Review Reminder Banner */}
      {course.progress === 100 && !reviewSubmitted && (
        <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 mb-6 rounded-r-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 animate-fade-in">
          <div className="flex gap-3">
            <AlertTriangle className="text-yellow-600 dark:text-yellow-500 shrink-0" size={24} />
            <div>
              <h4 className="font-bold text-gray-900 dark:text-white text-sm">Review Pending</h4>
              <p className="text-xs text-gray-600 dark:text-gray-300">You've completed this course! Please rate your experience to get your certificate.</p>
            </div>
          </div>
          <button 
            onClick={() => setShowReviewModal(true)}
            className="whitespace-nowrap px-4 py-2 bg-yellow-500 text-white text-xs font-bold rounded-lg hover:bg-yellow-600 transition-colors shadow-sm"
          >
            Rate Now
          </button>
        </div>
      )}

      {/* Course Header */}
      <div className={`${cardStyle} p-6 md:p-8 mb-8 relative overflow-hidden`}>
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        
        <div className="flex flex-col md:flex-row gap-8 relative z-10">
          <div className="w-full md:w-64 aspect-video rounded-xl overflow-hidden shadow-lg shrink-0">
             <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
          </div>
          
          <div className="flex-1">
             <div className="flex flex-col md:flex-row md:items-start justify-between mb-4 gap-4">
               <div>
                 <span className="inline-block px-3 py-1 rounded-full bg-brand-100 dark:bg-brand-900/30 text-brand-700 dark:text-brand-300 text-xs font-bold mb-2">
                   {course.progress === 100 ? "Completed" : "In Progress"}
                 </span>
                 <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2 leading-tight">{course.title}</h1>
                 <p className="text-gray-500 dark:text-gray-400 text-sm">Instructor: <span className="font-bold text-gray-900 dark:text-white">{course.instructor}</span></p>
               </div>
               
               {/* Actions - Now visible on mobile too */}
               {course.progress === 100 && (
                 <div className="flex flex-wrap gap-2">
                   {!reviewSubmitted ? (
                     <button 
                       onClick={() => setShowReviewModal(true)}
                       className="flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-500 rounded-xl font-bold text-sm hover:scale-105 transition-transform shadow-sm"
                     >
                       <Star size={18} /> Review
                     </button>
                   ) : (
                     <span className="flex items-center gap-2 px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-500 rounded-xl font-bold text-sm">
                       <CheckCircle size={18} /> Reviewed
                     </span>
                   )}
                   <button className="flex items-center gap-2 px-4 py-2 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-500 rounded-xl font-bold text-sm hover:scale-105 transition-transform shadow-sm">
                     <Award size={18} /> Certificate
                   </button>
                 </div>
               )}
             </div>

             <div className="space-y-2">
               <div className="flex justify-between text-sm font-bold">
                 <span className="text-gray-600 dark:text-gray-300">{course.progress}% Complete</span>
                 <span className="text-gray-400">{modules.filter(m => m.completed).length}/{modules.length} Modules</span>
               </div>
               <div className="h-3 w-full bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                 <div className="h-full bg-brand-500 rounded-full transition-all duration-1000 ease-out" style={{ width: `${course.progress}%` }}></div>
               </div>
             </div>
             
             <div className="mt-6 flex flex-col sm:flex-row gap-3">
               <button className={btnPrimary + " flex items-center justify-center gap-2 w-full sm:w-auto"}>
                 <PlayCircle size={18} /> Continue Learning
               </button>
               <button className="px-6 py-3 rounded-xl border border-gray-200 dark:border-gray-700 font-bold text-sm hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors flex items-center justify-center gap-2 text-gray-700 dark:text-gray-200 w-full sm:w-auto">
                 <MessageCircle size={18} /> Course Forum
               </button>
             </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content: Syllabus */}
        <div className="lg:col-span-2 space-y-6">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
            <BookOpen className="text-brand-500" size={20} /> Course Content
          </h2>

          <div className="space-y-4">
             {modules.map((module, index) => (
               <div key={module.id} className={`${cardStyle} overflow-hidden`}>
                 {/* Module Header */}
                 <div 
                    className="p-4 flex items-center justify-between cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
                    onClick={() => setActiveModule(activeModule === index ? null : index)}
                 >
                    <div className="flex items-center gap-4">
                       <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${module.completed ? 'bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400' : 'bg-gray-100 text-gray-400 dark:bg-gray-800'}`}>
                         {module.completed ? <CheckCircle size={18} /> : <span className="text-xs font-bold">{index + 1}</span>}
                       </div>
                       <div>
                         <h3 className={`font-bold ${module.completed ? 'text-gray-900 dark:text-white' : 'text-gray-600 dark:text-gray-300'}`}>{module.title}</h3>
                         <p className="text-xs text-gray-500">{module.duration}</p>
                       </div>
                    </div>
                    <ChevronRight size={20} className={`text-gray-400 transition-transform duration-300 ${activeModule === index ? 'rotate-90' : ''}`} />
                 </div>

                 {/* Module Content & Resources */}
                 {activeModule === index && (
                   <div className="bg-gray-50 dark:bg-gray-900/50 p-4 border-t border-gray-100 dark:border-gray-700 animate-fade-in">
                      <div className="mb-4 pl-12">
                         <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                           In this module, we cover the fundamentals necessary to get started. Make sure to download the attached resources.
                         </p>
                      </div>

                      {module.resources.length > 0 && (
                        <div className="pl-12 space-y-2">
                           <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Resources</h4>
                           {module.resources.map((res: any, idx) => (
                             <div key={idx} className="flex items-center justify-between p-3 bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 hover:border-brand-300 dark:hover:border-brand-700 transition-colors group cursor-pointer">
                                <div className="flex items-center gap-3">
                                   {res.type === 'pdf' && <FileText size={18} className="text-red-500" />}
                                   {res.type === 'video' && <Youtube size={18} className="text-red-600" />}
                                   {res.type === 'link' && <ExternalLink size={18} className="text-blue-500" />}
                                   {res.type === 'file' && <Download size={18} className="text-brand-500" />}
                                   <div>
                                      <p className="text-sm font-bold text-gray-800 dark:text-gray-200 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">{res.title}</p>
                                      {res.size && <p className="text-[10px] text-gray-400">{res.size}</p>}
                                      {res.duration && <p className="text-[10px] text-gray-400">{res.duration}</p>}
                                   </div>
                                </div>
                                <button className="p-2 text-gray-400 hover:text-brand-500">
                                   <Download size={16} />
                                </button>
                             </div>
                           ))}
                        </div>
                      )}
                   </div>
                 )}
               </div>
             ))}
          </div>
        </div>

        {/* Sidebar: Instructor & Tools */}
        <div className="space-y-6">
           <div className={`${cardStyle} p-6`}>
              <h3 className="font-bold text-gray-900 dark:text-white mb-4">About the Instructor</h3>
              <div className="flex items-center gap-4 mb-4">
                <img src={`https://i.pravatar.cc/150?u=${course.instructor}`} alt="" className="w-12 h-12 rounded-full" />
                <div>
                   <p className="font-bold text-gray-900 dark:text-white">{course.instructor}</p>
                   <p className="text-xs text-gray-500">Senior Engineer @ Safaricom</p>
                </div>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 text-sm mb-4">
                Expert in FinTech integrations with over 10 years of experience building payment systems across Africa.
              </p>
              <button className="w-full py-2 rounded-lg border border-gray-200 dark:border-gray-700 text-sm font-bold hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                View Profile
              </button>
           </div>
           
           <div className={`${cardStyle} p-6`}>
              <h3 className="font-bold text-gray-900 dark:text-white mb-4">Course Tools</h3>
              <div className="space-y-2">
                 <button className="w-full flex items-center justify-between p-3 rounded-xl bg-gray-50 dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-sm font-medium text-gray-700 dark:text-gray-300">
                    <span className="flex items-center gap-2"><FileText size={16} /> Course Notes</span>
                    <ExternalLink size={14} className="text-gray-400" />
                 </button>
                 <button className="w-full flex items-center justify-between p-3 rounded-xl bg-gray-50 dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-sm font-medium text-gray-700 dark:text-gray-300">
                    <span className="flex items-center gap-2"><MessageCircle size={16} /> Discussion Group</span>
                    <ExternalLink size={14} className="text-gray-400" />
                 </button>
              </div>
           </div>
        </div>
      </div>

      <ReviewModal 
        isOpen={showReviewModal} 
        onClose={() => setShowReviewModal(false)}
        courseTitle={course.title}
        onSubmit={handleReviewSubmit}
      />
    </div>
  );
};

const DashboardHome = ({ setActiveTab, openJitsi, onCourseClick }: { setActiveTab: (tab: string) => void, openJitsi: (room: string) => void, onCourseClick: (course: any) => void }) => {
  const stats = [
    { title: 'Total Courses', value: '12', icon: BookOpen, color: 'text-blue-500' },
    { title: 'In Progress', value: '4', icon: Clock, color: 'text-brand-500' },
    { title: 'Completed', value: '8', icon: CheckCircle, color: 'text-green-500' },
    { title: 'Certificates', value: '6', icon: Award, color: 'text-yellow-500' },
  ];

  const continueLearning = [
    {
      id: 1,
      title: "M-PESA Integration & API Development",
      instructor: "Kevin Omondi",
      progress: 65,
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=200&q=80",
      nextLesson: "Handling STK Callbacks"
    },
    {
      id: 2,
      title: "Frontend Development with React",
      instructor: "Wanjiku Kimani",
      progress: 32,
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=200&q=80",
      nextLesson: "Custom Hooks Deep Dive"
    }
  ];

  return (
    <div className="space-y-8 animate-fade-in-up">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-1">
            Welcome back, Jane! 👋
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-sm md:text-base">
            You've completed <span className="text-brand-500 font-bold">80%</span> of your weekly goal. Keep it up!
          </p>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {stats.map((stat, index) => (
          <div key={index} className={`p-4 md:p-6 flex flex-col items-start gap-4 ${cardStyle}`}>
            <div className={`p-3 rounded-xl bg-gray-50 dark:bg-gray-900 ${stat.color} shadow-inner`}>
              <stat.icon size={24} />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</h3>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">{stat.title}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Continue Learning */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
              <Zap className="text-brand-500" size={20} fill="currentColor" /> Continue Learning
            </h2>
            <button onClick={() => setActiveTab('My Courses')} className="text-sm font-bold text-brand-600 dark:text-brand-400 hover:underline">View All</button>
          </div>

          {continueLearning.map((course) => (
            <div 
              key={course.id} 
              onClick={() => onCourseClick(course)}
              className={`p-4 md:p-6 flex flex-col md:flex-row gap-6 items-center ${cardStyle} hover:scale-[1.01] transition-transform cursor-pointer group`}
            >
                <div className="relative w-full md:w-48 aspect-video rounded-xl overflow-hidden shadow-md">
                  <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <PlayCircle size={32} className="text-white drop-shadow-lg" fill="rgba(255,255,255,0.2)" />
                  </div>
                </div>
                
                <div className="flex-1 w-full">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-1">{course.title}</h3>
                      <p className="text-xs text-gray-500 dark:text-gray-400">By {course.instructor}</p>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="flex justify-between text-xs font-bold mb-1.5">
                      <span className="text-gray-500 dark:text-gray-400">Next: {course.nextLesson}</span>
                      <span className="text-brand-600 dark:text-brand-400">{course.progress}%</span>
                    </div>
                    <div className="h-2.5 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-brand-500 rounded-full relative"
                        style={{ width: `${course.progress}%` }}
                      ></div>
                    </div>
                  </div>

                  <button className={btnPrimary}>
                    Resume Lesson
                  </button>
                </div>
            </div>
          ))}
        </div>

        {/* Widgets */}
        <div className="space-y-8">
           {/* Recent Activity */}
           <div className={`p-6 ${cardStyle}`}>
             <h3 className="font-bold text-gray-900 dark:text-white mb-4">Recent Activity</h3>
             <div className="space-y-4 relative">
               <div className="absolute left-2.5 top-2 bottom-2 w-0.5 bg-gray-200 dark:bg-gray-700"></div>
               {[
                 { text: "Finished 'Intro to React'", time: "2h ago", icon: CheckCircle, color: "text-green-500" },
                 { text: "Joined 'Design Systems' Live", time: "5h ago", icon: Video, color: "text-red-500" },
                 { text: "Earned 'CSS Master' Badge", time: "1d ago", icon: Award, color: "text-yellow-500" },
                 { text: "Posted in 'Help' Forum", time: "2d ago", icon: MessageCircle, color: "text-blue-500" },
               ].map((item, i) => (
                 <div key={i} className="flex gap-4 relative">
                   <div className={`w-6 h-6 rounded-full bg-white dark:bg-gray-800 border-4 border-gray-100 dark:border-gray-900 z-10 flex items-center justify-center ${item.color}`}>
                     <item.icon size={12} />
                   </div>
                   <div>
                     <p className="text-sm font-bold text-gray-700 dark:text-gray-200">{item.text}</p>
                     <p className="text-xs text-gray-400">{item.time}</p>
                   </div>
                 </div>
               ))}
             </div>
           </div>

           {/* Upcoming Live Class */}
           <div className={`p-6 ${cardStyle} relative overflow-hidden group`}>
              <div className="absolute top-0 right-0 p-3">
                <span className="flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                </span>
              </div>
              
              <div className="w-12 h-12 bg-red-50 dark:bg-red-900/20 text-red-500 rounded-xl flex items-center justify-center mb-4 shadow-sm">
                <Video size={24} />
              </div>
              
              <h3 className="font-bold text-gray-900 dark:text-white mb-1">Weekly Design Review</h3>
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">Starts in 35 minutes</p>
              
              <button 
                onClick={() => openJitsi('Weekly Design Review')}
                className="w-full py-2.5 rounded-xl border-2 border-red-500 text-red-500 font-bold text-sm hover:bg-red-500 hover:text-white transition-all"
              >
                Join Session
              </button>
           </div>
        </div>
      </div>
    </div>
  );
};

const AnalyticsView = () => {
  // Mock Data for Charts
  const learningData = [20, 45, 30, 60, 40, 75, 50]; // Mon-Sun
  const maxVal = Math.max(...learningData);
  const points = learningData.map((val, i) => `${(i / (learningData.length - 1)) * 100},${100 - (val / maxVal) * 80}`).join(" ");
  
  const skills = [
    { name: "React", val: 80, color: "bg-blue-500" },
    { name: "UI/UX", val: 65, color: "bg-purple-500" },
    { name: "Python", val: 40, color: "bg-green-500" },
    { name: "Fintech", val: 90, color: "bg-brand-500" }
  ];

  return (
    <div className="animate-fade-in-up space-y-8">
      <div className="flex justify-between items-end">
         <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Analytics Overview</h1>
         <div className="hidden md:flex gap-2">
           <select className="bg-gray-50 dark:bg-gray-800 border-none rounded-xl text-xs font-bold px-4 py-2 text-gray-600 dark:text-gray-300 shadow-sm cursor-pointer outline-none">
             <option>Last 7 Days</option>
             <option>Last Month</option>
             <option>Last Year</option>
           </select>
         </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
         <div className={`${cardStyle} p-6 flex flex-col`}>
            <div className="flex justify-between items-start mb-4">
              <div className="p-3 bg-brand-50 dark:bg-brand-900/20 text-brand-600 rounded-xl">
                 <Clock size={24} />
              </div>
              <span className="flex items-center text-green-500 text-xs font-bold gap-1 bg-green-50 dark:bg-green-900/20 px-2 py-1 rounded-lg">
                <TrendingUp size={12} /> +12%
              </span>
            </div>
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-1">24.5h</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">Learning Time</p>
         </div>

         <div className={`${cardStyle} p-6 flex flex-col`}>
            <div className="flex justify-between items-start mb-4">
              <div className="p-3 bg-blue-50 dark:bg-blue-900/20 text-blue-600 rounded-xl">
                 <CheckCircle size={24} />
              </div>
              <span className="flex items-center text-green-500 text-xs font-bold gap-1 bg-green-50 dark:bg-green-900/20 px-2 py-1 rounded-lg">
                <TrendingUp size={12} /> +5%
              </span>
            </div>
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-1">92%</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">Avg. Quiz Score</p>
         </div>

         <div className={`${cardStyle} p-6 flex flex-col`}>
            <div className="flex justify-between items-start mb-4">
              <div className="p-3 bg-purple-50 dark:bg-purple-900/20 text-purple-600 rounded-xl">
                 <Award size={24} />
              </div>
            </div>
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-1">6</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">Certificates Earned</p>
         </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Main Chart - Learning Activity */}
        <div className={`${cardStyle} p-6 lg:col-span-2 flex flex-col`}>
           <h3 className="font-bold text-gray-900 dark:text-white mb-6">Learning Activity</h3>
           <div className="flex-1 min-h-[300px] w-full relative">
             <svg className="w-full h-full overflow-visible" viewBox="0 0 100 100" preserveAspectRatio="none">
               <defs>
                 <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                   <stop offset="0%" stopColor="#F36F21" stopOpacity="0.3" />
                   <stop offset="100%" stopColor="#F36F21" stopOpacity="0" />
                 </linearGradient>
               </defs>
               
               {/* Grid Lines */}
               {[0, 25, 50, 75, 100].map(y => (
                 <line key={y} x1="0" y1={y} x2="100" y2="100" stroke="currentColor" strokeOpacity="0.1" strokeWidth="0.5" className="text-gray-400" />
               ))}

               {/* Area Path */}
               <path 
                 d={`M0,100 L0,${100 - (learningData[0] / maxVal) * 80} ${learningData.map((val, i) => `L${(i / (learningData.length - 1)) * 100},${100 - (val / maxVal) * 80}`).join(" ")} L100,100 Z`} 
                 fill="url(#chartGradient)" 
               />

               {/* Line Path */}
               <polyline 
                 points={points} 
                 fill="none" 
                 stroke="#F36F21" 
                 strokeWidth="1" 
                 vectorEffect="non-scaling-stroke"
                 strokeLinecap="round"
                 strokeLinejoin="round"
               />

               {/* Points */}
               {learningData.map((val, i) => (
                 <circle 
                    key={i}
                    cx={(i / (learningData.length - 1)) * 100}
                    cy={100 - (val / maxVal) * 80}
                    r="1.5"
                    className="fill-brand-500 stroke-white dark:stroke-gray-800 hover:scale-150 transition-transform origin-center cursor-pointer"
                    strokeWidth="0.5"
                    vectorEffect="non-scaling-stroke"
                 />
               ))}
             </svg>
             
             {/* X-Axis Labels */}
             <div className="flex justify-between mt-4 text-xs text-gray-400 font-medium">
               {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => (
                 <span key={day}>{day}</span>
               ))}
             </div>
           </div>
        </div>

        {/* Side Charts */}
        <div className="space-y-8">
           {/* Skills Distribution */}
           <div className={`${cardStyle} p-6`}>
              <h3 className="font-bold text-gray-900 dark:text-white mb-6">Skill Proficiency</h3>
              <div className="space-y-5">
                 {skills.map(skill => (
                   <div key={skill.name}>
                     <div className="flex justify-between text-xs font-bold mb-2">
                       <span className="text-gray-700 dark:text-gray-300">{skill.name}</span>
                       <span className="text-gray-500">{skill.val}%</span>
                     </div>
                     <div className="h-2.5 w-full bg-gray-100 dark:bg-gray-900 rounded-full overflow-hidden shadow-inner">
                        <div className={`h-full rounded-full ${skill.color}`} style={{ width: `${skill.val}%` }}></div>
                     </div>
                   </div>
                 ))}
              </div>
           </div>

           {/* Completion Donut */}
           <div className={`${cardStyle} p-6 flex flex-col items-center`}>
              <h3 className="font-bold text-gray-900 dark:text-white mb-4 w-full text-left">Course Completion</h3>
              <div className="relative w-40 h-40">
                 <svg className="w-full h-full transform -rotate-90">
                    <circle cx="50%" cy="50%" r="45%" stroke="currentColor" strokeWidth="8" fill="transparent" className="text-gray-100 dark:text-gray-900" />
                    <circle 
                      cx="50%" cy="50%" r="45%" 
                      stroke="#10B981" 
                      strokeWidth="8" 
                      fill="transparent" 
                      strokeDasharray="283"
                      strokeDashoffset={283 - (283 * 0.75)} 
                      strokeLinecap="round"
                    />
                 </svg>
                 <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">75%</span>
                    <span className="text-[10px] text-gray-400 uppercase tracking-wider">Overall</span>
                 </div>
              </div>
           </div>
        </div>

      </div>
    </div>
  );
};

const PaymentsView = () => {
  const [selectedInvoice, setSelectedInvoice] = useState<any>(null);

  const transactions = [
    { id: "INV-001", course: "M-PESA Integration & API", date: "Oct 22, 2025", amount: 5000, method: "M-PESA", status: "Success" },
    { id: "INV-002", course: "Frontend Dev with React", date: "Sep 15, 2025", amount: 8500, method: "Card", status: "Success" },
    { id: "INV-003", course: "Mobile App Dev with Flutter", date: "Aug 10, 2025", amount: 14000, method: "M-PESA", status: "Success" },
    { id: "INV-004", course: "Cybersecurity Essentials", date: "Jul 05, 2025", amount: 9500, method: "PayPal", status: "Success" },
    { id: "INV-005", course: "Python for Finance", date: "Jun 20, 2025", amount: 12000, method: "M-PESA", status: "Failed" },
  ];

  const totalSpent = transactions
    .filter(t => t.status === "Success")
    .reduce((sum, t) => sum + t.amount, 0);

  return (
    <div className="animate-fade-in-up space-y-8">
      <div className="flex justify-between items-end">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Billing & Payments</h1>
        <button className={btnPrimary + " flex items-center gap-2"}>
          <Download size={18} /> Download All Invoices
        </button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className={`${cardStyle} p-6 flex items-center gap-4`}>
           <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/20 text-green-600 flex items-center justify-center">
             <DollarSign size={24} />
           </div>
           <div>
             <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">Total Spent</p>
             <h3 className="text-2xl font-bold text-gray-900 dark:text-white">KES {totalSpent.toLocaleString()}</h3>
           </div>
        </div>

        <div className={`${cardStyle} p-6 flex items-center gap-4`}>
           <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/20 text-blue-600 flex items-center justify-center">
             <BookOpen size={24} />
           </div>
           <div>
             <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">Courses Purchased</p>
             <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{transactions.filter(t => t.status === 'Success').length}</h3>
           </div>
        </div>

        <div className={`${cardStyle} p-6 flex items-center gap-4`}>
           <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/20 text-purple-600 flex items-center justify-center">
             <Receipt size={24} />
           </div>
           <div>
             <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">Last Payment</p>
             <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Oct 22, 2025</h3>
           </div>
        </div>
      </div>

      {/* Transactions List */}
      <div className={`${cardStyle} overflow-hidden`}>
         <div className="p-6 border-b border-gray-100 dark:border-gray-700">
            <h3 className="font-bold text-lg text-gray-900 dark:text-white">Transaction History</h3>
         </div>
         <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-gray-600 dark:text-gray-300">
               <thead className="bg-gray-50 dark:bg-gray-900/50 text-xs uppercase font-bold text-gray-500">
                  <tr>
                    <th className="px-6 py-4">Course</th>
                    <th className="px-6 py-4">Date</th>
                    <th className="px-6 py-4">Method</th>
                    <th className="px-6 py-4">Status</th>
                    <th className="px-6 py-4 text-right">Amount</th>
                    <th className="px-6 py-4 text-right">Invoice</th>
                  </tr>
               </thead>
               <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                  {transactions.map((t) => (
                    <tr key={t.id} className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                       <td className="px-6 py-4 font-bold text-gray-900 dark:text-white">{t.course} <span className="block text-xs font-normal text-gray-400 md:hidden">{t.id}</span></td>
                       <td className="px-6 py-4">{t.date}</td>
                       <td className="px-6 py-4 flex items-center gap-2">
                         {t.method === 'M-PESA' ? <Smartphone size={16} className="text-green-500" /> : <CreditCard size={16} className="text-blue-500" />}
                         {t.method}
                       </td>
                       <td className="px-6 py-4">
                         <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold ${t.status === 'Success' ? 'bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-500' : 'bg-red-100 dark:bg-red-900/20 text-red-700 dark:text-red-500'}`}>
                           {t.status}
                         </span>
                       </td>
                       <td className="px-6 py-4 text-right font-bold">KES {t.amount.toLocaleString()}</td>
                       <td className="px-6 py-4 text-right">
                          {t.status === 'Success' && (
                             <button 
                               onClick={() => setSelectedInvoice(t)}
                               className="text-brand-600 dark:text-brand-400 hover:text-brand-700 p-2 hover:bg-brand-50 dark:hover:bg-brand-900/10 rounded-lg transition-colors"
                             >
                                <Download size={18} />
                             </button>
                          )}
                       </td>
                    </tr>
                  ))}
               </tbody>
            </table>
         </div>
      </div>

      <InvoiceModal 
        isOpen={!!selectedInvoice} 
        onClose={() => setSelectedInvoice(null)} 
        transaction={selectedInvoice} 
      />
    </div>
  );
};

const MyCoursesView = ({ onCourseClick }: { onCourseClick: (course: any) => void }) => {
  const [filter, setFilter] = useState<'in-progress' | 'completed'>('in-progress');

  const myCourses = [
    { ...courses[0], progress: 65, totalLessons: 24, completedLessons: 15, reviewSubmitted: false },
    { ...courses[2], progress: 32, totalLessons: 40, completedLessons: 12, reviewSubmitted: false },
    { ...courses[5], progress: 10, totalLessons: 18, completedLessons: 2, reviewSubmitted: false },
    { ...courses[7], progress: 100, totalLessons: 12, completedLessons: 12, reviewSubmitted: false }, // Pending Review
    { ...courses[3], progress: 100, totalLessons: 15, completedLessons: 15, reviewSubmitted: true }, // Reviewed
  ];

  const filteredCourses = myCourses.filter(course => 
    filter === 'in-progress' ? course.progress < 100 : course.progress === 100
  );

  return (
    <div className="animate-fade-in-up">
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
         <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">My Courses</h1>
         
         {/* Toggle */}
         <div className="flex gap-2 bg-white dark:bg-gray-800 p-1 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
            <button 
              onClick={() => setFilter('in-progress')}
              className={`px-4 py-2 text-sm font-bold rounded-lg transition-colors flex items-center gap-2 ${filter === 'in-progress' ? 'bg-brand-600 text-white shadow-sm' : 'text-gray-500 hover:bg-gray-50 dark:hover:bg-gray-700'}`}
            >
              <Clock size={16} /> In Progress
            </button>
            <button 
              onClick={() => setFilter('completed')}
              className={`px-4 py-2 text-sm font-bold rounded-lg transition-colors flex items-center gap-2 ${filter === 'completed' ? 'bg-green-600 text-white shadow-sm' : 'text-gray-500 hover:bg-gray-50 dark:hover:bg-gray-700'}`}
            >
              <CheckCircle size={16} /> Completed
            </button>
         </div>
      </div>
      
      {filteredCourses.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredCourses.map((course) => (
            <div 
               key={course.id} 
               onClick={() => onCourseClick(course)}
               className={`${cardStyle} flex flex-col h-full overflow-hidden group cursor-pointer hover:border-brand-300 dark:hover:border-brand-700 hover:-translate-y-1 transition-all`}
            >
              <div className="relative aspect-video">
                <img src={course.image} alt={course.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                
                {/* Pending Review Badge */}
                {course.progress === 100 && !course.reviewSubmitted && (
                  <div className="absolute top-2 right-2 bg-yellow-500 text-white text-[10px] font-bold px-2 py-1 rounded-md shadow-md flex items-center gap-1 animate-pulse">
                    <AlertTriangle size={12} /> Review Pending
                  </div>
                )}

                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                   <button className="bg-white/20 backdrop-blur-md border border-white/50 text-white rounded-full p-3 hover:scale-110 transition-transform">
                      {course.progress === 100 ? <Award size={32} /> : <PlayCircle size={32} />}
                   </button>
                </div>
              </div>
              
              <div className="p-5 flex flex-col flex-1">
                 <h3 className="font-bold text-gray-900 dark:text-white line-clamp-2 mb-2">{course.title}</h3>
                 <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">By {course.instructor}</p>
                 
                 <div className="mt-auto">
                   <div className="flex justify-between text-xs font-bold mb-2">
                      <span className="text-gray-500 dark:text-gray-400">{course.completedLessons}/{course.totalLessons} Lessons</span>
                      <span className={course.progress === 100 ? "text-green-500" : "text-brand-500"}>{course.progress}%</span>
                   </div>
                   <div className="h-2 w-full bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div className={`h-full rounded-full ${course.progress === 100 ? 'bg-green-100 text-green-500' : 'bg-brand-500'}`} style={{ width: `${course.progress}%` }}></div>
                   </div>
                 </div>
                 
                 {course.progress === 100 && (
                   <button className="mt-4 w-full py-2 border border-brand-200 dark:border-brand-900 text-brand-600 dark:text-brand-400 text-xs font-bold rounded-lg hover:bg-brand-50 dark:hover:bg-brand-900/20 transition-colors flex items-center justify-center gap-2">
                     <Award size={14} /> Download Certificate
                   </button>
                 )}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-20 text-center opacity-50">
          <BookOpen size={48} className="mb-4 text-gray-400" />
          <p className="text-xl font-bold">No courses found in this category</p>
          <button className="mt-4 text-brand-600 font-bold hover:underline">Browse Catalog</button>
        </div>
      )}
    </div>
  );
};

const WishlistView = () => {
  const wishlistItems = courses.slice(1, 5); // Mock Data

  return (
    <div className="animate-fade-in-up">
      <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">My Wishlist</h1>
      {wishlistItems.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {wishlistItems.map((course) => (
             <div key={course.id} className={`${cardStyle} overflow-hidden p-2`}>
                <CourseCard 
                  course={course} 
                  linkState={{ from: '/dashboard', label: 'Back to Wishlist', tab: 'Wishlist' }} 
                />
             </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-20 text-center opacity-50">
          <Heart size={48} className="mb-4 text-gray-400" />
          <p className="text-xl font-bold">Your wishlist is empty</p>
        </div>
      )}
    </div>
  );
};

const LiveClassesView = ({ openJitsi }: { openJitsi: (room: string) => void }) => {
  const [viewMode, setViewMode] = useState<'upcoming' | 'past'>('upcoming');

  const upcomingSessions = [
    { title: "Weekly Design Review", time: "10:00 AM", date: "Today", instructor: "Brian Kipkorir", attendees: 42, status: "live" },
    { title: "React State Management Q&A", time: "2:00 PM", date: "Tomorrow", instructor: "Wanjiku Kimani", attendees: 120, status: "upcoming" },
    { title: "Cybersecurity Basics Workshop", time: "4:00 PM", date: "Fri, Oct 24", instructor: "Maria Garcia", attendees: 85, status: "upcoming" },
    { title: "Data Science Career Talk", time: "6:00 PM", date: "Sat, Oct 25", instructor: "Dr. Zainab Ahmed", attendees: 200, status: "upcoming" },
  ];

  const pastSessions = [
    { title: "Intro to Figma for Devs", time: "10:00 AM", date: "Yesterday", instructor: "Brian Kipkorir", attendees: 150, status: "ended" },
    { title: "Understanding React Hooks", time: "2:00 PM", date: "Mon, Oct 20", instructor: "Wanjiku Kimani", attendees: 310, status: "ended" },
    { title: "Python Data Structures", time: "4:00 PM", date: "Fri, Oct 17", instructor: "Dr. Zainab Ahmed", attendees: 180, status: "ended" },
  ];

  const sessions = viewMode === 'upcoming' ? upcomingSessions : pastSessions;

  return (
    <div className="animate-fade-in-up">
      <div className="flex justify-between items-center mb-6">
         <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Live Classes</h1>
         <div className="flex gap-2 bg-white dark:bg-gray-800 p-1 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
            <button 
              onClick={() => setViewMode('upcoming')}
              className={`px-4 py-1.5 text-xs font-bold rounded-lg transition-colors ${viewMode === 'upcoming' ? 'bg-brand-600 text-white shadow-sm' : 'text-gray-500 hover:bg-gray-50 dark:hover:bg-gray-700'}`}
            >
              Upcoming
            </button>
            <button 
              onClick={() => setViewMode('past')}
              className={`px-4 py-1.5 text-xs font-bold rounded-lg transition-colors ${viewMode === 'past' ? 'bg-brand-600 text-white shadow-sm' : 'text-gray-500 hover:bg-gray-50 dark:hover:bg-gray-700'}`}
            >
              Past
            </button>
         </div>
      </div>

      <div className="space-y-4">
        {sessions.map((session, index) => (
          <div key={index} className={`${cardStyle} p-6 flex flex-col md:flex-row items-center gap-6 group hover:border-brand-200 dark:hover:border-brand-800 transition-colors`}>
             <div className="flex flex-col items-center justify-center w-20 h-20 bg-gray-50 dark:bg-gray-900 rounded-2xl shadow-inner shrink-0">
               <span className="text-xs font-bold text-gray-400 uppercase">{session.date === 'Today' || session.date === 'Tomorrow' || session.date === 'Yesterday' ? '' : session.date.split(',')[0]}</span>
               <span className="text-xl font-bold text-gray-900 dark:text-white">{session.date === 'Today' || session.date === 'Tomorrow' || session.date === 'Yesterday' ? session.date : session.date.split(' ')[2]}</span>
               <span className="text-[10px] text-gray-400">{session.time}</span>
             </div>

             <div className="flex-1 text-center md:text-left">
               {session.status === 'live' && (
                 <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 text-[10px] font-bold uppercase tracking-wider mb-2 animate-pulse">
                   <span className="w-1.5 h-1.5 rounded-full bg-red-600 dark:bg-red-500"></span> Live Now
                 </span>
               )}
               {session.status === 'ended' && (
                 <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 text-[10px] font-bold uppercase tracking-wider mb-2">
                   Ended
                 </span>
               )}
               <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">{session.title}</h3>
               <p className="text-sm text-gray-500 dark:text-gray-400">with {session.instructor}</p>
             </div>

             <div className="flex items-center gap-6">
                <div className="hidden md:flex -space-x-2">
                   {[1,2,3].map(i => (
                     <img key={i} className="w-8 h-8 rounded-full border-2 border-white dark:border-gray-800" src={`https://i.pravatar.cc/100?img=${i+20}`} alt="User" />
                   ))}
                   <div className="w-8 h-8 rounded-full border-2 border-white dark:border-gray-800 bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-[10px] font-bold text-gray-500">+{session.attendees}</div>
                </div>

                <button 
                  onClick={() => session.status !== 'ended' ? openJitsi(session.title) : null}
                  className={`${session.status === 'live' ? 'bg-red-600 hover:bg-red-700 text-white shadow-red-500/30' : session.status === 'ended' ? 'bg-white dark:bg-gray-800 border-2 border-brand-500 text-brand-500 hover:bg-brand-50 dark:hover:bg-brand-900/10' : 'bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-900 dark:text-white'} px-6 py-3 rounded-xl font-bold text-sm shadow-lg transition-all active:scale-95 flex items-center gap-2`}
                >
                  {session.status === 'live' ? 'Join Now' : session.status === 'ended' ? (
                     <>
                        <PlayCircle size={18} /> Watch Recording
                     </>
                  ) : 'Set Reminder'}
                </button>
             </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const MessagesView = () => {
  const [activeChat, setActiveChat] = useState(0);
  const [showMobileChat, setShowMobileChat] = useState(false); // State to toggle view on mobile
  const myAvatarUrl = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80";
  
  const contacts = [
    { id: 0, name: "Kevin Omondi", role: "Instructor", online: true, lastMsg: "Great work on the assignment!", time: "10m", img: 12 },
    { id: 1, name: "Wanjiku Kimani", role: "Mentor", online: false, lastMsg: "Let's schedule a call.", time: "2h", img: 5 },
    { id: 2, name: "Student Support", role: "Admin", online: true, lastMsg: "Your ticket #4291 is resolved.", time: "1d", img: 3 },
  ];

  const handleContactClick = (id: number) => {
    setActiveChat(id);
    setShowMobileChat(true);
  };

  return (
    <div className={`h-[calc(100vh-140px)] ${cardStyle} flex overflow-hidden animate-fade-in-up`}>
       {/* Contact List */}
       <div className={`w-full md:w-80 border-r border-gray-100 dark:border-gray-700 flex flex-col ${showMobileChat ? 'hidden md:flex' : 'flex'}`}>
          <div className="p-4 border-b border-gray-100 dark:border-gray-700">
             <div className={innerCardStyle + " flex items-center px-3 py-2"}>
               <Search size={16} className="text-gray-400" />
               <input type="text" placeholder="Search messages" className="bg-transparent border-none outline-none text-sm ml-2 w-full text-gray-700 dark:text-gray-200" />
             </div>
          </div>
          <div className="flex-1 overflow-y-auto">
            {contacts.map((contact) => (
              <div 
                key={contact.id} 
                onClick={() => handleContactClick(contact.id)}
                className={`p-4 flex gap-3 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors ${activeChat === contact.id ? 'bg-brand-50 dark:bg-brand-900/10 border-r-2 border-brand-500' : ''}`}
              >
                <div className="relative">
                  <img src={`https://i.pravatar.cc/150?img=${contact.img}`} alt={contact.name} className="w-10 h-10 rounded-full bg-gray-200" />
                  {contact.online && <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-white dark:border-gray-800 rounded-full"></span>}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-baseline mb-1">
                    <h4 className={`text-sm font-bold ${activeChat === contact.id ? 'text-brand-700 dark:text-brand-400' : 'text-gray-900 dark:text-white'}`}>{contact.name}</h4>
                    <span className="text-[10px] text-gray-400">{contact.time}</span>
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 truncate">{contact.lastMsg}</p>
                </div>
              </div>
            ))}
          </div>
       </div>

       {/* Chat Window */}
       <div className={`flex-1 flex-col bg-gray-50/50 dark:bg-gray-900/50 ${showMobileChat ? 'flex' : 'hidden md:flex'}`}>
          <div className="p-4 border-b border-gray-100 dark:border-gray-700 flex justify-between items-center bg-white dark:bg-gray-800">
            <div className="flex items-center gap-3">
               <button onClick={() => setShowMobileChat(false)} className="md:hidden p-2 -ml-2 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                 <ArrowLeft size={20} />
               </button>
               <img src={`https://i.pravatar.cc/150?img=${contacts[activeChat].img}`} alt="" className="w-10 h-10 rounded-full" />
               <div>
                 <h3 className="font-bold text-gray-900 dark:text-white">{contacts[activeChat].name}</h3>
                 <span className="text-xs text-brand-600 dark:text-brand-400 font-medium">{contacts[activeChat].role}</span>
               </div>
            </div>
            <button className={iconButtonStyle}><MoreVertical size={18} /></button>
          </div>

          <div className="flex-1 p-6 overflow-y-auto space-y-4">
             <div className="flex justify-center"><span className="text-[10px] text-gray-400 uppercase tracking-widest">Today</span></div>
             <div className="flex gap-3">
                <img src={`https://i.pravatar.cc/150?img=${contacts[activeChat].img}`} alt="" className="w-8 h-8 rounded-full self-end" />
                <div className="bg-white dark:bg-gray-800 p-3 rounded-2xl rounded-bl-none shadow-sm max-w-sm text-sm text-gray-700 dark:text-gray-200">
                  Hello Jane! How is the API integration project coming along?
                </div>
             </div>
             <div className="flex gap-3 flex-row-reverse">
                <img src={myAvatarUrl} alt="Me" className="w-8 h-8 rounded-full self-end object-cover" />
                <div className="bg-brand-600 text-white p-3 rounded-2xl rounded-br-none shadow-md max-w-sm text-sm">
                  Hi Kevin! Making good progress. Just stuck on the STK push callback handling.
                </div>
             </div>
             <div className="flex gap-3">
                <img src={`https://i.pravatar.cc/150?img=${contacts[activeChat].img}`} alt="" className="w-8 h-8 rounded-full self-end" />
                <div className="bg-white dark:bg-gray-800 p-3 rounded-2xl rounded-bl-none shadow-sm max-w-sm text-sm text-gray-700 dark:text-gray-200">
                  {contacts[activeChat].lastMsg}
                </div>
             </div>
          </div>

          <div className="p-4 bg-white dark:bg-gray-800 border-t border-gray-100 dark:border-gray-700">
             <div className="flex gap-2">
               <button className="p-3 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-xl transition-colors"><Paperclip size={20} /></button>
               <div className="flex-1 bg-gray-100 dark:bg-gray-900 rounded-xl flex items-center px-4">
                 <input type="text" placeholder="Type a message..." className="bg-transparent border-none outline-none w-full text-sm text-gray-900 dark:text-white" />
               </div>
               <button className="p-3 bg-brand-600 text-white rounded-xl shadow-lg shadow-brand-500/30 hover:bg-brand-700 transition-colors"><Send size={20} /></button>
             </div>
          </div>
       </div>
    </div>
  );
};

const NotificationsView = ({ showToast }: { showToast: (msg: string) => void }) => {
  const [selectedNotification, setSelectedNotification] = useState<any>(null);
  const [isMarkingRead, setIsMarkingRead] = useState(false);
  
  const notifications = [
    { id: 1, title: "Assignment Graded", msg: "Your submission for 'React Hooks' has been graded. Score: 95%", details: "Excellent work on the custom hooks implementation. Your code structure is clean and reusable.", time: "2h ago", type: "success", read: false },
    { id: 2, title: "Live Class Starting", msg: "Weekly Design Review starts in 30 minutes.", details: "Join us for a critique session of this week's UI challenges. Have your Figma links ready.", time: "30m ago", type: "info", read: false },
    { id: 3, title: "New Course Available", msg: "Advanced Python for Finance is now live!", details: "Master algorithmic trading with our new comprehensive Python course.", time: "1d ago", type: "promo", read: true },
    { id: 4, title: "Subscription Renewed", msg: "Your monthly subscription was successfully renewed.", details: "Receipt #INV-2025-001 available in settings.", time: "2d ago", type: "system", read: true },
  ];

  const getIcon = (type: string) => {
    switch(type) {
      case 'success': return <CheckCircle size={20} className="text-green-500" />;
      case 'info': return <Video size={20} className="text-blue-500" />;
      case 'promo': return <Zap size={20} className="text-yellow-500" />;
      default: return <Bell size={20} className="text-gray-500" />;
    }
  };

  const handleMarkAsRead = () => {
    setIsMarkingRead(true);
    setTimeout(() => {
      setIsMarkingRead(false);
      setSelectedNotification(null);
      showToast("Notification marked as read");
    }, 1000);
  };

  return (
    <div className="max-w-3xl mx-auto animate-fade-in-up">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Notifications</h1>
        <button className="text-sm font-bold text-brand-600 dark:text-brand-400 hover:underline">Mark all as read</button>
      </div>

      <div className="space-y-4">
        {notifications.map((item) => (
          <div 
            key={item.id} 
            onClick={() => setSelectedNotification(item)}
            className={`${cardStyle} p-4 md:p-6 flex gap-4 ${!item.read ? 'border-l-4 border-l-brand-500' : ''} cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800/80 transition-colors`}
          >
             <div className="w-12 h-12 rounded-full bg-gray-50 dark:bg-gray-900 shadow-inner flex items-center justify-center shrink-0">
               {getIcon(item.type)}
             </div>
             <div className="flex-1">
               <div className="flex justify-between items-start">
                 <h4 className={`text-base font-bold ${!item.read ? 'text-gray-900 dark:text-white' : 'text-gray-600 dark:text-gray-400'}`}>{item.title}</h4>
                 <span className="text-xs text-gray-400">{item.time}</span>
               </div>
               <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{item.msg}</p>
             </div>
             <button className="text-gray-300 hover:text-red-500 transition-colors self-start" onClick={(e) => { e.stopPropagation(); /* delete logic */ }}>
               <X size={16} />
             </button>
          </div>
        ))}
      </div>

      {/* Notification Detail Modal */}
      {selectedNotification && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setSelectedNotification(null)}></div>
          <div className="relative bg-white dark:bg-gray-900 w-full max-w-md rounded-2xl shadow-2xl p-6 animate-scale-up">
             <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center shrink-0">
                  {getIcon(selectedNotification.type)}
                </div>
                <div>
                   <h3 className="text-xl font-bold text-gray-900 dark:text-white">{selectedNotification.title}</h3>
                   <p className="text-xs text-gray-500">{selectedNotification.time}</p>
                </div>
             </div>
             <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-xl text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-6">
               <p className="font-bold mb-2">{selectedNotification.msg}</p>
               <p>{selectedNotification.details}</p>
             </div>
             
             <div className="flex gap-3">
               <button onClick={() => setSelectedNotification(null)} className="flex-1 py-3 rounded-xl font-bold text-gray-500 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">Close</button>
               {!selectedNotification.read && (
                 <button 
                   onClick={handleMarkAsRead}
                   disabled={isMarkingRead}
                   className="flex-1 py-3 rounded-xl font-bold text-white bg-brand-600 hover:bg-brand-700 transition-colors shadow-lg flex items-center justify-center gap-2"
                 >
                   {isMarkingRead ? (
                     <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        <span>Processing...</span>
                     </>
                   ) : "Mark as Read"}
                 </button>
               )}
             </div>
          </div>
        </div>
      )}
    </div>
  );
};

const ProfileView = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: "Jane Doe",
    email: "jane.doe@student.elimutech.ke",
    phone: "+254 712 345 678",
    interests: ["Web Development", "UI/UX Design"],
    education: "Undergraduate",
    bio: "Passionate learner aiming to become a full-stack developer in Nairobi's tech ecosystem.",
    location: "Nairobi, Kenya"
  });

  const availableInterests = [
    "Web Development", "Data Science", "Mobile Development",
    "UI/UX Design", "Digital Marketing", "Cybersecurity",
    "Cloud Computing", "Finance & Fintech"
  ];

  const educationOptions = [
    "High School", "Undergraduate", "Postgraduate", 
    "Bootcamp", "Self-Taught", "Other"
  ];

  const toggleInterest = (interest: string) => {
    if (formData.interests.includes(interest)) {
      setFormData({ ...formData, interests: formData.interests.filter(i => i !== interest) });
    } else {
      setFormData({ ...formData, interests: [...formData.interests, interest] });
    }
  };

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="max-w-4xl mx-auto animate-fade-in-up">
       <div className="flex justify-between items-center mb-8">
         <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">My Profile</h1>
         <button 
           onClick={() => setIsEditing(!isEditing)}
           className={`flex items-center gap-2 px-5 py-2 rounded-xl font-bold text-sm transition-all ${isEditing ? 'bg-red-50 text-red-600 border border-red-200' : 'bg-brand-600 text-white shadow-lg shadow-brand-500/30'}`}
         >
           {isEditing ? <><X size={16} /> Cancel</> : <><Edit3 size={16} /> Edit Profile</>}
         </button>
       </div>

       <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Sidebar Info */}
          <div className={`${cardStyle} p-6 flex flex-col items-center text-center h-fit`}>
             <div className="relative mb-6">
               <div className="w-32 h-32 rounded-full p-1 bg-white dark:bg-gray-700 shadow-[inset_4px_4px_8px_rgba(0,0,0,0.1)]">
                 <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80" alt="Profile" className="w-full h-full rounded-full object-cover" />
               </div>
               {isEditing && (
                 <button className="absolute bottom-0 right-0 p-2 bg-brand-600 text-white rounded-full shadow-lg hover:scale-110 transition-transform">
                   <Camera size={16} />
                 </button>
               )}
             </div>
             
             <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{formData.name}</h2>
             <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">{formData.education} Student</p>

             <div className="w-full space-y-4 text-left">
               <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-300">
                 <Mail size={16} className="text-brand-500" /> <span className="truncate">{formData.email}</span>
               </div>
               <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-300">
                 <Smartphone size={16} className="text-brand-500" /> {formData.phone}
               </div>
               <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-300">
                 <MapPin size={16} className="text-brand-500" /> {formData.location}
               </div>
             </div>
          </div>

          {/* Form */}
          <div className={`${cardStyle} p-6 md:p-8 md:col-span-2`}>
             <form className="space-y-6">
                <div className="space-y-2">
                   <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Full Name</label>
                   <input 
                     name="name"
                     disabled={!isEditing}
                     value={formData.name}
                     onChange={handleChange}
                     className={`w-full p-3 rounded-xl border ${isEditing ? 'bg-white dark:bg-gray-800 border-brand-500 ring-2 ring-brand-500/20' : 'bg-gray-50 dark:bg-gray-900 border-transparent'} outline-none transition-all text-gray-900 dark:text-white`}
                   />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   <div className="space-y-2">
                     <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Email</label>
                     <input 
                       name="email"
                       disabled={!isEditing}
                       value={formData.email}
                       onChange={handleChange}
                       className={`w-full p-3 rounded-xl border ${isEditing ? 'bg-white dark:bg-gray-800 border-brand-500 ring-2 ring-brand-500/20' : 'bg-gray-50 dark:bg-gray-900 border-transparent'} outline-none transition-all text-gray-900 dark:text-white`}
                     />
                   </div>
                   <div className="space-y-2">
                     <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Mobile</label>
                     <input 
                       name="phone"
                       disabled={!isEditing}
                       value={formData.phone}
                       onChange={handleChange}
                       className={`w-full p-3 rounded-xl border ${isEditing ? 'bg-white dark:bg-gray-800 border-brand-500 ring-2 ring-brand-500/20' : 'bg-gray-50 dark:bg-gray-900 border-transparent'} outline-none transition-all text-gray-900 dark:text-white`}
                     />
                   </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   <div className="space-y-2">
                     <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Location</label>
                     <input 
                       name="location"
                       disabled={!isEditing}
                       value={formData.location}
                       onChange={handleChange}
                       className={`w-full p-3 rounded-xl border ${isEditing ? 'bg-white dark:bg-gray-800 border-brand-500 ring-2 ring-brand-500/20' : 'bg-gray-50 dark:bg-gray-900 border-transparent'} outline-none transition-all text-gray-900 dark:text-white`}
                     />
                   </div>
                   <div className="space-y-2">
                     <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Education Level</label>
                     {isEditing ? (
                       <div className="relative">
                        <select
                           name="education"
                           value={formData.education}
                           onChange={handleChange}
                           className="w-full p-3 rounded-xl border bg-white dark:bg-gray-800 border-brand-500 ring-2 ring-brand-500/20 outline-none transition-all text-gray-900 dark:text-white appearance-none"
                         >
                           {educationOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                         </select>
                       </div>
                     ) : (
                       <input 
                         disabled
                         value={formData.education}
                         className="w-full p-3 rounded-xl border bg-gray-50 dark:bg-gray-900 border-transparent outline-none transition-all text-gray-900 dark:text-white"
                       />
                     )}
                   </div>
                </div>

                <div className="space-y-2">
                   <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Primary Interests</label>
                   {isEditing ? (
                     <div className="flex flex-wrap gap-2">
                       {availableInterests.map(interest => (
                         <button
                           key={interest}
                           type="button"
                           onClick={() => toggleInterest(interest)}
                           className={`px-3 py-1.5 rounded-lg text-xs font-bold border transition-all ${
                             formData.interests.includes(interest)
                               ? 'bg-brand-600 text-white border-brand-600'
                               : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 border-gray-200 dark:border-gray-700 hover:border-brand-500'
                           }`}
                         >
                           {interest}
                         </button>
                       ))}
                     </div>
                   ) : (
                     <div className="flex flex-wrap gap-2">
                       {formData.interests.map(interest => (
                         <span key={interest} className="px-3 py-1 rounded-full bg-brand-100 dark:bg-brand-900/30 text-brand-700 dark:text-brand-300 text-xs font-bold">
                           {interest}
                         </span>
                       ))}
                     </div>
                   )}
                </div>

                <div className="space-y-2">
                   <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Bio</label>
                   <textarea 
                     name="bio"
                     rows={4}
                     disabled={!isEditing}
                     value={formData.bio}
                     onChange={handleChange}
                     className={`w-full p-3 rounded-xl border ${isEditing ? 'bg-white dark:bg-gray-800 border-brand-500 ring-2 ring-brand-500/20' : 'bg-gray-50 dark:bg-gray-900 border-transparent'} outline-none transition-all text-gray-900 dark:text-white resize-none`}
                   />
                </div>

                {isEditing && (
                  <div className="pt-4 flex justify-end">
                    <button type="button" onClick={() => setIsEditing(false)} className="px-8 py-3 bg-brand-600 text-white font-bold rounded-xl shadow-lg hover:bg-brand-700 transition-colors flex items-center gap-2">
                       <Save size={18} /> Save Changes
                    </button>
                  </div>
                )}
             </form>
          </div>
       </div>
    </div>
  );
};

// Helper component for Password Visibility Toggle
const PasswordInputWithToggle = ({ placeholder }: { placeholder: string }) => {
  const [show, setShow] = useState(false);
  return (
    <div className="relative">
      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
      <input 
        type={show ? "text" : "password"} 
        className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl py-2.5 pl-10 pr-10 text-sm outline-none focus:ring-2 focus:ring-brand-500 transition-all text-gray-900 dark:text-white" 
        placeholder={placeholder} 
      />
      <button 
        type="button"
        onClick={() => setShow(!show)}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-brand-500 transition-colors"
      >
        {show ? <EyeOff size={16} /> : <Eye size={16} />}
      </button>
    </div>
  );
};

const SettingsView = ({ showToast }: { showToast: (msg: string) => void }) => {
  const { theme, setTheme } = useTheme();
  const [showPasswordModal, setShowPasswordModal] = useState(false);

  const handleSaveSettings = () => {
    showToast("Settings saved successfully");
  };

  return (
    <div className="max-w-3xl mx-auto animate-fade-in-up">
       <div className="flex justify-between items-center mb-8">
         <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Settings</h1>
         <button onClick={handleSaveSettings} className="hidden md:block text-brand-600 font-bold hover:underline text-sm">Save Changes</button>
       </div>

       <div className="space-y-8">
          {/* Appearance */}
          <div className={`${cardStyle} p-6`}>
             <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
               <Moon size={20} className="text-brand-500" /> Appearance
             </h3>
             <div className="flex items-center justify-between">
               <span className="text-gray-600 dark:text-gray-300 font-medium">Dark Mode</span>
               <button 
                 onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                 className={`w-14 h-8 rounded-full p-1 transition-colors duration-300 ${theme === 'dark' ? 'bg-brand-500' : 'bg-gray-200'}`}
               >
                 <div className={`w-6 h-6 rounded-full bg-white shadow-md transform transition-transform duration-300 ${theme === 'dark' ? 'translate-x-6' : ''}`}></div>
               </button>
             </div>
          </div>

          {/* Notifications */}
          <div className={`${cardStyle} p-6`}>
             <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
               <Bell size={20} className="text-brand-500" /> Notifications
             </h3>
             <div className="space-y-6">
                {["Email Notifications", "SMS Alerts (M-PESA)", "Course Updates", "Marketing Emails"].map((item, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <span className="text-gray-600 dark:text-gray-300">{item}</span>
                    <input type="checkbox" defaultChecked className="w-5 h-5 rounded text-brand-600 focus:ring-brand-500 border-gray-300" />
                  </div>
                ))}
             </div>
          </div>

          {/* Account Security */}
          <div className={`${cardStyle} p-6`}>
             <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
               <Shield size={20} className="text-brand-500" /> Security
             </h3>
             <div className="space-y-4">
               <div className="flex justify-between items-center p-4 bg-gray-50 dark:bg-gray-900 rounded-xl">
                 <div>
                   <p className="font-bold text-gray-900 dark:text-white">Password</p>
                   <p className="text-xs text-gray-500">Last changed 3 months ago</p>
                 </div>
                 <button onClick={() => setShowPasswordModal(true)} className="text-sm font-bold text-brand-600 dark:text-brand-400 border border-gray-200 dark:border-gray-700 px-4 py-2 rounded-lg hover:bg-white dark:hover:bg-gray-800 transition-colors">Update</button>
               </div>
               
               <div className="pt-4 border-t border-gray-100 dark:border-gray-700">
                  <button className="flex items-center gap-2 text-red-500 font-bold text-sm hover:text-red-600 transition-colors">
                    <Trash2 size={16} /> Delete Account
                  </button>
               </div>
             </div>
          </div>
       </div>

      {/* Password Reset Modal */}
       {showPasswordModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setShowPasswordModal(false)}></div>
          <div className="relative bg-white dark:bg-gray-900 w-full max-w-md rounded-2xl shadow-2xl overflow-hidden animate-scale-up p-6">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Change Password</h3>
            <form onSubmit={(e) => { e.preventDefault(); setShowPasswordModal(false); showToast("Password updated successfully"); }}>
              <div className="space-y-4">
                <div className="space-y-2">
                   <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Current Password</label>
                   <PasswordInputWithToggle placeholder="••••••••" />
                </div>
                <div className="space-y-2">
                   <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">New Password</label>
                   <PasswordInputWithToggle placeholder="••••••••" />
                </div>
                <div className="space-y-2">
                   <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Confirm New Password</label>
                   <PasswordInputWithToggle placeholder="••••••••" />
                </div>
              </div>
              <div className="flex gap-3 mt-8">
                <button type="button" onClick={() => setShowPasswordModal(false)} className="flex-1 py-3 rounded-xl font-bold text-gray-500 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">Cancel</button>
                <button type="submit" className="flex-1 py-3 rounded-xl font-bold text-white bg-brand-600 hover:bg-brand-700 transition-colors shadow-lg">Update Password</button>
              </div>
            </form>
          </div>
        </div>
       )}
    </div>
  );
};

// --- Main Component ---

const StudentDashboard: React.FC = () => {
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  // Restore tab from location state if present, else default to Dashboard
  const [activeTab, setActiveTab] = useState(location.state?.tab || 'Dashboard');
  
  // States for Modals
  const [jitsiOpen, setJitsiOpen] = useState(false);
  const [activeRoom, setActiveRoom] = useState("");
  const [toastMsg, setToastMsg] = useState("");
  
  // State for Course Details View
  const [selectedCourse, setSelectedCourse] = useState<any>(null);

  const showToast = (msg: string) => {
    setToastMsg(msg);
  };

  const openJitsi = (room: string) => {
    setActiveRoom(room);
    setJitsiOpen(true);
  };

  const handleCourseClick = (course: any) => {
    setSelectedCourse(course);
  };

  // Clear selected course when switching main tabs
  useEffect(() => {
    if (activeTab !== 'Dashboard' && activeTab !== 'My Courses') {
      setSelectedCourse(null);
    }
  }, [activeTab]);

  const menuItems = [
    { name: 'Dashboard', icon: LayoutDashboard },
    { name: 'Analytics', icon: BarChart2 },
    { name: 'My Courses', icon: BookOpen },
    { name: 'Wishlist', icon: Heart },
    { name: 'Live Classes', icon: Video },
    { name: 'Messages', icon: MessageCircle, badge: 3 },
    { name: 'Notifications', icon: Bell, badge: 4 },
    { name: 'Payments', icon: CreditCard },
    { name: 'Profile', icon: User },
    { name: 'Settings', icon: Settings },
  ];

  const renderContent = () => {
    // If a course is selected, show detail view regardless of tab (for Dashboard/MyCourses context)
    if (selectedCourse) {
      return <EnrolledCourseDetailView course={selectedCourse} onBack={() => setSelectedCourse(null)} />;
    }

    switch(activeTab) {
      case 'Analytics': return <AnalyticsView />;
      case 'My Courses': return <MyCoursesView onCourseClick={handleCourseClick} />;
      case 'Wishlist': return <WishlistView />;
      case 'Live Classes': return <LiveClassesView openJitsi={openJitsi} />;
      case 'Messages': return <MessagesView />;
      case 'Notifications': return <NotificationsView showToast={showToast} />;
      case 'Payments': return <PaymentsView />;
      case 'Profile': return <ProfileView />;
      case 'Settings': return <SettingsView showToast={showToast} />;
      default: return <DashboardHome setActiveTab={setActiveTab} openJitsi={openJitsi} onCourseClick={handleCourseClick} />;
    }
  };

  const activeNavItemStyle = "text-brand-600 dark:text-brand-400 shadow-[inset_4px_4px_8px_#d1d5db,inset_-4px_-4px_8px_#ffffff] dark:shadow-[inset_4px_4px_8px_#0b0c15,inset_-4px_-4px_8px_#1e293b] bg-gray-50 dark:bg-gray-900";
  const normalNavItemStyle = "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 hover:shadow-[4px_4px_8px_#d1d5db,-4px_-4px_8px_#ffffff] dark:hover:shadow-[4px_4px_8px_#0b0c15,-4px_-4px_8px_#1e293b]";

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-[72px] transition-colors duration-300">
      <div className="max-w-[1600px] mx-auto flex min-h-[calc(100vh-72px)] relative">
        
        {/* Mobile Sidebar Overlay */}
        {isSidebarOpen && (
          <div 
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30 lg:hidden"
            onClick={() => setIsSidebarOpen(false)}
          ></div>
        )}

        {/* Sidebar */}
        <aside 
          className={`fixed lg:sticky top-[72px] left-0 z-40 h-[calc(100vh-72px)] w-64 bg-gray-50 dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 transform transition-transform duration-300 ease-in-out lg:translate-x-0 overflow-y-auto no-scrollbar py-6 px-4 flex flex-col gap-6 ${
            isSidebarOpen ? 'translate-x-0 bg-gray-100 dark:bg-gray-900 shadow-2xl' : '-translate-x-full'
          }`}
        >
          {/* User Profile Summary */}
          <div className={`flex flex-col items-center text-center p-6 ${cardStyle} cursor-pointer hover:scale-[1.02] transition-transform`} onClick={() => { setActiveTab('Profile'); setIsSidebarOpen(false); }}>
            <div className="relative mb-3">
              <div className="w-20 h-20 rounded-full bg-gray-200 dark:bg-gray-700 p-1 shadow-inner">
                <img 
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80" 
                  alt="Student" 
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <div className="absolute bottom-0 right-0 w-5 h-5 bg-green-500 border-4 border-gray-100 dark:border-gray-800 rounded-full"></div>
            </div>
            <h3 className="font-bold text-gray-900 dark:text-white">Jane Doe</h3>
            <p className="text-xs text-gray-500 dark:text-gray-400">Full Stack Student</p>
          </div>

          {/* Navigation */}
          <nav className="flex-1 space-y-3">
            {menuItems.map((item) => (
              <button
                key={item.name}
                onClick={() => {
                  setActiveTab(item.name);
                  setIsSidebarOpen(false);
                  setSelectedCourse(null); // Reset detail view on nav change
                }}
                className={`w-full flex items-center justify-between p-3.5 rounded-xl text-sm font-bold transition-all duration-200 ${
                  activeTab === item.name && !selectedCourse ? activeNavItemStyle : normalNavItemStyle
                }`}
              >
                <div className="flex items-center gap-3">
                  <item.icon size={18} />
                  <span>{item.name}</span>
                </div>
                {item.badge && (
                  <span className="bg-brand-500 text-white text-[10px] px-2 py-0.5 rounded-full shadow-sm">
                    {item.badge}
                  </span>
                )}
              </button>
            ))}
          </nav>

          {/* Logout */}
          <Link to="/login" className={`w-full flex items-center gap-3 p-3.5 rounded-xl text-sm font-bold text-red-500 ${normalNavItemStyle}`}>
            <LogOut size={18} />
            <span>Log Out</span>
          </Link>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-4 md:p-8 overflow-x-hidden w-full">
          {/* Header Mobile Toggle */}
          <div className="lg:hidden flex items-center justify-between mb-6">
            <h1 className="text-xl font-bold text-gray-900 dark:text-white">{selectedCourse ? 'Course Details' : activeTab}</h1>
            <button 
              onClick={() => setIsSidebarOpen(true)}
              className={iconButtonStyle}
            >
              <Menu size={20} />
            </button>
          </div>
          
          {/* Header Desktop - only Search/Bell */}
          <div className="hidden lg:flex justify-end mb-8">
            <div className="flex items-center gap-4">
               <div className={`hidden md:flex items-center px-4 py-2.5 rounded-xl text-gray-500 dark:text-gray-400 w-64 bg-gray-50 dark:bg-gray-900 shadow-[inset_2px_2px_4px_#d1d5db,inset_-2px_-2px_4px_#ffffff] dark:shadow-[inset_2px_2px_4px_#0b0c15,inset_-2px_-2px_4px_#1e293b]`}>
                 <Search size={18} />
                 <input type="text" placeholder="Search..." className="bg-transparent border-none outline-none ml-2 w-full text-sm" />
               </div>
               <button onClick={() => setActiveTab('Notifications')} className={`${iconButtonStyle} relative`}>
                 <Bell size={20} />
                 <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full"></span>
               </button>
            </div>
          </div>

          {/* Content Area */}
          {renderContent()}

        </main>
      </div>

      {/* Jitsi Meeting Modal */}
      <JitsiModal isOpen={jitsiOpen} onClose={() => setJitsiOpen(false)} roomName={activeRoom} />

      {/* Global Toast */}
      {toastMsg && <Toast message={toastMsg} onClose={() => setToastMsg("")} />}
    </div>
  );
};

export default StudentDashboard;