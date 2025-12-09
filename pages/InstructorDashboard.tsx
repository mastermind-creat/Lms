import React, { useState, useRef } from 'react';
import { 
  LayoutDashboard, BookOpen, PlusCircle, Video, PlayCircle, 
  FileText, CheckSquare, Users, MessageCircle, DollarSign, 
  Star, Bell, User, Settings, LogOut, Search, Menu, 
  TrendingUp, CreditCard, ChevronRight, Upload, X, 
  Save, Edit3, Trash2, Calendar, Lock, Image as ImageIcon,
  MoreVertical, Download, ExternalLink, AlertTriangle, CheckCircle, BarChart2
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
  { id: 1, title: "Advanced React Patterns", students: 124, price: 6000, status: "Published", rating: 4.8 },
  { id: 2, title: "Python for Data Science", students: 85, price: 8000, status: "Draft", rating: 0 },
  { id: 3, title: "UI/UX Principles", students: 210, price: 5000, status: "Published", rating: 4.9 },
];

const initialStudents = [
  { id: 1, name: "Jane Doe", course: "Advanced React Patterns", progress: 65, grade: "A" },
  { id: 2, name: "John Smith", course: "UI/UX Principles", progress: 90, grade: "A+" },
  { id: 3, name: "Alice Johnson", course: "Advanced React Patterns", progress: 15, grade: "-" },
];

// --- Sub-Components ---

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

