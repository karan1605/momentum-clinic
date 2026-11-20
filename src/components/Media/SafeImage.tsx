import React, { useState, useEffect } from 'react';
import { Activity } from 'lucide-react';

interface SafeImageProps {
  src: string;
  alt: string;
  className?: string;
  eager?: boolean;
}

export const SafeImage: React.FC<SafeImageProps> = ({
  src,
  alt,
  className = 'w-full h-full object-cover',
  eager = false,
}) => {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setHasError(false);
  }, [src]);

  if (hasError || !src) {
    return (
      <div
        role="img"
        aria-label={alt}
        className="w-full h-full flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-[#F5F9FE] via-[#E5F0FC] to-[#D4E6FA] text-[#025EC1] p-6 text-center"
      >
        <Activity className="w-8 h-8 opacity-80" aria-hidden="true" />
        <span className="text-xs font-semibold text-[#213245] max-w-[220px]">{alt}</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={eager ? 'eager' : 'lazy'}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  );
};
