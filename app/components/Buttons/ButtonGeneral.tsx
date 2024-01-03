import classNames from '@/app/utils/classNames';
import React from 'react';

type ButtonGeneralType = {
  onClick: () => void;
  title: string;
  disabled?: boolean;
};

const ButtonGeneral = ({
  onClick,
  title,
  disabled = false,
}: ButtonGeneralType) => {
  const classDisabled = disabled ? 'opacity-50' : 'opacity-100';

  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={classNames(
        classDisabled,
        'bg-custom-brand-color-green w-full cursor-pointer rounded-[32px] pb-[17px] pt-[16.5px]',
      )}
    >
      <span className=' text-custom-color-neutral-900 h-[22.5px] font-scandia text-base font-medium'>
        {title}
      </span>
    </button>
  );
};

export default ButtonGeneral;
