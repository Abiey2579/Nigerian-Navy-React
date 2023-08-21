import { useState } from "react";
import Navbar from "./Navbar";
import CoverImage from "../Asset/Images/navy-slider-2.jpg";
import Logo from "../Asset/Images/navy_logo.png";
import "../Asset/css/register.css";
import { Link } from "react-router-dom";
import * as uriPaths from "../Asset/common/uriPaths";
import { FormEvent } from "react";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email && !password) {
      alert("All Fields are Required");
      return;
    }

    try {
      // send to MongoDB
    } catch (error) {
      throw new Error((error as Error).message);
    }
  };
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

          <form onSubmit={handleLogin}>
            <div>
              <h2>Log In</h2>
            </div>
            <input
              type="text"
              className="LoginEmail"
              placeholder="Email"
              required
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <input
              type="password"
              className="LoginPassword"
              placeholder="Password"
              required
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <button className="Login_BTN">Log In</button>

            <span>New Here?</span>
            <Link to={uriPaths.REGISTER} className="ShowForgotPassword">
              Register
            </Link>
            <span>&copy; Nigerian Navy 2023</span>
          </form>
        </div>
      </section>
    </>
  );
};

export default Login;
