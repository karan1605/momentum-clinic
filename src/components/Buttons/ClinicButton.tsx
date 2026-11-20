import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

interface ClinicButtonProps {
  children: React.ReactNode;
  to?: string;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'white' | 'outline' | 'outline-white';
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  className?: string;
  icon?: React.ReactNode;
  ariaLabel?: string;
}

export const ClinicButton: React.FC<ClinicButtonProps> = ({
  children,
  to,
  href,
  onClick,
  variant = 'primary',
  type = 'button',
  disabled = false,
  className = '',
  icon,
  ariaLabel,
}) => {
  const variantClass =
    variant === 'white'
      ? 'primary-btn primary-btn-white'
      : variant === 'outline'
        ? 'primary-btn border-variant'
        : variant === 'outline-white'
          ? 'primary-btn outline-white-variant'
          : 'primary-btn';

  const content = (
    <>
      <span className="btn-icon" aria-hidden="true">
        {icon || <ArrowUpRight className="w-4 h-4" strokeWidth={2.25} />}
      </span>
      <span className="btn-text">
        <span>{children}</span>
      </span>
    </>
  );

  if (to) {
    return (
      <Link
        to={to}
        onClick={onClick}
        className={`${variantClass} ${className}`}
        aria-label={ariaLabel}
      >
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        onClick={onClick}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
        className={`${variantClass} ${className}`}
        aria-label={ariaLabel}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      className={`${variantClass} ${disabled ? 'opacity-60 cursor-not-allowed pointer-events-none' : 'cursor-pointer'} ${className}`}
    >
      {content}
    </button>
  );
};
