"use client";

import React from 'react';
import Card from './ui/Card';

interface PageHeaderProps {
  title: string;
  description: string;
  accentColor?: string;
  children?: React.ReactNode;
}

const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  description,
  accentColor = '#4E97FF',
  children
}) => {
  return (
    <Card 
      variant="gradient" 
      className={`p-4 sm:p-6 lg:p-8 shadow-xl border-l-4`}
      hover={false}
    >
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3 sm:gap-4">
        <div className="flex items-start lg:items-center gap-3 sm:gap-4">
          <div 
            className="w-2 sm:w-3 h-10 sm:h-12 lg:h-16 rounded-full flex-shrink-0"
            style={{ 
              background: `linear-gradient(to bottom, ${accentColor}, ${accentColor}CC, ${accentColor}99)` 
            }}
          ></div>
          <div className="flex-1">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#131313] tracking-tight leading-tight">
              {title}
            </h1>
            <p className="text-xs sm:text-sm lg:text-base text-[#6B6B6B] mt-1 sm:mt-2 max-w-4xl leading-relaxed">
              {description}
            </p>
          </div>
        </div>
        
        {children && (
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 lg:gap-4">
            {children}
          </div>
        )}
      </div>
    </Card>
  );
};

export default PageHeader; 