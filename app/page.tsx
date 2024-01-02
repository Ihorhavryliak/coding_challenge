'use client';
import { useState, useRef } from 'react';
import SliderGeneral from './components/Slider/SliderGeneral';
import './globals.css';
import useRoofShape from './hooks/useRoofShape';
import RoofShape from './components/StepContainer/StepContainer';
import useSkyLight from './hooks/useSkyLight';
import StepContainer from './components/StepContainer/StepContainer';
import Progress from './components/Progress/Progress';
import TypeRoofTextContainer from './components/TypeRoofTextContainer/TypeRoofTextContainer';
import { useProgress } from './hooks/useProgress';

export default function Home() {
  const {
    previousSlide,
    nextSlide,
    dataSend,
    numberPercentLoad,
    containerRef,
    step,
  } = useProgress();
  const roofShapesData = useRoofShape({ nextSlide, dataSend });
  const skyLightData = useSkyLight({ nextSlide, dataSend });
  const slides = [
    <StepContainer
      title='Kostenloser Solarstrom-Check in einer Minute.'
      isCurrentStep={step === 0}
      key={1}
      roofShapesData={roofShapesData}
    />,
    <StepContainer
      title='Besitzt Ihr Haus Gauben oder Dachfenster?'
      isCurrentStep={step === 1}
      key={2}
      roofShapesData={skyLightData}
      isButton={true}
      previousSlide={previousSlide}
    />,
    <div
      key={3}
      className={`${
        step === 2 ? 'opacity-100' : 'opacity-50'
      } transition-all duration-300 `}
    ></div>,
  ];

  return (
    <main className='flex min-h-screen flex-col items-center justify-between '>
      <div className='z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex'>
        <div className='w-full'>
          <div>
            <div>
              <div
                className={`${
                  step === 2
                    ? 'bg-custom-blue-200 pb-4 pr-10 ps-14 pt-11'
                    : 'py-10 pb-4 pt-11'
                } `}
              >
                <Progress numberPercentLoad={numberPercentLoad} />
              </div>
              {step === 2 && (
                <div>
                  <div className='flex flex-col items-center bg-custom-blue-200'>
                    <p className='pt-5 font-scandia text-sm font-medium'>
                      Eine Solaranlage spart Ihnen ca.
                    </p>
                    <p className='pb-[38px] pt-2.5 font-scandia text-xl font-medium'>
                      25.000 - 30.000 € Stromkosten
                    </p>
                  </div>
                  <div className='mt-4 flex w-full justify-center'>
                    <p className='w-[666px] text-center font-scandia text-lg font-medium leading-6 text-custom-blue-200 '>
                      Gratulation, das Angebot ist in Ihrer Region noch
                      verfügbar! Wir senden Ihnen gerne kostenlose Informationen
                      zu.
                    </p>
                  </div>
                  {/* input radio */}
                  <div className='flex justify-center'>
                    <div className='w-[430px] py-2.5'>
                      <div className='mt-[9.91px] font-scandia text-sm font-medium leading-5 text-custom-gray-100'>
                        Anrede
                      </div>
                      <div>
                        <div className='flex gap-[38px]'>
                          <div className='flex items-center'>
                            <div className='flex  w-6 items-center'>
                              <input
                                className='h-[18px] w-[18px]'
                                type='radio'
                              />
                            </div>
                            <div className='text-custom-gray-300 flex items-center font-scandia text-lg leading-5'>
                              Herr
                            </div>
                          </div>

                          <div className='flex items-center'>
                            <div className='flex  w-6 items-center'>
                              <input
                                className='h-[18px] w-[18px]'
                                type='radio'
                              />
                            </div>
                            <div className='text-custom-gray-300 flex items-center font-scandia text-lg leading-5'>
                              Frau
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* input  */}
                      <div>
                        <div className='mt-[12.09px] font-scandia text-sm font-medium leading-5 text-custom-gray-100'>
                          Name
                        </div>
                        <input
                          type='text'
                          className='border-custom-gray-400 text-custom-gray-500 block h-[46px] w-full rounded-lg border py-1.5 pe-1.5 ps-4 font-scandia text-xl outline-none
                  '
                        />
                      </div>
                      {/*  Telefonnummer */}
                      <div className='mt-[10.09px]'>
                        <div className='font-scandia text-sm font-medium leading-5 text-custom-gray-100'>
                          Telefonnummer
                        </div>
                        <input
                          type='number'
                          className='border-custom-gray-400 text-custom-gray-500 block h-[46px] w-full appearance-none rounded-lg border py-1.5 pe-1.5 ps-4 font-scandia text-xl outline-none [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none
                  '
                        />
                      </div>

                      {/*  Postleitzahl */}
                      <div className='mt-[11.59px]'>
                        <div className='font-scandia text-sm font-medium leading-5 text-custom-gray-100'>
                          Postleitzahl
                        </div>
                        <input
                          type='number'
                          className=' border-custom-gray-400 text-custom-gray-500 block h-[46px] w-full rounded-lg border py-1.5 pe-1.5 ps-4 font-scandia text-xl outline-none [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none
                  '
                        />
                      </div>
                      <div className='flex gap-2.5'>
                        {/*  Postleitzahl */}
                        <div className='mt-[10.09px]'>
                          <div className='font-scandia text-sm font-medium leading-5 text-custom-gray-100'>
                            Ort
                          </div>
                          <input
                            type='number'
                            className=' border-custom-gray-400 text-custom-gray-500 block h-[46px] w-full rounded-lg border py-1.5 pe-1.5 ps-4 font-scandia text-xl outline-none [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none
                  '
                          />
                        </div>

                        {/*  Postleitzahl */}
                        <div className='mt-[11.09px]'>
                          <div className='font-scandia text-sm font-medium leading-5 text-custom-gray-100'>
                            Straße
                          </div>
                          <input
                            type='number'
                            className=' border-custom-gray-400 text-custom-gray-500 block h-[46px] w-full rounded-lg border py-1.5 pe-1.5 ps-4 font-scandia text-xl outline-none [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none
                  '
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <TypeRoofTextContainer />
              <SliderGeneral slides={slides} ref={containerRef} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
