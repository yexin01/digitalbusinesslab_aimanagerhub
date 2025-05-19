"use client";

import React from 'react';
import Badge from './ui/Badge';
import { FiArrowRight } from 'react-icons/fi';

interface SkillGap {
  id: string;
  name: string;
  percentage: number;
  recommendation: string;
  platform?: 'LinkedIn' | 'Udemy' | 'Coursera';
  affectedMembers?: number;
}

const SkillGaps = () => {
  const skillGaps: SkillGap[] = [
    {
      id: '1',
      name: 'Data Analysis',
      percentage: 67,
      recommendation: 'Storytelling with Data',
      platform: 'LinkedIn',
      affectedMembers: 5
    },
    {
      id: '2',
      name: 'Project Management',
      percentage: 53,
      recommendation: 'Agile Project Management',
      platform: 'Udemy',
      affectedMembers: 4
    },
    {
      id: '3',
      name: 'Generative AI Tools',
      percentage: 50,
      recommendation: 'Prompting with ChatGPT',
      platform: 'Coursera',
      affectedMembers: 7
    }
  ];

  const getPlatformColor = (platform?: 'LinkedIn' | 'Udemy' | 'Coursera') => {
    switch (platform) {
      case 'LinkedIn':
        return 'bg-blue-100 text-blue-600';
      case 'Udemy':
        return 'bg-purple-100 text-purple-600';
      case 'Coursera':
        return 'bg-green-100 text-green-600';
      default:
        return 'bg-gray-100 text-gray-600';
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-2">
        <Badge variant="error" size="sm" dot className="text-xs py-0.5">
          Needs Attention
        </Badge>
      </div>
      
      <div className="grid grid-cols-3 gap-3">
        {skillGaps.map((skill) => (
          <div 
            key={skill.id} 
            className="p-3 rounded-lg bg-[#F6F6F3] hover:shadow-sm transition-all duration-300 flex flex-col h-full"
          >
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-semibold text-[#131313] line-clamp-1">{skill.name}</span>
              <span className="text-sm font-bold text-[#131313] ml-1">{skill.percentage}%</span>
            </div>
            
            <div className="h-1.5 w-full bg-[#EDEDED] rounded-full overflow-hidden mb-2">
                  <div 
                    className="h-full bg-[#EB5050] rounded-full" 
                    style={{ width: `${skill.percentage}%` }}
                  ></div>
            </div>
            
            <div className="flex items-center justify-between mt-auto">
              <span className="text-xs text-[#6B6B6B]">{skill.affectedMembers} members</span>
                {skill.platform && (
                  <span className={`text-xs px-1.5 py-0.5 rounded-sm ${getPlatformColor(skill.platform)}`}>
                    {skill.platform}
                  </span>
                )}
            </div>
          </div>
        ))}
      </div>
      
      <div className="flex justify-center mt-5">
        <button className="flex items-center gap-1 text-sm font-medium text-[#BF82FF] hover:text-[#9055FF] transition-colors">
          View All Skill Gaps
          <FiArrowRight size={14} />
        </button>
      </div>
    </div>
  );
};

export default SkillGaps; 