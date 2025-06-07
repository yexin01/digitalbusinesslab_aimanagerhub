"use client";

import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import Sidebar from '@/components/Sidebar';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { FiArrowLeft, FiDownload, FiBarChart2, FiUsers, FiPieChart, FiCalendar } from 'react-icons/fi';
import { Bar, Line, Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

// Report definitions with types and colors
const reportDefinitions = {
  'team-performance': {
    title: 'Team Performance',
    description: 'Comprehensive analysis of team productivity, code quality, and collaboration metrics',
    icon: <FiBarChart2 size={20} />,
    color: '#9055FF',
    type: 'comprehensive'
  },
  'skills-development': {
    title: 'Skills Development',
    description: 'Team skills analysis and training gaps',
    icon: <FiPieChart size={20} />,
    color: '#4E97FF',
    type: 'skills'
  },
  'team-engagement': {
    title: 'Team Engagement',
    description: 'Team involvement and engagement analysis',
    icon: <FiUsers size={20} />,
    color: '#25CD25',
    type: 'engagement'
  },
  'quarterly-goals': {
    title: 'Quarterly Goals',
    description: 'Progress status of Q3 2024 objectives',
    icon: <FiCalendar size={20} />,
    color: '#EB5050',
    type: 'goals'
  },
  'productivity-analysis': {
    title: 'Productivity Analysis',
    description: 'Aggregated team productivity metrics',
    icon: <FiBarChart2 size={20} />,
    color: '#FFA500',
    type: 'performance'
  },
  'training-report': {
    title: 'Training Report',
    description: 'Team training progress and achievements',
    icon: <FiUsers size={20} />,
    color: '#6E38D1',
    type: 'training'
  }
};

// Comprehensive Team Performance data (combines productivity, code quality, and collaboration)
const comprehensiveData = {
  overallMetrics: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
    datasets: [
      {
        label: 'Productivity Score',
        data: [82, 84, 86, 88, 91, 89, 93, 95],
        borderColor: '#9055FF',
        backgroundColor: 'rgba(144, 85, 255, 0.1)',
        fill: true,
        tension: 0.4
      },
      {
        label: 'Code Quality',
        data: [75, 78, 80, 82, 85, 87, 88, 90],
        borderColor: '#4E97FF',
        backgroundColor: 'rgba(78, 151, 255, 0.1)',
        fill: true,
        tension: 0.4
      },
      {
        label: 'Collaboration',
        data: [88, 90, 87, 91, 94, 92, 96, 98],
        borderColor: '#25CD25',
        backgroundColor: 'rgba(37, 205, 37, 0.1)',
        fill: true,
        tension: 0.4
      }
    ]
  },
  categoryComparison: {
    labels: ['Productivity', 'Code Quality', 'Collaboration', 'Innovation', 'Problem Solving', 'Communication'],
    datasets: [
      {
        label: 'Current Performance',
        data: [95, 90, 98, 82, 87, 94],
        backgroundColor: 'rgba(144, 85, 255, 0.8)',
        borderColor: '#9055FF',
        borderWidth: 2,
        borderRadius: 4
      },
      {
        label: 'Team Target',
        data: [85, 85, 85, 80, 85, 85],
        backgroundColor: 'rgba(144, 85, 255, 0.3)',
        borderColor: '#9055FF',
        borderWidth: 1,
        borderRadius: 4
      }
    ]
  },
  detailedBreakdown: {
    productivity: {
      labels: ['Code Commits', 'Tasks Completed', 'Bug Fixes', 'Feature Delivery', 'Sprint Goals'],
      datasets: [{
        data: [92, 88, 94, 85, 91],
        backgroundColor: ['#9055FF', '#BF82FF', '#D1A3FF', '#E5C7FF', '#F4EBFF'],
        hoverOffset: 4
      }]
    },
    codeQuality: {
      labels: ['Code Reviews', 'Test Coverage', 'Documentation', 'Clean Code', 'Standards Compliance'],
      datasets: [{
        data: [88, 85, 92, 87, 95],
        backgroundColor: ['#4E97FF', '#7BB3FF', '#A8CBFF', '#D1E3FF', '#E8F2FF'],
        hoverOffset: 4
      }]
    },
    collaboration: {
      labels: ['Team Meetings', 'Knowledge Sharing', 'Peer Support', 'Cross-functional Work', 'Mentoring'],
      datasets: [{
        data: [96, 94, 100, 92, 88],
        backgroundColor: ['#25CD25', '#52D452', '#7FDB7F', '#ACE2AC', '#D9F0D9'],
        hoverOffset: 4
      }]
    }
  }
};

