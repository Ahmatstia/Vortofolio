import React from 'react';
import Link from 'next/link';
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline';
  href?: string;
  icon?: string;
  children: React.ReactNode;
}
export const Button = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  ({ variant = 'primary', href, icon, children, className = '', ...props }, ref) => {
    // Base classes
    const baseClass = "font-hanken text-sm font-semibold rounded-full transition-all duration-300 active:scale-95 text-center cursor-pointer inline-flex items-center justify-center gap-2";
    
    // Variant classes
    const primaryClass = "group relative overflow-hidden bg-brand-accent text-white px-8 py-4 shadow-[0_4px_20px_rgba(15,23,42,0.12)] hover:shadow-[0_8px_28px_rgba(181,87,59,0.35)]";
    const outlineClass = "bg-brand-bg text-brand-text px-8 py-4 border border-brand-border hover:bg-brand-surface hover:border-brand-text/20 shadow-[0_4px_20px_rgba(15,23,42,0.02)]";
    const variantClass = variant === 'primary' ? primaryClass : outlineClass;
    const finalClass = `${baseClass} ${variantClass} ${className}`;
    const innerContent = (
      <>
        {variant === 'primary' ? (
          <>
            <span className="relative z-10">{children}</span>
            {icon && (
              <span className="material-symbols-outlined text-base relative z-10 transition-transform duration-300 group-hover:translate-x-1">
                {icon}
              </span>
            )}
            <span className="absolute inset-0 bg-brand-accent-hover translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
          </>
        ) : (
          <>
            {icon && (
              <span className="material-symbols-outlined text-lg">
                {icon}
              </span>
            )}
            {children}
          </>
        )}
      </>
    );
    if (href) {
      return (
        <Link href={href} className={finalClass} ref={ref as any}>
          {innerContent}
        </Link>
      );
    }
    return (
      <button className={finalClass} ref={ref as any} {...props}>
        {innerContent}
      </button>
    );
  }
);
Button.displayName = 'Button';