const CreateCourseView = ({ onSave }: { onSave: () => void }) => {
  const [step, setStep] = useState(1);
  const [courseData, setCourseData] = useState({
    title: "", category: "", price: "", description: "", level: "Beginner", modules: [] as any[]
  });

  const addModule = () => {
    setCourseData({
      ...courseData,
      modules: [...courseData.modules, { title: "", lessons: [] }]
    });
  };

  const addLesson = (moduleIndex: number) => {
    const updatedModules = [...courseData.modules];
    updatedModules[moduleIndex].lessons.push({ title: "", type: "video" });
    setCourseData({ ...courseData, modules: updatedModules });
  };

  return (
    <div className="max-w-4xl mx-auto animate-fade-in-up">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Create New Course</h2>
      
      <div className="flex mb-8 gap-4">
        <div className={`flex-1 h-2 rounded-full ${step >= 1 ? 'bg-brand-500' : 'bg-gray-200 dark:bg-gray-700'}`}></div>
        <div className={`flex-1 h-2 rounded-full ${step >= 2 ? 'bg-brand-500' : 'bg-gray-200 dark:bg-gray-700'}`}></div>
        <div className={`flex-1 h-2 rounded-full ${step >= 3 ? 'bg-brand-500' : 'bg-gray-200 dark:bg-gray-700'}`}></div>
      </div>

      <div className={`${cardStyle} p-8`}>
        {step === 1 && (
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Basic Information</h3>
            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Course Title</label>
              <input 
                value={courseData.title}
                onChange={(e) => setCourseData({...courseData, title: e.target.value})}
                className={inputStyle} 
                placeholder="e.g. Master M-PESA Integration" 
              />
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Category</label>
                <select className={inputStyle}>
                  <option>Development</option>
                  <option>Design</option>
                  <option>Business</option>
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
            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Description</label>
              <textarea 
                rows={4} 
                value={courseData.description}
                onChange={(e) => setCourseData({...courseData, description: e.target.value})}
                className={inputStyle} 
                placeholder="What will students learn?"
              />
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Curriculum Builder</h3>
            {courseData.modules.map((module, mIdx) => (
              <div key={mIdx} className="bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 p-4 rounded-xl">
                <div className="flex justify-between items-center mb-3">
                  <input 
                    className="bg-transparent font-bold text-gray-900 dark:text-white outline-none w-full" 
                    placeholder={`Module ${mIdx + 1} Title`}
                  />
                  <button className="text-red-500 hover:text-red-700"><Trash2 size={16} /></button>
                </div>
                <div className="space-y-2 pl-4 border-l-2 border-gray-200 dark:border-gray-700">
                   {module.lessons.map((lesson: any, lIdx: number) => (
                     <div key={lIdx} className="flex items-center gap-2">
                       <FileText size={14} className="text-gray-400" />
                       <input 
                         className="bg-transparent text-sm text-gray-700 dark:text-gray-300 outline-none w-full" 
                         placeholder="Lesson Title" 
                       />
                     </div>
                   ))}
                   <button onClick={() => addLesson(mIdx)} className="text-xs font-bold text-brand-600 flex items-center gap-1 mt-2">
                     <PlusCircle size={14} /> Add Lesson
                   </button>
                </div>
              </div>
            ))}
            <button onClick={addModule} className="w-full py-3 border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-xl text-gray-500 font-bold hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
              + Add Module
            </button>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-6 text-center">
             <div className="w-24 h-24 bg-green-100 dark:bg-green-900/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
               <CheckCircle size={48} />
             </div>
             <h3 className="text-xl font-bold text-gray-900 dark:text-white">Ready to Publish?</h3>
             <p className="text-gray-500 dark:text-gray-400 max-w-md mx-auto">
               Your course "{courseData.title}" is ready. You can save it as a draft or publish it immediately for students to enroll.
             </p>
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

const LiveClassManager = () => {
  const [topic, setTopic] = useState("");
  const [date, setDate] = useState("");
  const [classes, setClasses] = useState([
    { id: 1, topic: "Weekly Design Review", date: "2025-10-25T10:00", link: "https://meet.jit.si/ElimuTech-Review" },
    { id: 2, topic: "React Q&A Session", date: "2025-10-28T14:00", link: "https://meet.jit.si/ElimuTech-React" }
  ]);

  const scheduleClass = () => {
    if (!topic || !date) return;
    const cleanTopic = topic.replace(/\s/g, '');
    const newClass = {
      id: Date.now(),
      topic,
      date,
      link: `https://meet.jit.si/ElimuTech-${cleanTopic}-${Date.now()}`
    };
    setClasses([...classes, newClass]);
    setTopic("");
    setDate("");
  };

  return (
    <div className="animate-fade-in-up">
       <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">Live Classes</h1>
       
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
             {classes.map(cls => (
               <div key={cls.id} className={`${cardStyle} p-6 flex flex-col md:flex-row justify-between items-center gap-4`}>
                 <div>
                   <h3 className="font-bold text-gray-900 dark:text-white text-lg">{cls.topic}</h3>
                   <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-2">
                     <Calendar size={14} /> {new Date(cls.date).toLocaleString()}
                   </p>
                   <a href={cls.link} target="_blank" rel="noreferrer" className="text-brand-600 text-xs mt-1 block hover:underline truncate max-w-xs">{cls.link}</a>
                 </div>
                 <div className="flex gap-2">
                   <a href={cls.link} target="_blank" rel="noreferrer" className={btnPrimary}>
                     Start Class
                   </a>
                   <label className={btnSecondary + " cursor-pointer flex items-center gap-2"}>
                     <Upload size={16} /> Upload Recording
                     <input type="file" className="hidden" />
                   </label>
                 </div>
               </div>
             ))}
          </div>
       </div>
    </div>
  );
};

const InstructorDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Dashboard");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const menuItems = [
    { name: 'Dashboard', icon: LayoutDashboard },
    { name: 'My Courses', icon: BookOpen },
    { name: 'Create Course', icon: PlusCircle },
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
        return <LiveClassManager />;
      case 'My Courses':
        return (
          <div className="animate-fade-in-up">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">My Courses</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {initialCourses.map(course => (
                <div key={course.id} className={`${cardStyle} p-5 flex flex-col group`}>
                   <div className="aspect-video bg-gray-100 dark:bg-gray-700 rounded-xl mb-4 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <span className={`absolute top-2 right-2 px-2 py-1 rounded text-xs font-bold ${course.status === 'Published' ? 'bg-green-500 text-white' : 'bg-yellow-500 text-white'}`}>
                        {course.status}
                      </span>
                   </div>
                   <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-1">{course.title}</h3>
                   <p className="text-sm text-gray-500 mb-4">{course.students} Students Enrolled</p>
                   <div className="mt-auto flex gap-2">
                     <button className="flex-1 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-sm font-bold hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">Edit</button>
                     <button className="flex-1 py-2 rounded-lg bg-brand-600 text-white text-sm font-bold hover:bg-brand-700 transition-colors">Manage</button>
                   </div>
                </div>
              ))}
            </div>
          </div>
        );
      case 'Students':
        return (
          <div className="animate-fade-in-up">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">Students</h1>
            <div className={`${cardStyle} overflow-hidden`}>
               <table className="w-full text-left text-sm text-gray-600 dark:text-gray-300">
                 <thead className="bg-gray-50 dark:bg-gray-900/50 text-xs uppercase font-bold text-gray-500">
                   <tr>
                     <th className="px-6 py-4">Name</th>
                     <th className="px-6 py-4">Course</th>
                     <th className="px-6 py-4">Progress</th>
                     <th className="px-6 py-4">Grade</th>
                     <th className="px-6 py-4 text-right">Action</th>
                   </tr>
                 </thead>
                 <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                   {initialStudents.map((s) => (
                     <tr key={s.id} className="hover:bg-gray-50 dark:hover:bg-gray-800/50">
                       <td className="px-6 py-4 font-bold text-gray-900 dark:text-white">{s.name}</td>
                       <td className="px-6 py-4">{s.course}</td>
                       <td className="px-6 py-4">
                         <div className="flex items-center gap-2">
                           <div className="w-24 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                             <div className="h-full bg-brand-500" style={{ width: `${s.progress}%` }}></div>
                           </div>
                           <span className="text-xs">{s.progress}%</span>
                         </div>
                       </td>
                       <td className="px-6 py-4 font-bold">{s.grade}</td>
                       <td className="px-6 py-4 text-right">
                         <button className="text-brand-600 font-bold hover:underline">Message</button>
                       </td>
                     </tr>
                   ))}
                 </tbody>
               </table>
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
    </div>
  );
};

export default InstructorDashboard;