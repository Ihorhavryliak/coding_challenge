import classNames from '@/app/utils/classNames';
import { memo } from 'react';

type TypeRoofType = {
  icon: JSX.Element;
  name: string;
  onClick?: () => void;
  isActive: boolean;
};

const TypeRoofItem = ({ icon, name, onClick, isActive }: TypeRoofType) => {
  return (
    <div
      className={classNames(
        isActive ? 'scale-95 transition-transform' : '',
        'group w-full',
      )}
    >
      <button
        className='round-[5px] flex h-[60px]  md:h-[220px] lg:h-[220px] xl:h-[220px] 2xl:h-[220px]    w-full  shadow-3xl md:block lg:block xl:block 2xl:block'
        onClick={onClick}
      >
        <div
          className={classNames(
            isActive
              ? 'border border-b-0 border-solid border-custom-blue-100'
              : 'transition-[border-color] duration-100',
            'flex justify-center rounded-t-md border-t-[0.1rem] bg-white py-[15.5px] group-hover:rounded-t-md  group-hover:border-[0.1rem] group-hover:border-b-0 group-hover:border-solid group-hover:border-custom-blue-100',
          )}
        >
          <span
            className={classNames(
              isActive
                && 'scale-105'
                , 'transition-transform duration-100 group-hover:scale-105 h-[60px] md:h-[108px] lg:h-[108px] xl:h-[108px] 2xl:h-[108px] w-[66.656px] md:w-[120px] lg:w-[120px] xl:w-[120px] 2xl:w-[120px]',
            )}
          >
            {icon}
          </span>
        </div>
        <div
          className={`${
            isActive ? 'bg-custom-blue-100' : 'bg-white'
          } rounded-b-md pb-12 pt-2 transition-all duration-300 group-hover:bg-custom-blue-100`}
        >
          <p
            className={classNames(
              isActive && 'translate-y-[20px] text-white',
              'font-scandia text-lg font-medium leading-6 text-custom-blue-100 transition-all duration-300 group-hover:translate-y-[20px] group-hover:text-white',
            )}
          >
            {name}
          </p>
        </div>
      </button>
    </div>
  );
};

export default memo(TypeRoofItem);
