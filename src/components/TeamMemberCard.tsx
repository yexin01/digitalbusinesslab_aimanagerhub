"use client";

import React from 'react';
import Image from 'next/image';

interface TeamMemberCardProps {
  name: string;
  role: string;
  avatar: string;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({
  name,
  role,
  avatar
}) => {
  return (
    <div className="bg-white p-4 rounded-2xl shadow-sm flex flex-col items-center">
      <div className="relative w-16 h-16 rounded-full overflow-hidden mb-4">
        <Image src={avatar} alt={name} fill sizes="64px" />
      </div>
      
      <h3 className="text-base font-medium text-[#131313]">{name}</h3>
      <p className="text-sm text-[#454545]">{role}</p>
    </div>
  );
};

export default TeamMemberCard; 