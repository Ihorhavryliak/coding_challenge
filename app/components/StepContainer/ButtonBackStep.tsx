import React from 'react';
import ButtonBackIcon from '../Buttons/ButtonBackIcon';

type ButtonBackStepType = {
  isCurrentStep: boolean;
  isButton?: boolean;
  previousSlide?: () => void;
};

const ButtonBackStep = ({
  isCurrentStep,
  isButton,
  previousSlide,
}: ButtonBackStepType) => {

  return (
    <div>
      {isCurrentStep && isButton && previousSlide && (
        <ButtonBackIcon onClick={previousSlide} />
      )}
    </div>
  );
};

export default ButtonBackStep;
