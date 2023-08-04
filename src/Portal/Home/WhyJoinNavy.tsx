import * as React from "react";
import ColorPalette from "./../../Asset/navy-color";
import WHY_JOIN_NAVY from "../LocalAsset/Images/WHY_JOIN_NAVY.svg";

const WhyJoinNavy = () => {
  return (
    <div className="px-6 lg:px-14 relative overflow-hidden min-w-full ">
      <h1
        style={{ color: ColorPalette.Dark_Blue }}
        className="text-5xl text-center font-bold pt-8 pb-4"
      >
        WHY JOIN NAVY
      </h1>
      <p
        style={{ fontFamily: "Consolas" }}
        className="max-w-[800px] text-center m-auto pb-8  text-gray-500"
      >
        The organization was founded in 1956 continued to perform the same
        functions as its predecessor and kept to administer.
      </p>
      <div className="flex flex-row justify-around items-center">
        <img
          src={WHY_JOIN_NAVY}
          alt="WHY_JOIN_NAVY"
          className="max-w-[560px]"
        />
        <ul className="flex flex-col gap-7">
          <li>Long-term positions</li>
          <li>Flexible working hours</li>
          <li>Fair compensation</li>
          <li>100% Remote</li>
        </ul>
      </div>
    </div>
  );
};

export default WhyJoinNavy;
