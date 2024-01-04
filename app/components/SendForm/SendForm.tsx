import useForm from '@/app/hooks/useForm';
import InputRadio from '../Inputs/InputRadio';
import InputGeneral from '../Inputs/InputGeneral';
import SelectGeneral from '../Select/SelectGeneral';
import ButtonGeneral from '../Buttons/ButtonGeneral';

const SendForm = () => {
  const { formData, isButtonSendDisabled } = useForm();
  return (
    <div>
      <div className='flex flex-col items-center bg-custom-blue-200 transition-[background-color] duration-500 ease-in-out'>
        <p className='pt-5 font-scandia text-sm font-medium text-white'>
          Eine Solaranlage spart Ihnen ca.
        </p>
        <p className='pb-[38px] pt-2.5 font-scandia text-xl font-medium text-white'>
          25.000 - 30.000 € Stromkosten
        </p>
      </div>
      <div className='mt-4 flex w-full justify-center'>
        <p className='w-[666px]  px-2.5 text-center font-scandia text-lg font-medium leading-6 text-custom-blue-200  md:px-0  lg:px-0 xl:px-0 2xl:px-0 '>
          Gratulation, das Angebot ist in Ihrer Region noch verfügbar! Wir
          senden Ihnen gerne kostenlose Informationen zu.
        </p>
      </div>

      {/* input radio */}
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

          <div className='mt-[13.85px]'>
            <ButtonGeneral
              disabled={isButtonSendDisabled}
              title='Ja, das ist mein Hausdach.'
              onClick={() => {}}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SendForm;
