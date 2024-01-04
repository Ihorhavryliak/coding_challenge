import React from 'react';
import TypeRoofTextContainer from '../TypeRoofTextContainer/TypeRoofTextContainer';
import StepContainer from './StepContainer';
import { RoofShapeType } from '@/app/hooks/useRoofShape';
import { RoofDataType } from '@/app/hooks/useProgress';

type StepTwoContainerType = {
  step: number;
  skyLightData: RoofShapeType;
  previousSlide: () => void;
  nextStepSlider: () => void;
  roofData: RoofDataType;
};

const StepTwoContainer = ({
  step,
  skyLightData,
  previousSlide,
  roofData,
  nextStepSlider,
}: StepTwoContainerType) => {
  
  return (
    <>
      <TypeRoofTextContainer />
      <StepContainer
        title='Besitzt Ihr Haus Gauben oder Dachfenster?'
        isCurrentStep={step === 1}
        key={2}
        roofShapesData={skyLightData}
        isButton={true}
        isButtonNext={!!roofData.skyLight.length}
        previousSlide={previousSlide}
        nextStepSlider={nextStepSlider}
      />
    </>
  );
};

export default StepTwoContainer;