// Performance data (anonymous and aggregated)
const performanceData = {
  aggregatedOverTime: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
    datasets: [
      {
        label: 'Team Average',
        data: [78, 80, 83, 81, 85, 87, 89, 92],
        borderColor: '#9055FF',
        backgroundColor: 'rgba(144, 85, 255, 0.1)',
        fill: true,
        tension: 0.4
      }
    ]
  },
  categoryBreakdown: {
    labels: ['Productivity', 'Code Quality', 'Collaboration', 'Problem Solving', 'Communication'],
    datasets: [
      {
        label: 'Current Quarter',
        data: [87, 79, 92, 84, 88],
        backgroundColor: 'rgba(144, 85, 255, 0.7)'
      },
      {
        label: 'Previous Quarter',
        data: [79, 75, 85, 80, 82],
        backgroundColor: 'rgba(144, 85, 255, 0.3)'
      }
    ]
  },
  distributionStats: {
    labels: ['70-75%', '76-80%', '81-85%', '86-90%', '91-95%', '96-100%'],
    datasets: [
      {
        label: 'Team Distribution',
        data: [1, 2, 4, 6, 5, 2],
        backgroundColor: 'rgba(144, 85, 255, 0.7)'
      }
    ]
  }
};

// Skills data (can be detailed by person)
const skillsData = {
  teamMembers: [
    { name: 'Chris Friedkly', role: 'Senior Developer', avatar: '/images/chris_avatar.png', skills: ['JavaScript', 'React', 'Node.js', 'AWS'], level: 92 },
    { name: 'Maggie Johnson', role: 'UX Designer', avatar: '/images/maggie_avatar.png', skills: ['UI Design', 'User Research', 'Figma'], level: 88 },
    { name: 'Gael Harry', role: 'Software Engineer', avatar: '/images/gael_avatar.png', skills: ['Python', 'Django', 'Docker'], level: 85 },
    { name: 'Jenna Sullivan', role: 'QA Engineer', avatar: '/images/jenna_avatar.png', skills: ['Test Automation', 'Selenium'], level: 80 },
    { name: 'Marco Rossi', role: 'Data Scientist', avatar: '/images/new_avatars/ryan_avatar.png', skills: ['Machine Learning', 'Python', 'TensorFlow'], level: 95 },
    { name: 'Emily Chen', role: 'Product Manager', avatar: '/images/new_avatars/sophia_avatar.png', skills: ['Product Strategy', 'Agile', 'User Stories'], level: 90 },
    { name: 'Alex Martinez', role: 'Frontend Developer', avatar: '/images/new_avatars/alex_avatar.png', skills: ['React', 'TypeScript', 'CSS'], level: 87 },
    { name: 'Sophia Kim', role: 'Backend Developer', avatar: '/images/new_avatars/laura_avatar.png', skills: ['Java', 'Spring Boot', 'Microservices'], level: 91 },
    { name: 'Daniel Wilson', role: 'DevOps Engineer', avatar: '/images/new_avatars/daniel_avatar.png', skills: ['Kubernetes', 'CI/CD', 'Cloud'], level: 89 },
    { name: 'Anna Petrov', role: 'UI Designer', avatar: '/images/new_avatars/anna_avatar.png', skills: ['UI Design', 'Visual Design', 'Animation'], level: 86 }
  ],
  skillDistribution: {
    labels: ['JavaScript', 'React', 'Node.js', 'Python', 'UI/UX', 'Machine Learning', 'DevOps'],
    datasets: [
      {
        label: 'Current Coverage',
        data: [92, 85, 78, 65, 89, 72, 58],
        backgroundColor: 'rgba(78, 151, 255, 0.7)'
      },
      {
        label: 'Target Coverage',
        data: [90, 90, 85, 80, 85, 80, 75],
        backgroundColor: 'rgba(78, 151, 255, 0.3)'
      }
    ]
  },
  trainingProgress: {
    labels: ['JavaScript', 'React', 'Python', 'DevOps', 'Machine Learning'],
    datasets: [
      {
        label: 'Completed',
        data: [85, 75, 60, 45, 65],
        backgroundColor: '#4E97FF'
      }
    ]
  }
};

// Engagement data (anonymous and aggregated)
const engagementData = {
  overTime: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
    datasets: [
      {
        label: 'Team Engagement',
        data: [72, 75, 78, 76, 82, 85, 83, 88],
        borderColor: '#25CD25',
        backgroundColor: 'rgba(37, 205, 37, 0.1)',
        fill: true,
        tension: 0.4
      }
    ]
  },
  factorBreakdown: {
    labels: ['Job Satisfaction', 'Work-Life Balance', 'Team Cohesion', 'Growth Opportunities', 'Recognition'],
    datasets: [
      {
        label: 'Current Quarter',
        data: [82, 76, 88, 79, 85],
        backgroundColor: 'rgba(37, 205, 37, 0.7)'
      }
    ]
  },
  sentimentDistribution: {
    labels: ['Very Positive', 'Positive', 'Neutral', 'Negative', 'Very Negative'],
    datasets: [
      {
        data: [35, 45, 15, 4, 1],
        backgroundColor: ['#25CD25', '#8FD14F', '#FFA500', '#FF6347', '#EB5050'],
        hoverOffset: 4
      }
    ]
  }
};

