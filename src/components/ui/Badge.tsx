"use client";

import React from 'react';

export type BadgeVariant = 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'neutral' | 'gradient';
export type BadgeSize = 'xs' | 'sm' | 'md' | 'lg';

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  size?: BadgeSize;
  className?: string;
  dot?: boolean;
  pulse?: boolean;
  rounded?: boolean;
}

const variantClasses: Record<BadgeVariant, string> = {
  primary: 'bg-gradient-to-r from-[#9055FF] to-[#BF82FF] text-white shadow-sm',
  secondary: 'bg-[#F4EBFF] text-[#9055FF] border border-[#E5D5FF]',
  success: 'bg-gradient-to-r from-[#25CD25] to-[#3DD33D] text-white shadow-sm',
  warning: 'bg-gradient-to-r from-[#FFA500] to-[#FFB733] text-white shadow-sm',
  danger: 'bg-gradient-to-r from-[#EB5050] to-[#FF6B6B] text-white shadow-sm',
  info: 'bg-gradient-to-r from-[#4E97FF] to-[#7BB3FF] text-white shadow-sm',
  neutral: 'bg-[#F6F6F3] text-[#6B6B6B] border border-[#E5E5E5]',
  gradient: 'bg-gradient-to-r from-[#FF6B6B] via-[#4ECDC4] to-[#45B7D1] text-white shadow-md',
};

const sizeClasses: Record<BadgeSize, string> = {
  xs: 'px-2 py-0.5 text-xs',
  sm: 'px-2.5 py-1 text-xs',
  md: 'px-3 py-1.5 text-sm',
  lg: 'px-4 py-2 text-sm',
};

const dotVariantClasses: Record<BadgeVariant, string> = {
  primary: 'bg-[#9055FF]',
  secondary: 'bg-[#9055FF]',
  success: 'bg-[#25CD25]',
  warning: 'bg-[#FFA500]',
  danger: 'bg-[#EB5050]',
  info: 'bg-[#4E97FF]',
  neutral: 'bg-[#6B6B6B]',
  gradient: 'bg-gradient-to-r from-[#FF6B6B] to-[#45B7D1]',
};

const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'primary',
  size = 'sm',
  className = '',
  dot = false,
  pulse = false,
  rounded = false,
}) => {
  if (dot) {
    return (
      <div className={`
        flex items-center gap-2
        ${className}
      `}>
        <div className={`
          w-2 h-2 rounded-full
          ${dotVariantClasses[variant]}
          ${pulse ? 'animate-pulse' : ''}
        `} />
        <span className="text-sm font-medium text-[#131313]">
          {children}
        </span>
      </div>
    );
  }

  const baseClasses = [
    'inline-flex',
    'items-center',
    'justify-center',
    'font-medium',
    'transition-all',
    'duration-200',
    'ease-out',
    rounded ? 'rounded-full' : 'rounded-lg',
    variantClasses[variant],
    sizeClasses[size],
    pulse && 'animate-pulse',
    className
  ].filter(Boolean).join(' ');

  return (
    <span className={baseClasses}>
      {children}
    </span>
  );
};

export default Badge; 