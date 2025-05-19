"use client";

import React from 'react';
import Image from 'next/image';
import Badge from '@/components/ui/Badge';

interface Person {
  name: string;
  role: string;
  avatar: string;
  score?: string;
}

interface MentorPairingCardProps {
  mentor: Person;
  mentee: Person;
  skill: string;
  fitScore: string;
}

const MentorPairingCard: React.FC<MentorPairingCardProps> = ({
  mentor,
  mentee,
  skill,
  fitScore
}) => {
  // Determine color based on fitScore percentage
  const getFitScoreColor = () => {
    const scoreNum = parseInt(fitScore.replace('%', ''));
    if (scoreNum >= 90) return '#25CD25'; // Green
    if (scoreNum >= 80) return '#BF82FF'; // Purple
    if (scoreNum >= 70) return '#FFA500'; // Orange
    return '#EB5050'; // Red
  };

  return (
    <div className="grid grid-cols-4 gap-4 items-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-[#F1F1F1]">
      {/* Mentor */}
      <div className="flex items-center gap-3">
        <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-[#F4EBFF] shadow-sm">
          <Image src={mentor.avatar} alt={mentor.name} fill sizes="40px" />
        </div>
        <div>
          <h4 className="text-sm font-semibold text-[#131313]">{mentor.name}</h4>
          <p className="text-xs text-[#454545]">{mentor.role}</p>
        </div>
      </div>
      
      {/* Mentee */}
      <div className="flex items-center gap-3">
        <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-[#F4EBFF] shadow-sm">
          <Image src={mentee.avatar} alt={mentee.name} fill sizes="40px" />
        </div>
        <div>
          <h4 className="text-sm font-semibold text-[#131313]">{mentee.name}</h4>
          <p className="text-xs text-[#454545]">{mentee.role}</p>
        </div>
      </div>
      
      {/* Skill */}
      <div>
        <Badge variant="primary" size="md">
          {skill}
        </Badge>
      </div>
      
      {/* Fit Score */}
      <div className="text-xl font-bold" style={{ color: getFitScoreColor() }}>
        {fitScore}
      </div>
    </div>
  );
};

export default MentorPairingCard; 