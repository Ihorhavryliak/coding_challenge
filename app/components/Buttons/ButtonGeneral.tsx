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
        'w-full cursor-pointer rounded-[32px] bg-custom-brand-color-green pb-[17px] pt-[16.5px]',
      )}
    >
      <span className=' h-[22.5px] font-scandia text-base font-medium text-custom-color-neutral-900'>
        {title}
      </span>
    </button>
  );
};

export default ButtonGeneral;
