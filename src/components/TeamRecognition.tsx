"use client";

import React from 'react';
import Image from 'next/image';
import Card from './ui/Card';
import Badge from './ui/Badge';
import { FiArrowRight, FiAward, FiBookOpen, FiBriefcase } from 'react-icons/fi';

interface Recognition {
  id: string;
  name: string;
  avatar: string;
  achievement: string;
  timestamp: string;
  type: 'LEARNING' | 'INNOVATION' | 'RECOGNITION';
}

const TeamRecognition = () => {
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
      achievement: 'applied prompt engineering in the last sprint to streamline reporting with ChatGPT',
      timestamp: '2 weeks ago',
      type: 'INNOVATION'
    }
  ];

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
    <Card>
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-semibold text-[#131313]">Team Recognition</h3>
        <Badge variant="success" size="sm">
          {recognitions.length} New
        </Badge>
      </div>
      
      <div className="space-y-5">
        {recognitions.map((recognition) => {
          const typeInfo = getTypeInfo(recognition.type);
          
          return (
            <div 
              key={recognition.id} 
              className="p-4 rounded-xl bg-white border border-[#F0F0F0] hover:shadow-sm transition-all duration-300"
            >
              <div className="flex justify-between items-center mb-3">
                <div className="flex items-center gap-2">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden shadow-sm">
                    <Image 
                      src={recognition.avatar} 
                      alt={recognition.name} 
                      fill 
                      sizes="40px"
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
              
              <div className="text-sm pl-12">
                {recognition.achievement}
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex justify-center mt-5">
        <button className="flex items-center gap-1 text-sm font-medium text-[#BF82FF] hover:text-[#9055FF] transition-colors">
          View All Recognitions
          <FiArrowRight size={14} />
        </button>
      </div>
    </Card>
  );
};

export default TeamRecognition; 