import React, { useState, useRef, useEffect } from 'react';
import { 
  LayoutDashboard, BookOpen, PlusCircle, Video, PlayCircle, 
  FileText, CheckSquare, Users, MessageCircle, DollarSign, 
  Star, Bell, User, Settings, LogOut, Search, Menu, 
  TrendingUp, CreditCard, ChevronRight, Upload, X, 
  Save, Edit3, Trash2, Calendar, Lock, Image as ImageIcon,
  MoreVertical, Download, ExternalLink, AlertTriangle, CheckCircle, BarChart2,
  Youtube, Link as LinkIcon, File, Eye, Filter, Clock, Tag, RefreshCw, Send, Paperclip, Ban, Flag,
  Shield, Moon, Smartphone, Mail, Globe, MapPin, EyeOff
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

// --- Shared Styles (Neumorphic) ---
const cardStyle = "bg-white dark:bg-gray-800 rounded-2xl shadow-[6px_6px_12px_#e5e7eb,-6px_-6px_12px_#ffffff] dark:shadow-[6px_6px_12px_#0b0c15,-6px_-6px_12px_#1e293b] transition-colors duration-300 border border-gray-100 dark:border-gray-700";
const innerCardStyle = "bg-gray-50 dark:bg-gray-900 rounded-xl shadow-[inset_4px_4px_8px_#d1d5db,inset_-4px_-4px_8px_#ffffff] dark:shadow-[inset_4px_4px_8px_#0b0c15,inset_-4px_-4px_8px_#1e293b]";
const btnPrimary = "px-6 py-3 rounded-xl bg-brand-600 text-white font-bold text-sm shadow-[4px_4px_10px_rgba(243,111,33,0.3)] hover:bg-brand-700 active:shadow-none hover:-translate-y-0.5 transition-all";
const btnSecondary = "px-6 py-3 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-bold text-sm shadow-[4px_4px_8px_#d1d5db,-4px_-4px_8px_#ffffff] dark:shadow-[4px_4px_8px_#0b0c15,-4px_-4px_8px_#1e293b] hover:bg-gray-200 dark:hover:bg-gray-700 active:shadow-[inset_2px_2px_4px_#bebebe,inset_-2px_-2px_4px_#ffffff] dark:active:shadow-[inset_2px_2px_4px_#0b0c15,inset_-2px_-2px_4px_#333333] transition-all";
const inputStyle = "w-full bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-brand-500 transition-all text-gray-900 dark:text-white";

// --- Mock Data ---
const initialCourses = [
  { id: 1, title: "Advanced React Patterns", students: 124, price: 6000, status: "Published", rating: 4.8, image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=200&q=80" },
  { id: 2, title: "Python for Data Science", students: 85, price: 8000, status: "Draft", rating: 0, image: "https://images.unsplash.com/photo-1586771107445-d3ca888129ff?auto=format&fit=crop&w=200&q=80" },
  { id: 3, title: "UI/UX Principles", students: 210, price: 5000, status: "Published", rating: 4.9, image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=200&q=80" },
];

const initialStudents = [
  { id: 1, name: "Jane Doe", course: "Advanced React Patterns", progress: 65, grade: "A" },
  { id: 2, name: "John Smith", course: "UI/UX Principles", progress: 90, grade: "A+" },
  { id: 3, name: "Alice Johnson", course: "Advanced React Patterns", progress: 15, grade: "-" },
  { id: 4, name: "Robert Mugo", course: "Python for Data Science", progress: 45, grade: "B" },
  { id: 5, name: "Sarah Hassan", course: "UI/UX Principles", progress: 100, grade: "A" },
];

// --- Sub-Components ---

const Toast = ({ message, onClose }: { message: string, onClose: () => void }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-6 py-3 rounded-full shadow-2xl z-[60] flex items-center gap-3 animate-fade-in-up">
      <CheckCircle size={18} className="text-green-500" />
      <span className="font-bold text-sm">{message}</span>
    </div>
  );
};

const PasswordInputWithToggle = ({ placeholder }: { placeholder: string }) => {
  const [show, setShow] = useState(false);
  return (
    <div className="relative">
      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
      <input 
        type={show ? "text" : "password"} 
        className={inputStyle + " pl-10 pr-10"} 
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

const DeleteAccountModal = ({ isOpen, onClose, onConfirm }: { isOpen: boolean, onClose: () => void, onConfirm: () => void }) => {
  const [confirmText, setConfirmText] = useState("");
  
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose}></div>
      <div className="relative bg-white dark:bg-gray-900 w-full max-w-md rounded-2xl shadow-2xl p-6 animate-scale-up border-2 border-red-100 dark:border-red-900/30">
        <div className="flex flex-col items-center text-center mb-6">
          <div className="w-16 h-16 bg-red-100 dark:bg-red-900/20 text-red-600 rounded-full flex items-center justify-center mb-4">
            <AlertTriangle size={32} />
          </div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Delete Account?</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            This action is permanent. All your courses, student data, and earnings history will be permanently deleted.
          </p>
        </div>

        <div className="space-y-4">
          <label className="text-xs font-bold text-gray-500 uppercase tracking-wider block">
            Type "DELETE" to confirm
          </label>
          <input 
            type="text" 
            value={confirmText}
            onChange={(e) => setConfirmText(e.target.value)}
            className="w-full p-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-center font-bold tracking-widest outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all text-gray-900 dark:text-white"
            placeholder="DELETE"
          />
          
          <div className="flex gap-3 pt-2">
            <button onClick={onClose} className="flex-1 py-3 rounded-xl font-bold text-gray-500 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
              Cancel
            </button>
            <button 
              onClick={onConfirm}
              disabled={confirmText !== "DELETE"}
              className="flex-1 py-3 rounded-xl font-bold text-white bg-red-600 hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-lg shadow-red-500/20"
            >
              Confirm Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const StatCard = ({ title, value, icon: Icon, color, trend }: any) => (
  <div className={`${cardStyle} p-6 flex items-center justify-between`}>
    <div>
      <p className="text-gray-500 dark:text-gray-400 text-xs font-bold uppercase tracking-wider mb-1">{title}</p>
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{value}</h3>
      {trend && <p className="text-green-500 text-xs font-bold mt-1 flex items-center gap-1"><TrendingUp size={12} /> {trend}</p>}
    </div>
    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${color} shadow-inner`}>
      <Icon size={24} className="text-white" />
    </div>
  </div>
);

// Types for the Course Builder
interface Resource {
  title: string;
  type: 'video' | 'pdf' | 'link' | 'file';
  duration?: string; // e.g. "12:30"
  size?: string; // e.g. "1.2 MB"
  url?: string;
}

interface Module {
  id: number;
  title: string;
  description: string; // "In this module we cover..."
  resources: Resource[];
}

const CreateDiscountModal = ({ isOpen, onClose, onCreate }: { isOpen: boolean, onClose: () => void, onCreate: (discount: any) => void }) => {
  const [code, setCode] = useState("");
  const [courseId, setCourseId] = useState("all");
  const [percentage, setPercentage] = useState("10");
  const [limit, setLimit] = useState("");
  const [expiry, setExpiry] = useState("");

  if (!isOpen) return null;

  const generateCode = () => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let result = "";
    for (let i = 0; i < 8; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setCode(result);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onCreate({
      id: Date.now(),
      code: code.toUpperCase(),
      course: courseId === "all" ? "All Courses" : initialCourses.find(c => c.id.toString() === courseId)?.title,
      value: parseInt(percentage),
      used: 0,
      max: limit ? parseInt(limit) : Infinity,
      expires: expiry,
      status: "Active"
    });
    onClose();
    // Reset form
    setCode("");
    setCourseId("all");
    setPercentage("10");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose}></div>
      <div className="relative bg-white dark:bg-gray-900 w-full max-w-md rounded-2xl shadow-2xl p-6 animate-scale-up">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">Create Discount</h3>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full text-gray-500">
            <X size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
           <div>
             <label className="text-xs font-bold text-gray-500 uppercase mb-2 block">Discount Code</label>
             <div className="flex gap-2">
               <input 
                 value={code}
                 onChange={(e) => setCode(e.target.value.toUpperCase())}
                 className={inputStyle}
                 placeholder="e.g. SUMMER2025"
                 required
               />
               <button 
                 type="button" 
                 onClick={generateCode}
                 className="p-3 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-xl text-gray-600 dark:text-gray-300 transition-colors"
                 title="Generate Random Code"
               >
                 <RefreshCw size={20} />
               </button>
             </div>
           </div>

           <div>
             <label className="text-xs font-bold text-gray-500 uppercase mb-2 block">Apply To Course</label>
             <select 
               value={courseId}
               onChange={(e) => setCourseId(e.target.value)}
               className={inputStyle}
             >
               <option value="all">All Courses</option>
               {initialCourses.map(c => (
                 <option key={c.id} value={c.id}>{c.title}</option>
               ))}
             </select>
           </div>

           <div className="grid grid-cols-2 gap-4">
             <div>
               <label className="text-xs font-bold text-gray-500 uppercase mb-2 block">Percentage Off (%)</label>
               <input 
                 type="number"
                 min="1"
                 max="100"
                 value={percentage}
                 onChange={(e) => setPercentage(e.target.value)}
                 className={inputStyle}
                 required
               />
             </div>
             <div>
               <label className="text-xs font-bold text-gray-500 uppercase mb-2 block">Usage Limit (Optional)</label>
               <input 
                 type="number"
                 min="1"
                 value={limit}
                 onChange={(e) => setLimit(e.target.value)}
                 className={inputStyle}
                 placeholder="Unlimited"
               />
             </div>
           </div>

           <div>
             <label className="text-xs font-bold text-gray-500 uppercase mb-2 block">Expiry Date</label>
             <input 
               type="date"
               value={expiry}
               onChange={(e) => setExpiry(e.target.value)}
               className={inputStyle}
               required
             />
           </div>

           <div className="pt-4">
             <button type="submit" className={btnPrimary + " w-full flex justify-center items-center gap-2"}>
               <Tag size={18} /> Create Discount
             </button>
           </div>
        </form>
      </div>
    </div>
  );
};

const DiscountManager = () => {
  const [discounts, setDiscounts] = useState([
    { id: 1, code: "WELCOME20", course: "All Courses", value: 20, used: 45, max: 100, expires: "2025-12-31", status: "Active" },
    { id: 2, code: "REACT50", course: "Advanced React Patterns", value: 50, used: 12, max: 20, expires: "2025-06-30", status: "Active" },
    { id: 3, code: "EARLYBIRD", course: "Python for Data Science", value: 15, used: 50, max: 50, expires: "2024-12-31", status: "Expired" },
  ]);
  const [showCreateModal, setShowCreateModal] = useState(false);

  const handleCreate = (newDiscount: any) => {
    setDiscounts([newDiscount, ...discounts]);
  };

  const deleteDiscount = (id: number) => {
    if (confirm("Are you sure you want to delete this discount?")) {
      setDiscounts(discounts.filter(d => d.id !== id));
    }
  };

  return (
    <div className="animate-fade-in-up">
      <div className="flex flex-col md:flex-row justify-between items-end gap-4 mb-6">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-1">Discount Management</h1>
          <p className="text-gray-500 dark:text-gray-400">Boost sales by creating promotional codes for your courses.</p>
        </div>
        <button onClick={() => setShowCreateModal(true)} className={btnPrimary + " flex items-center gap-2"}>
          <PlusCircle size={18} /> Create New Discount
        </button>
      </div>

      <div className={`${cardStyle} overflow-hidden`}>
         <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-gray-600 dark:text-gray-300">
               <thead className="bg-gray-50 dark:bg-gray-900/50 text-xs uppercase font-bold text-gray-500">
                 <tr>
                   <th className="px-6 py-4">Code</th>
                   <th className="px-6 py-4">Target Course</th>
                   <th className="px-6 py-4">Discount</th>
                   <th className="px-6 py-4">Usage</th>
                   <th className="px-6 py-4">Status</th>
                   <th className="px-6 py-4">Expires</th>
                   <th className="px-6 py-4 text-right">Actions</th>
                 </tr>
               </thead>
               <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                 {discounts.map((discount) => (
                   <tr key={discount.id} className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                     <td className="px-6 py-4">
                       <span className="font-mono font-bold text-brand-600 bg-brand-50 dark:bg-brand-900/20 px-2 py-1 rounded-md border border-brand-200 dark:border-brand-900/50">
                         {discount.code}
                       </span>
                     </td>
                     <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">{discount.course}</td>
                     <td className="px-6 py-4 text-green-600 font-bold">{discount.value}% OFF</td>
                     <td className="px-6 py-4">
                       <div className="flex items-center gap-2">
                         <div className="w-20 h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                           <div 
                             className="h-full bg-blue-500 rounded-full" 
                             style={{ width: `${(discount.used / (discount.max === Infinity ? discount.used * 1.5 : discount.max)) * 100}%` }}
                           ></div>
                         </div>
                         <span className="text-xs">{discount.used} / {discount.max === Infinity ? '∞' : discount.max}</span>
                       </div>
                     </td>
                     <td className="px-6 py-4">
                       <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold ${discount.status === 'Active' ? 'bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-500' : 'bg-gray-100 dark:bg-gray-800 text-gray-500'}`}>
                         {discount.status}
                       </span>
                     </td>
                     <td className="px-6 py-4 text-xs">{new Date(discount.expires).toLocaleDateString()}</td>
                     <td className="px-6 py-4 text-right">
                       <button 
                         onClick={() => deleteDiscount(discount.id)}
                         className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/10 rounded-lg transition-colors"
                       >
                         <Trash2 size={16} />
                       </button>
                     </td>
                   </tr>
                 ))}
                 {discounts.length === 0 && (
                   <tr>
                     <td colSpan={7} className="px-6 py-12 text-center text-gray-400">
                       No discounts created yet.
                     </td>
                   </tr>
                 )}
               </tbody>
            </table>
         </div>
      </div>

      <CreateDiscountModal 
        isOpen={showCreateModal}
        onClose={() => setShowCreateModal(false)}
        onCreate={handleCreate}
      />
    </div>
  );
};

