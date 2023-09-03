import { useState } from "react";
import Navbar from "./Navbar";
import CoverImage from "../Asset/Images/navy-slider-2.jpg";
import Logo from "../Asset/Images/navy_logo.png";
import "../Asset/css/register.css";
import { Link } from "react-router-dom";
import * as uriPaths from "../Asset/common/uriPaths";
import { FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { account } from "../Asset/config/appwrite";
import { ID } from "appwrite";
import Spinner from "../Components/Spinner";

const Register = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [spin, setSpin] = useState<boolean>(false);
  const navigate = useNavigate();

  alert(
    "This is Not Nigerian Navy Official Recruitment Portal; This is a project made for Educational Purpose Only"
  );

  const handleRegister = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email && !password && !confirmPassword) {
      alert("All Fields are Required");
      return;
    }

    if (password !== confirmPassword) {
      alert("Confirm Password Mismatched");
      return;
    }

    try {
      setSpin(true);
      await account.create(ID.unique(), email, password);
      alert("Your account has been created successfully, Please Login");
      navigate(uriPaths.LOGIN);
    } catch (error) {
      alert("A user with the same email already exists");
      setSpin(false);
      // throw new Error((error as Error).message);
    }
  };
  return (
    <>
      <Navbar />

      <div
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
              <h3 className="font-bold">NIGERIAN NAVY</h3>{" "}
              <span>e-Recruitment</span>
            </div>
          </header>

          <form onSubmit={handleRegister}>
            <div>
              <h2>Register</h2>
            </div>
            <input
              type="email"
              className="RegisterEmail"
              placeholder="Email"
              required
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              autoComplete="username"
            />
            <input
              type="password"
              className="RegisterPassword"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
              autoComplete="new-password"
            />
            <input
              type="password"
              className="RegisterConfirmP"
              placeholder="Confirm Password"
              onChange={(e) => setConfirmPassword(e.target.value)}
              value={confirmPassword}
              required
              autoComplete="new-password"
            />
            <button className="Register">
              {spin ? (
                <Spinner className="w-5 fill-NAVY_Gray text-NAVY_Blue" />
              ) : (
                "Register"
              )}
            </button>

            <span>Already have an account?</span>
            <Link to={uriPaths.LOGIN} className="ShowLogin">
              Login
            </Link>
            <span>&copy; Nigerian Navy 2023</span>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
