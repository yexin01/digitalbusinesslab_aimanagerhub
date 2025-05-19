"use client";

import React from 'react';
import Sidebar from '@/components/Sidebar';
import Image from 'next/image';
import TeamSuggestionCard from '@/components/TeamSuggestionCard';
import TeamMemberCard from '@/components/TeamMemberCard';
import MentorPairingCard from '@/components/MentorPairingCard';

export default function TeamOrchestratorPage() {
  // Sample data for team suggestions
  const teamSuggestions = [
    {
      id: '1',
      name: 'Core Team',
      match: '95%',
      description: '5 members, all required skills covered',
      members: [
        { id: '1', avatar: '/images/chris_avatar.png' },
        { id: '2', avatar: '/images/maggie_avatar.png' },
        { id: '3', avatar: '/images/gael_avatar.png' },
        { id: '4', avatar: '/images/jenna_avatar.png' },
        { id: '5', avatar: '/images/gustavo_avatar.png' }
      ],
      accentColor: '#25CD25'
    },
    {
      id: '2',
      name: 'Alternate Team',
      match: '88%',
      description: '4 members, better availability',
      members: [
        { id: '1', avatar: '/images/chris_avatar.png' },
        { id: '2', avatar: '/images/maggie_avatar.png' },
        { id: '3', avatar: '/images/gael_avatar.png' },
        { id: '4', avatar: '/images/jenna_avatar.png' }
      ],
      accentColor: '#FFA500'
    },
    {
      id: '3',
      name: 'Younger Team',
      match: '78%',
      description: '4 members, high interest in developing desired skills',
      members: [
        { id: '1', avatar: '/images/chris_avatar.png' },
        { id: '2', avatar: '/images/maggie_avatar.png' },
        { id: '3', avatar: '/images/gael_avatar.png' },
        { id: '4', avatar: '/images/jenna_avatar.png' }
      ],
      accentColor: '#EB5050'
    }
  ];

  // Current team data
  const currentTeam = [
    { id: '1', name: 'Chris Friedkly', role: 'Senior Developer', avatar: '/images/chris_avatar.png' },
    { id: '2', name: 'Gael Harry', role: 'Software Engineer', avatar: '/images/gael_avatar.png' },
    { id: '3', name: 'Maggie Johnson', role: 'UX Designer', avatar: '/images/maggie_avatar.png' },
    { id: '4', name: 'Jenna Sullivan', role: 'QA Engineer', avatar: '/images/jenna_avatar.png' }
  ];

  // Mentor pairings
  const mentorPairings = [
    {
      mentor: { name: 'Chris Friedkly', role: 'Senior Developer', avatar: '/images/chris_avatar.png', score: '86%' },
      mentee: { name: 'Gael Harry', role: 'Software Engineer', avatar: '/images/gael_avatar.png' },
      skill: 'Data Visualization',
      fitScore: '95%'
    },
    {
      mentor: { name: 'Maggie Johnson', role: 'UX Designer', avatar: '/images/maggie_avatar.png', score: '88%' },
      mentee: { name: 'Jenna Sullivan', role: 'QA Engineer', avatar: '/images/jenna_avatar.png' },
      skill: 'Project Management',
      fitScore: '92%'
    }
  ];

  // Required skills
  const requiredSkills = [
    'Machine Learning',
    'API Integration',
    'Project Management',
    'Front-End Development',
    'Data Visualization'
  ];

  return (
    <div className="flex h-screen p-6 bg-[#F6F6F3]">
      <Sidebar />
      
      <div className="flex-1 ml-6 overflow-y-auto">
        <h1 className="text-4xl font-semibold text-black mb-8">Team Orchestrator</h1>
        
        <div className="grid grid-cols-1 gap-6">
          {/* Team Builder & Optimizer Section */}
          <div className="bg-white p-6 rounded-2xl">
            <h2 className="text-xl font-semibold text-[#131313] mb-4">Team Builder & Optimizer</h2>
            
            <div className="text-sm text-[#131313] mb-4">Enter project goals or required skills</div>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {requiredSkills.map((skill, index) => (
                <div 
                  key={index} 
                  className="bg-[#EDEDED] text-sm text-black py-1 px-3 rounded-lg"
                >
                  {skill}
                </div>
              ))}
            </div>
            
            <div className="flex gap-4 mb-8">
              <button className="bg-[#BF82FF] text-white font-bold py-2 px-4 rounded-2xl shadow-sm">
                Find Optimal Team
              </button>
              <button className="bg-[#BF82FF] text-white font-bold py-2 px-4 rounded-2xl shadow-sm">
                Evaluate Current Team
              </button>
            </div>
          </div>
          
          {/* Current Team Section */}
          <div className="bg-white p-6 rounded-2xl">
            <h2 className="text-xl font-semibold text-[#131313] mb-6">Current Team</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {currentTeam.map(member => (
                <TeamMemberCard 
                  key={member.id}
                  name={member.name}
                  role={member.role}
                  avatar={member.avatar}
                />
              ))}
            </div>
          </div>
          
          {/* AI Suggestions Section */}
          <div>
            <h2 className="text-xl font-semibold text-[#131313] mb-6">AI Suggestions</h2>
            
            <div className="grid grid-cols-1 gap-4">
              {teamSuggestions.map(team => (
                <TeamSuggestionCard 
                  key={team.id}
                  name={team.name}
                  match={team.match}
                  description={team.description}
                  members={team.members}
                  accentColor={team.accentColor}
                />
              ))}
            </div>
          </div>
          
          {/* Recommended Development Pairings */}
          <div className="bg-white p-6 rounded-2xl">
            <h2 className="text-xl font-semibold text-[#131313] mb-6">Recommended Development Pairings</h2>
            
            <div className="grid grid-cols-1 gap-4">
              <div className="grid grid-cols-4 gap-4 mb-2 px-6">
                <div className="text-lg font-medium text-[#454545]">Mentor</div>
                <div className="text-lg font-medium text-[#454545]">Mentee</div>
                <div className="text-lg font-medium text-[#454545]">Focus Skill</div>
                <div className="text-lg font-medium text-[#454545]">Fit Score</div>
              </div>
              
              {mentorPairings.map((pair, index) => (
                <MentorPairingCard 
                  key={index}
                  mentor={pair.mentor}
                  mentee={pair.mentee}
                  skill={pair.skill}
                  fitScore={pair.fitScore}
                />
              ))}
              
              <div className="flex justify-end mt-4">
                <button className="flex items-center text-[#BF82FF]">
                  See more
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-1">
                    <path d="M12 5L12 19M12 19L19 12M12 19L5 12" stroke="#BF82FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 