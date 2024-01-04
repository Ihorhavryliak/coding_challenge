import React from 'react';

type StepTitleType = {
  title: string;
};

const StepTitle = ({ title }: StepTitleType) => {
  return (
    <div
      className={
        'mt-[7.89px] px-2.5 pb-5 font-scandia text-xl font-medium leading-[22px] text-custom-blue-100 lg:px-10 xl:px-10 2xl:px-10'
      }
    >
      {title}
    </div>
  );
};

export default StepTitle;
