"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

interface TeamMemberSkill {
  id: string;
  name: string;
  avatar: string;
  role: string;
  skills: string[];
  achievements?: string[];
}

interface TeamMemberSkillsProps {
  title?: string;
  members: TeamMemberSkill[];
  className?: string;
}

const TeamMemberMetrics: React.FC<TeamMemberSkillsProps> = ({
  title = "Team Member Skills & Achievements",
  members,
  className = '',
}) => {
  const [showAllMembers, setShowAllMembers] = useState(false);
  const initialMembersToShow = 4;
  
  const visibleMembers = showAllMembers ? members : members.slice(0, initialMembersToShow);
  
  const toggleShowAllMembers = () => {
    setShowAllMembers(!showAllMembers);
  };

  return (
    <div className={`bg-white rounded-2xl p-6 ${className}`}>
      {title && <h3 className="text-xl font-semibold text-[#131313] mb-4">{title}</h3>}

      <div className="overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="text-left border-b border-[#F0F0F0]">
              <th className="pb-4 text-sm text-[#6B6B6B] font-medium">Team Member</th>
              <th className="pb-4 text-sm text-[#6B6B6B] font-medium">Skills</th>
              <th className="pb-4 text-sm text-[#6B6B6B] font-medium">Achievements</th>
            </tr>
          </thead>
          <tbody>
            {visibleMembers.map((member) => (
              <tr key={member.id} className="border-b border-[#F0F0F0]">
                <td className="py-4">
                  <div className="flex items-center">
                    <div className="relative w-10 h-10 rounded-full overflow-hidden mr-3">
                      <Image
                        src={member.avatar}
                        alt={member.name}
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <div>
                      <p className="font-medium text-[#131313]">{member.name}</p>
                      <p className="text-sm text-[#6B6B6B]">{member.role}</p>
                    </div>
                  </div>
                </td>
                <td className="py-4">
                  <div className="flex flex-wrap gap-1">
                    {member.skills.map((skill, index) => (
                      <span 
                        key={index} 
                        className="inline-block bg-[#F4EBFF] text-[#9055FF] text-xs px-2 py-1 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </td>
                <td className="py-4">
                  <div>
                    {member.achievements && member.achievements.length > 0 ? (
                      <ul className="list-disc pl-4 text-sm text-[#6B6B6B]">
                        {member.achievements.map((achievement, index) => (
                          <li key={index}>{achievement}</li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-sm text-[#6B6B6B]">No recent achievements</p>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {members.length > initialMembersToShow && (
        <div className="flex justify-center mt-4">
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
                View All Team Members
                <FiChevronDown size={16} />
              </>
            )}
          </button>
        </div>
      )}
    </div>
  );
};

export default TeamMemberMetrics; 