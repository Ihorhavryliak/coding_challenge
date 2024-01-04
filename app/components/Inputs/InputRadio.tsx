type InputRadioType = {
  onChange: (val: string) => void;
  name: string;
  value: string;
  checked: boolean;
};

const InputRadio = ({ onChange, name, value, checked }: InputRadioType) => {
  return (
    <div className='flex items-center'>
      <div className='flex  w-6 items-center'>
        <input
          className='h-[18px] w-[18px]'
          type='radio'
          onChange={(e) => onChange(e.target.value)}
          value={value}
          checked={checked}
        />
      </div>
      <div className='flex items-center font-scandia text-lg leading-5 text-custom-gray-300'>
        {name}
      </div>
    </div>
  );
};

export default InputRadio;
