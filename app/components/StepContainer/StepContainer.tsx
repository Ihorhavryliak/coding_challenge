import React from 'react';
import TypeRoofContainer from '../TypeRoof/TypeRoofContainer';
import { RoofShapeType } from '@/app/hooks/useRoofShape';
import ButtonBackIcon from '../Buttons/ButtonBackIcon';
import BlueButton from '../Buttons/BlueButtonIcon';

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
      <div
        className={
          'mt-[7.89px] pb-5 font-scandia text-xl font-medium leading-[22px] text-custom-blue-100'
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
      <div className='ml-12 mt-6 flex items-center justify-between py-2.5 pe-12 ps-4'>
        <div>
          {isCurrentStep && isButton && previousSlide && (
            <ButtonBackIcon onClick={previousSlide} />
          )}
        </div>
        <div className='float-right'>
          {isButtonNext && (
            <BlueButton title='Weiter' onClick={nextStepSlider} />
          )}
        </div>
      </div>
    </div>
  );
};

export default StepContainer;
