"use client";

import React, { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import Card from '@/components/ui/Card';
import { FiDownload, FiFilter, FiCalendar, FiBarChart2, FiUsers, FiPieChart, FiChevronDown } from 'react-icons/fi';
import Link from 'next/link';

// Period selector component
const PeriodSelector = () => {
  const [selectedPeriod, setSelectedPeriod] = useState<string>('last-quarter');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
  const periodLabels = {
    'last-month': 'Last Month',
    'last-quarter': 'Last Quarter',
    'last-year': 'Last Year',
    'custom': 'Custom Range'
  };
  
  return (
    <div className="relative">
      <button 
        className="flex items-center gap-2 bg-white px-4 py-2 rounded-xl shadow-sm border border-[#F0F0F0] text-[#131313]"
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      >
        <FiCalendar size={16} className="text-[#9055FF]" />
        <span className="text-sm font-medium">{periodLabels[selectedPeriod as keyof typeof periodLabels]}</span>
        <FiChevronDown size={16} className="text-[#6B6B6B]" />
      </button>
      
      {isDropdownOpen && (
        <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-xl shadow-lg z-10 border border-[#F0F0F0] overflow-hidden">
          {Object.entries(periodLabels).map(([key, label]) => (
            <button 
              key={key}
              className={`w-full text-left px-4 py-2.5 text-sm transition-colors ${
                selectedPeriod === key 
                  ? 'bg-[#F4EBFF] text-[#9055FF] font-medium' 
                  : 'text-[#131313] hover:bg-[#F6F6F3]'
              }`}
              onClick={() => {
                setSelectedPeriod(key);
                setIsDropdownOpen(false);
              }}
            >
              {label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

// Report card component
interface ReportCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  lastUpdated: string;
  color: string;
  id: string;
  type: 'performance' | 'skills' | 'engagement' | 'goals';
}

const ReportCard: React.FC<ReportCardProps> = ({ title, description, icon, lastUpdated, color, id, type }) => {
  return (
    <Card elevation="md" className="transition-all duration-300 hover:shadow-lg">
      <div className="p-5">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className={`w-10 h-10 bg-[#F4EBFF] rounded-lg flex items-center justify-center text-[${color}]`}>
              {icon}
            </div>
            <div>
              <h3 className="font-semibold text-[#131313]">{title}</h3>
              <p className="text-xs text-[#6B6B6B]">{description}</p>
            </div>
          </div>
          <button className="p-2 hover:bg-[#F4EBFF] rounded-lg transition-colors">
            <FiDownload size={16} className="text-[#9055FF]" />
          </button>
        </div>
        
        <div 
          className={`relative h-40 w-full rounded-lg overflow-hidden mb-3 flex items-center justify-center`}
          style={{
            background: `linear-gradient(45deg, ${color}22, ${color}11)`,
            border: `1px solid ${color}33`
          }}
        >
          <div className={`text-[${color}] flex flex-col items-center justify-center`}>
            {React.cloneElement(icon as React.ReactElement, { size: 36, className: "opacity-50" })}
            <p className="text-sm text-[#6B6B6B] mt-3 font-medium">Report Preview</p>
          </div>
        </div>
        
        <div className="flex justify-between items-center mt-2">
          <span className="text-xs text-[#6B6B6B]">Updated: {lastUpdated}</span>
          <Link href={`/reports/${id}`}>
            <span className="text-xs text-[#9055FF] font-medium hover:underline cursor-pointer">
              View Details
            </span>
          </Link>
        </div>
      </div>
    </Card>
  );
};

const ReportsPage = () => {
  const [filterActive, setFilterActive] = useState(false);
  
  const reports = [
    {
      id: 'team-performance',
      title: 'Team Performance',
      description: 'Aggregated team performance metrics',
      icon: <FiBarChart2 size={20} />,
      lastUpdated: 'Today, 10:30 AM',
      color: '#9055FF',
      type: 'performance' as const,
    },
    {
      id: 'skills-development',
      title: 'Skills Development',
      description: 'Team skills analysis and training gaps',
      icon: <FiPieChart size={20} />,
      lastUpdated: 'Yesterday, 3:45 PM',
      color: '#4E97FF',
      type: 'skills' as const,
    },
    {
      id: 'team-engagement',
      title: 'Team Engagement',
      description: 'Team involvement and engagement analysis',
      icon: <FiUsers size={20} />,
      lastUpdated: '3 days ago',
      color: '#25CD25',
      type: 'engagement' as const,
    },
    {
      id: 'quarterly-goals',
      title: 'Quarterly Goals',
      description: 'Progress status of Q3 2024 objectives',
      icon: <FiCalendar size={20} />,
      lastUpdated: '1 week ago',
      color: '#EB5050',
      type: 'goals' as const,
    },
    {
      id: 'productivity-analysis',
      title: 'Productivity Analysis',
      description: 'Aggregated team productivity metrics',
      icon: <FiBarChart2 size={20} />,
      lastUpdated: '2 weeks ago',
      color: '#FFA500',
      type: 'performance' as const,
    },
    {
      id: 'training-report',
      title: 'Training Report',
      description: 'Team training progress and achievements',
      icon: <FiUsers size={20} />,
      lastUpdated: '1 month ago',
      color: '#6E38D1',
      type: 'skills' as const,
    },
  ];

  return (
    <div className="flex h-screen bg-[#F6F6F3]">
      <Sidebar />
      
      <div className="flex-1 p-6 ml-6 overflow-y-auto">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="bg-white bg-opacity-70 backdrop-blur-md rounded-2xl p-6 mb-8 shadow-sm border-l-4 border-[#9055FF]">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-2 h-10 bg-gradient-to-b from-[#9055FF] to-[#BF82FF] rounded-full mr-4"></div>
                <div>
                  <h1 className="text-3xl font-bold text-[#131313] tracking-tight">Reports</h1>
                  <p className="text-sm text-[#6B6B6B] mt-1">View and download aggregated team reports</p>
                </div>
              </div>
              
              <button className="flex items-center gap-2 bg-[#F4EBFF] hover:bg-[#EDE5FF] text-[#9055FF] px-4 py-2 rounded-xl transition-colors">
                <FiDownload size={16} />
                <span className="text-sm font-medium">Export All</span>
              </button>
            </div>
          </div>
          
          {/* Report Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {reports.map(report => (
              <ReportCard 
                key={report.id}
                id={report.id}
                title={report.title}
                description={report.description}
                icon={report.icon}
                lastUpdated={report.lastUpdated}
                color={report.color}
                type={report.type}
              />
            ))}
          </div>
          
          {/* Footer */}
          <div className="mt-6 pb-6">
            <div className="text-center text-sm text-[#6B6B6B] opacity-70">
              <p>AI Manager Hub • Made with ❤️ by Team 10 • Digital Business Innovation Lab • 2025 SACE Project</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportsPage; 