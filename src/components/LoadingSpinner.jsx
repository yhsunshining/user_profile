// @ts-ignore;
import React from 'react';

export function LoadingSpinner({
  size = 'medium',
  className = ''
}) {
  const sizeClasses = {
    small: 'w-4 h-4',
    medium: 'w-8 h-8',
    large: 'w-12 h-12'
  };
  return <div className={`flex items-center justify-center ${className}`}>
      <div className={`${sizeClasses[size]} loading-spinner`}></div>
    </div>;
}
export function LoadingDots({
  className = ''
}) {
  return <div className={`flex items-center justify-center ${className}`}>
      <div className="loading-dots">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>;
}