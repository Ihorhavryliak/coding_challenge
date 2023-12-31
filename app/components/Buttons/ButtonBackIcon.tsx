import Back from "../Icons/Back";

type ButtonBackIconType = {
  onClick: () => void;
};

const ButtonBackIcon = ({ onClick }: ButtonBackIconType) => {
  return (
    <button className="flex items-center" onClick={onClick}>
      <Back />
     <div className="m-small text-sm  font-medium leading-lg-custom"   style={{ color: "#5F5F68" }}>Zurück</div> 
    </button>
  );
};

export default ButtonBackIcon;
