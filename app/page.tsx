'use client';
import { useState, useRef } from 'react';
import SliderGeneral from './components/Slider/SliderGeneral';
import TypeRoof from './components/TypeRoofItem/TypeRoofItem';
import FlatRoof from './components/Icons/FlatRoof';
import GableRoof from './components/Icons/GableRoof';
import PentRoof from './components/Icons/PentRoof';
import Other from './components/Icons/Other';
import './globals.css';
import ButtonBackIcon from './components/Buttons/ButtonBackIcon';
import HouseFirsVariant from './components/Icons/HouseFirsVariant';
import House from './components/Icons/House';

export default function Home() {
  const [number, setNumber] = useState(10);
  const [current, setCurrent] = useState(0);
  const step = 40;
  const duration = 500;
  const containerRef = useRef<HTMLDivElement | null>(null);
  const previousSlide = () => {
    if (current === 0) setCurrent(slides.length - 1);
    else setCurrent((prev) => prev - 1);
    setNumber((prev) => prev - step);
    // Scroll to the previous slide with a slow transition
    if (containerRef.current) {
      const scrollAmount = -containerRef.current.clientWidth;
      smoothScroll(containerRef.current, scrollAmount, duration);
    }
  };

  const nextSlide = () => {
    if (current === slides.length - 1) setCurrent(0);
    else setCurrent((prev) => prev + 1);
    setNumber((prev) => prev + step);
    // Scroll to the next slide with a slow transition
    if (containerRef.current) {
      const scrollAmount = containerRef.current.clientWidth;
      smoothScroll(containerRef.current, scrollAmount, duration);
    }
  };

  // Function for smooth scrolling
  const smoothScroll = (
    element: HTMLElement,
    scrollAmount: number,
    duration: number,
  ) => {
    const startTime = performance.now();
    const startScrollLeft = element.scrollLeft;

    const scroll = (currentTime: number) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);

      element.scrollLeft = startScrollLeft + progress * scrollAmount;

      if (progress < 1) {
        requestAnimationFrame(scroll);
      }
    };
    requestAnimationFrame(scroll);
  };

  const slides = [
    <div key={1}>
      <div
        className={'leading-md-custom mt-5 pb-5 text-xl font-medium'}
        style={{ color: '#0A2742' }}
      >
        Kostenloser Solarstrom-Check in einer Minute.
      </div>
      <div className='flex justify-center gap-5 px-10'>
        <TypeRoof
          onClick={nextSlide}
          name={'Satteldach'}
          icon={<GableRoof />}
        />
        <TypeRoof onClick={nextSlide} name={'Flachdach'} icon={<FlatRoof />} />
        <TypeRoof onClick={nextSlide} name={'Pultdach'} icon={<PentRoof />} />
        <TypeRoof onClick={nextSlide} name={'Anderes'} icon={<Other />} />
      </div>
    </div>,
    <div key={2}>
      <div
        className={'leading-md-custom mt-5 pb-5 text-xl font-medium'}
        style={{ color: '#0A2742' }}
      >
        Besitzt Ihr Haus Gauben oder Dachfenster?
      </div>
      <div key={1} className='flex justify-center gap-5 px-10'>
        <TypeRoof name={'Ja'} icon={<HouseFirsVariant />} />
        <TypeRoof name={'Nein'} icon={<House />} />
        <TypeRoof name={'Weiß nicht'} icon={<Other />} />
      </div>
      <div className='ml-12 mt-6 px-4 py-2.5'>
        <ButtonBackIcon onClick={previousSlide} />
      </div>
    </div>,
  ];

  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <div className='z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex'>
        <div className='w-full'>
          <div>
            <div>
              {/* progress */}
              <div className='h-3'>
                <div className=' bg-stroke bg-progress-empty relative h-1 w-full rounded-[8px]'>
                  <span
                    className='progress-text relative -top-6 bottom-full -ml-8   h-1 text-xs font-medium leading-5 transition-all duration-500 ease-out'
                    style={{ left: `${number}%` }}
                  >
                    {number} % geschafft
                  </span>
                  <div
                    className='bg-progress absolute left-0 top-0 h-full rounded-[8px] transition-all duration-500 ease-out'
                    style={{ width: `${number}%` }}
                  >
                    <span className=' absolute -right-4 bottom-full -mb-3 rounded-sm  text-sm text-white'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='21'
                        height='20'
                        viewBox='0 0 21 20'
                        fill='none'
                      >
                        <g clipPath='url(#clip0_1_14)'>
                          <path
                            d='M10.4146 20.0146C15.9374 20.0146 20.4146 15.5374 20.4146 10.0146C20.4146 4.49171 15.9374 0.0145569 10.4146 0.0145569C4.8917 0.0145569 0.414551 4.49171 0.414551 10.0146C0.414551 15.5374 4.8917 20.0146 10.4146 20.0146Z'
                            fill='#02FF83'
                          />
                          <path
                            d='M14.1418 7.01456L8.86907 12.2873L6.50543 9.92365'
                            stroke='black'
                            strokeWidth='1.81818'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />
                        </g>
                        <defs>
                          <clipPath id='clip0_1_14'>
                            <rect
                              width='20'
                              height='20'
                              fill='white'
                              transform='translate(0.400024)'
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    </span>
                  </div>
                </div>{' '}
              </div>
              {/* text */}

              {/* second text */}
              <p
                className={
                  'leading-mda-custom mt-md-custom col-span-10 mb-2 text-sm font-medium'
                }
                style={{ color: '#5F5F68' }}
              >
                Welche Dachform hat Ihr Haus?
              </p>
              {/* list chose */}
              <SliderGeneral slides={slides} ref={containerRef} />
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