// Goals data (can be detailed by goal)
const goalsData = {
  goalsOverview: [
    { name: 'Improve Team Velocity', progress: 75, status: 'On Track', dueDate: 'Sep 30, 2024' },
    { name: 'Reduce Bug Rate', progress: 92, status: 'Completed', dueDate: 'Jul 15, 2024' },
    { name: 'Implement CI/CD Pipeline', progress: 60, status: 'At Risk', dueDate: 'Oct 15, 2024' },
    { name: 'Knowledge Sharing Sessions', progress: 80, status: 'On Track', dueDate: 'Dec 31, 2024' },
    { name: 'Improve Code Coverage', progress: 85, status: 'On Track', dueDate: 'Nov 20, 2024' }
  ],
  progressDistribution: {
    labels: ['Not Started', '1-25%', '26-50%', '51-75%', '76-99%', 'Completed'],
    datasets: [
      {
        label: 'Goals',
        data: [1, 2, 3, 4, 5, 7],
        backgroundColor: 'rgba(235, 80, 80, 0.7)'
      }
    ]
  },
  statusBreakdown: {
    labels: ['Completed', 'On Track', 'At Risk', 'Delayed'],
    datasets: [
      {
        data: [7, 12, 3, 1],
        backgroundColor: ['#25CD25', '#4E97FF', '#FFA500', '#EB5050'],
        hoverOffset: 4
      }
    ]
  }
};

// Training data (specific for training report)
const trainingData = {
  completionRates: {
    labels: ['JavaScript', 'React', 'Python', 'DevOps', 'Machine Learning'],
    datasets: [
      {
        label: 'Completion Rate',
        data: [85, 75, 60, 45, 65],
        backgroundColor: '#6E38D1'
      }
    ]
  },
  trainingHours: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
    datasets: [
      {
        label: 'Training Hours',
        data: [24, 32, 28, 35, 42, 38, 45, 40],
        borderColor: '#6E38D1',
        backgroundColor: 'rgba(110, 56, 209, 0.1)',
        fill: true,
        tension: 0.4
      }
    ]
  },
  courseCompletion: {
    labels: ['Not Started', 'In Progress', 'Completed'],
    datasets: [
      {
        data: [20, 35, 45],
        backgroundColor: ['#EB5050', '#FFA500', '#25CD25'],
        hoverOffset: 4
      }
    ]
  },
  teamMembers: [
    { name: 'Chris Friedkly', role: 'Senior Developer', avatar: '/images/chris_avatar.png', courses: ['Advanced React', 'Cloud Architecture'], completionRate: 92 },
    { name: 'Maggie Johnson', role: 'UX Designer', avatar: '/images/maggie_avatar.png', courses: ['UX Research Methods', 'Design Systems'], completionRate: 88 },
    { name: 'Gael Harry', role: 'Software Engineer', avatar: '/images/gael_avatar.png', courses: ['Python Advanced', 'Microservices'], completionRate: 75 },
    { name: 'Jenna Sullivan', role: 'QA Engineer', avatar: '/images/jenna_avatar.png', courses: ['Test Automation', 'CI/CD Pipelines'], completionRate: 80 },
    { name: 'Marco Rossi', role: 'Data Scientist', avatar: '/images/new_avatars/ryan_avatar.png', courses: ['Deep Learning', 'NLP Fundamentals'], completionRate: 95 },
    { name: 'Emily Chen', role: 'Product Manager', avatar: '/images/new_avatars/sophia_avatar.png', courses: ['Product Management', 'Agile Methodologies'], completionRate: 85 },
    { name: 'Alex Martinez', role: 'Frontend Developer', avatar: '/images/new_avatars/alex_avatar.png', courses: ['React Advanced', 'Performance Optimization'], completionRate: 78 },
    { name: 'Sophia Kim', role: 'Backend Developer', avatar: '/images/new_avatars/laura_avatar.png', courses: ['Spring Boot', 'Microservices Architecture'], completionRate: 91 },
    { name: 'Daniel Wilson', role: 'DevOps Engineer', avatar: '/images/new_avatars/daniel_avatar.png', courses: ['Kubernetes Mastery', 'Cloud Security'], completionRate: 89 },
    { name: 'Anna Petrov', role: 'UI Designer', avatar: '/images/new_avatars/anna_avatar.png', courses: ['Design Systems', 'UI Animation'], completionRate: 82 }
  ]
};

