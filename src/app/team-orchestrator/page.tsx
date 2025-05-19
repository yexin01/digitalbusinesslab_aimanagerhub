"use client";

import React, { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import TeamSuggestionCard from '../../components/TeamSuggestionCard';
import TeamMemberCard from '../../components/TeamMemberCard';
import MentorPairingCard from '../../components/MentorPairingCard';
import OptimalTeamResult from '../../components/OptimalTeamResult';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';

// Define interfaces for team members
interface TeamMember {
  id: string;
  name: string;
  role: string;
  avatar: string;
  skills?: Record<string, number>; // skill name -> proficiency level (0-100)
}

interface TeamSuggestion {
  id: string;
  name: string;
  match: string;
  description: string;
  members: { id: string, avatar: string }[];
  accentColor: string;
}

export default function TeamOrchestratorPage() {
  // States
  const [selectedSkills, setSelectedSkills] = useState<Set<string>>(new Set());
  const [showOptimalTeam, setShowOptimalTeam] = useState(false);
  const [showAllTeamMembers, setShowAllTeamMembers] = useState(false);
  const [optimalTeam, setOptimalTeam] = useState<{
    teamName: string;
    overallMatch: string;
    members: {
      id: string;
      name: string;
      role: string;
      avatar: string;
      matchPercentage: number;
      keyStrengths: string[];
    }[];
  } | null>(null);

  // Sample data for team suggestions
  const teamSuggestions: TeamSuggestion[] = [
    {
      id: '1',
      name: 'Core Team',
      match: '95%',
      description: '7 members, all required skills covered',
      members: [
        { id: '1', avatar: '/images/chris_avatar.png' },
        { id: '2', avatar: '/images/maggie_avatar.png' },
        { id: '3', avatar: '/images/gael_avatar.png' },
        { id: '5', avatar: '/images/new_avatars/ryan_avatar.png' },
        { id: '6', avatar: '/images/new_avatars/sophia_avatar.png' },
        { id: '7', avatar: '/images/new_avatars/alex_avatar.png' },
        { id: '8', avatar: '/images/new_avatars/laura_avatar.png' }
      ],
      accentColor: '#25CD25'
    },
    {
      id: '2',
      name: 'Alternate Team',
      match: '88%',
      description: '6 members, better availability',
      members: [
        { id: '1', avatar: '/images/chris_avatar.png' },
        { id: '4', avatar: '/images/jenna_avatar.png' },
        { id: '5', avatar: '/images/new_avatars/ryan_avatar.png' },
        { id: '7', avatar: '/images/new_avatars/alex_avatar.png' },
        { id: '9', avatar: '/images/new_avatars/daniel_avatar.png' },
        { id: '10', avatar: '/images/new_avatars/anna_avatar.png' }
      ],
      accentColor: '#FFA500'
    },
    {
      id: '3',
      name: 'Younger Team',
      match: '78%',
      description: '5 members, high interest in developing desired skills',
      members: [
        { id: '3', avatar: '/images/gael_avatar.png' },
        { id: '6', avatar: '/images/new_avatars/sophia_avatar.png' },
        { id: '7', avatar: '/images/new_avatars/alex_avatar.png' },
        { id: '8', avatar: '/images/new_avatars/laura_avatar.png' },
        { id: '10', avatar: '/images/new_avatars/anna_avatar.png' }
      ],
      accentColor: '#EB5050'
    }
  ];

  // Current team data with skill proficiencies
  const currentTeam: TeamMember[] = [
    { 
      id: '1', 
      name: 'Chris Friedkly', 
      role: 'Senior Developer', 
      avatar: '/images/chris_avatar.png',
      skills: {
        'Machine Learning': 85,
        'API Integration': 95,
        'Front-End Development': 90,
        'Data Visualization': 75,
        'Project Management': 80
      }
    },
    { 
      id: '2', 
      name: 'Maggie Johnson', 
      role: 'UX Designer', 
      avatar: '/images/maggie_avatar.png',
      skills: {
        'UI/UX Design': 98,
        'Front-End Development': 70,
        'Data Visualization': 85,
        'Project Management': 75
      }
    },
    { 
      id: '3', 
      name: 'Gael Harry', 
      role: 'Software Engineer', 
      avatar: '/images/gael_avatar.png',
      skills: {
        'API Integration': 90,
        'Front-End Development': 80,
        'Machine Learning': 60,
        'Project Management': 50
      }
    },
    { 
      id: '4', 
      name: 'Jenna Sullivan', 
      role: 'QA Engineer', 
      avatar: '/images/jenna_avatar.png',
      skills: {
        'API Integration': 75,
        'Project Management': 80,
        'Data Visualization': 60
      }
    },
    { 
      id: '5', 
      name: 'Marco Rossi', 
      role: 'Data Scientist', 
      avatar: '/images/new_avatars/ryan_avatar.png',
      skills: {
        'Machine Learning': 95,
        'Data Visualization': 90,
        'Project Management': 70
      }
    },
    { 
      id: '6', 
      name: 'Emily Chen', 
      role: 'Product Manager', 
      avatar: '/images/new_avatars/sophia_avatar.png',
      skills: {
        'Project Management': 95,
        'UI/UX Design': 75,
        'API Integration': 65
      }
    },
    { 
      id: '7', 
      name: 'Alex Martinez', 
      role: 'Frontend Developer', 
      avatar: '/images/new_avatars/alex_avatar.png',
      skills: {
        'Front-End Development': 92,
        'UI/UX Design': 85,
        'Data Visualization': 80
      }
    },
    { 
      id: '8', 
      name: 'Sophia Kim', 
      role: 'Backend Developer', 
      avatar: '/images/new_avatars/laura_avatar.png',
      skills: {
        'API Integration': 95,
        'Machine Learning': 70,
        'Project Management': 65
      }
    },
    { 
      id: '9', 
      name: 'Daniel Wilson', 
      role: 'DevOps Engineer', 
      avatar: '/images/new_avatars/daniel_avatar.png',
      skills: {
        'API Integration': 90,
        'Machine Learning': 60,
        'Project Management': 75
      }
    },
    { 
      id: '10', 
      name: 'Anna Petrov', 
      role: 'UI Designer', 
      avatar: '/images/new_avatars/anna_avatar.png',
      skills: {
        'UI/UX Design': 95,
        'Front-End Development': 75,
        'Data Visualization': 85
      }
    }
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
      mentee: { name: 'Anna Petrov', role: 'UI Designer', avatar: '/images/new_avatars/anna_avatar.png' },
      skill: 'User Experience Design',
      fitScore: '92%'
    },
    {
      mentor: { name: 'Marco Rossi', role: 'Data Scientist', avatar: '/images/new_avatars/ryan_avatar.png', score: '84%' },
      mentee: { name: 'Alex Martinez', role: 'Frontend Developer', avatar: '/images/new_avatars/alex_avatar.png' },
      skill: 'Data Visualization',
      fitScore: '88%'
    },
    {
      mentor: { name: 'Emily Chen', role: 'Product Manager', avatar: '/images/new_avatars/sophia_avatar.png', score: '90%' },
      mentee: { name: 'Sophia Kim', role: 'Backend Developer', avatar: '/images/new_avatars/laura_avatar.png' },
      skill: 'Project Management',
      fitScore: '85%'
    }
  ];

  // Required skills
  const requiredSkills = [
    'Machine Learning',
    'API Integration',
    'Project Management',
    'Front-End Development',
    'Data Visualization',
    'UI/UX Design'
  ];

  const visibleTeamMembers = showAllTeamMembers ? currentTeam : currentTeam.slice(0, 6);
  
  // Toggle skill selection
  const toggleSkillSelection = (skill: string) => {
    const newSelectedSkills = new Set(selectedSkills);
    if (newSelectedSkills.has(skill)) {
      newSelectedSkills.delete(skill);
    } else {
      newSelectedSkills.add(skill);
    }
    setSelectedSkills(newSelectedSkills);
  };
  
  // Find optimal team based on selected skills
  const findOptimalTeam = () => {
    if (selectedSkills.size === 0) {
      // If no skills are selected, use all skills
      requiredSkills.forEach(skill => selectedSkills.add(skill));
    }
    
    // Calculate each member's match score based on selected skills
    const membersWithScores = currentTeam.map(member => {
      let totalScore = 0;
      let matchCount = 0;
      const keyStrengths: string[] = [];
      
      // Calculate score based on skills
      selectedSkills.forEach(skill => {
        const skillScore = member.skills?.[skill] || 0;
        if (skillScore > 0) {
          totalScore += skillScore;
          matchCount++;
          
          // If they're very good at this skill, add it as a key strength
          if (skillScore >= 85) {
            keyStrengths.push(skill);
          }
        }
      });
      
      // Calculate match percentage
      const matchPercentage = matchCount > 0 
        ? Math.round(totalScore / (matchCount * 100) * 100)
        : 0;
        
      return {
        ...member,
        matchPercentage,
        keyStrengths
      };
    });
    
    // Sort by match percentage (highest first) and take top 5
    const topMembers = [...membersWithScores]
      .sort((a, b) => b.matchPercentage - a.matchPercentage)
      .slice(0, 5);
    
    // Calculate overall team match
    const overallMatch = Math.round(
      topMembers.reduce((sum, member) => sum + member.matchPercentage, 0) / topMembers.length
    );
    
    setOptimalTeam({
      teamName: "Optimal Team",
      overallMatch: `${overallMatch}%`,
      members: topMembers
    });
    
    setShowOptimalTeam(true);
  };

  return (
    <div className="flex h-screen bg-[#F6F6F3]">
      <Sidebar />
      
      <div className="flex-1 p-6 ml-6 overflow-y-auto">
        <div className="max-w-7xl mx-auto">
          {/* Main Header */}
          <div className="bg-white bg-opacity-70 backdrop-blur-md rounded-2xl p-6 mb-8 shadow-sm border-l-4 border-[#9055FF]">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-2 h-10 bg-gradient-to-b from-[#9055FF] to-[#BF82FF] rounded-full mr-4"></div>
                <div>
                  <h1 className="text-3xl font-bold text-[#131313] tracking-tight">Team Orchestrator</h1>
                  <p className="text-sm text-[#6B6B6B] mt-1">Build optimal teams by matching skills with project requirements</p>
                </div>
              </div>
              <div className="text-sm text-[#6B6B6B] bg-[#F6F6F3] px-3 py-1.5 rounded-full">
                Last updated: <span className="font-medium">Today, 10:15 AM</span>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 gap-8">
            {/* Team Builder & Optimizer Section */}
            <div className="mb-6">
              <div className="flex items-baseline mb-4">
                <div className="w-1 h-8 bg-[#9055FF] rounded-full mr-3"></div>
                <h2 className="text-xl font-semibold text-[#131313]">Team Builder & Optimizer</h2>
                <p className="text-xs text-[#6B6B6B] ml-2">Select skills and find the perfect team for your project</p>
              </div>
              
              <Card elevation="md" className="transition-all duration-300 border-l-4 border-[#9055FF]">
                <div className="text-sm text-[#454545] mb-4 p-4">Select project requirements or skills needed:</div>                
                <div className="flex flex-wrap gap-2 mb-6 px-4">
                  {requiredSkills.map((skill, index) => (
                    <button 
                      key={index}
                      onClick={() => toggleSkillSelection(skill)}
                      className="focus:outline-none"
                    >
                      <Badge 
                        variant={selectedSkills.has(skill) ? "primary" : "secondary"}
                        size="md"
                        className="cursor-pointer hover:opacity-90 transition-opacity"
                      >
                        {skill}
                      </Badge>
                    </button>
                  ))}
                </div>
                
                <div className="flex gap-4 mb-4 px-4 pb-4 border-t-2 border-[#F4EBFF] pt-6">
                  <Button
                    variant="primary"
                    size="md"
                    onClick={findOptimalTeam}
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
            </div>
            
            {/* Optimal Team Result */}
            {showOptimalTeam && optimalTeam && (
              <div className="mb-2">
                <OptimalTeamResult
                  teamName={optimalTeam.teamName}
                  overallMatch={optimalTeam.overallMatch}
                  members={optimalTeam.members}
                  requiredSkills={Array.from(selectedSkills)}
                  onClose={() => setShowOptimalTeam(false)}
                />
              </div>
            )}
            
            {/* Current Team Section */}
            <div className="mb-6">
              <div className="flex items-baseline mb-4">
                <div className="w-1 h-8 bg-[#4E97FF] rounded-full mr-3"></div>
                <h2 className="text-xl font-semibold text-[#131313]">Current Team</h2>
                <p className="text-xs text-[#6B6B6B] ml-2">{currentTeam.length} members available in your organization</p>
              </div>
              
              <Card elevation="md" className="transition-all duration-300 border-l-4 border-[#4E97FF]">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 p-4">
                  {visibleTeamMembers.map(member => (
                    <TeamMemberCard 
                      key={member.id}
                      name={member.name}
                      role={member.role}
                      avatar={member.avatar}
                    />
                  ))}
                </div>

                {currentTeam.length > 6 && (
                  <div className="flex justify-center">
                    <button
                      onClick={() => setShowAllTeamMembers(!showAllTeamMembers)}
                      className="text-sm font-medium text-[#BF82FF] hover:text-[#9055FF] transition-colors flex items-center gap-1"
                    >
                      {showAllTeamMembers ? (
                        <>
                          Show Less
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19 15L12 8L5 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </>
                      ) : (
                        <>
                          Show All Members
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 9L12 16L19 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </>
                      )}
                    </button>
                  </div>
                )}
              </Card>
            </div>
            
            {/* AI Suggestions Section */}
            <div className="mb-6">
              <div className="flex items-baseline mb-4">
                <div className="w-1 h-8 bg-[#BF82FF] rounded-full mr-3"></div>
                <h2 className="text-xl font-semibold text-[#131313]">AI Suggestions</h2>
                <p className="text-xs text-[#6B6B6B] ml-2">Pre-configured optimal teams based on AI analysis</p>
              </div>
              
              <Card elevation="md" className="transition-all duration-300 border-l-4 border-[#BF82FF]">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
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
              </Card>
            </div>
            
            {/* Recommended Development Pairings */}
            <div className="mb-6">
              <div className="flex items-baseline mb-4">
                <div className="w-1 h-8 bg-[#25CD25] rounded-full mr-3"></div>
                <h2 className="text-xl font-semibold text-[#131313]">Recommended Development Pairings</h2>
                <p className="text-xs text-[#6B6B6B] ml-2">Mentor-mentee matches to accelerate skills development</p>
              </div>
              
              <Card elevation="md" className="transition-all duration-300 border-l-4 border-[#25CD25]">
                <div className="grid grid-cols-1 gap-4 p-4">
                  <div className="bg-[#F6F6F3] rounded-lg p-3 grid grid-cols-4 gap-4 mb-4">
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
                  
                  <div className="flex justify-end mt-6 border-t-2 border-[#F4EBFF] pt-6">
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
            
            {/* Footer */}
            <div className="mt-6 pb-6">
              <div className="text-center text-sm text-[#6B6B6B] opacity-70">
                <p>AI Manager Hub • Made with ❤️ by Team 10 • Digital Business Innovation Lab • 2025 SACE Project</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 