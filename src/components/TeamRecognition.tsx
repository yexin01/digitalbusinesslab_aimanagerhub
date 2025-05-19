"use client";

import React from 'react';
import Image from 'next/image';

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

  const getBadgeClass = (type: string) => {
    switch(type) {
      case 'LEARNING':
        return 'bg-gradient-to-r from-[#B38CE3] to-[#F85EBB]';
      case 'INNOVATION':
        return 'bg-gradient-to-r from-[#0B8821] to-[#5CBF6B]';
      case 'RECOGNITION':
        return 'bg-[#FFA500]';
      default:
        return 'bg-gray-200';
    }
  };

  return (
    <div className="bg-white p-6 rounded-2xl">
      <h3 className="text-xl font-semibold text-[#131313] mb-6">Team Recognition</h3>
      
      <div className="flex flex-col gap-6">
        {recognitions.map((recognition, index) => (
          <div key={recognition.id} className="flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-[#131313]">{recognition.name}</span>
              <div className={`${getBadgeClass(recognition.type)} text-white text-[7px] font-extrabold tracking-widest px-3 py-1 rounded-lg shadow-sm`}>
                {recognition.type}
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="relative w-10 h-10 rounded-full overflow-hidden">
                <Image src={recognition.avatar} alt={recognition.name} fill sizes="40px" />
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-xs text-[#131313]">{recognition.achievement}</p>
                <span className="text-xs font-semibold text-[#131313]">{recognition.timestamp}</span>
              </div>
            </div>
            
            {index < recognitions.length - 1 && <div className="w-full h-px bg-[#F1F1F1] my-2" />}
          </div>
        ))}

        <div className="flex justify-end mt-2">
          <button className="text-sm font-medium text-[#BF82FF]">View All</button>
        </div>
      </div>
    </div>
  );
};

export default TeamRecognition; 