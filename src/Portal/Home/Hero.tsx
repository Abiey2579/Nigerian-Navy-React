import React from "react";
import ColorPalette from "./../../Asset/navy-color";
import PORTAL_HOME_HERO_LOGO from "./../LocalAsset/Images/PORTAL_HOME_HERO_LOGO.svg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div
      style={{ backgroundColor: ColorPalette.Dark_Blue }}
      className="px-6 lg:px-14 flex items-center relative overflow-hidden min-h-[700px] min-w-full "
    >
      <div
        style={{
          border: "2px",
          borderStyle: "dashed",
          borderColor: ColorPalette.Blue,
          borderRadius: "20px",
          transform: "rotate(35deg)",
          left: "-200px",
        }}
        className="transparent absolute sm:min-w-[516px] sm:min-h-[231px] md:min-w-[619px] md:min-h-[300px]"
      ></div>
      <div className="flex justify-between items-center w-full z-10">
        <div className="text-left">
          <h1
            style={{ color: ColorPalette.Gray }}
            className="uppercase font-bold text-5xl xs:text-3xl md:text-[50px]"
          >
            <p>Join Navy</p>
            <p>and see the world</p>
          </h1>
          <p
            style={{
              margin: "20px 0",
              color: ColorPalette.Gray,
              maxWidth: "500px",
            }}
          >
            There are basic training courses for those Nigerians who wish to
            join Nigerian Navy. Stay responsible for the country’s safety and
            future of the next generations.
          </p>
          <Link to="/auth">
            <span
              style={{
                color: ColorPalette.Dark_Blue,
                backgroundColor: ColorPalette.Gray,
                fontSize: "16px",
                fontWeight: 400,
                margin: 0,
              }}
              className="rounded-full max-w-max px-6 py-2 hover:bg-[#f7f7f7] focus-within:bg-[#f7f7f7]"
            >
              APPLY NOW
            </span>
          </Link>
        </div>
        <div className="hidden xs:hidden sm:hidden md:hidden lg:hidden xl:block">
          <img
            src={PORTAL_HOME_HERO_LOGO}
            alt="PORTAL_HOME_HERO_LOGO"
            style={{ maxWidth: "500px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
