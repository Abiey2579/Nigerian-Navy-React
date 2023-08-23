import { Link, useLocation } from "react-router-dom";
import "../css/ApplicationSteps.css";

const ApplicationSteps = () => {
  const location = useLocation();
  const currentRouteIndex = location.pathname.split("/").length - 1;
  const currentRoute = location.pathname.split("/")[currentRouteIndex];
  return (
    <header className="DashboardNavigator lg:px-24 md:px-10 px-3 pt-5 pb-3 border-bottom">
      <span className="Main">Application steps</span>
      <span
        className={` mx-2 ${
          currentRoute === "biodata" ? "ActiveStep" : "text-gray-600"
        }`}
      >
        Biodata
      </span>
      <span
        className={` mx-2 ${
          currentRoute === "nok" ? "ActiveStep" : "text-gray-600"
        }`}
      >
        NOK/Guardian
      </span>
      <span
        className={` mx-2 ${
          currentRoute === "education" ? "ActiveStep" : "text-gray-600"
        }`}
      >
        Education
      </span>
      <span
        className={` mx-2 ${
          currentRoute === "ssce" ? "ActiveStep" : "text-gray-600"
        }`}
      >
        SSCE Grade
      </span>
      <span
        className={` mx-2 ${
          currentRoute === "additional-info" ? "ActiveStep" : "text-gray-600"
        }`}
      >
        Additional Info
      </span>
      <span
        className={` mx-2 ${
          currentRoute === "preview" ? "ActiveStep" : "text-gray-600"
        }`}
      >
        Preview
      </span>
    </header>
  );
};

export default ApplicationSteps;
