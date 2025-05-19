"use client";

import React from 'react';
import ProgressBar from './ProgressBar';

interface Skill {
  id: string;
  name: string;
  percentage: number;
  color?: string;
}

interface SkillsDashboardProps {
  title?: string;
  skills: Skill[];
  className?: string;
}

const SkillsDashboard: React.FC<SkillsDashboardProps> = ({
  title = "Team Skills Dashboard",
  skills,
  className = '',
}) => {
  // Custom colors based on the design (purple theme)
  const defaultColors = ['#BF82FF', '#9055FF', '#6E38D1', '#25CD25', '#4E97FF'];
  
  return (
    <div className={`bg-white rounded-2xl p-6 ${className}`}>
      {title && <h3 className="text-xl font-semibold text-[#131313] mb-4">{title}</h3>}
      
      <div className="space-y-5">
        {skills.map((skill, index) => (
          <ProgressBar
            key={skill.id}
            title={skill.name}
            percentage={skill.percentage}
            color={skill.color || defaultColors[index % defaultColors.length]}
            height={10}
            showPercentage={true}
          />
        ))}
      </div>
      
      <div className="mt-6 text-sm text-[#6B6B6B]">
        <div className="flex items-center">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
            <path d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16Z" fill="#EDEDED"/>
            <path d="M12 7H9V4C9 3.44772 8.55228 3 8 3C7.44772 3 7 3.44772 7 4V7H4C3.44772 7 3 7.44772 3 8C3 8.55228 3.44772 9 4 9H7V12C7 12.5523 7.44772 13 8 13C8.55228 13 9 12.5523 9 12V9H12C12.5523 9 13 8.55228 13 8C13 7.44772 12.5523 7 12 7Z" fill="#25CD25"/>
          </svg>
          Above industry average
        </div>
        <div className="flex items-center mt-2">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
            <path d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16Z" fill="#EDEDED"/>
            <path d="M12 7H4C3.44772 7 3 7.44772 3 8C3 8.55228 3.44772 9 4 9H12C12.5523 9 13 8.55228 13 8C13 7.44772 12.5523 7 12 7Z" fill="#EB5050"/>
          </svg>
          Below industry average
        </div>
      </div>
    </div>
  );
};

export default SkillsDashboard; 