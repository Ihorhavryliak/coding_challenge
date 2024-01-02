'use client';
import { useState, useRef } from 'react';
import SliderGeneral from './components/Slider/SliderGeneral';
import './globals.css';
import Check from './components/Icons/Check';
import useRoofShape from './hooks/useRoofShape';
import RoofShape from './components/StepContainer/StepContainer';
import useSkyLight from './hooks/useSkyLight';
import StepContainer from './components/StepContainer/StepContainer';

export type DataSendType = {
  roofShape: string;
  skyLight: string;
};

export default function Home() {
  const [numberPercentLoad, setNumberPercentLoad] = useState(10);
  const [step, setStep] = useState(0);
  const [dataSend, setDataSend] = useState({
    roofShape: '',
    skyLight: '',
  } as DataSendType);

  const stepPercent = 40;
  const duration = 500;
  const containerRef = useRef<HTMLDivElement | null>(null);
  const previousSlide = () => {
    setStep((prev) => prev - 1);
    setNumberPercentLoad((prev) => prev - stepPercent);
    // Scroll to the previous slide with a slow transition
    if (containerRef.current) {
      const scrollAmount = -containerRef.current.clientWidth;
      smoothScroll(containerRef.current, scrollAmount, duration);
    }
  };

  const nextSlide = (name: string, field: string) => {
    setStep((prev) => prev + 1);
    setNumberPercentLoad((prev) => prev + stepPercent);
    setDataSend((prev) => {
      return { ...prev, [field]: name };
    });
    // Scroll to the next slide with a slow transition
    if (containerRef.current) {
      const scrollAmount = containerRef.current.clientWidth;
      smoothScroll(containerRef.current, scrollAmount, duration);
    }
  };

  // Function for smooth scrolling
  const smoothScroll = (
    element: HTMLElement,
    scrollAmount: number,
    duration: number,
  ) => {
    const startTime = performance.now();
    const startScrollLeft = element.scrollLeft;

    const scroll = (currentTime: number) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);

      element.scrollLeft = startScrollLeft + progress * scrollAmount;

      if (progress < 1) {
        requestAnimationFrame(scroll);
      }
    };
    requestAnimationFrame(scroll);
  };

  const roofShapesData = useRoofShape({ nextSlide, dataSend });
  const skyLightData = useSkyLight({ nextSlide, dataSend });
  const slides = [
    <StepContainer
      title='Kostenloser Solarstrom-Check in einer Minute.'
      isCurrentStep={step === 0}
      key={1}
      roofShapesData={roofShapesData}
    />,
    <StepContainer
      title='Besitzt Ihr Haus Gauben oder Dachfenster?'
      isCurrentStep={step === 1}
      key={2}
      roofShapesData={skyLightData}
      isButton={true}
      previousSlide={previousSlide}
    />,
    <div
      key={3}
      className={`${
        step === 3 ? 'opacity-100' : 'opacity-50'
      } transition-all duration-300 `}
    ></div>,
  ];

  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <div className='z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex'>
        <div className='w-full'>
          <div>
            <div>
              {/* progress */}
              <div className='h-3'>
                <div className=' bg-stroke bg-progress-empty relative h-1 w-full rounded-[8px]'>
                  <span
                    className='progress-text relative -top-6 bottom-full -ml-8 h-1   font-scandia text-xs font-medium leading-5 transition-all duration-500 ease-out'
                    style={{ left: `${numberPercentLoad}%` }}
                  >
                    {numberPercentLoad} % geschafft
                  </span>
                  <div
                    className='bg-progress absolute left-0 top-0 h-full rounded-[8px] transition-all duration-500 ease-out'
                    style={{ width: `${numberPercentLoad}%` }}
                  >
                    <span className=' absolute -right-4 bottom-full -mb-3 rounded-sm  text-sm text-white'>
                      <Check />
                    </span>
                  </div>
                </div>{' '}
              </div>
              {/* text */}

              {/* second text */}
              <p
                className={
                  'leading-mda-custom mt-md-custom col-span-10 mb-2 font-scandia text-sm font-medium text-custom-gray-100'
                }
              >
                Welche Dachform hat Ihr Haus?
              </p>
              {/* list chose */}
              <SliderGeneral slides={slides} ref={containerRef} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
