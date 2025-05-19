"use client";

import React, { useState } from 'react';

interface Notification {
  id: string;
  title: string;
  message: string;
  time: string;
  type: 'alert' | 'info' | 'success';
  read: boolean;
}

interface QuickAction {
  id: string;
  title: string;
  icon: React.ReactNode;
  action: () => void;
}

interface QuickActionsProps {
  notifications: Notification[];
  actions: QuickAction[];
  className?: string;
}

const QuickActions: React.FC<QuickActionsProps> = ({
  notifications,
  actions,
  className = '',
}) => {
  const [activeTab, setActiveTab] = useState<'notifications' | 'actions'>('notifications');
  const [isOpen, setIsOpen] = useState(false);

  const togglePanel = () => {
    setIsOpen(!isOpen);
  };

  const getNotificationIcon = (type: 'alert' | 'info' | 'success') => {
    switch (type) {
      case 'alert':
        return (
          <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 15A7 7 0 108 1a7 7 0 000 14zM8 5v3m0 3h.01" stroke="#EB5050" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        );
      case 'success':
        return (
          <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.3 4.7L6 12l-3.3-3.3" stroke="#25CD25" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        );
      default:
        return (
          <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 15A7 7 0 108 1a7 7 0 000 14zM8 5v3m0 3h.01" stroke="#4E97FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        );
    }
  };

  return (
    <>
      {/* Toggle button that's always visible */}
      <button
        onClick={togglePanel}
        className="fixed right-6 top-6 z-50 bg-[#BF82FF] text-white p-2 rounded-full shadow-lg hover:bg-[#9055FF] transition-colors duration-200"
      >
        {isOpen ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 17h5l-1.5-1.5M15 7h5l-1.5 1.5M9 17H4l1.5-1.5M9 7H4l1.5 1.5M12 3v18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        )}
      </button>

      {/* Side panel */}
      <div 
        className={`fixed top-0 right-0 w-80 h-full bg-white shadow-lg transition-transform duration-300 ease-in-out z-40 transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } ${className}`}
      >
        <div className="p-6 h-full flex flex-col">
          <h2 className="text-xl font-semibold text-[#131313] mb-4">Quick Panel</h2>
          
          {/* Tabs */}
          <div className="flex border-b border-[#F0F0F0] mb-4">
            <button
              className={`px-4 py-2 text-sm font-medium ${
                activeTab === 'notifications'
                  ? 'text-[#BF82FF] border-b-2 border-[#BF82FF]'
                  : 'text-[#6B6B6B]'
              }`}
              onClick={() => setActiveTab('notifications')}
            >
              Notifications
            </button>
            <button
              className={`px-4 py-2 text-sm font-medium ${
                activeTab === 'actions'
                  ? 'text-[#BF82FF] border-b-2 border-[#BF82FF]'
                  : 'text-[#6B6B6B]'
              }`}
              onClick={() => setActiveTab('actions')}
            >
              Quick Actions
            </button>
          </div>
          
          {/* Content */}
          <div className="flex-1 overflow-y-auto">
            {activeTab === 'notifications' ? (
              <div className="space-y-4">
                {notifications.length > 0 ? (
                  notifications.map((notification) => (
                    <div 
                      key={notification.id} 
                      className={`p-4 rounded-lg ${notification.read ? 'bg-[#F6F6F3]' : 'bg-white border border-[#F0F0F0]'}`}
                    >
                      <div className="flex items-start">
                        {getNotificationIcon(notification.type)}
                        <div className="ml-3">
                          <h4 className="font-medium text-[#131313]">{notification.title}</h4>
                          <p className="text-sm text-[#6B6B6B] mt-1">{notification.message}</p>
                          <p className="text-xs text-[#A0A0A0] mt-2">{notification.time}</p>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-8 text-[#6B6B6B]">No notifications</div>
                )}
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-4">
                {actions.map((action) => (
                  <button
                    key={action.id}
                    onClick={action.action}
                    className="p-4 bg-[#F6F6F3] rounded-lg hover:bg-[#EDEDED] transition-colors duration-200 flex flex-col items-center justify-center"
                  >
                    <div className="mb-2">{action.icon}</div>
                    <span className="text-sm font-medium text-[#131313]">{action.title}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default QuickActions; 