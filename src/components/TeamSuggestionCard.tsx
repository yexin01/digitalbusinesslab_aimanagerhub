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
  return (
    <Card 
      className="relative"
      elevation="md"
      hoverEffect={true}
    >
      <div className="absolute top-0 left-0 bottom-0 w-1.5 rounded-l-2xl" style={{ backgroundColor: accentColor }}></div>
      <div className="pl-4">
        <div className="flex items-center gap-2 mb-2">
          <h3 className="text-xl font-semibold text-[#131313]">{name}</h3>
          <span className="font-bold text-base" style={{ color: accentColor }}>
            {match} Match
          </span>
        </div>
        <p className="text-sm text-[#454545] mb-5">{description}</p>
        
        <div className="flex -space-x-2 mb-6">
          {members.map(member => (
            <div 
              key={member.id} 
              className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-white shadow-sm"
            >
              <Image src={member.avatar} alt="Team member" fill sizes="40px" />
            </div>
          ))}
        </div>
        
        <div>
          <Button
            variant="primary"
            size="sm"
          >
            View Details
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default TeamSuggestionCard; 