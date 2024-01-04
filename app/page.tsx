'use client';
import SliderGeneral from './components/Slider/SliderGeneral';
import './globals.css';
import useRoofShape from './hooks/useRoofShape';
import useSkyLight from './hooks/useSkyLight';
import Progress from './components/Progress/Progress';
import { useProgress } from './hooks/useProgress';
import SendForm from './components/SendForm/SendForm';
import StepOneContainer from './components/StepContainer/StepOneContainer';
import StepTwoContainer from './components/StepContainer/StepTwoContainer';

export default function Home() {
  const {
    previousSlide,
    nextSlide,
    dataSend,
    numberPercentLoad,
    containerRef,
    step,
    nextStepSlider,
    stepRightOrBack,
  } = useProgress();
  const roofShapesData = useRoofShape({ nextSlide, dataSend });
  const skyLightData = useSkyLight({ nextSlide, dataSend });

  return (
    <main className='m-auto w-full max-w-[930px]'>
      <div className='relative overflow-hidden'>
        <div
          className={`${
            step === 2
              ? 'bg-custom-blue-200 pb-4 pt-11 transition-[background-color] duration-500 ease-in-out'
              : 'relative overflow-hidden py-10 pb-4 pt-11'
          } `}
        >
          <Progress step={step} numberPercentLoad={numberPercentLoad} />
        </div>

        <SliderGeneral
          slides={[
            <StepOneContainer
              key={1}
              step={step}
              roofShapesData={roofShapesData}
              nextStepSlider={()=>nextStepSlider(40)}
              dataSend={dataSend}
              stepRightOrBack={stepRightOrBack}
            />,
            <StepTwoContainer
              key={2}
              step={step}
              skyLightData={skyLightData}
              nextStepSlider={()=>nextStepSlider(45)}
              dataSend={dataSend}
              previousSlide={()=>previousSlide(40)}
            />,
            <SendForm key={3} />,
          ]}
          ref={containerRef}
        />
      </div>
    </main>
  );
}
