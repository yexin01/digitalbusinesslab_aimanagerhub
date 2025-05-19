"use client";

import React from 'react';
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
          icon: <FiAlertCircle size={14} />,
          borderColor: 'border-l-[#EB5050]',
          bgColor: 'bg-[#FDECEC]',
          dotColor: 'text-[#EB5050]'
        };
      case 'SKILL_GAP':
        return {
          variant: 'warning' as const,
          label: 'Skill Gap',
          icon: <FiBriefcase size={14} />,
          borderColor: 'border-l-[#FFA500]',
          bgColor: 'bg-[#FFF4E5]',
          dotColor: 'text-[#FFA500]'
        };
      case 'RECOGNITION':
        return {
          variant: 'success' as const,
          label: 'Recognition',
          icon: <FiAward size={14} />,
          borderColor: 'border-l-[#25CD25]',
          bgColor: 'bg-[#E8F8E8]',
          dotColor: 'text-[#25CD25]'
        };
      default:
        return {
          variant: 'secondary' as const,
          label: '',
          icon: null,
          borderColor: 'border-l-[#7D7D7D]',
          bgColor: 'bg-[#F6F6F3]',
          dotColor: 'text-[#7D7D7D]'
        };
    }
  };

  const typeInfo = getTypeInfo();

  return (
    <div className={`
      bg-white 
      rounded-lg 
      shadow-sm 
      transition-all
      duration-300
      hover:shadow-md
      border-l-3
      ${typeInfo.borderColor} 
      p-3
      flex
      flex-col
      h-full
    `}>
      <div className="flex items-center justify-between mb-1.5">
        <div className="flex items-center gap-1.5">
          <div className={`w-1.5 h-1.5 rounded-full ${typeInfo.dotColor}`}></div>
          <span className="text-xs font-medium text-inherit">{typeInfo.label}</span>
        </div>
      </div>
      
      <h3 className="text-sm font-semibold text-[#131313] mb-1 line-clamp-1">{title}</h3>
      <p className="text-xs text-[#6B6B6B] mb-auto line-clamp-2">{description}</p>
      
      <button className="text-xs font-medium text-[#BF82FF] hover:text-[#9055FF] transition-colors self-end mt-2">
        Take Action
      </button>
    </div>
  );
};

export default ActionCard; 