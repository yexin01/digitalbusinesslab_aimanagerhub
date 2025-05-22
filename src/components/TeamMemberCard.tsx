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
      className="transition-all duration-300 flex flex-col items-center hover:shadow-md hover:-translate-y-1"
      padding="sm"
    >
      <div className="relative w-10 sm:w-14 h-10 sm:h-14 rounded-full overflow-hidden mb-2 sm:mb-3 border-2 border-[#F4EBFF] shadow-sm">
        <Image src={avatar} alt={name} fill sizes="(max-width: 640px) 40px, 56px" />
      </div>
      
      <h3 className="text-xs sm:text-sm font-semibold text-[#131313] mb-1 text-center line-clamp-1">{name}</h3>
      <p className="text-xs text-[#454545] text-center line-clamp-1">{role}</p>
    </Card>
  );
};

export default TeamMemberCard; 