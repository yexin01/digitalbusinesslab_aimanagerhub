"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  FiHome, 
  FiUsers, 
  FiDownload, 
  FiFileText, 
  FiSettings, 
  FiLogOut, 
  FiSearch,
  FiMenu,
  FiBriefcase 
} from 'react-icons/fi';
import Badge from './ui/Badge';

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  href?: string;
  textColor?: string;
  isActive?: boolean;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ 
  icon, 
  label, 
  href = "#",
  textColor = "text-[#131313]",
  isActive,
}) => {
  const pathname = usePathname();
  const active = isActive !== undefined ? isActive : pathname === href;
  
  return (
    <Link 
      href={href} 
      className={`
        flex items-center gap-3 
        px-5 py-3 
        rounded-xl 
        w-full 
        transition-all
        duration-200
        ${active 
          ? 'bg-[#F4EBFF] text-[#BF82FF]' 
          : 'hover:bg-[#F6F6F3]'
        }
      `}
    >
      <div className={active ? 'text-[#BF82FF]' : 'text-[#6B6B6B]'}>
        {icon}
      </div>
      <span className={`text-sm font-medium ${active ? 'text-[#BF82FF]' : textColor}`}>{label}</span>
      
      {active && (
        <div className="ml-auto w-1.5 h-6 bg-[#BF82FF] rounded-full"></div>
      )}
    </Link>
  );
};

const Sidebar = () => {
  return (
    <aside className="w-[280px] bg-white shadow-xl h-full flex flex-col">
      {/* Brand */}
      <div className="flex items-center justify-between p-6 border-b border-[#F0F0F0]">
        <div className="flex items-center gap-2">
          <div className="relative w-8 h-8 bg-[#BF82FF] rounded-xl flex items-center justify-center text-white font-bold">
            AI
          </div>
          <span className="font-bold text-lg text-[#131313] tracking-tight">AI Manager Hub</span>
        </div>
        <button className="p-1.5 hover:bg-[#F6F6F3] rounded-lg transition-colors">
          <FiMenu size={18} className="text-[#6B6B6B]" />
        </button>
      </div>

      {/* Search */}
      <div className="px-5 py-5">
        <div className="flex items-center gap-2 px-4 py-2.5 bg-[#F6F6F3] rounded-xl transition-all duration-200 hover:bg-[#EDEDED] focus-within:bg-white focus-within:border focus-within:border-[#BF82FF] focus-within:shadow-sm">
          <FiSearch size={16} className="text-[#6B6B6B]" />
          <input 
            type="text" 
            placeholder="Search" 
            className="bg-transparent text-sm text-[#131313] outline-none w-full" 
          />
        </div>
      </div>

      {/* Main Menu */}
      <div className="px-3 py-2">
        <div className="text-xs font-medium text-[#6B6B6B] uppercase tracking-wider px-4 mb-2">
          Main Menu
        </div>
        <div className="flex flex-col gap-1">
          <SidebarItem icon={<FiHome size={18} />} label="Dashboard" href="/" />
          <SidebarItem 
            icon={<FiUsers size={18} />}
            label="Team Orchestrator" 
            href="/team-orchestrator" 
          />
          <SidebarItem icon={<FiBriefcase size={18} />} label="Projects" />
          <SidebarItem icon={<FiDownload size={18} />} label="Export" />
        </div>
      </div>

      <div className="mt-6 px-3 py-2">
        <div className="text-xs font-medium text-[#6B6B6B] uppercase tracking-wider px-4 mb-2">
          Management
        </div>
        <div className="flex flex-col gap-1">
          <SidebarItem icon={<FiFileText size={18} />} label="Reports" />
          <SidebarItem icon={<FiSettings size={18} />} label="Settings" />
        </div>
      </div>

      {/* User */}
      <div className="mt-auto p-5 border-t border-[#F0F0F0]">
        <div className="flex items-center gap-3 p-3 bg-[#F6F6F3] rounded-xl">
          <div className="relative w-10 h-10 rounded-full overflow-hidden shadow-sm">
            <Image src="/images/gustavo_avatar.png" alt="User avatar" fill sizes="40px" className="object-cover" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-[#131313]">Gustavo Xavier</span>
            <Badge variant="primary" size="sm" className="mt-0.5">Admin</Badge>
          </div>
          <button className="ml-auto p-1.5 bg-white rounded-lg hover:bg-[#F4EBFF] transition-colors">
            <FiLogOut size={16} className="text-[#BF82FF]" />
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar; 