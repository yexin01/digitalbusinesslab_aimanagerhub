"use client";

import React from 'react';
import ActionCard from './ActionCard';

interface Action {
  id: string;
  type: 'HIGH_PRIORITY' | 'SKILL_GAP' | 'RECOGNITION';
  title: string;
  description: string;
}

const ActionsSection = () => {
  const actions: Action[] = [
    {
      id: '1',
      type: 'HIGH_PRIORITY',
      title: 'Schedule Team Meeting',
      description: 'General engagement score dropped 15% in the last 30 days. AI suggests discussing workload and career growth.'
    },
    {
      id: '2',
      type: 'SKILL_GAP',
      title: 'Data Visualization Skills Need',
      description: '7 team members would benefit from advanced data visualization training.'
    },
    {
      id: '3',
      type: 'RECOGNITION',
      title: 'Celebrate Team Achievement',
      description: 'Project Athena was completed ahead of schedule with excellent results by the entire team.'
    }
  ];

  return (
    <div className="h-full flex flex-col">
      <div className="flex items-baseline justify-between mb-3">
        <div className="flex items-center gap-3">
          <div className="bg-[#F4EBFF] text-[#BF82FF] px-2 py-0.5 rounded-full text-xs font-medium">
            {actions.length} Actions
          </div>
          <span className="text-xs text-[#6B6B6B]">Today</span>
        </div>
      </div>
      
      <div className="w-full h-px bg-[#E5E5E5] mb-3"></div>
      
      {/* Horizontal row of action cards */}
      <div className="grid grid-cols-3 gap-3">
        {actions.map(action => (
          <ActionCard 
            key={action.id}
            type={action.type}
            title={action.title}
            description={action.description}
          />
        ))}
      </div>
    </div>
  );
};

export default ActionsSection; 