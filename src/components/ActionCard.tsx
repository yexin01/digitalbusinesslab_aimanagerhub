"use client";

import React from 'react';
import Badge from './ui/Badge';
import { FiAlertCircle, FiBriefcase, FiAward } from 'react-icons/fi';

interface ActionCardProps {
  type: 'HIGH_PRIORITY' | 'SKILL_GAP' | 'RECOGNITION';
  title: string;
  description: string;
}

const ActionCard: React.FC<ActionCardProps> = ({ type, title, description }) => {
  const getTypeInfo = () => {
    switch (type) {
      case 'HIGH_PRIORITY':
        return {
          variant: 'error' as const,
          label: 'High Priority',
          icon: <FiAlertCircle size={16} />,
          borderColor: 'border-l-[#EB5050]'
        };
      case 'SKILL_GAP':
        return {
          variant: 'warning' as const,
          label: 'Skill Gap',
          icon: <FiBriefcase size={16} />,
          borderColor: 'border-l-[#FFA500]'
        };
      case 'RECOGNITION':
        return {
          variant: 'success' as const,
          label: 'Recognition',
          icon: <FiAward size={16} />,
          borderColor: 'border-l-[#25CD25]'
        };
      default:
        return {
          variant: 'secondary' as const,
          label: '',
          icon: null,
          borderColor: 'border-l-[#7D7D7D]'
        };
    }
  };

  const typeInfo = getTypeInfo();

  return (
    <div className={`
      bg-white 
      rounded-xl 
      shadow-sm 
      transition-all
      duration-300
      hover:shadow-md
      border-l-4 
      ${typeInfo.borderColor} 
      p-4
    `}>
      <div className="mb-3">
        <Badge 
          variant={typeInfo.variant} 
          size="sm"
          dot
        >
          {typeInfo.label}
        </Badge>
      </div>
      <h3 className="text-base font-medium text-[#131313] mb-2">{title}</h3>
      <p className="text-sm text-[#6B6B6B]">{description}</p>
      <div className="mt-4 flex justify-end">
        <button className="text-sm font-medium text-[#BF82FF] hover:text-[#9055FF] transition-colors">
          Take Action
        </button>
      </div>
    </div>
  );
};

export default ActionCard; 