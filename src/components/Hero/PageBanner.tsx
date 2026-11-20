import React from 'react';
import { Breadcrumbs, BreadcrumbItem } from '../Breadcrumbs/Breadcrumbs';

interface PageBannerProps {
  title: string;
  subtitle: string;
  breadcrumbs: BreadcrumbItem[];
  eyebrow?: string;
}

export const PageBanner: React.FC<PageBannerProps> = ({
  title,
  subtitle,
  breadcrumbs,
  eyebrow,
}) => {
  return (
    <section className="navy-gradient text-white py-14 lg:py-20">
      <div className="site-container">
        <Breadcrumbs items={breadcrumbs} light />
        {eyebrow && (
          <p className="text-sm font-semibold text-white/80 mb-2">{eyebrow}</p>
        )}
        <h1 className="text-3xl sm:text-4xl lg:text-[46px] font-bold leading-tight tracking-tight text-white max-w-3xl text-balance">
          {title}
        </h1>
        <p className="mt-4 text-base sm:text-lg font-medium leading-relaxed text-white/85 max-w-2xl">
          {subtitle}
        </p>
      </div>
    </section>
  );
};
