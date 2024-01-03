import React, { LegacyRef, forwardRef } from 'react';
import TypeRoofTextContainer from '../TypeRoofTextContainer/TypeRoofTextContainer';

type SliderGeneralType = {
  slides: JSX.Element[];
};

const SliderGeneral = (
  { slides }: SliderGeneralType,
  ref: LegacyRef<HTMLDivElement> | undefined,
) => {
  return (
    <div className='relative overflow-x-hidden'>
      <div
        ref={ref}
        className='flex overflow-hidden transition min-h-screen'
        style={{
          scrollSnapType: 'x mandatory',
        }}
      >
        {slides.map((item, index) => (
          <div key={index} className='relative h-96 min-w-full flex-shrink-0'>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default forwardRef(SliderGeneral);
