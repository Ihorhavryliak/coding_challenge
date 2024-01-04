import Right from '../Icons/Right';

type BlueButtonIconType = {
  onClick: () => void;
  title: string;
};

const BlueButtonIcon = ({ onClick, title }: BlueButtonIconType) => {
  return (
    <button
      className='flex cursor-pointer items-center gap-[0.2rem] rounded-[5px] bg-custom-blue-300 px-12 text-sm leading-[2.75rem]'
      onClick={onClick}
    >
      <span className='ml-[3px] font-scandia  text-sm font-medium  leading-[44px] text-white'>
        {title}
      </span>
      <span className='text-white'>
        <Right />
      </span>
    </button>
  );
};

export default BlueButtonIcon;
