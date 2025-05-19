"use client";

import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  padding?: 'none' | 'sm' | 'md' | 'lg';
  elevation?: 'sm' | 'md' | 'lg' | 'xl';
}

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hoverEffect = true,
  padding = 'md',
  elevation = 'md',
}) => {
  // Define padding classes
  const paddingClasses = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };

  // Define elevation (shadow) classes
  const elevationClasses = {
    sm: 'shadow-sm',
    md: 'shadow-md',
    lg: 'shadow-lg',
    xl: 'shadow-xl',
  };

  return (
    <div
      className={`
        bg-white 
        rounded-2xl 
        ${paddingClasses[padding]} 
        ${elevationClasses[elevation]} 
        ${hoverEffect ? 'hover:shadow-lg transition-shadow duration-300' : ''} 
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default Card; 