import { useRef, useState } from 'react'
export type DataSendType = {
  roofShape: string;
  skyLight: string;
};

export const useProgress = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [numberPercentLoad, setNumberPercentLoad] = useState(10);
  const [step, setStep] = useState(0);
  const [stepRightOrBack, setStepRightOrBack] = useState('');
  const [dataSend, setDataSend] = useState({
    roofShape: '',
    skyLight: '',
  } as DataSendType);

  const stepPercent = 40;
  const duration = 500;
  const previousSlide = () => {
    setStepRightOrBack('back')
    setStep((prev) => prev - 1);
    setNumberPercentLoad((prev) => prev - stepPercent);
    // Scroll to the previous slide with a slow transition
    setTimeout(() => {
      if (containerRef.current) {
        const scrollAmount = -containerRef.current.clientWidth;
        smoothScroll(containerRef?.current, scrollAmount, duration);
      }
    }, 200);
  };

  const nextSlide = (name: string, field: string) => {
    setStepRightOrBack('right')
    setStep((prev) => prev + 1);
    setNumberPercentLoad((prev) => prev + stepPercent);
    setDataSend((prev) => {
      return { ...prev, [field]: name };
    });
    // Scroll to the next slide with a slow transition
    setTimeout(() => {
      if (containerRef.current) {
        const scrollAmount = containerRef.current.clientWidth;
        smoothScroll(containerRef?.current, scrollAmount, duration);
      }
    }, 200);
  };
  const nextStepSlider = () => {
    setStepRightOrBack('right')
    setStep((prev) => prev + 1);
    setNumberPercentLoad((prev) => prev + stepPercent);
    setTimeout(() => {
      if (containerRef.current) {
        const scrollAmount = containerRef.current.clientWidth;
        smoothScroll(containerRef?.current, scrollAmount, duration);
      }
    }, 200);
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

  return {previousSlide, nextSlide, dataSend, numberPercentLoad, containerRef, step, nextStepSlider, stepRightOrBack}
}