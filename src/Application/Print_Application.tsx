import { useState, useEffect, useRef } from "react";
import Logo from "../Asset/Images/navy_logo.png";
import { useNavigate } from "react-router-dom";
import * as uriPaths from "../Asset/common/uriPaths";
import {
  fetch_Biodata,
  fetch_NOK_Guardian,
  fetch_Education_Info,
  fetch_SSCE_Grade,
  fetch_Additional_Info,
  fetch_Application_ID,
} from "../Asset/config/functions";
import {
  account,
  storage,
  PROFILE_PICTURE_BUCKET,
} from "../Asset/config/appwrite";
import * as Model from "../Asset/model/model";
import Spinner from "../Components/Spinner";
import Navbar from "./components/Navbar";

const PrintApplication = () => {
  // FETCHED BIODATA STATE
  const [fetched_Biodata_State, set_fetched_Biodata_State] =
    useState<Model.Biodata>();

  // FETCHED NOK GUARDIAN STATE
  const [fetched_NOK_Guardian_State, set_fetched_NOK_Guardian_State] =
    useState<Model.NOK_Guardian>();

  // FETCHED EDUCATION INFO STATE
  const [fetched_Education_Info_State, set_fetched_Education_Info_State] =
    useState<Model.Education_Info>();

  // FETCHED SSCE GRADE STATE
  const [fetched_SSCE_Grade_State, set_fetched_SSCE_Grade_State] =
    useState<Model.SSCE_Grade>();

  // FETCHED ADDITIONAL INFO STATE
  const [fetched_Additional_Info_State, set_fetched_Additional_Info_State] =
    useState<Model.Additional_Info>();

  const [uid, setUID] = useState<string>("");
  const [applicant_ID, setApplicant_ID] = useState<Model.Applicant_ID>();
  const [providerUid, setProviderUid] = useState<string>("");
  const [preventView, setPreventView] = useState<boolean>(true);
  const [profileImage, setProfileImage] = useState<string>("");

  const navigate = useNavigate();

  const getProfilePicture = async () => {
    try {
      const promise = await account.getSession("current");
      const files = await storage.listFiles(PROFILE_PICTURE_BUCKET);
      const existingFile = files.files.find(
        (file) => file.name === promise.userId
      );

      if (existingFile) {
        const previewLink = await storage.getFilePreview(
          PROFILE_PICTURE_BUCKET,
          existingFile.$id
        );
        setProfileImage(previewLink.href);
      }
    } catch (error) {
      throw new Error((error as Error).message);
    }
  };
  const fetch_Preview = async () => {
    try {
      const promise = await account.getSession("current");
      if (promise.userId) {
        setUID(promise.userId);
        setProviderUid(promise.providerUid);
        const application_id = await fetch_Application_ID(promise.userId);
        if (application_id) {
          setApplicant_ID(application_id);
        } else {
          navigate(uriPaths.BIODATA);
        }
        // FETCHING ALL COLLECTIONS
        const fetched_Biodata = await fetch_Biodata(promise.userId);
        const fetched_NOK_Guardian = await fetch_NOK_Guardian(promise.userId);
        const fetched_Education_Info = await fetch_Education_Info(
          promise.userId
        );
        const fetched_SSCE_Grade = await fetch_SSCE_Grade(promise.userId);
        const fetched_Additional_Info = await fetch_Additional_Info(
          promise.userId
        );

        if (
          fetched_Biodata &&
          fetched_NOK_Guardian &&
          fetched_Education_Info &&
          fetched_SSCE_Grade &&
          fetched_Additional_Info
        ) {
          set_fetched_Biodata_State(fetched_Biodata);
          set_fetched_NOK_Guardian_State(fetched_NOK_Guardian);
          set_fetched_Education_Info_State(fetched_Education_Info);
          set_fetched_SSCE_Grade_State(fetched_SSCE_Grade);
          set_fetched_Additional_Info_State(fetched_Additional_Info);
        }
        setPreventView(false);
      } else {
        await account.deleteSessions().finally(() => {
          navigate(uriPaths.LOGIN);
        });
      }
    } catch (error) {
      navigate(uriPaths.LOGIN);
    }
  };

  const effector = async () => {
    await fetch_Preview();
    await getProfilePicture();
  };

  useEffect(() => {
    effector();
  }, []);

  return (
    <>
      <div className={"hide-on-print"}>
        <Navbar email={providerUid} />
      </div>
      {/* TO PREVENT VIEWING APPLICATION BEFORE LOADING DATA */}
      {preventView === false ? (
        <>
          <section
            className="lg:px-24 md:px-10 px-3 mt-5 mb-5 mb-10"
            id="Print_Application"
          >
            <div
              className={`grid place-content-start grid-cols-4 gap-4 mt-5 hide-on-print`}
            >
              <button
                onClick={() => window.print()}
                className="bg-NAVY_Blue border py-2 px-5 rounded outline-0 text-white"
              >
                Print
              </button>
            </div>
            {/* Particulars */}
            <div className="Printable_Area mb-10 Particulars" id="Particulars">
              <div className="MainPrint_Header">
                <div className="flex items-center justify-center">
                  <img
                    src={Logo}
                    width="100px"
                    height="90px"
                    className="navbar-brand-logo"
                  />
                  <div className="flex flex-col">
                    <span className="text-4xl">NIGERIAN NAVY</span>{" "}
                    <span className="text-lg">2022 Recruitment Exercise</span>
                  </div>
                </div>

                <h3 className="text-center text-4xl my-8">Application Form</h3>
                <p className="text-center text-xl mb-4">
                  Particular's of Candidate.
                </p>
              </div>
              <div className="flex justify-end">
                <div className="w-48 h-52 bg-slate-300 mb-3 rounded border">
                  <img
                    src={profileImage}
                    className="w-48 h-52 rounded"
                    alt="Applicant Passport"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-5 mb-5">
                <p className="text-black text-xl">
                  {`Application Number: NNR34/2023/
            ${fetched_Biodata_State?.stateOfOrigin?.substring(0, 3)}/${
                    applicant_ID?.application_id
                  }`}
                </p>
                <p className="text-black text-xl">
                  National Identification Number:{" "}
                  {fetched_Biodata_State?.NIN ?? ""}
                </p>
                <p className="text-black text-xl">
                  Department: {fetched_Biodata_State?.department ?? ""}
                </p>
                <p className="text-black text-xl">
                  Exam Centre: {fetched_Biodata_State?.examCenter ?? ""}
                </p>
                <p className="text-black text-xl">
                  Center Location:{" "}
                  <span className="text-uppercase text-xl">
                    {fetched_Biodata_State?.examCenter ?? ""}
                  </span>
                </p>
              </div>

              <div className="grid grid-cols-2 gap-5 mb-5 lg:pr-32 md:pr-24 pr-0">
                <p className="text-black text-xl">
                  Title:{" "}
                  <span className="ml-2 text-black text-xl">
                    {fetched_Biodata_State?.title ?? ""}
                  </span>
                </p>
                <p className="text-black text-xl">
                  Surname:{" "}
                  <span className="ml-2 text-black text-xl">
                    {fetched_Biodata_State?.surName ?? ""}
                  </span>
                </p>
                <p className="text-black text-xl">
                  First Name:{" "}
                  <span className="ml-2 text-black text-xl">
                    {fetched_Biodata_State?.firstName ?? ""}
                  </span>
                </p>
                <p className="text-black text-xl">
                  Other Names:{" "}
                  <span className="ml-2 text-black text-xl">
                    {fetched_Biodata_State?.otherName ?? ""}
                  </span>
                </p>
                <p className="text-black text-xl">
                  Religion:{" "}
                  <span className="ml-2 text-black text-xl">
                    {fetched_Biodata_State?.religion ?? ""}
                  </span>
                </p>
                <p className="text-black text-xl">
                  Marital Status:{" "}
                  <span className="ml-2 text-black text-xl">
                    {fetched_Biodata_State?.maritalStatus ?? ""}
                  </span>
                </p>
                <p className="text-black text-xl">
                  No. of Children:{" "}
                  <span className="ml-2 text-black text-xl">
                    {fetched_Biodata_State?.NoOfChildren ?? ""}
                  </span>
                </p>
                <p className="text-black text-xl">
                  Date of Birth:{" "}
                  <span className="ml-2 text-black text-xl">
                    {fetched_Biodata_State?.DOB ?? ""}
                  </span>
                </p>
                <p className="text-black text-xl">
                  Gender:{" "}
                  <span className="ml-2 text-black text-xl">
                    {fetched_Biodata_State?.gender ?? ""}
                  </span>
                </p>
                <p className="text-black text-xl">
                  Height (meters):{" "}
                  <span className="ml-2 text-black text-xl">
                    {fetched_Biodata_State?.height ?? ""}
                  </span>
                </p>
                <p className="text-black text-xl">
                  State of Origin:{" "}
                  <span className="ml-2 text-black text-xl">
                    {fetched_Biodata_State?.stateOfOrigin ?? ""}
                  </span>
                </p>
                <p className="text-black text-xl">
                  LGA of Origin:{" "}
                  <span className="ml-2 text-black text-xl">
                    {fetched_Biodata_State?.LGA ?? ""}
                  </span>
                </p>
                <p className="text-black text-xl">
                  HomeTown:{" "}
                  <span className="ml-2 text-black text-xl">
                    {fetched_Biodata_State?.homeTown ?? ""}
                  </span>
                </p>
                <p className="text-black text-xl">
                  Mobile Number:{" "}
                  <span className="ml-2 text-black text-xl">
                    {fetched_Biodata_State?.mobileNumber ?? ""}
                  </span>
                </p>
                <p className="text-black text-xl">
                  Hobbies:{" "}
                  <span className="ml-2 text-black text-xl">
                    {fetched_Biodata_State?.hobbies ?? ""}
                  </span>
                </p>
                <p className="text-black text-xl">
                  Email:{" "}
                  <span className="ml-2 text-black text-xl">{providerUid}</span>
                </p>
                <p className="text-black text-xl">
                  Tattoo/Body Marks:{" "}
                  <span className="ml-2 text-black text-xl">
                    {fetched_Biodata_State?.tattoo ?? ""}
                  </span>
                </p>
                <p className="text-black text-xl">
                  Tribal Marks:{" "}
                  <span className="ml-2 text-black text-xl">
                    {fetched_Biodata_State?.tribalMarks ?? ""}
                  </span>
                </p>
              </div>
              <div className="grid grid-cols-1 gap-5 mb-20">
                <p className="text-black text-xl">
                  Permanent Address:{" "}
                  <span className="ml-2 text-black text-xl">
                    {fetched_Biodata_State?.permanentAddress ?? ""}
                  </span>
                </p>
                <p className="text-black text-xl">
                  Contact Address:{" "}
                  <span className="ml-2 text-black text-xl">
                    {fetched_Biodata_State?.contactAddress ?? ""}
                  </span>
                </p>
              </div>
            </div>
            {/* NOK */}
            <div className="Printable_Area mb-10 NOK" id="NOK">
              <div className="MainPrint_Header">
                <div className="flex items-center justify-center">
                  <img
                    src={Logo}
                    width="100px"
                    height="90px"
                    className="navbar-brand-logo"
                  />
                  <div className="flex flex-col">
                    <span className="text-4xl">NIGERIAN NAVY</span>{" "}
                    <span className="text-lg">2022 Recruitment Exercise</span>
                  </div>
                </div>
                <h3 className="text-center text-4xl my-8">Application Form</h3>
              </div>
              <h2 className="text-3xl font-bold my-5">Next of Kin</h2>
              <div className="grid grid-cols-2 gap-5 mb-20">
                <p className="text-black text-xl">
                  Full Name:{" "}
                  <span className="ml-2 text-black text-xl">
                    {fetched_NOK_Guardian_State?.fullName ?? ""}
                  </span>
                </p>
                <p className="text-black text-xl">
                  Occupation:{" "}
                  <span className="ml-2 text-black text-xl">
                    {fetched_NOK_Guardian_State?.occupation ?? ""}
                  </span>
                </p>
                <p className="text-black text-xl">
                  Post:{" "}
                  <span className="ml-2 text-black text-xl">
                    {fetched_NOK_Guardian_State?.post ?? ""}
                  </span>
                </p>
                <p className="text-black text-xl">
                  Email:{" "}
                  <span className="ml-2 text-black text-xl">
                    {fetched_NOK_Guardian_State?.email ?? ""}
                  </span>
                </p>
                <p className="text-black text-xl">
                  Relationship:{" "}
                  <span className="ml-2 text-black text-xl">
                    {fetched_NOK_Guardian_State?.relationShip ?? ""}
                  </span>
                </p>
                <p className="text-black text-xl">
                  MobileNumber:{" "}
                  <span className="ml-2 text-black text-xl">
                    {fetched_NOK_Guardian_State?.mobileNumber ?? ""}
                  </span>
                </p>
                <p className="text-black text-xl">
                  ContactAddress:{" "}
                  <span className="ml-2 text-black text-xl">
                    {fetched_NOK_Guardian_State?.contactAddress ?? ""}
                  </span>
                </p>
              </div>

              <h2 className="text-3xl font-bold my-5">
                Parent's / Guardian's Information
              </h2>
              <div className="grid grid-cols-2 gap-5 mb-20">
                <p className="text-black text-xl">
                  Full Name:
                  <span className="ml-2 text-black text-xl">
                    {fetched_NOK_Guardian_State?.parentFullName ?? ""}
                  </span>
                </p>
                <p className="text-black text-xl">
                  Residential Address:
                  <span className="ml-2 text-black text-xl">
                    {fetched_NOK_Guardian_State?.parentResidentialAddress ?? ""}
                  </span>
                </p>
              </div>

              <h2 className="text-3xl font-bold my-5">Referees</h2>
              <table className="w-full mb-20" cellPadding={12}>
                <thead className="border-b-2 border-t text-left">
                  <th>Referee Name</th>
                  <th>Referee Address</th>
                  <th>Referee Phone</th>
                </thead>
                <tr className="border-b">
                  <td>{fetched_NOK_Guardian_State?.refereeName1 ?? ""}</td>
                  <td>{fetched_NOK_Guardian_State?.refereeAddress1 ?? ""}</td>
                  <td>{fetched_NOK_Guardian_State?.refereePhone1 ?? ""}</td>
                </tr>
                <tr className="border-b">
                  <td>{fetched_NOK_Guardian_State?.refereeName2 ?? ""}</td>
                  <td>{fetched_NOK_Guardian_State?.refereeAddress2 ?? ""}</td>
                  <td>{fetched_NOK_Guardian_State?.refereePhone2 ?? ""}</td>
                </tr>
                <tr className="border-b">
                  <td>{fetched_NOK_Guardian_State?.refereeName3 ?? ""}</td>
                  <td>{fetched_NOK_Guardian_State?.refereeAddress3 ?? ""}</td>
                  <td>{fetched_NOK_Guardian_State?.refereePhone3 ?? ""}</td>
                </tr>
              </table>
            </div>
            {/* Education */}
            <div className="Printable_Area mb-10 Education" id="Education">
              <div className="MainPrint_Header">
                <div className="flex items-center justify-center">
                  <img
                    src={Logo}
                    width="100px"
                    height="90px"
                    className="navbar-brand-logo"
                  />
                  <div className="flex flex-col">
                    <span className="text-4xl">NIGERIAN NAVY</span>{" "}
                    <span className="text-lg">2022 Recruitment Exercise</span>
                  </div>
                </div>
                <h3 className="text-center text-4xl my-8">Application Form</h3>
              </div>

              <h2 className="text-3xl font-bold my-8 block">Primary School</h2>
              <table className="w-full mb-20" cellPadding={12}>
                <thead className="border-b-2 border-t text-left">
                  <th>School</th>
                  <th>Qualification</th>
                  <th>From</th>
                  <th>To</th>
                </thead>
                <tr className="border-b">
                  <td>{fetched_Education_Info_State?.primary ?? ""}</td>
                  <td>PSLC</td>
                  <td>{fetched_Education_Info_State?.primaryFrom ?? ""}</td>
                  <td>{fetched_Education_Info_State?.primaryTo ?? ""}</td>
                </tr>
              </table>

              <h2 className="text-3xl font-bold my-8">Secondary School</h2>
              <table className="w-full mb-20" cellPadding={12}>
                <thead className="border-b-2 border-t text-left">
                  <th>School</th>
                  <th>Qualification</th>
                  <th>From</th>
                  <th>To</th>
                </thead>
                <tr className="border-b">
                  <td>{fetched_Education_Info_State?.secondary ?? ""}</td>
                  <td>
                    {fetched_Education_Info_State?.secondaryQualification ?? ""}
                  </td>
                  <td>{fetched_Education_Info_State?.secondaryFrom ?? ""}</td>
                  <td>{fetched_Education_Info_State?.secondaryTo ?? ""}</td>
                </tr>
              </table>

              <h2 className="text-3xl font-bold my-8">Tertiary Institution</h2>
              <table className="w-full mb-20" cellPadding={12}>
                <thead className="border-b-2 border-t text-left">
                  <th>Institution</th>
                  <th>Course of Study</th>
                  <th>From</th>
                  <th>To</th>
                  <th>Qualification</th>
                </thead>
                <tr className="border-b">
                  <td>
                    {fetched_Education_Info_State?.institution?.trim() === ""
                      ? "nil"
                      : fetched_Education_Info_State?.institution}
                  </td>
                  <td>
                    {fetched_Education_Info_State?.courseOfStudy?.trim() === ""
                      ? "nil"
                      : fetched_Education_Info_State?.courseOfStudy}
                  </td>
                  <td>
                    {fetched_Education_Info_State?.institutionFrom?.trim() ===
                    ""
                      ? "nil"
                      : fetched_Education_Info_State?.institutionFrom}
                  </td>
                  <td>
                    {fetched_Education_Info_State?.institutionTo?.trim() === ""
                      ? "nil"
                      : fetched_Education_Info_State?.institutionTo}
                  </td>
                  <td>
                    {fetched_Education_Info_State?.institutionQualification?.trim() ===
                    ""
                      ? "nil"
                      : fetched_Education_Info_State?.institutionQualification}
                  </td>
                </tr>
              </table>
            </div>
            {/* SSCE */}
            <div className="Printable_Area mb-10 SSCE" id="SSCE">
              <div className="MainPrint_Header">
                <div className="flex items-center justify-center">
                  <img
                    src={Logo}
                    width="100px"
                    height="90px"
                    className="navbar-brand-logo"
                  />
                  <div className="flex flex-col">
                    <span className="text-4xl">NIGERIAN NAVY</span>{" "}
                    <span className="text-lg">2022 Recruitment Exercise</span>
                  </div>
                </div>
                <h3 className="text-center text-4xl my-8">Application Form</h3>
              </div>

              <div className="grid grid-cols-2 gap-5 mb-5">
                <p className="text-black text-xl">
                  Exam Type:{" "}
                  <span className="text-black text-xl ml-2">
                    {fetched_SSCE_Grade_State?.examType ?? ""}
                  </span>
                </p>
                <p className="text-black text-xl">
                  No. of sitting:{" "}
                  <span className="text-black text-xl ml-2">
                    {fetched_SSCE_Grade_State?.NoOfSitting ?? ""}
                  </span>
                </p>
                <p className="text-black text-xl">
                  Center No.:{" "}
                  <span className="text-black text-xl ml-2">
                    {fetched_SSCE_Grade_State?.centerNo ?? ""}
                  </span>
                </p>
                <p className="text-black text-xl">
                  Exam No.:{" "}
                  <span className="text-black text-xl ml-2">
                    {fetched_SSCE_Grade_State?.examNo ?? ""}
                  </span>
                </p>
              </div>
              <table className="w-full" cellPadding={12}>
                <thead className="border-b-2 border-t text-left">
                  <th>Subject</th>
                  <th>Grade</th>
                </thead>
                <tr className="border-b">
                  <td>English Langaude</td>
                  <td>{fetched_SSCE_Grade_State?.grade1 ?? ""}</td>
                </tr>
                <tr className="border-b">
                  <td>Mathematics</td>
                  <td>{fetched_SSCE_Grade_State?.grade2 ?? ""}</td>
                </tr>
                <tr className="border-b">
                  <td>{fetched_SSCE_Grade_State?.subject3 ?? ""}</td>
                  <td>{fetched_SSCE_Grade_State?.grade3 ?? ""}</td>
                </tr>
                <tr className="border-b">
                  <td>{fetched_SSCE_Grade_State?.subject4 ?? ""}</td>
                  <td>{fetched_SSCE_Grade_State?.grade4 ?? ""}</td>
                </tr>
                <tr className="border-b">
                  <td>{fetched_SSCE_Grade_State?.subject5 ?? ""}</td>
                  <td>{fetched_SSCE_Grade_State?.grade5 ?? ""}</td>
                </tr>
                <tr className="border-b">
                  <td>{fetched_SSCE_Grade_State?.subject6 ?? ""}</td>
                  <td>{fetched_SSCE_Grade_State?.grade6 ?? ""}</td>
                </tr>
                <tr className="border-b">
                  <td>{fetched_SSCE_Grade_State?.subject7 ?? ""}</td>
                  <td>{fetched_SSCE_Grade_State?.grade7 ?? ""}</td>
                </tr>
                <tr className="border-b">
                  <td>{fetched_SSCE_Grade_State?.subject8 ?? ""}</td>
                  <td>{fetched_SSCE_Grade_State?.grade8 ?? ""}</td>
                </tr>
                <tr className="border-b">
                  <td>{fetched_SSCE_Grade_State?.subject9 ?? ""}</td>
                  <td>{fetched_SSCE_Grade_State?.grade9 ?? ""}</td>
                </tr>
              </table>
            </div>
            {/* Additional */}
            <div className="Printable_Area mb-10 Additional" id="Additional">
              <div className="MainPrint_Header">
                <div className="flex items-center justify-center">
                  <img
                    src={Logo}
                    width="100px"
                    height="90px"
                    className="navbar-brand-logo"
                  />
                  <div className="flex flex-col">
                    <span className="text-4xl">NIGERIAN NAVY</span>{" "}
                    <span className="text-lg">2022 Recruitment Exercise</span>
                  </div>
                </div>
                <h3 className="text-center text-4xl my-8">Application Form</h3>
              </div>
              <h2 className="text-3xl font-bold my-5">
                Additional Information
              </h2>
              <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-1">
                  <p className="text-black text-xl">
                    Have you ever served in the Armed Forces or any other
                    security agency?:{" "}
                    <span className="ml-2 text-black text-xl">
                      {fetched_Additional_Info_State?.question1 ?? ""}
                    </span>
                  </p>
                  <p className="text-black text-xl">
                    Reason for leaving:{" "}
                    <span className="ml-2 text-black text-xl">
                      {fetched_Additional_Info_State?.question1_Reason ?? ""}
                    </span>
                  </p>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-black text-xl">
                    Do you have any Job Experience?:{" "}
                    <span className="ml-2 text-black text-xl">
                      {fetched_Additional_Info_State?.question2 ?? ""}
                    </span>{" "}
                  </p>
                  <p className="text-black text-xl">
                    Reason for leaving:{" "}
                    <span className="ml-2 text-black text-xl">
                      {fetched_Additional_Info_State?.question2_Reason ?? ""}
                    </span>
                  </p>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-black text-xl">
                    Have you ever been detained by the Police?:{" "}
                    <span className="text-black text-xl ml-2">
                      {fetched_Additional_Info_State?.question3 ?? ""}
                    </span>
                  </p>
                  <p className="text-black text-xl">
                    Reason:{" "}
                    <span className="text-black text-xl ml-2">
                      {fetched_Additional_Info_State?.question3_Reason ?? ""}
                    </span>
                  </p>
                  <p className="text-black text-xl">
                    Duration of detention:{" "}
                    <span className="text-black text-xl ml-2">
                      {fetched_Additional_Info_State?.question3_Duration ?? ""}
                    </span>
                  </p>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-black text-xl">
                    Have you ever been convicted by a Court of Law?:{" "}
                    <span className="ml-2 text-black text-xl">
                      {fetched_Additional_Info_State?.question4 ?? ""}
                    </span>
                  </p>
                  <p className="text-black text-xl">
                    Reason for leaving:{" "}
                    <span className="ml-2 text-black text-xl">
                      {fetched_Additional_Info_State?.question4_Reason ?? ""}
                    </span>
                  </p>
                  <p className="text-black text-xl">
                    Conviction:{" "}
                    <span className="ml-2 text-black text-xl">
                      {fetched_Additional_Info_State?.question4_Conviction ??
                        ""}
                    </span>
                  </p>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-black text-xl">
                    Have you ever travelled out of the country?:{" "}
                    <span className="ml-2 text-black text-xl">
                      {fetched_Additional_Info_State?.question5 ?? ""}
                    </span>
                  </p>
                  <p className="text-black text-xl">
                    Travel details:{" "}
                    <span className="ml-2 text-black text-xl">
                      {fetched_Additional_Info_State?.question5_Reason ?? ""}
                    </span>
                  </p>
                </div>
              </div>

              <h2 className="text-3xl font-bold my-5">
                Do you have any relative(s) serving or that served in the Armed
                Forces?
              </h2>
              <h2 className="text-3xl font-bold my-5">#1</h2>
              <div className="grid grid-cols-2 gap-5 mb-10">
                <p className="text-black text-xl">
                  Full Name:{" "}
                  <span className="ml-2">
                    {fetched_Additional_Info_State?.Relative1_Name ?? ""}
                  </span>
                </p>
                <p className="text-black text-xl">
                  Last Rank:{" "}
                  <span className="ml-2">
                    {fetched_Additional_Info_State?.Relative1_LastRank ?? ""}
                  </span>
                </p>
                <p className="text-black text-xl">
                  Force:{" "}
                  <span className="ml-2">
                    {fetched_Additional_Info_State?.Relative1_Force ?? ""}
                  </span>
                </p>
                <p className="text-black text-xl">
                  Still in service:{" "}
                  <span className="ml-2">
                    {fetched_Additional_Info_State?.Relative1_StillInService ??
                      ""}
                  </span>
                </p>
              </div>
              <h2 className="text-3xl font-bold my-5">#2</h2>
              <div className="grid grid-cols-2 gap-5 mb-10">
                <p className="text-black text-xl">
                  Full Name:{" "}
                  <span className="ml-2">
                    {fetched_Additional_Info_State?.Relative2_Name ?? ""}
                  </span>
                </p>
                <p className="text-black text-xl">
                  Last Rank:{" "}
                  <span className="ml-2">
                    {fetched_Additional_Info_State?.Relative2_LastRank ?? ""}
                  </span>
                </p>
                <p className="text-black text-xl">
                  Force:{" "}
                  <span className="ml-2">
                    {fetched_Additional_Info_State?.Relative2_Force ?? ""}
                  </span>
                </p>
                <p className="text-black text-xl">
                  Still in service:{" "}
                  <span className="ml-2">
                    {fetched_Additional_Info_State?.Relative2_StillInService ??
                      ""}
                  </span>
                </p>
              </div>
            </div>
            {/* Applicant_Declaration */}
            <div
              className="Printable_Area mb-10 Applicant_Declaration"
              id="Applicant_Declaration"
            >
              <div className="MainPrint_Header">
                <div className="flex items-center justify-center">
                  <img
                    src={Logo}
                    width="100px"
                    height="90px"
                    className="navbar-brand-logo"
                  />
                  <div className="flex flex-col">
                    <span className="text-4xl">NIGERIAN NAVY</span>{" "}
                    <span className="text-lg">2022 Recruitment Exercise</span>
                  </div>
                </div>

                <h3 className="text-center text-4xl my-8">Application Form</h3>
                <p className="text-center text-xl mb-4">
                  APPLICANT'S DECLARATION
                </p>
              </div>
              <div className="flex justify-end mb-10">
                <div className="w-48 h-52 bg-slate-300 mb-3 rounded border">
                  <img
                    src={profileImage}
                    className="w-48 h-52 rounded"
                    alt="Applicant Passport"
                  />
                </div>
              </div>
              <div className="row DeclarationContainer mt-5">
                <p className="mb-4 text-xl">
                  {`Application Number: NNR34/2023/
            ${fetched_Biodata_State?.stateOfOrigin?.substring(0, 3)}/${
                    applicant_ID?.application_id
                  }`}
                </p>
                <p className="mb-4 text-xl">
                  I{" "}
                  <span>
                    {fetched_Biodata_State?.surName ?? ""}{" "}
                    {fetched_Biodata_State?.firstName ?? ""}{" "}
                    {fetched_Biodata_State?.otherName ?? ""}
                  </span>
                  , hereby declare that the information given in this
                  application it true and that if found to be false I should be
                  prosecuted.
                </p>
                <div className="flex justify-around mb-8">
                  <p className="text-xl">
                    Signature:
                    ...........................................................................................................
                  </p>
                  <p className="text-xl">
                    Date:
                    ...........................................................................................................
                  </p>
                </div>
                <p className="text-center font-bold text-xl mb-4">
                  Certification by Parents / Gaurdian
                </p>
                <p className="mb-10 text-xl">
                  I
                  .......................................................................................................................................................
                  parent/gaurdian of
                  ........................................................................,
                  who is applying for recruitment into the Nigerian Navy, hereby
                  certify that I fully understand that my child/ward will (if
                  required to) attend the Recruitment Exercise and I shall not
                  demand compensation or relief from the Government in respect
                  of death or any injury which my child/ward may sustain in the
                  course of or as a result of any task given to him/her during
                  the exercise.
                </p>
                <div className="flex justify-around">
                  <div className="flex flex-col items-center gap-5">
                    <p className="text-center font-bold text-xl ">
                      Parent / Gaurdian
                    </p>
                    <p className="text-xl">
                      Name:
                      ....................................................................................................................
                    </p>
                    <p className="text-xl">
                      Address:
                      ...............................................................................................................
                    </p>
                    <p className="text-xl">
                      Signature:
                      ...........................................................................................................
                    </p>
                    <p className="text-xl">
                      Date:
                      .......................................................................................................................
                    </p>
                  </div>
                  <div className="flex flex-col gap-5">
                    <p className="text-center font-bold text-xl ">Witness</p>
                    <p className="text-xl">
                      Name:
                      ....................................................................................................................
                    </p>
                    <p className="text-xl">
                      Address:
                      ...............................................................................................................
                    </p>
                    <p className="text-xl">
                      Signature:
                      ...........................................................................................................
                    </p>
                    <p className="text-xl">
                      Date:
                      .......................................................................................................................
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* LGA_CERTIFICATION */}
            <div
              className="Printable_Area mb-10 LGA_CERTIFICATION"
              id="LGA_CERTIFICATION"
            >
              <div className="MainPrint_Header">
                <div className="flex items-center justify-center">
                  <img
                    src={Logo}
                    width="100px"
                    height="90px"
                    className="navbar-brand-logo"
                  />
                  <div className="flex flex-col">
                    <span className="text-4xl">NIGERIAN NAVY</span>{" "}
                    <span className="text-lg">2022 Recruitment Exercise</span>
                  </div>
                </div>

                <h3 className="text-center text-3xl my-8">Application Form</h3>
                <p className="text-center text-xl mb-4">
                  LOCAL GOVERNMENT AREA CERTIFICATION
                </p>
              </div>
              <div className="flex justify-end">
                <div className="w-48 h-52 bg-slate-300 mb-3 rounded border">
                  <img
                    src={profileImage}
                    className="w-48 h-52 rounded"
                    alt="Applicant Passport"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-5 mb-5">
                <p className="text-black text-xl">
                  {`Application Number: NNR34/2023/
            ${fetched_Biodata_State?.stateOfOrigin?.substring(0, 3)}/${
                    applicant_ID?.application_id
                  }`}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-5 mb-5">
                <p className="text-black text-xl">
                  Title:{" "}
                  <span className="ml-2 text-black text-xl">
                    {fetched_Biodata_State?.title ?? ""}
                  </span>
                </p>
                <p className="text-black text-xl">
                  Surname:{" "}
                  <span className="ml-2 text-black text-xl">
                    {fetched_Biodata_State?.surName ?? ""}
                  </span>
                </p>
                <p className="text-black text-xl">
                  First Name:{" "}
                  <span className="ml-2 text-black text-xl">
                    {fetched_Biodata_State?.firstName ?? ""}
                  </span>
                </p>
                <p className="text-black text-xl">
                  Other Names:{" "}
                  <span className="ml-2 text-black text-xl">
                    {fetched_Biodata_State?.otherName ?? ""}
                  </span>
                </p>
                <p className="text-black text-xl">
                  Religion:{" "}
                  <span className="ml-2 text-black text-xl">
                    {fetched_Biodata_State?.religion ?? ""}
                  </span>
                </p>
                <p className="text-black text-xl">
                  Marital Status:{" "}
                  <span className="ml-2 text-black text-xl">
                    {fetched_Biodata_State?.maritalStatus ?? ""}
                  </span>
                </p>

                <p className="text-black text-xl">
                  Date of Birth:{" "}
                  <span className="ml-2 text-black text-xl">
                    {fetched_Biodata_State?.DOB ?? ""}
                  </span>
                </p>
                <p className="text-black text-xl">
                  Gender:{" "}
                  <span className="ml-2 text-black text-xl">
                    {fetched_Biodata_State?.gender ?? ""}
                  </span>
                </p>
                <p className="text-black text-xl">
                  State of Origin:{" "}
                  <span className="ml-2 text-black text-xl">
                    {fetched_Biodata_State?.stateOfOrigin ?? ""}
                  </span>
                </p>
                <p className="text-black text-xl">
                  LGA of Origin:{" "}
                  <span className="ml-2 text-black text-xl">
                    {fetched_Biodata_State?.LGA ?? ""}
                  </span>
                </p>
                <p className="text-black text-xl">
                  HomeTown:{" "}
                  <span className="ml-2 text-black text-xl">
                    {fetched_Biodata_State?.homeTown ?? ""}
                  </span>
                </p>
                <p className="text-black text-xl">
                  Mobile Number:{" "}
                  <span className="ml-2 text-black text-xl">
                    {fetched_Biodata_State?.mobileNumber ?? ""}
                  </span>
                </p>
                <p className="text-black text-xl">
                  Height (meters):{" "}
                  <span className="ml-2 text-black text-xl">
                    {fetched_Biodata_State?.height ?? ""}
                  </span>
                </p>
                <p className="text-black text-xl">
                  Email:{" "}
                  <span className="ml-2 text-black text-xl">{providerUid}</span>
                </p>
              </div>
              <div className="grid grid-cols-1 mb-10">
                <p className="text-black text-xl">
                  Permanent Address:{" "}
                  <span className="ml-2 text-black text-xl">
                    {fetched_Biodata_State?.permanentAddress ?? ""}
                  </span>
                </p>
              </div>

              <p className="text-center text-xl mb-4 font-semibold">
                Certification by LGA Chairman / Secretary Or Senior Military
                Officer not below the of Commander or equivalent Or Chief
                Superintendent of Police from Applicant's State of Origin
              </p>
              <p className="text-xl">
                I certify that the applicant
                ....................................................... is an
                indigene of .................................................
                L.G.A, ...................................................
                State, and that to the best of my knowledge and belief, the
                facts stated on the form are correct. I hereby declare that if
                any statement made in connection with this application is proven
                to be false I should be prosecuted.
              </p>
              <div className="ml-10 my-5">
                <div className="flex flex-col gap-5">
                  <p className="text-xl">
                    Name:
                    ......................................................................................................................................................
                  </p>
                  <p className="text-xl">
                    Address:
                    .................................................................................................................................................
                  </p>
                  <p className="text-xl">
                    Signature:
                    .............................................................................................................................................
                  </p>
                  <p className="text-xl">
                    Date:
                    .........................................................................................................................................................
                  </p>
                </div>
              </div>
            </div>
            {/* Police_CERTIFICATION */}
            <div
              className="Printable_Area mb-10 Police_CERTIFICATION"
              id="Police_CERTIFICATION"
            >
              <div className="MainPrint_Header">
                <div className="flex items-center justify-center">
                  <img
                    src={Logo}
                    width="100px"
                    height="90px"
                    className="navbar-brand-logo"
                  />
                  <div className="flex flex-col">
                    <span className="text-4xl">NIGERIAN NAVY</span>{" "}
                    <span className="text-lg">2022 Recruitment Exercise</span>
                  </div>
                </div>

                <h3 className="text-center text-3xl my-8">Application Form</h3>
                <p className="text-center text-xl mb-4">POLICE CERTIFICATION</p>
              </div>
              <div className="flex justify-end">
                <div className="w-48 h-52 bg-slate-300 mb-3 rounded border">
                  <img
                    src={profileImage}
                    className="w-48 h-52 rounded"
                    alt="Applicant Passport"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 gap-5 mb-6">
                <p className="text-black text-xl">
                  {`Application Number: NNR34/2023/
            ${fetched_Biodata_State?.stateOfOrigin?.substring(0, 3)}/${
                    applicant_ID?.application_id
                  }`}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-5 mb-5">
                <p className="text-black text-xl">
                  Title:{" "}
                  <span className="ml-2 text-black text-xl">
                    {fetched_Biodata_State?.title ?? ""}
                  </span>
                </p>
                <p className="text-black text-xl">
                  Surname:{" "}
                  <span className="ml-2 text-black text-xl">
                    {fetched_Biodata_State?.surName ?? ""}
                  </span>
                </p>
                <p className="text-black text-xl">
                  First Name:{" "}
                  <span className="ml-2 text-black text-xl">
                    {fetched_Biodata_State?.firstName ?? ""}
                  </span>
                </p>
                <p className="text-black text-xl">
                  Other Names:{" "}
                  <span className="ml-2 text-black text-xl">
                    {fetched_Biodata_State?.otherName ?? ""}
                  </span>
                </p>
                <p className="text-black text-xl">
                  Religion:{" "}
                  <span className="ml-2 text-black text-xl">
                    {fetched_Biodata_State?.religion ?? ""}
                  </span>
                </p>
                <p className="text-black text-xl">
                  Marital Status:{" "}
                  <span className="ml-2 text-black text-xl">
                    {fetched_Biodata_State?.maritalStatus ?? ""}
                  </span>
                </p>

                <p className="text-black text-xl">
                  Date of Birth:{" "}
                  <span className="ml-2 text-black text-xl">
                    {fetched_Biodata_State?.DOB ?? ""}
                  </span>
                </p>
                <p className="text-black text-xl">
                  Gender:{" "}
                  <span className="ml-2 text-black text-xl">
                    {fetched_Biodata_State?.gender ?? ""}
                  </span>
                </p>
                <p className="text-black text-xl">
                  State of Origin:{" "}
                  <span className="ml-2 text-black text-xl">
                    {fetched_Biodata_State?.stateOfOrigin ?? ""}
                  </span>
                </p>
                <p className="text-black text-xl">
                  LGA of Origin:{" "}
                  <span className="ml-2 text-black text-xl">
                    {fetched_Biodata_State?.LGA ?? ""}
                  </span>
                </p>
                <p className="text-black text-xl">
                  HomeTown:{" "}
                  <span className="ml-2 text-black text-xl">
                    {fetched_Biodata_State?.homeTown ?? ""}
                  </span>
                </p>
                <p className="text-black text-xl">
                  Mobile Number:{" "}
                  <span className="ml-2 text-black text-xl">
                    {fetched_Biodata_State?.mobileNumber ?? ""}
                  </span>
                </p>
                <p className="text-black text-xl">
                  Height (meters):{" "}
                  <span className="ml-2 text-black text-xl">
                    {fetched_Biodata_State?.height ?? ""}
                  </span>
                </p>
                <p className="text-black text-xl">
                  Email:{" "}
                  <span className="ml-2 text-black text-xl">{providerUid}</span>
                </p>
              </div>
              <div className="grid grid-cols-1 mb-10">
                <p className="text-black text-xl">
                  Permanent Address:{" "}
                  <span className="ml-2 text-black text-xl">
                    {fetched_Biodata_State?.permanentAddress ?? ""}
                  </span>
                </p>
              </div>

              <p className="text-center font-semibold text-xl mb-4">
                Certification by Divisional Police Officer
              </p>
              <p className="text-xl">
                I certify that the applicant
                ....................................................... is an
                indigene of .................................................
                L.G.A, ................................................... State
                and that his/her parent hails from
                ............................................ L.G.A. of
                ......................................... State, That he/she has
                no criminal record on him/her. (if any state briefly)
                ....................................................................................................................................................................................................................................................................................
                That to the best of my knowledge and belief that facts stated in
                the form are correct and I hereby declare that if any statement
                made in connection with this application is proven to be false I
                should be prosecuted.
              </p>
              <div className="ml-10 my-5">
                <div className="flex flex-col gap-5">
                  <p className="text-xl">
                    Name:
                    ......................................................................................................................................................
                  </p>
                  <p className="text-xl">
                    Address:
                    .................................................................................................................................................
                  </p>
                  <p className="text-xl">
                    Signature:
                    .............................................................................................................................................
                  </p>
                  <p className="text-xl">
                    Date:
                    .........................................................................................................................................................
                  </p>
                </div>
              </div>
            </div>
            {/* Guarantor_Form */}
            <div
              className="Printable_Area mb-10 Guarantor_Form"
              id="Guarantor_Form"
            >
              <div className="MainPrint_Header">
                <div className="flex items-center justify-center">
                  <img
                    src={Logo}
                    width="100px"
                    height="90px"
                    className="navbar-brand-logo"
                  />
                  <div className="flex flex-col">
                    <span className="text-4xl">NIGERIAN NAVY</span>{" "}
                    <span className="text-lg">2022 Recruitment Exercise</span>
                  </div>
                </div>

                <h3 className="text-center text-3xl my-6">Application Form</h3>
                <p className="text-center text-xl mb-2">GUARANTOR'S FORM</p>
              </div>
              <div className="flex justify-end">
                <div className="w-48 h-52 bg-slate-300 mb-2 rounded border">
                  <img
                    src={profileImage}
                    className="w-48 h-52 rounded"
                    alt="Applicant Passport"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 gap-5 mb-3">
                <p className="text-black text-xl">
                  {`Application Number: NNR34/2023/
            ${fetched_Biodata_State?.stateOfOrigin?.substring(0, 3)}/${
                    applicant_ID?.application_id
                  }`}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 mb-5">
                <p className="text-black text-xl">
                  Title:{" "}
                  <span className="ml-2 text-black text-xl">
                    {fetched_Biodata_State?.title ?? ""}
                  </span>
                </p>
                <p className="text-black text-xl">
                  Surname:{" "}
                  <span className="ml-2 text-black text-xl">
                    {fetched_Biodata_State?.surName ?? ""}
                  </span>
                </p>
                <p className="text-black text-xl">
                  First Name:{" "}
                  <span className="ml-2 text-black text-xl">
                    {fetched_Biodata_State?.firstName ?? ""}
                  </span>
                </p>
                <p className="text-black text-xl">
                  Other Names:{" "}
                  <span className="ml-2 text-black text-xl">
                    {fetched_Biodata_State?.otherName ?? ""}
                  </span>
                </p>
                <p className="text-black text-xl">
                  Religion:{" "}
                  <span className="ml-2 text-black text-xl">
                    {fetched_Biodata_State?.religion ?? ""}
                  </span>
                </p>
                <p className="text-black text-xl">
                  Marital Status:{" "}
                  <span className="ml-2 text-black text-xl">
                    {fetched_Biodata_State?.maritalStatus ?? ""}
                  </span>
                </p>

                <p className="text-black text-xl">
                  Date of Birth:{" "}
                  <span className="ml-2 text-black text-xl">
                    {fetched_Biodata_State?.DOB ?? ""}
                  </span>
                </p>
                <p className="text-black text-xl">
                  Gender:{" "}
                  <span className="ml-2 text-black text-xl">
                    {fetched_Biodata_State?.gender ?? ""}
                  </span>
                </p>
                <p className="text-black text-xl">
                  State of Origin:{" "}
                  <span className="ml-2 text-black text-xl">
                    {fetched_Biodata_State?.stateOfOrigin ?? ""}
                  </span>
                </p>
                <p className="text-black text-xl">
                  LGA of Origin:{" "}
                  <span className="ml-2 text-black text-xl">
                    {fetched_Biodata_State?.LGA ?? ""}
                  </span>
                </p>
                <p className="text-black text-xl">
                  HomeTown:{" "}
                  <span className="ml-2 text-black text-xl">
                    {fetched_Biodata_State?.homeTown ?? ""}
                  </span>
                </p>
                <p className="text-black text-xl">
                  Mobile Number:{" "}
                  <span className="ml-2 text-black text-xl">
                    {fetched_Biodata_State?.mobileNumber ?? ""}
                  </span>
                </p>
                <p className="text-black text-xl">
                  Height (meters):{" "}
                  <span className="ml-2 text-black text-xl">
                    {fetched_Biodata_State?.height ?? ""}
                  </span>
                </p>
                <p className="text-black text-xl">
                  Email:{" "}
                  <span className="ml-2 text-black text-xl">{providerUid}</span>
                </p>
              </div>
              <div className="grid grid-cols-1 mb-5">
                <p className="text-black text-xl">
                  Permanent Address:{" "}
                  <span className="ml-2 text-black text-xl">
                    {fetched_Biodata_State?.permanentAddress ?? ""}
                  </span>
                </p>
              </div>
              <p className="text-center font-semibold text-xl mb-4">
                Particular's of Gaurantor
              </p>
              <div className="row">
                <div className="grid grid-cols-2 gap-2 mb-2">
                  <p className="text-xl">
                    Surname:
                    ......................................................................................................................
                  </p>
                  <p className="text-xl">
                    Middle Name:
                    ...........................................................................................................
                  </p>
                  <p className="text-xl">
                    LGA:
                    .................................................................................................................................
                  </p>
                  <p className="text-xl">
                    Mobile:
                    ..........................................................................................................................
                  </p>
                  <p className="text-xl">
                    Appointment:
                    ...........................................................................................................
                  </p>
                  <p className="text-xl">
                    First Name:
                    ......................................................................................................................
                  </p>
                  <p className="text-xl">
                    Town:
                    ...................................................................................................................................
                  </p>
                  <p className="text-xl">
                    State of Origin:
                    ..............................................................................................................
                  </p>
                  <p className="text-xl">
                    E-Mail:
                    ..................................................................................................................................
                  </p>
                  <p className="text-xl">
                    How long have you known the candidate:
                    ..............................................
                  </p>
                </div>
                <div className="grid grid-cols-1 gap-2 mb-6">
                  <p className="text-xl">
                    Formation/Unit/Office Address:
                    ......................................................................................................................................................................................................................................
                  </p>
                  <p className="text-xl">
                    Residential Address:
                    ..................................................................................................................................................................................................................................................................
                  </p>
                  <p className="text-xl">
                    Contact Address:
                    ..........................................................................................................................................................................................................................................................................
                  </p>
                  <p className="text-xl">
                    Name:
                    ...................................................................................................................................................................................................................................................................................................
                  </p>
                  <p className="text-xl">
                    Address:
                    ..............................................................................................................................................................................................................................................................................................
                  </p>
                  <p className="text-xl">
                    Signature:
                    ...........................................................................................................................................................................................................................................................................................
                  </p>
                  <p className="text-xl">
                    Date:
                    ......................................................................................................................................................................................................................................................................................................
                  </p>
                </div>
                <p>
                  This form is to be filled by a Military Officer not below the
                  rank of Lt Col or equipvalent/Police Officer not below the
                  rank of Chief Superintendent of Police/Assistant Director at
                  either Federal or State Civil Service certifying the
                  eligibility of the applicant. You need not to come from an
                  applicant's State of Origin to guarantee him/her only be sure
                  of the character. Please note that inability to confirm the
                  above given information about you, will lead to automatic
                  disqualification of the candidate.
                </p>
              </div>
            </div>
            {/* Official */}
            <div className="Printable_Area Official" id="Official">
              <div className="MainPrint_Header">
                <div className="flex items-center justify-center">
                  <img
                    src={Logo}
                    width="100px"
                    height="90px"
                    className="navbar-brand-logo"
                  />
                  <div className="flex flex-col">
                    <span className="text-4xl">NIGERIAN NAVY</span>{" "}
                    <span className="text-lg">2022 Recruitment Exercise</span>
                  </div>
                </div>

                <h3 className="text-center text-3xl my-5">Application Form</h3>
                <p className="text-center text-xl mb-4">
                  FOR OFFICIAL USE ONLY
                </p>
              </div>
              <div className="flex justify-end">
                <div className="w-48 h-52 bg-slate-300 mb-2 rounded border">
                  <img
                    src={profileImage}
                    className="w-48 h-52 rounded"
                    alt="Applicant Passport"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 gap-3">
                <p className="text-black text-xl">
                  {`Application Number: NNR34/2023/
            ${fetched_Biodata_State?.stateOfOrigin?.substring(0, 3)}/${
                    applicant_ID?.application_id
                  }`}
                </p>
                <p className="text-xl">
                  Applicant's Full Name:{" "}
                  <span className="text-xl">
                    {fetched_Biodata_State?.surName ?? ""}{" "}
                    {fetched_Biodata_State?.firstName ?? ""}{" "}
                    {fetched_Biodata_State?.otherName ?? ""}
                  </span>
                </p>
                <p className="text-xl">
                  Data Recieved:
                  ...............................................................................................................
                </p>
                <p className="text-xl">
                  Education Qualification: Number Of Credits/Passes obtained
                  (SSCE / GCE / WASCE / NECO):
                  .........................................
                </p>
                <p className="text-xl">Documents Attached</p>
                <div className="m-auto w-50 flex flex-col gap-3">
                  <p className="text-xl">
                    a)
                    ...................................................................................................................................................................
                  </p>
                  <p className="text-xl">
                    b)
                    ...................................................................................................................................................................
                  </p>
                  <p className="text-xl">
                    c)
                    ...................................................................................................................................................................
                  </p>
                  <p className="text-xl">
                    d)
                    ...................................................................................................................................................................
                  </p>
                  <p className="text-xl">
                    e)
                    ...................................................................................................................................................................
                  </p>
                </div>
                <p className="text-xl">Detailed Result</p>
                <div className="m-auto w-50 flex flex-col gap-3">
                  <p className="text-xl">
                    Medical Fitness:
                    .................................................................................................................................
                  </p>
                  <p className="text-xl">
                    General aptitute test score:
                    ......................................................................................................
                  </p>
                  <p className="text-xl">
                    Vocational aptitude test score:
                    .............................................................................................
                  </p>
                </div>
                <p className="text-xl">Remark</p>
                <p className="text-xl">
                  ........................................................................................................................................................................................................................................................................................................................................................................
                </p>
                <p className="text-xl">
                  ........................................................................................................................................................................................................................................................................................................................................................................
                </p>
                <p className="text-xl">
                  ........................................................................................................................................................................................................................................................................................................................................................................
                </p>
                <div className="m-auto w-50 flex flex-col gap-3">
                  <p className="text-xl">
                    Rank:
                    ..........................................................................................................................................................
                  </p>
                  <p className="text-xl">
                    Name:
                    ........................................................................................................................................................
                  </p>
                  <p className="text-xl">
                    Signature and Date:
                    .......................................................................................................................
                  </p>
                </div>
                <p className="text-xl">Director, DRRR</p>
                <div className="m-auto w-50 flex flex-col gap-3">
                  <p className="text-xl">
                    Rank:
                    ..........................................................................................................................................................
                  </p>
                  <p className="text-xl">
                    Name:
                    ........................................................................................................................................................
                  </p>
                  <p className="text-xl">
                    Signature and Date:
                    .......................................................................................................................
                  </p>
                </div>
              </div>
            </div>
          </section>
        </>
      ) : (
        <div className="w-full h-screen flex justify-center items-center">
          <Spinner className="w-10 fill-NAVY_Blue text-NAVY_Gray" />
        </div>
      )}
    </>
  );
};

export default PrintApplication;
