"use client";

import React, { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import PageHeader from '@/components/PageHeader';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import { FiDownload, FiFilter, FiCalendar, FiBarChart2, FiUsers, FiPieChart, FiChevronDown, FiTrendingUp, FiClock } from 'react-icons/fi';
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
      <Button
        variant="secondary"
        size="md"
        icon={<FiCalendar size={16} />}
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        className="gap-3"
      >
        <span className="hidden sm:inline">{periodLabels[selectedPeriod as keyof typeof periodLabels]}</span>
        <span className="sm:hidden">Period</span>
        <FiChevronDown size={16} className={`transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
      </Button>
      
      {isDropdownOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 z-10" 
            onClick={() => setIsDropdownOpen(false)}
          />
          
          {/* Dropdown */}
          <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-2xl shadow-xl z-20 border border-[#F0F0F0] overflow-hidden animate-in slide-in-from-top-2 duration-200">
            {Object.entries(periodLabels).map(([key, label]) => (
              <button 
                key={key}
                className={`w-full text-left px-4 py-3 text-sm transition-all duration-200 ${
                  selectedPeriod === key 
                    ? 'bg-gradient-to-r from-[#F4EBFF] to-[#F8F4FF] text-[#9055FF] font-semibold' 
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
        </>
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
  type: 'performance' | 'skills' | 'engagement' | 'goals' | 'training';
  stats?: {
    value: string;
    label: string;
    trend?: 'up' | 'down' | 'neutral';
  };
}

const ReportCard: React.FC<ReportCardProps> = ({ 
  title, 
  description, 
  icon, 
  lastUpdated, 
  color, 
  id, 
  type,
  stats 
}) => {
  return (
    <Card 
      elevation="md" 
      className="group transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02] border border-[#F0F0F0]"
      hover={false}
    >
      <div className="p-4">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-start gap-3 flex-1">
            <div 
              className="w-10 h-10 rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300"
              style={{ 
                background: `linear-gradient(135deg, ${color} 0%, ${color}CC 100%)` 
              }}
            >
              {React.cloneElement(icon as React.ReactElement, { size: 18 })}
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-bold text-[#131313] text-base mb-1 group-hover:text-[#9055FF] transition-colors duration-300">
                {title}
              </h3>
              <p className="text-xs text-[#6B6B6B] leading-relaxed line-clamp-2">
                {description}
              </p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="xs"
            icon={<FiDownload size={14} />}
            className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex-shrink-0"
          >
            <span className="sr-only">Download</span>
          </Button>
        </div>
        
        {/* Stats Preview */}
        {stats && (
          <div className="mb-4 p-3 bg-gradient-to-r from-[#F8F9FA] to-[#F6F6F3] rounded-lg border border-[#F0F0F0]">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-lg font-bold text-[#131313]">{stats.value}</p>
                <p className="text-xs text-[#6B6B6B] font-medium">{stats.label}</p>
              </div>
              {stats.trend && (
                <div className={`flex items-center gap-1 px-2 py-1 rounded text-xs font-medium ${
                  stats.trend === 'up' ? 'bg-[#E8F8E8] text-[#25CD25]' :
                  stats.trend === 'down' ? 'bg-[#FDECEC] text-[#EB5050]' :
                  'bg-[#F6F6F3] text-[#6B6B6B]'
                }`}>
                  <FiTrendingUp size={10} className={stats.trend === 'down' ? 'rotate-180' : ''} />
                  {stats.trend}
                </div>
              )}
            </div>
          </div>
        )}
        
        {/* Footer */}
        <div className="flex items-center justify-between pt-3 border-t border-[#F0F0F0]">
          <div className="flex items-center gap-1 text-xs text-[#6B6B6B]">
            <FiClock size={10} />
            <span className="truncate">{lastUpdated}</span>
          </div>
          <Link href={`/reports/${id}`}>
            <Button variant="outline" size="xs">
              View
            </Button>
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
      description: 'Comprehensive analysis of team productivity, code quality, and collaboration metrics',
      icon: <FiBarChart2 size={20} />,
      lastUpdated: 'Today, 10:30 AM',
      color: '#9055FF',
      type: 'performance' as const,
      stats: { value: '87%', label: 'Average Performance', trend: 'up' as const }
    },
    {
      id: 'skills-development',
      title: 'Skills Development',
      description: 'Detailed breakdown of team skills, training progress, and identified skill gaps',
      icon: <FiPieChart size={20} />,
      lastUpdated: 'Yesterday, 3:45 PM',
      color: '#4E97FF',
      type: 'skills' as const,
      stats: { value: '73%', label: 'Skills Coverage', trend: 'up' as const }
    },
    {
      id: 'team-engagement',
      title: 'Team Engagement',
      description: 'Analysis of team motivation, satisfaction levels, and workplace engagement metrics',
      icon: <FiUsers size={20} />,
      lastUpdated: '3 days ago',
      color: '#25CD25',
      type: 'engagement' as const,
      stats: { value: '81%', label: 'Engagement Score', trend: 'up' as const }
    },
    {
      id: 'quarterly-goals',
      title: 'Quarterly Goals',
      description: 'Progress tracking and status updates for Q3 2024 team objectives and milestones',
      icon: <FiCalendar size={20} />,
      lastUpdated: '1 week ago',
      color: '#EB5050',
      type: 'goals' as const,
      stats: { value: '68%', label: 'Goals Completed', trend: 'neutral' as const }
    },
    {
      id: 'productivity-analysis',
      title: 'Productivity Analysis',
      description: 'In-depth analysis of team output, efficiency metrics, and productivity trends',
      icon: <FiBarChart2 size={20} />,
      lastUpdated: '2 weeks ago',
      color: '#FFA500',
      type: 'performance' as const,
      stats: { value: '91%', label: 'Productivity Index', trend: 'up' as const }
    },
    {
      id: 'training-report',
      title: 'Training Report',
      description: 'Comprehensive overview of completed training programs and learning achievements',
      icon: <FiUsers size={20} />,
      lastUpdated: '1 month ago',
      color: '#6E38D1',
      type: 'training' as const,
      stats: { value: '85%', label: 'Training Completion', trend: 'up' as const }
    },
  ];

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-[#F6F6F3] via-[#FAFAFA] to-[#F0F0F0]">
      <Sidebar />
      
      {/* Main Content */}
      <div className="flex-1 lg:ml-[320px] p-4 sm:p-6 lg:p-8 overflow-y-auto">
        {/* Mobile top spacing for menu button */}
        <div className="lg:hidden h-16 mb-4"></div>
        
        <div className="max-w-8xl mx-auto space-y-6 lg:space-y-8">
          {/* Header */}
          <PageHeader
            title="Analytics Reports"
            description="View and download comprehensive team analytics and performance reports"
            accentColor="#9055FF"
          >
            <Button
              variant="primary"
              size="md"
              icon={<FiDownload size={16} />}
              className="w-full sm:w-auto"
            >
              <span className="hidden sm:inline">Export All Reports</span>
            </Button>
          </PageHeader>

          {/* Quick Overview */}
          <Card 
            elevation="lg" 
            className="p-6 lg:p-8 bg-gradient-to-r from-white to-[#FAFAFA]"
          >
            <h3 className="text-lg font-bold text-[#131313] mb-6">Quick Overview</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 lg:gap-6">
              <div className="text-center p-4 bg-white rounded-xl border border-[#F0F0F0]">
                <p className="text-2xl font-bold text-[#9055FF] mb-1">6</p>
                <p className="text-xs text-[#6B6B6B] font-medium">Total Reports</p>
              </div>
              <div className="text-center p-4 bg-white rounded-xl border border-[#F0F0F0]">
                <p className="text-2xl font-bold text-[#25CD25] mb-1">4</p>
                <p className="text-xs text-[#6B6B6B] font-medium">Updated Today</p>
              </div>
              <div className="text-center p-4 bg-white rounded-xl border border-[#F0F0F0]">
                <p className="text-2xl font-bold text-[#4E97FF] mb-1">100%</p>
                <p className="text-xs text-[#6B6B6B] font-medium">Data Coverage</p>
              </div>
              <div className="text-center p-4 bg-white rounded-xl border border-[#F0F0F0]">
                <p className="text-2xl font-bold text-[#FFA500] mb-1">24/7</p>
                <p className="text-xs text-[#6B6B6B] font-medium">Monitoring</p>
              </div>
            </div>
          </Card>
          
          {/* Report Cards Grid */}
          <section>
            <Card 
              elevation="lg" 
              className="p-6 lg:p-8 bg-gradient-to-r from-white to-[#F9F9F9] border-l-4 border-[#9055FF]"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-2 h-8 lg:h-10 bg-gradient-to-b from-[#9055FF] to-[#BF82FF] rounded-full"></div>
                <div className="flex-1">
                  <h2 className="text-xl lg:text-2xl font-bold text-[#131313]">Available Reports</h2>
                  <p className="text-sm lg:text-base text-[#6B6B6B] mt-1">Select a report to view detailed analytics and insights</p>
                </div>
                <div className="text-sm text-[#6B6B6B] bg-white/80 backdrop-blur-sm px-4 py-2.5 rounded-2xl border border-[#E5E5E5] shadow-sm">
                  <span className="block sm:inline">Reports Available: </span>
                  <span className="font-semibold text-[#131313]">{reports.length}</span>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
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
                    stats={report.stats}
                  />
                ))}
              </div>
            </Card>
          </section>
          
          {/* Footer */}
          <footer className="text-center py-8 border-t border-[#F0F0F0] bg-white/50 backdrop-blur-sm rounded-2xl">
            <div className="text-sm text-[#6B6B6B]">
              <p className="font-medium">AI Manager Hub • Made with ❤️ by Team 10</p>
              <p className="text-xs mt-1 opacity-75">Digital Business Innovation Lab • 2025 SACE Project</p>
              <div className="mt-4 pt-4 border-t border-[#F0F0F0]/50">
                <p className="text-xs text-[#9B9B9B] italic">
                  ⚠️ Disclaimer: All data, metrics, and information displayed in this application are fictional and created for demonstration purposes only. Any resemblance to real persons, companies, or events is purely coincidental.
                </p>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default ReportsPage; 