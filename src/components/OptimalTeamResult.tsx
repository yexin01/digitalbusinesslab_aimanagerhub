"use client";

import React from 'react';
import Image from 'next/image';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import { FiX, FiUsers, FiTarget, FiTrendingUp, FiStar } from 'react-icons/fi';

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
  const getMatchColor = (percentage: number) => {
    if (percentage >= 90) return 'from-[#25CD25] to-[#3DD33D]';
    if (percentage >= 75) return 'from-[#4E97FF] to-[#7BB3FF]';
    if (percentage >= 60) return 'from-[#FFA500] to-[#FFB733]';
    return 'from-[#EB5050] to-[#FF6B6B]';
  };

  const getMatchBadgeVariant = (percentage: number) => {
    if (percentage >= 90) return 'success';
    if (percentage >= 75) return 'info';
    if (percentage >= 60) return 'warning';
    return 'danger';
  };

  return (
    <Card 
      variant="gradient" 
      elevation="xl" 
      className="border-l-4 border-[#9055FF] overflow-hidden animate-fade-in"
    >
      {/* Header */}
      <div className="p-3 sm:p-4 lg:p-6 bg-gradient-to-r from-[#F4EBFF] to-[#F8F4FF] border-b border-[#F0F0F0]">
        <div className="flex items-start sm:items-center justify-between gap-2">
          <div className="flex items-start sm:items-center gap-2 sm:gap-3 flex-1 min-w-0">
            <div className="w-8 sm:w-10 h-8 sm:h-10 bg-gradient-to-br from-[#9055FF] to-[#BF82FF] rounded-xl flex items-center justify-center text-white shadow-lg flex-shrink-0">
              <FiUsers size={16} className="sm:hidden" />
              <FiUsers size={18} className="hidden sm:block" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                <h3 className="text-base sm:text-lg font-bold text-[#131313] leading-none">{teamName}</h3>
                <Badge 
                  variant="success" 
                  size="sm"
                  className="font-semibold shadow-sm flex items-center self-start"
                >
                  <FiTrendingUp size={10} className="mr-1" />
                  {overallMatch} Match
                </Badge>
              </div>
              <p className="text-xs sm:text-sm text-[#6B6B6B] mt-1 sm:mt-2 flex items-center gap-1 sm:gap-2">
                <FiTarget size={10} className="sm:hidden" />
                <FiTarget size={12} className="hidden sm:block" />
                <span className="line-clamp-1">AI-optimized team for selected requirements</span>
              </p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="sm"
            icon={<FiX size={14} className="sm:hidden" />}
            onClick={onClose}
            className="hover:bg-white/60 rounded-xl flex-shrink-0"
          >
            <FiX size={16} className="hidden sm:block" />
            <span className="hidden sm:inline ml-1">Close</span>
          </Button>
        </div>
      </div>

      {/* Requirements Section */}
      <div className="p-3 sm:p-4 lg:p-6 border-b border-[#F0F0F0]">
        <h4 className="text-sm sm:text-base font-semibold text-[#131313] mb-2 sm:mb-3 flex items-center gap-1 sm:gap-2">
          <FiTarget size={14} className="text-[#9055FF] sm:hidden" />
          <FiTarget size={16} className="text-[#9055FF] hidden sm:block" />
          Project Requirements
        </h4>
        <div className="flex flex-wrap gap-1 sm:gap-1.5">
          {requiredSkills.map((skill, index) => (
            <Badge 
              key={index} 
              variant="secondary"
              size="xs"
              className="border border-[#E5D5FF] sm:text-xs"
            >
              {skill}
            </Badge>
          ))}
        </div>
      </div>
      
      {/* Team Members Section */}
      <div className="p-3 sm:p-4 lg:p-6">
        <h4 className="text-sm sm:text-base font-semibold text-[#131313] mb-3 sm:mb-4 flex items-center gap-1 sm:gap-2">
          <FiUsers size={14} className="text-[#4E97FF] sm:hidden" />
          <FiUsers size={16} className="text-[#4E97FF] hidden sm:block" />
          Recommended Team Members ({members.length})
        </h4>
        
        <div className="grid gap-2 sm:gap-3">
          {members.map((member, index) => (
            <Card 
              key={member.id}
              elevation="sm"
              className="p-2 sm:p-3 hover:shadow-md transition-all duration-300 hover:-translate-y-1 border border-[#F0F0F0]"
              hover={false}
            >
              <div className="flex items-start gap-2 sm:gap-3">
                <div className="relative">
                  <div className="relative w-10 sm:w-12 h-10 sm:h-12 rounded-xl overflow-hidden ring-2 ring-white shadow-md">
                    <Image 
                      src={member.avatar} 
                      alt={member.name} 
                      fill 
                      sizes="(max-width: 640px) 40px, 48px"
                      className="object-cover"
                    />
                  </div>
                  <div className="absolute -top-1 -right-1">
                    <Badge
                      variant={getMatchBadgeVariant(member.matchPercentage) as any}
                      size="xs"
                      className="font-bold text-xs"
                    >
                      #{index + 1}
                    </Badge>
                  </div>
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-start sm:items-center justify-between mb-1 sm:mb-2 gap-2">
                    <div className="flex-1 min-w-0">
                      <h5 className="text-sm sm:text-base font-semibold text-[#131313] line-clamp-1">{member.name}</h5>
                      <p className="text-xs text-[#6B6B6B] flex items-center gap-1">
                        <FiStar size={8} className="sm:hidden" />
                        <FiStar size={10} className="hidden sm:block" />
                        <span className="line-clamp-1">{member.role}</span>
                      </p>
                    </div>
                    <div className={`px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg bg-gradient-to-r ${getMatchColor(member.matchPercentage)} text-white text-xs font-bold shadow-md flex-shrink-0`}>
                      {member.matchPercentage}%
                      <span className="hidden sm:inline"> Match</span>
                    </div>
                  </div>
                  
                  {member.keyStrengths.length > 0 && (
                    <div className="mt-2 sm:mt-3">
                      <p className="text-xs font-medium text-[#6B6B6B] mb-1 sm:mb-2 uppercase tracking-wider hidden sm:block">Key Strengths:</p>
                      <div className="flex flex-wrap gap-1 sm:gap-2">
                        {member.keyStrengths.slice(0, 3).map((strength, index) => (
                          <Badge 
                            key={index}
                            variant="primary"
                            size="xs"
                            className="bg-white text-[#9055FF] border border-[#E5D5FF] text-xs"
                          >
                            {strength}
                          </Badge>
                        ))}
                        {member.keyStrengths.length > 3 && (
                          <Badge 
                            variant="secondary"
                            size="xs"
                            className="text-xs"
                          >
                            +{member.keyStrengths.length - 3}
                          </Badge>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
      
      {/* Footer */}
      <div className="p-3 sm:p-4 lg:p-6 bg-gradient-to-r from-[#F8F9FA] to-[#F6F6F3] border-t border-[#F0F0F0]">
        <div className="text-center">
          <p className="text-xs text-[#6B6B6B] mb-2 sm:mb-3 max-w-xl mx-auto">
            This team was selected using AI analysis of skill expertise, project experience, and collaboration history.
          </p>
        </div>
      </div>
    </Card>
  );
};

export default OptimalTeamResult; 