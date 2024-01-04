import classNames from '@/app/utils/classNames';

type InputGeneralType = {
  type: string;
  onChange: (val: string) => void;
  onBlur: (val: string) => void;
  name: string;
  value: string;
  marginTop?: string;
  error?: string;
  width?: string;
  placeholder?: string;
  disabled?: boolean;
};

const InputGeneral = ({
  type = 'text',
  onChange,
  name,
  value,
  marginTop,
  error,
  onBlur,
  width,
  placeholder,
  disabled = false,
}: InputGeneralType) => {
  const widthInput = width ? width : 'w-full';
  const classError = !!error?.length
    ? 'border-custom-red-100'
    : !!value.length
      ? 'border-custom-gray-400'
      : 'border-custom-gray-600';

  return (
    <div className={marginTop}>
      <div className='font-scandia text-sm font-medium leading-5 text-custom-gray-100'>
        {name}{' '}
        <span className='text-[11.4px] font-medium leading-[19.2px] text-custom-red-100'>
          {error}
        </span>
      </div>
      <input
        disabled={disabled}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        onBlur={(e) => onBlur(e.target.value)}
        value={value}
        type={type}
        className={classNames(
          classError,
          `${widthInput} block h-[46px] rounded-lg border py-1.5 pe-1.5 ps-4 font-scandia text-xl text-custom-gray-500 [appearance:textfield] disabled:bg-custom-gray-700 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none`,
        )}
      />
    </div>
  );
};

export default InputGeneral;
