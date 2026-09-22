import React from 'react';
import { motion } from 'framer-motion';
import { 
  LayoutDashboard, 
  ArrowLeftRight, 
  Wallet, 
  BarChart3, 
  PiggyBank, 
  Target, 
  Users2, 
  CreditCard, 
  FileSpreadsheet, 
  Settings, 
  ShieldCheck, 
  HelpCircle,
  Sidebar as SidebarIcon
} from 'lucide-react';

export default function Sidebar({ activeItem, setActiveItem, collapsed, setCollapsed }) {
  const mainNav = [
    { id: 'Dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'Transactions', label: 'Transactions', icon: ArrowLeftRight },
    { id: 'Wallet', label: 'Wallet', icon: Wallet },
    { id: 'Analytics', label: 'Analytics', icon: BarChart3 },
    { id: 'Budget', label: 'Budget', icon: PiggyBank },
    { id: 'Savings Goals', label: 'Savings Goals', icon: Target },
  ];

  const adminNav = [
    { id: 'User Management', label: 'User Management', icon: Users2 },
    { id: 'Subscriptions', label: 'Subscriptions', icon: CreditCard },
    { id: 'Reports', label: 'Reports', icon: FileSpreadsheet },
  ];

  const bottomNav = [
    { id: 'Settings', label: 'Settings', icon: Settings },
    { id: 'Security', label: 'Security', icon: ShieldCheck },
    { id: 'Help Center', label: 'Help Center', icon: HelpCircle },
  ];

  return (
    <aside className={`transition-all duration-300 flex flex-col justify-between py-6 px-4 select-none ${
      collapsed ? 'w-20' : 'w-64'
    }`}>
      <div>
        {/* Brand Header */}
        <div className="flex items-center justify-between px-2 mb-8">
          <div className="flex items-center gap-3 cursor-pointer">
            {/* 4-Diamond Clover Logo */}
            <div className="grid grid-cols-2 gap-1 w-7 h-7 flex-shrink-0">
              <span className="w-2.5 h-2.5 rounded-sm bg-[#141814] rotate-45"></span>
              <span className="w-2.5 h-2.5 rounded-sm bg-[#141814] rotate-45"></span>
              <span className="w-2.5 h-2.5 rounded-sm bg-[#141814] rotate-45"></span>
              <span className="w-2.5 h-2.5 rounded-sm bg-[#141814] rotate-45"></span>
            </div>
            {!collapsed && (
              <span className="text-xl font-extrabold tracking-tight text-[#141814] font-display">
                Finora
              </span>
            )}
          </div>

          <button
            onClick={() => setCollapsed(!collapsed)}
            title="Toggle sidebar"
            className="w-7 h-7 rounded-lg flex items-center justify-center text-gray-400 hover:text-black hover:bg-black/5 transition-colors focus:outline-none"
          >
            <SidebarIcon className="w-4 h-4" />
          </button>
        </div>

        {/* Navigation Group 1 */}
        <div className="space-y-1">
          {mainNav.map((item) => {
            const Icon = item.icon;
            const isActive = activeItem === item.id;

            return (
              <button
                key={item.id}
                onClick={() => setActiveItem(item.id)}
                className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-2xl text-xs font-bold transition-all ${
                  isActive
                    ? 'bg-white text-[#141814] shadow-sm border border-black/[0.04]'
                    : 'text-[#656E63] hover:text-[#141814] hover:bg-white/40'
                }`}
              >
                <Icon className={`w-4 h-4 flex-shrink-0 ${isActive ? 'text-[#141814]' : 'text-[#828B80]'}`} />
                {!collapsed && <span>{item.label}</span>}
              </button>
            );
          })}
        </div>

        {/* Separator & Navigation Group 2 */}
        <div className="pt-6 mt-6 border-t border-black/[0.06] space-y-1">
          {adminNav.map((item) => {
            const Icon = item.icon;
            const isActive = activeItem === item.id;

            return (
              <button
                key={item.id}
                onClick={() => setActiveItem(item.id)}
                className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-2xl text-xs font-bold transition-all ${
                  isActive
                    ? 'bg-white text-[#141814] shadow-sm border border-black/[0.04]'
                    : 'text-[#656E63] hover:text-[#141814] hover:bg-white/40'
                }`}
              >
                <Icon className={`w-4 h-4 flex-shrink-0 ${isActive ? 'text-[#141814]' : 'text-[#828B80]'}`} />
                {!collapsed && <span>{item.label}</span>}
              </button>
            );
          })}
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="pt-6 border-t border-black/[0.06] space-y-1">
        {bottomNav.map((item) => {
          const Icon = item.icon;
          const isActive = activeItem === item.id;

          return (
            <button
              key={item.id}
              onClick={() => setActiveItem(item.id)}
              className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-2xl text-xs font-bold transition-all ${
                isActive
                  ? 'bg-white text-[#141814] shadow-sm'
                  : 'text-[#656E63] hover:text-[#141814] hover:bg-white/40'
              }`}
            >
              <Icon className="w-4 h-4 flex-shrink-0 text-[#828B80]" />
              {!collapsed && <span>{item.label}</span>}
            </button>
          );
        })}
      </div>
    </aside>
  );
}
