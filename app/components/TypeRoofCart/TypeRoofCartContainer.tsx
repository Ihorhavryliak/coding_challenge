import classNames from '@/app/utils/classNames';
import { memo } from 'react';

type TypeRoofCartContainerType = {
  icon: JSX.Element;
  name: string;
  onClick?: () => void;
  isActive: boolean;
};

const TypeRoofCartContainer = ({
  icon,
  name,
  onClick,
  isActive,
}: TypeRoofCartContainerType) => {
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
              isActive &&
                'md:scale-105 lg:scale-105 xl:scale-105 2xl:scale-105',
              'h-[56px] w-[66.656px] transition-transform duration-100 md:h-[108px] md:w-[120px] md:group-hover:scale-105 lg:h-[108px] lg:w-[120px] lg:group-hover:group-hover:scale-105 xl:h-[108px] xl:w-[120px] xl:group-hover:scale-105 2xl:h-[108px] 2xl:w-[120px] 2xl:group-hover:scale-105',
            )}
          >
            {icon}
          </span>
        </div>
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
      </button>
    </div>
  );
};

export default memo(TypeRoofCartContainer);
