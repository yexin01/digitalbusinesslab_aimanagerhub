"use client";

import React from 'react';
import ActionCard from './ActionCard';
import Card from './ui/Card';
import Badge from './ui/Badge';
import { FiArrowRight } from 'react-icons/fi';

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
    <Card className="h-full">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-semibold text-[#131313]">Recommended Actions</h3>
        <Badge variant="primary" size="sm" className="font-medium">
          {actions.length} Actions
        </Badge>
      </div>
      
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
      
      <div className="mt-6 text-center">
        <button className="text-sm font-medium text-[#BF82FF] flex items-center justify-center mx-auto hover:text-[#9055FF] transition-colors">
          View All Actions
          <FiArrowRight className="ml-1" />
        </button>
      </div>
    </Card>
  );
};

export default ActionsSection; 