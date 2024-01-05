import classNames from '@/app/utils/classNames';
import StepTextContainer from '../StepContainer/StepTextContainer';
import StepOneContainer from '../StepContainer/StepOneContainer';
import StepTwoContainer from '../StepContainer/StepTwoContainer';
import SendForm from '../SendForm/SendForm';
import { RoofShapeType } from '@/app/hooks/useSkyLight';
import { RoofDataType } from '@/app/hooks/useProgress';

type CarouselContainerType = {
  step: number;
  nextStepSlider: (val: number) => void;
  roofShapesData: RoofShapeType;
  roofData: RoofDataType;
  skyLightData: RoofShapeType;
  stepRightOrBack: string;

  previousSlide: (val: number) => void;
};
const CarouselContainer = ({
  step,
  nextStepSlider,
  roofShapesData,
  roofData,
  stepRightOrBack,
  skyLightData,
  previousSlide,
}: CarouselContainerType) => {
  return (
    <div className='overflow-hidden bg-custom-gray-200'>
      <div
        className={classNames(
          step === 2 &&
            'h-0 overflow-hidden opacity-0 transition-all duration-500 ease-in-out',
        )}
      >
        <StepTextContainer />
      </div>
      <div
        className='whitespace-nowrap  transition-transform duration-[900ms]'
        style={{ transform: `translate(${step * 100 * -1}%)` }}
      >
        <StepOneContainer
          key={1}
          step={step}
          roofShapesData={roofShapesData}
          nextStepSlider={() => nextStepSlider(40)}
          roofData={roofData}
          stepRightOrBack={stepRightOrBack}
        />
        <StepTwoContainer
          key={2}
          step={step}
          skyLightData={skyLightData}
          nextStepSlider={() => nextStepSlider(45)}
          roofData={roofData}
          previousSlide={() => previousSlide(40)}
        />
        <div className='relative top-[-5px] inline-flex w-full justify-center'>
          <SendForm key={3} roofData={roofData} />
        </div>
      </div>
    </div>
  );
};

export default CarouselContainer;
