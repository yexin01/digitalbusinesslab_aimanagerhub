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
    </div>
  );
};

export default SkillsDashboard; 