import { Link } from "react-router-dom";
import * as uriPaths from "../Asset/common/uriPaths";
import Navbar from "./components/Navbar";
import ApplicationSteps from "./components/ApplicationSteps";
import { useNavigate } from "react-router-dom";

const ApplicationPreview = () => {
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate(uriPaths.PRINT_APPLICATION);
  };

  const handlePrevious = () => {
    navigate(uriPaths.ADDITIONAL_INFO);
  };

  return (
    <>
      <Navbar />
      <ApplicationSteps />
      <section className="lg:px-24 md:px-10 px-3 mt-5 mb-5">
        <h2 className="text-3xl font-bold my-5">Particulars of Candidate</h2>
        <div className="flex justify-end mb-10">
          <img
            src=""
            className="w-48 h-48 bg-slate-300 rounded"
            id="PassportHolder"
            alt=""
          />
        </div>

        <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-8 mb-20">
          <p className="text-black">
            Title: <span className="ml-2 text-black">Title</span>
          </p>
          <p className="text-black">
            Surname: <span className="ml-2 text-black">Surname</span>
          </p>
          <p className="text-black">
            First Name: <span className="ml-2 text-black">FirstName</span>
          </p>
          <p className="text-black">
            Other Names: <span className="ml-2 text-black">OtherName</span>
          </p>
          <p className="text-black">
            Religion: <span className="ml-2 text-black">Religion</span>
          </p>
          <p className="text-black">
            Marital Status:{" "}
            <span className="ml-2 text-black">MaritalStatus</span>
          </p>
          <p className="text-black">
            No. of Children: <span className="ml-2 text-black">NoChildren</span>
          </p>
          <p className="text-black">
            Date of Birth: <span className="ml-2 text-black">DOB</span>
          </p>
          <p className="text-black">
            Gender: <span className="ml-2 text-black">Gender</span>
          </p>
          <p className="text-black">
            Height (meters): <span className="ml-2 text-black">Height</span>
          </p>
          <p className="text-black">
            State of Origin:{" "}
            <span className="ml-2 text-black">StateOfOrigin</span>
          </p>
          <p className="text-black">
            LGA of Origin: <span className="ml-2 text-black">LGA</span>
          </p>
          <p className="text-black">
            HomeTown: <span className="ml-2 text-black">HomeTown</span>
          </p>
          <p className="text-black">
            Mobile Number: <span className="ml-2 text-black">MobileNumber</span>
          </p>
          <p className="text-black">
            Hobbies: <span className="ml-2 text-black">Hobbies</span>
          </p>
          <p className="text-black">
            Email: <span className="ml-2 text-black">Email</span>
          </p>
          <p className="text-black">
            Tattoo/Body Marks: <span className="ml-2 text-black">Tattoo</span>
          </p>
          <p className="text-black">
            Tribal Marks: <span className="ml-2 text-black">TribalMarks</span>
          </p>
          <p className="text-black col-span-2">
            Permanent Address:{" "}
            <span className="ml-2 text-black">PermanentAddress</span>
          </p>
          <p className="text-black col-span-2">
            Contact Address:{" "}
            <span className="ml-2 text-black">ContactAddress</span>
          </p>
        </div>

        <h2 className="text-3xl font-bold my-5">Next of Kin</h2>
        <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-8 mb-20">
          <p className="text-black">
            Full Name: <span className="ml-2 text-black">NOKFullName</span>
          </p>
          <p className="text-black">
            Occupation: <span className="ml-2 text-black">NOKOccupation</span>
          </p>
          <p className="text-black">
            Post: <span className="ml-2 text-black">NOKPost</span>
          </p>
          <p className="text-black">
            Email: <span className="ml-2 text-black">NOKEmail</span>
          </p>
          <p className="text-black">
            Relationship:{" "}
            <span className="ml-2 text-black">NOKRelationship</span>
          </p>
          <p className="text-black">
            MobileNumber:{" "}
            <span className="ml-2 text-black">NOKMobileNumber</span>
          </p>
          <p className="text-black">
            ContactAddress:{" "}
            <span className="ml-2 text-black">NOKContactAddress</span>
          </p>
        </div>

        <h2 className="text-3xl font-bold my-5">
          Parent's / Guardian's Information
        </h2>
        <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-8 mb-20">
          <p className="text-black">
            Full Name:
            <span className="ml-2 text-black">GaurdianFullName</span>
          </p>
          <p className="text-black">
            Residential Address:
            <span className="ml-2 text-black">GaurdianResidentialAddress</span>
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
            <td>RefereeName1</td>
            <td>RefereeAddress1</td>
            <td>RefereePhone1</td>
          </tr>
          <tr className="border-b">
            <td>RefereeName2</td>
            <td>RefereeAddress2</td>
            <td>RefereePhone2</td>
          </tr>
          <tr className="border-b">
            <td>RefereeName3</td>
            <td>RefereeAddress3</td>
            <td>RefereePhone3</td>
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
            <td>PrimarySchool</td>
            <td>PSLC</td>
            <td>PrimaryStart</td>
            <td>PrimaryEnd</td>
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
            <td>SecondarySchool</td>
            <td>SecondaryQualification</td>
            <td>SecondaryStart</td>
            <td>SecondaryEnd</td>
          </tr>
        </table>

        <h2 className="text-3xl font-bold my-5">Tertiary Institution</h2>
        <table className="w-full mb-20" cellPadding={12}>
          <thead className="border-b-2 border-t text-left">
            <th>Institution</th>
            <th>Course of Study</th>
            <th>Type</th>
            <th>From</th>
            <th>To</th>
            <th>ClassNameification</th>
          </thead>
          <tr className="border-b">
            <td>Institution</td>
            <td>Course of Study</td>
            <td>Type</td>
            <td>From</td>
            <td>To</td>
            <td>ClassNameification</td>
          </tr>
        </table>

        <h2 className="text-3xl font-bold my-5">SSCE Grade</h2>
        <div>
          <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-8 mb-10">
            <p className="text-black">
              Exam Type: <span className="text-black ml-2">ExamType</span>
            </p>
            <p className="text-black">
              No. of sitting: <span className="text-black ml-2">NoSitting</span>
            </p>
            <p className="text-black">
              Center No.: <span className="text-black ml-2">CenterNo</span>
            </p>
            <p className="text-black">
              Exam No.: <span className="text-black ml-2">ExamNo</span>
            </p>
          </div>
          <table className="w-full mb-20" cellPadding={12}>
            <thead className="border-b-2 border-t text-left">
              <th>Subject</th>
              <th>Grade</th>
            </thead>
            <tr className="border-b">
              <td>English Langaude</td>
              <td>Subject11</td>
            </tr>
            <tr className="border-b">
              <td>Mathematics</td>
              <td>Subject22</td>
            </tr>
            <tr className="border-b">
              <td>Subject3</td>
              <td>Subject33</td>
            </tr>
            <tr className="border-b">
              <td>Subject4</td>
              <td>Subject44</td>
            </tr>
            <tr className="border-b">
              <td>Subject5</td>
              <td>Subject55</td>
            </tr>
            <tr className="border-b">
              <td>Subject6</td>
              <td>Subject66</td>
            </tr>
            <tr className="border-b">
              <td>Subject7</td>
              <td>Subject77</td>
            </tr>
            <tr className="border-b">
              <td>Subject8</td>
              <td>Subject88</td>
            </tr>
            <tr className="border-b">
              <td>Subject9</td>
              <td>Subject99</td>
            </tr>
          </table>
        </div>

        <h2 className="text-3xl font-bold my-5">Additional Information</h2>
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-1">
            <p className="text-black">
              Have you ever served in the Armed Forces or any other security
              agency?: <span className="ml-2 text-black">Question1</span>
            </p>
            <p className="text-black">
              Reason for leaving:{" "}
              <span className="ml-2 text-black">Question11</span>
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-black">
              Do you have any Job Experience?:{" "}
              <span className="ml-2 text-black">Question2</span>{" "}
            </p>
            <p className="text-black">
              Reason for leaving:{" "}
              <span className="ml-2 text-black">Question21</span>
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-black">
              Have you ever been detained by the Police?:{" "}
              <span className="text-black ml-2">Question3</span>
            </p>
            <p className="text-black">
              Reason: <span className="text-black ml-2">Question31</span>
            </p>
            <p className="text-black">
              Duration of detention:{" "}
              <span className="text-black ml-2">Question32</span>
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-black">
              Have you ever been convicted by a Court of Law?:{" "}
              <span className="ml-2 text-black">Question4</span>
            </p>
            <p className="text-black">
              Reason for leaving:{" "}
              <span className="ml-2 text-black">Question41</span>
            </p>
            <p className="text-black">
              Conviction: <span className="ml-2 text-black">Question42</span>
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-black">
              Have you ever travelled out of the country?:{" "}
              <span className="ml-2 text-black">Question5</span>
            </p>
            <p className="text-black">
              Travel details:{" "}
              <span className="ml-2 text-black">Question51</span>
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
            Full Name: <span className="ml-2">Relative1FullName</span>
          </p>
          <p className="text-black">
            Last Rank: <span className="ml-2">Relative1LastRank</span>
          </p>
          <p className="text-black">
            Force: <span className="ml-2">Relative1Force</span>
          </p>
          <p className="text-black">
            Still in service: <span className="ml-2">Relative1InService</span>
          </p>
        </div>
        <h2 className="text-3xl font-bold my-5">#2</h2>
        <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-8 mb-10">
          <p className="text-black">
            Full Name: <span className="ml-2">Relative2FullName</span>
          </p>
          <p className="text-black">
            Last Rank: <span className="ml-2">Relative2LastRank</span>
          </p>
          <p className="text-black">
            Force: <span className="ml-2">Relative2Force</span>
          </p>
          <p className="text-black">
            Still in service: <span className="ml-2">Relative2InService</span>
          </p>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 mt-5">
          <button
            onClick={handlePrevious}
            className="bg-NAVY_Blue border py-2 px-5 rounded outline-0 text-white"
          >
            Previous
          </button>
          <button
            onClick={handleSubmit}
            className="bg-NAVY_Blue border py-2 px-5 rounded outline-0 text-white"
          >
            Submit Application
          </button>
          <Link
            to={uriPaths.PRINT_APPLICATION}
            className="bg-NAVY_Blue border text-center py-2 px-5 rounded outline-0 text-white"
          >
            Print
          </Link>
        </div>
      </section>
    </>
  );
};

export default ApplicationPreview;
