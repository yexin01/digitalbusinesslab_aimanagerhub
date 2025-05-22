"use client";

import React from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger' | 'success';
export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  loading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  children: React.ReactNode;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary: 'bg-gradient-to-r from-[#9055FF] to-[#BF82FF] text-white shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-purple-500/30 hover:from-[#8045EF] hover:to-[#AF72EF] active:scale-95',
  secondary: 'bg-gradient-to-r from-[#F4EBFF] to-[#F8F4FF] text-[#9055FF] border border-[#E5D5FF] hover:from-[#EDE5FF] hover:to-[#F4EBFF] hover:shadow-md active:scale-95',
  outline: 'bg-transparent text-[#9055FF] border-2 border-[#9055FF] hover:bg-[#9055FF] hover:text-white hover:shadow-lg active:scale-95',
  ghost: 'bg-transparent text-[#6B6B6B] hover:bg-[#F6F6F3] hover:text-[#131313] active:scale-95',
  danger: 'bg-gradient-to-r from-[#EB5050] to-[#FF6B6B] text-white shadow-lg shadow-red-500/25 hover:shadow-xl hover:shadow-red-500/30 hover:from-[#DB4040] hover:to-[#EF5B5B] active:scale-95',
  success: 'bg-gradient-to-r from-[#25CD25] to-[#3DD33D] text-white shadow-lg shadow-green-500/25 hover:shadow-xl hover:shadow-green-500/30 hover:from-[#15BD15] hover:to-[#2DC32D] active:scale-95',
};

const sizeClasses: Record<ButtonSize, string> = {
  xs: 'px-3 py-2 text-xs rounded-xl min-h-[32px]',
  sm: 'px-4 py-2.5 text-sm rounded-xl min-h-[36px]',
  md: 'px-6 py-3 text-sm rounded-2xl min-h-[44px]',
  lg: 'px-8 py-3.5 text-base rounded-2xl min-h-[48px]',
  xl: 'px-10 py-4 text-lg rounded-2xl min-h-[52px]',
};

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  loading = false,
  icon,
  iconPosition = 'left',
  children,
  className = '',
  disabled,
  ...props
}) => {
  const baseClasses = [
    'font-medium',
    'transition-all',
    'duration-300',
    'ease-out',
    'flex',
    'items-center',
    'justify-center',
    'gap-2',
    'relative',
    'overflow-hidden',
    'focus:outline-none',
    'focus:ring-4',
    'focus:ring-purple-500/20',
    variantClasses[variant],
    sizeClasses[size],
    fullWidth && 'w-full',
    (disabled || loading) && 'opacity-50 cursor-not-allowed hover:shadow-none hover:scale-100',
    className
  ].filter(Boolean).join(' ');

  return (
    <button
      className={baseClasses}
      disabled={disabled || loading}
      {...props}
    >
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-inherit">
          <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin" />
        </div>
      )}
      
      <div className={`flex items-center gap-2 ${loading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-200`}>
        {icon && iconPosition === 'left' && (
          <span className="flex-shrink-0">{icon}</span>
        )}
        <span>{children}</span>
        {icon && iconPosition === 'right' && (
          <span className="flex-shrink-0">{icon}</span>
        )}
      </div>
    </button>
  );
};

export default Button; 