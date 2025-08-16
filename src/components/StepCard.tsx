import React from 'react';

interface StepCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  iconBgColor: string;
}

export const StepCard: React.FC<StepCardProps> = ({ icon, title, description, iconBgColor }) => {
  return (
    <div className="flex h-[91px] items-start self-stretch relative bg-[rgba(56,120,109,0.10)] px-[22.653px] py-[17.799px] rounded-[32.362px] max-md:h-auto max-md:min-h-[91px] max-md:px-5 max-md:py-4 max-sm:px-4 max-sm:py-3">
      <div className="flex items-center gap-[18.608px] relative max-md:flex-wrap max-md:gap-4 max-sm:gap-3">
        <div className={`flex w-[49px] h-[49px] items-center justify-center relative gap-[8.09px] px-[12.945px] py-[10.518px] rounded-[24.271px] max-sm:w-10 max-sm:h-10`} style={{ backgroundColor: iconBgColor }}>
          {icon}
        </div>
        <div className="flex flex-col items-start gap-[8.899px] relative w-[311px] max-md:w-full max-md:max-w-[311px]">
          <div className="text-[#38786D] text-base font-bold relative max-md:text-sm max-sm:text-[13px]">
            {title}
          </div>
          <div className="text-neutral-500 text-base font-normal opacity-80 relative max-md:text-sm max-sm:text-[13px]">
            {description}
          </div>
        </div>
      </div>
    </div>
  );
};
