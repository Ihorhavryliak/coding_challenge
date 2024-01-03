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
    <div className={classNames(isActive ? 'scale-95 transition-transform' : '', 'group w-full')}>
      <button
        className='round-[5px] shadow-3xl h-[220px] w-full'
        onClick={onClick}
      >
        <div
          className={`${
            isActive
              ? 'border border-b-0 border-solid border-custom-blue-100'
              : 'transition-[border-color] duration-100 '
          } flex justify-center rounded-t-md border-t-[0.1rem] bg-white py-[15.5px] group-hover:rounded-t-md  group-hover:border-[0.1rem] group-hover:border-b-0 group-hover:border-solid group-hover:border-custom-blue-100`}
        >
          <span
            className={`${
              isActive
                ? 'scale-105'
                : 'transition-transform duration-100 group-hover:scale-105'
            } `}
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
            className={`${
              isActive && 'translate-y-[20px] bg-custom-blue-100 text-white'
            } font-scandia text-lg font-medium leading-6 text-custom-blue-100 transition-all duration-300 group-hover:translate-y-[20px] group-hover:text-white`}
          >
            {name}
          </p>
        </div>
      </button>
    </div>
  );
};

export default memo(TypeRoofItem);
