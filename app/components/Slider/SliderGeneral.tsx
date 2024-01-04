import useGetWindowWidth from '@/app/hooks/useGetWindowWidth';
import React, { LegacyRef, forwardRef } from 'react';

type SliderGeneralType = {
  slides: JSX.Element[];
};

const SliderGeneral = (
  { slides }: SliderGeneralType,
  ref: LegacyRef<HTMLDivElement> | undefined,
) => {
  const width = useGetWindowWidth();

  return (
    <div
      ref={ref}
      className='flex w-full overflow-hidden transition duration-500 ease-in-out'
    >
      <div className='flex'>
        {slides.map((item, index) => (
          <div
            key={index}
            style={{ width: width <= 930 ? width + 'px' : 930 + 'px' }}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default forwardRef(SliderGeneral);
