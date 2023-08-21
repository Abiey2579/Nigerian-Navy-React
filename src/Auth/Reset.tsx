import Navbar from "./Navbar";
import CoverImage from "../Asset/Images/navy-slider-2.jpg";
import Logo from "../Asset/Images/navy_logo.png";
import "../Asset/css/register.css";
import { Link } from "react-router-dom";
import * as uriPaths from "../Asset/common/uriPaths";

const Reset = () => {
  return (
    <>
      <Navbar />
      <section
        className="RegisterSection bg-cover bg-no-repeat bg-center h-screen w-screen lg:px-24 md:px-10 px-3 flex flex-col justify-center"
        style={{ backgroundImage: `url('${CoverImage}')` }}
      >
        <div className="AuthFormContainer">
          <header>
            <img
              src={Logo}
              width="62px"
              height="70px"
              className="navbar-brand-logo"
            />
            <div>
              <h3>NIGERIAN NAVY</h3> <span>e-Recruitment</span>
            </div>
          </header>

          <form id="ForgotPasswordForm">
            <div>
              <h2>Forgot Password</h2>
            </div>
            <input
              type="text"
              name="ResetEmail"
              className="ResetEmail"
              id="ResetEmail"
              placeholder="Email"
              required
            />
            <button className="Reset_BTN">Reset</button>

            <span>Don't have an account?</span>
            <Link to={uriPaths.REGISTER} className="ShowRegister">
              Register
            </Link>
            <span>&copy; Nigerian Navy 2023</span>
          </form>
        </div>
      </section>
    </>
  );
};

export default Reset;
