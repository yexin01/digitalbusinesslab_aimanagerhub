"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import ImageWithFallback from '@/components/ui/ImageWithFallback';
import Sidebar from '@/components/Sidebar';
import PageHeader from '@/components/PageHeader';
import { FiCalendar, FiUsers, FiBarChart2, FiGlobe, FiFilter, FiChevronDown, FiChevronUp, FiClock } from 'react-icons/fi';

type ProjectStatus = 'active' | 'completed' | 'planning';
type ProjectCategory = 'financing' | 'expansion' | 'sustainability' | 'recovery' | 'all';

interface ProjectMember {
  id: string;
  name: string;
  avatar: string;
  role: string;
}

interface Project {
  id: string;
  title: string;
  description: string;
  category: 'financing' | 'expansion' | 'sustainability' | 'recovery';
  status: ProjectStatus;
  progress: number;
  startDate: string;
  endDate: string;
  team: ProjectMember[];
  image: string;
  location: string;
  budget: string;
}

const Projects = () => {
  const [statusFilter, setStatusFilter] = useState<ProjectStatus | 'all'>('all');
  const [categoryFilter, setCategoryFilter] = useState<ProjectCategory>('all');
  const [expandedProject, setExpandedProject] = useState<string | null>(null);

  const teamMembers: ProjectMember[] = [
    {
      id: '1',
      name: 'Chris Friedkly',
      role: 'Senior Developer',
      avatar: '/images/chris_avatar.png'
    },
    {
      id: '2',
      name: 'Maggie Johnson',
      role: 'UX Designer',
      avatar: '/images/maggie_avatar.png'
    },
    {
      id: '3',
      name: 'Gael Harry',
      role: 'Software Engineer',
      avatar: '/images/gael_avatar.png'
    },
    {
      id: '4',
      name: 'Jenna Sullivan',
      role: 'QA Engineer',
      avatar: '/images/jenna_avatar.png'
    },
    {
      id: '5',
      name: 'Marco Rossi',
      role: 'Data Scientist',
      avatar: '/images/new_avatars/ryan_avatar.png'
    },
    {
      id: '6',
      name: 'Emily Chen',
      role: 'Product Manager',
      avatar: '/images/new_avatars/sophia_avatar.png'
    },
    {
      id: '7',
      name: 'Alex Martinez',
      role: 'Frontend Developer',
      avatar: '/images/new_avatars/alex_avatar.png'
    }
  ];

  const projects: Project[] = [
    {
      id: 'p1',
      title: 'Export Finance Platform',
      description: 'Development of a digital platform to streamline the process of obtaining medium/long-term loans for Italian exporters. The platform will connect Italian SMEs with international buyers, offering competitive financing options and digital document management.',
      category: 'financing',
      status: 'active',
      progress: 65,
      startDate: '2024-01-15',
      endDate: '2024-10-30',
      team: [teamMembers[0], teamMembers[1], teamMembers[4], teamMembers[6]],
      image: 'https://images.unsplash.com/photo-1554224155-1696413565d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
      location: 'Milan, Italy',
      budget: '€3.2M'
    },
    {
      id: 'p2',
      title: 'International Market Expansion Dashboard',
      description: 'Creation of an AI-powered dashboard to identify expansion opportunities for Italian companies in emerging markets. The tool analyzes economic data, trade barriers, and market conditions to provide personalized recommendations for businesses looking to expand internationally.',
      category: 'expansion',
      status: 'active',
      progress: 42,
      startDate: '2024-02-20',
      endDate: '2024-12-15',
      team: [teamMembers[2], teamMembers[4], teamMembers[5]],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
      location: 'Rome, Italy',
      budget: '€2.8M'
    },
    {
      id: 'p3',
      title: 'Sustainability Certification Program',
      description: 'Implementation of a sustainability certification program to help Italian companies meet international ESG standards. The project includes development of assessment tools, training programs, and a digital platform for tracking and reporting sustainability metrics.',
      category: 'sustainability',
      status: 'planning',
      progress: 15,
      startDate: '2024-04-10',
      endDate: '2025-05-30',
      team: [teamMembers[1], teamMembers[3], teamMembers[5]],
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
      location: 'Turin, Italy',
      budget: '€1.9M'
    },
    {
      id: 'p4',
      title: 'Trade Credit Recovery System',
      description: 'Development of an AI-enhanced system to improve recovery of unpaid dues for Italian exporters. The system will integrate with financial institutions to provide early warning signs of payment risks and automate recovery procedures.',
      category: 'recovery',
      status: 'completed',
      progress: 100,
      startDate: '2023-09-05',
      endDate: '2024-03-15',
      team: [teamMembers[0], teamMembers[2], teamMembers[4]],
      image: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1649&q=80',
      location: 'Naples, Italy',
      budget: '€1.5M'
    },
    {
      id: 'p5',
      title: 'Global Supply Chain Resilience',
      description: 'Creation of a supply chain management platform to help Italian manufacturers maintain resilience against global disruptions. The platform will provide real-time analytics, alternative supplier recommendations, and risk assessment tools.',
      category: 'expansion',
      status: 'active',
      progress: 78,
      startDate: '2023-11-12',
      endDate: '2024-08-30',
      team: [teamMembers[3], teamMembers[5], teamMembers[6]],
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
      location: 'Bologna, Italy',
      budget: '€2.3M'
    },
    {
      id: 'p6',
      title: 'Green Export Financing Initiative',
      description: 'Launch of a specialized financing program for Italian companies exporting sustainable technologies. The project includes development of assessment criteria, digital application portal, and integration with international green certification standards.',
      category: 'sustainability',
      status: 'planning',
      progress: 25,
      startDate: '2024-06-01',
      endDate: '2025-07-31',
      team: [teamMembers[1], teamMembers[4], teamMembers[5]],
      image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
      location: 'Venice, Italy',
      budget: '€3.7M'
    }
  ];

  const toggleProjectExpansion = (projectId: string) => {
    if (expandedProject === projectId) {
      setExpandedProject(null);
    } else {
      setExpandedProject(projectId);
    }
  };

  const filteredProjects = projects.filter(project => {
    if (statusFilter !== 'all' && project.status !== statusFilter) {
      return false;
    }
    if (categoryFilter !== 'all' && project.category !== categoryFilter) {
      return false;
    }
    return true;
  });

  const getStatusColor = (status: ProjectStatus) => {
    switch (status) {
      case 'active':
        return 'bg-[#E8F8E8] text-[#25CD25]';
      case 'completed':
        return 'bg-[#F4EBFF] text-[#BF82FF]';
      case 'planning':
        return 'bg-[#FFF4E5] text-[#FFA500]';
      default:
        return 'bg-[#F6F6F3] text-[#6B6B6B]';
    }
  };

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'financing':
        return 'Export Financing';
      case 'expansion':
        return 'Market Expansion';
      case 'sustainability':
        return 'Sustainability';
      case 'recovery':
        return 'Credit Recovery';
      default:
        return category;
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-[#F6F6F3] via-[#FAFAFA] to-[#F0F0F0]">
      <Sidebar />
      
      <div className="flex-1 lg:ml-[320px] p-4 sm:p-6 lg:p-8 overflow-y-auto">
        {/* Mobile top spacing for menu button */}
        <div className="lg:hidden h-16 mb-4"></div>
        <div className="max-w-8xl mx-auto space-y-6 lg:space-y-8">
          <PageHeader
            title="Projects"
            description="Manage and track company's initiatives supporting Italian companies' growth internationally"
            accentColor="#BF82FF"
          />

          {/* Filters */}
          <div className="flex items-center gap-4 mb-6 flex-wrap">
            <div className="flex items-center gap-2">
              <FiFilter size={14} className="text-[#6B6B6B]" />
              <span className="text-sm text-[#6B6B6B]">Status:</span>
            </div>
            <div className="flex items-center gap-2 flex-wrap">
              <button
                onClick={() => setStatusFilter('all')}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                  statusFilter === 'all' ? 'bg-[#F4EBFF] text-[#BF82FF]' : 'bg-[#F6F6F3] text-[#6B6B6B] hover:bg-[#EDEDED]'
                }`}
              >
                All
              </button>
              <button
                onClick={() => setStatusFilter('active')}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                  statusFilter === 'active' ? 'bg-[#E8F8E8] text-[#25CD25]' : 'bg-[#F6F6F3] text-[#6B6B6B] hover:bg-[#EDEDED]'
                }`}
              >
                Active
              </button>
              <button
                onClick={() => setStatusFilter('planning')}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                  statusFilter === 'planning' ? 'bg-[#FFF4E5] text-[#FFA500]' : 'bg-[#F6F6F3] text-[#6B6B6B] hover:bg-[#EDEDED]'
                }`}
              >
                Planning
              </button>
              <button
                onClick={() => setStatusFilter('completed')}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                  statusFilter === 'completed' ? 'bg-[#F4EBFF] text-[#BF82FF]' : 'bg-[#F6F6F3] text-[#6B6B6B] hover:bg-[#EDEDED]'
                }`}
              >
                Completed
              </button>
            </div>

            <div className="flex items-center gap-2 ml-4">
              <FiFilter size={14} className="text-[#6B6B6B]" />
              <span className="text-sm text-[#6B6B6B]">Category:</span>
            </div>
            <div className="flex items-center gap-2 flex-wrap">
              <button
                onClick={() => setCategoryFilter('all')}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                  categoryFilter === 'all' ? 'bg-[#F4EBFF] text-[#BF82FF]' : 'bg-[#F6F6F3] text-[#6B6B6B] hover:bg-[#EDEDED]'
                }`}
              >
                All Categories
              </button>
              <button
                onClick={() => setCategoryFilter('financing')}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                  categoryFilter === 'financing' ? 'bg-[#F4EBFF] text-[#BF82FF]' : 'bg-[#F6F6F3] text-[#6B6B6B] hover:bg-[#EDEDED]'
                }`}
              >
                Export Financing
              </button>
              <button
                onClick={() => setCategoryFilter('expansion')}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                  categoryFilter === 'expansion' ? 'bg-[#F4EBFF] text-[#BF82FF]' : 'bg-[#F6F6F3] text-[#6B6B6B] hover:bg-[#EDEDED]'
                }`}
              >
                Market Expansion
              </button>
              <button
                onClick={() => setCategoryFilter('sustainability')}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                  categoryFilter === 'sustainability' ? 'bg-[#F4EBFF] text-[#BF82FF]' : 'bg-[#F6F6F3] text-[#6B6B6B] hover:bg-[#EDEDED]'
                }`}
              >
                Sustainability
              </button>
              <button
                onClick={() => setCategoryFilter('recovery')}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                  categoryFilter === 'recovery' ? 'bg-[#F4EBFF] text-[#BF82FF]' : 'bg-[#F6F6F3] text-[#6B6B6B] hover:bg-[#EDEDED]'
                }`}
              >
                Credit Recovery
              </button>
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            {filteredProjects.map(project => (
              <div 
                key={project.id} 
                className={`bg-white rounded-xl shadow-sm overflow-hidden transition-all duration-300 ${
                  expandedProject === project.id ? 'transform scale-[1.02]' : ''
                }`}
              >
                <div className="relative h-48 w-full bg-gradient-to-br from-[#F6F6F3] to-[#E5E5E5]">
                  <ImageWithFallback 
                    src={project.image} 
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={false}
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkrHB0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                  />
                  <div className="absolute top-3 right-3">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                      {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-3">
                    <span className="px-2.5 py-1 bg-black/70 text-white rounded-full text-xs font-medium">
                      {getCategoryLabel(project.category)}
                    </span>
                  </div>
                </div>
                
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-[#131313] mb-2">{project.title}</h3>
                  
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex -space-x-2">
                      {project.team.slice(0, 3).map((member, index) => (
                        <div key={member.id} className="relative w-7 h-7 rounded-full overflow-hidden border-2 border-white">
                          <Image 
                            src={member.avatar} 
                            alt={member.name}
                            fill
                            className="object-cover"
                            sizes="28px"
                          />
                        </div>
                      ))}
                      {project.team.length > 3 && (
                        <div className="relative w-7 h-7 rounded-full bg-[#F4EBFF] border-2 border-white flex items-center justify-center">
                          <span className="text-xs font-medium text-[#BF82FF]">+{project.team.length - 3}</span>
                        </div>
                      )}
                    </div>
                    <span className="text-xs text-[#6B6B6B]">{project.team.length} team members</span>
                  </div>
                  
                  <div className="flex items-center justify-between text-xs text-[#6B6B6B] mb-3">
                    <div className="flex items-center gap-1">
                      <FiCalendar size={12} />
                      <span>{formatDate(project.startDate)} - {formatDate(project.endDate)}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <FiGlobe size={12} />
                      <span>{project.location}</span>
                    </div>
                  </div>
                  
                  <div className="mb-3">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-medium text-[#6B6B6B]">Progress</span>
                      <span className="text-xs font-medium text-[#131313]">{project.progress}%</span>
                    </div>
                    <div className="w-full h-1.5 bg-[#F6F6F3] rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-[#BF82FF]" 
                        style={{ width: `${project.progress}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <button
                    onClick={() => toggleProjectExpansion(project.id)}
                    className="w-full flex items-center justify-center gap-1 text-sm text-[#BF82FF] hover:underline"
                  >
                    {expandedProject === project.id ? (
                      <>
                        <span>Show Less</span>
                        <FiChevronUp size={16} />
                      </>
                    ) : (
                      <>
                        <span>Show More</span>
                        <FiChevronDown size={16} />
                      </>
                    )}
                  </button>
                  
                  {expandedProject === project.id && (
                    <div className="mt-4 pt-4 border-t border-[#F0F0F0]">
                      <p className="text-sm text-[#6B6B6B] mb-4">{project.description}</p>
                      
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-1">
                          <FiBarChart2 size={14} className="text-[#BF82FF]" />
                          <span className="text-sm font-medium text-[#131313]">Budget</span>
                        </div>
                        <span className="text-sm text-[#131313]">{project.budget}</span>
                      </div>
                      
                      <h4 className="text-sm font-medium text-[#131313] mb-2">Team Members</h4>
                      <div className="space-y-2">
                        {project.team.map(member => (
                          <div key={member.id} className="flex items-center gap-2">
                            <div className="relative w-6 h-6 rounded-full overflow-hidden">
                              <Image 
                                src={member.avatar} 
                                alt={member.name}
                                fill
                                className="object-cover"
                                sizes="24px"
                              />
                            </div>
                            <div>
                              <span className="text-xs font-medium text-[#131313]">{member.name}</span>
                              <span className="text-xs text-[#6B6B6B] ml-1">• {member.role}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
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
  );
};

export default Projects; 