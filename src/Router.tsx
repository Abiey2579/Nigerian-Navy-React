import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Requirements from "./Home/Requirements";
import Register from "./Auth/Resigter";
import Login from "./Auth/Login";
import Reset from "./Auth/Reset";
import Auth from "./Auth/Auth";
import * as uriPaths from "./Asset/common/uriPaths";
import PrintApplication from "./Application/Print_Application";
import Biodata from "./Application/Biodata";
import NOKGuardian from "./Application/NOK_Guardian";
import EducationInfo from "./Application/Education_Info";
import SSCEGrade from "./Application/SSCE_Grade";
import AdditionalInfo from "./Application/Additional_Info";
import ApplicationPreview from "./Application/Application_Preview";

const router = createBrowserRouter([
  {
    path: uriPaths.HOME,
    element: <Requirements />,
    errorElement: "<ErrorElement />",
  },
  {
    path: uriPaths.REQUIREMENTS,
    element: <Requirements />,
  },
  {
    path: uriPaths.AUTH,
    element: <Auth />,
  },
  {
    path: uriPaths.REGISTER,
    element: <Register />,
  },
  {
    path: uriPaths.LOGIN,
    element: <Login />,
  },
  {
    path: uriPaths.RESET,
    element: <Reset />,
  },
  {
    path: uriPaths.BIODATA,
    element: <Biodata />,
  },
  {
    path: uriPaths.NOK,
    element: <NOKGuardian />,
  },
  {
    path: uriPaths.EDUCATION,
    element: <EducationInfo />,
  },
  {
    path: uriPaths.SSCE,
    element: <SSCEGrade />,
  },
  {
    path: uriPaths.ADDITIONAL_INFO,
    element: <AdditionalInfo />,
  },
  {
    path: uriPaths.PREVIEW,
    element: <ApplicationPreview />,
  },
  {
    path: uriPaths.PRINT_APPLICATION,
    element: <PrintApplication />,
  },
]);

const NigerianNavy = () => {
  return <RouterProvider router={router} />;
};

export default NigerianNavy;
