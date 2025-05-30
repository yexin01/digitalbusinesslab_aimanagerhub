"use client";

import React, { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import PageHeader from '@/components/PageHeader';
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
  const [showAllPairings, setShowAllPairings] = useState(false);
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
  const [customSkill, setCustomSkill] = useState('');
  const [requiredSkills, setRequiredSkills] = useState([
    'JavaScript', 'React', 'Node.js', 'Python', 'UX Design',
    'Data Analysis', 'Machine Learning', 'Product Management',
    'UI Design', 'Project Management', 'DevOps', 'Cloud Architecture'
  ]);

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
        'JavaScript': 95,
        'React': 90,
        'Node.js': 88,
        'Python': 85,
        'Machine Learning': 85,
        'Data Analysis': 80,
        'DevOps': 75,
        'Cloud Architecture': 82,
        'Project Management': 80
      }
    },
    { 
      id: '2', 
      name: 'Maggie Johnson', 
      role: 'UX Designer', 
      avatar: '/images/maggie_avatar.png',
      skills: {
        'UX Design': 98,
        'UI Design': 95,
        'React': 70,
        'JavaScript': 65,
        'Data Analysis': 60,
        'Product Management': 75,
        'Project Management': 75
      }
    },
    { 
      id: '3', 
      name: 'Gael Harry', 
      role: 'Software Engineer', 
      avatar: '/images/gael_avatar.png',
      skills: {
        'JavaScript': 90,
        'React': 85,
        'Node.js': 80,
        'Python': 75,
        'Machine Learning': 60,
        'DevOps': 70,
        'Data Analysis': 55,
        'Project Management': 50
      }
    },
    { 
      id: '4', 
      name: 'Jenna Sullivan', 
      role: 'QA Engineer', 
      avatar: '/images/jenna_avatar.png',
      skills: {
        'JavaScript': 75,
        'React': 70,
        'Node.js': 65,
        'Python': 60,
        'Data Analysis': 85,
        'Project Management': 80,
        'DevOps': 75
      }
    },
    { 
      id: '5', 
      name: 'Marco Rossi', 
      role: 'Data Scientist', 
      avatar: '/images/new_avatars/ryan_avatar.png',
      skills: {
        'Python': 95,
        'Machine Learning': 95,
        'Data Analysis': 98,
        'JavaScript': 70,
        'React': 65,
        'Cloud Architecture': 80,
        'Project Management': 70
      }
    },
    { 
      id: '6', 
      name: 'Emily Chen', 
      role: 'Product Manager', 
      avatar: '/images/new_avatars/sophia_avatar.png',
      skills: {
        'Product Management': 95,
        'Project Management': 95,
        'UX Design': 75,
        'UI Design': 70,
        'Data Analysis': 80,
        'JavaScript': 50,
        'React': 45
      }
    },
    { 
      id: '7', 
      name: 'Alex Martinez', 
      role: 'Frontend Developer', 
      avatar: '/images/new_avatars/alex_avatar.png',
      skills: {
        'React': 92,
        'JavaScript': 95,
        'UI Design': 85,
        'UX Design': 75,
        'Node.js': 70,
        'Python': 45,
        'Data Analysis': 60
      }
    },
    { 
      id: '8', 
      name: 'Sophia Kim', 
      role: 'Backend Developer', 
      avatar: '/images/new_avatars/laura_avatar.png',
      skills: {
        'Node.js': 95,
        'Python': 90,
        'JavaScript': 85,
        'Machine Learning': 70,
        'Cloud Architecture': 88,
        'DevOps': 85,
        'Data Analysis': 75,
        'Project Management': 65
      }
    },
    { 
      id: '9', 
      name: 'Daniel Wilson', 
      role: 'DevOps Engineer', 
      avatar: '/images/new_avatars/daniel_avatar.png',
      skills: {
        'DevOps': 95,
        'Cloud Architecture': 90,
        'Python': 80,
        'Node.js': 75,
        'JavaScript': 70,
        'Machine Learning': 60,
        'Data Analysis': 65,
        'Project Management': 75
      }
    },
    { 
      id: '10', 
      name: 'Anna Petrov', 
      role: 'UI Designer', 
      avatar: '/images/new_avatars/anna_avatar.png',
      skills: {
        'UI Design': 95,
        'UX Design': 88,
        'React': 75,
        'JavaScript': 70,
        'Product Management': 60,
        'Data Analysis': 55,
        'Project Management': 50
      }
    }
  ];

  // Mentor pairings
  const mentorPairings = [
    {
      mentor: { name: 'Chris Friedkly', role: 'Senior Developer', avatar: '/images/chris_avatar.png', score: '86%' },
      mentee: { name: 'Gael Harry', role: 'Software Engineer', avatar: '/images/gael_avatar.png' },
      skill: 'Machine Learning',
      fitScore: '95%'
    },
    {
      mentor: { name: 'Maggie Johnson', role: 'UX Designer', avatar: '/images/maggie_avatar.png', score: '88%' },
      mentee: { name: 'Anna Petrov', role: 'UI Designer', avatar: '/images/new_avatars/anna_avatar.png' },
      skill: 'UX Design',
      fitScore: '92%'
    },
    {
      mentor: { name: 'Marco Rossi', role: 'Data Scientist', avatar: '/images/new_avatars/ryan_avatar.png', score: '84%' },
      mentee: { name: 'Alex Martinez', role: 'Frontend Developer', avatar: '/images/new_avatars/alex_avatar.png' },
      skill: 'Data Analysis',
      fitScore: '88%'
    },
    {
      mentor: { name: 'Emily Chen', role: 'Product Manager', avatar: '/images/new_avatars/sophia_avatar.png', score: '90%' },
      mentee: { name: 'Sophia Kim', role: 'Backend Developer', avatar: '/images/new_avatars/laura_avatar.png' },
      skill: 'Project Management',
      fitScore: '85%'
    },
    {
      mentor: { name: 'Daniel Wilson', role: 'DevOps Engineer', avatar: '/images/new_avatars/daniel_avatar.png', score: '82%' },
      mentee: { name: 'Jenna Sullivan', role: 'QA Engineer', avatar: '/images/jenna_avatar.png' },
      skill: 'DevOps',
      fitScore: '78%'
    },
    {
      mentor: { name: 'Sophia Kim', role: 'Backend Developer', avatar: '/images/new_avatars/laura_avatar.png', score: '87%' },
      mentee: { name: 'Gael Harry', role: 'Software Engineer', avatar: '/images/gael_avatar.png' },
      skill: 'Node.js',
      fitScore: '83%'
    }
  ];

  const visibleTeamMembers = showAllTeamMembers ? currentTeam : currentTeam.slice(0, 6);
  const visiblePairings = showAllPairings ? mentorPairings : mentorPairings.slice(0, 3);
  
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
        ? Math.round(totalScore / matchCount)
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

  // Check if a skill is among the default ones
  const isDefaultSkill = (skill: string) => {
    // Insert here the array of original default skills
    const defaultSkills = [
      'JavaScript', 'React', 'Node.js', 'Python', 'UX Design',
      'Data Analysis', 'Machine Learning', 'Product Management',
      'UI Design', 'Project Management', 'DevOps', 'Cloud Architecture'
    ];
    return defaultSkills.includes(skill);
  };

  // Remove a custom skill
  const removeCustomSkill = (skill: string) => {
    // Remove skill from the list
    setRequiredSkills(requiredSkills.filter(s => s !== skill));
    
    // Also remove from selection if present
    if (selectedSkills.has(skill)) {
      const newSelectedSkills = new Set(selectedSkills);
      newSelectedSkills.delete(skill);
      setSelectedSkills(newSelectedSkills);
    }
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-[#F6F6F3] via-[#FAFAFA] to-[#F0F0F0]">
      <Sidebar />
      
      <div className="flex-1 lg:ml-[320px] p-4 sm:p-6 lg:p-8 overflow-y-auto">
        {/* Mobile top spacing for menu button */}
        <div className="lg:hidden h-16 mb-4"></div>
        
        <div className="max-w-8xl mx-auto space-y-6 lg:space-y-8">
          {/* Main Header */}
          <PageHeader
            title="Team Orchestrator"
            description="Build optimal teams by matching skills with project requirements using AI-powered analysis"
            accentColor="#9055FF"
          >
            <div className="text-sm text-[#6B6B6B] bg-white/80 backdrop-blur-sm px-4 py-2.5 rounded-2xl border border-[#E5E5E5] shadow-sm">
              <span className="block sm:inline">Last updated: </span>
              <span className="font-semibold text-[#131313]">Today, 10:15 AM</span>
            </div>
          </PageHeader>
          
          <div className="grid grid-cols-1 gap-8">
            {/* Team Builder & Optimizer Section */}
            <div className="mb-6">
              <div className="flex items-baseline mb-4">
                <div className="w-1 h-8 bg-[#9055FF] rounded-full mr-3"></div>
                <h2 className="text-xl font-semibold text-[#131313]">Team Builder & Optimizer</h2>
                <p className="text-xs text-[#6B6B6B] ml-2">Select skills and find the perfect team for your project</p>
              </div>
              
              <Card elevation="md" className="transition-all duration-300 border-l-4 border-[#9055FF]">
                {/* Input for custom skills */}
                <div className="flex items-center gap-2 mb-4 p-4 pb-0">
                  <input
                    type="text"
                    value={customSkill}
                    onChange={(e) => setCustomSkill(e.target.value)}
                    placeholder="Add a custom skill..."
                    className="flex-1 px-3 py-2 rounded-lg border border-[#E0E0E0] focus:outline-none focus:ring-2 focus:ring-[#BF82FF] focus:border-transparent text-sm"
                  />
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={() => {
                      if (customSkill.trim()) {
                        setRequiredSkills([...requiredSkills, customSkill.trim()]);
                        setSelectedSkills(new Set([...selectedSkills, customSkill.trim()]));
                        setCustomSkill('');
                      }
                    }}
                    disabled={!customSkill.trim()}
                  >
                    Add
                  </Button>
                </div>

                <div className="text-sm text-[#454545] mb-4 p-4 pt-2">
                  <div className="flex justify-between items-center">
                    <span>Select project requirements or skills needed:</span>
                    <div className="flex gap-2">
                      <button 
                        onClick={() => setSelectedSkills(new Set(requiredSkills))}
                        className="text-xs text-[#9055FF] hover:text-[#6E38D1]"
                      >
                        Select all
                      </button>
                      <span className="text-xs text-[#6B6B6B]">|</span>
                      <button 
                        onClick={() => setSelectedSkills(new Set())}
                        className="text-xs text-[#9055FF] hover:text-[#6E38D1]"
                      >
                        Deselect all
                      </button>
                    </div>
                  </div>
                </div>
                
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
                        {!isDefaultSkill(skill) && (
                          <span 
                            className="ml-1 cursor-pointer" 
                            onClick={(e) => {
                              e.stopPropagation();
                              removeCustomSkill(skill);
                            }}
                          >
                            ×
                          </span>
                        )}
                      </Badge>
                    </button>
                  ))}
                </div>
                
                <div className="flex justify-center mb-4 px-4 pb-4 border-t-2 border-[#F4EBFF] pt-6">
                  <Button
                    variant="primary"
                    size="md"
                    onClick={findOptimalTeam}
                  >
                    Find Optimal Team
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
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setShowAllTeamMembers(!showAllTeamMembers)}
                      icon={
                        showAllTeamMembers ? (
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19 15L12 8L5 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        ) : (
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 9L12 16L19 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        )
                      }
                      iconPosition="right"
                    >
                      {showAllTeamMembers ? 'Show Less' : 'Show All Members'}
                    </Button>
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
                  
                  {visiblePairings.map((pair, index) => (
                    <MentorPairingCard 
                      key={index}
                      mentor={pair.mentor}
                      mentee={pair.mentee}
                      skill={pair.skill}
                      fitScore={pair.fitScore}
                    />
                  ))}
                  
                  {mentorPairings.length > 3 && (
                    <div className="flex justify-center">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setShowAllPairings(!showAllPairings)}
                        icon={
                          showAllPairings ? (
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M19 15L12 8L5 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          ) : (
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M5 9L12 16L19 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          )
                        }
                        iconPosition="right"
                      >
                        {showAllPairings ? 'Show Less Pairings' : 'See More Pairings'}
                      </Button>
                    </div>
                  )}
                </div>
              </Card>
            </div>
            
            {/* Footer */}
          <footer className="text-center py-8 border-t border-[#F0F0F0] bg-white/50 backdrop-blur-sm rounded-2xl">
            <div className="text-sm text-[#6B6B6B]">
              <p className="font-medium">AI Manager Hub • Made with ❤️ by Team 10</p>
              <p className="text-xs mt-1 opacity-75">Digital Business Innovation Lab • 2025 SACE Project</p>
              <div className="mt-4 pt-4 border-t border-[#F0F0F0]/50">
                <p className="text-xs text-[#9B9B9B] italic">
                  ⚠️ Disclaimer: All data, metrics, and information displayed in this application are fictional and created for demonstration purposes only. Any resemblance to real persons, companies, or events is purely coincidental.
                </p>
              </div>
            </div>
          </footer>
          </div>
        </div>
      </div>
    </div>
  );
} 