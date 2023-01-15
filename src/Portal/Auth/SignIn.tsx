import React from "react";
import ColorPalette from "./../../Asset/navy-color";
import Google_Logo_SVG from "./../LocalAsset/Images/google-logo-svg.svg";

// import { handleGoogleSignIn } from "../Firebase/AuthContext";

const SignIn = (props: any) => {
  return (
    <React.Fragment>
      <span
        style={{ color: ColorPalette.Black }}
        className="text-[20px] mt-5 font-medium"
      >
        Sign In
      </span>
      <span style={{ color: ColorPalette.Black }} className="text-[16px] mt-4">
        Use your Google Account to continue
      </span>
      <button
        style={{ backgroundColor: ColorPalette.Sky_Blue }}
        className="flex justify-center items-center py-3 px-2 mt-4 mb-5 rounded font-semibold text-gray-700"
        onClick={props.handleAuthContext}
      >
        <img src={Google_Logo_SVG} width={35} className="mr-3" alt="" />
        <span>Sign in with Google</span>
      </button>
      <div className="flex justify-between">
        <button
          style={{ color: ColorPalette.Blue }}
          onClick={props.HandleSwapToSignUp}
          className="font-medium"
        >
          Create an account
        </button>
      </div>
    </React.Fragment>
  );
};

export default SignIn;
