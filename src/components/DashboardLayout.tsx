"use client";

import React from 'react';
import QuickActions from './QuickActions';
import { FiUsers, FiClipboard, FiSettings, FiMessageSquare } from 'react-icons/fi';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  // Sample notifications data
  const notifications = [
    {
      id: '1',
      title: 'Team Performance Alert',
      message: 'Jenna\'s productivity has decreased by 15% in the last week.',
      time: '10 minutes ago',
      type: 'alert' as const,
      read: false,
    },
    {
      id: '2',
      title: 'New Team Member',
      message: 'Alex Rodriguez has been added to your team.',
      time: '2 hours ago',
      type: 'info' as const,
      read: false,
    },
    {
      id: '3',
      title: 'Goal Completed',
      message: 'Your team has completed the "API Integration" goal successfully.',
      time: 'Yesterday',
      type: 'success' as const,
      read: true,
    },
    {
      id: '4',
      title: 'Review Required',
      message: 'Maggie\'s quarterly review is due this week.',
      time: '2 days ago',
      type: 'info' as const,
      read: true,
    },
  ];

  // Sample quick actions
  const quickActions = [
    {
      id: '1',
      title: 'Team Chat',
      icon: <FiMessageSquare size={24} color="#BF82FF" />,
      action: () => console.log('Opening team chat'),
    },
    {
      id: '2',
      title: 'Schedule 1:1',
      icon: <FiUsers size={24} color="#BF82FF" />,
      action: () => console.log('Scheduling 1:1'),
    },
    {
      id: '3',
      title: 'Set Goals',
      icon: <FiClipboard size={24} color="#BF82FF" />,
      action: () => console.log('Setting goals'),
    },
    {
      id: '4',
      title: 'Preferences',
      icon: <FiSettings size={24} color="#BF82FF" />,
      action: () => console.log('Opening preferences'),
    },
  ];

  return (
    <div className="relative">
      {children}
      <QuickActions 
        notifications={notifications}
        actions={quickActions}
      />
    </div>
  );
};

export default DashboardLayout; 