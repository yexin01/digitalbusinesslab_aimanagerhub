"use client";

import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'info';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  dot?: boolean;
}

const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  dot = false,
}) => {
  // Define the variant classes
  const variantClasses = {
    primary: 'bg-[#F4EBFF] text-[#BF82FF]',
    secondary: 'bg-[#F6F6F3] text-[#131313]',
    success: 'bg-[#E8F8E8] text-[#25CD25]',
    error: 'bg-[#FDECEC] text-[#EB5050]',
    warning: 'bg-[#FFF4E5] text-[#FFA500]',
    info: 'bg-[#E6F0FF] text-[#4E97FF]',
  };

  // Define the size classes
  const sizeClasses = {
    sm: 'text-xs py-0.5 px-2',
    md: 'text-sm py-1 px-2.5',
    lg: 'text-base py-1.5 px-3',
  };

  // Define dot classes for each variant
  const dotClasses = {
    primary: 'bg-[#BF82FF]',
    secondary: 'bg-[#131313]',
    success: 'bg-[#25CD25]',
    error: 'bg-[#EB5050]',
    warning: 'bg-[#FFA500]',
    info: 'bg-[#4E97FF]',
  };

  return (
    <span
      className={`
        ${variantClasses[variant]}
        ${sizeClasses[size]}
        inline-flex items-center
        font-medium
        rounded-full
        ${className}
      `}
    >
      {dot && (
        <span 
          className={`
            ${dotClasses[variant]}
            w-2 h-2 
            rounded-full 
            mr-1.5
          `}
        />
      )}
      {children}
    </span>
  );
};

export default Badge; 