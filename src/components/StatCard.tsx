"use client";

import React from 'react';

interface StatCardProps {
  title: string;
  value: string;
  trend?: {
    direction: 'up' | 'down' | 'none';
    value: string;
  };
}

const StatCard: React.FC<StatCardProps> = ({ title, value, trend }) => {
  const getTrendColor = () => {
    if (!trend) return 'text-[#7D7D7D]';
    if (trend.direction === 'up') return 'text-[#25CD25]';
    if (trend.direction === 'down') return 'text-[#EB5050]';
    return 'text-[#7D7D7D]';
  };

  const getTrendIcon = () => {
    if (!trend) return '→';
    if (trend.direction === 'up') return '↑';
    if (trend.direction === 'down') return '↓';
    return '→';
  };

  return (
    <div className="bg-white p-6 rounded-2xl flex flex-col">
      <div className="mb-4">
        <h3 className="text-sm text-[#131313]">{title}</h3>
      </div>
      <div className="flex justify-center items-center">
        <span className="text-xl font-bold text-[#131313]">{value}</span>
      </div>
      {trend && (
        <div className={`text-xs font-medium mt-4 ${getTrendColor()}`}>
          {getTrendIcon()} {trend.value}
        </div>
      )}
    </div>
  );
};

export default StatCard; 