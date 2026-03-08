import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Users, 
  Upload, 
  Calendar, 
  ShieldCheck, 
  FileText, 
  AlertCircle, 
  Gavel, 
  Settings, 
  LogOut, 
  Bell, 
  Menu, 
  X, 
  ChevronLeft,
  Search,
  User as UserIcon,
  ShieldAlert,
  History
} from 'lucide-react';
import { ROUTES, APP_NAME, cn } from '../constants';
import { Button } from './UI';
import { motion, AnimatePresence } from 'motion/react';

const sidebarItems = [
  { icon: LayoutDashboard, label: 'Dashboard', path: ROUTES.DASHBOARD },
  { icon: Users, label: 'Candidates', path: ROUTES.CANDIDATES },
  { icon: Upload, label: 'Import', path: ROUTES.IMPORT },
  { icon: Calendar, label: 'Exam Planning', path: ROUTES.EXAM_PLANNING },
  { icon: ShieldCheck, label: 'Supervisors (PWA)', path: ROUTES.SUPERVISOR },
  { icon: ShieldAlert, label: 'Anonymization', path: ROUTES.ANONYMIZATION },
  { icon: FileText, label: 'Correction', path: ROUTES.CORRECTION },
  { icon: AlertCircle, label: 'Discrepancies', path: ROUTES.DISCREPANCIES },
  { icon: Gavel, label: 'Deliberation', path: ROUTES.DELIBERATION },
  { icon: History, label: 'PV & Reports', path: ROUTES.REPORTS },
  { icon: Users, label: 'Users', path: ROUTES.USERS },
  { icon: Settings, label: 'Settings', path: ROUTES.SETTINGS },
];

export const AppShell = ({ children, title }: { children: React.ReactNode; title: string }) => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="min-h-screen bg-bg flex">
      {/* Desktop Sidebar */}
      <aside 
        className={cn(
          "hidden lg:flex flex-col bg-white border-r border-border transition-all duration-300 sticky top-0 h-screen",
          isSidebarCollapsed ? "w-[80px]" : "w-[260px]"
        )}
      >
        <div className="p-6 flex items-center justify-between">
          {!isSidebarCollapsed && (
            <Link to={ROUTES.DASHBOARD} className="flex items-center gap-2 font-bold text-xl text-primary-accent">
              <div className="w-8 h-8 bg-primary-accent rounded-md flex items-center justify-center text-white">D</div>
              <span>{APP_NAME}</span>
            </Link>
          )}
          <button 
            onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
            className="p-1.5 hover:bg-black/[0.03] rounded-md text-muted"
          >
            {isSidebarCollapsed ? <Menu size={20} /> : <ChevronLeft size={20} />}
          </button>
        </div>

        <nav className="flex-1 px-3 space-y-1 overflow-y-auto">
          {sidebarItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "flex items-center gap-3 px-3 py-2.5 rounded-md transition-all group relative",
                  isActive 
                    ? "bg-primary-accent/5 text-primary-accent font-medium" 
                    : "text-muted hover:bg-black/[0.03] hover:text-text-primary"
                )}
              >
                {isActive && (
                  <motion.div 
                    layoutId="active-nav"
                    className="absolute left-0 w-1 h-6 bg-primary-accent rounded-r-full" 
                  />
                )}
                <item.icon size={20} className={cn(isActive ? "text-primary-accent" : "text-muted group-hover:text-text-primary")} />
                {!isSidebarCollapsed && <span>{item.label}</span>}
                {isSidebarCollapsed && (
                  <div className="absolute left-full ml-2 px-2 py-1 bg-text-primary text-white text-xs rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap z-50">
                    {item.label}
                  </div>
                )}
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-border">
          <button className="flex items-center gap-3 px-3 py-2.5 w-full text-muted hover:text-danger hover:bg-danger/5 rounded-md transition-all">
            <LogOut size={20} />
            {!isSidebarCollapsed && <span>Sign out</span>}
          </button>
        </div>
      </aside>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 lg:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="w-[280px] h-full bg-white flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6 flex items-center justify-between border-bottom border-border">
                <span className="font-bold text-xl text-primary-accent">{APP_NAME}</span>
                <button onClick={() => setIsMobileMenuOpen(false)}>
                  <X size={24} />
                </button>
              </div>
              <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
                {sidebarItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                      "flex items-center gap-3 px-4 py-3 rounded-md",
                      location.pathname === item.path ? "bg-primary-accent/5 text-primary-accent font-medium" : "text-muted"
                    )}
                  >
                    <item.icon size={20} />
                    <span>{item.label}</span>
                  </Link>
                ))}
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        <header className="h-16 bg-white border-b border-border flex items-center justify-between px-4 lg:px-8 sticky top-0 z-40">
          <div className="flex items-center gap-4">
            <button 
              className="lg:hidden p-2 hover:bg-black/[0.03] rounded-md"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu size={24} />
            </button>
            <h1 className="text-lg lg:text-xl font-semibold text-text-primary">{title}</h1>
          </div>

          <div className="flex items-center gap-2 lg:gap-4">
            <div className="hidden md:flex items-center bg-black/[0.03] rounded-md px-3 py-1.5 border border-border focus-within:ring-2 focus-within:ring-focus-ring transition-all">
              <Search size={18} className="text-muted" />
              <input 
                type="text" 
                placeholder="Search..." 
                className="bg-transparent border-none outline-none px-2 text-small w-48"
              />
            </div>

            <button className="p-2 hover:bg-black/[0.03] rounded-md relative text-muted">
              <Bell size={20} />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-danger rounded-full border-2 border-white"></span>
            </button>

            <div className="h-8 w-px bg-border mx-1"></div>

            <button className="flex items-center gap-2 p-1 hover:bg-black/[0.03] rounded-md transition-all">
              <div className="w-8 h-8 rounded-full bg-surface flex items-center justify-center text-primary-accent font-bold text-sm border border-primary-accent/20">
                JD
              </div>
              <div className="hidden sm:block text-left">
                <p className="text-xs font-semibold leading-tight">Jean Dupont</p>
                <p className="text-[10px] text-muted leading-tight">Administrator</p>
              </div>
            </button>
          </div>
        </header>

        <main className="flex-1 p-4 lg:p-8 max-w-[1200px] mx-auto w-full">
          {children}
        </main>
      </div>
    </div>
  );
};
