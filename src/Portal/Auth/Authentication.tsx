import React, { useState } from "react";
import { Link } from "react-router-dom";
import ColorPalette from "../../Asset/navy-color";
import LogoStamp from "../Components/Navbar/LogoStamp";
import SignUp from "./SignUp";
import SignIn from "./SignIn";

const Authentication = () => {
  const [SwapAuthTo, setSwapAuthTo] = useState("Sign Up");

  const HandleSwapToSignIn = () => {
    setSwapAuthTo("Sign In");
  };

  const HandleSwapToSignUp = () => {
    setSwapAuthTo("Sign Up");
  };

  const handleSignIn = async () => {
    alert("Sign In");
  };

  const handleSignUp = async () => {
    alert("Sign Up");
  };

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center px-5 md:max-w-lg m-auto">
      <div
        style={{
          borderColor: ColorPalette.Sky_Blue,
        }}
        className="flex flex-col h-[500px] sm:border-0 md:border rounded w-full py-10 sm:px-0 md:px-8"
      >
        <div className="flex flex-col items-start md:items-center mb-5">
          {/* BEGIN OF LOGO STAMP COMPONENT */}
          <LogoStamp />
          {/* END OF LOGO STAMP COMPONENT */}
          <div
            style={{ backgroundColor: ColorPalette.Sky_Blue }}
            className="w-[300px] h-[1px] block mt-4"
          ></div>
        </div>

        {/* BEGIN OF SIGN IN COMPONENT */}
        {SwapAuthTo === "Sign In" && (
          <SignIn
            HandleSwapToSignUp={HandleSwapToSignUp}
            handleAuthContext={handleSignIn}
          />
        )}
        {/* END OF SIGN IN COMPONENT */}

        {/* BEGIN OF SIGN UP COMPONENT */}
        {SwapAuthTo === "Sign Up" && (
          <SignUp
            HandleSwapToSignIn={HandleSwapToSignIn}
            handleAuthContext={handleSignUp}
          />
        )}
        {/* END OF SIGN UP COMPONENT */}
      </div>
      <div className="hidden md:flex lg:flex justify-evenly py-3 w-full">
        <Link to={"/faq"}>
          <span
            style={{ color: ColorPalette.Black_80 }}
            className="text-[12px] hover:underline"
          >
            FAQ
          </span>
        </Link>
        <Link to={"/requirements"}>
          <span
            style={{ color: ColorPalette.Black_80 }}
            className="text-[12px] hover:underline"
          >
            Requirments
          </span>
        </Link>
        <Link to={"/terms"}>
          <span
            style={{ color: ColorPalette.Black_80 }}
            className="text-[12px] hover:underline"
          >
            Terms
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Authentication;
