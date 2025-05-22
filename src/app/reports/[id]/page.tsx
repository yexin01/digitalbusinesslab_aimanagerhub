"use client";

import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import Sidebar from '@/components/Sidebar';
import Card from '@/components/ui/Card';
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
    description: 'Aggregated team performance metrics',
    icon: <FiBarChart2 size={20} />,
    color: '#9055FF',
    type: 'performance'
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
    { name: 'Marco Rossi', role: 'Data Scientist', avatar: '/images/new_avatars/ryan_avatar.png', skills: ['Machine Learning', 'Python', 'TensorFlow'], level: 95 }
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
    { name: 'Marco Rossi', role: 'Data Scientist', avatar: '/images/new_avatars/ryan_avatar.png', courses: ['Deep Learning', 'NLP Fundamentals'], completionRate: 95 }
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
      <div className="flex h-screen bg-[#F6F6F3]">
        <Sidebar />
        <div className="flex-1 p-6 ml-6 overflow-y-auto">
          <div className="max-w-7xl mx-auto">
            <Card elevation="md" className="p-6">
              <h1 className="text-2xl font-bold text-[#131313]">Report not found</h1>
              <p className="mt-2 text-[#6B6B6B]">The requested report does not exist.</p>
              <button
                className="mt-4 flex items-center text-[#9055FF]"
                onClick={() => router.push('/reports')}
              >
                <FiArrowLeft className="mr-2" /> Back to Reports
              </button>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  // Render different content based on report type
  const renderReportContent = () => {
    switch (reportDef.type) {
      case 'performance':
        return (
          <>
            <div className="bg-white rounded-xl p-6 mb-6 shadow-sm">
              <h3 className="text-lg font-semibold mb-4">Performance Trend (Team Average)</h3>
              <div className="h-80">
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
              <p className="text-sm text-[#454545] mt-4">
                This chart displays the team's average performance score over the past 8 months. The upward trend indicates continuous improvement in overall team effectiveness.
              </p>
              <p className="text-xs text-[#6B6B6B] mt-2">
                Note: This chart shows aggregated team performance over time. Individual performance data is not displayed to maintain anonymity.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-lg font-semibold mb-4">Performance by Category</h3>
                <div className="h-72">
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
                <p className="text-sm text-[#454545] mt-4">
                  This breakdown compares current quarter performance against the previous quarter across five key categories. The team shows improvement in all areas, with the strongest growth in Collaboration and Communication.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-lg font-semibold mb-4">Performance Distribution</h3>
                <div className="h-72">
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
                <p className="text-sm text-[#454545] mt-4">
                  This chart shows how team members are distributed across performance score ranges. Most team members (13 out of 20) are performing above the 80% threshold.
                </p>
                <p className="text-xs text-[#6B6B6B] mt-2">
                  Distribution shows how many team members fall into each performance range.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm mb-6">
              <h3 className="text-lg font-semibold mb-4">Key Insights</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Team performance has shown consistent improvement over the last 8 months</li>
                <li>Strongest areas are Collaboration (92%) and Communication (88%)</li>
                <li>Areas for improvement include Code Quality (79%)</li>
                <li>80% of team members perform above the 80% threshold</li>
              </ul>
            </div>
          </>
        );

      case 'skills':
        return (
          <>
            <div className="bg-white rounded-xl p-6 mb-6 shadow-sm">
              <h3 className="text-lg font-semibold mb-4">Team Skills Coverage</h3>
              <div className="h-80">
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
              <p className="text-sm text-[#454545] mt-4">
                This chart compares current skill coverage against target coverage levels across key technical areas. JavaScript, React, and UI/UX skills exceed targets, while Python, Machine Learning, and DevOps show gaps that may need to be addressed through training or recruitment.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 mb-6 shadow-sm">
              <h3 className="text-lg font-semibold mb-4">Team Member Skills</h3>
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
                            <div className="w-8 h-8 rounded-full bg-[#E0E0E0] mr-3"></div>
                            <span>{member.name}</span>
                          </div>
                        </td>
                        <td className="py-3 px-4">{member.role}</td>
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
                            <div className="w-full max-w-[150px] bg-[#F0F0F0] rounded-full h-2.5 mr-2">
                              <div 
                                className="bg-[#4E97FF] h-2.5 rounded-full" 
                                style={{ width: `${member.level}%` }}
                              ></div>
                            </div>
                            <span className="text-sm text-[#454545]">{member.level}%</span>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-[#454545] mt-4">
                This table shows individual skill proficiency levels for key team members. This information can be used for project staffing and skill development planning. Marco Rossi (Data Scientist) and Chris Friedkly (Senior Developer) demonstrate the highest overall skill proficiency.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm mb-6">
              <h3 className="text-lg font-semibold mb-4">Training Progress</h3>
              <div className="h-72">
                <Bar 
                  data={skillsData.trainingProgress}
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
              <p className="text-sm text-[#454545] mt-4">
                This chart shows the completion percentage of training programs across different skill areas. JavaScript training has the highest completion rate (85%), while DevOps training has the lowest (45%) and requires additional focus.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm mb-6">
              <h3 className="text-lg font-semibold mb-4">Skill Gap Analysis</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead>
                    <tr className="border-b border-[#F0F0F0]">
                      <th className="text-left py-3 px-4 text-sm font-medium text-[#6B6B6B]">Skill Area</th>
                      <th className="text-left py-3 px-4 text-sm font-medium text-[#6B6B6B]">Current Level</th>
                      <th className="text-left py-3 px-4 text-sm font-medium text-[#6B6B6B]">Target Level</th>
                      <th className="text-left py-3 px-4 text-sm font-medium text-[#6B6B6B]">Gap</th>
                      <th className="text-left py-3 px-4 text-sm font-medium text-[#6B6B6B]">Recommended Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-[#F6F6F3]">
                      <td className="py-3 px-4">DevOps</td>
                      <td className="py-3 px-4">58%</td>
                      <td className="py-3 px-4">75%</td>
                      <td className="py-3 px-4">17%</td>
                      <td className="py-3 px-4">Training program for 5 team members</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">Machine Learning</td>
                      <td className="py-3 px-4">72%</td>
                      <td className="py-3 px-4">80%</td>
                      <td className="py-3 px-4">8%</td>
                      <td className="py-3 px-4">Advanced training for 2 members</td>
                    </tr>
                    <tr className="bg-[#F6F6F3]">
                      <td className="py-3 px-4">Python</td>
                      <td className="py-3 px-4">65%</td>
                      <td className="py-3 px-4">80%</td>
                      <td className="py-3 px-4">15%</td>
                      <td className="py-3 px-4">Training program for 3 team members</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-[#454545] mt-4">
                This analysis identifies skill gaps and recommends targeted training interventions. The largest gaps are in DevOps (17%) and Python (15%), which should be prioritized for team development.
              </p>
            </div>
          </>
        );

      case 'training':
        return (
          <>
            <div className="bg-white rounded-xl p-6 mb-6 shadow-sm">
              <h3 className="text-lg font-semibold mb-4">Training Hours Over Time</h3>
              <div className="h-80">
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
              <p className="text-sm text-[#454545] mt-4">
                This chart shows the average training hours completed per team member each month. The upward trend indicates increasing investment in skill development, with a peak of 45 hours in July.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-lg font-semibold mb-4">Course Completion Status</h3>
                <div className="h-72">
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
                <p className="text-sm text-[#454545] mt-4">
                  This chart shows the distribution of course completion status across all team members. 45% of assigned courses have been completed, 35% are in progress, and 20% have not yet been started.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-lg font-semibold mb-4">Training Completion by Subject</h3>
                <div className="h-72">
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
                <p className="text-sm text-[#454545] mt-4">
                  This chart shows completion rates for different training subjects. JavaScript training has the highest completion rate (85%), while DevOps training has the lowest (45%).
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold mb-4">Team Member Training Status</h3>
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
                            <div className="w-8 h-8 rounded-full bg-[#E0E0E0] mr-3"></div>
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
              <p className="text-sm text-[#454545] mt-4">
                This table shows the current training status for each team member. Marco Rossi has the highest completion rate (95%), followed by Chris Friedkly (92%). Gael Harry has the lowest completion rate (75%) and may need additional support.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm mb-6">
              <h3 className="text-lg font-semibold mb-4">Key Insights</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Overall training completion rate has improved by 15% compared to the previous quarter</li>
                <li>JavaScript training has the highest completion rate (85%)</li>
                <li>DevOps training has the lowest completion rate (45%) and requires additional focus</li>
                <li>Training hours per team member have increased by 66% since January</li>
                <li>3 team members have completed all assigned courses</li>
              </ul>
            </div>
          </>
        );

      case 'engagement':
        return (
          <>
            <div className="bg-white rounded-xl p-6 mb-6 shadow-sm">
              <h3 className="text-lg font-semibold mb-4">Team Engagement Trend</h3>
              <div className="h-80">
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
              <p className="text-sm text-[#454545] mt-4">
                This chart tracks team engagement levels over the past 8 months. The overall trend shows improvement, with engagement increasing from 72% in January to 88% in August, representing a 16% increase.
              </p>
              <p className="text-xs text-[#6B6B6B] mt-2">
                Note: This chart shows aggregated team engagement over time. Individual engagement data is not displayed to maintain anonymity.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-lg font-semibold mb-4">Engagement Factors</h3>
                <div className="h-72">
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
                <p className="text-sm text-[#454545] mt-4">
                  This chart breaks down engagement by key factors. Team Cohesion scores highest (88%), while Work-Life Balance shows the lowest score (76%) and may need targeted interventions.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-lg font-semibold mb-4">Sentiment Distribution</h3>
                <div className="h-72">
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
                <p className="text-sm text-[#454545] mt-4">
                  This chart shows the distribution of sentiment responses from team surveys. 80% of responses are positive or very positive, while only 5% are negative or very negative, indicating overall healthy team morale.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm mb-6">
              <h3 className="text-lg font-semibold mb-4">Key Insights</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Team engagement has improved by 16% over the last 8 months</li>
                <li>Strongest engagement factor is Team Cohesion (88%)</li>
                <li>Work-Life Balance shows the lowest score (76%) and may need attention</li>
                <li>80% of sentiment responses are positive or very positive</li>
              </ul>
            </div>
          </>
        );

      case 'goals':
        return (
          <>
            <div className="bg-white rounded-xl p-6 mb-6 shadow-sm">
              <h3 className="text-lg font-semibold mb-4">Goals Overview</h3>
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
              <p className="text-sm text-[#454545] mt-4">
                This table provides a detailed view of current team goals, their progress, status, and due dates. Most goals are on track or completed, with the "Implement CI/CD Pipeline" goal at risk and requiring attention.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-lg font-semibold mb-4">Goal Progress Distribution</h3>
                <div className="h-72">
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
                <p className="text-sm text-[#454545] mt-4">
                  This chart shows how many goals fall into each progress category. Most goals (16 of 22) are over 50% complete, with 7 fully completed goals. Only 3 goals are in early stages (under 25% complete).
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-lg font-semibold mb-4">Goal Status Breakdown</h3>
                <div className="h-72">
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
                <p className="text-sm text-[#454545] mt-4">
                  This chart shows the distribution of goals by status. 7 goals are completed and 12 are on track, representing 83% of all goals. Only 4 goals (17%) are at risk or delayed and require management attention.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm mb-6">
              <h3 className="text-lg font-semibold mb-4">Key Insights</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>83% of goals are either completed or on track</li>
                <li>"Reduce Bug Rate" goal was completed ahead of schedule</li>
                <li>"Implement CI/CD Pipeline" is at risk and needs immediate attention</li>
                <li>Most goals (73%) are over 50% complete</li>
                <li>Only one goal is currently delayed</li>
              </ul>
            </div>
          </>
        );

      default:
        return (
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <p>No data available for this report type.</p>
          </div>
        );
    }
  };

  return (
    <div className="flex h-screen bg-[#F6F6F3]">
      <Sidebar />
      
      <div className="flex-1 p-6 ml-6 overflow-y-auto">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex items-center mb-4">
            <button
              className="p-2 rounded-lg hover:bg-white mr-2 transition-colors"
              onClick={() => router.push('/reports')}
            >
              <FiArrowLeft size={20} className="text-[#6B6B6B]" />
            </button>
            <h1 className="text-2xl font-bold text-[#131313]">{reportDef.title}</h1>
          </div>
          
          {/* Report Info Card */}
          <Card elevation="md" className="mb-6">
            <div className="p-6 flex items-center justify-between">
              <div className="flex items-center">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-white bg-[${reportDef.color}]`}>
                  {React.cloneElement(reportDef.icon as React.ReactElement, { size: 24 })}
                </div>
                <div className="ml-4">
                  <h2 className="text-xl font-semibold text-[#131313]">{reportDef.title}</h2>
                  <p className="text-sm text-[#6B6B6B]">{reportDef.description}</p>
                </div>
              </div>
              <button className="flex items-center gap-2 bg-[#F4EBFF] hover:bg-[#EDE5FF] text-[#9055FF] px-4 py-2 rounded-xl transition-colors">
                <FiDownload size={16} />
                <span className="text-sm font-medium">Export Report</span>
              </button>
            </div>
          </Card>
          
          {/* Dynamic Content Based on Report Type */}
          {renderReportContent()}
          
          {/* Footer */}
          <div className="mt-6 pb-6">
            <div className="text-center text-sm text-[#6B6B6B] opacity-70">
              <p>AI Manager Hub • Made with ❤️ by Team 10 • Digital Business Innovation Lab • 2025 SACE Project</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportDetailPage; 