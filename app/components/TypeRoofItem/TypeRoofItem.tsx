type TypeRoofType = {
  icon: JSX.Element;
  name: string;
  onClick?: () => void;
};

const TypeRoofItem = ({ icon, name, onClick }: TypeRoofType) => {
  return (
    <div className='group'>
      <button className='br-5 box-shadow-item w-full ' onClick={onClick}>
        <div
          className='border-box image-item
                    group-hover:border-custom-blue-100 flex justify-center rounded-t-md border border-b-0 
                    border-current bg-white  py-4  transition-all duration-300 
                    group-hover:rounded-t-md group-hover:border group-hover:border-b-0
                    group-hover:border-solid'
        >
          <span
            className='transition-transform duration-300 ease-in-out group-hover:scale-105'
          >
            {icon}
          </span>
        </div>
        <div
          className='group-hover:bg-custom-blue-100 rounded-b-md bg-white pb-12 pt-2 transition-all duration-300'
        >
          <p
            className='font-scandia text-custom-blue-100 text-lg font-medium leading-6 transition-all duration-300 group-hover:translate-y-[20px] group-hover:text-white'
          >
            {name}
          </p>
        </div>
      </button>
    </div>
  );
};

export default TypeRoofItem;
