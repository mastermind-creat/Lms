import React, { useState } from 'react';
import { 
  LayoutDashboard, BookOpen, Heart, Video, MessageCircle, 
  Bell, User, Settings, Menu, X, LogOut, CheckCircle, 
  Clock, Award, PlayCircle, MoreVertical, Search, Zap
} from 'lucide-react';
import { Link } from 'react-router-dom';

const StudentDashboard: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('Dashboard');

  const menuItems = [
    { name: 'Dashboard', icon: LayoutDashboard },
    { name: 'My Courses', icon: BookOpen },
    { name: 'Wishlist', icon: Heart },
    { name: 'Live Classes', icon: Video },
    { name: 'Messages', icon: MessageCircle, badge: 3 },
    { name: 'Notifications', icon: Bell, badge: 5 },
    { name: 'Profile', icon: User },
    { name: 'Settings', icon: Settings },
  ];

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

  // Neumorphic Styles
  const cardStyle = "bg-gray-100 dark:bg-gray-800 rounded-2xl shadow-[6px_6px_12px_#d1d1d1,-6px_-6px_12px_#ffffff] dark:shadow-[6px_6px_12px_#0b0c15,-6px_-6px_12px_#1e293b] transition-colors duration-300";
  const iconButtonStyle = "p-3 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 shadow-[5px_5px_10px_#d1d1d1,-5px_-5px_10px_#ffffff] dark:shadow-[5px_5px_10px_#0b0c15,-5px_-5px_10px_#1e293b] hover:text-brand-500 dark:hover:text-brand-400 active:shadow-[inset_5px_5px_10px_#d1d1d1,inset_-5px_-5px_10px_#ffffff] dark:active:shadow-[inset_5px_5px_10px_#0b0c15,inset_-5px_-5px_10px_#1e293b] transition-all";
  const activeNavItemStyle = "text-brand-600 dark:text-brand-400 shadow-[inset_4px_4px_8px_#d1d1d1,inset_-4px_-4px_8px_#ffffff] dark:shadow-[inset_4px_4px_8px_#0b0c15,inset_-4px_-4px_8px_#1e293b]";
  const normalNavItemStyle = "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 hover:shadow-[4px_4px_8px_#d1d1d1,-4px_-4px_8px_#ffffff] dark:hover:shadow-[4px_4px_8px_#0b0c15,-4px_-4px_8px_#1e293b]";

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
          <div className={`flex flex-col items-center text-center p-6 ${cardStyle}`}>
            <div className="relative mb-3">
              <div className="w-20 h-20 rounded-full bg-gray-200 dark:bg-gray-700 p-1 shadow-[inset_3px_3px_6px_rgba(0,0,0,0.2),inset_-3px_-3px_6px_rgba(255,255,255,0.1)]">
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
                }}
                className={`w-full flex items-center justify-between p-3.5 rounded-xl text-sm font-bold transition-all duration-200 ${
                  activeTab === item.name ? activeNavItemStyle : normalNavItemStyle
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
          <button className={`w-full flex items-center gap-3 p-3.5 rounded-xl text-sm font-bold text-red-500 ${normalNavItemStyle}`}>
            <LogOut size={18} />
            <span>Log Out</span>
          </button>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-4 md:p-8 overflow-x-hidden">
          {/* Header Mobile Toggle */}
          <div className="lg:hidden flex items-center justify-between mb-6">
            <h1 className="text-xl font-bold text-gray-900 dark:text-white">Dashboard</h1>
            <button 
              onClick={() => setIsSidebarOpen(true)}
              className={iconButtonStyle}
            >
              <Menu size={20} />
            </button>
          </div>

          {/* Dashboard Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8 md:mb-12 animate-fade-in-up">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-1">
                Welcome back, Jane! 👋
              </h1>
              <p className="text-gray-500 dark:text-gray-400 text-sm md:text-base">
                You've completed <span className="text-brand-500 font-bold">80%</span> of your weekly goal. Keep it up!
              </p>
            </div>
            
            <div className="flex items-center gap-4">
               <div className={`hidden md:flex items-center px-4 py-2 rounded-xl text-gray-500 dark:text-gray-400 w-64 ${cardStyle} shadow-[inset_4px_4px_8px_#d1d1d1,inset_-4px_-4px_8px_#ffffff] dark:shadow-[inset_4px_4px_8px_#0b0c15,inset_-4px_-4px_8px_#1e293b]`}>
                 <Search size={18} />
                 <input type="text" placeholder="Search activity..." className="bg-transparent border-none outline-none ml-2 w-full text-sm" />
               </div>
               <button className={iconButtonStyle}>
                 <Bell size={20} />
               </button>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8 md:mb-12 animate-fade-in-up [animation-delay:100ms]">
            {stats.map((stat, index) => (
              <div key={index} className={`p-4 md:p-6 flex flex-col items-start gap-4 ${cardStyle}`}>
                <div className={`p-3 rounded-xl bg-gray-100 dark:bg-gray-800 ${stat.color} shadow-[5px_5px_10px_#d1d1d1,-5px_-5px_10px_#ffffff] dark:shadow-[5px_5px_10px_#0b0c15,-5px_-5px_10px_#1e293b]`}>
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
            {/* Continue Learning - Takes up 2 cols */}
            <div className="lg:col-span-2 space-y-6 animate-fade-in-up [animation-delay:200ms]">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                  <Zap className="text-brand-500" size={20} fill="currentColor" /> Continue Learning
                </h2>
                <Link to="/courses" className="text-sm font-bold text-brand-600 dark:text-brand-400 hover:underline">View All</Link>
              </div>

              {continueLearning.map((course) => (
                <div key={course.id} className={`p-4 md:p-6 flex flex-col md:flex-row gap-6 items-center ${cardStyle} hover:scale-[1.01] hover:shadow-[8px_8px_16px_#d1d1d1,-8px_-8px_16px_#ffffff] dark:hover:shadow-[8px_8px_16px_#0b0c15,-8px_-8px_16px_#1e293b] transition-all cursor-pointer group`}>
                   <div className="relative w-full md:w-48 aspect-video rounded-xl overflow-hidden shadow-inner">
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
                       <button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200">
                         <MoreVertical size={20} />
                       </button>
                     </div>

                     <div className="mb-4">
                       <div className="flex justify-between text-xs font-bold mb-1.5">
                         <span className="text-gray-500 dark:text-gray-400">Next: {course.nextLesson}</span>
                         <span className="text-brand-600 dark:text-brand-400">{course.progress}%</span>
                       </div>
                       <div className="h-2.5 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden shadow-inner">
                         <div 
                           className="h-full bg-brand-500 rounded-full relative"
                           style={{ width: `${course.progress}%` }}
                         >
                           <div className="absolute inset-0 bg-white/30 w-full animate-scroll"></div>
                         </div>
                       </div>
                     </div>

                     <button className="w-full md:w-auto px-6 py-2 rounded-lg bg-brand-600 text-white font-bold text-sm shadow-lg shadow-brand-500/30 hover:bg-brand-700 transition-colors">
                       Resume Lesson
                     </button>
                   </div>
                </div>
              ))}
            </div>

            {/* Sidebar Widgets */}
            <div className="space-y-8 animate-fade-in-up [animation-delay:300ms]">
               {/* Quick Activity */}
               <div className={`p-6 ${cardStyle}`}>
                 <h3 className="font-bold text-gray-900 dark:text-white mb-4">Recent Activity</h3>
                 <div className="space-y-4 relative">
                   {/* Timeline Line */}
                   <div className="absolute left-2.5 top-2 bottom-2 w-0.5 bg-gray-200 dark:bg-gray-700"></div>
                   
                   {[
                     { text: "Finished 'Intro to React'", time: "2h ago", icon: CheckCircle, color: "text-green-500" },
                     { text: "Joined 'Design Systems' Live", time: "5h ago", icon: Video, color: "text-red-500" },
                     { text: "Earned 'CSS Master' Badge", time: "1d ago", icon: Award, color: "text-yellow-500" },
                     { text: "Posted in 'Help' Forum", time: "2d ago", icon: MessageCircle, color: "text-blue-500" },
                   ].map((item, i) => (
                     <div key={i} className="flex gap-4 relative">
                       <div className={`w-6 h-6 rounded-full bg-gray-100 dark:bg-gray-800 border-4 border-gray-50 dark:border-gray-900 z-10 flex items-center justify-center ${item.color}`}>
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
                  
                  <div className="w-12 h-12 bg-red-100 dark:bg-red-900/20 text-red-500 rounded-xl flex items-center justify-center mb-4 shadow-sm">
                    <Video size={24} />
                  </div>
                  
                  <h3 className="font-bold text-gray-900 dark:text-white mb-1">Weekly Design Review</h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">Starts in 35 minutes</p>
                  
                  <div className="flex -space-x-2 mb-6">
                    {[1,2,3,4].map(i => (
                      <img key={i} className="w-8 h-8 rounded-full border-2 border-white dark:border-gray-800" src={`https://i.pravatar.cc/100?img=${i+10}`} alt="User" />
                    ))}
                    <div className="w-8 h-8 rounded-full border-2 border-white dark:border-gray-800 bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-[10px] font-bold text-gray-600 dark:text-gray-300">+42</div>
                  </div>

                  <button className="w-full py-2.5 rounded-xl border-2 border-red-500 text-red-500 font-bold text-sm hover:bg-red-500 hover:text-white transition-all">
                    Join Session
                  </button>
               </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default StudentDashboard;