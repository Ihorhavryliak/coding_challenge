'use client';
import './globals.css';
import useRoofShape from './hooks/useRoofShape';
import useSkyLight from './hooks/useSkyLight';
import Progress from './components/Progress/Progress';
import { useProgress } from './hooks/useProgress';
import classNames from './utils/classNames';
import CarouselContainer from './components/Carousel/CarouselContainer';

export default function Home() {
  const {
    previousSlide,
    nextSlide,
    roofData,
    numberPercentLoad,
    step,
    nextStepSlider,
    stepRightOrBack,
  } = useProgress();
  const roofShapesData = useRoofShape({ nextSlide, roofData });
  const skyLightData = useSkyLight({ nextSlide, roofData });

  return (
    <main className='m-auto w-full max-w-[930px]'>
      <div
        className={classNames(
          step === 2
            ? 'relative overflow-hidden bg-custom-blue-200 pb-4 pt-11 transition-[background-color] duration-500 ease-in-out'
            : 'relative overflow-hidden bg-custom-gray-200 py-10 pb-4 pt-11',
        )}
      >
        <Progress step={step} numberPercentLoad={numberPercentLoad} />
      </div>
      <CarouselContainer
        nextStepSlider={nextStepSlider}
        previousSlide={previousSlide}
        roofData={roofData}
        roofShapesData={roofShapesData}
        skyLightData={skyLightData}
        step={step}
        stepRightOrBack={stepRightOrBack}
      />
    </main>
  );
}
