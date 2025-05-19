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
    <div className="flex h-screen p-6 bg-[#F6F6F3]">
      <Sidebar />
      
      <div className="flex-1 ml-6 overflow-y-auto">
        <h1 className="text-4xl font-semibold text-black mb-8">Dashboard Overview</h1>
        
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
            <h2 className="text-2xl font-semibold text-black mb-4">Skills Analysis</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <SkillsRadarChart title="Team Skills Coverage" />
              <SkillsDashboard title="Team Skills Breakdown" skills={teamSkills} />
            </div>
          </div>
          
          {/* Team Member Metrics section */}
          <div className="lg:col-span-12">
            <h2 className="text-2xl font-semibold text-black mb-4">Individual Performance</h2>
            <TeamMemberMetrics 
              title="Team Member Performance Metrics" 
              members={teamMemberMetrics} 
            />
          </div>
        </div>
      </div>
    </div>
  );
}
