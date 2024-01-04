import classNames from '@/app/utils/classNames';
import React from 'react';

type CartIconBoxType = {
  isActive: boolean;
  icon: JSX.Element;
};

const CartIconBox = ({ isActive, icon }: CartIconBoxType) => {
  return (
    <div
      className={classNames(
        isActive
          ? 'border border-b-0 border-solid border-custom-blue-100 '
          : 'transition-[border-color] duration-100 md:border-white lg:border-white xl:border-white 2xl:border-white',
        'flex justify-center rounded-bl-[5px] rounded-tl-[5px]   rounded-tr-[0] border-0 bg-white py-0 group-hover:rounded-t-md group-hover:border-0 group-hover:border-b-0 group-hover:border-solid  group-hover:border-custom-blue-100 md:rounded-bl-[0] md:rounded-tl-md md:rounded-tr-md md:border-[0.1rem] md:border-b-0 md:py-[15.5px] md:group-hover:border-[0.1rem] md:group-hover:border-b-0 lg:rounded-bl-[0] lg:rounded-tl-md lg:rounded-tr-md lg:border-[0.1rem] lg:border-b-0 lg:py-[15.5px] lg:group-hover:border-[0.1rem] lg:group-hover:border-b-0 xl:rounded-bl-[0] xl:rounded-tl-md xl:rounded-tr-md xl:border-[0.1rem] xl:border-b-0 xl:py-[15.5px] xl:group-hover:border-[0.1rem] xl:group-hover:border-b-0 2xl:rounded-bl-[0] 2xl:rounded-tl-md 2xl:rounded-tr-md 2xl:border-[0.1rem] 2xl:border-b-0 2xl:py-[15.5px] 2xl:group-hover:border-[0.1rem] 2xl:group-hover:border-b-0 ',
      )}
    >
      <span
        className={classNames(
          isActive && 'md:scale-105 lg:scale-105 xl:scale-105 2xl:scale-105',
          'h-[56px] w-[66.656px] transition-transform duration-100 md:h-[108px] md:w-[120px] md:group-hover:scale-105 lg:h-[108px] lg:w-[120px] lg:group-hover:group-hover:scale-105 xl:h-[108px] xl:w-[120px] xl:group-hover:scale-105 2xl:h-[108px] 2xl:w-[120px] 2xl:group-hover:scale-105',
        )}
      >
        {icon}
      </span>
    </div>
  );
};

export default CartIconBox;
