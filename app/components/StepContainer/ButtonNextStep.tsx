import React from 'react';
import BlueButtonIcon from '../Buttons/BlueButtonIcon';

type ButtonNextStepType = {
  nextStepSlider: () => void;
  isButtonNext?: boolean;
};

const ButtonNextStep = ({
  nextStepSlider,
  isButtonNext,
}: ButtonNextStepType) => {
  
  return (
    <div className='float-right'>
      {isButtonNext && (
        <BlueButtonIcon title='Weiter' onClick={nextStepSlider} />
      )}
    </div>
  );
};

export default ButtonNextStep;
