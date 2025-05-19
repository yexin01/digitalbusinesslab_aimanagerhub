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
      padding="md"
    >
      <div className="relative w-16 h-16 rounded-full overflow-hidden mb-4 border-2 border-[#F4EBFF] shadow-sm">
        <Image src={avatar} alt={name} fill sizes="64px" />
      </div>
      
      <h3 className="text-base font-semibold text-[#131313] mb-1">{name}</h3>
      <p className="text-sm text-[#454545]">{role}</p>
    </Card>
  );
};

export default TeamMemberCard; 