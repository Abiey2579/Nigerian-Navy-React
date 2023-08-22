import ApplicationSteps from "./components/ApplicationSteps";
import Navbar from "./components/Navbar";
import * as uriPaths from "../Asset/common/uriPaths";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  save_Education_Info,
  fetch_Education_Info,
} from "../Asset/config/functions";
import { account } from "../Asset/config/appwrite";
import * as Model from "../Asset/model/model";

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

  // FETCHED EDUCATION INFO STATE
  const [fetched_Education_Info_State, set_fetched_Education_Info_State] =
    useState<Model.Education_Info>();

  const navigate = useNavigate();
  const handleNext = async () => {
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

      const promise = await save_Education_Info({
        primary: primary,
        primaryFrom: primaryFrom,
        primaryTo: primaryTo,

        secondary: secondary,
        secondaryQualification: secondaryQualification,
        secondaryFrom: secondaryFrom,
        secondaryTo: secondaryTo,

        institution: institution,
        courseOfStudy: courseOfStudy,
        institutionQualification: institutionQualification,
        institutionFrom: institutionFrom,
        institutionTo: institutionTo,
      });

      console.log(promise);
      // navigate(uriPaths.SSCE);
    } catch (error) {
      throw new Error((error as Error).message);
    }
  };

  const handlePrevious = () => {
    navigate(uriPaths.NOK);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const promise = await account.getSession("current");
        if (promise.userId) {
          const fetched_Education_Info = await fetch_Education_Info(
            promise.userId
          );
          if (fetched_Education_Info) {
            set_fetched_Education_Info_State(fetched_Education_Info);
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

    // fetchData();
  }, [fetched_Education_Info_State]);

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
                value={fetched_Education_Info_State?.primary ?? primary}
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
                value={fetched_Education_Info_State?.primaryFrom ?? primaryFrom}
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
                value={fetched_Education_Info_State?.primaryTo ?? primaryTo}
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
                value={fetched_Education_Info_State?.secondary ?? secondary}
              />
            </div>
            <div className="flex flex-col">
              <label>
                Qualification <span className="text-red-400">*</span>
              </label>
              <select
                onChange={(e) => setSecondaryQualification(e.target.value)}
                value={
                  fetched_Education_Info_State?.secondaryQualification ??
                  secondaryQualification
                }
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
                value={
                  fetched_Education_Info_State?.secondaryFrom ?? secondaryFrom
                }
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
                value={fetched_Education_Info_State?.secondaryTo ?? secondaryTo}
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
                value={fetched_Education_Info_State?.institution ?? institution}
                className="border p-2 rounded outline-0"
              />
            </div>
            <div className="flex flex-col">
              <label>Course of Study</label>
              <input
                type="text"
                onChange={(e) => setCourseOfStudy(e.target.value)}
                value={
                  fetched_Education_Info_State?.courseOfStudy ?? courseOfStudy
                }
                className="border p-2 rounded outline-0"
              />
            </div>
            <div className="flex flex-col">
              <label>Qualification</label>
              <select
                onChange={(e) => setInstitutionQualification(e.target.value)}
                value={
                  fetched_Education_Info_State?.institutionQualification ??
                  institutionQualification
                }
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
                value={
                  fetched_Education_Info_State?.institutionFrom ??
                  institutionFrom
                }
                className="border p-2 rounded outline-0"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="TertiaryEnd">To</label>
              <input
                type="date"
                onChange={(e) => setInstitutionTo(e.target.value)}
                value={
                  fetched_Education_Info_State?.institutionTo ?? institutionTo
                }
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
