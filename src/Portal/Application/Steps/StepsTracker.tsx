import * as React from "react";
import ColorPalette from "../../../Asset/navy-color";

const StepsTracker = () => {
  return (
    <div className="mx-auto max-w-7xl px-6 pt-12 flex justify-evenly items-center">
      <div
        style={{ backgroundColor: ColorPalette.Dark_Blue, color: "white" }}
        className="w-[150px] rounded p-3 text-center relative"
      >
        <span className="select-none">Biodata</span>
        <span
          style={{ backgroundColor: ColorPalette.Dark_Blue }}
          className="w-[200px] h-[2px] absolute top-[50%] -z-10"
        ></span>
      </div>
      <div
        style={{
          backgroundColor: ColorPalette.Sky_Blue,
          color: ColorPalette.Dark_Blue,
        }}
        className="w-[150px] rounded p-3 text-center relative"
      >
        <span className="select-none">Education</span>
        <span
          style={{ backgroundColor: ColorPalette.Sky_Blue }}
          className="w-[200px] h-[2px] absolute top-[50%] -z-10"
        ></span>
      </div>
      <div
        style={{
          backgroundColor: ColorPalette.Sky_Blue,
          color: ColorPalette.Dark_Blue,
        }}
        className="w-[150px] rounded p-3 text-center relative"
      >
        <span className="select-none">Referee</span>
        <span
          style={{ backgroundColor: ColorPalette.Sky_Blue }}
          className="w-[200px] h-[2px] absolute top-[50%] -z-10"
        ></span>
      </div>
      <div
        style={{
          backgroundColor: ColorPalette.Sky_Blue,
          color: ColorPalette.Dark_Blue,
        }}
        className="w-[150px] rounded p-3 text-center"
      >
        <span className="select-none">Preview</span>
      </div>
    </div>
  );
};

export default StepsTracker;