const InstructorProfileView = ({ showToast }: { showToast: (msg: string) => void }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: "Kevin Omondi",
    email: "kevin.omondi@elimutech.ke",
    phone: "+254 712 345 678",
    expertise: "Development",
    experience: "8",
    portfolio: "https://kevinomondi.dev",
    bio: "Senior Software Engineer with a passion for teaching. Specialized in React, Node.js, and Cloud Infrastructure.",
    image: "https://i.pravatar.cc/150?u=Kevin"
  });

  const expertiseOptions = ["Development", "Design", "Business", "Marketing", "Data Science", "Cybersecurity", "Finance"];

  const handleSave = () => {
    setIsEditing(false);
    showToast("Profile updated successfully!");
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const url = URL.createObjectURL(e.target.files[0]);
      setFormData({ ...formData, image: url });
      showToast("Profile picture updated!");
    }
  };

  return (
    <div className="max-w-4xl mx-auto animate-fade-in-up">
       <div className="flex justify-between items-center mb-8">
         <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Instructor Profile</h1>
         <button 
           onClick={() => isEditing ? handleSave() : setIsEditing(true)}
           className={`flex items-center gap-2 px-5 py-2 rounded-xl font-bold text-sm transition-all ${isEditing ? 'bg-green-600 text-white shadow-lg' : 'bg-brand-600 text-white shadow-lg'}`}
         >
           {isEditing ? <><Save size={16} /> Save Changes</> : <><Edit3 size={16} /> Edit Profile</>}
         </button>
       </div>

       <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className={`${cardStyle} p-6 flex flex-col items-center text-center h-fit`}>
             <div className="relative mb-6 group">
               <div className="w-32 h-32 rounded-full p-1 bg-white dark:bg-gray-700 shadow-[inset_4px_4px_8px_rgba(0,0,0,0.1)] overflow-hidden">
                 <img src={formData.image} alt="Profile" className="w-full h-full rounded-full object-cover" />
               </div>
               {isEditing && (
                 <label className="absolute bottom-0 right-0 p-2 bg-brand-600 text-white rounded-full shadow-lg hover:scale-110 transition-transform cursor-pointer">
                   <ImageIcon size={16} />
                   <input type="file" className="hidden" accept="image/*" onChange={handleImageChange} />
                 </label>
               )}
             </div>
             
             <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{formData.name}</h2>
             <p className="text-sm text-brand-600 dark:text-brand-400 font-bold mb-6">{formData.expertise} Instructor</p>
             
             <div className="w-full space-y-4 text-left">
               <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-300">
                 <Mail size={16} className="text-brand-500" /> <span className="truncate">{formData.email}</span>
               </div>
               <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-300">
                 <Smartphone size={16} className="text-brand-500" /> {formData.phone}
               </div>
               <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-300">
                 <Globe size={16} className="text-brand-500" /> 
                 <a href={formData.portfolio} target="_blank" rel="noreferrer" className="truncate hover:underline text-blue-500">{formData.portfolio}</a>
               </div>
               <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-300">
                 <Clock size={16} className="text-brand-500" /> {formData.experience} Years Exp.
               </div>
             </div>
          </div>

          <div className={`${cardStyle} p-6 md:p-8 md:col-span-2`}>
             <form className="space-y-6">
                <div className="space-y-2">
                   <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Full Name</label>
                   <input 
                     disabled={!isEditing}
                     value={formData.name}
                     onChange={(e) => setFormData({...formData, name: e.target.value})}
                     className={inputStyle}
                   />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   <div className="space-y-2">
                     <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Email</label>
                     <input 
                       disabled={!isEditing}
                       value={formData.email}
                       onChange={(e) => setFormData({...formData, email: e.target.value})}
                       className={inputStyle}
                     />
                   </div>
                   <div className="space-y-2">
                     <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Mobile Number</label>
                     <input 
                       disabled={!isEditing}
                       value={formData.phone}
                       onChange={(e) => setFormData({...formData, phone: e.target.value})}
                       className={inputStyle}
                     />
                   </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   <div className="space-y-2">
                     <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Area of Expertise</label>
                     <div className="relative">
                       <select
                         disabled={!isEditing}
                         value={formData.expertise}
                         onChange={(e) => setFormData({...formData, expertise: e.target.value})}
                         className={inputStyle}
                       >
                         {expertiseOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                       </select>
                     </div>
                   </div>
                   <div className="space-y-2">
                     <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Years of Experience</label>
                     <input 
                       type="number"
                       disabled={!isEditing}
                       value={formData.experience}
                       onChange={(e) => setFormData({...formData, experience: e.target.value})}
                       className={inputStyle}
                     />
                   </div>
                </div>

                <div className="space-y-2">
                   <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Portfolio / Social URL</label>
                   <input 
                     disabled={!isEditing}
                     value={formData.portfolio}
                     onChange={(e) => setFormData({...formData, portfolio: e.target.value})}
                     className={inputStyle}
                   />
                </div>

                <div className="space-y-2">
                   <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Bio</label>
                   <textarea 
                     rows={5}
                     disabled={!isEditing}
                     value={formData.bio}
                     onChange={(e) => setFormData({...formData, bio: e.target.value})}
                     className={inputStyle}
                   />
                </div>
             </form>
          </div>
       </div>
    </div>
  );
};

