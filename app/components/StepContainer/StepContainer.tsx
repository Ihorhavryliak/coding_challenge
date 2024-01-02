import React from 'react';
import TypeRoofContainer from '../TypeRoof/TypeRoofContainer';
import { RoofShapeType } from '@/app/hooks/useRoofShape';
import ButtonBackIcon from '../Buttons/ButtonBackIcon';

type StepContainerType = {
  roofShapesData: RoofShapeType;
  isCurrentStep: boolean;
  title: string;
  previousSlide?: () => void;
  isButton?: boolean;
};

const StepContainer = ({
  isCurrentStep,
  roofShapesData,
  title,
  previousSlide,
  isButton,
}: StepContainerType) => {
  return (
    <div
      key={1}
      className={`${
        isCurrentStep ? 'opacity-100' : 'opacity-50'
      } transition-all duration-300 `}
    >
      <div
        className={
          'leading-md-custom mt-5 pb-5 font-scandia text-xl font-medium text-custom-blue-100'
        }
      >
        {title}
      </div>
      <div className='flex justify-center gap-5 px-10'>
        {roofShapesData.map((roofShape, index) => {
          return (
            <TypeRoofContainer
              key={index}
              onClick={roofShape.onClick}
              name={roofShape.name}
              icon={roofShape.icon}
              isActive={roofShape.isActive}
            />
          );
        })}
      </div>
      <div className='ml-12 mt-6 px-4 py-2.5'>
        {isCurrentStep && isButton && previousSlide && (
          <ButtonBackIcon onClick={previousSlide} />
        )}
      </div>
    </div>
  );
};

export default StepContainer;
