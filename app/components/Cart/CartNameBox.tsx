import classNames from '@/app/utils/classNames';
import React from 'react';
type CartNameBoxType = {
  isActive: boolean;
  name: string;
};
const CartNameBox = ({ isActive, name }: CartNameBoxType) => {
  return (
    <div
      className={classNames(
        isActive ? 'bg-custom-blue-100' : 'bg-white',
        'h-full w-full rounded-bl-[0] rounded-br-[5px] rounded-tr-[4px] pb-0 ps-[22.67px] pt-0 transition-all duration-300 group-hover:bg-custom-blue-100 md:h-auto md:w-auto md:rounded-bl-md md:rounded-br-md md:rounded-tr-[0] md:pb-12 md:ps-0 md:pt-2 lg:h-auto lg:w-auto lg:rounded-bl-md lg:rounded-br-md lg:pb-12 lg:ps-0 lg:pt-2 xl:h-auto xl:w-auto xl:rounded-bl-md xl:rounded-br-md xl:rounded-tr-[0] xl:pb-12 xl:ps-0 xl:pt-2 2xl:h-auto 2xl:w-auto 2xl:rounded-bl-md 2xl:rounded-br-md 2xl:rounded-tr-[0] 2xl:pb-12 2xl:ps-0 2xl:pt-2',
      )}
    >
      <p
        className={classNames(
          isActive
            ? 'translate-y-[17px] text-white md:translate-y-[20px] lg:translate-y-[20px] xl:translate-y-[20px] 2xl:translate-y-[20px]'
            : 'translate-y-[17px] md:translate-y-0 lg:translate-y-0 xl:translate-y-0 2xl:translate-y-0',
          'float-left font-scandia text-lg font-medium leading-6 text-custom-blue-100 transition-all duration-300 group-hover:translate-y-[17px] group-hover:text-white md:float-none md:group-hover:translate-y-[20px] lg:float-none lg:group-hover:translate-y-[20px] xl:float-none xl:group-hover:translate-y-[20px] 2xl:float-none 2xl:group-hover:translate-y-[20px]',
        )}
      >
        {name}
      </p>
    </div>
  );
};

export default CartNameBox;
