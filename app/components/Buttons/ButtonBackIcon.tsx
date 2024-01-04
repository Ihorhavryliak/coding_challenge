import Back from '../Icons/Back';

type ButtonBackIconType = {
  onClick: () => void;
};

const ButtonBackIcon = ({ onClick }: ButtonBackIconType) => {
  return (
    <button className='flex items-center' onClick={onClick}>
      <Back />
      <span className='ml-[3px] font-scandia  text-sm font-medium leading-[44px] text-custom-gray-100'>
        Zurück
      </span>
    </button>
  );
};

export default ButtonBackIcon;
