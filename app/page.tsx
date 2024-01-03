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
import ButtonGeneral from './components/Buttons/ButtonGeneral';
import useForm from './hooks/useForm';
import InputRadio from './components/Inputs/InputRadio';
import InputGeneral from './components/Inputs/InputGeneral';
import SelectGeneral from './components/Select/SelectGeneral';

export default function Home() {
  const {
    previousSlide,
    nextSlide,
    dataSend,
    numberPercentLoad,
    containerRef,
    step,
    nextStepSlider
  } = useProgress();
  const roofShapesData = useRoofShape({ nextSlide, dataSend });
  const skyLightData = useSkyLight({ nextSlide, dataSend });
  const slides = [
    <StepContainer
      title='Kostenloser Solarstrom-Check in einer Minute.'
      isCurrentStep={step === 0}
      key={1}
      roofShapesData={roofShapesData}
      nextStepSlider={nextStepSlider}
    />,
    <StepContainer
      title='Besitzt Ihr Haus Gauben oder Dachfenster?'
      isCurrentStep={step === 1}
      key={2}
      roofShapesData={skyLightData}
      isButton={true}
      previousSlide={previousSlide}
      nextStepSlider={nextStepSlider}
    />,
    <div
      key={3}
      className={`${
        step === 2 ? 'opacity-100' : 'opacity-50'
      } transition-all duration-300 `}
    ></div>,
  ];
  const { formData, isButtonSendDisabled } = useForm();

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
                                    ({
                                      name,
                                      id,
                                      onChange,
                                      value,
                                      checked,
                                    }) => {
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
                            <div key={item.id} className='flex gap-2.5'>
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
                                  disabled
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
                              options={item?.options as [] || []}
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

                      {/* button */}
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
              )}

              <TypeRoofTextContainer />
              <SliderGeneral  slides={slides} ref={containerRef} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
