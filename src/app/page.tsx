"use client";

import Sidebar from '@/components/Sidebar';
import StatCard from '@/components/StatCard';
import ActionsSection from '@/components/ActionsSection';
import PerformanceChart from '@/components/PerformanceChart';
import SkillGaps from '@/components/SkillGaps';
import SkillsRadarChart from '@/components/SkillsRadarChart';
import SkillsDashboard from '@/components/SkillsDashboard';
import TeamMemberMetrics from '@/components/TeamMemberMetrics';
import TeamPerformanceDistribution from '@/components/TeamPerformanceDistribution';
import Card from '@/components/ui/Card';
import CombinedTeamManagement from '@/components/CombinedTeamManagement';

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
    {
      id: '5',
      name: 'Marco Rossi',
      avatar: '/images/new_avatars/ryan_avatar.png',
      role: 'Data Scientist',
      metric: {
        name: 'Data Quality',
        value: '78%',
        trend: 'up' as const,
        data: [65, 68, 72, 71, 73, 75, 76, 78],
      },
    },
    {
      id: '6',
      name: 'Emily Chen',
      avatar: '/images/new_avatars/sophia_avatar.png',
      role: 'Product Manager',
      metric: {
        name: 'Feature Delivery',
        value: '65%',
        trend: 'stable' as const,
        data: [72, 70, 68, 65, 64, 63, 64, 65],
      },
    },
    {
      id: '7',
      name: 'Alex Martinez',
      avatar: '/images/new_avatars/alex_avatar.png',
      role: 'Frontend Developer',
      metric: {
        name: 'Code Performance',
        value: '81%',
        trend: 'up' as const,
        data: [70, 72, 74, 75, 77, 79, 80, 81],
      },
    },
    {
      id: '8',
      name: 'Sophia Kim',
      avatar: '/images/new_avatars/laura_avatar.png',
      role: 'Backend Developer',
      metric: {
        name: 'API Reliability',
        value: '75%',
        trend: 'up' as const,
        data: [62, 65, 68, 70, 72, 73, 74, 75],
      },
    },
    {
      id: '9',
      name: 'Daniel Wilson',
      avatar: '/images/new_avatars/daniel_avatar.png',
      role: 'DevOps Engineer',
      metric: {
        name: 'Deployment Success',
        value: '68%',
        trend: 'down' as const,
        data: [76, 75, 74, 72, 70, 69, 68, 68],
      },
    },
    {
      id: '10',
      name: 'Anna Petrov',
      avatar: '/images/new_avatars/anna_avatar.png',
      role: 'UI Designer',
      metric: {
        name: 'Design Satisfaction',
        value: '89%',
        trend: 'up' as const,
        data: [75, 78, 80, 82, 84, 86, 88, 89],
      },
    }
  ];

  return (
    <div className="flex h-screen bg-[#F6F6F3]">
      <Sidebar />
      
      <div className="flex-1 p-6 ml-6 overflow-y-auto">
        <div className="max-w-7xl mx-auto">
          {/* Main Header */}
          <div className="bg-white bg-opacity-70 backdrop-blur-md rounded-2xl p-6 mb-8 shadow-sm border-l-4 border-[#4E97FF]">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-2 h-10 bg-gradient-to-b from-[#4E97FF] to-[#BF82FF] rounded-full mr-4"></div>
                <div>
            <h1 className="text-3xl font-bold text-[#131313] tracking-tight">Dashboard Overview</h1>
                  <p className="text-sm text-[#6B6B6B] mt-1">Monitor team performance and skill development</p>
                </div>
              </div>
              <div className="text-sm text-[#6B6B6B] bg-[#F6F6F3] px-3 py-1.5 rounded-full">
              Last updated: <span className="font-medium">Today, 9:41 AM</span>
              </div>
            </div>
          </div>
          
          {/* Stats Section */}
          <div className="mb-8">
            <div className="flex items-baseline mb-4">
              <div className="w-1 h-8 bg-[#9055FF] rounded-full mr-3"></div>
              <h2 className="text-xl font-semibold text-[#131313]">Key Metrics</h2>
            </div>
          
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
              <StatCard 
                title="Team Engagement" 
                value="78%" 
                trend={{ direction: 'down', value: '6% from last month' }}
              />
              <StatCard 
                title="Learning Participation" 
                value="92%" 
                trend={{ direction: 'up', value: '12% from last month' }}
              />
              <StatCard 
                title="Team Size" 
                value="10" 
                trend={{ direction: 'up', value: '4 new members' }}
              />
              <StatCard 
                title="Retention Risk" 
                value="86%" 
                trend={{ direction: 'none', value: 'No change' }}
              />
            </div>
            </div>
            
          {/* Priority Actions - Compact version */}
          <div className="mb-8">
            <div className="flex items-baseline mb-3">
              <div className="w-1 h-8 bg-[#EB5050] rounded-full mr-3"></div>
              <h2 className="text-xl font-semibold text-[#131313]">Priority Actions</h2>
              <p className="text-xs text-[#6B6B6B] ml-2">Recommended actions requiring your attention</p>
            </div>
            <Card elevation="md" className="transition-all duration-300 border-l-4 border-[#EB5050] p-4">
              <ActionsSection />
            </Card>
          </div>
          
          {/* Combined Performance Section */}
          <div className="mb-8">
            <div className="flex items-baseline mb-4">
              <div className="w-1 h-8 bg-[#4E97FF] rounded-full mr-3"></div>
              <h2 className="text-xl font-semibold text-[#131313]">Performance Analytics</h2>
              <p className="text-xs text-[#6B6B6B] ml-2">Team performance metrics and distribution analysis</p>
            </div>
            
            <Card elevation="md" className="transition-all duration-300 border-l-4 border-[#4E97FF]">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6">
                <div className="border-r-2 border-[#F4EBFF] pr-6">
                  <h3 className="text-lg font-semibold text-[#131313] mb-4">Performance Metrics</h3>
                  <PerformanceChart />
                </div>
                <div className="pl-2">
                  <h3 className="text-lg font-semibold text-[#131313] mb-4">Performance Distribution</h3>
                  <TeamPerformanceDistribution />
                </div>
              </div>
            </Card>
          </div>
            
          {/* Team Section */}
          <div className="mb-8">
            <div className="flex items-baseline mb-4">
              <div className="w-1 h-8 bg-[#9055FF] rounded-full mr-3"></div>
              <h2 className="text-xl font-semibold text-[#131313]">Team Management</h2>
              <p className="text-xs text-[#6B6B6B] ml-2">Team overview and recognition opportunities</p>
            </div>
            
            <Card elevation="md" className="transition-all duration-300 border-l-4 border-[#9055FF]">
              <CombinedTeamManagement />
            </Card>
          </div>
          
          {/* Skill Development */}
          <div className="mb-8">
            <div className="flex items-baseline mb-4">
              <div className="w-1 h-8 bg-[#EB5050] rounded-full mr-3"></div>
              <h2 className="text-xl font-semibold text-[#131313]">Skill Development</h2>
              <p className="text-xs text-[#6B6B6B] ml-2">Areas requiring skill development and training</p>
            </div>
            
            <Card elevation="md" className="transition-all duration-300 border-l-4 border-[#EB5050] mb-6">
              <div className="px-6 pb-6">
                <SkillGaps />
              </div>
            </Card>
            </div>
            
            {/* Skills Analysis section */}
          <div className="mb-8">
            <div className="flex items-baseline mb-4">
              <div className="w-1 h-8 bg-[#BF82FF] rounded-full mr-3"></div>
              <h2 className="text-xl font-semibold text-[#131313]">Skills Analysis</h2>
              <p className="text-xs text-[#6B6B6B] ml-2">Comprehensive team skills breakdown and coverage analysis</p>
              </div>
            
            <Card elevation="md" className="transition-all duration-300 border-l-4 border-[#BF82FF]">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 p-6">
                <div className="bg-white bg-opacity-50 rounded-xl p-4 border border-[#F0F0F0]">
                <SkillsRadarChart title="Team Skills Coverage" />
                </div>
                <div className="bg-white bg-opacity-50 rounded-xl p-4 border border-[#F0F0F0]">
                <SkillsDashboard title="Team Skills Breakdown" skills={teamSkills} />
                </div>
              </div>
            </Card>
            </div>
            
            {/* Team Member Metrics section */}
          <div className="mb-8">
            <div className="flex items-baseline mb-4">
              <div className="w-1 h-8 bg-[#4E97FF] rounded-full mr-3"></div>
              <h2 className="text-xl font-semibold text-[#131313]">Individual Performance</h2>
              <p className="text-xs text-[#6B6B6B] ml-2">Detailed performance metrics for each team member</p>
              </div>
            
            <Card elevation="md" className="transition-all duration-300 border-l-4 border-[#4E97FF] p-6">
              <TeamMemberMetrics 
                title="Team Member Performance Metrics" 
                members={teamMemberMetrics} 
              />
            </Card>
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
}
