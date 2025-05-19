"use client";

import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'success' | 'error';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  fullWidth?: boolean;
  disabled?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  fullWidth = false,
  disabled = false,
  icon,
  iconPosition = 'left',
}) => {
  // Define the variant classes
  const variantClasses = {
    primary: 'bg-[#BF82FF] text-white hover:bg-[#9055FF]',
    secondary: 'bg-[#F6F6F3] text-[#131313] hover:bg-[#EDEDED]',
    outline: 'bg-transparent text-[#BF82FF] border border-[#BF82FF] hover:bg-[#F4EBFF]',
    ghost: 'bg-transparent text-[#BF82FF] hover:bg-[#F4EBFF]',
    success: 'bg-[#25CD25] text-white hover:bg-[#1FB01F]',
    error: 'bg-[#EB5050] text-white hover:bg-[#D43C3C]',
  };

  // Define the size classes
  const sizeClasses = {
    sm: 'py-1.5 px-3 text-sm',
    md: 'py-2 px-4 text-base',
    lg: 'py-2.5 px-5 text-lg',
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        ${variantClasses[variant]}
        ${sizeClasses[size]}
        ${fullWidth ? 'w-full' : ''}
        rounded-xl
        font-medium
        flex items-center justify-center
        gap-2
        transition-all
        duration-200
        shadow-sm
        hover:shadow-md
        ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
        ${className}
      `}
    >
      {icon && iconPosition === 'left' && icon}
      {children}
      {icon && iconPosition === 'right' && icon}
    </button>
  );
};

export default Button; 