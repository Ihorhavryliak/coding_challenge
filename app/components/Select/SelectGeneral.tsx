import classNames from '@/app/utils/classNames';

export type SelectOptionType = {
  id: string;
  value: string;
}

type SelectGeneralType = {
  onChange: (val: string) => void;
  onBlur: (val: string) => void;
  name: string;
  value: string;
  marginTop?: string;
  error?: string;
  width?: string;
  options: SelectOptionType[];
  placeholder?: string
  disabled?: boolean
};

const SelectGeneral = ({
  options,
  onChange,
  onBlur,
  name,
  value,
  marginTop,
  error,
  width,
  placeholder,
  disabled = false
}: SelectGeneralType) => {
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
        <span className='text-custom-red-100 text-[11.4px] font-medium leading-[19.2px]'>
          {error}
        </span>
      </div>
      <select
      disabled={disabled}
        className={classNames(
          classError,
          `${widthInput} block h-[46px] rounded-lg border py-1.5 pe-1.5 ps-4 font-scandia text-xl text-custom-gray-500 [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none`,
        )}
        onChange={(e) => onChange(e.target.value)}
        onBlur={(e) => onBlur(e.target.value)}
        value={value}
      >
         <option value=''  disabled selected>{placeholder}</option>
              {options.map((option) => {
          return (
            <option key={option.id} value={option.id}>
              {option.value}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default SelectGeneral;
