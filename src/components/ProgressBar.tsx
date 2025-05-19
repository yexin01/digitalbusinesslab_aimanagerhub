"use client";

import React from 'react';

interface ProgressBarProps {
  title: string;
  percentage: number;
  color?: string;
  height?: number;
  showPercentage?: boolean;
  className?: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  title,
  percentage,
  color = '#BF82FF',
  height = 8,
  showPercentage = true,
  className = '',
}) => {
  // Ensure percentage is between 0-100
  const clampedPercentage = Math.min(Math.max(percentage, 0), 100);
  
  return (
    <div className={`w-full ${className}`}>
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-[#131313]">{title}</span>
        {showPercentage && (
          <span className="text-sm font-medium text-[#131313]">{clampedPercentage}%</span>
        )}
      </div>
      <div 
        className="w-full bg-[#EDEDED] rounded-full overflow-hidden"
        style={{ height: `${height}px` }}
      >
        <div 
          className="transition-all duration-500 ease-out rounded-full"
          style={{ 
            width: `${clampedPercentage}%`, 
            height: '100%',
            backgroundColor: color 
          }}
        />
      </div>
    </div>
  );
};

export default ProgressBar; 