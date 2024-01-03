import Back from '../Icons/Back';

type ButtonBackIconType = {
  onClick: () => void;
};

const ButtonBackIcon = ({ onClick }: ButtonBackIconType) => {
  return (
    <button className='flex items-center' onClick={onClick}>
      <Back />
      <span className='m-small leading-lg-custom  font-scandia text-sm font-medium text-custom-gray-100'>
        Zurück
      </span>
    </button>
  );
};

export default ButtonBackIcon;
