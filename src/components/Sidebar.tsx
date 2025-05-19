"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const SidebarItem = ({ 
  icon, 
  activeIcon,
  label, 
  href = "#",
  textColor = "text-[#131313]"
}: { 
  icon: string, 
  activeIcon?: string,
  label: string, 
  href?: string,
  textColor?: string
}) => {
  const pathname = usePathname();
  const isActive = pathname === href;
  const iconSrc = isActive && activeIcon ? activeIcon : icon;
  
  return (
    <Link href={href} className={`flex items-center gap-3 px-5 py-3 rounded-3xl w-full ${isActive ? 'bg-[#F3E8FF]' : ''}`}>
      <Image src={`/images/${iconSrc}`} alt={label} width={24} height={24} />
      <span className={`text-sm ${textColor}`}>{label}</span>
    </Link>
  );
};

const Sidebar = () => {
  return (
    <aside className="w-[280px] bg-white rounded-2xl h-full flex flex-col">
      {/* Brand */}
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center gap-1.5 px-4">
          <div className="relative w-6 h-6">
            <Image src="/images/logo.png" alt="AI Manager Hub Logo" fill sizes="24px" className="object-contain" />
            <div className="absolute inset-0 bg-white rounded-full opacity-60"></div>
          </div>
          <span className="font-bold text-xl">AI Manager Hub</span>
        </div>
        <button className="p-1 bg-[#F6F6F3] rounded-lg">
          <Image src="/images/settings_icon.svg" alt="Collapse" width={16} height={16} />
        </button>
      </div>

      {/* Search */}
      <div className="px-5 pb-3">
        <div className="flex items-center gap-2 px-4 py-3 border border-[#F1F1F1] rounded-2xl">
          <Image src="/images/search_icon.svg" alt="Search" width={16} height={16} />
          <span className="text-sm text-[#7D7D7D]">Search</span>
        </div>
      </div>

      {/* Main Menu */}
      <div className="flex flex-col gap-2 p-2 flex-grow">
        <SidebarItem icon="dashboard_icon.svg" label="Dashboard" href="/" />
        <SidebarItem 
          icon="team_orchestrator_icon.svg" 
          activeIcon="team_orchestrator_active_icon.svg"
          label="Team Orchestrator" 
          href="/team-orchestrator" 
        />
        <SidebarItem icon="export_icon.svg" label="Export" />
      </div>

      {/* User */}
      <div className="flex flex-col gap-3 p-4 mt-auto">
        <div className="flex items-center gap-3 px-5">
          <div className="relative w-10 h-10 rounded-full overflow-hidden">
            <Image src="/images/gustavo_avatar.png" alt="User avatar" fill sizes="40px" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-medium">Gustavo Xavier</span>
            <div className="px-1.5 py-0.5 bg-[#F3E8FF] rounded-3xl">
              <span className="text-xs font-semibold">Admin</span>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col gap-0.5">
          <SidebarItem icon="reports_icon.svg" label="Reports" />
          <SidebarItem icon="settings_icon.svg" label="Settings" />
          <SidebarItem icon="logout_icon.svg" label="Log out" textColor="text-[#B01212]" />
        </div>
      </div>
    </aside>
  );
};

export default Sidebar; 