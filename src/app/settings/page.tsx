"use client";

import React, { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import PageHeader from '@/components/PageHeader';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import { FiUser, FiBell, FiShield, FiMail, FiGlobe, FiSave, FiEye, FiEyeOff } from 'react-icons/fi';

export default function SettingsPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [activeSection, setActiveSection] = useState('profile');
  const [settings, setSettings] = useState({
    profile: {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@company.com',
      role: 'Team Manager',
      department: 'Product Development',
      phone: '+39 123 456 7890',
      timezone: 'Europe/Rome'
    },
    notifications: {
      emailUpdates: true,
      teamReports: true,
      weeklyDigest: false,
      skillAlerts: true,
      projectNotifications: true,
      securityAlerts: true
    },
    privacy: {
      profileVisibility: 'team',
      dataSharing: false,
      analyticsTracking: true,
      performanceData: true
    }
  });

  const sections = [
    { id: 'profile', label: 'Profile', icon: <FiUser size={18} /> },
    { id: 'notifications', label: 'Notifications', icon: <FiBell size={18} /> },
    { id: 'privacy', label: 'Privacy & Security', icon: <FiShield size={18} /> },
  ];

  const handleSettingChange = (section: string, key: string, value: any) => {
    setSettings(prev => ({
      ...prev,
      [section]: {
        ...prev[section as keyof typeof prev],
        [key]: value
      }
    }));
  };

  const renderProfileSection = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-[#131313] mb-2">First Name</label>
          <input
            type="text"
            value={settings.profile.firstName}
            onChange={(e) => handleSettingChange('profile', 'firstName', e.target.value)}
            className="w-full px-3 py-2 border border-[#E0E0E0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9055FF] focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-[#131313] mb-2">Last Name</label>
          <input
            type="text"
            value={settings.profile.lastName}
            onChange={(e) => handleSettingChange('profile', 'lastName', e.target.value)}
            className="w-full px-3 py-2 border border-[#E0E0E0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9055FF] focus:border-transparent"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-[#131313] mb-2">Email Address</label>
        <input
          type="email"
          value={settings.profile.email}
          onChange={(e) => handleSettingChange('profile', 'email', e.target.value)}
          className="w-full px-3 py-2 border border-[#E0E0E0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9055FF] focus:border-transparent"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-[#131313] mb-2">Role</label>
          <select
            value={settings.profile.role}
            onChange={(e) => handleSettingChange('profile', 'role', e.target.value)}
            className="w-full px-3 py-2 border border-[#E0E0E0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9055FF] focus:border-transparent"
          >
            <option value="Team Manager">Team Manager</option>
            <option value="Senior Developer">Senior Developer</option>
            <option value="Product Manager">Product Manager</option>
            <option value="UI/UX Designer">UI/UX Designer</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-[#131313] mb-2">Department</label>
          <select
            value={settings.profile.department}
            onChange={(e) => handleSettingChange('profile', 'department', e.target.value)}
            className="w-full px-3 py-2 border border-[#E0E0E0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9055FF] focus:border-transparent"
          >
            <option value="Product Development">Product Development</option>
            <option value="Engineering">Engineering</option>
            <option value="Design">Design</option>
            <option value="Data Science">Data Science</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-[#131313] mb-2">Phone Number</label>
          <input
            type="tel"
            value={settings.profile.phone}
            onChange={(e) => handleSettingChange('profile', 'phone', e.target.value)}
            className="w-full px-3 py-2 border border-[#E0E0E0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9055FF] focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-[#131313] mb-2">Timezone</label>
          <select
            value={settings.profile.timezone}
            onChange={(e) => handleSettingChange('profile', 'timezone', e.target.value)}
            className="w-full px-3 py-2 border border-[#E0E0E0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9055FF] focus:border-transparent"
          >
            <option value="Europe/Rome">Europe/Rome (UTC+1)</option>
            <option value="Europe/London">Europe/London (UTC+0)</option>
            <option value="America/New_York">America/New_York (UTC-5)</option>
            <option value="Asia/Tokyo">Asia/Tokyo (UTC+9)</option>
          </select>
        </div>
      </div>
    </div>
  );

  const renderNotificationsSection = () => (
    <div className="space-y-6">
      <div className="space-y-4">
        <h4 className="text-base font-semibold text-[#131313] border-b border-[#F0F0F0] pb-2">Email Notifications</h4>
        {[
          { key: 'emailUpdates', label: 'Email Updates', description: 'Receive updates about your team and projects' },
          { key: 'teamReports', label: 'Team Reports', description: 'Weekly and monthly team performance reports' },
          { key: 'weeklyDigest', label: 'Weekly Digest', description: 'Summary of all activities and insights' },
        ].map(item => (
          <div key={item.key} className="flex items-center justify-between py-3 px-4 bg-[#F6F6F3] rounded-lg">
            <div>
              <div className="font-medium text-[#131313]">{item.label}</div>
              <div className="text-sm text-[#6B6B6B]">{item.description}</div>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={settings.notifications[item.key as keyof typeof settings.notifications] as boolean}
                onChange={(e) => handleSettingChange('notifications', item.key, e.target.checked)}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#BF82FF]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#9055FF]"></div>
            </label>
          </div>
        ))}
      </div>

      <div className="space-y-4">
        <h4 className="text-base font-semibold text-[#131313] border-b border-[#F0F0F0] pb-2">System Alerts</h4>
        {[
          { key: 'skillAlerts', label: 'Skill Gap Alerts', description: 'Notifications about skill development opportunities' },
          { key: 'projectNotifications', label: 'Project Updates', description: 'Real-time updates about project progress' },
          { key: 'securityAlerts', label: 'Security Alerts', description: 'Important security and account notifications' },
        ].map(item => (
          <div key={item.key} className="flex items-center justify-between py-3 px-4 bg-[#F6F6F3] rounded-lg">
            <div>
              <div className="font-medium text-[#131313]">{item.label}</div>
              <div className="text-sm text-[#6B6B6B]">{item.description}</div>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={settings.notifications[item.key as keyof typeof settings.notifications] as boolean}
                onChange={(e) => handleSettingChange('notifications', item.key, e.target.checked)}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#BF82FF]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#9055FF]"></div>
            </label>
          </div>
        ))}
      </div>
    </div>
  );

  const renderPrivacySection = () => (
    <div className="space-y-6">
      <div className="space-y-4">
        <h4 className="text-base font-semibold text-[#131313] border-b border-[#F0F0F0] pb-2">Profile Settings</h4>
        <div className="py-3 px-4 bg-[#F6F6F3] rounded-lg">
          <div className="mb-3">
            <label className="block font-medium text-[#131313] mb-2">Profile Visibility</label>
            <div className="text-sm text-[#6B6B6B] mb-3">Choose who can see your profile information</div>
          </div>
          <select
            value={settings.privacy.profileVisibility}
            onChange={(e) => handleSettingChange('privacy', 'profileVisibility', e.target.value)}
            className="w-full px-3 py-2 border border-[#E0E0E0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9055FF] focus:border-transparent"
          >
            <option value="public">Public - Everyone in organization</option>
            <option value="team">Team Only - Only team members</option>
            <option value="private">Private - Only me</option>
          </select>
        </div>
      </div>

      <div className="space-y-4">
        <h4 className="text-base font-semibold text-[#131313] border-b border-[#F0F0F0] pb-2">Data & Analytics</h4>
        {[
          { key: 'dataSharing', label: 'Data Sharing', description: 'Share anonymized data to improve AI recommendations' },
          { key: 'analyticsTracking', label: 'Analytics Tracking', description: 'Allow usage analytics for better experience' },
          { key: 'performanceData', label: 'Performance Data', description: 'Include performance metrics in team analytics' },
        ].map(item => (
          <div key={item.key} className="flex items-center justify-between py-3 px-4 bg-[#F6F6F3] rounded-lg">
            <div>
              <div className="font-medium text-[#131313]">{item.label}</div>
              <div className="text-sm text-[#6B6B6B]">{item.description}</div>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={settings.privacy[item.key as keyof typeof settings.privacy] as boolean}
                onChange={(e) => handleSettingChange('privacy', item.key, e.target.checked)}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#BF82FF]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#9055FF]"></div>
            </label>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-[#F6F6F3] via-[#FAFAFA] to-[#F0F0F0]">
      <Sidebar />
      
      <div className="flex-1 lg:ml-[320px] p-4 sm:p-6 lg:p-8 overflow-y-auto">
        {/* Mobile top spacing for menu button */}
        <div className="lg:hidden h-16 mb-4"></div>
        
        <div className="max-w-8xl mx-auto space-y-6 lg:space-y-8">
          {/* Header */}
          <PageHeader
            title="Settings"
            description="Manage your account preferences and application settings"
            accentColor="#6E38D1"
          >
            <Badge variant="info" size="md">
              <FiShield size={14} className="mr-1" />
              Account Active
            </Badge>
          </PageHeader>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8">
            {/* Settings Navigation */}
            <div className="lg:col-span-1">
              <Card elevation="md" className="p-0 overflow-hidden">
                <div className="p-4 bg-gradient-to-r from-[#F4EBFF] to-[#F8F4FF] border-b border-[#F0F0F0]">
                  <h3 className="font-semibold text-[#131313]">Settings</h3>
                  <p className="text-sm text-[#6B6B6B] mt-1">Configure your preferences</p>
                </div>
                <nav className="p-4 space-y-2">
                  {sections.map(section => (
                    <button
                      key={section.id}
                      onClick={() => setActiveSection(section.id)}
                      className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left transition-colors ${
                        activeSection === section.id
                          ? 'bg-[#F4EBFF] text-[#9055FF] font-medium'
                          : 'text-[#6B6B6B] hover:bg-[#F6F6F3] hover:text-[#131313]'
                      }`}
                    >
                      {section.icon}
                      {section.label}
                    </button>
                  ))}
                </nav>
              </Card>
            </div>

            {/* Settings Content */}
            <div className="lg:col-span-3">
              <Card elevation="lg" className="p-6 lg:p-8">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-[#131313]">
                    {sections.find(s => s.id === activeSection)?.label}
                  </h2>
                </div>

                {activeSection === 'profile' && renderProfileSection()}
                {activeSection === 'notifications' && renderNotificationsSection()}
                {activeSection === 'privacy' && renderPrivacySection()}

                {/* Save Button */}
                <div className="flex justify-end mt-8 pt-6 border-t border-[#F0F0F0]">
                  <Button
                    variant="primary"
                    size="md"
                    icon={<FiSave size={16} />}
                  >
                    Save Changes
                  </Button>
                </div>
              </Card>
            </div>
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
} 