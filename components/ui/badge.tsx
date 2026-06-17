import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

interface BadgeProps {
  children: ReactNode;
  variant?: 'default' | 'outline' | 'navy' | 'accent';
  className?: string;
}

export function Badge({ children, variant = 'default', className }: BadgeProps) {
  const base =
    'inline-flex items-center gap-1.5 font-mono text-[10px] font-medium tracking-[0.12em] uppercase px-3 py-1';

  const variants = {
    default: 'bg-slate-100 text-slate-600',
    outline: 'border border-slate-200 text-slate-500',
    navy: 'bg-navy-900 text-white',
    accent: 'bg-accent-500/10 text-accent-500',
  };

  return (
    <span className={cn(base, variants[variant], className)}>
      {children}
    </span>
  );
}

interface SectionOverlineProps {
  children: ReactNode;
  light?: boolean;
  className?: string;
}

export function SectionOverline({ children, light, className }: SectionOverlineProps) {
  return (
    <p
      className={cn(
        'font-mono text-[10px] font-medium tracking-[0.18em] uppercase mb-4',
        light ? 'text-accent-400' : 'text-navy-600',
        className,
      )}
    >
      {children}
    </p>
  );
}
