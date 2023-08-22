import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import ApplicationSteps from "./components/ApplicationSteps";
import * as uriPaths from "../Asset/common/uriPaths";
import { useNavigate } from "react-router-dom";
import {
  save_Additional_Info,
  fetch_Additional_Info,
} from "../Asset/config/functions";
import { account } from "../Asset/config/appwrite";
import * as Model from "../Asset/model/model";

const AdditionalInfo = () => {
  const [q1, setQ1] = useState<boolean>(false);
  const [q2, setQ2] = useState<boolean>(false);
  const [q3, setQ3] = useState<boolean>(false);
  const [q4, setQ4] = useState<boolean>(false);
  const [q5, setQ5] = useState<boolean>(false);

  const [question1, setQuestion1] = useState<string>("");
  const [question1_Reason, setQuestion1_Reason] = useState<string>("");

  const [question2, setQuestion2] = useState<string>("");
  const [question2_Reason, setQuestion2_Reason] = useState<string>("");

  const [question3, setQuestion3] = useState<string>("");
  const [question3_Reason, setQuestion3_Reason] = useState<string>("");
  const [question3_Duration, setQuestion3_Duration] = useState<string>("");

  const [question4, setQuestion4] = useState<string>("");
  const [question4_Reason, setQuestion4_Reason] = useState<string>("");
  const [question4_Conviction, setQuestion4_Conviction] = useState<string>("");

  const [question5, setQuestion5] = useState<string>("");
  const [question5_Reason, setQuestion5_Reason] = useState<string>("");

  const [Relative1_Name, setRelative1_Name] = useState<string>("");
  const [Relative1_LastRank, setRelative1_LastRank] = useState<string>("");
  const [Relative1_Force, setRelative1_Force] = useState<string>("");
  const [Relative1_StillInService, setRelative1_StillInService] =
    useState<string>("");

  const [Relative2_Name, setRelative2_Name] = useState<string>("");
  const [Relative2_LastRank, setRelative2_LastRank] = useState<string>("");
  const [Relative2_Force, setRelative2_Force] = useState<string>("");
  const [Relative2_StillInService, setRelative2_StillInService] =
    useState<string>("");

  // FETCHED ADDITIONAL INFO STATE
  const [fetched_Additional_Info_State, set_fetched_Additional_Info_State] =
    useState<Model.Additional_Info>();

  const navigate = useNavigate();
  const handleNext = async () => {
    try {
      if (
        question1.trim() === "" ||
        question2.trim() === "" ||
        question3.trim() === "" ||
        question4.trim() === "" ||
        question5.trim() === ""
      ) {
        return;
      }

      const promise = await save_Additional_Info({
        question1: question1,
        question1_Reason: question1_Reason,

        question2: question2,
        question2_Reason: question2_Reason,

        question3: question3,
        question3_Reason: question3_Reason,
        question3_Duration: question3_Duration,

        question4: question4,
        question4_Reason: question4_Reason,
        question4_Conviction: question4_Conviction,

        question5: question5,
        question5_Reason: question5_Reason,

        Relative1_Name: Relative1_Name,
        Relative1_LastRank: Relative1_LastRank,
        Relative1_Force: Relative1_Force,
        Relative1_StillInService: Relative1_StillInService,

        Relative2_Name: Relative2_Name,
        Relative2_LastRank: Relative2_LastRank,
        Relative2_Force: Relative2_Force,
        Relative2_StillInService: Relative2_StillInService,
      });

      console.log(promise);
      // navigate(uriPaths.PREVIEW);
    } catch (error) {
      throw new Error((error as Error).message);
    }
  };

  const handlePrevious = () => {
    navigate(uriPaths.SSCE);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const promise = await account.getSession("current");
        if (promise.userId) {
          const fetched_Additional_Info = await fetch_Additional_Info(
            promise.userId
          );
          if (fetched_Additional_Info) {
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

    // fetchData();
  }, [fetched_Additional_Info_State]);

  return (
    <>
      <Navbar />
      <ApplicationSteps />
      <section className="lg:px-24 md:px-10 px-3 mt-5 mb-5">
        <form>
          <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-4 mb-5">
            <div className="flex flex-col">
              <label>
                Have you ever served in the Armed Forces or any other security
                agency? <span className="text-red-400">*</span>
              </label>
              <select
                className="border p-2 rounded outline-0"
                onChange={(e) => {
                  e.target.value === "Yes" ? setQ1(true) : setQ1(false);
                  setQuestion1(e.target.value);
                }}
                value={fetched_Additional_Info_State?.question1 ?? question1}
                required
              >
                <option value=""></option>
                <option value="No">No</option>
                <option value="Yes">Yes</option>
              </select>
            </div>
            <div
              className="flex flex-col"
              style={{ display: `${q1 ? "flex" : "none"}` }}
            >
              <label>Reason for leaving</label>
              <input
                type="text"
                onChange={(e) => setQuestion1_Reason(e.target.value)}
                value={
                  fetched_Additional_Info_State?.question1_Reason ??
                  question1_Reason
                }
                className="border p-2 rounded outline-0"
              />
            </div>
          </div>
          <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-4 mb-5">
            <div className="flex flex-col">
              <label>
                Do you have any Job Experience?{" "}
                <span className="text-red-400">*</span>
              </label>
              <select
                className="border p-2 rounded outline-0"
                onChange={(e) => {
                  e.target.value === "Yes" ? setQ2(true) : setQ2(false);
                  setQuestion2(e.target.value);
                }}
                value={fetched_Additional_Info_State?.question2 ?? question2}
                required
              >
                <option value=""></option>
                <option value="No">No</option>
                <option value="Yes">Yes</option>
              </select>
            </div>
            <div
              className="flex flex-col"
              style={{ display: `${q2 ? "flex" : "none"}` }}
            >
              <label>Reason for leaving</label>
              <input
                type="text"
                onChange={(e) => setQuestion2_Reason(e.target.value)}
                value={
                  fetched_Additional_Info_State?.question2_Reason ??
                  question2_Reason
                }
                className="border p-2 rounded outline-0"
              />
            </div>
          </div>
          <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-4 mb-5">
            <div className="flex flex-col">
              <label>
                Have you ever been detained by the Police?{" "}
                <span className="text-red-400">*</span>
              </label>
              <select
                className="border p-2 rounded outline-0"
                onChange={(e) => {
                  e.target.value === "Yes" ? setQ3(true) : setQ3(false);
                  setQuestion3(e.target.value);
                }}
                value={fetched_Additional_Info_State?.question3 ?? question3}
                required
              >
                <option value=""></option>
                <option value="No">No</option>
                <option value="Yes">Yes</option>
              </select>
            </div>
            <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-4 mb-5">
              <div
                className="flex flex-col"
                style={{ display: `${q3 ? "flex" : "none"}` }}
              >
                <label>Reason</label>
                <input
                  type="text"
                  onChange={(e) => setQuestion3_Reason(e.target.value)}
                  value={
                    fetched_Additional_Info_State?.question3_Reason ??
                    question3_Reason
                  }
                  className="border p-2 rounded outline-0"
                />
              </div>
              <div
                className="flex flex-col"
                style={{ display: `${q3 ? "flex" : "none"}` }}
              >
                <label>Duration of detention</label>
                <input
                  type="text"
                  onChange={(e) => setQuestion3_Duration(e.target.value)}
                  value={
                    fetched_Additional_Info_State?.question3_Duration ??
                    question3_Duration
                  }
                  className="border p-2 rounded outline-0"
                />
              </div>
            </div>
          </div>
          <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-4 mb-5">
            <div className="flex flex-col">
              <label>
                Have you ever been convicted by a Court of Law?{" "}
                <span className="text-red-400">*</span>
              </label>
              <select
                className="border p-2 rounded outline-0"
                onChange={(e) => {
                  e.target.value === "Yes" ? setQ4(true) : setQ4(false);
                  setQuestion4(e.target.value);
                }}
                value={fetched_Additional_Info_State?.question4 ?? question4}
                required
              >
                <option value=""></option>
                <option value="No">No</option>
                <option value="Yes">Yes</option>
              </select>
            </div>
            <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-4 mb-5">
              <div
                className="flex flex-col"
                style={{ display: `${q4 ? "flex" : "none"}` }}
              >
                <label>Reason for leaving</label>
                <input
                  type="text"
                  onChange={(e) => setQuestion4_Reason(e.target.value)}
                  value={
                    fetched_Additional_Info_State?.question4_Reason ??
                    question4_Reason
                  }
                  className="border p-2 rounded outline-0"
                />
              </div>
              <div
                className="flex flex-col"
                style={{ display: `${q4 ? "flex" : "none"}` }}
              >
                <label>Conviction</label>
                <input
                  type="text"
                  onChange={(e) => setQuestion4_Conviction(e.target.value)}
                  value={
                    fetched_Additional_Info_State?.question4_Conviction ??
                    question4_Conviction
                  }
                  className="border p-2 rounded outline-0"
                />
              </div>
            </div>
          </div>
          <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-4 mb-5">
            <div className="flex flex-col">
              <label>
                Have you ever travelled out of the country?{" "}
                <span className="text-red-400">*</span>
              </label>
              <select
                className="border p-2 rounded outline-0"
                onChange={(e) => {
                  e.target.value === "Yes" ? setQ5(true) : setQ5(false);
                  setQuestion5(e.target.value);
                }}
                value={fetched_Additional_Info_State?.question5 ?? question5}
                required
              >
                <option value=""></option>
                <option value="No">No</option>
                <option value="Yes">Yes</option>
              </select>
            </div>
            <div
              className="flex flex-col"
              style={{ display: `${q5 ? "flex" : "none"}` }}
            >
              <label>Travel details</label>
              <input
                type="text"
                onChange={(e) => setQuestion5_Reason(e.target.value)}
                value={
                  fetched_Additional_Info_State?.question5_Reason ??
                  question5_Reason
                }
                className="border p-2 rounded outline-0"
              />
            </div>
          </div>
          <h3 className="text-2xl font-bold my-3">
            Do you have any relative(s) serving or that served in the Armed
            Forces?
          </h3>
          <h3 className="text-2xl font-bold my-3">#1</h3>
          <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-4 mb-5">
            <div className="flex flex-col">
              <label>Full Name</label>
              <input
                type="text"
                onChange={(e) => setRelative1_Name(e.target.value)}
                value={
                  fetched_Additional_Info_State?.Relative1_Name ??
                  Relative1_Name
                }
                className="border p-2 rounded outline-0"
              />
            </div>
            <div className="flex flex-col">
              <label>Last Rank</label>
              <input
                type="text"
                onChange={(e) => setRelative1_LastRank(e.target.value)}
                value={
                  fetched_Additional_Info_State?.Relative1_LastRank ??
                  Relative1_LastRank
                }
                className="border p-2 rounded outline-0"
              />
            </div>
            <div className="flex flex-col">
              <label>Force? </label>
              <select
                onChange={(e) => setRelative1_Force(e.target.value)}
                value={
                  fetched_Additional_Info_State?.Relative1_Force ??
                  Relative1_Force
                }
                className="border p-2 rounded outline-0"
              >
                <option value=""></option>
                <option value="Air Force">Air Force</option>
                <option value="Army">Army</option>
                <option value="Navy" selected>
                  Navy
                </option>
              </select>
            </div>
            <div className="flex flex-col">
              <label>Still in service? </label>
              <select
                onChange={(e) => setRelative1_StillInService(e.target.value)}
                value={
                  fetched_Additional_Info_State?.Relative1_StillInService ??
                  Relative1_StillInService
                }
                className="border p-2 rounded outline-0"
              >
                <option value=""></option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
          </div>
          <h3 className="text-2xl font-bold my-3">#2</h3>
          <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-4 mb-5">
            <div className="flex flex-col">
              <label>Full Name</label>
              <input
                type="text"
                onChange={(e) => setRelative2_Name(e.target.value)}
                value={
                  fetched_Additional_Info_State?.Relative2_Name ??
                  Relative2_Name
                }
                className="border p-2 rounded outline-0"
              />
            </div>
            <div className="flex flex-col">
              <label>Last Rank</label>
              <input
                type="text"
                onChange={(e) => setRelative2_LastRank(e.target.value)}
                value={
                  fetched_Additional_Info_State?.Relative2_LastRank ??
                  Relative2_LastRank
                }
                className="border p-2 rounded outline-0"
              />
            </div>
            <div className="flex flex-col">
              <label>Force? </label>
              <select
                onChange={(e) => setRelative2_Force(e.target.value)}
                value={
                  fetched_Additional_Info_State?.Relative2_Force ??
                  Relative2_Force
                }
                className="border p-2 rounded outline-0"
              >
                <option value=""></option>
                <option value="Air Force">Air Force</option>
                <option value="Army">Army</option>
                <option value="Navy" selected>
                  Navy
                </option>
              </select>
            </div>
            <div className="flex flex-col">
              <label>Still in service? </label>
              <select
                onChange={(e) => setRelative2_StillInService(e.target.value)}
                value={
                  fetched_Additional_Info_State?.Relative2_StillInService ??
                  Relative2_StillInService
                }
                className="border p-2 rounded outline-0"
              >
                <option value=""></option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
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

export default AdditionalInfo;
