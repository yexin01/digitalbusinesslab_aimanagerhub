"use client";

import React from 'react';
import Image from 'next/image';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

interface TeamMember {
  id: string;
  avatar: string;
}

interface TeamSuggestionCardProps {
  name: string;
  match: string;
  description: string;
  members: TeamMember[];
  accentColor: string;
}

const TeamSuggestionCard: React.FC<TeamSuggestionCardProps> = ({
  name,
  match,
  description,
  members,
  accentColor
}) => {
  // Map accent colors to tailwind classes
  const getMatchBadgeClass = () => {
    switch(accentColor) {
      case '#25CD25': return 'bg-[#E8F8E8] text-[#25CD25]';
      case '#FFA500': return 'bg-[#FFF4E5] text-[#FFA500]';
      case '#EB5050': return 'bg-[#FDECEC] text-[#EB5050]';
      default: return 'bg-[#F4EBFF] text-[#BF82FF]';
    }
  };

  return (
    <Card 
      className="relative h-full hover:shadow-md hover:-translate-y-1 transition-all duration-300"
      elevation="sm"
      padding="sm"
    >
      <div className="absolute top-0 left-0 bottom-0 w-1 rounded-l-2xl" style={{ backgroundColor: accentColor }}></div>
      <div className="pl-3">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-base font-semibold text-[#131313]">{name}</h3>
          <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${getMatchBadgeClass()}`}>
            {match} Match
          </span>
        </div>
        <p className="text-xs text-[#454545] mb-3 line-clamp-2">{description}</p>
        
        <div className="flex flex-wrap justify-between items-center">
          <div className="flex -space-x-2 mb-1">
            {members.slice(0, 5).map(member => (
            <div 
              key={member.id} 
                className="relative w-7 h-7 rounded-full overflow-hidden border-2 border-white shadow-sm"
            >
                <Image src={member.avatar} alt="Team member" fill sizes="28px" />
            </div>
          ))}
            {members.length > 5 && (
              <div className="relative w-7 h-7 rounded-full bg-[#F6F6F3] border-2 border-white shadow-sm flex items-center justify-center">
                <span className="text-xs text-[#6B6B6B] font-medium">+{members.length - 5}</span>
              </div>
            )}
        </div>
        
          <Button
            variant="ghost"
            size="sm"
            className="text-xs px-2 py-1 text-[#BF82FF]"
          >
            View Team
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default TeamSuggestionCard; 