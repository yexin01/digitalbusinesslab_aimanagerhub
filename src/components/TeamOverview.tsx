"use client";

import React from 'react';
import Image from 'next/image';

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

  const getStatusIcon = (status?: 'up' | 'down' | 'warning') => {
    switch (status) {
      case 'up':
        return '/images/up_arrow_icon.svg';
      case 'down':
        return '/images/down_arrow_icon.svg';
      case 'warning':
        return '/images/warning_icon.svg';
      default:
        return '/images/up_arrow_icon.svg';
    }
  };

  const getStatusColor = (status?: 'up' | 'down' | 'warning') => {
    switch (status) {
      case 'up':
        return 'stroke-[#25CD25]';
      case 'down':
        return 'stroke-[#B01212]';
      case 'warning':
        return 'stroke-[#FFA500]';
      default:
        return 'stroke-[#25CD25]';
    }
  };

  return (
    <div className="bg-white rounded-2xl p-6 flex flex-col gap-4">
      <div className="flex justify-between items-center px-6">
        <h3 className="text-xl font-semibold text-[#131313]">Team Overview</h3>
        <div className="flex items-center gap-1 text-sm text-[#454545]">
          <span>Sort by Engagement</span>
          <Image src="/images/settings_icon.svg" alt="Sort" width={16} height={16} />
        </div>
      </div>

      <div className="flex flex-col">
        {teamMembers.map((member) => (
          <div 
            key={member.id}
            className={`flex items-center justify-between p-4 rounded-2xl ${member.id === '2' ? 'bg-[#F3E8FF]' : ''}`}
          >
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full overflow-hidden">
                <Image src={member.avatar} alt={member.name} fill sizes="40px" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-medium text-[#131313]">{member.name}</span>
                <span className="text-xs text-[#454545]">{member.role}</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold text-[#131313]">{member.engagement}%</span>
              <Image 
                src={getStatusIcon(member.status)} 
                alt="Status" 
                width={16} 
                height={16} 
                className={getStatusColor(member.status)}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-2">
        <button className="flex items-center gap-1 text-sm text-[#BF82FF]">
          <span>See more</span>
          <Image src="/images/settings_icon.svg" alt="See more" width={16} height={16} className="rotate-90" />
        </button>
      </div>
    </div>
  );
};

export default TeamOverview; 