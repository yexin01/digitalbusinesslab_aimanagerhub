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
      title: 'Schedule 1:1 with Sarah Chen',
      description: 'Engagement score dropped 15% in the last 30 days. AI suggests discussing workload and career growth.'
    },
    {
      id: '2',
      type: 'SKILL_GAP',
      title: 'Data Visualization Skills Need',
      description: '3 team members would benefit from advanced data visualization training.'
    },
    {
      id: '3',
      type: 'RECOGNITION',
      title: 'Celebrate Team Achievement',
      description: 'Project Athena was completed ahead of schedule with excellent results.'
    }
  ];

  return (
    <div className="bg-white p-6 rounded-2xl">
      <h3 className="text-xl font-semibold text-[#131313] mb-6">Recommended Actions</h3>
      
      <div className="grid grid-cols-1 gap-4">
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