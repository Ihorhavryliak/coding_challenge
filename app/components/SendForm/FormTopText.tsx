import React from 'react';
import InformationIcon from '../Icons/InformationIcon';

const FormTopText = () => {
  return (
    <>
      <div className='text-center bg-custom-blue-200 transition-[background-color] duration-500 ease-in-out px-2.5 md:px-0 lg:px-0 xl:px-0 2xl:px-0'>
        <p className='pt-5 font-scandia text-sm font-medium text-white text-wrap'>
          Eine Solaranlage spart Ihnen ca.
        </p>
        <div className='flex gap-[13.26px] pb-[38px] pt-2.5 font-scandia text-xl font-medium text-white text-wrap justify-center'>
          25.000 - 30.000 € Stromkosten
          <span className='relative top-[-3px]'>
            <InformationIcon />
          </span>
        </div>
      </div>
      <div className='mt-[17px] flex w-full justify-center'>
        <p className='max-w-[666px] px-2.5  font-scandia text-lg font-medium leading-6 text-custom-blue-200 md:px-0 lg:px-0 xl:px-0 2xl:px-0 text-wrap text-left md:text-center lg:text-center xl:text-center 2xl:text-center '>
          Gratulation, das Angebot ist in Ihrer Region noch verfügbar! Wir
          senden Ihnen gerne kostenlose Informationen zu.
        </p>
      </div>
    </>
  );
};

export default FormTopText;
