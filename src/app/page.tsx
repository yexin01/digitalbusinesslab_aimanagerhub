"use client";

import Sidebar from '@/components/Sidebar';
import StatCard from '@/components/StatCard';
import ActionsSection from '@/components/ActionsSection';
import PerformanceChart from '@/components/PerformanceChart';
import TeamOverview from '@/components/TeamOverview';
import SkillGaps from '@/components/SkillGaps';
import TeamRecognition from '@/components/TeamRecognition';
import SkillsRadarChart from '@/components/SkillsRadarChart';
import SkillsDashboard from '@/components/SkillsDashboard';
import TeamMemberMetrics from '@/components/TeamMemberMetrics';

export default function Home() {
  // Sample data for the skills dashboard
  const teamSkills = [
    { id: '1', name: 'Machine Learning', percentage: 65, color: '#BF82FF' },
    { id: '2', name: 'API Integration', percentage: 78, color: '#9055FF' },
    { id: '3', name: 'Project Management', percentage: 90, color: '#25CD25' },
    { id: '4', name: 'Front-End Development', percentage: 81, color: '#4E97FF' },
    { id: '5', name: 'Data Visualization', percentage: 56, color: '#EB5050' },
    { id: '6', name: 'UI/UX Design', percentage: 85, color: '#6E38D1' },
  ];

  // Sample data for team member metrics
  const teamMemberMetrics = [
    {
      id: '1',
      name: 'Chris Friedkly',
      avatar: '/images/chris_avatar.png',
      role: 'Senior Developer',
      metric: {
        name: 'Goal Completion',
        value: '92%',
        trend: 'up' as const,
        data: [65, 59, 80, 81, 56, 70, 90, 92],
      },
    },
    {
      id: '2',
      name: 'Maggie Johnson',
      avatar: '/images/maggie_avatar.png',
      role: 'UX Designer',
      metric: {
        name: 'Productivity',
        value: '87%',
        trend: 'up' as const,
        data: [70, 72, 75, 78, 75, 80, 82, 87],
      },
    },
    {
      id: '3',
      name: 'Gael Harry',
      avatar: '/images/gael_avatar.png',
      role: 'Software Engineer',
      metric: {
        name: 'Code Quality',
        value: '64%',
        trend: 'down' as const,
        data: [85, 80, 75, 70, 68, 65, 62, 64],
      },
    },
    {
      id: '4',
      name: 'Jenna Sullivan',
      avatar: '/images/jenna_avatar.png',
      role: 'QA Engineer',
      metric: {
        name: 'Test Coverage',
        value: '80%',
        trend: 'stable' as const,
        data: [78, 82, 80, 79, 81, 80, 77, 80],
      },
    },
  ];

  return (
    <div className="flex h-screen bg-[#F6F6F3]">
      <Sidebar />
      
      <div className="flex-1 p-8 ml-6 overflow-y-auto">
        <div className="max-w-7xl mx-auto">
          <header className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold text-[#131313] tracking-tight">Dashboard Overview</h1>
            <div className="text-sm text-[#6B6B6B]">
              Last updated: <span className="font-medium">Today, 9:41 AM</span>
            </div>
          </header>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Top row - Stats */}
            <div className="lg:col-span-3">
              <StatCard 
                title="Team Engagement" 
                value="78%" 
                trend={{ direction: 'down', value: '6% from last month' }}
              />
            </div>
            <div className="lg:col-span-3">
              <StatCard 
                title="Learning Participation" 
                value="92%" 
                trend={{ direction: 'up', value: '12% from last month' }}
              />
            </div>
            <div className="lg:col-span-3">
              <StatCard 
                title="Goal Completion" 
                value="85%" 
                trend={{ direction: 'up', value: '12% from last month' }}
              />
            </div>
            <div className="lg:col-span-3">
              <StatCard 
                title="Retention Risk" 
                value="86%" 
                trend={{ direction: 'none', value: 'No change' }}
              />
            </div>
            
            {/* Second row */}
            <div className="lg:col-span-6">
              <ActionsSection />
            </div>
            <div className="lg:col-span-6">
              <TeamOverview />
            </div>
            
            {/* Third row */}
            <div className="lg:col-span-6">
              <PerformanceChart />
            </div>
            <div className="lg:col-span-6">
              <div className="grid grid-cols-1 gap-6">
                <SkillGaps />
                <TeamRecognition />
              </div>
            </div>
            
            {/* Skills Analysis section */}
            <div className="lg:col-span-12">
              <div className="bg-white bg-opacity-50 backdrop-blur-sm rounded-xl p-4 mb-4">
                <h2 className="text-xl font-semibold text-[#131313] flex items-center">
                  <span className="inline-block w-1 h-6 bg-[#BF82FF] rounded-full mr-2"></span>
                  Skills Analysis
                </h2>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <SkillsRadarChart title="Team Skills Coverage" />
                <SkillsDashboard title="Team Skills Breakdown" skills={teamSkills} />
              </div>
            </div>
            
            {/* Team Member Metrics section */}
            <div className="lg:col-span-12">
              <div className="bg-white bg-opacity-50 backdrop-blur-sm rounded-xl p-4 mb-4">
                <h2 className="text-xl font-semibold text-[#131313] flex items-center">
                  <span className="inline-block w-1 h-6 bg-[#BF82FF] rounded-full mr-2"></span>
                  Individual Performance
                </h2>
              </div>
              <TeamMemberMetrics 
                title="Team Member Performance Metrics" 
                members={teamMemberMetrics} 
              />
            </div>
            
            {/* Footer */}
            <div className="lg:col-span-12 mt-4 pb-8">
              <div className="text-center text-sm text-[#6B6B6B] opacity-70">
                <p>AI Manager Hub • Made with ❤️ by Team 10 • Digital Business Innovation Lab • 2025 SACE Project</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
