import React, { LegacyRef, forwardRef } from "react";

type SliderGeneralType = {
  slides: JSX.Element[];
};

const SliderGeneral = ({ slides }: SliderGeneralType, ref: LegacyRef<HTMLDivElement> | undefined) => {
  return (
    <div className="relative overflow-hidden">
      <div
        ref={ref}
        className="flex transition overflow-hidden"
        style={{
          scrollSnapType: "x mandatory",
        }}
      >
        {slides.map((text, index) => (
          <div key={index} className="h-96 relative min-w-full flex-shrink-0">
            {text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default forwardRef(SliderGeneral);
