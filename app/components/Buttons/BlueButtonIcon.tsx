import Right from '../Icons/Right';

type BlueButtonIconType = {
  onClick: () => void;
  title: string;
};

const BlueButtonIcon = ({ onClick, title }: BlueButtonIconType) => {
  return (
    <button
      className='bg-custom-blue-300 flex cursor-pointer items-center gap-[0.2rem] px-12 text-sm leading-[2.75rem] rounded-[5px]'
      onClick={onClick}
    >
      <span className='ml-[3px] leading-[44px]  font-scandia text-sm  font-medium text-white'>
        {title}
      </span>
      <span className='text-white'>
      <Right />
      </span>
    </button>
  );
};

export default BlueButtonIcon;