const ReportDetailPage = () => {
  const params = useParams();
  const router = useRouter();
  const reportId = params.id as string;
  
  // Get report definition based on ID
  const reportDef = reportDefinitions[reportId as keyof typeof reportDefinitions];
  
  if (!reportDef) {
    return (
      <div className="flex min-h-screen bg-gradient-to-br from-[#F6F6F3] via-[#FAFAFA] to-[#F0F0F0]">
        <Sidebar />
        <div className="flex-1 lg:ml-[320px] p-4 sm:p-6 lg:p-8 overflow-y-auto">
          <div className="lg:hidden h-16 mb-4"></div>
          <div className="max-w-4xl mx-auto">
            <Card elevation="lg" padding="lg" className="text-center">
              <h1 className="text-2xl font-bold text-[#131313] mb-4">Report not found</h1>
              <p className="text-[#6B6B6B] mb-6">The requested report does not exist.</p>
              <Button
                variant="primary"
                icon={<FiArrowLeft />}
                onClick={() => router.push('/reports')}
              >
                Back to Reports
              </Button>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  // Render different content based on report type
  const renderReportContent = () => {
    switch (reportDef.type) {
      case 'comprehensive':
        return (
          <div className="space-y-6 lg:space-y-8">
            {/* Overall Performance Metrics */}
            <Card elevation="lg" padding="lg">
              <h3 className="text-lg lg:text-xl font-bold mb-6">Comprehensive Team Performance Overview</h3>
              <div className="h-64 lg:h-80">
                <Line 
                  data={comprehensiveData.overallMetrics} 
                  options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                      y: {
                        min: 70,
                        max: 100,
                        ticks: { callback: (value) => `${value}%` }
                      }
                    },
                    plugins: {
                      legend: {
                        position: 'top' as const,
                      }
                    }
                  }} 
                />
              </div>
              <p className="text-sm text-[#454545] mt-6">
                This comprehensive overview tracks three key performance dimensions: Productivity (95%), Code Quality (90%), and Collaboration (98%). 
                All metrics show consistent upward trends, with Collaboration achieving the highest scores.
              </p>
            </Card>

            {/* Category Comparison */}
            <Card elevation="lg" padding="lg">
              <h3 className="text-lg lg:text-xl font-bold mb-6">Performance vs Targets</h3>
              <div className="h-64 lg:h-80">
                <Bar 
                  data={comprehensiveData.categoryComparison} 
                  options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                      y: {
                        min: 0,
                        max: 100,
                        ticks: { callback: (value) => `${value}%` }
                      }
                    }
                  }} 
                />
              </div>
              <p className="text-sm text-[#454545] mt-6">
                Current team performance exceeds targets in all categories. Collaboration (98%) and Productivity (95%) show exceptional performance, 
                while Innovation (82%) presents opportunities for growth.
              </p>
            </Card>

            {/* Detailed Breakdowns */}
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 lg:gap-8">
              <Card elevation="lg" padding="lg">
                <h3 className="text-lg font-bold mb-6 text-[#9055FF]">Productivity Analysis</h3>
                <div className="h-48">
                  <Doughnut 
                    data={comprehensiveData.detailedBreakdown.productivity}
                    options={{
                      responsive: true,
                      maintainAspectRatio: false,
                      plugins: {
                        legend: {
                          position: 'bottom' as const,
                          labels: { 
                            font: { size: 10 }
                          }
                        }
                      }
                    }}
                  />
                </div>
                <p className="text-xs text-[#454545] mt-4">
                  Bug Fixes (94%) and Code Commits (92%) lead productivity metrics.
                </p>
              </Card>

              <Card elevation="lg" padding="lg">
                <h3 className="text-lg font-bold mb-6 text-[#4E97FF]">Code Quality Metrics</h3>
                <div className="h-48">
                  <Doughnut 
                    data={comprehensiveData.detailedBreakdown.codeQuality}
                    options={{
                      responsive: true,
                      maintainAspectRatio: false,
                      plugins: {
                        legend: {
                          position: 'bottom' as const,
                          labels: { 
                            font: { size: 10 }
                          }
                        }
                      }
                    }}
                  />
                </div>
                <p className="text-xs text-[#454545] mt-4">
                  Standards Compliance (95%) and Documentation (92%) show strong quality focus.
                </p>
              </Card>

              <Card elevation="lg" padding="lg">
                <h3 className="text-lg font-bold mb-6 text-[#25CD25]">Collaboration Excellence</h3>
                <div className="h-48">
                  <Doughnut 
                    data={comprehensiveData.detailedBreakdown.collaboration}
                    options={{
                      responsive: true,
                      maintainAspectRatio: false,
                      plugins: {
                        legend: {
                          position: 'bottom' as const,
                          labels: { 
                            font: { size: 10 }
                          }
                        }
                      }
                    }}
                  />
                </div>
                <p className="text-xs text-[#454545] mt-4">
                  Peer Support (100%) and Team Meetings (96%) demonstrate excellent collaboration.
                </p>
              </Card>
            </div>

            {/* Key Insights */}
            <Card elevation="lg" padding="lg">
              <h3 className="text-lg lg:text-xl font-bold mb-6">Comprehensive Analysis & Recommendations</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-[#25CD25] mb-3">Strengths</h4>
                  <ul className="list-disc pl-5 space-y-2 text-sm">
                    <li>Exceptional collaboration with 100% peer support score</li>
                    <li>High code quality standards with 95% compliance</li>
                    <li>Strong productivity with 94% bug fix efficiency</li>
                    <li>Excellent documentation practices (92%)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-[#FFA500] mb-3">Growth Opportunities</h4>
                  <ul className="list-disc pl-5 space-y-2 text-sm">
                    <li>Innovation metrics (82%) below other categories</li>
                    <li>Test coverage (85%) could be improved</li>
                    <li>Mentoring activities (88%) have room for growth</li>
                    <li>Feature delivery timing (85%) optimization needed</li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        );

      case 'performance':
        return (
          <div className="space-y-6 lg:space-y-8">
            <Card elevation="lg" padding="lg">
              <h3 className="text-lg lg:text-xl font-bold mb-6">Performance Trend (Team Average)</h3>
              <div className="h-64 lg:h-80">
                <Line 
                  data={performanceData.aggregatedOverTime} 
                  options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                      y: {
                        min: 0,
                        max: 100,
                        ticks: { callback: (value) => `${value}%` }
                      }
                    }
                  }} 
                />
              </div>
              <p className="text-sm text-[#454545] mt-6">
                This chart displays the team&apos;s average performance score over the past 8 months. The upward trend indicates continuous improvement in overall team effectiveness.
              </p>
              <p className="text-xs text-[#6B6B6B] mt-2">
                Note: This chart shows aggregated team performance over time. Individual performance data is not displayed to maintain anonymity.
              </p>
            </Card>

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 lg:gap-8">
              <Card elevation="lg" padding="lg">
                <h3 className="text-lg lg:text-xl font-bold mb-6">Performance by Category</h3>
                <div className="h-64 lg:h-72">
                  <Bar 
                    data={performanceData.categoryBreakdown} 
                    options={{
                      responsive: true,
                      maintainAspectRatio: false,
                      scales: {
                        y: {
                          min: 0,
                          max: 100,
                          ticks: { callback: (value) => `${value}%` }
                        }
                      }
                    }} 
                  />
                </div>
                <p className="text-sm text-[#454545] mt-6">
                  This breakdown compares current quarter performance against the previous quarter across five key categories. The team shows improvement in all areas, with the strongest growth in Collaboration and Communication.
                </p>
              </Card>

              <Card elevation="lg" padding="lg">
                <h3 className="text-lg lg:text-xl font-bold mb-6">Performance Distribution</h3>
                <div className="h-64 lg:h-72">
                  <Bar 
                    data={performanceData.distributionStats}
                    options={{
                      responsive: true,
                      maintainAspectRatio: false,
                      scales: {
                        y: {
                          title: {
                            display: true,
                            text: 'Number of Team Members'
                          }
                        }
                      }
                    }}
                  />
                </div>
                <p className="text-sm text-[#454545] mt-6">
                  This chart shows how team members are distributed across performance score ranges. Most team members (13 out of 20) are performing above the 80% threshold.
                </p>
              </Card>
            </div>

            <Card elevation="lg" padding="lg">
              <h3 className="text-lg lg:text-xl font-bold mb-6">Key Insights</h3>
              <ul className="list-disc pl-5 space-y-3 text-sm lg:text-base">
                <li>Team performance has shown consistent improvement over the last 8 months</li>
                <li>Strongest areas are Collaboration (92%) and Communication (88%)</li>
                <li>Areas for improvement include Code Quality (79%)</li>
                <li>80% of team members perform above the 80% threshold</li>
              </ul>
            </Card>
          </div>
        );

      case 'skills':
        return (
          <div className="space-y-6 lg:space-y-8">
            <Card elevation="lg" padding="lg">
              <h3 className="text-lg lg:text-xl font-bold mb-6">Team Skills Coverage</h3>
              <div className="h-64 lg:h-80">
                <Bar 
                  data={skillsData.skillDistribution} 
                  options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                      y: {
                        min: 0,
                        max: 100,
                        ticks: { callback: (value) => `${value}%` }
                      }
                    }
                  }} 
                />
              </div>
              <p className="text-sm text-[#454545] mt-6">
                This chart compares current skill coverage against target coverage levels across key technical areas. JavaScript, React, and UI/UX skills exceed targets, while Python, Machine Learning, and DevOps show gaps that may need to be addressed through training or recruitment.
              </p>
            </Card>

            <Card elevation="lg" padding="lg">
              <h3 className="text-lg lg:text-xl font-bold mb-6">Team Member Skills</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead>
                    <tr className="border-b border-[#F0F0F0]">
                      <th className="text-left py-3 px-4 text-sm font-medium text-[#6B6B6B]">Team Member</th>
                      <th className="text-left py-3 px-4 text-sm font-medium text-[#6B6B6B]">Role</th>
                      <th className="text-left py-3 px-4 text-sm font-medium text-[#6B6B6B]">Skills</th>
                      <th className="text-left py-3 px-4 text-sm font-medium text-[#6B6B6B]">Proficiency</th>
                    </tr>
                  </thead>
                  <tbody>
                    {skillsData.teamMembers.map((member, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-[#F6F6F3]' : ''}>
                        <td className="py-3 px-4">
                          <div className="flex items-center">
                            <div className="relative w-8 h-8 rounded-full mr-3 flex-shrink-0 overflow-hidden">
                              <Image 
                                src={member.avatar} 
                                alt={member.name}
                                fill
                                sizes="32px"
                                className="object-cover"
                              />
                            </div>
                            <span className="text-sm">{member.name}</span>
                          </div>
                        </td>
                        <td className="py-3 px-4 text-sm">{member.role}</td>
                        <td className="py-3 px-4">
                          <div className="flex flex-wrap gap-1">
                            {member.skills.map((skill, i) => (
                              <span 
                                key={i} 
                                className="inline-block bg-[#F4EBFF] text-[#9055FF] text-xs px-2 py-1 rounded-full"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </td>
                        <td className="py-3 px-4">
                          <div className="flex items-center">
                            <div className="w-full max-w-[120px] bg-[#F0F0F0] rounded-full h-2.5 mr-2">
                              <div 
                                className="bg-[#4E97FF] h-2.5 rounded-full" 
                                style={{ width: `${member.level}%` }}
                              ></div>
                            </div>
                            <span className="text-sm text-[#454545] min-w-[3rem]">{member.level}%</span>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </div>
        );

      case 'training':
        return (
          <div className="space-y-6 lg:space-y-8">
            <Card elevation="lg" padding="lg">
              <h3 className="text-lg lg:text-xl font-bold mb-6">Training Hours Over Time</h3>
              <div className="h-64 lg:h-80">
                <Line 
                  data={trainingData.trainingHours} 
                  options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                      y: {
                        title: {
                          display: true,
                          text: 'Average Hours per Team Member'
                        }
                      }
                    }
                  }} 
                />
              </div>
              <p className="text-sm text-[#454545] mt-6">
                This chart shows the average training hours completed per team member each month. The upward trend indicates increasing investment in skill development, with a peak of 45 hours in July.
              </p>
            </Card>

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 lg:gap-8">
              <Card elevation="lg" padding="lg">
                <h3 className="text-lg lg:text-xl font-bold mb-6">Course Completion Status</h3>
                <div className="h-64 lg:h-72">
                  <Doughnut 
                    data={trainingData.courseCompletion}
                    options={{
                      responsive: true,
                      maintainAspectRatio: false,
                      plugins: {
                        legend: {
                          position: 'right' as const,
                        }
                      }
                    }}
                  />
                </div>
                <p className="text-sm text-[#454545] mt-6">
                  This chart shows the distribution of course completion status across all team members. 45% of assigned courses have been completed, 35% are in progress, and 20% have not yet been started.
                </p>
              </Card>

              <Card elevation="lg" padding="lg">
                <h3 className="text-lg lg:text-xl font-bold mb-6">Training Completion by Subject</h3>
                <div className="h-64 lg:h-72">
                  <Bar 
                    data={trainingData.completionRates}
                    options={{
                      responsive: true,
                      maintainAspectRatio: false,
                      scales: {
                        y: {
                          min: 0,
                          max: 100,
                          ticks: { callback: (value) => `${value}%` }
                        }
                      },
                      indexAxis: 'y' as const,
                    }}
                  />
                </div>
                <p className="text-sm text-[#454545] mt-6">
                  This chart shows completion rates for different training subjects. JavaScript training has the highest completion rate (85%), while DevOps training has the lowest (45%).
                </p>
              </Card>
            </div>

            <Card elevation="lg" padding="lg">
              <h3 className="text-lg lg:text-xl font-bold mb-6">Team Member Training Status</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead>
                    <tr className="border-b border-[#F0F0F0]">
                      <th className="text-left py-3 px-4 text-sm font-medium text-[#6B6B6B]">Team Member</th>
                      <th className="text-left py-3 px-4 text-sm font-medium text-[#6B6B6B]">Role</th>
                      <th className="text-left py-3 px-4 text-sm font-medium text-[#6B6B6B]">Current Courses</th>
                      <th className="text-left py-3 px-4 text-sm font-medium text-[#6B6B6B]">Completion Rate</th>
                    </tr>
                  </thead>
                  <tbody>
                    {trainingData.teamMembers.map((member, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-[#F6F6F3]' : ''}>
                        <td className="py-3 px-4">
                          <div className="flex items-center">
                            <div className="relative w-8 h-8 rounded-full mr-3 overflow-hidden">
                              <Image 
                                src={member.avatar} 
                                alt={member.name}
                                fill
                                sizes="32px"
                                className="object-cover"
                              />
                            </div>
                            <span>{member.name}</span>
                          </div>
                        </td>
                        <td className="py-3 px-4">{member.role}</td>
                        <td className="py-3 px-4">
                          <div className="flex flex-wrap gap-1">
                            {member.courses.map((course, i) => (
                              <span 
                                key={i} 
                                className="inline-block bg-[#F4EBFF] text-[#9055FF] text-xs px-2 py-1 rounded-full"
                              >
                                {course}
                              </span>
                            ))}
                          </div>
                        </td>
                        <td className="py-3 px-4">
                          <div className="flex items-center">
                            <div className="w-full max-w-[150px] bg-[#F0F0F0] rounded-full h-2.5 mr-2">
                              <div 
                                className="bg-[#6E38D1] h-2.5 rounded-full" 
                                style={{ width: `${member.completionRate}%` }}
                              ></div>
                            </div>
                            <span className="text-sm text-[#454545]">{member.completionRate}%</span>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>

            <Card elevation="lg" padding="lg">
              <h3 className="text-lg lg:text-xl font-bold mb-6">Key Insights</h3>
              <ul className="list-disc pl-5 space-y-3 text-sm lg:text-base">
                <li>Overall training completion rate has improved by 15% compared to the previous quarter</li>
                <li>JavaScript training has the highest completion rate (85%)</li>
                <li>DevOps training has the lowest completion rate (45%) and requires additional focus</li>
                <li>Training hours per team member have increased by 66% since January</li>
                <li>3 team members have completed all assigned courses</li>
              </ul>
            </Card>
          </div>
        );

      case 'engagement':
        return (
          <div className="space-y-6 lg:space-y-8">
            <Card elevation="lg" padding="lg">
              <h3 className="text-lg lg:text-xl font-bold mb-6">Team Engagement Trend</h3>
              <div className="h-64 lg:h-80">
                <Line 
                  data={engagementData.overTime} 
                  options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                      y: {
                        min: 0,
                        max: 100,
                        ticks: { callback: (value) => `${value}%` }
                      }
                    }
                  }} 
                />
              </div>
              <p className="text-sm text-[#454545] mt-6">
                This chart tracks team engagement levels over the past 8 months. The overall trend shows improvement, with engagement increasing from 72% in January to 88% in August, representing a 16% increase.
              </p>
              <p className="text-xs text-[#6B6B6B] mt-2">
                Note: This chart shows aggregated team engagement over time. Individual engagement data is not displayed to maintain anonymity.
              </p>
            </Card>

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 lg:gap-8">
              <Card elevation="lg" padding="lg">
                <h3 className="text-lg lg:text-xl font-bold mb-6">Engagement Factors</h3>
                <div className="h-64 lg:h-72">
                  <Bar 
                    data={engagementData.factorBreakdown} 
                    options={{
                      responsive: true,
                      maintainAspectRatio: false,
                      scales: {
                        y: {
                          min: 0,
                          max: 100,
                          ticks: { callback: (value) => `${value}%` }
                        }
                      }
                    }} 
                  />
                </div>
                <p className="text-sm text-[#454545] mt-6">
                  This chart breaks down engagement by key factors. Team Cohesion scores highest (88%), while Work-Life Balance shows the lowest score (76%) and may need targeted interventions.
                </p>
              </Card>

              <Card elevation="lg" padding="lg">
                <h3 className="text-lg lg:text-xl font-bold mb-6">Sentiment Distribution</h3>
                <div className="h-64 lg:h-72">
                  <Doughnut 
                    data={engagementData.sentimentDistribution}
                    options={{
                      responsive: true,
                      maintainAspectRatio: false,
                      plugins: {
                        legend: {
                          position: 'right' as const,
                        }
                      }
                    }}
                  />
                </div>
                <p className="text-sm text-[#454545] mt-6">
                  This chart shows the distribution of sentiment responses from team surveys. 80% of responses are positive or very positive, while only 5% are negative or very negative, indicating overall healthy team morale.
                </p>
              </Card>
            </div>

            <Card elevation="lg" padding="lg">
              <h3 className="text-lg lg:text-xl font-bold mb-6">Key Insights</h3>
              <ul className="list-disc pl-5 space-y-3 text-sm lg:text-base">
                <li>Team engagement has improved by 16% over the last 8 months</li>
                <li>Strongest engagement factor is Team Cohesion (88%)</li>
                <li>Work-Life Balance shows the lowest score (76%) and may need attention</li>
                <li>80% of sentiment responses are positive or very positive</li>
              </ul>
            </Card>
          </div>
        );

      case 'goals':
        return (
          <div className="space-y-6 lg:space-y-8">
            <Card elevation="lg" padding="lg">
              <h3 className="text-lg lg:text-xl font-bold mb-6">Goals Overview</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead>
                    <tr className="border-b border-[#F0F0F0]">
                      <th className="text-left py-3 px-4 text-sm font-medium text-[#6B6B6B]">Goal</th>
                      <th className="text-left py-3 px-4 text-sm font-medium text-[#6B6B6B]">Progress</th>
                      <th className="text-left py-3 px-4 text-sm font-medium text-[#6B6B6B]">Status</th>
                      <th className="text-left py-3 px-4 text-sm font-medium text-[#6B6B6B]">Due Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {goalsData.goalsOverview.map((goal, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-[#F6F6F3]' : ''}>
                        <td className="py-3 px-4">{goal.name}</td>
                        <td className="py-3 px-4">
                          <div className="flex items-center">
                            <div className="w-full max-w-[150px] bg-[#F0F0F0] rounded-full h-2.5 mr-2">
                              <div 
                                className={`h-2.5 rounded-full ${
                                  goal.status === 'At Risk' 
                                    ? 'bg-[#FFA500]' 
                                    : goal.status === 'Completed' 
                                      ? 'bg-[#25CD25]' 
                                      : 'bg-[#4E97FF]'
                                }`}
                                style={{ width: `${goal.progress}%` }}
                              ></div>
                            </div>
                            <span className="text-sm text-[#454545]">{goal.progress}%</span>
                          </div>
                        </td>
                        <td className="py-3 px-4">
                          <span className={`
                            inline-block px-2 py-1 rounded-full text-xs font-medium
                            ${goal.status === 'At Risk' 
                              ? 'bg-[#FFF4E5] text-[#FFA500]' 
                              : goal.status === 'Completed' 
                                ? 'bg-[#E8F8E8] text-[#25CD25]' 
                                : goal.status === 'Delayed'
                                  ? 'bg-[#FDECEC] text-[#EB5050]'
                                  : 'bg-[#EBF5FF] text-[#4E97FF]'
                            }
                          `}>
                            {goal.status}
                          </span>
                        </td>
                        <td className="py-3 px-4">{goal.dueDate}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-[#454545] mt-6">
                This table provides a detailed view of current team goals, their progress, status, and due dates. Most goals are on track or completed, with the &quot;Implement CI/CD Pipeline&quot; goal at risk and requiring attention.
              </p>
            </Card>

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 lg:gap-8">
              <Card elevation="lg" padding="lg">
                <h3 className="text-lg lg:text-xl font-bold mb-6">Goal Progress Distribution</h3>
                <div className="h-64 lg:h-72">
                  <Bar 
                    data={goalsData.progressDistribution} 
                    options={{
                      responsive: true,
                      maintainAspectRatio: false,
                      scales: {
                        y: {
                          title: {
                            display: true,
                            text: 'Number of Goals'
                          }
                        }
                      }
                    }} 
                  />
                </div>
                <p className="text-sm text-[#454545] mt-6">
                  This chart shows how many goals fall into each progress category. Most goals (16 of 22) are over 50% complete, with 7 fully completed goals. Only 3 goals are in early stages (under 25% complete).
                </p>
              </Card>

              <Card elevation="lg" padding="lg">
                <h3 className="text-lg lg:text-xl font-bold mb-6">Goal Status Breakdown</h3>
                <div className="h-64 lg:h-72">
                  <Doughnut 
                    data={goalsData.statusBreakdown}
                    options={{
                      responsive: true,
                      maintainAspectRatio: false,
                      plugins: {
                        legend: {
                          position: 'right' as const,
                        }
                      }
                    }}
                  />
                </div>
                <p className="text-sm text-[#454545] mt-6">
                  This chart shows the distribution of goals by status. 7 goals are completed and 12 are on track, representing 83% of all goals. Only 4 goals (17%) are at risk or delayed and require management attention.
                </p>
              </Card>
            </div>

            <Card elevation="lg" padding="lg">
              <h3 className="text-lg lg:text-xl font-bold mb-6">Key Insights</h3>
              <ul className="list-disc pl-5 space-y-3 text-sm lg:text-base">
                <li>83% of goals are either completed or on track</li>
                <li>&quot;Reduce Bug Rate&quot; goal was completed ahead of schedule</li>
                <li>&quot;Implement CI/CD Pipeline&quot; is at risk and needs immediate attention</li>
                <li>Most goals (73%) are over 50% complete</li>
                <li>Only one goal is currently delayed</li>
              </ul>
            </Card>
          </div>
        );

      default:
        return (
          <Card elevation="lg" padding="lg" className="text-center">
            <p className="text-[#6B6B6B]">No data available for this report type.</p>
          </Card>
        );
    }
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-[#F6F6F3] via-[#FAFAFA] to-[#F0F0F0]">
      <Sidebar />
      
      <div className="flex-1 lg:ml-[320px] p-4 sm:p-6 lg:p-8 overflow-y-auto">
        <div className="lg:hidden h-16 mb-4"></div>
        
        <div className="max-w-8xl mx-auto space-y-6 lg:space-y-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6">
            <Button
              variant="ghost"
              size="md"
              icon={<FiArrowLeft size={20} />}
              onClick={() => router.push('/reports')}
              className="flex-shrink-0"
            >
              <span className="hidden sm:inline">Back to Reports</span>
              <span className="sm:hidden">Back</span>
            </Button>
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#131313] flex-1">
              {reportDef.title}
            </h1>
          </div>
          
          <Card elevation="lg" className="overflow-hidden">
            <div className="p-6 lg:p-8 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              <div className="flex items-start lg:items-center gap-4 flex-1">
                <div 
                  className="w-16 h-16 lg:w-20 lg:h-20 rounded-2xl flex items-center justify-center text-white shadow-lg flex-shrink-0"
                  style={{ backgroundColor: reportDef.color }}
                >
                  {React.cloneElement(reportDef.icon as React.ReactElement, { size: 28 })}
                </div>
                <div className="flex-1 min-w-0">
                  <h2 className="text-xl lg:text-2xl font-bold text-[#131313] mb-2">
                    {reportDef.title}
                  </h2>
                  <p className="text-sm lg:text-base text-[#6B6B6B] leading-relaxed">
                    {reportDef.description}
                  </p>
                </div>
              </div>
              <Button
                variant="primary"
                size="lg"
                icon={<FiDownload size={16} />}
                className="w-full lg:w-auto flex-shrink-0"
              >
                <span className="hidden sm:inline">Export Report</span>
                <span className="sm:hidden">Export</span>
              </Button>
            </div>
          </Card>
          
          {renderReportContent()}
          
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

export default ReportDetailPage; 