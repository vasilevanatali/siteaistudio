import { useState } from "react";
import { ChevronDown, Home, Settings, User, Bell, Search, Menu, X, ChevronLeft, ChevronRight } from "lucide-react";
import SectionWrapper from "../components/SectionWrapper";
import ComponentBlock from "../components/ComponentBlock";
import { Button } from "../components/ui/Button";
import { cn } from "../lib/utils";

export default function NavigationSection() {
  const [activeTab, setActiveTab] = useState('overview');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <SectionWrapper 
      title="Navigation" 
      description="Menus, tabs, breadcrumbs, and pagination for wayfinding."
    >
      <ComponentBlock title="Top Navigation Bar" className="flex-col items-stretch gap-0 bg-slate-50 p-0">
        <div className="bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <div className="font-display font-bold text-lg text-slate-900 flex items-center gap-2">
              <div className="w-8 h-8 rounded bg-primary-600 flex items-center justify-center text-white">
                <span className="text-sm">UI</span>
              </div>
              Brand
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <a href="#" className="text-sm font-medium text-slate-900">Dashboard</a>
              <a href="#" className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors">Projects</a>
              <a href="#" className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors">Team</a>
              <a href="#" className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors">Settings</a>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-2">
              <Button variant="ghost" size="icon" className="text-slate-500 hover:text-slate-900"><Search className="w-5 h-5" /></Button>
              <Button variant="ghost" size="icon" className="text-slate-500 hover:text-slate-900 relative">
                <Bell className="w-5 h-5" />
                <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-red-500 border-2 border-white" />
              </Button>
            </div>
            <div className="w-px h-6 bg-slate-200 hidden sm:block mx-2" />
            <div className="relative">
              <button 
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center gap-2 hover:bg-slate-50 p-1 rounded-full transition-colors"
              >
                <img src="https://picsum.photos/seed/user/100/100" alt="User" className="w-8 h-8 rounded-full object-cover border border-slate-200" referrerPolicy="no-referrer" />
                <ChevronDown className="w-4 h-4 text-slate-500 hidden sm:block" />
              </button>
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-slate-200 py-1 z-10">
                  <div className="px-4 py-2 border-b border-slate-100">
                    <p className="text-sm font-medium text-slate-900">Jane Doe</p>
                    <p className="text-xs text-slate-500 truncate">jane@example.com</p>
                  </div>
                  <a href="#" className="flex items-center gap-2 px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 transition-colors"><User className="w-4 h-4" /> Profile</a>
                  <a href="#" className="flex items-center gap-2 px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 transition-colors"><Settings className="w-4 h-4" /> Settings</a>
                  <div className="border-t border-slate-100 my-1" />
                  <a href="#" className="flex items-center gap-2 px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors">Sign out</a>
                </div>
              )}
            </div>
          </div>
        </div>
      </ComponentBlock>

      <ComponentBlock title="Tabs" className="flex-col items-start gap-8">
        <div className="w-full">
          <div className="flex items-center gap-6 border-b border-slate-200 mb-6">
            {['overview', 'analytics', 'reports', 'settings'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={cn(
                  "pb-3 text-sm font-medium capitalize transition-colors relative",
                  activeTab === tab ? "text-primary-600" : "text-slate-500 hover:text-slate-900"
                )}
              >
                {tab}
                {activeTab === tab && (
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-primary-600 rounded-t-full" />
                )}
              </button>
            ))}
          </div>
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 min-h-[100px] flex items-center justify-center text-slate-500 text-sm">
            Content for {activeTab} tab
          </div>
        </div>

        <div className="w-full">
          <div className="inline-flex items-center p-1 bg-slate-100 rounded-lg mb-6">
            {['daily', 'weekly', 'monthly', 'yearly'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={cn(
                  "px-4 py-1.5 text-sm font-medium capitalize rounded-md transition-all",
                  activeTab === tab ? "bg-white text-slate-900 shadow-sm" : "text-slate-500 hover:text-slate-900"
                )}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </ComponentBlock>

      <ComponentBlock title="Breadcrumbs & Pagination" className="flex-col items-start gap-8">
        <nav className="flex items-center text-sm font-medium text-slate-500">
          <a href="#" className="hover:text-slate-900 flex items-center gap-1"><Home className="w-4 h-4" /> Home</a>
          <ChevronRight className="w-4 h-4 mx-2 text-slate-300" />
          <a href="#" className="hover:text-slate-900">Products</a>
          <ChevronRight className="w-4 h-4 mx-2 text-slate-300" />
          <span className="text-slate-900">Wireless Headphones</span>
        </nav>

        <div className="flex items-center gap-2 mt-8">
          <Button variant="outline" size="icon" disabled><ChevronLeft className="w-4 h-4" /></Button>
          <Button variant="primary" size="icon">1</Button>
          <Button variant="ghost" size="icon">2</Button>
          <Button variant="ghost" size="icon">3</Button>
          <span className="px-2 text-slate-400">...</span>
          <Button variant="ghost" size="icon">10</Button>
          <Button variant="outline" size="icon"><ChevronRight className="w-4 h-4" /></Button>
        </div>
      </ComponentBlock>
    </SectionWrapper>
  );
}


