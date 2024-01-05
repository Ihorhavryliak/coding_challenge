type CarouselGeneralType = {
  slides: JSX.Element[];
};

const CarouselGeneral = ({ slides }: CarouselGeneralType) => {
  return (
    <div className='flex w-full overflow-hidden transition duration-500 ease-in-out'>
      <div className='flex'>
        {slides.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </div>
    </div>
  );
};

export default CarouselGeneral;
