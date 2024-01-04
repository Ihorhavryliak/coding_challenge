import { useCallback, useRef, useState } from 'react';

export type RoofDataType = {
  roofShape: string;
  skyLight: string;
};

const duration = 500;
const back = 'back';
const next = 'right';
const delayDurationSelectCart = 200;

export const useProgress = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [numberPercentLoad, setNumberPercentLoad] = useState(10);
  const [step, setStep] = useState(0);
  const [stepRightOrBack, setStepRightOrBack] = useState('');
  const [roofData, setRoofData] = useState({
    roofShape: '',
    skyLight: '',
  } as RoofDataType);

  const previousSlide = useCallback((stepPercent: number) => {
    setStepRightOrBack(back);
    setStep((prev) => prev - 1);
    setNumberPercentLoad((prev) => prev - stepPercent);
    // Scroll to the previous slide with a slow transition
    setTimeout(() => {
      if (containerRef.current) {
        const scrollAmount = -containerRef.current.clientWidth;
        smoothScroll(containerRef?.current, scrollAmount, duration);
      }
    }, delayDurationSelectCart);
  }, []);

  const nextSlide = useCallback(
    (name: string, field: string, stepPercent: number) => {
      setStepRightOrBack(next);
      setStep((prev) => prev + 1);
      setNumberPercentLoad((prev) => prev + stepPercent);
      setRoofData((prev) => {
        return { ...prev, [field]: name };
      });
      // Scroll to the next slide with a slow transition
      setTimeout(() => {
        if (containerRef.current) {
          const scrollAmount = containerRef.current.clientWidth;
          smoothScroll(containerRef?.current, scrollAmount, duration);
        }
      }, delayDurationSelectCart);
    },
    [],
  );
  const nextStepSlider = useCallback((stepPercent: number) => {
    setStepRightOrBack(next);
    setStep((prev) => prev + 1);
    setNumberPercentLoad((prev) => prev + stepPercent);
    setTimeout(() => {
      if (containerRef.current) {
        const scrollAmount = containerRef.current.clientWidth;
        smoothScroll(containerRef?.current, scrollAmount, duration);
      }
    }, delayDurationSelectCart);
  }, []);
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

  return {
    previousSlide,
    nextSlide,
    roofData,
    numberPercentLoad,
    containerRef,
    step,
    nextStepSlider,
    stepRightOrBack,
  };
};
