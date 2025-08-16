import React from 'react';

interface FeatureItemProps {
  icon: React.ReactNode;
  title: string;
  className?: string;
}

export const FeatureItem: React.FC<FeatureItemProps> = ({ icon, title, className = "" }) => {
  return (
    <div className={`flex items-center gap-[12.62px] relative max-md:flex-col max-md:gap-2 max-md:text-center ${className}`}>
      {icon}
      <div className="text-black text-center text-sm font-normal relative w-auto max-md:max-w-[200px] max-sm:text-xs">
        {title}
      </div>
    </div>
  );
};
