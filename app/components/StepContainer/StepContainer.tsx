import React from 'react';
import TypeRoofCartContainer from '../Cart/CartContainer';
import { RoofShapeType } from '@/app/hooks/useRoofShape';
import ButtonNextStep from './ButtonNextStep';
import ButtonBackStep from './ButtonBackStep';
import StepTitle from './StepTitle';

type StepContainerType = {
  roofShapesData: RoofShapeType;
  isCurrentStep: boolean;
  title: string;
  previousSlide?: () => void;
  isButton?: boolean;
  nextStepSlider: () => void;
  isButtonNext?: boolean;
};

const StepContainer = ({
  isCurrentStep,
  roofShapesData,
  title,
  previousSlide,
  isButton,
  nextStepSlider,
  isButtonNext,
}: StepContainerType) => {
  
  return (
    <div
      key={1}
      className={`${
        isCurrentStep ? 'opacity-100' : 'opacity-40'
      } transition-all duration-700 `}
    >
      <StepTitle title={title} />
      <div className='flex flex-col justify-center gap-5 px-2.5 md:flex-row lg:flex-row lg:px-10 xl:flex-row xl:px-10 2xl:flex-row 2xl:px-10'>
        {roofShapesData.map((roofShape, index) => {
          return (
            <TypeRoofCartContainer
              key={index}
              onClick={roofShape.onClick}
              name={roofShape.name}
              icon={roofShape.icon}
              isActive={roofShape.isActive}
            />
          );
        })}
      </div>
      <div className='ml-12 mt-6 flex items-center justify-between py-2.5 pe-12 ps-4'>
        <ButtonBackStep
          isButton={isButton}
          isCurrentStep={isCurrentStep}
          previousSlide={previousSlide}
        />
        <ButtonNextStep
          isButtonNext={isButtonNext}
          nextStepSlider={nextStepSlider}
        />
      </div>
    </div>
  );
};

export default StepContainer;
