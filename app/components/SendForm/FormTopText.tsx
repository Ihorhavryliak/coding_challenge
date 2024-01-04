import React from 'react';
import InformationIcon from '../Icons/InformationIcon';

const FormTopText = () => {
  return (
    <>
      <div className='flex flex-col items-center bg-custom-blue-200 transition-[background-color] duration-500 ease-in-out'>
        <p className='pt-5 font-scandia text-sm font-medium text-white'>
          Eine Solaranlage spart Ihnen ca.
        </p>
        <div className='flex gap-[13.26px] pb-[38px] pt-2.5 font-scandia text-xl font-medium text-white'>
          25.000 - 30.000 € Stromkosten
          <span className='relative top-[-3px]'>
            <InformationIcon />
          </span>
        </div>
      </div>
      <div className='mt-4 flex w-full justify-center'>
        <p className='w-[666px]  px-2.5 text-center font-scandia text-lg font-medium leading-6 text-custom-blue-200  md:px-0  lg:px-0 xl:px-0 2xl:px-0 '>
          Gratulation, das Angebot ist in Ihrer Region noch verfügbar! Wir
          senden Ihnen gerne kostenlose Informationen zu.
        </p>
      </div>
    </>
  );
};

export default FormTopText;
