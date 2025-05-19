"use client";

import React from 'react';
import Card from './ui/Card';

interface StatCardProps {
  title: string;
  value: string;
  trend?: {
    direction: 'up' | 'down' | 'none';
    value: string;
  };
  className?: string;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, trend, className = '' }) => {
  const getTrendColor = () => {
    if (!trend) return 'text-[#7D7D7D]';
    if (trend.direction === 'up') return 'text-[#25CD25]';
    if (trend.direction === 'down') return 'text-[#EB5050]';
    return 'text-[#7D7D7D]';
  };

  const getTrendIcon = () => {
    if (!trend) return null;
    
    if (trend.direction === 'up') {
      return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 4L14 10H10V14H6V10H2L8 4Z" fill="#25CD25" />
        </svg>
      );
    }
    
    if (trend.direction === 'down') {
      return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 12L2 6H6V2H10V6H14L8 12Z" fill="#EB5050" />
        </svg>
      );
    }
    
    return (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 8H14" stroke="#7D7D7D" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  };

  return (
    <Card 
      className={`${className} flex flex-col transform transition-transform duration-300 hover:translate-y-[-5px]`}
      elevation="sm"
      padding="md"
    >
      <div className="mb-4">
        <h3 className="text-sm font-medium text-[#454545]">{title}</h3>
      </div>
      <div className="flex justify-center items-center">
        <span className="text-3xl font-bold text-[#131313]">{value}</span>
      </div>
      {trend && (
        <div className={`flex items-center gap-1 text-sm font-medium mt-4 ${getTrendColor()}`}>
          {getTrendIcon()}
          <span>{trend.value}</span>
        </div>
      )}
    </Card>
  );
};

export default StatCard; 