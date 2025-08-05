import React from 'react';

type TooltipProps = {
      text: string;
      children: React.ReactNode;
};

const Tooltip: React.FC<TooltipProps> = ({ text, children }) => {
      return (
            <div className="group relative inline-flex items-center rounded-lg">
                  {children}
                  <div
                        className="rounded-lg absolute left-full top-1/2 -translate-y-1/2 ml-3
                   bg-mBlue-800 text-white text-xs font-medium
                   px-3 py-1  shadow-lg
                   whitespace-nowrap z-20
                   opacity-0 group-hover:opacity-100
                   transition-opacity duration-200 ease-in-out
                   pointer-events-none"
                  >
                        {text}
                  </div>
            </div>
      );
};

export default Tooltip;