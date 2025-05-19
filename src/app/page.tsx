import Sidebar from '@/components/Sidebar';
import StatCard from '@/components/StatCard';
import ActionsSection from '@/components/ActionsSection';
import PerformanceChart from '@/components/PerformanceChart';
import TeamOverview from '@/components/TeamOverview';
import SkillGaps from '@/components/SkillGaps';
import TeamRecognition from '@/components/TeamRecognition';

export default function Home() {
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
        </div>
      </div>
    </div>
  );
}
