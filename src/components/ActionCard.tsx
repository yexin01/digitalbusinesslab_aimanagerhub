"use client";

import React from 'react';

interface ActionCardProps {
  type: 'HIGH_PRIORITY' | 'SKILL_GAP' | 'RECOGNITION';
  title: string;
  description: string;
}

const ActionCard: React.FC<ActionCardProps> = ({ type, title, description }) => {
  const getBorderColor = () => {
    switch (type) {
      case 'HIGH_PRIORITY':
        return 'border-l-[#BF82FF]';
      case 'SKILL_GAP':
        return 'border-l-[#FFA500]';
      case 'RECOGNITION':
        return 'border-l-[#25CD25]';
      default:
        return 'border-l-[#7D7D7D]';
    }
  };

  const getTypeColor = () => {
    switch (type) {
      case 'HIGH_PRIORITY':
        return 'text-[#BF82FF]';
      case 'SKILL_GAP':
        return 'text-[#FFA500]';
      case 'RECOGNITION':
        return 'text-[#25CD25]';
      default:
        return 'text-[#7D7D7D]';
    }
  };

  const getTypeLabel = () => {
    switch (type) {
      case 'HIGH_PRIORITY':
        return 'HIGH PRIORITY';
      case 'SKILL_GAP':
        return 'SKILL GAP';
      case 'RECOGNITION':
        return 'RECOGNITION';
      default:
        return '';
    }
  };

  return (
    <div className={`bg-[#F8F8F8] rounded-2xl border-l-3 ${getBorderColor()} p-4`}>
      <div className="mb-4">
        <span className={`text-sm font-semibold ${getTypeColor()}`}>{getTypeLabel()}</span>
      </div>
      <h3 className="text-base font-semibold text-[#131313] mb-2">{title}</h3>
      <p className="text-xs text-[#454545]">{description}</p>
    </div>
  );
};

export default ActionCard; 