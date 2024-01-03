import { RoofShapeType } from '@/app/hooks/useRoofShape';
import TypeRoofTextContainer from '../TypeRoofTextContainer/TypeRoofTextContainer';
import StepContainer from './StepContainer';
import { DataSendType } from '@/app/hooks/useProgress';

 type StepOneContainerType = {
  step: number;
  roofShapesData: RoofShapeType;
  nextStepSlider: () => void;
  dataSend: DataSendType;
  stepRightOrBack: string;
};

const StepOneContainer = ({
  step,
  roofShapesData,
  nextStepSlider,
  dataSend,
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
        isButtonNext={!!dataSend.roofShape.length && stepRightOrBack === 'back'}
      />
    </>
  );
};

export default StepOneContainer;
