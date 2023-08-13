import React from "react";

const SectionHeading = ({ title, subtitle }: any) => {
  return (
    <div className="w-full flex flex-col gap-y-4 md:gap-y-8 items-center justify-center">
      <div className="text-2xl md:text-3xl font-bold"> {title} </div>

      <div className="text-gray-600 text-center md:text-base w-full md:w-3/4 text-sm">
        {subtitle}
      </div>
    </div>
  );
};

export default SectionHeading;
