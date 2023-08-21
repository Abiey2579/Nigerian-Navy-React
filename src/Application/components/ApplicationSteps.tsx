import { Link } from "react-router-dom";
import "../css/ApplicationSteps.css";

const ApplicationSteps = (props: any) => {
  return (
    <header className="DashboardNavigator lg:px-24 md:px-10 px-3 pt-5 pb-3 border-bottom">
      <span>Application steps</span>
      <Link
        to="/"
        className={`${
          props.step === "Biodata" ? "ActiveNavigator" : ""
        } text-gray-600`}
        id="Biodata_Navigator"
      >
        Biodata
      </Link>
      <Link
        to="/"
        className={`${
          props.step === "NOK_Guardian" ? "ActiveNavigator" : ""
        } text-gray-600`}
      >
        NOK/Guardian
      </Link>
      <Link
        to="/"
        className={`${
          props.step === "Education_Info" ? "ActiveNavigator" : ""
        } text-gray-600`}
      >
        Education
      </Link>
      <Link
        to="/"
        className={`${
          props.step === "SSCE_Grade" ? "ActiveNavigator" : ""
        } text-gray-600`}
      >
        SSCE Grade
      </Link>
      <Link
        to="/"
        className={`${
          props.step === "Additional_Info" ? "ActiveNavigator" : ""
        } text-gray-600`}
      >
        Additional Info
      </Link>
      <Link
        to="/"
        className={`${
          props.step === "Preview" ? "ActiveNavigator" : ""
        } text-gray-600`}
      >
        Preview
      </Link>
    </header>
  );
};

export default ApplicationSteps;
