"use client";

import React from 'react';
import Sidebar from '@/components/Sidebar';
import Image from 'next/image';
import TeamSuggestionCard from '@/components/TeamSuggestionCard';
import TeamMemberCard from '@/components/TeamMemberCard';
import MentorPairingCard from '@/components/MentorPairingCard';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';

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
    <div className="flex h-screen bg-[#F6F6F3]">
      <Sidebar />
      
      <div className="flex-1 p-8 overflow-y-auto">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-semibold text-[#131313] mb-8">Team Orchestrator</h1>
          
          <div className="grid grid-cols-1 gap-8">
            {/* Team Builder & Optimizer Section */}
            <Card elevation="md" className="transition-all duration-300">
              <div className="border-b border-[#EDEDED] pb-4 mb-6">
                <h2 className="text-2xl font-semibold text-[#131313]">Team Builder & Optimizer</h2>
              </div>
              
              <div className="text-sm text-[#454545] mb-4">Enter project goals or required skills</div>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {requiredSkills.map((skill, index) => (
                  <Badge 
                    key={index} 
                    variant="secondary"
                    size="md"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
              
              <div className="flex gap-4 mb-4">
                <Button
                  variant="primary"
                  size="md"
                >
                  Find Optimal Team
                </Button>
                <Button
                  variant="outline"
                  size="md"
                >
                  Evaluate Current Team
                </Button>
              </div>
            </Card>
            
            {/* Current Team Section */}
            <Card elevation="md" className="transition-all duration-300">
              <div className="border-b border-[#EDEDED] pb-4 mb-6">
                <h2 className="text-2xl font-semibold text-[#131313]">Current Team</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {currentTeam.map(member => (
                  <TeamMemberCard 
                    key={member.id}
                    name={member.name}
                    role={member.role}
                    avatar={member.avatar}
                  />
                ))}
              </div>
            </Card>
            
            {/* AI Suggestions Section */}
            <div>
              <div className="flex items-center mb-6">
                <div className="w-1 h-6 bg-[#BF82FF] rounded-full mr-3"></div>
                <h2 className="text-2xl font-semibold text-[#131313]">AI Suggestions</h2>
              </div>
              
              <div className="grid grid-cols-1 gap-6">
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
            <Card elevation="md" className="transition-all duration-300">
              <div className="border-b border-[#EDEDED] pb-4 mb-6">
                <h2 className="text-2xl font-semibold text-[#131313]">Recommended Development Pairings</h2>
              </div>
              
              <div className="grid grid-cols-1 gap-4">
                <div className="grid grid-cols-4 gap-4 mb-4 px-6">
                  <div className="text-base font-medium text-[#454545]">Mentor</div>
                  <div className="text-base font-medium text-[#454545]">Mentee</div>
                  <div className="text-base font-medium text-[#454545]">Focus Skill</div>
                  <div className="text-base font-medium text-[#454545]">Fit Score</div>
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
                
                <div className="flex justify-end mt-6">
                  <Button
                    variant="ghost"
                    size="sm"
                    icon={
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 5L12 19M12 19L19 12M12 19L5 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    }
                    iconPosition="right"
                  >
                    See more
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
} 