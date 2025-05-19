"use client";

import React from 'react';

interface SkillGap {
  id: string;
  name: string;
  percentage: number;
  recommendation: string;
}

const SkillGaps = () => {
  const skillGaps: SkillGap[] = [
    {
      id: '1',
      name: 'Data Analysis',
      percentage: 67,
      recommendation: 'Recommend course: "Storytelling with Data" on LinkedIn Learning'
    },
    {
      id: '2',
      name: 'Project Management',
      percentage: 53,
      recommendation: 'Recommend course: "Storytelling with Data" on LinkedIn Learning'
    },
    {
      id: '3',
      name: 'Generative AI Tools',
      percentage: 50,
      recommendation: 'Recommend course: "Prompting with ChatGPT" on LinkedIn Learning'
    }
  ];

  return (
    <div className="bg-white p-6 rounded-2xl">
      <h3 className="text-xl font-semibold text-[#131313] mb-6">Skill Gaps</h3>
      
      <div className="flex flex-col gap-6">
        {skillGaps.map((skill, index) => (
          <div key={skill.id} className="flex flex-col gap-1">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-[#131313]">{skill.name}</span>
              <span className="text-xl font-bold text-[#131313]">{skill.percentage}%</span>
            </div>
            <div className="w-full h-px bg-[#F1F1F1] my-2" />
            <p className="text-xs text-[#131313]">{skill.recommendation}</p>
            {index === skillGaps.length - 1 && (
              <div className="flex justify-end mt-4">
                <button className="text-sm font-medium text-[#BF82FF]">View All</button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillGaps; 