const InstructorSettingsView = ({ showToast }: { showToast: (msg: string) => void }) => {
  const { theme, setTheme } = useTheme();
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const handleSaveSettings = () => {
    showToast("Settings saved successfully");
  };

  const handleDeleteAccount = () => {
    setShowDeleteModal(false);
    alert("Account permanently deleted. Redirecting to home...");
    // navigate('/'); 
  };

  return (
    <div className="max-w-3xl mx-auto animate-fade-in-up">
       <div className="flex justify-between items-center mb-8">
         <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Settings</h1>
         <button onClick={handleSaveSettings} className="hidden md:block text-brand-600 font-bold hover:underline text-sm">Save Changes</button>
       </div>

       <div className="space-y-8">
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

          <div className={`${cardStyle} p-6`}>
             <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
               <Bell size={20} className="text-brand-500" /> Notification Preferences
             </h3>
             <div className="space-y-4">
                {[
                  "New Student Enrollments",
                  "Course Reviews",
                  "Assignment Submissions",
                  "Platform Updates",
                  "Daily Digest (Email)"
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <span className="text-gray-600 dark:text-gray-300">{item}</span>
                    <input type="checkbox" defaultChecked className="w-5 h-5 rounded text-brand-600 focus:ring-brand-500 border-gray-300" />
                  </div>
                ))}
             </div>
          </div>

          <div className={`${cardStyle} p-6`}>
             <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
               <Shield size={20} className="text-brand-500" /> Security
             </h3>
             <div className="space-y-4">
               <div className="flex justify-between items-center p-4 bg-gray-50 dark:bg-gray-900 rounded-xl">
                 <div>
                   <p className="font-bold text-gray-900 dark:text-white">Password</p>
                   <p className="text-xs text-gray-500">Last changed 6 months ago</p>
                 </div>
                 <button onClick={() => setShowPasswordModal(true)} className="text-sm font-bold text-brand-600 dark:text-brand-400 border border-gray-200 dark:border-gray-700 px-4 py-2 rounded-lg hover:bg-white dark:hover:bg-gray-800 transition-colors">Change</button>
               </div>
               
               <div className="flex justify-between items-center p-4 bg-gray-50 dark:bg-gray-900 rounded-xl">
                 <div>
                   <p className="font-bold text-gray-900 dark:text-white">Two-Factor Authentication</p>
                   <p className="text-xs text-gray-500">Secure your account with 2FA</p>
                 </div>
                 <div className="relative inline-block w-12 mr-2 align-middle select-none transition duration-200 ease-in">
                    <input type="checkbox" name="toggle" id="toggle" className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer border-gray-300"/>
                    <label htmlFor="toggle" className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></label>
                </div>
               </div>
             </div>
          </div>

          <div className={`${cardStyle} p-6 border-l-4 border-l-red-500`}>
             <h3 className="text-lg font-bold text-red-600 mb-6 flex items-center gap-2">
               <AlertTriangle size={20} /> Danger Zone
             </h3>
             <div className="flex flex-col md:flex-row justify-between items-center gap-4">
               <div>
                  <p className="font-bold text-gray-900 dark:text-white">Delete Instructor Account</p>
                  <p className="text-sm text-gray-500">This will remove all your courses and data.</p>
               </div>
               <button 
                 onClick={() => setShowDeleteModal(true)}
                 className="px-6 py-2 bg-red-100 dark:bg-red-900/20 text-red-600 font-bold rounded-xl hover:bg-red-200 dark:hover:bg-red-900/40 transition-colors"
               >
                 Delete Account
               </button>
             </div>
          </div>
       </div>

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

       <DeleteAccountModal 
         isOpen={showDeleteModal} 
         onClose={() => setShowDeleteModal(false)} 
         onConfirm={handleDeleteAccount} 
       />
    </div>
  );
};

