import GableRoof from "../Icons/GableRoof";

type TypeRoofType = {
  icon: JSX.Element;
  name: string;
  onClick?: () => void;
};

const TypeRoofItem = ({ icon, name, onClick }: TypeRoofType) => {
  return (
    <button className="br-5 box-shadow-item w-full" onClick={onClick} >
      <div className="py-4 image-item flex justify-center">{icon}</div>
      <div className="pt-2 pb-12">
        <p className=" text-gr-100  text-lg font-medium leading-6" style={{color: '#0A2742'}}>{name}</p>
      </div>
    </button>
  );
};

export default TypeRoofItem;
