import { useState } from "react";
import {
  Department,
  ExamCenter,
  Gender,
  HealthDepartment,
  MaritalStatus,
  Religions,
  StateOfOrigin,
  Title,
} from "../Asset/data/Options";
import ApplicationSteps from "./components/ApplicationSteps";
import Navbar from "./components/Navbar";
import * as uriPaths from "../Asset/common/uriPaths";
import { useNavigate } from "react-router-dom";

const Biodata = () => {
  const [title, setTitle] = useState<string>("");
  const [surName, setSurName] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [otherName, setOtherName] = useState<string>("");
  const [religion, setReligion] = useState<string>("");
  const [maritalStatus, setMaritalStatus] = useState<string>("");
  const [NoOfChildren, setNoOfChildren] = useState<string>("");
  const [DOB, setDOB] = useState<string>("");
  const [gender, setGender] = useState<string>("");
  const [height, setHeight] = useState<string>("");
  const [stateOfOrigin, setStateOfOrigin] = useState<string>("");
  const [LGA, setLGA] = useState<string>("");
  const [homeTown, setHomeTown] = useState<string>("");
  const [examCenter, setExamCenter] = useState<string>("");
  const [mobileNumber, setMobileNumber] = useState<string>("");
  const [NIN, setNIN] = useState<string>("");
  const [tattoo, setTattoo] = useState<string>("");
  const [hobbies, setHobbies] = useState<string>("");
  const [department, setDepartment] = useState<string>("");
  const [tribalMarks, setTribalMarks] = useState<string>("");
  const [permanentAddress, setPermanentAddress] = useState<string>("");
  const [contactAddress, setContactAddress] = useState<string>("");

  const navigate = useNavigate();
  const handleNext = async () => {
    try {
      if (
        title.trim() === "" ||
        surName.trim() === "" ||
        firstName.trim() === "" ||
        religion.trim() === "" ||
        maritalStatus.trim() === "" ||
        NoOfChildren.trim() === "" ||
        DOB.trim() === "" ||
        gender.trim() === "" ||
        height.trim() === "" ||
        stateOfOrigin.trim() === "" ||
        LGA.trim() === "" ||
        examCenter.trim() === "" ||
        mobileNumber.trim() === "" ||
        NIN.trim() === "" ||
        tattoo.trim() === "" ||
        department.trim() === "" ||
        tribalMarks.trim() === "" ||
        permanentAddress.trim() === "" ||
        contactAddress.trim() === ""
      ) {
        return;
      }

      // navigate(uriPaths.NOK);
      alert("Saved");
    } catch (error) {
      throw new Error((error as Error).message);
    }
  };

  return (
    <>
      <Navbar />
      <ApplicationSteps />
      <section className="lg:px-24 md:px-10 px-3 mt-5 mb-5">
        <div className="flex justify-end mb-4">
          <div className="flex flex-col items-center">
            <img
              src=""
              className="w-48 h-48 bg-slate-300 mb-3 rounded"
              id="PassportHolder"
              alt=""
            />
            <button className="Upload_Passport w-full bg-NAVY_Blue text-white rounded py-2">
              Upload
            </button>
          </div>
        </div>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
            <div className="flex flex-col">
              <label htmlFor="Title">
                Title <span className="text-red-400">*</span>
              </label>
              <select
                className="border p-2 rounded outline-0"
                required
                onChange={(e) => setTitle(e.target.value)}
                value={title}
              >
                <option value=""></option>
                {Title.map((option) => (
                  <option value={option}>{option}</option>
                ))}
              </select>
            </div>
            <div className="flex flex-col">
              <label htmlFor="Surname">
                Surname <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                className="border p-2 rounded outline-0"
                onChange={(e) => setSurName(e.target.value)}
                value={surName}
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="FirstName">
                First Name <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                onChange={(e) => setFirstName(e.target.value)}
                value={firstName}
                className="border p-2 rounded outline-0"
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="OtherName">Other Name</label>
              <input
                type="text"
                className="border p-2 rounded outline-0"
                onChange={(e) => setOtherName(e.target.value)}
                value={otherName}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="Religion">
                Religion <span className="text-red-400">*</span>
              </label>
              <select
                onChange={(e) => setReligion(e.target.value)}
                value={religion}
                className="border p-2 rounded outline-0"
                required
              >
                <option value=""></option>
                {Religions.map((option) => (
                  <option value={option}>{option}</option>
                ))}
              </select>
            </div>
            <div className="flex flex-col">
              <label htmlFor="MaritalStatus">
                Marital Status <span className="text-red-400">*</span>
              </label>
              <select
                onChange={(e) => setMaritalStatus(e.target.value)}
                value={maritalStatus}
                className="border p-2 rounded outline-0"
                required
              >
                <option value=""></option>
                {MaritalStatus.map((option) => (
                  <option value={option}>{option}</option>
                ))}
              </select>
            </div>
            <div className="flex flex-col">
              <label htmlFor="NoChildren">
                No. of Children <span className="text-red-400">*</span>
              </label>
              <input
                type="number"
                onChange={(e) => setNoOfChildren(e.target.value)}
                value={NoOfChildren}
                className="border p-2 rounded outline-0"
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="DOB">
                Date of Birth <span className="text-red-400">*</span>
              </label>
              <input
                type="date"
                onChange={(e) => setDOB(e.target.value)}
                value={DOB}
                className="border p-2 rounded outline-0"
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="Gender">
                Gender <span className="text-red-400">*</span>
              </label>
              <select
                onChange={(e) => setGender(e.target.value)}
                value={gender}
                className="border p-2 rounded outline-0"
                required
              >
                <option value=""></option>
                {Gender.map((option) => (
                  <option value={option}>{option}</option>
                ))}
              </select>
            </div>
            <div className="flex flex-col">
              <label htmlFor="Height">
                Height (meters) <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                className="border p-2 rounded outline-0"
                required
                onChange={(e) => setHeight(e.target.value)}
                value={height}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="StateOfOrigin">
                State of Origin <span className="text-red-400">*</span>
              </label>
              <select
                name="StateOfOrigin"
                className="border p-2 rounded outline-0"
                required
                onChange={(e) => setStateOfOrigin(e.target.value)}
                value={stateOfOrigin}
              >
                <option value=""></option>
                {StateOfOrigin.map((option) => (
                  <option value={option}>{option.substring(6)}</option>
                ))}
              </select>
            </div>
            <div className="flex flex-col">
              <label htmlFor="LGA">
                LGA of Origin <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                className="border p-2 rounded outline-0"
                required
                onChange={(e) => setLGA(e.target.value)}
                value={LGA}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="HomeTown">HomeTown</label>
              <input
                type="text"
                onChange={(e) => setHomeTown(e.target.value)}
                value={homeTown}
                className="border p-2 rounded outline-0"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="ExamCenter">
                Exam Center <span className="text-red-400">*</span>
              </label>
              <select
                onChange={(e) => setExamCenter(e.target.value)}
                value={examCenter}
                className="border p-2 rounded outline-0"
                required
              >
                <option value=""></option>
                {ExamCenter.map((option) => (
                  <option value={option}>{option}</option>
                ))}
              </select>
            </div>
            <div className="flex flex-col">
              <label htmlFor="MobileNumber">
                Mobile Number <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                className="border p-2 rounded outline-0"
                onChange={(e) => setMobileNumber(e.target.value)}
                value={mobileNumber}
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="NIN">
                National Identification Number{" "}
                <span className="text-red-400">*</span>
              </label>
              <input
                type="number"
                onChange={(e) => setNIN(e.target.value)}
                value={NIN}
                className="border p-2 rounded outline-0"
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="Hobbies">Hobbies</label>
              <input
                type="text"
                onChange={(e) => setHobbies(e.target.value)}
                value={hobbies}
                className="border p-2 rounded outline-0"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="Email">
                Email <span className="text-red-400">*</span>
              </label>
              <input
                type="email"
                value={"email"}
                className="border p-2 rounded outline-0"
                disabled
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="Tattoo">
                Tattoo/Body Marks <span className="text-red-400">*</span>
              </label>
              <select
                onChange={(e) => setTattoo(e.target.value)}
                value={tattoo}
                className="border p-2 rounded outline-0"
                required
              >
                <option value=""></option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label htmlFor="Department">
                Department <span className="text-red-400">*</span>
              </label>
              <select
                onChange={(e) => setDepartment(e.target.value)}
                value={department}
                className="border p-2 rounded outline-0"
                required
              >
                <option value=""></option>
                {Department.map((option) => (
                  <option value={option}>{option}</option>
                ))}
                <option value="" disabled className="bg-NAVY_Blue text-white">
                  Health Technicians
                </option>
                {HealthDepartment.map((option) => (
                  <option value={option}>{option}</option>
                ))}
              </select>
            </div>
            <div className="flex flex-col">
              <label htmlFor="TribalMarks">
                Tribal Marks <span className="text-red-400">*</span>
              </label>
              <select
                onChange={(e) => setTribalMarks(e.target.value)}
                value={tribalMarks}
                className="border p-2 rounded outline-0"
                required
              >
                <option value=""></option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label htmlFor="PermanentAddress">
                Permanent Address <span className="text-red-400">*</span>
              </label>
              <textarea
                onChange={(e) => setPermanentAddress(e.target.value)}
                value={permanentAddress}
                className="border p-2 rounded outline-0"
                required
              ></textarea>
            </div>
            <div className="flex flex-col lg:col-span-2 md:col-span-2 col-span-1">
              <label htmlFor="ContactAddress">
                Contact Address <span className="text-red-400">*</span>
              </label>
              <textarea
                onChange={(e) => setContactAddress(e.target.value)}
                value={contactAddress}
                className="border p-2 rounded outline-0"
                required
              ></textarea>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-5 mt-5">
            <p></p>
            <p></p>
            <button
              onClick={handleNext}
              className="bg-NAVY_Blue border p-2 rounded outline-0 text-white"
            >
              Next
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default Biodata;
