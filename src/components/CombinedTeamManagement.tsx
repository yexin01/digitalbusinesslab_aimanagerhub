"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Badge from './ui/Badge';
import { FiArrowUp, FiArrowDown, FiAlertTriangle, FiChevronDown, FiChevronUp, FiFilter, FiX, FiAward, FiBookOpen, FiBriefcase } from 'react-icons/fi';

interface TeamMember {
  id: string;
  name: string;
  role: string;
  avatar: string;
  engagement: number;
  status?: 'up' | 'down' | 'warning';
}

interface Recognition {
  id: string;
  name: string;
  avatar: string;
  achievement: string;
  timestamp: string;
  type: 'LEARNING' | 'INNOVATION' | 'RECOGNITION';
}

type StatusFilter = 'all' | 'up' | 'down' | 'warning';

const CombinedTeamManagement = () => {
  const [showAllMembers, setShowAllMembers] = useState(false);
  const [statusFilter, setStatusFilter] = useState<StatusFilter>('all');
  
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
    },
    {
      id: '5',
      name: 'Marco Rossi',
      role: 'Data Scientist',
      avatar: '/images/new_avatars/ryan_avatar.png',
      engagement: 78,
      status: 'up'
    },
    {
      id: '6',
      name: 'Emily Chen',
      role: 'Product Manager',
      avatar: '/images/new_avatars/sophia_avatar.png',
      engagement: 65,
      status: 'warning'
    },
    {
      id: '7',
      name: 'Alex Martinez',
      role: 'Frontend Developer',
      avatar: '/images/new_avatars/alex_avatar.png',
      engagement: 81,
      status: 'up'
    },
    {
      id: '8',
      name: 'Sophia Kim',
      role: 'Backend Developer',
      avatar: '/images/new_avatars/laura_avatar.png',
      engagement: 75,
      status: 'up'
    },
    {
      id: '9',
      name: 'Daniel Wilson',
      role: 'DevOps Engineer',
      avatar: '/images/new_avatars/daniel_avatar.png',
      engagement: 68,
      status: 'warning'
    },
    {
      id: '10',
      name: 'Anna Petrov',
      role: 'UI Designer',
      avatar: '/images/new_avatars/anna_avatar.png',
      engagement: 89,
      status: 'up'
    }
  ];

  const recognitions: Recognition[] = [
    {
      id: '1',
      name: 'Chris F.',
      avatar: '/images/chris_avatar.png',
      achievement: 'completed the "Agile Foundations" course',
      timestamp: '2 hours ago',
      type: 'LEARNING'
    },
    {
      id: '2',
      name: 'Maggie J.',
      avatar: '/images/maggie_avatar.png',
      achievement: 'completed all Q2 OKRs one week ahead of deadline',
      timestamp: '3 days ago',
      type: 'RECOGNITION'
    },
    {
      id: '3',
      name: 'Gael H.',
      avatar: '/images/gael_avatar.png',
      achievement: 'applied prompt engineering in the last sprint',
      timestamp: '2 weeks ago',
      type: 'INNOVATION'
    },
    {
      id: '4',
      name: 'Alex M.',
      avatar: '/images/new_avatars/alex_avatar.png',
      achievement: 'implemented the new responsive dashboard design',
      timestamp: '1 week ago',
      type: 'INNOVATION'
    },
    {
      id: '5',
      name: 'Emily C.',
      avatar: '/images/new_avatars/sophia_avatar.png',
      achievement: 'completed the "Advanced Project Management" certification',
      timestamp: '4 days ago',
      type: 'LEARNING'
    },
    {
      id: '6',
      name: 'Anna P.',
      avatar: '/images/new_avatars/anna_avatar.png',
      achievement: 'received praise from clients for the new UI design',
      timestamp: '5 days ago',
      type: 'RECOGNITION'
    }
  ];

  const filteredMembers = teamMembers.filter(member => 
    statusFilter === 'all' || member.status === statusFilter
  );

  const membersToShowWhenCollapsed = 5;
  const visibleMembers = showAllMembers ? filteredMembers : filteredMembers.slice(0, membersToShowWhenCollapsed);

  const toggleShowAllMembers = () => {
    setShowAllMembers(!showAllMembers);
  };

  const [showAllRecognitions, setShowAllRecognitions] = useState(false);
  const recognitionsToShowWhenCollapsed = 3;
  const visibleRecognitions = showAllRecognitions ? recognitions : recognitions.slice(0, recognitionsToShowWhenCollapsed);

  const toggleShowAllRecognitions = () => {
    setShowAllRecognitions(!showAllRecognitions);
  };

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

  const getFilterBadgeStyle = (filterType: StatusFilter) => {
    if (statusFilter !== filterType) return "bg-[#F6F6F3] text-[#6B6B6B]";
    
    switch (filterType) {
      case 'up':
        return "bg-[#E8F8E8] text-[#25CD25]";
      case 'warning':
        return "bg-[#FFF4E5] text-[#FFA500]";
      case 'down':
        return "bg-[#FDECEC] text-[#EB5050]";
      default:
        return "bg-[#F4EBFF] text-[#BF82FF]";
    }
  };

  const getTypeInfo = (type: string) => {
    switch(type) {
      case 'LEARNING':
        return {
          label: 'Learning',
          icon: <FiBookOpen size={14} />,
          variant: 'primary' as const
        };
      case 'INNOVATION':
        return {
          label: 'Innovation',
          icon: <FiBriefcase size={14} />,
          variant: 'success' as const
        };
      case 'RECOGNITION':
        return {
          label: 'Recognition',
          icon: <FiAward size={14} />,
          variant: 'warning' as const
        };
      default:
        return {
          label: type,
          icon: null,
          variant: 'secondary' as const
        };
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6">
      {/* Team Overview */}
      <div className="border-r-2 border-[#F4EBFF] pr-6 flex flex-col">
        <h3 className="text-lg font-semibold text-[#131313] mb-4">Team Overview</h3>
        <div className="flex flex-col flex-1">

          <div className="flex items-center gap-2 mb-3">
            <div className="text-xs text-[#6B6B6B] flex items-center gap-1">
              <FiFilter size={12} />
              <span>Status:</span>
            </div>
            <div className="flex items-center gap-1 flex-wrap">
              <button 
                onClick={() => setStatusFilter('all')}
                className={`text-xs px-2 py-1 rounded-full transition-colors ${getFilterBadgeStyle('all')}`}
              >
                All
              </button>
              <button 
                onClick={() => setStatusFilter('up')}
                className={`text-xs px-2 py-1 rounded-full transition-colors flex items-center gap-1 ${getFilterBadgeStyle('up')}`}
              >
                <FiArrowUp size={10} />
                <span>High</span>
              </button>
              <button 
                onClick={() => setStatusFilter('warning')}
                className={`text-xs px-2 py-1 rounded-full transition-colors flex items-center gap-1 ${getFilterBadgeStyle('warning')}`}
              >
                <FiAlertTriangle size={10} />
                <span>Medium</span>
              </button>
              <button 
                onClick={() => setStatusFilter('down')}
                className={`text-xs px-2 py-1 rounded-full transition-colors flex items-center gap-1 ${getFilterBadgeStyle('down')}`}
              >
                <FiArrowDown size={10} />
                <span>Low</span>
              </button>
            </div>
            {statusFilter !== 'all' && (
              <button 
                onClick={() => setStatusFilter('all')}
                className="text-xs text-[#6B6B6B] hover:text-[#131313] ml-auto"
              >
                <FiX size={14} />
              </button>
            )}
          </div>

          <div className="space-y-2 flex-1 overflow-hidden">
            {visibleMembers.map((member) => {
              const statusInfo = getStatusInfo(member.status);
              
              return (
                <div 
                  key={member.id}
                  className={`
                    flex items-center justify-between 
                    py-2 px-3 rounded-xl 
                    transition-all duration-300
                    hover:shadow-md
                    ${member.id === '2' ? 'bg-[#F4EBFF]' : 'bg-[#F6F6F3]'}
                  `}
                >
                  <div className="flex items-center gap-3">
                    <div className="relative w-9 h-9 rounded-full overflow-hidden shadow-sm">
                      <Image 
                        src={member.avatar} 
                        alt={member.name} 
                        fill 
                        sizes="36px"
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

          {filteredMembers.length > membersToShowWhenCollapsed && (
            <div className="flex justify-center mt-auto pt-4">
              <div className="flex justify-center w-full">
                <button 
                  onClick={toggleShowAllMembers}
                  className="flex items-center gap-1 text-sm font-medium text-[#BF82FF] hover:text-[#9055FF] transition-colors"
                >
                  {showAllMembers ? (
                    <>
                      Show Less
                      <FiChevronUp size={16} />
                    </>
                  ) : (
                    <>
                      View All Members
                      <FiChevronDown size={16} />
                    </>
                  )}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* Team Recognition */}
      <div className="pl-2 flex flex-col h-full">
        <h3 className="text-lg font-semibold text-[#131313] mb-4">Team Recognition</h3>
        <div className="flex flex-col flex-1">
          <div className="flex justify-between items-center mb-6">
            <Badge variant="success" size="sm">
              {recognitions.length} New
            </Badge>
          </div>
          
          <div className="space-y-4 flex-1 overflow-auto">
            {visibleRecognitions.map((recognition) => {
              const typeInfo = getTypeInfo(recognition.type);
              
              return (
                <div 
                  key={recognition.id} 
                  className="p-3 rounded-xl bg-white border border-[#F0F0F0] hover:shadow-sm transition-all duration-300"
                >
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center gap-2">
                      <div className="relative w-8 h-8 rounded-full overflow-hidden shadow-sm">
                        <Image 
                          src={recognition.avatar} 
                          alt={recognition.name} 
                          fill 
                          sizes="32px"
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-[#131313]">{recognition.name}</div>
                        <div className="text-xs text-[#6B6B6B]">{recognition.timestamp}</div>
                      </div>
                    </div>
                    
                    <Badge 
                      variant={typeInfo.variant} 
                      size="sm"
                      dot
                    >
                      {typeInfo.label}
                    </Badge>
                  </div>
                  
                  <div className="text-xs pl-10">
                    {recognition.achievement}
                  </div>
                </div>
              );
            })}
          </div>

          {recognitions.length > recognitionsToShowWhenCollapsed && (
            <div className="flex justify-center mt-auto pt-4">
              <button 
                onClick={toggleShowAllRecognitions}
                className="flex items-center gap-1 text-sm font-medium text-[#BF82FF] hover:text-[#9055FF] transition-colors"
              >
                {showAllRecognitions ? (
                  <>
                    Show Less
                    <FiChevronUp size={16} />
                  </>
                ) : (
                  <>
                    View All Recognitions
                    <FiChevronDown size={16} />
                  </>
                )}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CombinedTeamManagement; 