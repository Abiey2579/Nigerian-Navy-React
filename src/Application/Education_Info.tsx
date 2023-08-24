import ApplicationSteps from "./components/ApplicationSteps";
import Navbar from "./components/Navbar";
import * as uriPaths from "../Asset/common/uriPaths";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  save_Education_Info,
  fetch_Education_Info,
  fetch_Application_ID,
} from "../Asset/config/functions";
import { account } from "../Asset/config/appwrite";
import * as Model from "../Asset/model/model";
import Spinner from "../Components/Spinner";

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

  const [uid, setUID] = useState<string>("");
  const [providerUid, setProviderUid] = useState<string>("");
  const [spin, setSpin] = useState<boolean>(false);
  const [preventView, setPreventView] = useState<boolean>(true);

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
        alert("Fill the required fields");
        return;
      }

      if (
        primaryFrom.length !== 4 ||
        primaryTo.length !== 4 ||
        secondaryFrom.length !== 4 ||
        secondaryTo.length !== 4 ||
        institutionFrom.length !== 4 ||
        institutionTo.length !== 4
      ) {
        alert("Please enter a valid Date Year (i.e. 2023 or 2022)");
        return;
      }

      setSpin(true);
      await save_Education_Info(
        {
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
        },
        uid
      );
      navigate(uriPaths.SSCE);
    } catch (error) {
      setSpin(false);
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
          setUID(promise.userId);
          setProviderUid(promise.providerUid);
          const application_id = await fetch_Application_ID(promise.userId);
          if (application_id) {
            navigate(uriPaths.PRINT_APPLICATION);
          }
          const fetched_Education_Info = await fetch_Education_Info(
            promise.userId
          );
          if (fetched_Education_Info) {
            set_fetched_Education_Info_State(fetched_Education_Info);
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

    fetchData();
  }, []);

  useEffect(() => {
    if (fetched_Education_Info_State) {
      setPrimary(fetched_Education_Info_State?.primary ?? "");
      setPrimaryFrom(fetched_Education_Info_State?.primaryFrom ?? "");
      setPrimaryTo(fetched_Education_Info_State?.primaryTo ?? "");

      setSecondary(fetched_Education_Info_State?.secondary ?? "");
      setSecondaryQualification(
        fetched_Education_Info_State?.secondaryQualification ?? ""
      );
      setSecondaryFrom(fetched_Education_Info_State?.secondaryFrom ?? "");
      setSecondaryTo(fetched_Education_Info_State?.secondaryTo ?? "");

      setInstitution(fetched_Education_Info_State?.institution ?? "");
      setCourseOfStudy(fetched_Education_Info_State?.courseOfStudy ?? "");
      setInstitutionQualification(
        fetched_Education_Info_State?.institutionQualification ?? ""
      );
      setInstitutionFrom(fetched_Education_Info_State?.institutionFrom ?? "");
      setInstitutionTo(fetched_Education_Info_State?.institutionTo ?? "");
    }
  }, [fetched_Education_Info_State]);

  return (
    <>
      {/* TO PREVENT VIEWING APPLICATION BEFORE LOADING DATA */}
      {preventView === false ? (
        <>
          <Navbar email={providerUid} />
          <ApplicationSteps />
          <section className="lg:px-24 md:px-10 px-3 mt-5 mb-5 ">
            <form onSubmit={(e) => e.preventDefault()}>
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
                    minLength={4}
                    maxLength={4}
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
                    minLength={4}
                    maxLength={4}
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
                    type="number"
                    className="border p-2 rounded outline-0"
                    required
                    onChange={(e) => setSecondaryFrom(e.target.value)}
                    value={secondaryFrom}
                    minLength={4}
                    maxLength={4}
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
                    onChange={(e) => setSecondaryTo(e.target.value)}
                    value={secondaryTo}
                    minLength={4}
                    maxLength={4}
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
                    onChange={(e) =>
                      setInstitutionQualification(e.target.value)
                    }
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
                    type="number"
                    onChange={(e) => setInstitutionFrom(e.target.value)}
                    value={institutionFrom}
                    className="border p-2 rounded outline-0"
                    minLength={4}
                    maxLength={4}
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="TertiaryEnd">To</label>
                  <input
                    type="number"
                    onChange={(e) => setInstitutionTo(e.target.value)}
                    value={institutionTo}
                    className="border p-2 rounded outline-0"
                    minLength={4}
                    maxLength={4}
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
                  {spin ? (
                    <Spinner className="w-5 fill-NAVY_Gray text-NAVY_Blue" />
                  ) : (
                    "Next"
                  )}
                </button>
              </div>
            </form>
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

export default EducationInfo;
