
import React, { useState, useEffect } from 'react';
import { 
  LayoutDashboard, Users, BookOpen, DollarSign, Video, 
  MessageSquare, Megaphone, Award, BarChart2, Settings, 
  FileText, Shield, LogOut, Menu, Search, CheckCircle, 
  XCircle, AlertTriangle, Eye, MoreVertical, Filter, 
  Download, ChevronRight, TrendingUp, Lock, Unlock, 
  RefreshCw, Trash2, Edit3, Save, Bell, Smartphone,
  ChevronDown, PlusCircle, CreditCard, UserPlus, Mail,
  Globe, Server, Percent, ToggleLeft, ToggleRight, List,
  Image as ImageIcon, Calendar, Clock, Star, HelpCircle, Quote, MapPin, Key, Plus,
  Facebook, Twitter, Instagram, Linkedin, GraduationCap, Briefcase, Activity, PieChart, X
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { courses as initialCoursesData } from '../data/courses';

// --- Shared Styles ---
const cardStyle = "bg-white dark:bg-gray-800 rounded-2xl shadow-[6px_6px_12px_#e5e7eb,-6px_-6px_12px_#ffffff] dark:shadow-[6px_6px_12px_#0b0c15,-6px_-6px_12px_#1e293b] transition-colors duration-300 border border-gray-100 dark:border-gray-700";
const btnPrimary = "px-6 py-2.5 rounded-xl bg-brand-600 text-white font-bold text-sm shadow-[4px_4px_10px_rgba(243,111,33,0.3)] hover:bg-brand-700 active:shadow-none hover:-translate-y-0.5 transition-all flex items-center gap-2 justify-center";
const btnSecondary = "px-6 py-2.5 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-bold text-sm shadow-[4px_4px_8px_#d1d5db,-4px_-4px_8px_#ffffff] dark:shadow-[4px_4px_8px_#0b0c15,-4px_-4px_8px_#1e293b] hover:bg-gray-200 dark:hover:bg-gray-700 active:shadow-[inset_2px_2px_4px_#bebebe,inset_-2px_-2px_4px_#ffffff] dark:active:shadow-[inset_2px_2px_4px_#0b0c15,inset_-2px_-2px_4px_#333333] transition-all flex items-center gap-2 justify-center";
const inputStyle = "w-full bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-brand-500 transition-all text-gray-900 dark:text-white";
const badgeStyle = "px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wide";

// --- Mock Data ---
const initialUsers = [
  { id: 1, name: "Kevin Omondi", email: "kevin@elimutech.ke", role: "Instructor", status: "Active", joined: "2024-01-15", earnings: 450000, courses: 5, bio: "Senior Software Engineer specialized in Fintech." },
  { id: 2, name: "Jane Doe", email: "jane@student.ke", role: "Student", status: "Active", joined: "2024-02-20", spent: 15000, courses: 3, bio: "Aspiring Data Scientist." },
  { id: 3, name: "John Smith", email: "john@student.ke", role: "Student", status: "Suspended", joined: "2024-03-10", spent: 0, courses: 0, bio: "Student at UoN." },
  { id: 4, name: "Emily Roth", email: "emily@instructor.ke", role: "Instructor", status: "Pending", joined: "2024-10-25", earnings: 0, courses: 1, bio: "Digital Marketing Expert." },
  { id: 5, name: "Michael Scott", email: "m.scott@instructor.ke", role: "Instructor", status: "Active", joined: "2024-05-12", earnings: 120000, courses: 2, bio: "Regional Manager & Leadership Coach." },
  { id: 6, name: "Dwight Schrute", email: "dwight@student.ke", role: "Student", status: "Active", joined: "2024-06-15", spent: 45000, courses: 5, bio: "Assistant to the Regional Manager." },
  { id: 7, name: "Destiny Centre", email: "info@destiny.org", role: "Instructor", status: "Active", joined: "2023-11-01", earnings: 850000, courses: 4, bio: "Theological and Leadership Training Institute." },
];

const initialWithdrawals = [
  { id: "WTH-001", instructor: "Kevin Omondi", amount: 25000, method: "M-PESA", date: "2025-10-24", status: "Pending" },
  { id: "WTH-002", instructor: "Maria Garcia", amount: 12000, method: "Bank Transfer", date: "2025-10-23", status: "Approved" },
  { id: "WTH-003", instructor: "James Wilson", amount: 50000, method: "M-PESA", date: "2025-10-20", status: "Paid" },
];

const categoriesData = [
  { id: 1, name: "Development", subcategories: ["Web Development", "Mobile Apps", "Game Dev"] },
  { id: 2, name: "Business", subcategories: ["Entrepreneurship", "Strategy", "Leadership"] },
  { id: 3, name: "Design", subcategories: ["UI/UX", "Graphic Design", "3D Modeling"] },
];

// --- Sub-Components ---

const StatCard = ({ title, value, subtext, icon: Icon, color }: any) => (
  <div className={`${cardStyle} p-6 flex flex-col justify-between h-full`}>
    <div className="flex justify-between items-start mb-4">
      <div className={`p-3 rounded-2xl ${color} bg-opacity-10 text-${color.split('-')[1]}-600 dark:text-${color.split('-')[1]}-400`}>
        <Icon size={24} />
      </div>
      <span className="text-xs font-bold text-gray-400 bg-gray-100 dark:bg-gray-900 px-2 py-1 rounded-lg">This Month</span>
    </div>
    <div>
      <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-1">{value}</h3>
      <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">{title}</p>
      {subtext && <p className="text-xs text-green-500 font-bold mt-2 flex items-center gap-1"><TrendingUp size={12} /> {subtext}</p>}
    </div>
  </div>
);

const UserDetailModal = ({ isOpen, onClose, user, userCourses, onToggleCourseStatus }: any) => {
  if (!isOpen || !user) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose}></div>
      <div className="relative bg-white dark:bg-gray-900 w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden animate-scale-up flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="relative h-32 bg-brand-600">
          <button onClick={onClose} className="absolute top-4 right-4 p-2 bg-black/20 text-white rounded-full hover:bg-black/40 transition-colors">
            <X size={20} />
          </button>
          <div className="absolute -bottom-10 left-8">
            <div className="w-24 h-24 rounded-full border-4 border-white dark:border-gray-900 bg-gray-200 flex items-center justify-center text-3xl font-bold text-gray-500 overflow-hidden">
               <img src={`https://i.pravatar.cc/150?u=${user.name}`} alt={user.name} className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        <div className="pt-12 px-8 pb-8 overflow-y-auto">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{user.name}</h2>
              <p className="text-brand-600 dark:text-brand-400 font-medium text-sm">{user.email}</p>
              <div className="flex gap-2 mt-2">
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-xs font-bold uppercase tracking-wider text-gray-600 dark:text-gray-300">{user.role}</span>
                <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${user.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>{user.status}</span>
              </div>
            </div>
            <div className="text-right">
              <p className="text-xs text-gray-500 uppercase font-bold">Joined</p>
              <p className="font-medium text-gray-900 dark:text-white">{user.joined}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
              <p className="text-xs text-gray-500 uppercase font-bold mb-1">{user.role === 'Instructor' ? 'Total Earnings' : 'Total Spent'}</p>
              <p className="text-xl font-bold text-gray-900 dark:text-white">KES {((user.role === 'Instructor' ? user.earnings : user.spent) || 0).toLocaleString()}</p>
            </div>
            <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
              <p className="text-xs text-gray-500 uppercase font-bold mb-1">{user.role === 'Instructor' ? 'Courses Taught' : 'Enrolled'}</p>
              <p className="text-xl font-bold text-gray-900 dark:text-white">{userCourses.length}</p>
            </div>
          </div>

          {user.role === 'Instructor' && (
            <div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <BookOpen size={20} className="text-brand-500" /> Manage Courses
              </h3>
              <div className="space-y-3">
                {userCourses.length > 0 ? userCourses.map((course: any) => (
                  <div key={course.id} className="flex items-center justify-between p-3 border border-gray-100 dark:border-gray-700 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-gray-200 overflow-hidden">
                        <img src={course.image} alt="" className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <p className="font-bold text-sm text-gray-900 dark:text-white">{course.title}</p>
                        <p className="text-xs text-gray-500">{course.students} Students</p>
                      </div>
                    </div>
                    
                    <button 
                      onClick={() => onToggleCourseStatus(course.id)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                        course.status !== 'Suspended' 
                          ? 'bg-green-100 text-green-700 hover:bg-red-100 hover:text-red-700' 
                          : 'bg-red-100 text-red-700 hover:bg-green-100 hover:text-green-700'
                      }`}
                    >
                      {course.status !== 'Suspended' ? 'Active' : 'Suspended'}
                    </button>
                  </div>
                )) : (
                  <p className="text-gray-500 text-sm italic">No courses found for this instructor.</p>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const UserManagementView = ({ 
  userType, 
  users, 
  courses, 
  onToggleUserStatus, 
  onDeleteUser, 
  onToggleCourseStatus 
}: any) => {
  const [activeFilter, setActiveFilter] = useState("All"); 
  const [selectedUser, setSelectedUser] = useState<any>(null);

  // Filters specific to type
  const filters = userType === 'Instructor' 
    ? ['All', 'Active', 'Applications'] 
    : ['All', 'Active'];

  const filteredUsers = users.filter((u: any) => {
    if (u.role !== userType) return false;
    if (activeFilter === 'All') return true;
    if (activeFilter === 'Active') return u.status === 'Active';
    if (activeFilter === 'Applications') return u.status === 'Pending';
    return true;
  });

  const getUserCourses = (userName: string) => {
    return courses.filter((c: any) => c.instructor === userName);
  };

  return (
    <div className="space-y-6 animate-fade-in-up">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{userType} Management</h2>
        <div className="flex gap-2 bg-white dark:bg-gray-800 p-1 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm">
          {filters.map(f => (
            <button 
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${activeFilter === f ? 'bg-brand-600 text-white shadow-sm' : 'text-gray-500 hover:bg-gray-50 dark:hover:bg-gray-700'}`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <div className={`${cardStyle} overflow-hidden`}>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-gray-600 dark:text-gray-300 min-w-[800px]">
            <thead className="bg-gray-50 dark:bg-gray-900/50 text-xs uppercase font-bold text-gray-500">
              <tr>
                <th className="px-6 py-4">User</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">{userType === 'Instructor' ? 'Earnings' : 'Spent'}</th>
                <th className="px-6 py-4">{userType === 'Instructor' ? 'Courses Created' : 'Courses Enrolled'}</th>
                <th className="px-6 py-4">Joined</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
              {filteredUsers.length > 0 ? filteredUsers.map((user: any) => (
                <tr key={user.id} className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-brand-100 dark:bg-brand-900/30 text-brand-600 flex items-center justify-center font-bold overflow-hidden border-2 border-white dark:border-gray-700 shadow-sm">
                        <img src={`https://i.pravatar.cc/150?u=${user.name}`} alt={user.name} className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <p className="font-bold text-gray-900 dark:text-white">{user.name}</p>
                        <p className="text-xs text-gray-500">{user.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`${badgeStyle} ${user.status === 'Active' ? 'bg-green-100 text-green-700' : user.status === 'Pending' ? 'bg-yellow-100 text-yellow-700' : 'bg-red-100 text-red-700'}`}>
                      {user.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 font-mono">
                    {userType === 'Instructor' ? `KES ${(user.earnings || 0).toLocaleString()}` : `KES ${(user.spent || 0).toLocaleString()}`}
                  </td>
                  <td className="px-6 py-4">
                    {user.courses}
                  </td>
                  <td className="px-6 py-4 text-xs">{user.joined}</td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end gap-2">
                      <button 
                        onClick={() => setSelectedUser(user)}
                        className="p-2 bg-gray-100 dark:bg-gray-800 hover:bg-blue-50 dark:hover:bg-blue-900/20 text-blue-600 rounded-lg transition-colors" 
                        title="View Details"
                      >
                        <Eye size={16} />
                      </button>
                      <button 
                        onClick={() => onToggleUserStatus(user.id)}
                        className={`p-2 bg-gray-100 dark:bg-gray-800 rounded-lg transition-colors ${user.status === 'Active' ? 'hover:bg-yellow-50 text-yellow-600' : 'hover:bg-green-50 text-green-600'}`} 
                        title={user.status === 'Active' ? 'Deactivate' : 'Activate/Approve'}
                      >
                        {user.status === 'Active' ? <Lock size={16} /> : <CheckCircle size={16} />}
                      </button>
                      <button 
                        onClick={() => onDeleteUser(user.id)}
                        className="p-2 bg-gray-100 dark:bg-gray-800 hover:bg-red-50 dark:hover:bg-red-900/20 text-red-600 rounded-lg transition-colors" 
                        title="Delete"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              )) : (
                <tr>
                  <td colSpan={6} className="px-6 py-8 text-center text-gray-500">No {userType.toLowerCase()}s found for this filter.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {selectedUser && (
        <UserDetailModal 
          isOpen={!!selectedUser}
          onClose={() => setSelectedUser(null)}
          user={selectedUser}
          userCourses={getUserCourses(selectedUser.name)}
          onToggleCourseStatus={onToggleCourseStatus}
        />
      )}
    </div>
  );
};

const FinancialsView = () => {
  const [withdrawals, setWithdrawals] = useState(initialWithdrawals);

  const handleApprove = (id: string) => {
    setWithdrawals(withdrawals.map(w => w.id === id ? { ...w, status: 'Approved' } : w));
  };

  return (
    <div className="space-y-6 animate-fade-in-up">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Financial Overview</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard title="Total Revenue" value="KES 45M" subtext="+8% vs last month" icon={DollarSign} color="bg-green-500" />
        <StatCard title="Pending Withdrawals" value="KES 120k" subtext="5 requests" icon={Clock} color="bg-yellow-500" />
        <StatCard title="Total Payouts" value="KES 32M" subtext="All time" icon={CheckCircle} color="bg-blue-500" />
      </div>

      <div className={`${cardStyle} overflow-hidden`}>
        <div className="p-6 border-b border-gray-100 dark:border-gray-700 flex justify-between items-center">
          <h3 className="font-bold text-lg text-gray-900 dark:text-white">Withdrawal Requests</h3>
          <button className={btnSecondary}><Download size={16} /> Export CSV</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-gray-600 dark:text-gray-300">
            <thead className="bg-gray-50 dark:bg-gray-900/50 text-xs uppercase font-bold text-gray-500">
              <tr>
                <th className="px-6 py-4">ID</th>
                <th className="px-6 py-4">Instructor</th>
                <th className="px-6 py-4">Amount</th>
                <th className="px-6 py-4">Method</th>
                <th className="px-6 py-4">Date</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
              {withdrawals.map((w) => (
                <tr key={w.id} className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                  <td className="px-6 py-4 font-mono text-xs">{w.id}</td>
                  <td className="px-6 py-4 font-bold text-gray-900 dark:text-white">{w.instructor}</td>
                  <td className="px-6 py-4 font-bold">KES {w.amount.toLocaleString()}</td>
                  <td className="px-6 py-4">{w.method}</td>
                  <td className="px-6 py-4 text-xs">{w.date}</td>
                  <td className="px-6 py-4">
                    <span className={`${badgeStyle} ${w.status === 'Paid' ? 'bg-green-100 text-green-700' : w.status === 'Pending' ? 'bg-yellow-100 text-yellow-700' : 'bg-blue-100 text-blue-700'}`}>
                      {w.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    {w.status === 'Pending' && (
                      <button 
                        onClick={() => handleApprove(w.id)}
                        className="text-green-600 font-bold text-xs hover:underline"
                      >
                        Approve
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const CourseManagementView = ({ filter = "All", onViewCourse, coursesList, onSoftDelete, onRestore }: any) => {
  const filteredCourses = coursesList.filter((c: any) => {
    if (filter === 'All') return c.status !== 'Deleted';
    if (filter === 'Pending') return c.status === 'Pending Approval';
    if (filter === 'Deleted') return c.status === 'Deleted';
    return true;
  });
  
  // Calculations
  const totalEnrollments = coursesList.reduce((acc: number, curr: any) => acc + curr.students, 0);
  const totalRevenue = coursesList.reduce((acc: number, curr: any) => {
     const price = parseInt(curr.price.replace(/[^0-9]/g, '') || '0');
     return acc + (price * curr.students);
  }, 0);

  const recentEnrollments = [
    { name: "Alice Wambui", course: "Advanced React Patterns", time: "2 mins ago" },
    { name: "Peter Kamau", course: "Python for Data Science", time: "15 mins ago" },
    { name: "John Doe", course: "UI/UX Principles", time: "1 hour ago" },
  ];

  return (
    <div className="space-y-6 animate-fade-in-up">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard title="Total Enrollments" value={totalEnrollments.toLocaleString()} icon={Users} color="bg-blue-500" trend="+5%" />
        <StatCard title="Total Revenue" value={`KES ${totalRevenue.toLocaleString()}`} icon={DollarSign} color="bg-green-500" trend="+12%" />
        <div className={`${cardStyle} p-6`}>
           <h3 className="font-bold text-gray-900 dark:text-white mb-4 text-sm uppercase tracking-wider">Recent Enrollments</h3>
           <div className="space-y-3">
             {recentEnrollments.map((enr, i) => (
               <div key={i} className="flex justify-between items-center text-sm border-b border-gray-100 dark:border-gray-700 last:border-0 pb-2 last:pb-0">
                 <div>
                   <p className="font-bold text-gray-800 dark:text-gray-200">{enr.name}</p>
                   <p className="text-xs text-gray-500 truncate w-32">{enr.course}</p>
                 </div>
                 <span className="text-xs text-gray-400">{enr.time}</span>
               </div>
             ))}
           </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{filter === "All" ? "All Courses" : filter + " Courses"}</h2>
        <div className="flex gap-2">
           <button className={btnSecondary}><Filter size={16} /> Filter</button>
           <button className={btnPrimary}><Download size={16} /> Export</button>
        </div>
      </div>

      <div className={`${cardStyle} overflow-hidden`}>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-gray-600 dark:text-gray-300 min-w-[800px]">
            <thead className="bg-gray-50 dark:bg-gray-900/50 text-xs uppercase font-bold text-gray-500">
              <tr>
                <th className="px-6 py-4">Course</th>
                <th className="px-6 py-4">Instructor</th>
                <th className="px-6 py-4">Price</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
              {filteredCourses.map((course: any) => (
                <tr key={course.id} className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-lg bg-gray-200 overflow-hidden">
                        <img src={course.image} alt="" className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <span className="font-bold text-gray-900 dark:text-white line-clamp-1 max-w-[200px]">{course.title}</span>
                        <span className="text-xs text-gray-500">{course.category}</span>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">{course.instructor}</td>
                  <td className="px-6 py-4 font-mono font-bold">{course.price}</td>
                  <td className="px-6 py-4">
                    <span className={`${badgeStyle} ${course.status === 'Suspended' ? 'bg-red-100 text-red-700' : 'bg-blue-100 text-blue-700'}`}>{course.status || 'Published'}</span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end gap-2">
                      <button className="px-3 py-1.5 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-lg text-xs font-bold hover:bg-gray-200 transition-colors" onClick={() => onViewCourse(course)}>
                        View
                      </button>
                      {filter !== 'Deleted' ? (
                        <button onClick={() => onSoftDelete(course.id)} className="p-1.5 bg-red-50 text-red-500 rounded-lg hover:bg-red-100 transition-colors" title="Soft Delete">
                          <Trash2 size={16} />
                        </button>
                      ) : (
                        <button onClick={() => onRestore(course.id)} className="p-1.5 bg-green-50 text-green-500 rounded-lg hover:bg-green-100 transition-colors" title="Restore">
                          <RefreshCw size={16} />
                        </button>
                      )}
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
};

const CourseDetailView = ({ course, onBack }: { course: any, onBack: () => void }) => {
  return (
    <div className="animate-fade-in-up space-y-6">
      <button onClick={onBack} className="flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-brand-600 transition-colors">
        <ChevronRight size={16} className="rotate-180" /> Back to Courses
      </button>

      {/* Header Info */}
      <div className={`${cardStyle} p-6`}>
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-72 aspect-video rounded-xl overflow-hidden bg-gray-100 flex-shrink-0 relative group">
            <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <button className="px-4 py-2 bg-white/20 backdrop-blur text-white rounded-lg font-bold text-sm">Change Image</button>
            </div>
          </div>
          
          <div className="flex-1">
            <div className="flex justify-between items-start mb-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className={`${badgeStyle} ${course.id % 2 === 0 ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                    Published
                  </span>
                  <span className="text-xs text-gray-500 font-bold uppercase">{course.category}</span>
                </div>
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{course.title}</h1>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span className="flex items-center gap-1"><Users size={16} /> {course.students} Students</span>
                  <span className="flex items-center gap-1"><Clock size={16} /> {course.duration}</span>
                  <span className="flex items-center gap-1"><Star size={16} className="text-yellow-500 fill-current" /> {course.rating}</span>
                </div>
              </div>
              <div className="text-right">
                <h2 className="text-2xl font-bold text-brand-600">KES {course.price}</h2>
                <p className="text-xs text-gray-400 line-through">KES {parseInt(course.price.replace(/[^0-9]/g, '')) * 1.2}</p>
              </div>
            </div>

            <p className="text-gray-600 dark:text-gray-300 text-sm mb-6 leading-relaxed">
              {course.description}
            </p>

            <div className="flex items-center gap-3 pt-4 border-t border-gray-100 dark:border-gray-700">
              <img src={`https://i.pravatar.cc/150?u=${course.instructor}`} alt="" className="w-10 h-10 rounded-full" />
              <div>
                <p className="text-sm font-bold text-gray-900 dark:text-white">{course.instructor}</p>
                <p className="text-xs text-gray-500">Course Instructor</p>
              </div>
              <div className="ml-auto flex gap-2">
                <button className="px-4 py-2 bg-yellow-100 text-yellow-700 rounded-lg text-xs font-bold hover:bg-yellow-200">Suspend</button>
                <button className={btnPrimary + " py-2 text-xs"}>Edit Course</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions & Meta */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className={`${cardStyle} p-6 lg:col-span-2`}>
          <h3 className="font-bold text-gray-900 dark:text-white mb-4">Course Content</h3>
          <div className="space-y-2">
            {course.syllabus?.map((topic: string, i: number) => (
              <div key={i} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-900 rounded-lg group hover:bg-white dark:hover:bg-gray-800 border border-transparent hover:border-gray-200 dark:hover:border-gray-700 transition-all">
                <div className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded bg-brand-100 text-brand-600 flex items-center justify-center text-xs font-bold">{i+1}</span>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{topic}</span>
                </div>
                <span className="text-xs text-gray-400">Video • 12m</span>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className={`${cardStyle} p-6`}>
            <h3 className="font-bold text-gray-900 dark:text-white mb-4">Quick Actions</h3>
            <div className="space-y-2">
              <button className="w-full text-left px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 text-sm font-medium transition-colors flex items-center gap-3">
                <Edit3 size={16} /> Edit Details
              </button>
              <button className="w-full text-left px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 text-sm font-medium transition-colors flex items-center gap-3">
                <Users size={16} /> Manage Enrollments
              </button>
              <button className="w-full text-left px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 text-sm font-medium transition-colors flex items-center gap-3">
                <FileText size={16} /> View Reports
              </button>
              <button className="w-full text-left px-4 py-3 rounded-xl bg-red-50 dark:bg-red-900/10 hover:bg-red-100 dark:hover:bg-red-900/20 text-red-600 text-sm font-medium transition-colors flex items-center gap-3">
                <Trash2 size={16} /> Soft Delete
              </button>
            </div>
          </div>

          <div className={`${cardStyle} p-6`}>
            <h3 className="font-bold text-gray-900 dark:text-white mb-4">Metadata</h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-500">Created</span>
                <span className="font-medium dark:text-white">Jan 12, 2024</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Last Updated</span>
                <span className="font-medium dark:text-white">2 days ago</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Certificate</span>
                <span className="font-medium text-green-500">Enabled</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const MessagesView = () => (
  <div className="animate-fade-in-up">
    <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">Support Messages</h1>
    <div className={cardStyle}>
      <div className="divide-y divide-gray-100 dark:divide-gray-700">
        {[1, 2, 3].map(i => (
          <div key={i} className="p-4 hover:bg-gray-50 dark:hover:bg-gray-800/50 cursor-pointer transition-colors flex gap-4">
            <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold flex-shrink-0">
              JD
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex justify-between mb-1">
                <h4 className="font-bold text-gray-900 dark:text-white text-sm">Jane Doe <span className="font-normal text-gray-500 ml-2">Ticket #492{i}</span></h4>
                <span className="text-xs text-gray-400">2h ago</span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300 truncate">I'm having trouble accessing the quiz for Module 3. It keeps loading...</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const InviteFriendsView = () => (
  <div className="max-w-2xl mx-auto animate-fade-in-up text-center py-12">
    <div className="w-20 h-20 bg-brand-100 text-brand-600 rounded-full flex items-center justify-center mx-auto mb-6">
      <UserPlus size={40} />
    </div>
    <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Grow the Community</h1>
    <p className="text-gray-500 mb-8">Invite fellow admins or instructors to join the platform securely.</p>
    
    <div className={cardStyle + " p-8 text-left"}>
      <label className="text-xs font-bold text-gray-500 uppercase mb-2 block">Email Address</label>
      <div className="flex gap-2">
        <input placeholder="colleague@elimutech.ke" className={inputStyle} />
        <button className={btnPrimary}>Send Invite</button>
      </div>
      <p className="text-xs text-gray-400 mt-4 text-center">Invites expire in 48 hours.</p>
    </div>
  </div>
);

const LiveClassesView = () => (
  <div className="animate-fade-in-up">
    <div className="flex justify-between items-center mb-6">
      <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Live Sessions</h1>
      <button className={btnPrimary}><PlusCircle size={18} /> Schedule Class</button>
    </div>
    
    <div className="space-y-4">
      {[1, 2, 3].map(i => (
        <div key={i} className={cardStyle + " p-6 flex items-center justify-between"}>
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-red-100 text-red-600 rounded-xl flex flex-col items-center justify-center">
              <span className="text-xs font-bold uppercase">OCT</span>
              <span className="text-xl font-bold">2{4+i}</span>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 dark:text-white text-lg">Advanced React Q&A</h3>
              <p className="text-sm text-gray-500">Instructor: Kevin Omondi • 10:00 AM</p>
            </div>
          </div>
          <div className="flex gap-2">
             <button className={btnSecondary}>Edit</button>
             <button className="px-4 py-2 bg-red-600 text-white rounded-xl font-bold text-sm hover:bg-red-700">Join Host</button>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const CategoryManager = () => {
  const [categories, setCategories] = useState(categoriesData);
  const [newCatName, setNewCatName] = useState("");

  const addCategory = () => {
    if (!newCatName.trim()) return;
    const newCat = {
      id: Date.now(),
      name: newCatName,
      subcategories: []
    };
    setCategories([...categories, newCat]);
    setNewCatName("");
  };

  const removeCategory = (id: number) => {
    setCategories(categories.filter(c => c.id !== id));
  };

  return (
    <div className="space-y-6">
      <div className="flex gap-4">
        <input 
          value={newCatName}
          onChange={(e) => setNewCatName(e.target.value)}
          placeholder="New Category Name"
          className={inputStyle}
        />
        <button onClick={addCategory} className={btnPrimary}>Add Category</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {categories.map(cat => (
          <div key={cat.id} className="border border-gray-200 dark:border-gray-700 rounded-xl p-4 flex flex-col justify-between group">
            <div className="flex justify-between items-center mb-2">
              <h4 className="font-bold text-gray-900 dark:text-white">{cat.name}</h4>
              <button onClick={() => removeCategory(cat.id)} className="text-red-500 opacity-0 group-hover:opacity-100 transition-opacity p-1 hover:bg-red-50 dark:hover:bg-red-900/20 rounded">
                <Trash2 size={16} />
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              {cat.subcategories.map((sub, idx) => (
                <span key={idx} className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 px-2 py-1 rounded">
                  {sub}
                </span>
              ))}
              <button className="text-xs text-brand-600 font-bold px-2 py-1 hover:bg-brand-50 rounded flex items-center gap-1">
                <Plus size={12} /> Add Sub
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// --- Settings View (Updated Detailed Version) ---
const SettingsView = () => {
  const [activeTab, setActiveTab] = useState("General Info");

  // Mock Data States
  const [slides, setSlides] = useState([
    { id: 1, title: "Future of Learning", subtitle: "Master skills driving the Silicon Savannah", image: "/hero1.jpg" },
    { id: 2, title: "Build Real Projects", subtitle: "From zero to deployed in weeks", image: "/hero2.jpg" }
  ]);
  const [partners, setPartners] = useState([
    { id: 1, name: "Safaricom" }, { id: 2, name: "Microsoft" }, { id: 3, name: "Google" }
  ]);
  const [faqs, setFaqs] = useState([
    { id: 1, q: "How do I enroll?", a: "Click the enroll button on any course page." }
  ]);

  const menuGroups = [
    {
      title: "App Settings",
      items: [
        { name: "General Info", icon: Globe },
        { name: "Hero Slider", icon: ImageIcon },
        { name: "Partners", icon: Users },
        { name: "FAQs", icon: HelpCircle },
        { name: "Testimonials", icon: Quote },
      ]
    },
    {
      title: "System Configuration",
      items: [
        { name: "Mail Settings", icon: Mail },
        { name: "Payment Gateways", icon: CreditCard },
        { name: "Google Integration", icon: Globe },
        { name: "Security", icon: Shield },
      ]
    },
    {
      title: "Platform Logic",
      items: [
        { name: "Categories", icon: List },
        { name: "Commissions", icon: Percent },
        { name: "Notifications", icon: Bell },
      ]
    }
  ];

  const renderContent = () => {
    switch (activeTab) {
      // --- APP SETTINGS ---
      case "General Info":
        return (
          <div className={cardStyle + " p-8 space-y-8"}>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">General Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="text-xs font-bold text-gray-500 uppercase mb-1 block">App Name</label>
                <input defaultValue="ElimuTech" className={inputStyle} />
              </div>
              <div>
                <label className="text-xs font-bold text-gray-500 uppercase mb-1 block">Support Email</label>
                <input defaultValue="support@elimutech.ke" className={inputStyle} />
              </div>
              <div>
                <label className="text-xs font-bold text-gray-500 uppercase mb-1 block">Contact Phone</label>
                <input defaultValue="+254 700 000 000" className={inputStyle} />
              </div>
              <div>
                <label className="text-xs font-bold text-gray-500 uppercase mb-1 block">Physical Address</label>
                <input defaultValue="Westlands, Nairobi" className={inputStyle} />
              </div>
            </div>

            <div className="pt-6 border-t border-gray-100 dark:border-gray-700">
              <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-4">Social Media Handles</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <Facebook size={20} className="text-blue-600" />
                  <input placeholder="Facebook URL" className={inputStyle} />
                </div>
                <div className="flex items-center gap-2">
                  <Twitter size={20} className="text-sky-500" />
                  <input placeholder="Twitter Handle" className={inputStyle} />
                </div>
                <div className="flex items-center gap-2">
                  <Instagram size={20} className="text-pink-600" />
                  <input placeholder="Instagram URL" className={inputStyle} />
                </div>
                <div className="flex items-center gap-2">
                  <Linkedin size={20} className="text-blue-700" />
                  <input placeholder="LinkedIn URL" className={inputStyle} />
                </div>
              </div>
            </div>
            <div className="flex justify-end">
               <button className={btnPrimary}>Save Changes</button>
            </div>
          </div>
        );

      case "Hero Slider":
        return (
          <div className={cardStyle + " p-8"}>
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Manage Hero Slider</h3>
              <button className={btnPrimary + " py-2 text-xs flex items-center gap-2"}><Plus size={16} /> Add Slide</button>
            </div>
            <div className="space-y-4">
              {slides.map((slide) => (
                <div key={slide.id} className="flex gap-4 p-4 border border-gray-200 dark:border-gray-700 rounded-xl items-center">
                  <div className="w-24 h-16 bg-gray-200 rounded-lg shrink-0 overflow-hidden">
                     <div className="w-full h-full bg-gray-300 flex items-center justify-center text-gray-500 text-xs">Image</div>
                  </div>
                  <div className="flex-1">
                    <input defaultValue={slide.title} className="font-bold text-sm bg-transparent w-full outline-none mb-1 text-gray-900 dark:text-white" />
                    <input defaultValue={slide.subtitle} className="text-xs text-gray-500 bg-transparent w-full outline-none" />
                  </div>
                  <button className="text-red-500 p-2 hover:bg-red-50 rounded-lg"><Trash2 size={16} /></button>
                </div>
              ))}
            </div>
          </div>
        );

      case "Partners":
        return (
          <div className={cardStyle + " p-8"}>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Trusted Partners</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              {partners.map(p => (
                <div key={p.id} className="p-4 border border-gray-200 dark:border-gray-700 rounded-xl flex items-center justify-between group">
                  <span className="font-bold text-sm text-gray-900 dark:text-white">{p.name}</span>
                  <button className="text-red-500 opacity-0 group-hover:opacity-100 transition-opacity"><Trash2 size={14} /></button>
                </div>
              ))}
              <button className="p-4 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-xl flex items-center justify-center text-gray-500 hover:text-brand-500 hover:border-brand-500 transition-colors">
                <Plus size={20} />
              </button>
            </div>
          </div>
        );

      case "FAQs":
        return (
          <div className={cardStyle + " p-8"}>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Frequently Asked Questions</h3>
            <div className="space-y-4">
              {faqs.map(faq => (
                <div key={faq.id} className="p-4 bg-gray-50 dark:bg-gray-900 rounded-xl">
                  <input defaultValue={faq.q} className="font-bold text-sm bg-transparent w-full outline-none mb-2 text-gray-900 dark:text-white" />
                  <textarea defaultValue={faq.a} className="text-sm text-gray-600 dark:text-gray-400 bg-transparent w-full outline-none resize-none" rows={2} />
                </div>
              ))}
              <button className={btnSecondary + " w-full"}>Add New Question</button>
            </div>
          </div>
        );

      case "Testimonials":
        return (
          <div className={cardStyle + " p-8 flex flex-col items-center justify-center min-h-[300px] text-center"}>
             <Quote size={48} className="text-gray-300 mb-4" />
             <h3 className="text-lg font-bold text-gray-900 dark:text-white">Testimonial Manager</h3>
             <p className="text-gray-500 mb-4">Curate student success stories.</p>
             <button className={btnPrimary}>View All Testimonials</button>
          </div>
        );

      // --- CONFIG SETTINGS ---
      case "Mail Settings":
        return (
          <div className={cardStyle + " p-8 space-y-6"}>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">SMTP Configuration</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="text-xs font-bold text-gray-500 uppercase mb-1 block">Mail Driver</label>
                <select className={inputStyle}><option>SMTP</option><option>Sendgrid</option></select>
              </div>
              <div>
                <label className="text-xs font-bold text-gray-500 uppercase mb-1 block">Mail Host</label>
                <input defaultValue="smtp.mailtrap.io" className={inputStyle} />
              </div>
              <div>
                <label className="text-xs font-bold text-gray-500 uppercase mb-1 block">Mail Port</label>
                <input defaultValue="2525" className={inputStyle} />
              </div>
              <div>
                <label className="text-xs font-bold text-gray-500 uppercase mb-1 block">Encryption</label>
                <select className={inputStyle}><option>TLS</option><option>SSL</option></select>
              </div>
              <div>
                <label className="text-xs font-bold text-gray-500 uppercase mb-1 block">Username</label>
                <input className={inputStyle} type="text" />
              </div>
              <div>
                <label className="text-xs font-bold text-gray-500 uppercase mb-1 block">Password</label>
                <input className={inputStyle} type="password" />
              </div>
            </div>
            <div className="flex justify-end pt-4">
               <button className={btnPrimary}>Update Configuration</button>
            </div>
          </div>
        );

      case "Payment Gateways":
        return (
          <div className={cardStyle + " p-8 space-y-8"}>
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Smartphone className="text-green-600" size={24} />
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">M-PESA (Daraja API)</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pl-8 border-l-2 border-green-500">
                <input placeholder="Consumer Key" className={inputStyle} />
                <input placeholder="Consumer Secret" className={inputStyle} type="password" />
                <input placeholder="Passkey" className={inputStyle} type="password" />
                <input placeholder="Shortcode (Paybill/Till)" className={inputStyle} />
              </div>
            </div>

            <div className="pt-6 border-t border-gray-100 dark:border-gray-700">
              <div className="flex items-center gap-2 mb-4">
                <CreditCard className="text-blue-600" size={24} />
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">Stripe / PayPal</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pl-8 border-l-2 border-blue-500">
                <input placeholder="Stripe Publishable Key" className={inputStyle} />
                <input placeholder="Stripe Secret Key" className={inputStyle} type="password" />
                <input placeholder="PayPal Client ID" className={inputStyle} />
                <input placeholder="PayPal Secret" className={inputStyle} type="password" />
              </div>
            </div>
            <div className="flex justify-end">
               <button className={btnPrimary}>Save Keys</button>
            </div>
          </div>
        );

      case "Google Integration":
        return (
          <div className={cardStyle + " p-8 space-y-6"}>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Google Services</h3>
            <div className="space-y-4">
              <div>
                <label className="text-xs font-bold text-gray-500 uppercase mb-1 block">Google Analytics ID</label>
                <div className="flex gap-2">
                  <Globe size={20} className="text-gray-400 mt-3" />
                  <input placeholder="UA-XXXXX-Y" className={inputStyle} />
                </div>
              </div>
              <div>
                <label className="text-xs font-bold text-gray-500 uppercase mb-1 block">Google Maps API Key</label>
                <div className="flex gap-2">
                  <MapPin size={20} className="text-gray-400 mt-3" />
                  <input placeholder="AIza..." className={inputStyle} type="password" />
                </div>
              </div>
              <div>
                <label className="text-xs font-bold text-gray-500 uppercase mb-1 block">OAuth Client ID (Login)</label>
                <div className="flex gap-2">
                  <Key size={20} className="text-gray-400 mt-3" />
                  <input placeholder="client-id.apps.googleusercontent.com" className={inputStyle} />
                </div>
              </div>
            </div>
            <div className="flex justify-end pt-4">
               <button className={btnPrimary}>Update Google Settings</button>
            </div>
          </div>
        );

      // --- PLATFORM LOGIC ---
      case "Categories":
        return (
          <div className={cardStyle + " p-8"}>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Category Management</h3>
            <CategoryManager />
          </div>
        );

      case "Commissions":
        return (
          <div className={cardStyle + " p-8 space-y-6"}>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Financial Rules</h3>
            <div className="space-y-4">
              <div>
                <label className="text-xs font-bold text-gray-500 uppercase mb-1 block">Default Platform Commission (%)</label>
                <input type="number" defaultValue="20" className={inputStyle} />
              </div>
              <div>
                <label className="text-xs font-bold text-gray-500 uppercase mb-1 block">Minimum Payout (KES)</label>
                <input type="number" defaultValue="500" className={inputStyle} />
              </div>
              <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-700">
                <div>
                  <span className="font-bold text-gray-900 dark:text-white block">Auto-Approve Payouts</span>
                  <span className="text-xs text-gray-500">Automatically process requests under KES 5000</span>
                </div>
                <ToggleRight size={32} className="text-brand-500 cursor-pointer" />
              </div>
            </div>
            <div className="pt-4 border-t border-gray-100 dark:border-gray-700">
              <button className={btnPrimary}>Update Rules</button>
            </div>
          </div>
        );

      default:
        return (
           <div className={cardStyle + " p-8 flex flex-col items-center justify-center min-h-[300px] text-center"}>
              <Settings size={48} className="text-gray-300 mb-4" />
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">{activeTab}</h3>
              <p className="text-gray-500">Settings panel for {activeTab} is under construction.</p>
           </div>
        );
    }
  };

  return (
    <div className="animate-fade-in-up">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">System Settings</h1>
      
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Hierarchical Settings Sidebar */}
        <div className="w-full lg:w-64 flex-shrink-0">
          <div className={`${cardStyle} overflow-hidden py-2`}>
            {menuGroups.map((group, idx) => (
              <div key={idx} className="mb-2 last:mb-0">
                <h4 className="px-6 py-2 text-[10px] uppercase font-bold text-gray-400 tracking-wider">
                  {group.title}
                </h4>
                {group.items.map(tab => (
                  <button
                    key={tab.name}
                    onClick={() => setActiveTab(tab.name)}
                    className={`w-full flex items-center gap-3 px-6 py-3 text-sm font-bold border-l-4 transition-all ${
                      activeTab === tab.name 
                        ? 'border-brand-500 bg-gray-50 dark:bg-gray-900 text-brand-600 dark:text-brand-400' 
                        : 'border-transparent text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800'
                    }`}
                  >
                    <tab.icon size={16} /> {tab.name}
                  </button>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Settings Content Area */}
        <div className="flex-1">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

// --- Main Layout Components ---

const SidebarItem = ({ icon: Icon, label, active, onClick, hasSub, expanded }: any) => (
  <button
    onClick={onClick}
    className={`w-full flex items-center justify-between p-3.5 rounded-xl text-sm font-bold transition-all duration-200 group ${
      active 
        ? 'text-brand-600 dark:text-brand-400 bg-brand-50/50 dark:bg-brand-900/10 shadow-[inset_2px_2px_4px_rgba(0,0,0,0.05)] border-l-4 border-brand-500' 
        : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800/50'
    }`}
  >
    <div className="flex items-center gap-3">
      <div className={`p-1.5 rounded-lg transition-colors ${active ? 'bg-brand-100 dark:bg-brand-900/30' : 'bg-gray-100 dark:bg-gray-800 group-hover:bg-white dark:group-hover:bg-gray-700'}`}>
        <Icon size={18} />
      </div>
      <span>{label}</span>
    </div>
    {hasSub && (
      <ChevronDown size={16} className={`transition-transform duration-200 text-gray-400 ${expanded ? 'rotate-180' : ''}`} />
    )}
  </button>
);

const Toast = ({ message, onClose }: { message: string, onClose: () => void }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed bottom-6 right-6 bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-6 py-3 rounded-full shadow-2xl z-[60] flex items-center gap-3 animate-fade-in-up">
      <CheckCircle size={18} className="text-green-500" />
      <span className="font-bold text-sm">{message}</span>
    </div>
  );
};

const AdminDashboard: React.FC = () => {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Dashboard");
  const [expandedMenus, setExpandedMenus] = useState<string[]>(['Courses']); // Default expanded
  const [viewCourseId, setViewCourseId] = useState<number | null>(null);
  const [subFilter, setSubFilter] = useState("All");
  const [toastMsg, setToastMsg] = useState("");

  // Centralized State for Courses and Users to allow interactions
  const [usersList, setUsersList] = useState(initialUsers);
  const [coursesList, setCoursesList] = useState(initialCoursesData);

  const showToast = (msg: string) => setToastMsg(msg);

  // --- Logic Functions ---

  const handleToggleUserStatus = (id: number) => {
    const user = usersList.find(u => u.id === id);
    if (!user) return;

    const newStatus = user.status === 'Active' ? 'Suspended' : 'Active';
    
    // Update User
    setUsersList(usersList.map(u => u.id === id ? { ...u, status: newStatus } : u));

    // If Instructor is suspended, suspend all their courses
    if (user.role === 'Instructor' && newStatus === 'Suspended') {
      const instructorName = user.name;
      const coursesToSuspend = coursesList.filter(c => c.instructor === instructorName && c.status !== 'Suspended');
      
      if (coursesToSuspend.length > 0) {
        setCoursesList(coursesList.map(c => c.instructor === instructorName ? { ...c, status: 'Suspended' } : c));
        showToast(`${user.name} suspended. ${coursesToSuspend.length} courses automatically suspended.`);
      } else {
        showToast(`User ${user.name} suspended.`);
      }
    } else {
      showToast(`User ${user.name} ${newStatus === 'Active' ? 'activated' : 'suspended'}.`);
    }
  };

  const handleToggleCourseStatus = (id: number) => {
    setCoursesList(coursesList.map(c => {
      if (c.id === id) {
        const newStatus = c.status === 'Suspended' ? 'Published' : 'Suspended'; // Simple toggle logic
        showToast(`Course status changed to ${newStatus}`);
        return { ...c, status: newStatus };
      }
      return c;
    }));
  };

  const handleSoftDeleteCourse = (id: number) => {
    if (confirm("Are you sure? Course will be hidden but recoverable.")) {
      setCoursesList(coursesList.map(c => c.id === id ? { ...c, status: 'Deleted' } : c));
      showToast("Course moved to trash.");
    }
  };

  const handleRestoreCourse = (id: number) => {
    setCoursesList(coursesList.map(c => c.id === id ? { ...c, status: 'Published' } : c));
    showToast("Course restored.");
  };

  const handleDeleteUser = (id: number) => {
    if (confirm("Permanently delete user? This cannot be undone.")) {
      setUsersList(usersList.filter(u => u.id !== id));
      showToast("User deleted.");
    }
  };

  // --- Menu Logic ---

  const toggleMenu = (name: string) => {
    if (expandedMenus.includes(name)) {
      setExpandedMenus(expandedMenus.filter(item => item !== name));
    } else {
      setExpandedMenus([...expandedMenus, name]);
    }
  };

  const handleNavClick = (menu: string, sub?: string) => {
    setActiveTab(menu);
    if (sub) setSubFilter(sub);
    setViewCourseId(null);
    if (window.innerWidth < 1024) setIsSidebarOpen(false);
  };

  const handleViewCourse = (course: any) => {
    setViewCourseId(course.id);
  };

  const menuStructure = [
    { name: 'Dashboard', icon: LayoutDashboard },
    { 
      name: 'Courses', icon: BookOpen, 
      children: [
        { name: 'All Courses', filter: 'All' },
        { name: 'Pending Approval', filter: 'Pending' },
        { name: 'Categories', target: 'Settings', targetTab: 'Categories' },
        { name: 'Deleted', filter: 'Deleted' }
      ] 
    },
    { 
      name: 'Instructors', icon: GraduationCap, 
    },
    {
      name: 'Students', icon: Users,
    },
    { 
      name: 'Live Classes', icon: Video,
      children: [
        { name: 'Upcoming', filter: 'Upcoming' },
        { name: 'History', filter: 'Past' }
      ]
    },
    { 
      name: 'Financials', icon: DollarSign,
      children: [
        { name: 'Withdrawals', filter: 'Withdrawals' },
        { name: 'Orders', filter: 'Orders' },
        { name: 'Reports', filter: 'Reports' }
      ]
    },
    { name: 'Messages', icon: MessageSquare },
    { name: 'Invite Friends', icon: UserPlus },
    { name: 'Settings', icon: Settings },
  ];

  const renderContent = () => {
    if (viewCourseId) {
      const course = coursesList.find(c => c.id === viewCourseId) || coursesList[0];
      return <CourseDetailView course={course} onBack={() => setViewCourseId(null)} />;
    }

    switch (activeTab) {
      case 'Courses':
        return (
          <CourseManagementView 
            filter={subFilter} 
            onViewCourse={handleViewCourse} 
            coursesList={coursesList}
            onSoftDelete={handleSoftDeleteCourse}
            onRestore={handleRestoreCourse}
          />
        );
      case 'Instructors': 
        return (
          <UserManagementView 
            userType="Instructor" 
            users={usersList} 
            courses={coursesList}
            onToggleUserStatus={handleToggleUserStatus}
            onDeleteUser={handleDeleteUser}
            onToggleCourseStatus={handleToggleCourseStatus}
          />
        );
      case 'Students':
        return (
          <UserManagementView 
            userType="Student" 
            users={usersList} 
            courses={coursesList}
            onToggleUserStatus={handleToggleUserStatus}
            onDeleteUser={handleDeleteUser}
            onToggleCourseStatus={handleToggleCourseStatus}
          />
        );
      case 'Financials': 
        return <FinancialsView />;
      case 'Live Classes':
        return <LiveClassesView />;
      case 'Messages':
        return <MessagesView />;
      case 'Invite Friends':
        return <InviteFriendsView />;
      case 'Settings':
        return <SettingsView />;
      case 'Dashboard':
      default:
        // Calculate dynamic dashboard stats
        const totalRev = coursesList.reduce((acc, c) => acc + (parseInt(c.price.replace(/\D/g, '') || '0') * c.students), 0);
        
        return (
          <div className="space-y-8 animate-fade-in-up">
            <div className="flex justify-between items-end">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-1">Admin Dashboard</h1>
                <p className="text-gray-500 dark:text-gray-400">System overview and control panel</p>
              </div>
              <button className={btnSecondary} onClick={() => window.location.reload()}>
                <RefreshCw size={16} /> Refresh Data
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <StatCard title="Total Students" value={usersList.filter(u => u.role === 'Student').length.toString()} subtext="+12% this month" icon={Users} color="bg-blue-500" />
              <StatCard title="Total Revenue" value={`KES ${(totalRev/1000000).toFixed(1)}M`} subtext="+8% vs last month" icon={DollarSign} color="bg-green-500" />
              <StatCard title="Active Courses" value={coursesList.filter(c => c.status !== 'Deleted' && c.status !== 'Suspended').length.toString()} subtext="12 pending approval" icon={BookOpen} color="bg-purple-500" />
              <StatCard title="System Health" value="99.9%" subtext="All systems operational" icon={Activity} color="bg-red-500" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className={`${cardStyle} p-6 lg:col-span-2`}>
                <div className="flex justify-between items-center mb-6">
                  <h3 className="font-bold text-gray-900 dark:text-white">Revenue Overview</h3>
                  <div className="px-3 py-1 bg-gray-100 dark:bg-gray-900 rounded-lg text-xs font-bold">This Year</div>
                </div>
                <div className="h-64 flex items-end justify-between gap-2 px-2">
                   {[40, 65, 45, 80, 55, 90, 70, 85, 60, 75, 95, 80].map((h, i) => (
                     <div key={i} className="w-full bg-brand-100 dark:bg-brand-900/20 rounded-t-lg relative group hover:bg-brand-200 transition-colors" style={{ height: `${h}%` }}></div>
                   ))}
                </div>
              </div>

              {/* Course Distribution Donut Chart */}
              <div className={`${cardStyle} p-6 flex flex-col items-center justify-center`}>
                <h3 className="font-bold text-gray-900 dark:text-white mb-6 self-start w-full flex items-center gap-2">
                  <PieChart size={18} className="text-brand-500" /> Course Distribution
                </h3>
                <div className="relative w-48 h-48">
                   <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                      {/* Segment 1: Dev (40%) */}
                      <circle cx="50" cy="50" r="40" stroke="#F36F21" strokeWidth="12" fill="none" strokeDasharray="251.2" strokeDashoffset="150" />
                      {/* Segment 2: Business (30%) */}
                      <circle cx="50" cy="50" r="40" stroke="#3B82F6" strokeWidth="12" fill="none" strokeDasharray="251.2" strokeDashoffset="175" transform="rotate(144 50 50)" />
                      {/* Segment 3: Design (30%) */}
                      <circle cx="50" cy="50" r="40" stroke="#10B981" strokeWidth="12" fill="none" strokeDasharray="251.2" strokeDashoffset="175" transform="rotate(252 50 50)" />
                   </svg>
                   <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-3xl font-bold text-gray-900 dark:text-white">342</span>
                      <span className="text-[10px] text-gray-400 uppercase">Total Courses</span>
                   </div>
                </div>
                <div className="mt-6 w-full space-y-2">
                   <div className="flex justify-between text-xs font-bold">
                      <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-brand-500"></span> Development</span>
                      <span>40%</span>
                   </div>
                   <div className="flex justify-between text-xs font-bold">
                      <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-blue-500"></span> Business</span>
                      <span>30%</span>
                   </div>
                   <div className="flex justify-between text-xs font-bold">
                      <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-green-500"></span> Design</span>
                      <span>30%</span>
                   </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Recent Activity Feed */}
              <div className={`${cardStyle} p-6`}>
                <h3 className="font-bold text-gray-900 dark:text-white mb-6">Platform Activity</h3>
                <div className="space-y-6 relative pl-4">
                  <div className="absolute left-4 top-2 bottom-2 w-0.5 bg-gray-100 dark:bg-gray-700"></div>
                  {[
                    { text: "Kevin Omondi published 'Advanced React'", time: "2h ago", icon: BookOpen, color: "bg-blue-500" },
                    { text: "New Instructor Application: Sarah Jones", time: "5h ago", icon: UserPlus, color: "bg-yellow-500" },
                    { text: "System Update v2.4 completed", time: "1d ago", icon: Server, color: "bg-green-500" },
                    { text: "Suspicious login attempt blocked", time: "2d ago", icon: Shield, color: "bg-red-500" },
                  ].map((item, i) => (
                    <div key={i} className="relative flex gap-4 items-center">
                       <div className={`w-8 h-8 rounded-full border-4 border-white dark:border-gray-800 ${item.color} text-white flex items-center justify-center shrink-0 z-10`}>
                         <item.icon size={14} />
                       </div>
                       <div>
                         <p className="text-sm font-bold text-gray-800 dark:text-gray-200">{item.text}</p>
                         <p className="text-xs text-gray-400">{item.time}</p>
                       </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pending Approvals */}
              <div className={`${cardStyle} p-6`}>
                <div className="flex justify-between items-center mb-6">
                  <h3 className="font-bold text-gray-900 dark:text-white">Pending Approvals</h3>
                  <button onClick={() => { setActiveTab('Courses'); setSubFilter('Pending'); }} className="text-xs text-brand-600 font-bold hover:underline">View All</button>
                </div>
                <div className="space-y-4">
                  {coursesList.filter(c => c.status === 'Pending Approval').slice(0, 3).map((course: any, i: number) => (
                    <div key={i} className="flex gap-3 items-center p-3 bg-gray-50 dark:bg-gray-900 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors cursor-pointer border border-transparent hover:border-gray-200 dark:hover:border-gray-700">
                       <div className="w-12 h-12 bg-yellow-100 text-yellow-600 rounded-lg flex items-center justify-center shrink-0 overflow-hidden">
                         <img src={course.image} alt="" className="w-full h-full object-cover" />
                       </div>
                       <div className="flex-1 min-w-0">
                         <p className="font-bold text-sm text-gray-900 dark:text-white truncate">{course.title}</p>
                         <p className="text-xs text-gray-500">By {course.instructor}</p>
                       </div>
                       <div className="flex gap-2">
                         <button className="p-2 bg-green-100 text-green-600 rounded-lg hover:bg-green-200" title="Approve"><CheckCircle size={16} /></button>
                         <button className="p-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200" title="Reject"><XCircle size={16} /></button>
                       </div>
                    </div>
                  ))}
                  {coursesList.filter(c => c.status === 'Pending Approval').length === 0 && (
                    <div className="text-center py-8 text-gray-400 text-sm">No pending items. All caught up!</div>
                  )}
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
          <div className={`flex flex-col items-center text-center p-6 bg-gradient-to-br from-brand-600 to-brand-800 rounded-2xl shadow-xl text-white`}>
            <div className="w-16 h-16 rounded-full bg-white/20 p-1 mb-3 flex items-center justify-center backdrop-blur-sm border-2 border-white/30">
              <Shield size={28} className="text-white" />
            </div>
            <h3 className="font-bold text-lg">System Admin</h3>
            <p className="text-xs text-brand-200 font-medium tracking-wide">Super User Access</p>
          </div>

          <nav className="flex-1 space-y-1">
            {menuStructure.map((item) => (
              <div key={item.name}>
                <SidebarItem 
                  icon={item.icon} 
                  label={item.name} 
                  active={activeTab === item.name} 
                  hasSub={!!item.children}
                  expanded={expandedMenus.includes(item.name)}
                  onClick={() => item.children ? toggleMenu(item.name) : handleNavClick(item.name)}
                />
                
                {/* Submenu */}
                {item.children && expandedMenus.includes(item.name) && (
                  <div className="ml-9 border-l-2 border-gray-200 dark:border-gray-700 space-y-1 mt-1 mb-2 pl-2">
                    {item.children.map((sub: any) => (
                      <button
                        key={sub.name}
                        onClick={() => {
                          if (sub.target) {
                            setActiveTab(sub.target);
                          } else {
                            handleNavClick(item.name, sub.filter);
                          }
                        }}
                        className={`block w-full text-left px-3 py-2 text-xs font-bold rounded-lg transition-colors ${
                          activeTab === item.name && subFilter === sub.filter
                            ? 'text-brand-600 dark:text-brand-400 bg-brand-50 dark:bg-brand-900/10'
                            : 'text-gray-500 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800'
                        }`}
                      >
                        {sub.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>
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

      {toastMsg && <Toast message={toastMsg} onClose={() => setToastMsg("")} />}
    </div>
  );
};

export default AdminDashboard;
