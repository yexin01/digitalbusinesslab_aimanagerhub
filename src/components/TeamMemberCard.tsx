"use client";

import React from 'react';
import Image from 'next/image';
import Card from '@/components/ui/Card';

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
    <Card
      elevation="sm"
      hoverEffect={true}
      className="transition-all duration-300 flex flex-col items-center"
      padding="sm"
    >
      <div className="relative w-14 h-14 rounded-full overflow-hidden mb-3 border-2 border-[#F4EBFF] shadow-sm">
        <Image src={avatar} alt={name} fill sizes="56px" />
      </div>
      
      <h3 className="text-sm font-semibold text-[#131313] mb-1 text-center">{name}</h3>
      <p className="text-xs text-[#454545] text-center">{role}</p>
    </Card>
  );
};

export default TeamMemberCard; 