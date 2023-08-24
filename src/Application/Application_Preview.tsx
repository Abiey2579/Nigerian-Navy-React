import { useState, useEffect } from "react";
import * as uriPaths from "../Asset/common/uriPaths";
import Navbar from "./components/Navbar";
import ApplicationSteps from "./components/ApplicationSteps";
import { useNavigate } from "react-router-dom";
import {
  fetch_Biodata,
  fetch_NOK_Guardian,
  fetch_Education_Info,
  fetch_SSCE_Grade,
  fetch_Additional_Info,
  save_Application_ID,
  fetch_Application_ID,
} from "../Asset/config/functions";
import * as Model from "../Asset/model/model";
import Spinner from "../Components/Spinner";
import {
  account,
  storage,
  PROFILE_PICTURE_BUCKET,
} from "../Asset/config/appwrite";

const ApplicationPreview = () => {
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
  const [providerUid, setProviderUid] = useState<string>("");
  const [spin, setSpin] = useState<boolean>(false);
  const [preventView, setPreventView] = useState<boolean>(true);
  const [profileImage, setProfileImage] = useState<string>("");

  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      setSpin(true);
      await save_Application_ID(uid);
      navigate(uriPaths.PRINT_APPLICATION);
    } catch (error) {
      setSpin(false);
      throw new Error((error as Error).message);
    }
  };

  const handlePrevious = () => {
    navigate(uriPaths.ADDITIONAL_INFO);
  };

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
          navigate(uriPaths.PRINT_APPLICATION);
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
      {/* TO PREVENT VIEWING APPLICATION BEFORE LOADING DATA */}
      {preventView === false ? (
        <>
          <Navbar email={providerUid} />
          <ApplicationSteps />
          <section className="lg:px-24 md:px-10 px-3 mt-5 mb-5">
            <h2 className="text-3xl font-bold my-5">
              Particulars of Candidate
            </h2>
            <div className="flex justify-end mb-10">
              <div
                className="w-48 h-52 bg-slate-300 mb-3 bg-center bg-no-repeat bg-cover rounded border"
                style={{
                  backgroundImage: `url(${profileImage})`,
                }}
              ></div>
            </div>

            <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-8 mb-20">
              <p className="text-black">
                Title:{" "}
                <span className="ml-2 text-black">
                  {fetched_Biodata_State?.title ?? ""}
                </span>
              </p>
              <p className="text-black">
                Surname:{" "}
                <span className="ml-2 text-black">
                  {fetched_Biodata_State?.surName ?? ""}
                </span>
              </p>
              <p className="text-black">
                First Name:{" "}
                <span className="ml-2 text-black">
                  {fetched_Biodata_State?.firstName ?? ""}
                </span>
              </p>
              <p className="text-black">
                Other Names:{" "}
                <span className="ml-2 text-black">
                  {fetched_Biodata_State?.otherName ?? ""}
                </span>
              </p>
              <p className="text-black">
                Religion:{" "}
                <span className="ml-2 text-black">
                  {fetched_Biodata_State?.religion ?? ""}
                </span>
              </p>
              <p className="text-black">
                Marital Status:{" "}
                <span className="ml-2 text-black">
                  {fetched_Biodata_State?.maritalStatus ?? ""}
                </span>
              </p>
              <p className="text-black">
                No. of Children:{" "}
                <span className="ml-2 text-black">
                  {fetched_Biodata_State?.NoOfChildren ?? ""}
                </span>
              </p>
              <p className="text-black">
                Date of Birth:{" "}
                <span className="ml-2 text-black">
                  {fetched_Biodata_State?.DOB ?? ""}
                </span>
              </p>
              <p className="text-black">
                Gender:{" "}
                <span className="ml-2 text-black">
                  {fetched_Biodata_State?.gender ?? ""}
                </span>
              </p>
              <p className="text-black">
                Height (meters):{" "}
                <span className="ml-2 text-black">
                  {fetched_Biodata_State?.height ?? ""}
                </span>
              </p>
              <p className="text-black">
                State of Origin:{" "}
                <span className="ml-2 text-black">
                  {fetched_Biodata_State?.stateOfOrigin?.substring(5) ?? ""}
                </span>
              </p>
              <p className="text-black">
                LGA of Origin:{" "}
                <span className="ml-2 text-black">
                  {fetched_Biodata_State?.LGA ?? ""}
                </span>
              </p>
              <p className="text-black">
                HomeTown:{" "}
                <span className="ml-2 text-black">
                  {fetched_Biodata_State?.homeTown ?? ""}
                </span>
              </p>
              <p className="text-black">
                Mobile Number:{" "}
                <span className="ml-2 text-black">
                  {fetched_Biodata_State?.mobileNumber ?? ""}
                </span>
              </p>
              <p className="text-black">
                Hobbies:{" "}
                <span className="ml-2 text-black">
                  {fetched_Biodata_State?.hobbies ?? ""}
                </span>
              </p>
              <p className="text-black">
                Email: <span className="ml-2 text-black">{providerUid}</span>
              </p>
              <p className="text-black">
                Tattoo/Body Marks:{" "}
                <span className="ml-2 text-black">
                  {fetched_Biodata_State?.tattoo ?? ""}
                </span>
              </p>
              <p className="text-black">
                Tribal Marks:{" "}
                <span className="ml-2 text-black">
                  {fetched_Biodata_State?.tribalMarks ?? ""}
                </span>
              </p>
              <p className="text-black col-span-2">
                Permanent Address:{" "}
                <span className="ml-2 text-black">
                  {fetched_Biodata_State?.permanentAddress ?? ""}
                </span>
              </p>
              <p className="text-black col-span-2">
                Contact Address:{" "}
                <span className="ml-2 text-black">
                  {fetched_Biodata_State?.contactAddress ?? ""}
                </span>
              </p>
            </div>

            <h2 className="text-3xl font-bold my-5">Next of Kin</h2>
            <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-8 mb-20">
              <p className="text-black">
                Full Name:{" "}
                <span className="ml-2 text-black">
                  {fetched_NOK_Guardian_State?.fullName ?? ""}
                </span>
              </p>
              <p className="text-black">
                Occupation:{" "}
                <span className="ml-2 text-black">
                  {fetched_NOK_Guardian_State?.occupation ?? ""}
                </span>
              </p>
              <p className="text-black">
                Post:{" "}
                <span className="ml-2 text-black">
                  {fetched_NOK_Guardian_State?.post ?? ""}
                </span>
              </p>
              <p className="text-black">
                Email:{" "}
                <span className="ml-2 text-black">
                  {fetched_NOK_Guardian_State?.email ?? ""}
                </span>
              </p>
              <p className="text-black">
                Relationship:{" "}
                <span className="ml-2 text-black">
                  {fetched_NOK_Guardian_State?.relationShip ?? ""}
                </span>
              </p>
              <p className="text-black">
                MobileNumber:{" "}
                <span className="ml-2 text-black">
                  {fetched_NOK_Guardian_State?.mobileNumber ?? ""}
                </span>
              </p>
              <p className="text-black">
                ContactAddress:{" "}
                <span className="ml-2 text-black">
                  {fetched_NOK_Guardian_State?.contactAddress ?? ""}
                </span>
              </p>
            </div>

            <h2 className="text-3xl font-bold my-5">
              Parent's / Guardian's Information
            </h2>
            <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-8 mb-20">
              <p className="text-black">
                Full Name:
                <span className="ml-2 text-black">
                  {fetched_NOK_Guardian_State?.parentFullName ?? ""}
                </span>
              </p>
              <p className="text-black">
                Residential Address:
                <span className="ml-2 text-black">
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
              <tr className="border-b ">
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

            <h2 className="text-3xl font-bold my-5">Primary School</h2>
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

            <h2 className="text-3xl font-bold my-5">Secondary School</h2>
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

            <h2 className="text-3xl font-bold my-5">Tertiary Institution</h2>
            <table className="w-full mb-20" cellPadding={12}>
              <thead className="border-b-2 border-t text-left">
                <th>Institution</th>
                <th>Course of Study</th>
                <th>From</th>
                <th>To</th>
                <th>Qualification</th>
              </thead>
              <tr className="border-b">
                <td>{fetched_Education_Info_State?.institution ?? ""}</td>
                <td>{fetched_Education_Info_State?.courseOfStudy ?? ""}</td>
                <td>{fetched_Education_Info_State?.institutionFrom ?? ""}</td>
                <td>{fetched_Education_Info_State?.institutionTo ?? ""}</td>
                <td>
                  {fetched_Education_Info_State?.institutionQualification ?? ""}
                </td>
              </tr>
            </table>

            <h2 className="text-3xl font-bold my-5">SSCE Grade</h2>
            <div>
              <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-8 mb-10">
                <p className="text-black">
                  Exam Type:{" "}
                  <span className="text-black ml-2">
                    {fetched_SSCE_Grade_State?.examType ?? ""}
                  </span>
                </p>
                <p className="text-black">
                  No. of sitting:{" "}
                  <span className="text-black ml-2">
                    {fetched_SSCE_Grade_State?.NoOfSitting ?? ""}
                  </span>
                </p>
                <p className="text-black">
                  Center No.:{" "}
                  <span className="text-black ml-2">
                    {fetched_SSCE_Grade_State?.centerNo ?? ""}
                  </span>
                </p>
                <p className="text-black">
                  Exam No.:{" "}
                  <span className="text-black ml-2">
                    {fetched_SSCE_Grade_State?.examNo ?? ""}
                  </span>
                </p>
              </div>
              <table className="w-full mb-20" cellPadding={12}>
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

            <h2 className="text-3xl font-bold my-5">Additional Information</h2>
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-1">
                <p className="text-black">
                  Have you ever served in the Armed Forces or any other security
                  agency?:{" "}
                  <span className="ml-2 text-black">
                    {fetched_Additional_Info_State?.question1 ?? ""}
                  </span>
                </p>
                <p className="text-black">
                  Reason for leaving:{" "}
                  <span className="ml-2 text-black">
                    {fetched_Additional_Info_State?.question1_Reason ?? ""}
                  </span>
                </p>
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-black">
                  Do you have any Job Experience?:{" "}
                  <span className="ml-2 text-black">
                    {fetched_Additional_Info_State?.question2 ?? ""}
                  </span>{" "}
                </p>
                <p className="text-black">
                  Reason for leaving:{" "}
                  <span className="ml-2 text-black">
                    {fetched_Additional_Info_State?.question2_Reason ?? ""}
                  </span>
                </p>
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-black">
                  Have you ever been detained by the Police?:{" "}
                  <span className="text-black ml-2">
                    {fetched_Additional_Info_State?.question3 ?? ""}
                  </span>
                </p>
                <p className="text-black">
                  Reason:{" "}
                  <span className="text-black ml-2">
                    {fetched_Additional_Info_State?.question3_Reason ?? ""}
                  </span>
                </p>
                <p className="text-black">
                  Duration of detention:{" "}
                  <span className="text-black ml-2">
                    {fetched_Additional_Info_State?.question3_Duration ?? ""}
                  </span>
                </p>
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-black">
                  Have you ever been convicted by a Court of Law?:{" "}
                  <span className="ml-2 text-black">
                    {fetched_Additional_Info_State?.question4 ?? ""}
                  </span>
                </p>
                <p className="text-black">
                  Reason for leaving:{" "}
                  <span className="ml-2 text-black">
                    {fetched_Additional_Info_State?.question4_Reason ?? ""}
                  </span>
                </p>
                <p className="text-black">
                  Conviction:{" "}
                  <span className="ml-2 text-black">
                    {fetched_Additional_Info_State?.question4_Conviction ?? ""}
                  </span>
                </p>
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-black">
                  Have you ever travelled out of the country?:{" "}
                  <span className="ml-2 text-black">
                    {fetched_Additional_Info_State?.question5 ?? ""}
                  </span>
                </p>
                <p className="text-black">
                  Travel details:{" "}
                  <span className="ml-2 text-black">
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
            <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-8 mb-10">
              <p className="text-black">
                Full Name:{" "}
                <span className="ml-2">
                  {fetched_Additional_Info_State?.Relative1_Name ?? ""}
                </span>
              </p>
              <p className="text-black">
                Last Rank:{" "}
                <span className="ml-2">
                  {fetched_Additional_Info_State?.Relative1_LastRank ?? ""}
                </span>
              </p>
              <p className="text-black">
                Force:{" "}
                <span className="ml-2">
                  {fetched_Additional_Info_State?.Relative1_Force ?? ""}
                </span>
              </p>
              <p className="text-black">
                Still in service:{" "}
                <span className="ml-2">
                  {fetched_Additional_Info_State?.Relative1_StillInService ??
                    ""}
                </span>
              </p>
            </div>
            <h2 className="text-3xl font-bold my-5">#2</h2>
            <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-8 mb-10">
              <p className="text-black">
                Full Name:{" "}
                <span className="ml-2">
                  {fetched_Additional_Info_State?.Relative2_Name ?? ""}
                </span>
              </p>
              <p className="text-black">
                Last Rank:{" "}
                <span className="ml-2">
                  {fetched_Additional_Info_State?.Relative2_LastRank ?? ""}
                </span>
              </p>
              <p className="text-black">
                Force:{" "}
                <span className="ml-2">
                  {fetched_Additional_Info_State?.Relative2_Force ?? ""}
                </span>
              </p>
              <p className="text-black">
                Still in service:{" "}
                <span className="ml-2">
                  {fetched_Additional_Info_State?.Relative2_StillInService ??
                    ""}
                </span>
              </p>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 mt-5">
              <button
                onClick={handlePrevious}
                className="bg-NAVY_Blue border py-2 px-5 rounded outline-0 text-white"
              >
                Previous
              </button>
              <p></p>
              <button
                onClick={handleSubmit}
                className="bg-NAVY_Blue border py-2 px-5 rounded outline-0 text-white"
              >
                {spin ? (
                  <Spinner className="w-5 fill-NAVY_Gray text-NAVY_Blue" />
                ) : (
                  "Submit Application"
                )}
              </button>
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

export default ApplicationPreview;
