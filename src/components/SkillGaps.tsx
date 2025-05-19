"use client";

import React from 'react';
import Card from './ui/Card';
import Badge from './ui/Badge';
import { FiArrowRight, FiBookOpen } from 'react-icons/fi';

interface SkillGap {
  id: string;
  name: string;
  percentage: number;
  recommendation: string;
  platform?: 'LinkedIn' | 'Udemy' | 'Coursera';
}

const SkillGaps = () => {
  const skillGaps: SkillGap[] = [
    {
      id: '1',
      name: 'Data Analysis',
      percentage: 67,
      recommendation: 'Storytelling with Data',
      platform: 'LinkedIn'
    },
    {
      id: '2',
      name: 'Project Management',
      percentage: 53,
      recommendation: 'Agile Project Management',
      platform: 'Udemy'
    },
    {
      id: '3',
      name: 'Generative AI Tools',
      percentage: 50,
      recommendation: 'Prompting with ChatGPT',
      platform: 'Coursera'
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
    <Card>
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-semibold text-[#131313]">Skill Gaps</h3>
        <Badge variant="error" size="sm" dot>
          Needs Attention
        </Badge>
      </div>
      
      <div className="space-y-5">
        {skillGaps.map((skill) => (
          <div 
            key={skill.id} 
            className="p-4 rounded-xl bg-[#F6F6F3] hover:shadow-sm transition-all duration-300"
          >
            <div className="flex justify-between items-start mb-3">
              <div className="w-full pr-4">
                <span className="text-sm font-semibold text-[#131313]">{skill.name}</span>
                <div className="h-1.5 w-full mt-2 bg-[#EDEDED] rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-[#EB5050] rounded-full" 
                    style={{ width: `${skill.percentage}%` }}
                  ></div>
                </div>
              </div>
              <span className="text-base font-bold text-[#131313]">{skill.percentage}%</span>
            </div>
            
            <div className="flex items-center justify-between mt-3">
              <div className="flex items-center gap-2">
                <FiBookOpen size={14} className="text-[#6B6B6B]" />
                <span className="text-xs text-[#6B6B6B]">Recommended course:</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-medium">{skill.recommendation}</span>
                {skill.platform && (
                  <span className={`text-xs px-1.5 py-0.5 rounded-sm ${getPlatformColor(skill.platform)}`}>
                    {skill.platform}
                  </span>
                )}
              </div>
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
    </Card>
  );
};

export default SkillGaps; 