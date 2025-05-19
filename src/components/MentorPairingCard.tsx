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
    if (scoreNum >= 90) return { color: '#25CD25', bg: '#E8F8E8' }; // Green
    if (scoreNum >= 80) return { color: '#BF82FF', bg: '#F4EBFF' }; // Purple
    if (scoreNum >= 70) return { color: '#FFA500', bg: '#FFF4E5' }; // Orange
    return { color: '#EB5050', bg: '#FDECEC' }; // Red
  };

  const { color, bg } = getFitScoreColor();

  return (
    <div className="grid grid-cols-4 gap-4 items-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-[#F1F1F1]">
      {/* Mentor */}
      <div className="flex items-center gap-3">
        <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-[#4E97FF] shadow-sm">
          <Image src={mentor.avatar} alt={mentor.name} fill sizes="40px" className="object-cover" />
          {mentor.score && (
            <div className="absolute bottom-0 right-0 w-4 h-4 bg-white rounded-full flex items-center justify-center border border-[#4E97FF]">
              <span className="text-[8px] text-[#4E97FF] font-bold">M</span>
            </div>
          )}
        </div>
        <div>
          <h4 className="text-sm font-semibold text-[#131313]">{mentor.name}</h4>
          <p className="text-xs text-[#454545]">{mentor.role}</p>
        </div>
      </div>
      
      {/* Mentee */}
      <div className="flex items-center gap-3">
        <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-[#F1F1F1] shadow-sm">
          <Image src={mentee.avatar} alt={mentee.name} fill sizes="40px" className="object-cover" />
        </div>
        <div>
          <h4 className="text-sm font-semibold text-[#131313]">{mentee.name}</h4>
          <p className="text-xs text-[#454545]">{mentee.role}</p>
        </div>
      </div>
      
      {/* Skill */}
      <div>
        <Badge variant="secondary" size="sm">
          {skill}
        </Badge>
      </div>
      
      {/* Fit Score */}
      <div className="flex items-center justify-center">
        <div 
          className="px-3 py-1 rounded-full text-sm font-bold flex items-center justify-center"
          style={{ backgroundColor: bg, color: color }}
        >
          {fitScore}
        </div>
      </div>
    </div>
  );
};

export default MentorPairingCard; 