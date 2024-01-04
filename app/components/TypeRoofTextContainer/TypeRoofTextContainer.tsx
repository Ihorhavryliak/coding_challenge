import useGetWindowWidth from "@/app/hooks/useGetWindowWidth";

const TypeRoofTextContainer = () => {
  const width = useGetWindowWidth();

  return (
    <p
      className={
        'col-span-10 mt-[26px] px-2.5 font-scandia text-sm font-medium leading-[18.4px]  text-custom-gray-100 lg:px-10 xl:px-10 2xl:px-10'
      }
      style={{ width: +width <= 930 ? +width - 20 + 'px' : 930 + 'px' }}
    >
      Welche Dachform hat Ihr Haus?
    </p>
  );
};

export default TypeRoofTextContainer;
