import { useCallback, useState } from 'react';

export type RoofDataType = {
  roofShape: string;
  skyLight: string;
};

const back = 'back';
const next = 'right';

export const useProgress = () => {
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
  }, []);

  const nextSlide = useCallback(
    (name: string, field: string, stepPercent: number) => {
      setStepRightOrBack(next);
      setStep((prev) => prev + 1);
      setNumberPercentLoad((prev) => prev + stepPercent);
      setRoofData((prev) => {
        return { ...prev, [field]: name };
      });
    },
    [],
  );
  const nextStepSlider = useCallback((stepPercent: number) => {
    setStepRightOrBack(next);
    setStep((prev) => prev + 1);
    setNumberPercentLoad((prev) => prev + stepPercent);
  }, []);

  return {
    previousSlide,
    nextSlide,
    roofData,
    numberPercentLoad,
    step,
    nextStepSlider,
    stepRightOrBack,
  };
};
