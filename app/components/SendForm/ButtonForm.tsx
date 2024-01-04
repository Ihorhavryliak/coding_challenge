import React from 'react';
import ButtonGeneral from '../Buttons/ButtonGeneral';
type ButtonFormType = {
  isButtonSendDisabled: boolean;
  handleSendData: () => void;
};
const ButtonForm = ({
  isButtonSendDisabled,
  handleSendData,
}: ButtonFormType) => {
  return (
    <div className='mt-[13.85px]'>
      <ButtonGeneral
        disabled={isButtonSendDisabled}
        title='Ja, das ist mein Hausdach.'
        onClick={handleSendData}
      />
    </div>
  );
};

export default ButtonForm;
