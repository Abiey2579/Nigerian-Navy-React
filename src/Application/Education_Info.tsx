import ApplicationSteps from "./components/ApplicationSteps";
import Navbar from "./components/Navbar";
import * as uriPaths from "../Asset/common/uriPaths";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const EducationInfo = () => {
  const [primary, setPrimary] = useState<string>("");
  const [primaryFrom, setPrimaryFrom] = useState<string>("");
  const [primaryTo, setPrimaryTo] = useState<string>("");

  const [secondary, setSecondary] = useState<string>("");
  const [secondaryQualification, setSecondaryQualification] =
    useState<string>("");
  const [secondaryFrom, setSecondaryFrom] = useState<string>("");
  const [secondaryTo, setSecondaryTo] = useState<string>("");

  const [institution, setInstitution] = useState<string>("");
  const [courseOfStudy, setCourseOfStudy] = useState<string>("");
  const [institutionQualification, setInstitutionQualification] =
    useState<string>("");
  const [institutionFrom, setInstitutionFrom] = useState<string>("");
  const [institutionTo, setInstitutionTo] = useState<string>("");

  const navigate = useNavigate();
  const handleNext = () => {
    try {
      if (
        primary.trim() === "" ||
        primaryFrom.trim() === "" ||
        primaryTo.trim() === "" ||
        secondary.trim() === "" ||
        secondaryQualification.trim() === "" ||
        secondaryFrom.trim() === "" ||
        secondaryTo.trim() === ""
      ) {
        return;
      }
      navigate(uriPaths.SSCE);
    } catch (error) {
      throw new Error((error as Error).message);
    }
  };

  const handlePrevious = () => {
    navigate(uriPaths.NOK);
  };
  return (
    <>
      <Navbar />
      <ApplicationSteps />
      <section className="lg:px-24 md:px-10 px-3 mt-5 mb-5 ">
        <form>
          <h2 className="text-3xl font-bold mb-5">Primary School</h2>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
            <div className="flex flex-col">
              <label>
                School <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                className="border p-2 rounded outline-0"
                required
                onChange={(e) => setPrimary(e.target.value)}
                value={primary}
              />
            </div>
            <div className="flex flex-col">
              <label>
                From <span className="text-red-400">*</span>
              </label>
              <input
                type="number"
                className="border p-2 rounded outline-0"
                required
                onChange={(e) => setPrimaryFrom(e.target.value)}
                value={primaryFrom}
              />
            </div>
            <div className="flex flex-col">
              <label>
                To <span className="text-red-400">*</span>
              </label>
              <input
                type="number"
                className="border p-2 rounded outline-0"
                required
                onChange={(e) => setPrimaryTo(e.target.value)}
                value={primaryTo}
              />
            </div>
          </div>
          <h2 className="text-3xl font-bold my-5">Secondary School</h2>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
            <div className="flex flex-col">
              <label>
                School <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                className="border p-2 rounded outline-0"
                required
                onChange={(e) => setSecondary(e.target.value)}
                value={secondary}
              />
            </div>
            <div className="flex flex-col">
              <label>
                Qualification <span className="text-red-400">*</span>
              </label>
              <select
                onChange={(e) => setSecondaryQualification(e.target.value)}
                value={secondaryQualification}
                className="border p-2 rounded outline-0"
                required
              >
                <option value=""></option>
                <option value="WAEC">WAEC</option>
                <option value="NECO">NECO</option>
                <option value="NABTEB">NABTEB</option>
                <option value="BSC">GCE</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label>
                From <span className="text-red-400">*</span>
              </label>
              <input
                type="date"
                className="border p-2 rounded outline-0"
                required
                onChange={(e) => setSecondaryFrom(e.target.value)}
                value={secondaryFrom}
              />
            </div>
            <div className="flex flex-col">
              <label>
                To <span className="text-red-400">*</span>
              </label>
              <input
                type="date"
                className="border p-2 rounded outline-0"
                required
                onChange={(e) => setSecondaryTo(e.target.value)}
                value={secondaryTo}
              />
            </div>
          </div>
          <h2 className="text-3xl font-bold my-5">Tertiary Institution</h2>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
            <div className="flex flex-col">
              <label>Institution</label>
              <input
                type="text"
                onChange={(e) => setInstitution(e.target.value)}
                value={institution}
                className="border p-2 rounded outline-0"
              />
            </div>
            <div className="flex flex-col">
              <label>Course of Study</label>
              <input
                type="text"
                onChange={(e) => setCourseOfStudy(e.target.value)}
                value={courseOfStudy}
                className="border p-2 rounded outline-0"
              />
            </div>
            <div className="flex flex-col">
              <label>Qualification</label>
              <select
                onChange={(e) => setInstitutionQualification(e.target.value)}
                value={institutionQualification}
                className="border p-2 rounded outline-0"
              >
                <option value=""></option>
                <option value="OND">OND</option>
                <option value="ND">ND</option>
                <option value="HND">HND</option>
                <option value="BSC">B. Sc.</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label>From</label>
              <input
                type="date"
                onChange={(e) => setInstitutionFrom(e.target.value)}
                value={institutionFrom}
                className="border p-2 rounded outline-0"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="TertiaryEnd">To</label>
              <input
                type="date"
                onChange={(e) => setInstitutionTo(e.target.value)}
                value={institutionTo}
                className="border p-2 rounded outline-0"
              />
            </div>
          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 mt-5">
            <button
              onClick={handlePrevious}
              className="bg-NAVY_Blue border py-2 px-5 rounded outline-0 text-white"
            >
              Previous
            </button>
            <div></div>
            <button
              onClick={handleNext}
              className="bg-NAVY_Blue border py-2 px-5 rounded outline-0 text-white"
            >
              Next
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default EducationInfo;
