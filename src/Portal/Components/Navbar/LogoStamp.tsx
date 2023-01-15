import * as React from "react";
import ColorPalette from "../../../Asset/navy-color";
import NAVY_LOGO from "./../../../Asset/Images/navy_logo.png";

const LogoStamp = () => {
  const TextStyle = {
    color: ColorPalette.Gray,
  };
  return (
    <div
      style={{
        padding: "8px 12px 8px 8px",
        width: "223px",
        height: "67px",
        backgroundColor: ColorPalette.Dark_Blue,
        margin: "5px 0",
        borderRadius: "5px",
        userSelect: "none",
      }}
    >
      <div className="flex">
        <img
          src={NAVY_LOGO}
          style={{ width: "50px", height: "50px", marginRight: "5px" }}
          alt="NAVY_LOGO"
          draggable="false"
        />
        <div className="flex items-start flex-col">
          <p style={TextStyle} className="text-[20px]">
            NIGERIAN NAVY
          </p>
          <p style={TextStyle} className="text-[14px]">
            e-Recruitment
          </p>
        </div>
      </div>
    </div>
  );
};

export default LogoStamp;
