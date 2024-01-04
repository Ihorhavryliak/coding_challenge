'use client';
import classNames from '@/app/utils/classNames';
import Check from '../Icons/Check';

type ProgressType = {
  numberPercentLoad: number;
  step: number;
};
const Progress = ({ numberPercentLoad, step }: ProgressType) => {
  return (
    <div className='h-1 px-2.5 lg:px-10 xl:px-10 2xl:px-10'>
      <div className='bg-stroke relative h-1 w-full rounded-[8px] bg-custom-green-100'>
        <div
          className={classNames(
            step === 2 &&
              'ml-[-110px] w-full text-white md:ml-[-85px] lg:ml-[-85px] xl:ml-[-85px] 2xl:ml-[-85px]',
            'absolute bottom-full top-[-30px] -ml-8 h-5 font-scandia text-xs font-medium leading-5 text-custom-gray-100 transition-all duration-[700ms] ease-out',
          )}
          style={{
            left: `${step === 2 ? numberPercentLoad : numberPercentLoad}%`,
          }}
        >
          {numberPercentLoad}{' '}
          {step === 2 ? '% - Fast geschafft!' : '% geschafft'}
        </div>
        <div
          className='absolute left-0 top-0 h-full rounded-[8px] bg-custom-brand-color-green transition-all duration-[700ms] ease-out'
          style={{ width: `${numberPercentLoad}%` }}
        >
          <span className='absolute -right-4 bottom-full -mb-3 rounded-sm  text-sm text-white'>
            <Check />
          </span>
        </div>
      </div>
    </div>
  );
};
export default Progress;
