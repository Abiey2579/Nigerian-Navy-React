import ColorPalette from "../Asset/navy-color";
import NAVY_LOGO from "../Asset/Images/navy_nav_logo.png";

const LogoStamp = () => {
  return (
    <a
      style={{ padding: "10px 20px 10px 10px" }}
      className="navbar-brand my-1 mx-auto text-gray-700 flex items-center bg-NAVY_Blue rounded-bl-[20px] rounded-br-[20px]"
    >
      <img src={NAVY_LOGO} className="navbar-brand-logo" />
      <div className="flex items-start flex-col text-NAVY_Gray">
        <span className="text-xl leading-tight">NIGERIAN NAVY</span>
        <span className="text-sm leading-tight">e-Recruitment</span>
      </div>
    </a>
  );
};

export default LogoStamp;
