import { useState } from 'react';
import { Dashboard } from './components/Dashboard';
import { Students } from './components/Students';
import { Classes } from './components/Classes';
import { Grades } from './components/Grades';
import { Attendance } from './components/Attendance';
import { Teachers } from './components/Teachers';
import { Schedule } from './components/Schedule';
import { Reports } from './components/Reports';
import {
  LayoutDashboard,
  Users,
  BookOpen,
  Award,
  ClipboardCheck,
  UserCheck,
  Calendar,
  FileText,
  Menu,
  X,
} from 'lucide-react';

type MenuItem = {
  id: string;
  label: string;
  icon: React.ReactNode;
  component: React.ReactNode;
};

export default function App() {
  const [activeMenu, setActiveMenu] = useState('dashboard');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const menuItems: MenuItem[] = [
    {
      id: 'dashboard',
      label: 'Tổng quan',
      icon: <LayoutDashboard className="w-5 h-5" />,
      component: <Dashboard />,
    },
    {
      id: 'students',
      label: 'Học sinh',
      icon: <Users className="w-5 h-5" />,
      component: <Students />,
    },
    {
      id: 'classes',
      label: 'Lớp học',
      icon: <BookOpen className="w-5 h-5" />,
      component: <Classes />,
    },
    {
      id: 'grades',
      label: 'Điểm số',
      icon: <Award className="w-5 h-5" />,
      component: <Grades />,
    },
    {
      id: 'attendance',
      label: 'Điểm danh',
      icon: <ClipboardCheck className="w-5 h-5" />,
      component: <Attendance />,
    },
    {
      id: 'teachers',
      label: 'Giáo viên',
      icon: <UserCheck className="w-5 h-5" />,
      component: <Teachers />,
    },
    {
      id: 'schedule',
      label: 'Thời khóa biểu',
      icon: <Calendar className="w-5 h-5" />,
      component: <Schedule />,
    },
    {
      id: 'reports',
      label: 'Báo cáo',
      icon: <FileText className="w-5 h-5" />,
      component: <Reports />,
    },
  ];

  const activeComponent = menuItems.find((item) => item.id === activeMenu)?.component;

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <aside
        className={`${
          isSidebarOpen ? 'w-64' : 'w-0'
        } bg-blue-900 text-white transition-all duration-300 overflow-hidden flex flex-col`}
      >
        <div className="p-6 border-b border-blue-800">
          <h1 className="text-xl">Hệ thống Quản lý Học sinh</h1>
        </div>
        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => setActiveMenu(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    activeMenu === item.id
                      ? 'bg-blue-700 text-white'
                      : 'text-blue-100 hover:bg-blue-800'
                  }`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>
        <div className="p-4 border-t border-blue-800">
          <div className="flex items-center gap-3 px-4 py-3">
            <div className="w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center">
              AD
            </div>
            <div>
              <div>Admin</div>
              <div className="text-blue-300 text-sm">Quản trị viên</div>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              {isSidebarOpen ? (
                <X className="w-6 h-6 text-gray-600" />
              ) : (
                <Menu className="w-6 h-6 text-gray-600" />
              )}
            </button>
            <div className="flex items-center gap-4">
              <div className="text-right">
                <div className="text-sm text-gray-500">Năm học</div>
                <div>2024-2025</div>
              </div>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <main className="flex-1 overflow-auto p-6">{activeComponent}</main>
      </div>
    </div>
  );
}
