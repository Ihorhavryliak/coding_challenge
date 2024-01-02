'use client';
import Check from '../Icons/Check';

type ProgressType = {
  numberPercentLoad: number;
};
const Progress = ({ numberPercentLoad }: ProgressType) => {
  return (
    <div className='h-1'>
      <div className=' bg-stroke bg-progress-empty relative h-1 w-full rounded-[8px]'>
        <span
          className='progress-text relative -top-6 bottom-full -ml-8 h-1   font-scandia text-xs font-medium leading-5 transition-all duration-500 ease-out'
          style={{ left: `${numberPercentLoad}%` }}
        >
          {numberPercentLoad} % geschafft
        </span>
        <div
          className='bg-progress absolute left-0 top-0 h-full rounded-[8px] transition-all duration-500 ease-out'
          style={{ width: `${numberPercentLoad}%` }}
        >
          <span className=' absolute -right-4 bottom-full -mb-3 rounded-sm  text-sm text-white'>
            <Check />
          </span>
        </div>
      </div>
    </div>
  );
};
export default Progress;
