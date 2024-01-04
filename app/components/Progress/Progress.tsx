'use client';
import Check from '../Icons/Check';

type ProgressType = {
  numberPercentLoad: number;
};
const Progress = ({ numberPercentLoad }: ProgressType) => {
  return (
    <div className='h-1 px-2.5 lg:px-10 xl:px-10 2xl:px-10'>
      <div className='bg-stroke bg-custom-green-100 relative h-1 w-full rounded-[8px]'>
        <div
          className='text-custom-gray-100 relative bottom-full -ml-8 font-scandia text-xs font-medium leading-5 transition-all duration-[700ms] ease-out top-[-30px] h-5'
          style={{ left: `${numberPercentLoad}%` }}
        >
          {numberPercentLoad} % geschafft
        </div>
        <div
          className='bg-custom-brand-color-green absolute left-0 top-0 h-full rounded-[8px] transition-all duration-[700ms] ease-out'
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
