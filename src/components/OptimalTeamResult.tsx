"use client";

import React from 'react';
import Image from 'next/image';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import { FiXCircle } from 'react-icons/fi';

interface TeamMember {
  id: string;
  name: string;
  role: string;
  avatar: string;
  matchPercentage: number;
  keyStrengths: string[];
}

interface OptimalTeamResultProps {
  teamName: string;
  overallMatch: string;
  members: TeamMember[];
  requiredSkills: string[];
  onClose: () => void;
}

const OptimalTeamResult: React.FC<OptimalTeamResultProps> = ({
  teamName,
  overallMatch,
  members,
  requiredSkills,
  onClose
}) => {
  return (
    <Card className="bg-white shadow-lg">
      <div className="flex justify-between items-start mb-4">
        <div>
          <div className="flex items-center gap-3">
            <h3 className="text-xl font-semibold text-[#131313]">{teamName}</h3>
            <Badge 
              variant="success" 
              size="md" 
              className="font-medium"
            >
              {overallMatch} Match
            </Badge>
          </div>
          <p className="text-sm text-[#454545] mt-1">Optimal team for selected requirements</p>
        </div>
        <button 
          onClick={onClose}
          className="text-[#6B6B6B] hover:text-[#EB5050] transition-colors"
        >
          <FiXCircle size={24} />
        </button>
      </div>

      <div className="mb-5">
        <p className="text-sm font-medium text-[#454545] mb-2">Selected Requirements:</p>
        <div className="flex flex-wrap gap-2">
          {requiredSkills.map((skill, index) => (
            <Badge 
              key={index} 
              variant="secondary"
              size="sm"
            >
              {skill}
            </Badge>
          ))}
        </div>
      </div>
      
      <div className="border-t border-[#EDEDED] pt-4">
        <h4 className="text-base font-medium text-[#131313] mb-3">Team Members ({members.length})</h4>
        
        <div className="space-y-4">
          {members.map(member => (
            <div 
              key={member.id}
              className="flex items-start p-3 rounded-xl bg-[#F6F6F3]"
            >
              <div className="relative w-12 h-12 rounded-full overflow-hidden mr-3 shrink-0">
                <Image 
                  src={member.avatar} 
                  alt={member.name} 
                  fill 
                  sizes="48px"
                />
              </div>
              
              <div className="flex-1">
                <div className="flex justify-between items-center">
                  <div>
                    <h5 className="text-sm font-semibold text-[#131313]">{member.name}</h5>
                    <p className="text-xs text-[#6B6B6B]">{member.role}</p>
                  </div>
                  <div className="bg-[#F4EBFF] text-[#BF82FF] text-sm font-semibold rounded-full px-3 py-1">
                    {member.matchPercentage}% Match
                  </div>
                </div>
                
                <div className="mt-2">
                  <p className="text-xs text-[#454545] mb-1">Key strengths:</p>
                  <div className="flex flex-wrap gap-1.5">
                    {member.keyStrengths.map((strength, index) => (
                      <span 
                        key={index}
                        className="bg-white text-[#6B6B6B] text-xs px-2 py-0.5 rounded-full"
                      >
                        {strength}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="mt-5 border-t border-[#EDEDED] pt-4">
        <p className="text-sm text-[#454545] mb-3">This team was selected based on skill expertise, project experience, and collaboration history. The AI has analyzed each member&apos;s strengths to ensure the team is well-balanced for the selected requirements.</p>
        
        <div className="flex justify-center">
          <button className="text-[#BF82FF] text-sm font-medium hover:text-[#9055FF] transition-colors">
            View Detailed Analytics
          </button>
        </div>
      </div>
    </Card>
  );
};

export default OptimalTeamResult; 