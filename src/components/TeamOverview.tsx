"use client";

import React from 'react';
import Image from 'next/image';
import Card from './ui/Card';
import Badge from './ui/Badge';
import { FiArrowUp, FiArrowDown, FiAlertTriangle, FiSettings, FiChevronDown } from 'react-icons/fi';

interface TeamMember {
  id: string;
  name: string;
  role: string;
  avatar: string;
  engagement: number;
  status?: 'up' | 'down' | 'warning';
}

const TeamOverview = () => {
  const teamMembers: TeamMember[] = [
    {
      id: '1',
      name: 'Chris Friedkly',
      role: 'Senior Developer',
      avatar: '/images/chris_avatar.png',
      engagement: 86,
      status: 'up'
    },
    {
      id: '2',
      name: 'Maggie Johnson',
      role: 'UX Designer',
      avatar: '/images/maggie_avatar.png',
      engagement: 92,
      status: 'up'
    },
    {
      id: '3',
      name: 'Gael Harry',
      role: 'Software Engineer',
      avatar: '/images/gael_avatar.png',
      engagement: 72,
      status: 'warning'
    },
    {
      id: '4',
      name: 'Jenna Sullivan',
      role: 'QA Engineer',
      avatar: '/images/jenna_avatar.png',
      engagement: 52,
      status: 'down'
    }
  ];

  const getStatusInfo = (status?: 'up' | 'down' | 'warning') => {
    switch (status) {
      case 'up':
        return {
          icon: <FiArrowUp size={16} />,
          color: 'text-[#25CD25]',
          bgColor: 'bg-[#E8F8E8]',
          badgeVariant: 'success' as const
        };
      case 'down':
        return {
          icon: <FiArrowDown size={16} />,
          color: 'text-[#EB5050]',
          bgColor: 'bg-[#FDECEC]',
          badgeVariant: 'error' as const
        };
      case 'warning':
        return {
          icon: <FiAlertTriangle size={16} />,
          color: 'text-[#FFA500]',
          bgColor: 'bg-[#FFF4E5]',
          badgeVariant: 'warning' as const
        };
      default:
        return {
          icon: <FiArrowUp size={16} />,
          color: 'text-[#25CD25]',
          bgColor: 'bg-[#E8F8E8]',
          badgeVariant: 'success' as const
        };
    }
  };

  return (
    <Card className="h-full">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-semibold text-[#131313]">Team Overview</h3>
        <button className="flex items-center gap-1 text-sm text-[#6B6B6B] hover:text-[#131313] transition-colors">
          <span>Sort by Engagement</span>
          <FiSettings size={14} />
        </button>
      </div>

      <div className="space-y-3">
        {teamMembers.map((member) => {
          const statusInfo = getStatusInfo(member.status);
          
          return (
            <div 
              key={member.id}
              className={`
                flex items-center justify-between 
                p-4 rounded-xl 
                transition-all duration-300
                hover:shadow-md
                ${member.id === '2' ? 'bg-[#F4EBFF]' : 'bg-[#F6F6F3]'}
              `}
            >
              <div className="flex items-center gap-3">
                <div className="relative w-10 h-10 rounded-full overflow-hidden shadow-sm">
                  <Image 
                    src={member.avatar} 
                    alt={member.name} 
                    fill 
                    sizes="40px"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-[#131313]">{member.name}</span>
                  <span className="text-xs text-[#6B6B6B]">{member.role}</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Badge 
                  variant={statusInfo.badgeVariant}
                  className="font-medium"
                >
                  <span className="flex items-center gap-1">
                    {statusInfo.icon}
                    {member.engagement}%
                  </span>
                </Badge>
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex justify-center mt-6">
        <button className="flex items-center gap-1 text-sm font-medium text-[#BF82FF] hover:text-[#9055FF] transition-colors">
          View All Team Members
          <FiChevronDown size={16} />
        </button>
      </div>
    </Card>
  );
};

export default TeamOverview; 