import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  to?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  light?: boolean;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, light = false }) => {
  return (
    <nav aria-label="Breadcrumb" className="mb-4">
      <ol className="flex flex-wrap items-center gap-1.5 text-sm font-medium">
        <li>
          <Link
            to="/"
            className={`transition-colors ${
              light ? 'text-white/80 hover:text-white' : 'text-[#59616B] hover:text-[#025EC1]'
            }`}
          >
            Home
          </Link>
        </li>
        {items.map((item, idx) => {
          const isLast = idx === items.length - 1;
          return (
            <li key={`${item.label}-${idx}`} className="flex items-center gap-1.5">
              <ChevronRight
                className={`w-4 h-4 shrink-0 ${light ? 'text-white/60' : 'text-[#59616B]/60'}`}
                aria-hidden="true"
              />
              {item.to && !isLast ? (
                <Link
                  to={item.to}
                  className={`transition-colors ${
                    light ? 'text-white/80 hover:text-white' : 'text-[#59616B] hover:text-[#025EC1]'
                  }`}
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  aria-current={isLast ? 'page' : undefined}
                  className={light ? 'text-white font-semibold' : 'text-[#025EC1] font-semibold'}
                >
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
