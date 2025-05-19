"use client";

import React from 'react';
import Image from 'next/image';

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
    <div 
      className="bg-white p-6 rounded-2xl flex flex-col"
      style={{ borderLeft: `2px solid ${accentColor}` }}
    >
      <h3 className="text-xl font-semibold text-[#131313]">{name} ({match} Match)</h3>
      <p className="text-sm text-[#454545] mb-4">{description}</p>
      
      <div className="flex -space-x-2">
        {members.map(member => (
          <div key={member.id} className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-white">
            <Image src={member.avatar} alt="Team member" fill sizes="40px" />
          </div>
        ))}
      </div>
      
      <div className="mt-6">
        <button className="bg-[#BF82FF] text-white py-1 px-4 rounded-lg text-sm font-bold">
          View Details
        </button>
      </div>
    </div>
  );
};

export default TeamSuggestionCard; 