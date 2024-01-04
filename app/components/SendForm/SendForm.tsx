import useForm from '@/app/hooks/useForm';
import InputRadio from '../Inputs/InputRadio';
import InputGeneral from '../Inputs/InputGeneral';
import SelectGeneral from '../Select/SelectGeneral';
import { RoofDataType } from '@/app/hooks/useProgress';
import FormTopText from './FormTopText';
import ButtonForm from './ButtonForm';
import CongratulationText from './CongratulationText';

type SendFormType = {
  roofData: RoofDataType;
};

const SendForm = ({ roofData }: SendFormType) => {
  const { formData, isButtonSendDisabled, handleSendData, isSuccessSendData } =
    useForm({
      roofData,
    });
    
  return (
    <div>
      <FormTopText />

      <div className='flex justify-center '>
        <div className='w-full max-w-[430px] px-2.5 py-2.5 md:px-0 lg:px-0 xl:px-0 2xl:px-0'>
          {formData.map((item) => {
            if (item.type === 'radio') {
              return (
                <div key={item.id}>
                  <div className='mt-[9.91px] font-scandia text-sm font-medium leading-5 text-custom-gray-100'>
                    {item.name} <span>{item.error}</span>
                  </div>
                  <div>
                    <div className='flex gap-[38px]'>
                      {item.radio?.map(
                        ({ name, id, onChange, value, checked }) => {
                          return (
                            <InputRadio
                              key={id}
                              name={name}
                              onChange={onChange}
                              value={value}
                              checked={checked}
                            />
                          );
                        },
                      )}
                    </div>
                  </div>
                </div>
              );
            }
            if (item.type === 'double') {
              return (
                <div
                  key={item.id}
                  className='flex flex-col gap-2.5 md:flex-row lg:flex-row xl:flex-row 2xl:flex-row'
                >
                  {item?.inputs?.map(
                    ({
                      error,
                      id,
                      name,
                      onChange,
                      type,
                      value,
                      marginTop,
                      onBlur,
                      width,
                      placeholder,
                      disabled,
                    }) => {
                      return (
                        <InputGeneral
                          error={error}
                          key={id}
                          type={type}
                          name={name}
                          onChange={onChange}
                          onBlur={onBlur}
                          value={value || ''}
                          marginTop={marginTop}
                          width={width}
                          placeholder={placeholder}
                          disabled={disabled}
                        />
                      );
                    },
                  )}
                </div>
              );
            }
            if (item.type === 'select') {
              return (
                <SelectGeneral
                  key={item.id}
                  name={item.name || ''}
                  onChange={item.onChange as (val: string) => void}
                  value={item.value || ''}
                  marginTop={item.marginTop}
                  error={item.error}
                  onBlur={item.onBlur as (val: string) => void}
                  options={(item?.options as []) || []}
                  placeholder={item.placeholder}
                  disabled={item.disabled}
                />
              );
            }

            return (
              <InputGeneral
                type={item.type}
                key={item.id}
                name={item.name || ''}
                onChange={item.onChange as (val: string) => void}
                value={item.value || ''}
                marginTop={item.marginTop}
                error={item.error}
                onBlur={item.onBlur as (val: string) => void}
                placeholder={item.placeholder}
                disabled={item.disabled}
              />
            );
          })}

          <ButtonForm
            handleSendData={handleSendData}
            isButtonSendDisabled={isButtonSendDisabled}
          />
          {isSuccessSendData && <CongratulationText />}
        </div>
      </div>
    </div>
  );
};

export default SendForm;
