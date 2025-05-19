"use client";

import React from 'react';
import Image from 'next/image';

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
  return (
    <div className="grid grid-cols-4 gap-4 items-center p-4 bg-white border-b border-[#F1F1F1]">
      {/* Mentor */}
      <div className="flex items-center gap-3">
        <div className="relative w-10 h-10 rounded-full overflow-hidden">
          <Image src={mentor.avatar} alt={mentor.name} fill sizes="40px" />
        </div>
        <div>
          <h4 className="text-sm font-medium text-[#131313]">{mentor.name}</h4>
          <p className="text-xs text-[#454545]">{mentor.role}</p>
        </div>
      </div>
      
      {/* Mentee */}
      <div className="flex items-center gap-3">
        <div className="relative w-10 h-10 rounded-full overflow-hidden">
          <Image src={mentee.avatar} alt={mentee.name} fill sizes="40px" />
        </div>
        <div>
          <h4 className="text-sm font-medium text-[#131313]">{mentee.name}</h4>
          <p className="text-xs text-[#454545]">{mentee.role}</p>
        </div>
      </div>
      
      {/* Skill */}
      <div className="text-[14px] text-black">{skill}</div>
      
      {/* Fit Score */}
      <div className="text-xl font-bold text-[#131313]">{fitScore}</div>
    </div>
  );
};

export default MentorPairingCard; 