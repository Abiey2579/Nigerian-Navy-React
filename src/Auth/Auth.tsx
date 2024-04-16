import Navbar from "./Navbar";
import CoverImage from "../Asset/Images/navy-slider-2.jpg";
import { Link } from "react-router-dom";
import * as uriPaths from "../Asset/common/uriPaths";

const Auth = () => {

  return (
    <>
      <Navbar />

      <header
        className="bg-cover bg-no-repeat bg-center h-[80vh] w-full lg:px-24 md:px-10 px-3 flex flex-col justify-center"
        style={{ backgroundImage: `url('${CoverImage}')` }}
      >
        <h1 className="text-white text-4xl font-bold mb-3">NIGERIAN NAVY</h1>
        <h3 className="text-white text-2xl font-medium max-w-xl mb-2">
          INSTRUCTIONS FOR CANDIDATES SHORTLISTED FOR NIGERIAN NAVY BASIC
          TRAINING SCHOOL BATCH 35 INTERVIEW
        </h3>
        <div className="flex md:flex-row flex-col gap-3">
          <a
            href="https://www.joinnigeriannavy.com/shortlisted-candidates/"
            target="_blank"
            className="text-center block py-[10px] px-[22px] rounded text-NAVY_Gray hover:text-NAVY_Gray border-0 bg-NAVY_Blue w-fit"
            style={{
              backgroundImage:
                "linear-gradient(180deg, #0075ad 10%, #39738f 100%)",
              backgroundSize: "cover",
              textDecoration: "none",
            }}
          >
            Click Here To View List
          </a>
          <a
            href="https://www.joinnigeriannavy.com/wp-content/uploads/2023/07/SHORTLISTED-FOR-INTERVIEW.pdf"
            target="_blank"
            download={true}
            className="text-center block py-[10px] px-[22px] rounded text-NAVY_Gray hover:text-NAVY_Gray border-0 bg-NAVY_Blue w-fit"
            style={{
              backgroundImage:
                "linear-gradient(180deg, #0075ad 10%, #39738f 100%)",
              backgroundSize: "cover",
              textDecoration: "none",
            }}
          >
            Download List
          </a>
        </div>
      </header>

      <section className="grid md:grid-cols-3 grid-cols-1 items-center my-4 lg:px-24 md:px-10 px-3">
        <div>
          <h4 className="text-2xl">WELCOME:</h4>
          <Link
            to={uriPaths.REQUIREMENTS}
            className="text-NAVY_Blue underline text-lg"
          >
            View NNR Batch 36 Guidelines & Requirments
          </Link>
        </div>
        <p></p>
        <Link
          to={uriPaths.REGISTER}
          className="text-center block py-[10px] px-[22px] rounded text-NAVY_Gray hover:text-NAVY_Gray border-0 bg-NAVY_Blue"
          style={{
            backgroundImage:
              "linear-gradient(180deg, #0075ad 10%, #39738f 100%)",
            backgroundSize: "cover",
            textDecoration: "none",
          }}
        >
          Apply now
        </Link>
      </section>
    </>
  );
};

export default Auth;
