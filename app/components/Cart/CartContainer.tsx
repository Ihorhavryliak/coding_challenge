import classNames from '@/app/utils/classNames';
import { memo } from 'react';
import CartNameBox from './CartNameBox';
import CartIconBox from './CartIconBox';

type CartContainerType = {
  icon: JSX.Element;
  name: string;
  onClick?: () => void;
  isActive: boolean;
};

const CartContainer = ({
  icon,
  name,
  onClick,
  isActive,
}: CartContainerType) => {
  
  return (
    <div
      className={classNames(
        isActive ? 'scale-95 transition-transform' : '',
        'group w-full',
      )}
    >
      <button
        className={classNames(
          isActive
            ? 'border-2 border-custom-blue-100 md:border-0 lg:border-0 xl:border-0 2xl:border-0'
            : 'border-white',
          'box-border flex h-[60px] w-full rounded-bl-[5px] rounded-br-[5px] rounded-tl-[5px] rounded-tr-[5px] border-2 shadow-3xl transition-[border] duration-100 ease-out hover:border-2 hover:border-custom-blue-100 md:block md:h-[220px] md:rounded-bl-md md:rounded-br-md md:rounded-tl-md md:rounded-tr-md md:border-0 md:hover:border-0 lg:block lg:h-[220px] lg:rounded-bl-md lg:rounded-br-md lg:rounded-tl-md lg:rounded-tr-md lg:border-0 lg:hover:border-0 xl:block xl:h-[220px] xl:rounded-bl-md xl:rounded-br-md xl:rounded-tl-md xl:rounded-tr-md xl:border-0 xl:hover:border-0 2xl:block 2xl:h-[220px] 2xl:rounded-bl-md 2xl:rounded-br-md  2xl:rounded-tl-md 2xl:rounded-tr-md 2xl:border-0 2xl:hover:border-0',
        )}
        onClick={onClick}
      >
        <CartIconBox isActive={isActive} icon={icon} />
        <CartNameBox isActive={isActive} name={name} />
      </button>
    </div>
  );
};

export default memo(CartContainer);
