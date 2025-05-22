"use client";

import Sidebar from '@/components/Sidebar';
import PageHeader from '@/components/PageHeader';
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
  const teamMemberSkills = [
    {
      id: '1',
      name: 'Chris Friedkly',
      avatar: '/images/chris_avatar.png',
      role: 'Senior Developer',
      skills: ['JavaScript', 'React', 'Node.js', 'AWS'],
      achievements: ['Completed Advanced AI Course', 'Led Frontend Redesign Project'],
    },
    {
      id: '2',
      name: 'Maggie Johnson',
      avatar: '/images/maggie_avatar.png',
      role: 'UX Designer',
      skills: ['UI Design', 'User Research', 'Figma', 'Prototyping'],
      achievements: ['UX Certification', 'Design System Implementation'],
    },
    {
      id: '3',
      name: 'Gael Harry',
      avatar: '/images/gael_avatar.png',
      role: 'Software Engineer',
      skills: ['Python', 'Django', 'Database Design', 'Docker'],
      achievements: ['Cloud Architecture Certification'],
    },
    {
      id: '4',
      name: 'Jenna Sullivan',
      avatar: '/images/jenna_avatar.png',
      role: 'QA Engineer',
      skills: ['Test Automation', 'Quality Assurance', 'Selenium', 'CI/CD'],
      achievements: ['Test Automation Framework Implementation'],
    },
    {
      id: '5',
      name: 'Marco Rossi',
      avatar: '/images/new_avatars/ryan_avatar.png',
      role: 'Data Scientist',
      skills: ['Machine Learning', 'Data Analysis', 'Python', 'TensorFlow'],
      achievements: ['Data Science Certification', 'Predictive Model Development'],
    },
    {
      id: '6',
      name: 'Emily Chen',
      avatar: '/images/new_avatars/sophia_avatar.png',
      role: 'Product Manager',
      skills: ['Product Strategy', 'Agile', 'User Stories', 'Market Research'],
      achievements: ['Product Management Certification'],
    },
    {
      id: '7',
      name: 'Alex Martinez',
      avatar: '/images/new_avatars/alex_avatar.png',
      role: 'Frontend Developer',
      skills: ['React', 'TypeScript', 'CSS', 'Responsive Design'],
      achievements: ['Frontend Performance Optimization Course'],
    },
    {
      id: '8',
      name: 'Sophia Kim',
      avatar: '/images/new_avatars/laura_avatar.png',
      role: 'Backend Developer',
      skills: ['Java', 'Spring Boot', 'Microservices', 'API Design'],
      achievements: ['Microservices Architecture Certification'],
    },
    {
      id: '9',
      name: 'Daniel Wilson',
      avatar: '/images/new_avatars/daniel_avatar.png',
      role: 'DevOps Engineer',
      skills: ['Kubernetes', 'CI/CD', 'Infrastructure as Code', 'Cloud'],
      achievements: ['DevOps Certification'],
    },
    {
      id: '10',
      name: 'Anna Petrov',
      avatar: '/images/new_avatars/anna_avatar.png',
      role: 'UI Designer',
      skills: ['UI Design', 'Visual Design', 'Design Systems', 'Animation'],
      achievements: ['Design Leadership Course', 'UI Animation Workshop'],
    }
  ];

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-[#F6F6F3] via-[#FAFAFA] to-[#F0F0F0]">
      <Sidebar />
      
      {/* Main Content */}
      <div className="flex-1 lg:ml-[320px] p-3 sm:p-4 md:p-6 lg:p-8 overflow-y-auto">
        {/* Mobile top spacing for menu button */}
        <div className="lg:hidden h-16 mb-3 sm:mb-4"></div>
        
        <div className="max-w-8xl mx-auto space-y-4 sm:space-y-6 lg:space-y-8">
          {/* Main Header */}
          <PageHeader
            title="Dashboard Overview"
            description="Monitor team performance and skill development in real-time"
            accentColor="#4E97FF"
          >
            <div className="text-sm text-[#6B6B6B] bg-white/80 backdrop-blur-sm px-4 py-2.5 rounded-2xl border border-[#E5E5E5] shadow-sm">
              <span className="block sm:inline">Last updated: </span>
              <span className="font-semibold text-[#131313]">Today, 9:41 AM</span>
            </div>
          </PageHeader>
          
          {/* Stats Section */}
          <section>
            <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4 lg:mb-6">
              <div className="w-1 sm:w-1.5 h-6 sm:h-8 lg:h-10 bg-gradient-to-b from-[#9055FF] to-[#BF82FF] rounded-full"></div>
              <div>
                <h2 className="text-base sm:text-lg lg:text-xl font-bold text-[#131313]">Key Metrics</h2>
                <p className="text-xs lg:text-sm text-[#6B6B6B] mt-1 hidden sm:block">Essential performance indicators</p>
              </div>
            </div>
          
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
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
          </section>
            
          {/* Priority Actions */}
          <section>
            <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4 lg:mb-6">
              <div className="w-1 sm:w-1.5 h-6 sm:h-8 lg:h-10 bg-gradient-to-b from-[#EB5050] to-[#FF6B6B] rounded-full"></div>
              <div>
                <h2 className="text-base sm:text-lg lg:text-xl font-bold text-[#131313]">Priority Actions</h2>
                <p className="text-xs lg:text-sm text-[#6B6B6B] mt-1 hidden sm:block">Recommended actions requiring your attention</p>
              </div>
            </div>
            <Card 
              elevation="lg" 
              className="border-l-4 border-[#EB5050] hover:shadow-xl transition-all duration-300"
              padding="sm"
            >
              <ActionsSection />
            </Card>
          </section>
          
          {/* Performance Analytics */}
          <section>
            <div className="flex items-center gap-3 mb-4 lg:mb-6">
              <div className="w-1.5 h-8 lg:h-10 bg-gradient-to-b from-[#4E97FF] to-[#7BB3FF] rounded-full"></div>
              <div>
                <h2 className="text-lg lg:text-xl font-bold text-[#131313]">Performance Analytics</h2>
                <p className="text-xs lg:text-sm text-[#6B6B6B] mt-1">Aggregated team performance metrics and distribution analysis</p>
              </div>
            </div>
            
            <Card 
              elevation="lg" 
              className="border-l-4 border-[#4E97FF] overflow-hidden"
            >
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-0">
                <div className="p-4 sm:p-6 lg:p-8 border-b xl:border-b-0 xl:border-r border-[#F0F0F0]">
                  <h3 className="text-base sm:text-lg font-bold text-[#131313] mb-4 sm:mb-6">Team Performance Metrics</h3>
                  <PerformanceChart />
                </div>
                <div className="p-4 sm:p-6 lg:p-8">
                  <h3 className="text-base sm:text-lg font-bold text-[#131313] mb-4 sm:mb-6">Performance Distribution</h3>
                  <TeamPerformanceDistribution />
                </div>
              </div>
            </Card>
          </section>
            
          {/* Team Management */}
          <section>
            <div className="flex items-center gap-3 mb-4 lg:mb-6">
              <div className="w-1.5 h-8 lg:h-10 bg-gradient-to-b from-[#9055FF] to-[#BF82FF] rounded-full"></div>
              <div>
                <h2 className="text-lg lg:text-xl font-bold text-[#131313]">Team Management</h2>
                <p className="text-xs lg:text-sm text-[#6B6B6B] mt-1">Team overview and recognition opportunities</p>
              </div>
            </div>
            
            <Card 
              elevation="lg" 
              className="border-l-4 border-[#9055FF]"
            >
              <CombinedTeamManagement />
            </Card>
          </section>
          
          {/* Skill Development */}
          <section>
            <div className="flex items-center gap-3 mb-4 lg:mb-6">
              <div className="w-1.5 h-8 lg:h-10 bg-gradient-to-b from-[#EB5050] to-[#FF6B6B] rounded-full"></div>
              <div>
                <h2 className="text-lg lg:text-xl font-bold text-[#131313]">Skill Development</h2>
                <p className="text-xs lg:text-sm text-[#6B6B6B] mt-1">Areas requiring skill development and training</p>
              </div>
            </div>
            
            <Card 
              elevation="lg" 
              className="border-l-4 border-[#EB5050]"
              padding="md"
            >
              <SkillGaps />
            </Card>
          </section>
            
          {/* Skills Analysis */}
          <section>
            <div className="flex items-center gap-3 mb-4 lg:mb-6">
              <div className="w-1.5 h-8 lg:h-10 bg-gradient-to-b from-[#BF82FF] to-[#E5B3FF] rounded-full"></div>
              <div>
                <h2 className="text-lg lg:text-xl font-bold text-[#131313]">Skills Analysis</h2>
                <p className="text-xs lg:text-sm text-[#6B6B6B] mt-1">Comprehensive team skills breakdown and coverage analysis</p>
              </div>
            </div>
            
            <Card 
              elevation="lg" 
              className="border-l-4 border-[#BF82FF] overflow-hidden"
            >
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-0">
                <div className="p-6 lg:p-8 border-b xl:border-b-0 xl:border-r border-[#F0F0F0] bg-gradient-to-br from-[#FAFAFA] to-white">
                  <SkillsRadarChart title="Team Skills Coverage" />
                </div>
                <div className="p-6 lg:p-8 bg-gradient-to-br from-white to-[#FAFAFA]">
                  <SkillsDashboard title="Team Skills Breakdown" skills={teamSkills} />
                </div>
              </div>
            </Card>
          </section>
            
          {/* Team Skills & Achievements */}
          <section className="pb-8">
            <div className="flex items-center gap-3 mb-4 lg:mb-6">
              <div className="w-1.5 h-8 lg:h-10 bg-gradient-to-b from-[#4E97FF] to-[#7BB3FF] rounded-full"></div>
              <div>
                <h2 className="text-lg lg:text-xl font-bold text-[#131313]">Team Skills & Achievements</h2>
                <p className="text-xs lg:text-sm text-[#6B6B6B] mt-1">Skills and learning achievements of team members</p>
              </div>
            </div>
            
            <Card 
              elevation="lg" 
              className="border-l-4 border-[#4E97FF]"
              padding="md"
            >
                             <TeamMemberMetrics members={teamMemberSkills} />
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
}
