
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
    <div className={`font-light ${sizeClasses[size]} ${colorClasses[variant]} ${className}`}>
      <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent font-medium">Converslly</span>
      <span className={variant === 'white' ? 'text-gray-400' : 'text-gray-500'}>AI</span>
    </div>
  );
};
