"use client";

import React from 'react';

export type CardElevation = 'none' | 'sm' | 'md' | 'lg' | 'xl';
export type CardVariant = 'default' | 'gradient' | 'glass' | 'bordered';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  elevation?: CardElevation;
  variant?: CardVariant;
  hover?: boolean;
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

const elevationClasses: Record<CardElevation, string> = {
  none: '',
  sm: 'shadow-sm',
  md: 'shadow-md shadow-black/5',
  lg: 'shadow-lg shadow-black/8',
  xl: 'shadow-xl shadow-black/10',
};

const variantClasses: Record<CardVariant, string> = {
  default: 'bg-white border border-[#F0F0F0]',
  gradient: 'bg-gradient-to-br from-white to-[#FAFAFA] border border-[#F0F0F0]',
  glass: 'bg-white/80 backdrop-blur-sm border border-white/20',
  bordered: 'bg-white border-2 border-[#E5E5E5]',
};

const paddingClasses = {
  none: '',
  sm: 'p-3 sm:p-4',
  md: 'p-4 sm:p-6',
  lg: 'p-6 sm:p-8',
};

const Card: React.FC<CardProps> = ({ 
  children, 
  className = '', 
  elevation = 'md',
  variant = 'default',
  hover = false,
  padding = 'none'
}) => {
  const baseClasses = [
    'rounded-2xl',
    'transition-all',
    'duration-300',
    'ease-out',
    elevationClasses[elevation],
    variantClasses[variant],
    paddingClasses[padding],
    hover && 'hover:shadow-lg hover:shadow-black/10 hover:-translate-y-1 hover:scale-[1.02]',
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={baseClasses}>
      {children}
    </div>
  );
};

export default Card; 