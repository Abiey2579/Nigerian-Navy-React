import React, { useState } from "react";
import { Link } from "react-router-dom";
import ColorPalette from "../../Asset/navy-color";
import LogoStamp from "../Components/Navbar/LogoStamp";
import SignUp from "./SignUp";
import SignIn from "./SignIn";

// FIREBASE AUTH CONTEXT
import { signInWithRedirect, GoogleAuthProvider } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "./../Firebase/Config";

const Authentication = () => {
  const [SwapAuthTo, setSwapAuthTo] = useState("Sign Up");
  const navigate = useNavigate();

  const HandleSwapToSignIn = () => {
    setSwapAuthTo("Sign In");
  };

  const HandleSwapToSignUp = () => {
    setSwapAuthTo("Sign Up");
  };

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        //   const token = credential.accessToken;

        // The signed-in user info.
        // @ts-ignore
        const user = result.user;
        console.log(result);
        navigate("/application");
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
        console.log(error);
      });
  };

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
      }}
      className="flex flex-col items-center sm:justify-between lg:justify-center xs:px-2 sm:px-5 md:px-10 lg:px-20 xs:w-[100vw] sm:w-[450px] md:w-[450px]"
    >
      <div
        style={{
          border: "1px",
          borderColor: ColorPalette.Sky_Blue,
          borderRadius: "5px",
          borderStyle: "solid",
        }}
        className="flex flex-col sm:mt-5 lg:mt-0 h-[500px] xs:w-[100vw] sm:w-[450px] md:w-[450px] py-[40px] px-[30px]"
      >
        <div className="flex flex-col items-center sm:mb-10 lg:mb-0">
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
            handleAuthContext={handleGoogleSignIn}
          />
        )}
        {/* END OF SIGN IN COMPONENT */}

        {/* BEGIN OF SIGN UP COMPONENT */}
        {SwapAuthTo === "Sign Up" && (
          <SignUp
            HandleSwapToSignIn={HandleSwapToSignIn}
            handleAuthContext={handleGoogleSignIn}
          />
        )}
        {/* END OF SIGN UP COMPONENT */}
      </div>
      <div className="flex justify-evenly py-3 w-full">
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