const InstructorMessagesView = () => {
  const [activeChat, setActiveChat] = useState(0);
  const [inputText, setInputText] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Mock Students
  const contacts = [
    { id: 0, name: "Jane Doe", course: "Advanced React", online: true, lastMsg: "Thanks for the feedback!", time: "5m", img: 5 },
    { id: 1, name: "John Smith", course: "UI/UX Principles", online: false, lastMsg: "When is the deadline?", time: "1h", img: 3 },
    { id: 2, name: "Alice Johnson", course: "Advanced React", online: true, lastMsg: "I'm stuck on Module 3.", time: "3h", img: 12 },
  ];

  const [chatHistory, setChatHistory] = useState<{ [key: number]: any[] }>({
    0: [
      { text: "Hello Jane, I reviewed your assignment. Great job!", isMe: true, type: 'text' },
      { text: "Thanks for the feedback! I'll work on the optimizations.", isMe: false, type: 'text' }
    ]
  });

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const newMessage = { text: inputText, isMe: true, type: 'text' };
    setChatHistory(prev => ({
      ...prev,
      [activeChat]: [...(prev[activeChat] || []), newMessage]
    }));
    setInputText("");
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const isImage = file.type.startsWith('image/');
    const newMessage = { 
      text: isImage ? URL.createObjectURL(file) : "File Attachment", 
      isMe: true, 
      type: isImage ? 'image' : 'file',
      fileName: file.name
    };
    setChatHistory(prev => ({
      ...prev,
      [activeChat]: [...(prev[activeChat] || []), newMessage]
    }));
  };

  const currentMessages = chatHistory[activeChat] || [];

  return (
    <div className={`h-[calc(100vh-140px)] ${cardStyle} flex overflow-hidden animate-fade-in-up`}>
      {/* Sidebar */}
      <div className="w-80 border-r border-gray-100 dark:border-gray-700 flex flex-col">
         <div className="p-4 border-b border-gray-100 dark:border-gray-700">
             <div className={innerCardStyle + " flex items-center px-3 py-2"}>
               <Search size={16} className="text-gray-400" />
               <input type="text" placeholder="Search students" className="bg-transparent border-none outline-none text-sm ml-2 w-full text-gray-700 dark:text-gray-200" />
             </div>
         </div>
         <div className="flex-1 overflow-y-auto">
            {contacts.map((contact) => (
              <div 
                key={contact.id} 
                onClick={() => setActiveChat(contact.id)}
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
                  <p className="text-[10px] text-brand-500 mt-1">{contact.course}</p>
                </div>
              </div>
            ))}
         </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col bg-gray-50/50 dark:bg-gray-900/50">
         <div className="p-4 border-b border-gray-100 dark:border-gray-700 flex justify-between items-center bg-white dark:bg-gray-800">
            <div className="flex items-center gap-3">
               <img src={`https://i.pravatar.cc/150?img=${contacts[activeChat].img}`} alt="" className="w-10 h-10 rounded-full" />
               <div>
                 <h3 className="font-bold text-gray-900 dark:text-white">{contacts[activeChat].name}</h3>
                 <span className="text-xs text-brand-600 dark:text-brand-400 font-medium">Student</span>
               </div>
            </div>
            <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
              <MoreVertical size={20} className="text-gray-500" />
            </button>
         </div>

         <div className="flex-1 p-6 overflow-y-auto space-y-4">
            {currentMessages.map((msg, idx) => (
               <div key={idx} className={`flex gap-3 ${msg.isMe ? 'flex-row-reverse' : ''}`}>
                 <div className={`p-3 rounded-2xl shadow-sm max-w-sm text-sm ${
                   msg.isMe 
                     ? 'bg-brand-600 text-white rounded-br-none' 
                     : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 rounded-bl-none'
                 }`}>
                   {msg.type === 'image' ? (
                      <img src={msg.text} alt="Shared" className="max-w-full rounded-lg" />
                   ) : msg.type === 'file' ? (
                      <div className="flex items-center gap-2 bg-black/10 p-2 rounded-lg">
                        <File size={20} />
                        <span className="truncate">{msg.fileName}</span>
                      </div>
                   ) : (
                      msg.text
                   )}
                 </div>
               </div>
            ))}
         </div>

         <form onSubmit={handleSendMessage} className="p-4 bg-white dark:bg-gray-800 border-t border-gray-100 dark:border-gray-700">
            <div className="flex gap-2">
              <input type="file" ref={fileInputRef} className="hidden" onChange={handleFileUpload} />
              <button 
                type="button" 
                onClick={() => fileInputRef.current?.click()}
                className="p-3 text-gray-400 hover:text-brand-500 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-xl transition-colors"
              >
                <Paperclip size={20} />
              </button>
              <div className="flex-1 bg-gray-100 dark:bg-gray-900 rounded-xl flex items-center px-4">
                <input 
                   type="text" 
                   placeholder="Type a message..." 
                   value={inputText}
                   onChange={(e) => setInputText(e.target.value)}
                   className="bg-transparent border-none outline-none w-full text-sm text-gray-900 dark:text-white" 
                />
              </div>
              <button type="submit" className="p-3 bg-brand-600 text-white rounded-xl shadow-lg shadow-brand-500/30 hover:bg-brand-700 transition-colors">
                <Send size={20} />
              </button>
            </div>
         </form>
      </div>
    </div>
  );
};

