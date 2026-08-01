import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'gold' | 'text';
}

export default function Button({ children, variant = 'gold', className = '', ...rest }: ButtonProps) {
  if (variant === 'text') {
    return (
      <button
        {...rest}
        className={`inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-navy hover:text-gold-dark transition-colors ${className}`}
      >
        {children}
      </button>
    );
  }
  return (
    <button
      {...rest}
      className={`inline-flex items-center gap-2 px-7 py-3.5 text-xs font-semibold tracking-wider uppercase rounded-sm bg-gold hover:bg-gold-dark text-white transition-colors ${className}`}
    >
      {children}
    </button>
  );
}
