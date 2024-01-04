import { RoofShapeType } from '@/app/hooks/useRoofShape';
import TypeRoofTextContainer from '../TypeRoofTextContainer/TypeRoofTextContainer';
import StepContainer from './StepContainer';
import { RoofDataType } from '@/app/hooks/useProgress';

type StepOneContainerType = {
  step: number;
  roofShapesData: RoofShapeType;
  nextStepSlider: () => void;
  roofData: RoofDataType;
  stepRightOrBack: string;
};

const StepOneContainer = ({
  step,
  roofShapesData,
  nextStepSlider,
  roofData,
  stepRightOrBack,
}: StepOneContainerType) => {
  return (
    <>
      <TypeRoofTextContainer />
      <StepContainer
        title='Kostenloser Solarstrom-Check in einer Minute.'
        isCurrentStep={step === 0}
        key={1}
        roofShapesData={roofShapesData}
        nextStepSlider={nextStepSlider}
        isButtonNext={!!roofData.roofShape.length && stepRightOrBack === 'back'}
      />
    </>
  );
};

export default StepOneContainer;
