"use client";

import React, { useState } from 'react';
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
  FiBriefcase,
  FiX,
  FiChevronRight
} from 'react-icons/fi';
import Badge from './ui/Badge';
import { useSearch } from '@/app/context/SearchContext';

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  href?: string;
  textColor?: string;
  isActive?: boolean;
  badge?: string;
  onClick?: () => void;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ 
  icon, 
  label, 
  href = "#",
  textColor = "text-[#131313]",
  isActive,
  badge,
  onClick
}) => {
  const pathname = usePathname();
  const active = isActive !== undefined ? isActive : pathname === href;
  
  const content = (
    <div className={`
      flex items-center justify-between
      px-4 py-3.5 
      rounded-2xl 
      w-full 
      transition-all
      duration-300
      group
      ${active 
        ? 'bg-gradient-to-r from-[#9055FF] to-[#BF82FF] text-white shadow-lg shadow-purple-500/25 transform scale-[1.02]' 
        : 'hover:bg-gradient-to-r hover:from-[#F4EBFF] hover:to-[#F8F4FF] hover:shadow-md hover:transform hover:scale-[1.01]'
      }
    `}>
      <div className="flex items-center gap-3">
        <div className={`
          p-2 rounded-xl transition-all duration-300
          ${active 
            ? 'text-white bg-white/20' 
            : 'text-[#6B6B6B] group-hover:text-[#9055FF] group-hover:bg-[#F4EBFF]'
          }
        `}>
          {icon}
        </div>
        <span className={`text-sm font-medium transition-all duration-300 ${
          active ? 'text-white' : textColor + ' group-hover:text-[#9055FF]'
        }`}>
          {label}
        </span>
      </div>
      
      <div className="flex items-center gap-2">
        {badge && (
          <Badge 
            variant={active ? "secondary" : "primary"} 
            size="sm" 
            className={active ? "bg-white/20 text-white" : ""}
          >
            {badge}
          </Badge>
        )}
        {active && (
          <div className="flex items-center">
            <FiChevronRight size={16} className="text-white" />
          </div>
        )}
      </div>
    </div>
  );

  if (href) {
    return (
      <Link href={href} onClick={onClick}>
        {content}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className="w-full">
      {content}
    </button>
  );
};

const Sidebar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { searchQuery, setSearchQuery, isSearchOpen, toggleSearchOpen, clearSearch } = useSearch();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const sidebarContent = (
    <>
      {/* Brand */}
      <div className="flex items-center justify-between p-6 border-b border-[#F0F0F0]">
        <div className="flex items-center gap-3">
          <div className="relative w-10 h-10 bg-gradient-to-br from-[#9055FF] to-[#BF82FF] rounded-2xl flex items-center justify-center text-white font-bold shadow-lg">
            <span className="text-lg">AI</span>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-lg text-[#131313] tracking-tight">AI Manager Hub</span>
            <span className="text-xs text-[#6B6B6B] font-medium">Team Management</span>
          </div>
        </div>
        <button 
          className="lg:hidden p-2 hover:bg-[#F6F6F3] rounded-xl transition-colors"
          onClick={closeMobileMenu}
        >
          <FiX size={20} className="text-[#6B6B6B]" />
        </button>
      </div>

      {/* Search */}
      <div className="px-6 py-5">
        <div 
          className="flex items-center gap-3 px-4 py-3.5 bg-gradient-to-r from-[#F6F6F3] to-[#F9F9F6] rounded-2xl transition-all duration-300 hover:shadow-md hover:from-[#F4EBFF] hover:to-[#F8F4FF] cursor-pointer group"
          onClick={() => toggleSearchOpen()}
        >
          <div className="p-1.5 rounded-xl bg-white shadow-sm group-hover:bg-[#F4EBFF] transition-all duration-300">
            <FiSearch size={16} className="text-[#6B6B6B] group-hover:text-[#9055FF]" />
          </div>
          <div className="text-sm text-[#6B6B6B] font-medium group-hover:text-[#9055FF] transition-all duration-300">
            Search anything...
          </div>
          <div className="ml-auto text-xs text-[#9B9B9B] bg-white px-2 py-1 rounded-lg border border-[#E5E5E5]">
            ⌘K
          </div>
        </div>
      </div>

      {/* Main Menu */}
      <div className="px-4 py-2">
        <div className="text-xs font-semibold text-[#9B9B9B] uppercase tracking-wider px-4 mb-4 flex items-center gap-2">
          <div className="w-4 h-px bg-[#E5E5E5]"></div>
          Main Menu
        </div>
        <div className="flex flex-col gap-2">
          <SidebarItem 
            icon={<FiHome size={18} />} 
            label="Dashboard" 
            href="/" 
            onClick={closeMobileMenu}
          />
          <SidebarItem 
            icon={<FiUsers size={18} />}
            label="Team Orchestrator" 
            href="/team-orchestrator"
            onClick={closeMobileMenu}
          />
          <SidebarItem 
            icon={<FiBriefcase size={18} />} 
            label="Projects" 
            href="/projects"
            onClick={closeMobileMenu}
          />
        </div>
      </div>

      <div className="mt-8 px-4 py-2">
        <div className="text-xs font-semibold text-[#9B9B9B] uppercase tracking-wider px-4 mb-4 flex items-center gap-2">
          <div className="w-4 h-px bg-[#E5E5E5]"></div>
          Analytics
        </div>
        <div className="flex flex-col gap-2">
          <SidebarItem 
            icon={<FiFileText size={18} />} 
            label="Reports" 
            href="/reports"
            onClick={closeMobileMenu}
          />
        </div>
      </div>

      <div className="mt-8 px-4 py-2">
        <div className="text-xs font-semibold text-[#9B9B9B] uppercase tracking-wider px-4 mb-4 flex items-center gap-2">
          <div className="w-4 h-px bg-[#E5E5E5]"></div>
          Settings
        </div>
        <div className="flex flex-col gap-2">
          <SidebarItem 
            icon={<FiSettings size={18} />}
            label="Settings" 
            href="/settings"
            onClick={closeMobileMenu}
          />
        </div>
      </div>

      {/* User */}
      <div className="mt-auto p-6 border-t border-[#F0F0F0]">
        <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-[#F6F6F3] to-[#F9F9F6] rounded-2xl group hover:shadow-md transition-all duration-300">
          <div className="relative w-12 h-12 rounded-2xl overflow-hidden shadow-md ring-2 ring-white">
            <Image src="/images/gustavo_avatar.png" alt="User avatar" fill sizes="48px" className="object-cover" />
          </div>
          <div className="flex flex-col flex-1">
            <span className="text-sm font-semibold text-[#131313]">Gustavo Xavier</span>
            <div className="flex items-center gap-2 mt-1">
              <Badge variant="primary" size="sm">Admin</Badge>
              <div className="w-1.5 h-1.5 bg-[#25CD25] rounded-full"></div>
              <span className="text-xs text-[#6B6B6B]">Online</span>
            </div>
          </div>
          <button className="p-2.5 bg-white rounded-xl hover:bg-[#F4EBFF] hover:text-[#9055FF] transition-all duration-300 shadow-sm">
            <FiLogOut size={16} className="text-[#6B6B6B]" />
          </button>
        </div>
      </div>
    </>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex w-[320px] bg-white shadow-2xl h-screen flex-col border-r border-[#F0F0F0] fixed left-0 top-0 z-30">
        {sidebarContent}
      </aside>

      {/* Mobile Menu Button */}
      <button
        className="lg:hidden fixed top-6 left-6 z-50 p-3 bg-white rounded-2xl shadow-lg border border-[#F0F0F0] hover:shadow-xl transition-all duration-300"
        onClick={toggleMobileMenu}
      >
        <FiMenu size={20} className="text-[#6B6B6B]" />
      </button>

      {/* Mobile Sidebar */}
      {isMobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="lg:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-40 transition-opacity duration-300"
            onClick={closeMobileMenu}
          />
          
          {/* Mobile Sidebar */}
          <aside className="lg:hidden fixed left-0 top-0 w-80 max-w-[85vw] bg-white h-full flex flex-col z-50 shadow-2xl transform transition-transform duration-300">
            {sidebarContent}
          </aside>
        </>
      )}
    </>
  );
};

export default Sidebar; 