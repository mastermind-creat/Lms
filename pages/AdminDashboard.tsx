
import React, { useState } from 'react';
import { 
  LayoutDashboard, Users, BookOpen, DollarSign, Video, 
  MessageSquare, Megaphone, Award, BarChart2, Settings, 
  FileText, Shield, LogOut, Menu, Search, CheckCircle, 
  XCircle, AlertTriangle, Eye, MoreVertical, Filter, 
  Download, ChevronRight, TrendingUp, Lock, Unlock, 
  RefreshCw, Trash2, Edit3, Save, Bell, Smartphone
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { courses } from '../data/courses';

// --- Shared Styles ---
const cardStyle = "bg-white dark:bg-gray-800 rounded-2xl shadow-[6px_6px_12px_#e5e7eb,-6px_-6px_12px_#ffffff] dark:shadow-[6px_6px_12px_#0b0c15,-6px_-6px_12px_#1e293b] transition-colors duration-300 border border-gray-100 dark:border-gray-700";
const btnPrimary = "px-6 py-2.5 rounded-xl bg-brand-600 text-white font-bold text-sm shadow-[4px_4px_10px_rgba(243,111,33,0.3)] hover:bg-brand-700 active:shadow-none hover:-translate-y-0.5 transition-all";
const btnSecondary = "px-6 py-2.5 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-bold text-sm shadow-[4px_4px_8px_#d1d5db,-4px_-4px_8px_#ffffff] dark:shadow-[4px_4px_8px_#0b0c15,-4px_-4px_8px_#1e293b] hover:bg-gray-200 dark:hover:bg-gray-700 active:shadow-[inset_2px_2px_4px_#bebebe,inset_-2px_-2px_4px_#ffffff] dark:active:shadow-[inset_2px_2px_4px_#0b0c15,inset_-2px_-2px_4px_#333333] transition-all";
const inputStyle = "w-full bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-brand-500 transition-all text-gray-900 dark:text-white";
const badgeStyle = "px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wide";

// --- Mock Data ---
const initialUsers = [
  { id: 1, name: "Kevin Omondi", email: "kevin@elimutech.ke", role: "Instructor", status: "Active", joined: "2024-01-15", earnings: 450000, courses: 5 },
  { id: 2, name: "Jane Doe", email: "jane@student.ke", role: "Student", status: "Active", joined: "2024-02-20", spent: 15000, courses: 3 },
  { id: 3, name: "John Smith", email: "john@student.ke", role: "Student", status: "Suspended", joined: "2024-03-10", spent: 0, courses: 0 },
  { id: 4, name: "Emily Roth", email: "emily@instructor.ke", role: "Instructor", status: "Pending", joined: "2024-10-25", earnings: 0, courses: 1 },
];

const initialWithdrawals = [
  { id: "WTH-001", instructor: "Kevin Omondi", amount: 25000, method: "M-PESA", date: "2025-10-24", status: "Pending" },
  { id: "WTH-002", instructor: "Maria Garcia", amount: 12000, method: "Bank Transfer", date: "2025-10-23", status: "Approved" },
  { id: "WTH-003", instructor: "James Wilson", amount: 50000, method: "M-PESA", date: "2025-10-20", status: "Paid" },
];

const auditLogs = [
  { id: 1, action: "User Suspension", details: "Suspended John Smith for policy violation", admin: "Super Admin", time: "2h ago" },
  { id: 2, action: "Course Approval", details: "Approved 'Advanced React Patterns'", admin: "Content Lead", time: "5h ago" },
  { id: 3, action: "System Update", details: "Updated commission rate to 20%", admin: "System Admin", time: "1d ago" },
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

const UserManagementView = () => {
  const [filter, setFilter] = useState("All");
  const [users, setUsers] = useState(initialUsers);

  const toggleStatus = (id: number) => {
    setUsers(users.map(u => u.id === id ? { ...u, status: u.status === 'Active' ? 'Suspended' : 'Active' } : u));
  };

  const filteredUsers = users.filter(u => filter === "All" || u.role === filter);

  return (
    <div className="space-y-6 animate-fade-in-up">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">User Management</h2>
        <div className="flex gap-2">
          {['All', 'Student', 'Instructor'].map(f => (
            <button 
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${filter === f ? 'bg-brand-600 text-white' : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300'}`}
            >
              {f}s
            </button>
          ))}
        </div>
      </div>

      <div className={`${cardStyle} overflow-hidden`}>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-gray-600 dark:text-gray-300">
            <thead className="bg-gray-50 dark:bg-gray-900/50 text-xs uppercase font-bold text-gray-500">
              <tr>
                <th className="px-6 py-4">User</th>
                <th className="px-6 py-4">Role</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Stats</th>
                <th className="px-6 py-4">Joined</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
              {filteredUsers.map(user => (
                <tr key={user.id} className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-brand-100 dark:bg-brand-900/30 text-brand-600 flex items-center justify-center font-bold">
                        {user.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-bold text-gray-900 dark:text-white">{user.name}</p>
                        <p className="text-xs text-gray-500">{user.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center gap-1 ${user.role === 'Instructor' ? 'text-purple-600 font-bold' : 'text-gray-600'}`}>
                      {user.role === 'Instructor' && <Award size={14} />} {user.role}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`${badgeStyle} ${user.status === 'Active' ? 'bg-green-100 text-green-700' : user.status === 'Pending' ? 'bg-yellow-100 text-yellow-700' : 'bg-red-100 text-red-700'}`}>
                      {user.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-xs">
                    {user.role === 'Instructor' ? (
                      <span className="text-green-600 font-bold">KES {user.earnings.toLocaleString()}</span>
                    ) : (
                      <span>{user.courses} Courses</span>
                    )}
                  </td>
                  <td className="px-6 py-4 text-xs">{user.joined}</td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end gap-2">
                      <button onClick={() => toggleStatus(user.id)} className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-gray-500" title={user.status === 'Active' ? 'Suspend' : 'Activate'}>
                        {user.status === 'Active' ? <Lock size={16} /> : <Unlock size={16} />}
                      </button>
                      <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-gray-500" title="View Profile">
                        <Eye size={16} />
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
};

const CourseApprovalView = () => {
  const [courseList, setCourseList] = useState(courses);
  const [rejectId, setRejectId] = useState<number | null>(null);
  const [reason, setReason] = useState("");

  const handleStatusChange = (id: number, status: string) => {
    // In a real app, this would be an API call
    if (status === 'Rejected' && !reason) return;
    
    console.log(`Course ${id} marked as ${status}. Reason: ${reason}`);
    setRejectId(null);
    setReason("");
    // Optimistic update
    alert(`Course status updated to ${status}`);
  };

  return (
    <div className="space-y-6 animate-fade-in-up">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Course Management</h2>
        <div className="flex gap-2">
           <button className={btnSecondary + " flex items-center gap-2"}><Filter size={16} /> Filter</button>
           <button className={btnPrimary + " flex items-center gap-2"}><Download size={16} /> Export Report</button>
        </div>
      </div>

      <div className={`${cardStyle} overflow-hidden`}>
        <table className="w-full text-left text-sm text-gray-600 dark:text-gray-300">
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
            {courseList.map(course => (
              <tr key={course.id} className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg bg-gray-200 overflow-hidden">
                      <img src={course.image} alt="" className="w-full h-full object-cover" />
                    </div>
                    <span className="font-bold text-gray-900 dark:text-white line-clamp-1 max-w-[200px]">{course.title}</span>
                  </div>
                </td>
                <td className="px-6 py-4">{course.instructor}</td>
                <td className="px-6 py-4 font-mono font-bold">{course.price}</td>
                <td className="px-6 py-4">
                  <span className={`${badgeStyle} bg-blue-100 text-blue-700`}>Pending Review</span>
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="flex justify-end gap-2">
                    <button className="px-3 py-1.5 bg-green-100 text-green-700 rounded-lg text-xs font-bold hover:bg-green-200 transition-colors" onClick={() => handleStatusChange(course.id, 'Approved')}>
                      Approve
                    </button>
                    <button className="px-3 py-1.5 bg-red-100 text-red-700 rounded-lg text-xs font-bold hover:bg-red-200 transition-colors" onClick={() => setRejectId(course.id)}>
                      Reject
                    </button>
                    <button className="p-1.5 text-gray-400 hover:text-gray-600">
                      <Eye size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Rejection Modal */}
      {rejectId && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white dark:bg-gray-900 w-full max-w-md rounded-2xl p-6 shadow-2xl animate-scale-up">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Reject Course</h3>
            <p className="text-sm text-gray-500 mb-4">Please provide a reason for rejection. This will be sent to the instructor.</p>
            <textarea 
              className={inputStyle} 
              rows={4} 
              placeholder="e.g. Content does not meet quality standards..."
              value={reason}
              onChange={(e) => setReason(e.target.value)}
            ></textarea>
            <div className="flex gap-3 mt-6">
              <button onClick={() => setRejectId(null)} className={btnSecondary + " flex-1"}>Cancel</button>
              <button onClick={() => handleStatusChange(rejectId, 'Rejected')} className="flex-1 px-6 py-2.5 rounded-xl bg-red-600 text-white font-bold hover:bg-red-700 transition-colors">Confirm Rejection</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const FinancialsView = () => {
  const [activeTab, setActiveTab] = useState('payouts');

  return (
    <div className="space-y-6 animate-fade-in-up">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Financial Oversight</h2>
        <div className="flex bg-gray-100 dark:bg-gray-800 p-1 rounded-xl">
          <button onClick={() => setActiveTab('payouts')} className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${activeTab === 'payouts' ? 'bg-white dark:bg-gray-700 shadow-sm text-brand-600' : 'text-gray-500'}`}>Withdrawals</button>
          <button onClick={() => setActiveTab('revenue')} className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${activeTab === 'revenue' ? 'bg-white dark:bg-gray-700 shadow-sm text-brand-600' : 'text-gray-500'}`}>Platform Revenue</button>
        </div>
      </div>

      {activeTab === 'payouts' ? (
        <div className={`${cardStyle} overflow-hidden`}>
          <div className="p-6 border-b border-gray-100 dark:border-gray-700 flex justify-between items-center">
            <h3 className="font-bold text-gray-900 dark:text-white">Pending Withdrawal Requests</h3>
            <span className="text-xs font-bold text-gray-500">Auto-approval active for trusted instructors</span>
          </div>
          <table className="w-full text-left text-sm text-gray-600 dark:text-gray-300">
            <thead className="bg-gray-50 dark:bg-gray-900/50 text-xs uppercase font-bold text-gray-500">
              <tr>
                <th className="px-6 py-4">Request ID</th>
                <th className="px-6 py-4">Instructor</th>
                <th className="px-6 py-4">Amount</th>
                <th className="px-6 py-4">Method</th>
                <th className="px-6 py-4">Date</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
              {initialWithdrawals.map(w => (
                <tr key={w.id} className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                  <td className="px-6 py-4 font-mono text-xs">{w.id}</td>
                  <td className="px-6 py-4 font-bold text-gray-900 dark:text-white">{w.instructor}</td>
                  <td className="px-6 py-4 font-bold">KES {w.amount.toLocaleString()}</td>
                  <td className="px-6 py-4 flex items-center gap-2">
                    {w.method === 'M-PESA' ? <Smartphone size={14} className="text-green-500" /> : <DollarSign size={14} className="text-blue-500" />}
                    {w.method}
                  </td>
                  <td className="px-6 py-4 text-xs">{w.date}</td>
                  <td className="px-6 py-4">
                    <span className={`${badgeStyle} ${w.status === 'Pending' ? 'bg-yellow-100 text-yellow-700' : w.status === 'Paid' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'}`}>
                      {w.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    {w.status === 'Pending' && (
                      <div className="flex justify-end gap-2">
                        <button className="text-green-600 hover:bg-green-50 p-1.5 rounded transition-colors" title="Approve"><CheckCircle size={18} /></button>
                        <button className="text-red-600 hover:bg-red-50 p-1.5 rounded transition-colors" title="Reject"><XCircle size={18} /></button>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
           <div className={`${cardStyle} p-6 h-64 flex items-center justify-center border-dashed border-2 border-gray-200 dark:border-gray-700`}>
             <p className="text-gray-400 font-bold">Revenue Chart Placeholder</p>
           </div>
           <div className={`${cardStyle} p-6`}>
             <h3 className="font-bold text-gray-900 dark:text-white mb-4">Revenue Breakdown</h3>
             <div className="space-y-4">
               <div className="flex justify-between items-center">
                 <span className="text-sm text-gray-500">Gross Sales</span>
                 <span className="font-bold text-gray-900 dark:text-white">KES 2,450,000</span>
               </div>
               <div className="flex justify-between items-center">
                 <span className="text-sm text-gray-500">Instructor Payouts (80%)</span>
                 <span className="font-bold text-red-500">- KES 1,960,000</span>
               </div>
               <div className="flex justify-between items-center">
                 <span className="text-sm text-gray-500">Transaction Fees</span>
                 <span className="font-bold text-red-500">- KES 24,500</span>
               </div>
               <div className="pt-4 border-t border-gray-100 dark:border-gray-700 flex justify-between items-center">
                 <span className="font-bold text-gray-900 dark:text-white">Net Platform Profit</span>
                 <span className="font-bold text-green-600 text-xl">KES 465,500</span>
               </div>
             </div>
           </div>
        </div>
      )}
    </div>
  );
};

const AdminDashboard: React.FC = () => {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Dashboard");

  const menuItems = [
    { name: 'Dashboard', icon: LayoutDashboard },
    { name: 'Users', icon: Users },
    { name: 'Courses', icon: BookOpen },
    { name: 'Financials', icon: DollarSign },
    { name: 'Live Classes', icon: Video },
    { name: 'Reviews', icon: MessageSquare },
    { name: 'Announcements', icon: Megaphone },
    { name: 'Certificates', icon: Award },
    { name: 'Analytics', icon: BarChart2 },
    { name: 'Audit Logs', icon: FileText },
    { name: 'Settings', icon: Settings },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'Users': return <UserManagementView />;
      case 'Courses': return <CourseApprovalView />;
      case 'Financials': return <FinancialsView />;
      case 'Audit Logs':
        return (
          <div className="animate-fade-in-up">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">System Audit Logs</h2>
            <div className={`${cardStyle} overflow-hidden`}>
              <table className="w-full text-left text-sm text-gray-600 dark:text-gray-300">
                <thead className="bg-gray-50 dark:bg-gray-900/50 text-xs uppercase font-bold text-gray-500">
                  <tr>
                    <th className="px-6 py-4">Action</th>
                    <th className="px-6 py-4">Details</th>
                    <th className="px-6 py-4">Admin</th>
                    <th className="px-6 py-4">Time</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                  {auditLogs.map((log) => (
                    <tr key={log.id} className="hover:bg-gray-50 dark:hover:bg-gray-800/50">
                      <td className="px-6 py-4 font-bold text-gray-900 dark:text-white">{log.action}</td>
                      <td className="px-6 py-4">{log.details}</td>
                      <td className="px-6 py-4 text-xs bg-gray-100 dark:bg-gray-900 rounded px-2 w-fit">{log.admin}</td>
                      <td className="px-6 py-4 text-xs text-gray-400">{log.time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );
      case 'Settings':
        return (
          <div className="animate-fade-in-up max-w-3xl mx-auto">
             <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">System Settings</h2>
             <div className="space-y-6">
                <div className={`${cardStyle} p-6`}>
                   <h3 className="font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2"><Lock size={20} className="text-brand-500"/> Security</h3>
                   <div className="flex justify-between items-center mb-4">
                      <div>
                        <p className="font-bold text-sm">Enforce 2FA for Instructors</p>
                        <p className="text-xs text-gray-500">Require Two-Factor Authentication for all instructor accounts.</p>
                      </div>
                      <div className="w-12 h-6 bg-brand-600 rounded-full relative cursor-pointer"><div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div></div>
                   </div>
                </div>
                <div className={`${cardStyle} p-6`}>
                   <h3 className="font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2"><DollarSign size={20} className="text-green-500"/> Payments</h3>
                   <div className="space-y-4">
                      <div>
                        <label className="text-xs font-bold text-gray-500 uppercase">Platform Commission (%)</label>
                        <input type="number" defaultValue={20} className={inputStyle + " mt-2"} />
                      </div>
                      <div>
                        <label className="text-xs font-bold text-gray-500 uppercase">Minimum Withdrawal (KES)</label>
                        <input type="number" defaultValue={500} className={inputStyle + " mt-2"} />
                      </div>
                   </div>
                </div>
             </div>
          </div>
        );
      case 'Dashboard':
      default:
        return (
          <div className="space-y-8 animate-fade-in-up">
            <div className="flex justify-between items-end">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-1">Admin Dashboard</h1>
                <p className="text-gray-500 dark:text-gray-400">System overview and control panel</p>
              </div>
              <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded-xl font-bold text-sm hover:bg-gray-200 transition-colors">
                <RefreshCw size={16} /> Refresh Data
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <StatCard title="Total Students" value="12,450" subtext="+12% this month" icon={Users} color="bg-blue-500" />
              <StatCard title="Total Revenue" value="KES 45M" subtext="+8% vs last month" icon={DollarSign} color="bg-green-500" />
              <StatCard title="Active Courses" value="342" subtext="12 pending approval" icon={BookOpen} color="bg-purple-500" />
              <StatCard title="Live Classes" value="18" subtext="Currently active" icon={Video} color="bg-red-500" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className={`${cardStyle} p-6 lg:col-span-2`}>
                <div className="flex justify-between items-center mb-6">
                  <h3 className="font-bold text-gray-900 dark:text-white">Revenue Overview</h3>
                  <select className="bg-gray-100 dark:bg-gray-900 border-none text-xs font-bold rounded-lg px-2 py-1 outline-none text-gray-600"><option>This Year</option></select>
                </div>
                <div className="h-64 flex items-end justify-between gap-2 px-2">
                   {[40, 65, 45, 80, 55, 90, 70, 85, 60, 75, 95, 80].map((h, i) => (
                     <div key={i} className="w-full bg-brand-100 dark:bg-brand-900/20 rounded-t-lg relative group hover:bg-brand-200 transition-colors" style={{ height: `${h}%` }}>
                       <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">KES {h}0k</div>
                     </div>
                   ))}
                </div>
                <div className="flex justify-between mt-4 text-xs text-gray-400 font-bold uppercase">
                  <span>Jan</span><span>Dec</span>
                </div>
              </div>

              <div className={`${cardStyle} p-6`}>
                <h3 className="font-bold text-gray-900 dark:text-white mb-4">Pending Approvals</h3>
                <div className="space-y-4">
                  {[1, 2, 3].map((_, i) => (
                    <div key={i} className="flex gap-3 items-center p-3 bg-gray-50 dark:bg-gray-900 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors cursor-pointer">
                       <div className="w-10 h-10 bg-yellow-100 text-yellow-600 rounded-lg flex items-center justify-center shrink-0"><BookOpen size={20} /></div>
                       <div className="flex-1 min-w-0">
                         <p className="font-bold text-sm text-gray-900 dark:text-white truncate">Advanced Python for AI</p>
                         <p className="text-xs text-gray-500">By Dr. Sarah Kamau</p>
                       </div>
                       <ChevronRight size={16} className="text-gray-400" />
                    </div>
                  ))}
                  <button onClick={() => setActiveTab('Courses')} className="w-full text-center text-xs font-bold text-brand-600 mt-2 hover:underline">View all pending items</button>
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
          {/* Admin Profile Summary */}
          <div className={`flex flex-col items-center text-center p-6 ${cardStyle}`}>
            <div className="w-20 h-20 rounded-full bg-brand-900 text-white p-1 shadow-xl mb-3 flex items-center justify-center">
              <Shield size={32} />
            </div>
            <h3 className="font-bold text-gray-900 dark:text-white">System Admin</h3>
            <p className="text-xs text-green-500 font-bold uppercase tracking-wider bg-green-100 dark:bg-green-900/30 px-2 py-0.5 rounded-full mt-1">Super User</p>
          </div>

          <nav className="flex-1 space-y-1">
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
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 hover:bg-white dark:hover:bg-gray-800'
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

export default AdminDashboard;
