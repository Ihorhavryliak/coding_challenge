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
  step: number;
};

const StepContainer = ({
  isCurrentStep,
  roofShapesData,
  title,
  previousSlide,
  isButton,
  nextStepSlider,
  isButtonNext,
  step,
}: StepContainerType) => {
  return (
    <div className='relative top-[-5px] inline-flex w-full justify-center'>
      <div className='w-full'>
        <div
          className={`${
            isCurrentStep ? 'opacity-100' : 'opacity-40'
          } transition-all duration-700 `}
        >
          <StepTitle title={title} />
          <div className='flex flex-col justify-center gap-2.5 px-2.5 md:flex-row md:gap-5 lg:flex-row lg:gap-5 lg:px-10 xl:flex-row xl:gap-5 xl:px-10 2xl:flex-row 2xl:gap-5 2xl:px-10'>
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
          <div className='ml-6 mt-6 flex items-center justify-between py-2.5 pe-6 ps-4 md:ml-12 md:pe-12 lg:ml-12 lg:pe-12 xl:ml-12 xl:pe-12 2xl:ml-12 2xl:pe-12'>
            <ButtonBackStep
              isButton={isButton}
              isCurrentStep={isCurrentStep}
              previousSlide={previousSlide}
            />
            {step === 0 && (
              <ButtonNextStep
                isButtonNext={isButtonNext}
                nextStepSlider={nextStepSlider}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepContainer;