const CreateCourseView = ({ onSave }: { onSave: () => void }) => {
  const [step, setStep] = useState(1);
  const [thumbnailPreview, setThumbnailPreview] = useState<string | null>(null);
  
  const [courseData, setCourseData] = useState({
    title: "", 
    category: "Development", 
    price: "", 
    description: "", 
    level: "Beginner",
    instructor: "Kevin Omondi", // Mock logged-in user
    modules: [
      {
        id: 1,
        title: "Introduction & Environment Setup",
        description: "In this module, we cover the fundamentals necessary to get started. Make sure to download the attached resources.",
        resources: [
          { title: "Course Syllabus.pdf", type: 'pdf', size: "1.2 MB" },
          { title: "Setting up VS Code", type: 'video', duration: "12:30" }
        ]
      }
    ] as Module[]
  });

  // Handle Thumbnail Upload
  const handleThumbnailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const url = URL.createObjectURL(e.target.files[0]);
      setThumbnailPreview(url);
    }
  };

  // Module Handlers
  const addModule = () => {
    setCourseData({
      ...courseData,
      modules: [...courseData.modules, { 
        id: Date.now(), 
        title: "", 
        description: "",
        resources: [] 
      }]
    });
  };

  const updateModule = (index: number, field: string, value: string) => {
    const updated = [...courseData.modules];
    updated[index] = { ...updated[index], [field]: value };
    setCourseData({ ...courseData, modules: updated });
  };

  const removeModule = (index: number) => {
    const updated = [...courseData.modules];
    updated.splice(index, 1);
    setCourseData({ ...courseData, modules: updated });
  };

  // Resource Handlers
  const addResource = (moduleIndex: number, type: 'video' | 'pdf' | 'link') => {
    const updated = [...courseData.modules];
    const newResource: Resource = {
      title: "",
      type: type,
      duration: type === 'video' ? "00:00" : undefined,
      size: type === 'pdf' ? "0 MB" : undefined
    };
    updated[moduleIndex].resources.push(newResource);
    setCourseData({ ...courseData, modules: updated });
  };

  const updateResource = (moduleIndex: number, resIndex: number, field: string, value: string) => {
    const updated = [...courseData.modules];
    updated[moduleIndex].resources[resIndex] = { 
      ...updated[moduleIndex].resources[resIndex], 
      [field]: value 
    };
    setCourseData({ ...courseData, modules: updated });
  };

  const removeResource = (moduleIndex: number, resIndex: number) => {
    const updated = [...courseData.modules];
    updated[moduleIndex].resources.splice(resIndex, 1);
    setCourseData({ ...courseData, modules: updated });
  };

  return (
    <div className="max-w-5xl mx-auto animate-fade-in-up">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Create New Course</h2>
        <div className="text-sm font-bold text-gray-500">Step {step} of 3</div>
      </div>
      
      {/* Progress Bar */}
      <div className="flex mb-8 gap-4">
        <div className={`flex-1 h-2 rounded-full transition-colors ${step >= 1 ? 'bg-brand-500' : 'bg-gray-200 dark:bg-gray-700'}`}></div>
        <div className={`flex-1 h-2 rounded-full transition-colors ${step >= 2 ? 'bg-brand-500' : 'bg-gray-200 dark:bg-gray-700'}`}></div>
        <div className={`flex-1 h-2 rounded-full transition-colors ${step >= 3 ? 'bg-brand-500' : 'bg-gray-200 dark:bg-gray-700'}`}></div>
      </div>

      <div className={`${cardStyle} p-8`}>
        {step === 1 && (
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">Course Identity</h3>
              <p className="text-sm text-gray-500 mb-6">This information will be displayed on the course card and header.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                 {/* Thumbnail Uploader */}
                 <div className="md:col-span-1">
                    <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Course Thumbnail</label>
                    <div 
                      className={`aspect-video rounded-xl border-2 border-dashed border-gray-300 dark:border-gray-600 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors relative overflow-hidden group`}
                      onClick={() => document.getElementById('thumbnail-upload')?.click()}
                    >
                      {thumbnailPreview ? (
                        <>
                          <img src={thumbnailPreview} alt="Preview" className="w-full h-full object-cover" />
                          <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                             <span className="text-white text-xs font-bold flex items-center gap-1"><Edit3 size={14} /> Change</span>
                          </div>
                        </>
                      ) : (
                        <>
                          <ImageIcon size={32} className="text-gray-400 mb-2" />
                          <p className="text-xs text-gray-500 text-center px-4">Click to upload <br/>(1280x720 recommended)</p>
                        </>
                      )}
                      <input id="thumbnail-upload" type="file" className="hidden" accept="image/*" onChange={handleThumbnailChange} />
                    </div>
                 </div>

                 {/* Basic Fields */}
                 <div className="md:col-span-2 space-y-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Course Title</label>
                      <input 
                        value={courseData.title}
                        onChange={(e) => setCourseData({...courseData, title: e.target.value})}
                        className={inputStyle} 
                        placeholder="e.g. Master M-PESA Integration" 
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Description</label>
                      <textarea 
                        rows={3} 
                        value={courseData.description}
                        onChange={(e) => setCourseData({...courseData, description: e.target.value})}
                        className={inputStyle} 
                        placeholder="Brief overview for the course header..."
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Category</label>
                        <select 
                          value={courseData.category}
                          onChange={(e) => setCourseData({...courseData, category: e.target.value})}
                          className={inputStyle}
                        >
                          <option>Development</option>
                          <option>Design</option>
                          <option>Business</option>
                          <option>Fintech</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Price (KES)</label>
                        <input 
                          type="number"
                          value={courseData.price}
                          onChange={(e) => setCourseData({...courseData, price: e.target.value})}
                          className={inputStyle} 
                          placeholder="5000" 
                        />
                      </div>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6">
            <div className="flex justify-between items-end">
              <div>
                 <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">Curriculum Builder</h3>
                 <p className="text-sm text-gray-500">Structure your course exactly how students will see it.</p>
              </div>
              <button 
                onClick={addModule} 
                className="px-4 py-2 bg-brand-50 dark:bg-brand-900/20 text-brand-600 rounded-lg text-sm font-bold hover:bg-brand-100 dark:hover:bg-brand-900/40 transition-colors flex items-center gap-2"
              >
                <PlusCircle size={16} /> Add Module
              </button>
            </div>

            <div className="space-y-4">
              {courseData.modules.map((module, mIdx) => (
                <div key={module.id} className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden bg-gray-50/50 dark:bg-gray-900/50">
                  {/* Module Header Editor */}
                  <div className="p-4 bg-gray-100 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
                    <div className="flex justify-between items-start gap-4 mb-3">
                      <div className="flex-1 space-y-2">
                        <input 
                          value={module.title}
                          onChange={(e) => updateModule(mIdx, 'title', e.target.value)}
                          className="bg-transparent font-bold text-gray-900 dark:text-white outline-none w-full placeholder:text-gray-400" 
                          placeholder={`Module ${mIdx + 1} Title`}
                        />
                        <textarea
                          value={module.description}
                          onChange={(e) => updateModule(mIdx, 'description', e.target.value)}
                          rows={2}
                          className="w-full bg-white dark:bg-gray-900 rounded-lg p-2 text-xs text-gray-600 dark:text-gray-300 outline-none border border-transparent focus:border-brand-500 resize-none placeholder:text-gray-400"
                          placeholder="Module description (visible to students in the accordion)..."
                        />
                      </div>
                      <button onClick={() => removeModule(mIdx)} className="text-gray-400 hover:text-red-500 transition-colors">
                        <Trash2 size={16} />
                      </button>
                    </div>

                    {/* Quick Add Resource Buttons */}
                    <div className="flex gap-2">
                      <button onClick={() => addResource(mIdx, 'video')} className="px-3 py-1.5 bg-white dark:bg-gray-700 rounded-lg text-xs font-bold text-gray-600 dark:text-gray-300 shadow-sm hover:text-brand-500 flex items-center gap-1">
                        <Video size={12} /> Add Video
                      </button>
                      <button onClick={() => addResource(mIdx, 'pdf')} className="px-3 py-1.5 bg-white dark:bg-gray-700 rounded-lg text-xs font-bold text-gray-600 dark:text-gray-300 shadow-sm hover:text-brand-500 flex items-center gap-1">
                        <FileText size={12} /> Add PDF
                      </button>
                      <button onClick={() => addResource(mIdx, 'link')} className="px-3 py-1.5 bg-white dark:bg-gray-700 rounded-lg text-xs font-bold text-gray-600 dark:text-gray-300 shadow-sm hover:text-brand-500 flex items-center gap-1">
                        <LinkIcon size={12} /> Add Link
                      </button>
                    </div>
                  </div>

                  {/* Resources List */}
                  <div className="p-4 space-y-2">
                     {module.resources.length === 0 && (
                       <p className="text-center text-xs text-gray-400 py-2 italic">No resources added yet.</p>
                     )}
                     {module.resources.map((res, rIdx) => (
                       <div key={rIdx} className="flex items-center gap-3 p-2 bg-white dark:bg-gray-800 rounded-lg border border-gray-100 dark:border-gray-700">
                          <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                            res.type === 'video' ? 'bg-red-50 text-red-500' :
                            res.type === 'pdf' ? 'bg-orange-50 text-orange-500' :
                            'bg-blue-50 text-blue-500'
                          }`}>
                            {res.type === 'video' ? <Youtube size={16} /> : res.type === 'pdf' ? <FileText size={16} /> : <ExternalLink size={16} />}
                          </div>
                          
                          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-2">
                             <input 
                               value={res.title}
                               onChange={(e) => updateResource(mIdx, rIdx, 'title', e.target.value)}
                               className="bg-transparent text-sm font-medium text-gray-900 dark:text-white outline-none placeholder:text-gray-400"
                               placeholder="Resource Title"
                             />
                             <div className="flex gap-2">
                               {res.type === 'video' && (
                                 <input 
                                   value={res.duration}
                                   onChange={(e) => updateResource(mIdx, rIdx, 'duration', e.target.value)}
                                   className="bg-gray-50 dark:bg-gray-900 rounded px-2 py-1 text-xs outline-none w-20 text-gray-500"
                                   placeholder="00:00"
                                 />
                               )}
                               {res.type === 'pdf' && (
                                 <input 
                                   value={res.size}
                                   onChange={(e) => updateResource(mIdx, rIdx, 'size', e.target.value)}
                                   className="bg-gray-50 dark:bg-gray-900 rounded px-2 py-1 text-xs outline-none w-20 text-gray-500"
                                   placeholder="0 MB"
                                 />
                               )}
                               <input 
                                  className="bg-gray-50 dark:bg-gray-900 rounded px-2 py-1 text-xs outline-none flex-1 text-gray-500 truncate"
                                  placeholder={res.type === 'video' ? 'Video URL' : 'File URL'}
                                  disabled
                                  value={res.type === 'video' ? 'Upload Pending...' : 'Attachment'}
                               />
                             </div>
                          </div>
                          <button onClick={() => removeResource(mIdx, rIdx)} className="text-gray-300 hover:text-red-500 p-1">
                            <X size={14} />
                          </button>
                       </div>
                     ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-8">
             <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Student View Preview</h3>
                <p className="text-gray-500 text-sm">Review how your course looks to enrolled students.</p>
             </div>

             {/* PREVIEW CONTAINER - Replicates StudentDashboard Layout */}
             <div className="border border-gray-200 dark:border-gray-700 rounded-3xl p-1 bg-gray-100 dark:bg-black/20">
                <div className="bg-gray-50 dark:bg-gray-900 rounded-[1.4rem] p-6 md:p-8 overflow-hidden">
                   
                   {/* Header Mockup */}
                   <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 mb-8">
                      <div className="flex flex-col md:flex-row gap-6">
                         <div className="w-full md:w-64 aspect-video bg-gray-200 dark:bg-gray-700 rounded-xl overflow-hidden shrink-0">
                            {thumbnailPreview ? (
                              <img src={thumbnailPreview} alt="Thumbnail" className="w-full h-full object-cover" />
                            ) : (
                              <div className="w-full h-full flex items-center justify-center text-gray-400"><ImageIcon size={32} /></div>
                            )}
                         </div>
                         <div className="flex-1">
                            <span className="inline-block px-3 py-1 rounded-full bg-brand-100 dark:bg-brand-900/30 text-brand-700 dark:text-brand-300 text-xs font-bold mb-2">In Progress</span>
                            <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{courseData.title || "Untitled Course"}</h1>
                            <p className="text-sm text-gray-500 mb-4">Instructor: <span className="font-bold text-gray-900 dark:text-white">{courseData.instructor}</span></p>
                            
                            <div className="space-y-2 mb-4">
                               <div className="flex justify-between text-xs font-bold">
                                 <span className="text-brand-600">0% Complete</span>
                                 <span className="text-gray-400">0/{courseData.modules.length} Modules</span>
                               </div>
                               <div className="h-2 w-full bg-gray-100 dark:bg-gray-700 rounded-full"><div className="w-0 h-full"></div></div>
                            </div>
                            
                            <div className="flex gap-3">
                              <button className="px-6 py-2 bg-brand-600 text-white rounded-lg text-sm font-bold flex items-center gap-2">
                                <PlayCircle size={16} /> Continue Learning
                              </button>
                              <button className="px-6 py-2 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-bold flex items-center gap-2">
                                <MessageCircle size={16} /> Course Forum
                              </button>
                            </div>
                         </div>
                      </div>
                   </div>

                   {/* Course Content Preview */}
                   <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                     <BookOpen className="text-brand-500" size={20} /> Course Content
                   </h2>
                   
                   <div className="space-y-4 mb-8">
                      {courseData.modules.map((mod, i) => (
                        <div key={i} className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 overflow-hidden">
                           <div className="p-4 flex items-center justify-between bg-white dark:bg-gray-800">
                              <div className="flex items-center gap-4">
                                 <div className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-xs font-bold text-gray-500">{i + 1}</div>
                                 <h3 className="font-bold text-gray-900 dark:text-white">{mod.title || "(No Title)"}</h3>
                              </div>
                              <ChevronRight size={20} className="text-gray-400 rotate-90" />
                           </div>
                           
                           {/* Expanded State Preview */}
                           <div className="bg-gray-50 dark:bg-gray-900/50 p-4 border-t border-gray-100 dark:border-gray-700">
                              {mod.description && (
                                <div className="mb-4 pl-12 text-sm text-gray-600 dark:text-gray-400">
                                  {mod.description}
                                </div>
                              )}
                              
                              <div className="pl-12 space-y-2">
                                 {mod.resources.length > 0 ? (
                                    <>
                                       <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Resources</h4>
                                       {mod.resources.map((res, j) => (
                                          <div key={j} className="flex items-center justify-between p-3 bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700">
                                             <div className="flex items-center gap-3">
                                                {res.type === 'pdf' && <FileText size={18} className="text-red-500" />}
                                                {res.type === 'video' && <Youtube size={18} className="text-red-600" />}
                                                {res.type === 'link' && <ExternalLink size={18} className="text-blue-500" />}
                                                <div>
                                                   <p className="text-sm font-bold text-gray-800 dark:text-gray-200">{res.title || "Untitled Resource"}</p>
                                                   {(res.size || res.duration) && <p className="text-[10px] text-gray-400">{res.size || res.duration}</p>}
                                                </div>
                                             </div>
                                             <Download size={16} className="text-gray-300" />
                                          </div>
                                       ))}
                                    </>
                                 ) : (
                                    <p className="text-xs text-gray-400 italic">No resources in this module</p>
                                 )}
                              </div>
                           </div>
                        </div>
                      ))}
                   </div>
                   
                   {/* Instructor Card Preview */}
                   <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700">
                      <h3 className="font-bold text-gray-900 dark:text-white mb-4">About the Instructor</h3>
                      <div className="flex items-center gap-4">
                         <div className="w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-700"></div>
                         <div>
                            <p className="font-bold text-gray-900 dark:text-white">{courseData.instructor}</p>
                            <button className="text-xs text-brand-600 font-bold hover:underline">View Profile</button>
                         </div>
                      </div>
                   </div>

                </div>
             </div>
          </div>
        )}

        <div className="flex justify-between mt-8 pt-6 border-t border-gray-100 dark:border-gray-700">
           {step > 1 ? (
             <button onClick={() => setStep(step - 1)} className={btnSecondary}>Back</button>
           ) : (
             <div></div>
           )}
           {step < 3 ? (
             <button onClick={() => setStep(step + 1)} className={btnPrimary}>Next Step</button>
           ) : (
             <button onClick={onSave} className={btnPrimary}>Publish Course</button>
           )}
        </div>
      </div>
    </div>
  );
};

const EarningsView = () => {
  // Mock Calculations
  const totalRevenue = 450000;
  const platformCommission = totalRevenue * 0.20;
  const instructorShare = totalRevenue * 0.80;
  const pendingClearance = 15000; // From courses not yet marked complete by students
  const availableBalance = instructorShare - pendingClearance;

  return (
    <div className="animate-fade-in-up">
       <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">Earnings & Payouts</h1>
       
       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <StatCard title="Total Revenue" value={`KES ${totalRevenue.toLocaleString()}`} icon={DollarSign} color="bg-blue-500" />
          <StatCard title="Platform Fee (20%)" value={`KES ${platformCommission.toLocaleString()}`} icon={ExternalLink} color="bg-orange-500" />
          <StatCard title="Net Earnings (80%)" value={`KES ${instructorShare.toLocaleString()}`} icon={CheckCircle} color="bg-green-500" />
       </div>

       <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className={`${cardStyle} p-8`}>
             <h3 className="font-bold text-gray-900 dark:text-white mb-6">Available Balance</h3>
             <div className="flex flex-col items-center justify-center py-8">
                <h2 className="text-4xl md:text-5xl font-bold text-brand-600 dark:text-brand-400 mb-2">
                  KES {availableBalance.toLocaleString()}
                </h2>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-8">
                  Pending Clearance: KES {pendingClearance.toLocaleString()}
                </p>
                <button 
                  className="w-full py-4 bg-brand-600 text-white font-bold rounded-xl shadow-lg hover:bg-brand-700 transition-colors flex items-center justify-center gap-2"
                  disabled={availableBalance <= 0}
                >
                  <Download size={20} /> Request Withdrawal
                </button>
                <p className="text-xs text-gray-400 mt-4 text-center max-w-xs">
                  * Withdrawals are processed to M-PESA or Bank within 24 hours. Funds from incomplete courses are held in escrow.
                </p>
             </div>
          </div>

          <div className={`${cardStyle} p-6`}>
             <h3 className="font-bold text-gray-900 dark:text-white mb-4">Recent Transactions</h3>
             <div className="space-y-4">
                {[1,2,3,4,5].map(i => (
                  <div key={i} className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800">
                     <div className="flex items-center gap-3">
                       <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/20 text-green-500 flex items-center justify-center">
                         <TrendingUp size={18} />
                       </div>
                       <div>
                         <p className="text-sm font-bold text-gray-900 dark:text-white">Course Enrollment</p>
                         <p className="text-xs text-gray-500">Advanced React Patterns</p>
                       </div>
                     </div>
                     <div className="text-right">
                       <p className="font-bold text-green-600">+ KES 4,800</p>
                       <p className="text-xs text-gray-400">Oct {20-i}, 2025</p>
                     </div>
                  </div>
                ))}
             </div>
          </div>
       </div>
    </div>
  );
};

const LiveClassManager = ({ showToast }: { showToast: (msg: string) => void }) => {
  const [topic, setTopic] = useState("");
  const [date, setDate] = useState("");
  const [targetAudience, setTargetAudience] = useState("Open for All");
  const [activeFilter, setActiveFilter] = useState<'upcoming' | 'ongoing' | 'completed'>('upcoming');
  
  // Use dates relative to now to demonstrate filtering
  const now = Date.now();
  const oneDay = 24 * 60 * 60 * 1000;
  const thirtyMins = 30 * 60 * 1000;

  const [classes, setClasses] = useState([
    { id: 1, topic: "Weekly Design Review", date: new Date(now + oneDay).toISOString().slice(0, 16), link: "https://meet.jit.si/ElimuTech-Review", audience: "Open for All" },
    { id: 2, topic: "React Q&A Session", date: new Date(now - thirtyMins).toISOString().slice(0, 16), link: "https://meet.jit.si/ElimuTech-React", audience: "Advanced React Patterns" },
    { id: 3, topic: "Intro to Figma", date: new Date(now - oneDay * 2).toISOString().slice(0, 16), link: "https://meet.jit.si/ElimuTech-Figma", audience: "UI/UX Principles" },
    { id: 4, topic: "Cybersecurity Basics", date: new Date(now + oneDay * 3).toISOString().slice(0, 16), link: "https://meet.jit.si/ElimuTech-Cyber", audience: "Open for All" }
  ]);

  const scheduleClass = () => {
    if (!topic || !date) return;
    const cleanTopic = topic.replace(/\s/g, '');
    const newClass = {
      id: Date.now(),
      topic,
      date,
      link: `https://meet.jit.si/ElimuTech-${cleanTopic}-${Date.now()}`,
      audience: targetAudience
    };
    setClasses([...classes, newClass]);
    
    // Notification Logic
    if (targetAudience === "Open for All") {
      showToast("System-wide notification sent to all students!");
    } else {
      showToast(`Notification sent to students enrolled in ${targetAudience}`);
    }

    setTopic("");
    setDate("");
  };

  const getStatus = (dateStr: string) => {
    const classTime = new Date(dateStr).getTime();
    const currentTime = Date.now();
    const duration = 60 * 60 * 1000; // Assume 1 hour class duration
    
    if (classTime > currentTime) return 'upcoming';
    if (classTime <= currentTime && classTime + duration > currentTime) return 'ongoing';
    return 'completed';
  };

  const filteredClasses = classes.filter(c => getStatus(c.date) === activeFilter);

  return (
    <div className="animate-fade-in-up">
       <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Live Classes</h1>
          
          <div className="flex bg-gray-100 dark:bg-gray-800 p-1 rounded-xl">
            {(['upcoming', 'ongoing', 'completed'] as const).map(filter => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-lg text-xs font-bold capitalize transition-all ${
                  activeFilter === filter 
                    ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm' 
                    : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
       </div>
       
       <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Schedule Form */}
          <div className={`${cardStyle} p-6 h-fit`}>
             <h3 className="font-bold text-gray-900 dark:text-white mb-4">Schedule New Class</h3>
             <div className="space-y-4">
               <div>
                 <label className="text-xs font-bold text-gray-500 uppercase">Topic</label>
                 <input 
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    className={inputStyle} 
                    placeholder="e.g. Weekly Q&A" 
                 />
               </div>
               <div>
                 <label className="text-xs font-bold text-gray-500 uppercase">Target Audience</label>
                 <select
                   value={targetAudience}
                   onChange={(e) => setTargetAudience(e.target.value)}
                   className={inputStyle}
                 >
                   <option>Open for All</option>
                   {initialCourses.map(c => <option key={c.id} value={c.title}>{c.title}</option>)}
                 </select>
               </div>
               <div>
                 <label className="text-xs font-bold text-gray-500 uppercase">Date & Time</label>
                 <input 
                    type="datetime-local"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className={inputStyle} 
                 />
               </div>
               <button onClick={scheduleClass} className="w-full py-3 bg-brand-600 text-white font-bold rounded-xl shadow-lg hover:bg-brand-700 transition-colors">
                 Generate Jitsi Link
               </button>
             </div>
          </div>

          {/* List */}
          <div className="lg:col-span-2 space-y-4">
             {filteredClasses.length === 0 ? (
               <div className="text-center py-12 opacity-50">
                 <Video size={48} className="mx-auto mb-2" />
                 <p className="font-bold">No {activeFilter} classes found</p>
               </div>
             ) : (
               filteredClasses.map(cls => (
                 <div key={cls.id} className={`${cardStyle} p-6 flex flex-col md:flex-row justify-between items-center gap-4 border-l-4 ${activeFilter === 'ongoing' ? 'border-l-red-500' : 'border-l-transparent'}`}>
                   <div>
                     <div className="flex items-center gap-2 mb-1">
                       {activeFilter === 'ongoing' && (
                         <span className="flex h-2 w-2 relative">
                           <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                           <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                         </span>
                       )}
                       <h3 className="font-bold text-gray-900 dark:text-white text-lg">{cls.topic}</h3>
                     </div>
                     <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-2">
                       <Calendar size={14} /> {new Date(cls.date).toLocaleString()}
                     </p>
                     <p className="text-xs text-brand-600 dark:text-brand-400 font-bold mt-1">
                       Target: {cls.audience}
                     </p>
                     <a href={cls.link} target="_blank" rel="noreferrer" className="text-brand-600 text-xs mt-1 block hover:underline truncate max-w-xs">{cls.link}</a>
                   </div>
                   <div className="flex gap-2">
                     <a href={cls.link} target="_blank" rel="noreferrer" className={activeFilter === 'completed' ? btnSecondary : btnPrimary}>
                       {activeFilter === 'completed' ? 'View Recording' : 'Start Class'}
                     </a>
                     {activeFilter === 'completed' && (
                       <label className={btnSecondary + " cursor-pointer flex items-center gap-2 bg-brand-50 text-brand-600 dark:bg-brand-900/20 dark:text-brand-400 border border-brand-200 dark:border-brand-800"}>
                         <Upload size={16} /> Upload Recording
                         <input type="file" className="hidden" />
                       </label>
                     )}
                   </div>
                 </div>
               ))
             )}
          </div>
       </div>
    </div>
  );
};

const InstructorDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Dashboard");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedCourseFilter, setSelectedCourseFilter] = useState("All");
  const [toastMsg, setToastMsg] = useState("");
  const navigate = useNavigate();

  const showToast = (msg: string) => {
    setToastMsg(msg);
  };

  const menuItems = [
    { name: 'Dashboard', icon: LayoutDashboard },
    { name: 'My Courses', icon: BookOpen },
    { name: 'Create Course', icon: PlusCircle },
    { name: 'Discounts', icon: Tag },
    { name: 'Live Classes', icon: Video },
    { name: 'Assignments', icon: CheckSquare },
    { name: 'Students', icon: Users },
    { name: 'Messages', icon: MessageCircle },
    { name: 'Earnings', icon: DollarSign },
    { name: 'Reviews', icon: Star },
    { name: 'Profile', icon: User },
    { name: 'Settings', icon: Settings },
  ];

  const renderContent = () => {
    switch(activeTab) {
      case 'Create Course': 
        return <CreateCourseView onSave={() => setActiveTab('My Courses')} />;
      case 'Earnings':
        return <EarningsView />;
      case 'Live Classes':
        return <LiveClassManager showToast={showToast} />;
      case 'Discounts':
        return <DiscountManager />;
      case 'Profile':
        return <InstructorProfileView showToast={showToast} />;
      case 'Settings':
        return <InstructorSettingsView showToast={showToast} />;
      case 'Messages':
        return <InstructorMessagesView />;
      case 'My Courses':
        return (
          <div className="animate-fade-in-up">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">Manage Courses</h1>
            <div className={`${cardStyle} overflow-hidden`}>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm text-gray-600 dark:text-gray-300">
                  <thead className="bg-gray-50 dark:bg-gray-900/50 text-xs uppercase font-bold text-gray-500">
                    <tr>
                      <th className="px-6 py-4">Course Info</th>
                      <th className="px-6 py-4">Status</th>
                      <th className="px-6 py-4">Students</th>
                      <th className="px-6 py-4">Price</th>
                      <th className="px-6 py-4">Rating</th>
                      <th className="px-6 py-4 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                    {initialCourses.map((course) => (
                      <tr key={course.id} className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors group">
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                             <div className="w-12 h-12 rounded-lg overflow-hidden bg-gray-200">
                               <img src={course.image} alt="" className="w-full h-full object-cover" />
                             </div>
                             <span className="font-bold text-gray-900 dark:text-white">{course.title}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold ${course.status === 'Published' ? 'bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-500' : 'bg-yellow-100 dark:bg-yellow-900/20 text-yellow-700 dark:text-yellow-500'}`}>
                            {course.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 flex items-center gap-2">
                           <Users size={16} className="text-gray-400" /> {course.students}
                        </td>
                        <td className="px-6 py-4 font-bold text-brand-600 dark:text-brand-400">
                           KES {course.price.toLocaleString()}
                        </td>
                        <td className="px-6 py-4 flex items-center gap-1">
                           <Star size={16} className="text-yellow-400 fill-current" /> {course.rating > 0 ? course.rating : '-'}
                        </td>
                        <td className="px-6 py-4 text-right">
                          <div className="flex justify-end gap-2 opacity-100 sm:opacity-0 group-hover:opacity-100 transition-opacity">
                            <button 
                              onClick={() => setActiveTab('Create Course')}
                              className="p-2 bg-gray-100 dark:bg-gray-800 hover:bg-brand-50 dark:hover:bg-brand-900/20 hover:text-brand-600 rounded-lg transition-colors" title="Edit"
                            >
                              <Edit3 size={16} />
                            </button>
                            <button className="p-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition-colors" title="Manage">
                              <Settings size={16} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        );
      case 'Students':
        // Filter Students Logic
        const filteredStudents = initialStudents.filter(s => 
          selectedCourseFilter === "All" || s.course === selectedCourseFilter
        );

        return (
          <div className="animate-fade-in-up">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Manage Students</h1>
              
              <div className="flex items-center gap-3">
                 <div className="flex items-center gap-2 bg-white dark:bg-gray-800 px-4 py-2 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
                   <Filter size={16} className="text-gray-500" />
                   <select 
                     value={selectedCourseFilter}
                     onChange={(e) => setSelectedCourseFilter(e.target.value)}
                     className="bg-transparent border-none outline-none text-sm font-bold text-gray-700 dark:text-gray-200 cursor-pointer"
                   >
                     <option value="All">All Courses</option>
                     {initialCourses.map(c => <option key={c.id} value={c.title}>{c.title}</option>)}
                   </select>
                 </div>
                 <button className="p-2 bg-brand-600 text-white rounded-xl shadow-md hover:bg-brand-700">
                   <Download size={18} />
                 </button>
              </div>
            </div>

            <div className={`${cardStyle} overflow-hidden`}>
               <div className="overflow-x-auto">
                 <table className="w-full text-left text-sm text-gray-600 dark:text-gray-300">
                   <thead className="bg-gray-50 dark:bg-gray-900/50 text-xs uppercase font-bold text-gray-500">
                     <tr>
                       <th className="px-6 py-4">Name</th>
                       <th className="px-6 py-4">Course Enrolled</th>
                       <th className="px-6 py-4">Progress</th>
                       <th className="px-6 py-4">Grade</th>
                       <th className="px-6 py-4 text-right">Action</th>
                     </tr>
                   </thead>
                   <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                     {filteredStudents.length > 0 ? filteredStudents.map((s) => (
                       <tr key={s.id} className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                         <td className="px-6 py-4">
                           <div className="flex items-center gap-3">
                             <div className="w-8 h-8 rounded-full bg-brand-100 dark:bg-brand-900/20 text-brand-600 flex items-center justify-center font-bold">
                               {s.name.charAt(0)}
                             </div>
                             <span className="font-bold text-gray-900 dark:text-white">{s.name}</span>
                           </div>
                         </td>
                         <td className="px-6 py-4">{s.course}</td>
                         <td className="px-6 py-4">
                           <div className="flex items-center gap-2">
                             <div className="w-24 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                               <div className="h-full bg-brand-500" style={{ width: `${s.progress}%` }}></div>
                             </div>
                             <span className="text-xs">{s.progress}%</span>
                           </div>
                         </td>
                         <td className="px-6 py-4">
                            <span className={`font-bold ${s.grade.startsWith('A') ? 'text-green-500' : 'text-gray-500'}`}>{s.grade}</span>
                         </td>
                         <td className="px-6 py-4 text-right">
                           <button onClick={() => setActiveTab('Messages')} className="text-brand-600 font-bold hover:underline text-xs bg-brand-50 dark:bg-brand-900/10 px-3 py-1.5 rounded-lg">Message</button>
                         </td>
                       </tr>
                     )) : (
                       <tr>
                         <td colSpan={5} className="px-6 py-12 text-center text-gray-400">
                           No students found for this filter.
                         </td>
                       </tr>
                     )}
                   </tbody>
                 </table>
               </div>
            </div>
          </div>
        );
      case 'Dashboard':
      default:
        return (
          <div className="space-y-8 animate-fade-in-up">
             <div className="flex flex-col md:flex-row justify-between items-end gap-4">
               <div>
                 <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-1">Instructor Dashboard</h1>
                 <p className="text-gray-500 dark:text-gray-400">Overview of your teaching performance</p>
               </div>
               <button onClick={() => setActiveTab('Create Course')} className={btnPrimary + " flex items-center gap-2"}>
                 <PlusCircle size={18} /> Create New Course
               </button>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
               <StatCard title="Total Earnings" value="KES 360k" icon={DollarSign} color="bg-green-500" trend="12%" />
               <StatCard title="Active Students" value="419" icon={Users} color="bg-blue-500" trend="5%" />
               <StatCard title="Course Rating" value="4.8" icon={Star} color="bg-yellow-500" />
               <StatCard title="Pending Assignments" value="12" icon={FileText} color="bg-red-500" />
             </div>

             <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className={`${cardStyle} p-6 lg:col-span-2`}>
                   <h3 className="font-bold text-gray-900 dark:text-white mb-6">Revenue Growth</h3>
                   <div className="h-64 bg-gray-50 dark:bg-gray-900/50 rounded-xl flex items-center justify-center text-gray-400">
                      <BarChart2 size={48} />
                      <span className="ml-2">Chart Visualization Placeholder</span>
                   </div>
                </div>
                <div className={`${cardStyle} p-6`}>
                   <h3 className="font-bold text-gray-900 dark:text-white mb-6">Recent Activity</h3>
                   <div className="space-y-4">
                     {[1,2,3,4].map(i => (
                       <div key={i} className="flex gap-3">
                         <div className="w-8 h-8 rounded-full bg-brand-100 dark:bg-brand-900/20 text-brand-600 flex items-center justify-center shrink-0">
                           <Bell size={14} />
                         </div>
                         <div>
                           <p className="text-sm font-bold text-gray-900 dark:text-white">New student enrolled</p>
                           <p className="text-xs text-gray-500">Advanced React Patterns • 2h ago</p>
                         </div>
                       </div>
                     ))}
                   </div>
                </div>
             </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-[72px] transition-colors duration-300">
      <div className="max-w-[1600px] mx-auto flex min-h-[calc(100vh-72px)] relative">
        
        {/* Sidebar */}
        <aside 
          className={`fixed lg:sticky top-[72px] left-0 z-40 h-[calc(100vh-72px)] w-64 bg-gray-50 dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 transform transition-transform duration-300 ease-in-out lg:translate-x-0 overflow-y-auto no-scrollbar py-6 px-4 flex flex-col gap-6 ${
            isSidebarOpen ? 'translate-x-0 bg-gray-100 dark:bg-gray-900 shadow-2xl' : '-translate-x-full'
          }`}
        >
          {/* Instructor Profile Summary */}
          <div className={`flex flex-col items-center text-center p-6 ${cardStyle} cursor-pointer hover:scale-[1.02] transition-transform`} onClick={() => setActiveTab('Profile')}>
            <div className="w-20 h-20 rounded-full bg-gray-200 dark:bg-gray-700 p-1 shadow-inner mb-3">
              <img 
                src="https://i.pravatar.cc/150?u=Kevin" 
                alt="Instructor" 
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <h3 className="font-bold text-gray-900 dark:text-white">Kevin Omondi</h3>
            <p className="text-xs text-gray-500 dark:text-gray-400">Senior Instructor</p>
          </div>

          <nav className="flex-1 space-y-2">
            {menuItems.map((item) => (
              <button
                key={item.name}
                onClick={() => {
                  setActiveTab(item.name);
                  setIsSidebarOpen(false);
                }}
                className={`w-full flex items-center gap-3 p-3.5 rounded-xl text-sm font-bold transition-all duration-200 ${
                  activeTab === item.name 
                    ? 'text-brand-600 dark:text-brand-400 shadow-[inset_4px_4px_8px_#d1d5db,inset_-4px_-4px_8px_#ffffff] dark:shadow-[inset_4px_4px_8px_#0b0c15,inset_-4px_-4px_8px_#1e293b] bg-gray-50 dark:bg-gray-900' 
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 hover:shadow-[4px_4px_8px_#d1d5db,-4px_-4px_8px_#ffffff] dark:hover:shadow-[4px_4px_8px_#0b0c15,-4px_-4px_8px_#1e293b]'
                }`}
              >
                <item.icon size={18} />
                <span>{item.name}</span>
              </button>
            ))}
          </nav>

          <button onClick={() => navigate('/login')} className={`w-full flex items-center gap-3 p-3.5 rounded-xl text-sm font-bold text-red-500 hover:bg-red-50 dark:hover:bg-red-900/10 transition-colors`}>
            <LogOut size={18} />
            <span>Log Out</span>
          </button>
        </aside>

        {/* Overlay for Mobile */}
        {isSidebarOpen && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30 lg:hidden" onClick={() => setIsSidebarOpen(false)}></div>
        )}

        {/* Main Content */}
        <main className="flex-1 p-4 md:p-8 overflow-x-hidden w-full">
           {/* Mobile Header */}
           <div className="lg:hidden flex items-center justify-between mb-6">
             <h1 className="text-xl font-bold text-gray-900 dark:text-white">{activeTab}</h1>
             <button onClick={() => setIsSidebarOpen(true)} className="p-2 rounded-lg bg-white dark:bg-gray-800 shadow-sm text-gray-600 dark:text-gray-300">
               <Menu size={20} />
             </button>
           </div>

           {renderContent()}
        </main>
      </div>

      {/* Global Toast */}
      {toastMsg && <Toast message={toastMsg} onClose={() => setToastMsg("")} />}
    </div>
  );
};

export default InstructorDashboard;