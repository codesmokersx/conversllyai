
import React from 'react';

interface ConversllyLogoProps {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'white';
  className?: string;
}

export const ConversllyLogo = ({ size = 'md', variant = 'default', className = '' }: ConversllyLogoProps) => {
  const sizeClasses = {
    sm: 'text-xl',
    md: 'text-2xl',
    lg: 'text-3xl'
  };

  const colorClasses = {
    default: 'text-gray-900',
    white: 'text-white'
  };

  return (
    <div className={`font-bold ${sizeClasses[size]} ${colorClasses[variant]} ${className}`}>
      <span className="text-purple-600">Converslly</span>
      <span className={variant === 'white' ? 'text-gray-300' : 'text-gray-500'}>AI</span>
    </div>
  );
};
