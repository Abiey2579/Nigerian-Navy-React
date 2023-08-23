import { useState, useEffect } from "react";
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
import { account } from "../Asset/config/appwrite";
import * as Model from "../Asset/model/model";

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

  const navigate = useNavigate();
  useEffect(() => {
    const fetch_Preview = async () => {
      try {
        const promise = await account.getSession("current");
        if (promise.userId) {
          setUID(promise.userId);
          setProviderUid(promise.providerUid);
          const application_id = await fetch_Application_ID(promise.userId);
          if (application_id) {
            setApplicant_ID(application_id);
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
        } else {
          await account.deleteSessions().finally(() => {
            navigate(uriPaths.LOGIN);
          });
        }
      } catch (error) {
        navigate(uriPaths.LOGIN);
      }
    };

    fetch_Preview();
  }, []);

  return (
    <section
      className="lg:px-24 md:px-10 px-3 mt-5 mb-5 mb-10"
      id="Print_Application"
    >
      <div className="grid place-content-start grid-cols-4 gap-4 mt-5">
        <button
          onClick={() => window.print()}
          className="bg-NAVY_Blue border py-2 px-5 rounded outline-0 text-white"
        >
          Print
        </button>
      </div>
      {/* Particulars */}
      <div className="Printable_Area px-10 mb-10 Particulars">
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
          <p className="text-center text-lg mb-4">Particular's of Candidate.</p>
        </div>
        <div className="flex justify-end">
          <img src="" className="w-48 h-48 bg-slate-300 rounded" />
        </div>

        <div className="grid grid-cols-1 gap-6 mb-6">
          <p className="text-black">
            {`Application Number: NNR34/2023/
            ${fetched_Biodata_State?.stateOfOrigin?.substring(0, 3)}/${
              applicant_ID?.application_id
            }`}
          </p>
          <p className="text-black">
            National Identification Number: {fetched_Biodata_State?.NIN ?? ""}
          </p>
          <p className="text-black">
            Department: {fetched_Biodata_State?.department ?? ""}
          </p>
          <p className="text-black">
            Exam Centre: {fetched_Biodata_State?.examCenter ?? ""}
          </p>
          <p className="text-black">
            Center Location:{" "}
            <span className="text-uppercase">
              {fetched_Biodata_State?.examCenter ?? ""}
            </span>
          </p>
        </div>

        <div className="grid md:grid-cols-2 grid-cols-1 gap-5 mb-20 pr-32">
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
              {fetched_Biodata_State?.stateOfOrigin ?? ""}
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
      </div>
      {/* NOK */}
      <div className="Printable_Area mb-10 NOK">
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
        <div className="grid grid-cols-2 gap-5 mb-20">
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
      <div className="Printable_Area mb-10 Education">
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
            <td>{fetched_Education_Info_State?.institution ?? ""}</td>
            <td>{fetched_Education_Info_State?.courseOfStudy ?? ""}</td>
            <td>{fetched_Education_Info_State?.institutionFrom ?? ""}</td>
            <td>{fetched_Education_Info_State?.institutionTo ?? ""}</td>
            <td>
              {fetched_Education_Info_State?.institutionQualification ?? ""}
            </td>
          </tr>
        </table>
      </div>
      {/* SSCE */}
      <div className="Printable_Area mb-10 SSCE">
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

        <div>
          <div className="grid grid-cols-2 gap-5 mb-10">
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
      </div>
      {/* Additional */}
      <div className="Printable_Area mb-10 Additional">
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
        <div className="grid grid-cols-2 gap-5 mb-10">
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
              {fetched_Additional_Info_State?.Relative1_StillInService ?? ""}
            </span>
          </p>
        </div>
        <h2 className="text-3xl font-bold my-5">#2</h2>
        <div className="grid grid-cols-2 gap-5 mb-10">
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
              {fetched_Additional_Info_State?.Relative2_StillInService ?? ""}
            </span>
          </p>
        </div>
      </div>
      {/* Applicant_Declaration */}
      <div className="Printable_Area mb-10 Applicant_Declaration">
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
          <p className="text-center text-xl mb-4">APPLICANT'S DECLARATION</p>
        </div>
        <div className="flex justify-end mb-10">
          <img src="" className="w-48 h-48 bg-slate-300 rounded" />
        </div>
        <div className="row DeclarationContainer mt-5">
          <p className="mb-4">
            {`Application Number: NNR34/2023/
            ${fetched_Biodata_State?.stateOfOrigin?.substring(0, 3)}/${
              applicant_ID?.application_id
            }`}
          </p>
          <p className="mb-4">
            I{" "}
            <span>
              {fetched_Biodata_State?.surName ?? ""}{" "}
              {fetched_Biodata_State?.firstName ?? ""}{" "}
              {fetched_Biodata_State?.otherName ?? ""}
            </span>
            , hereby declare that the information given in this application it
            true and that if found to be false I should be prosecuted.
          </p>
          <div className="flex justify-around mb-8">
            <p>
              Signature:
              ...........................................................................................................
            </p>
            <p>
              Date:
              ...........................................................................................................
            </p>
          </div>
          <p className="text-center font-bold text-lg mb-4">
            Certification by Parents / Gaurdian
          </p>
          <p className="mb-10">
            I
            .......................................................................................................................................................
            parent/gaurdian of
            ........................................................................,
            who is applying for recruitment into the Nigerian Navy, hereby
            certify that I fully understand that my child/ward will (if required
            to) attend the Recruitment Exercise and I shall not demand
            compensation or relief from the Government in respect of death or
            any injury which my child/ward may sustain in the course of or as a
            result of any task given to him/her during the exercise.
          </p>
          <div className="flex justify-around">
            <div className="flex flex-col items-center gap-5">
              <p className="text-center font-bold text-lg ">
                Parent / Gaurdian
              </p>
              <p>
                Name:
                ....................................................................................................................
              </p>
              <p>
                Address:
                ...............................................................................................................
              </p>
              <p>
                Signature:
                ...........................................................................................................
              </p>
              <p>
                Date:
                .......................................................................................................................
              </p>
            </div>
            <div className="flex flex-col gap-5">
              <p className="text-center font-bold text-lg ">Witness</p>
              <p>
                Name:
                ....................................................................................................................
              </p>
              <p>
                Address:
                ...............................................................................................................
              </p>
              <p>
                Signature:
                ...........................................................................................................
              </p>
              <p>
                Date:
                .......................................................................................................................
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* LGA_CERTIFICATION */}
      <div className="Printable_Area mb-10 LGA_CERTIFICATION">
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
          <img src="" className="w-48 h-48 bg-slate-300 rounded" />
        </div>

        <div className="grid grid-cols-1 gap-5 mb-6">
          <p className="text-black">
            {`Application Number: NNR34/2023/
            ${fetched_Biodata_State?.stateOfOrigin?.substring(0, 3)}/${
              applicant_ID?.application_id
            }`}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-5 mb-10">
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
            State of Origin:{" "}
            <span className="ml-2 text-black">
              {fetched_Biodata_State?.stateOfOrigin ?? ""}
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
            Height (meters):{" "}
            <span className="ml-2 text-black">
              {fetched_Biodata_State?.height ?? ""}
            </span>
          </p>
          <p className="text-black">
            Email: <span className="ml-2 text-black">{providerUid}</span>
          </p>
          <p className="text-black col-span-2">
            Permanent Address:{" "}
            <span className="ml-2 text-black">
              {fetched_Biodata_State?.permanentAddress ?? ""}
            </span>
          </p>
        </div>

        <p className="text-center text-xl mb-4">
          Certification by LGA Chairman / Secretary Or Senior Military Officer
          not below the of Commander or equivalent Or Chief Superintendent of
          Police from Applicant's State of Origin
        </p>
        <p>
          I certify that the applicant
          ....................................................... is an indigene
          of ................................................. L.G.A,
          ................................................... State, and that to
          the best of my knowledge and belief, the facts stated on the form are
          correct. I hereby declare that if any statement made in connection
          with this application is proven to be false I should be prosecuted.
        </p>
        <div className="ml-10 my-5">
          <div className="flex flex-col gap-5">
            <p>
              Name:
              ......................................................................................................................................................
            </p>
            <p>
              Address:
              .................................................................................................................................................
            </p>
            <p>
              Signature:
              .............................................................................................................................................
            </p>
            <p>
              Date:
              .........................................................................................................................................................
            </p>
          </div>
        </div>
      </div>
      {/* Police_CERTIFICATION */}
      <div className="Printable_Area mb-10 Police_CERTIFICATION">
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
          <img src="" className="w-48 h-48 bg-slate-300 rounded" />
        </div>
        <div className="grid grid-cols-1 gap-5 mb-6">
          <p className="text-black">
            {`Application Number: NNR34/2023/
            ${fetched_Biodata_State?.stateOfOrigin?.substring(0, 3)}/${
              applicant_ID?.application_id
            }`}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-5 mb-10">
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
            State of Origin:{" "}
            <span className="ml-2 text-black">
              {fetched_Biodata_State?.stateOfOrigin ?? ""}
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
            Height (meters):{" "}
            <span className="ml-2 text-black">
              {fetched_Biodata_State?.height ?? ""}
            </span>
          </p>
          <p className="text-black">
            Email: <span className="ml-2 text-black">{providerUid}</span>
          </p>
          <p className="text-black col-span-2">
            Permanent Address:{" "}
            <span className="ml-2 text-black">
              {fetched_Biodata_State?.permanentAddress ?? ""}
            </span>
          </p>
        </div>
        <p className="text-center text-xl mb-4">
          Certification by Divisional Police Officer
        </p>
        <p>
          I certify that the applicant
          ....................................................... is an indigene
          of ................................................. L.G.A,
          ................................................... State and that
          his/her parent hails from ............................................
          L.G.A. of ......................................... State, That he/she
          has no criminal record on him/her. (if any state briefly)
          .................................................................................................................................................................................................................................................................................................................................................................................................................
          That to the best of my knowledge and belief that facts stated in the
          form are correct and I hereby declare that if any statement made in
          connection with this application is proven to be false I should be
          prosecuted.
        </p>
        <div className="ml-10 my-5">
          <div className="flex flex-col gap-5">
            <p>
              Name:
              ......................................................................................................................................................
            </p>
            <p>
              Address:
              .................................................................................................................................................
            </p>
            <p>
              Signature:
              .............................................................................................................................................
            </p>
            <p>
              Date:
              .........................................................................................................................................................
            </p>
          </div>
        </div>
      </div>
      {/* Guarantor_Form */}
      <div className="Printable_Area mb-10 Guarantor_Form">
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
          <p className="text-center text-xl mb-4">GUARANTOR'S FORM</p>
        </div>
        <div className="flex justify-end">
          <img src="" className="w-48 h-48 bg-slate-300 rounded" />
        </div>
        <div className="grid grid-cols-1 gap-5 mb-6">
          <p className="text-black">
            {`Application Number: NNR34/2023/
            ${fetched_Biodata_State?.stateOfOrigin?.substring(0, 3)}/${
              applicant_ID?.application_id
            }`}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-5 mb-10">
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
            State of Origin:{" "}
            <span className="ml-2 text-black">
              {fetched_Biodata_State?.stateOfOrigin ?? ""}
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
            Height (meters):{" "}
            <span className="ml-2 text-black">
              {fetched_Biodata_State?.height ?? ""}
            </span>
          </p>
          <p className="text-black">
            Email: <span className="ml-2 text-black">{providerUid}</span>
          </p>
          <p className="text-black col-span-2">
            Permanent Address:{" "}
            <span className="ml-2 text-black">
              {fetched_Biodata_State?.permanentAddress ?? ""}
            </span>
          </p>
        </div>
        <p className="text-center text-xl mb-4">Particular's of Gaurantor</p>
        <div className="row">
          <div className="grid grid-cols-2 gap-2 mb-2">
            <p>
              Surname:
              ......................................................................................................................
            </p>
            <p>
              Middle Name:
              ...........................................................................................................
            </p>
            <p>
              LGA:
              .................................................................................................................................
            </p>
            <p>
              Mobile:
              ..........................................................................................................................
            </p>
            <p>
              Appointment:
              ...........................................................................................................
            </p>
            <p>
              First Name:
              ......................................................................................................................
            </p>
            <p>
              Town:
              ...................................................................................................................................
            </p>
            <p>
              State of Origin:
              ..............................................................................................................
            </p>
            <p>
              E-Mail:
              ..................................................................................................................................
            </p>
            <p>
              How long have you known the candidate:
              ..............................................
            </p>
          </div>
          <div className="grid grid-cols-1 gap-2 mb-6">
            <p>
              Formation/Unit/Office Address:
              ......................................................................................................................................................................................................................................
            </p>
            <p>
              Residential Address:
              ..................................................................................................................................................................................................................................................................
            </p>
            <p>
              Contact Address:
              ..........................................................................................................................................................................................................................................................................
            </p>
            <p>
              Name:
              ...................................................................................................................................................................................................................................................................................................
            </p>
            <p>
              Address:
              ..............................................................................................................................................................................................................................................................................................
            </p>
            <p>
              Signature:
              ...........................................................................................................................................................................................................................................................................................
            </p>
            <p>
              Date:
              ......................................................................................................................................................................................................................................................................................................
            </p>
          </div>
          <p>
            This form is to be filled by a Military Officer not below the rank
            of Lt Col or equipvalent/Police Officer not below the rank of Chief
            Superintendent of Police/Assistant Director at either Federal or
            State Civil Service certifying the eligibility of the applicant. You
            need not to come from an applicant's State of Origin to guarantee
            him/her only be sure of the character. Please note that inability to
            confirm the above given information about you, will lead to
            automatic disqualification of the candidate.
          </p>
        </div>
      </div>
      {/* Official */}
      <div className="Printable_Area Official">
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
          <p className="text-center text-xl mb-4">FOR OFFICIAL USE ONLY</p>
        </div>
        <div className="flex justify-end">
          <img src="" className="w-48 h-48 bg-slate-300 rounded" />
        </div>
        <div className="grid grid-cols-1 gap-3 mb-5">
          <p className="text-black">
            {`Application Number: NNR34/2023/
            ${fetched_Biodata_State?.stateOfOrigin?.substring(0, 3)}/${
              applicant_ID?.application_id
            }`}
          </p>
          <p>
            Applicant's Full Name:{" "}
            <span>
              {fetched_Biodata_State?.surName ?? ""}{" "}
              {fetched_Biodata_State?.firstName ?? ""}{" "}
              {fetched_Biodata_State?.otherName ?? ""}
            </span>
          </p>
          <p>
            Data Recieved:
            ...............................................................................................................
          </p>
          <p>
            Education Qualification: Number Of Credits/Passes obtained (SSCE /
            GCE / WASCE / NECO): .........................................
          </p>
          <p>Documents Attached</p>
          <div className="m-auto w-50 flex flex-col gap-3">
            <p>
              a)
              ...................................................................................................................................................................
            </p>
            <p>
              b)
              ...................................................................................................................................................................
            </p>
            <p>
              c)
              ...................................................................................................................................................................
            </p>
            <p>
              d)
              ...................................................................................................................................................................
            </p>
            <p>
              e)
              ...................................................................................................................................................................
            </p>
          </div>
          <p>Detailed Result</p>
          <div className="m-auto w-50 flex flex-col gap-3">
            <p>
              Medical Fitness:
              .................................................................................................................................
            </p>
            <p>
              General aptitute test score:
              ......................................................................................................
            </p>
            <p>
              Vocational aptitude test score:
              .............................................................................................
            </p>
          </div>
          <p>Remark</p>
          <p>
            ........................................................................................................................................................................................................................................................................................................................................................................
          </p>
          <p>
            ........................................................................................................................................................................................................................................................................................................................................................................
          </p>
          <p>
            ........................................................................................................................................................................................................................................................................................................................................................................
          </p>
          <div className="m-auto w-50 flex flex-col gap-3">
            <p>
              Rank:
              ..........................................................................................................................................................
            </p>
            <p>
              Name:
              ........................................................................................................................................................
            </p>
            <p>
              Signature and Date:
              .......................................................................................................................
            </p>
          </div>
          <p>Director, DRRR</p>
          <div className="m-auto w-50 flex flex-col gap-3">
            <p>
              Rank:
              ..........................................................................................................................................................
            </p>
            <p>
              Name:
              ........................................................................................................................................................
            </p>
            <p>
              Signature and Date:
              .......................................................................................................................
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrintApplication;
