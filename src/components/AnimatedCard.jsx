// @ts-ignore;
import React from 'react';
// @ts-ignore;
import { cn } from '@/lib/utils';

export function AnimatedCard({
  children,
  className,
  animation = 'slide-up',
  delay = 0,
  ...props
}) {
  const [isVisible, setIsVisible] = React.useState(false);
  React.useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);
  const animationClasses = {
    'fade-in': 'animate-fade-in',
    'slide-up': 'animate-slide-up',
    'scale-in': 'animate-scale-in',
    'bounce-in': 'animate-bounce-in'
  };
  return <div className={cn('transition-all duration-300', isVisible ? animationClasses[animation] : 'opacity-0', className)} {...props}>
      {children}
    </div>;
}