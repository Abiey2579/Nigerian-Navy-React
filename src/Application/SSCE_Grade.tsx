import { SSCE_Course_Grade, SSCE_Courses } from "../Asset/data/Options";
import ApplicationSteps from "./components/ApplicationSteps";
import Navbar from "./components/Navbar";
import * as uriPaths from "../Asset/common/uriPaths";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  save_SSCE_Grade,
  fetch_SSCE_Grade,
  fetch_Application_ID,
} from "../Asset/config/functions";
import { account } from "../Asset/config/appwrite";
import * as Model from "../Asset/model/model";
import Spinner from "../Components/Spinner";

const SSCEGrade = () => {
  const [examType, setExamType] = useState<string>("");
  const [NoOfSitting, setNoOfSitting] = useState<string>("");
  const [centerNo, setCenterNo] = useState<string>("");
  const [examNo, setExamNo] = useState<string>("");

  const [subject1, setSubject1] = useState<string>("English Language");
  const [grade1, setGrade1] = useState<string>("");

  const [subject2, setSubject2] = useState<string>("Mathematics");
  const [grade2, setGrade2] = useState<string>("");

  const [subject3, setSubject3] = useState<string>("");
  const [grade3, setGrade3] = useState<string>("");

  const [subject4, setSubject4] = useState<string>("");
  const [grade4, setGrade4] = useState<string>("");

  const [subject5, setSubject5] = useState<string>("");
  const [grade5, setGrade5] = useState<string>("");

  const [subject6, setSubject6] = useState<string>("");
  const [grade6, setGrade6] = useState<string>("");

  const [subject7, setSubject7] = useState<string>("");
  const [grade7, setGrade7] = useState<string>("");

  const [subject8, setSubject8] = useState<string>("");
  const [grade8, setGrade8] = useState<string>("");

  const [subject9, setSubject9] = useState<string>("");
  const [grade9, setGrade9] = useState<string>("");

  const [uid, setUID] = useState<string>("");
  const [providerUid, setProviderUid] = useState<string>("");
  const [spin, setSpin] = useState<boolean>(false);
  const [preventView, setPreventView] = useState<boolean>(true);

  // ARRAY TO CHECK DUPLICATE SSCE SUBJECT
  const SSCE_Subjects = [
    subject1,
    subject2,
    subject3,
    subject4,
    subject5,
    subject6,
    subject7,
    subject8,
    subject9,
  ];

  // Function to check for duplicate values in an array
  function hasDuplicates(Subjects_Array: string[]) {
    const uniqueValues = new Set(Subjects_Array);
    return uniqueValues.size !== Subjects_Array.length;
  }

  // FETCHED SSCE GRADE STATE
  const [fetched_SSCE_Grade_State, set_fetched_SSCE_Grade_State] =
    useState<Model.SSCE_Grade>();

  const navigate = useNavigate();
  const handleNext = async () => {
    try {
      if (
        examType.trim() === "" ||
        NoOfSitting.trim() === "" ||
        centerNo.trim() === "" ||
        examNo.trim() === "" ||
        subject1.trim() === "" ||
        grade1.trim() === "" ||
        subject2.trim() === "" ||
        grade2.trim() === "" ||
        subject3.trim() === "" ||
        grade3.trim() === "" ||
        subject4.trim() === "" ||
        grade4.trim() === "" ||
        subject5.trim() === "" ||
        grade5.trim() === ""
      ) {
        alert("Fill the required fields");
        return;
      }

      if (hasDuplicates(SSCE_Subjects)) {
        alert("Duplicate SSCE Subjects Detected. SSCE Subjects must be unique");
        return;
      }

      setSpin(true);
      await save_SSCE_Grade(
        {
          examType: examType,
          NoOfSitting: NoOfSitting,
          centerNo: centerNo,
          examNo: examNo,

          subject1: subject1,
          grade1: grade1,

          subject2: subject2,
          grade2: grade2,

          subject3: subject3,
          grade3: grade3,

          subject4: subject4,
          grade4: grade4,

          subject5: subject5,
          grade5: grade5,

          subject6: subject6,
          grade6: grade6,

          subject7: subject7,
          grade7: grade7,

          subject8: subject8,
          grade8: grade8,

          subject9: subject9,
          grade9: grade9,
        },
        uid
      );
      navigate(uriPaths.ADDITIONAL_INFO);
    } catch (error) {
      setSpin(false);
      throw new Error((error as Error).message);
    }
  };

  const handlePrevious = () => {
    navigate(uriPaths.EDUCATION);
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
          const fetched_SSCE_Grade = await fetch_SSCE_Grade(promise.userId);
          if (fetched_SSCE_Grade) {
            set_fetched_SSCE_Grade_State(fetched_SSCE_Grade);
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
    if (fetched_SSCE_Grade_State) {
      setExamType(fetched_SSCE_Grade_State?.examType ?? "");
      setNoOfSitting(fetched_SSCE_Grade_State?.NoOfSitting ?? "");
      setCenterNo(fetched_SSCE_Grade_State?.centerNo ?? "");
      setExamNo(fetched_SSCE_Grade_State?.examNo ?? "");

      setSubject1(fetched_SSCE_Grade_State?.subject1 ?? "");
      setGrade1(fetched_SSCE_Grade_State?.grade1 ?? "");

      setSubject2(fetched_SSCE_Grade_State?.subject2 ?? "");
      setGrade2(fetched_SSCE_Grade_State?.grade2 ?? "");

      setSubject3(fetched_SSCE_Grade_State?.subject3 ?? "");
      setGrade3(fetched_SSCE_Grade_State?.grade3 ?? "");

      setSubject4(fetched_SSCE_Grade_State?.subject4 ?? "");
      setGrade4(fetched_SSCE_Grade_State?.grade4 ?? "");

      setSubject5(fetched_SSCE_Grade_State?.subject5 ?? "");
      setGrade5(fetched_SSCE_Grade_State?.grade5 ?? "");

      setSubject6(fetched_SSCE_Grade_State?.subject6 ?? "");
      setGrade6(fetched_SSCE_Grade_State?.grade6 ?? "");

      setSubject7(fetched_SSCE_Grade_State?.subject7 ?? "");
      setGrade7(fetched_SSCE_Grade_State?.grade7 ?? "");

      setSubject8(fetched_SSCE_Grade_State?.subject8 ?? "");
      setGrade8(fetched_SSCE_Grade_State?.grade8 ?? "");

      setSubject9(fetched_SSCE_Grade_State?.subject9 ?? "");
      setGrade9(fetched_SSCE_Grade_State?.grade9 ?? "");
    }
  }, [fetched_SSCE_Grade_State]);

  return (
    <>
      {/* TO PREVENT VIEWING APPLICATION BEFORE LOADING DATA */}
      {preventView === false ? (
        <>
          <Navbar email={providerUid} />
          <ApplicationSteps />
          <section className="lg:px-24 md:px-10 px-3 mt-5 mb-5">
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <label>
                    Exam Type <span className="text-red-400">*</span>
                  </label>
                  <select
                    onChange={(e) => setExamType(e.target.value)}
                    value={examType}
                    className="border p-2 rounded outline-0"
                    required
                  >
                    <option value=""></option>
                    <option value="NECO">NECO</option>
                    <option value="WASSCE">WASSCE</option>
                    <option value="NABTEB">NABTEB</option>
                    <option value="GCE">GCE</option>
                  </select>
                </div>
                <div className="flex flex-col">
                  <label>
                    No. of sitting <span className="text-red-400">*</span>
                  </label>
                  <select
                    className="border p-2 rounded outline-0"
                    required
                    onChange={(e) => setNoOfSitting(e.target.value)}
                    value={NoOfSitting}
                  >
                    <option value=""></option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
                <div className="flex flex-col">
                  <label>
                    Center No. <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="number"
                    className="border p-2 rounded outline-0"
                    required
                    onChange={(e) => setCenterNo(e.target.value)}
                    value={centerNo}
                  />
                </div>
                <div className="flex flex-col">
                  <label>
                    Exam No. <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    className="border p-2 rounded outline-0"
                    required
                    onChange={(e) => setExamNo(e.target.value)}
                    value={examNo}
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 my-5">
                <h2 className="text-2xl font-bold my-3">Subjects</h2>
                <h2 className="text-2xl font-bold my-3">Grades</h2>
              </div>
              {/* 1 */}
              <div className="grid grid-cols-2 gap-4 mb-5">
                <select className="border p-2 rounded outline-0" required>
                  <option value="English Language">English Language</option>
                </select>
                <select
                  onChange={(e) => setGrade1(e.target.value)}
                  value={grade1}
                  className="border p-2 rounded outline-0"
                  required
                >
                  <option value=""></option>
                  {SSCE_Course_Grade.map((option) => (
                    <option value={option}>{option}</option>
                  ))}
                </select>
              </div>
              {/* 2 */}
              <div className="grid grid-cols-2 gap-4 mb-5">
                <select className="border p-2 rounded outline-0" required>
                  <option value="Mathematics">Mathematics</option>
                </select>

                <select
                  onChange={(e) => setGrade2(e.target.value)}
                  value={grade2}
                  className="border p-2 rounded outline-0"
                  required
                >
                  <option value=""></option>
                  {SSCE_Course_Grade.map((option) => (
                    <option value={option}>{option}</option>
                  ))}
                </select>
              </div>
              {/* 3 */}
              <div className="grid grid-cols-2 gap-4 mb-5">
                <select
                  onChange={(e) => setSubject3(e.target.value)}
                  value={subject3}
                  className="border p-2 rounded outline-0"
                  required
                >
                  <option value=""></option>
                  {SSCE_Courses.map((option) => (
                    <option value={option}>{option}</option>
                  ))}
                </select>

                <select
                  onChange={(e) => setGrade3(e.target.value)}
                  value={grade3}
                  className="border p-2 rounded outline-0"
                  required
                >
                  <option value=""></option>
                  {SSCE_Course_Grade.map((option) => (
                    <option value={option}>{option}</option>
                  ))}
                </select>
              </div>
              {/* 4 */}
              <div className="grid grid-cols-2 gap-4 mb-5">
                <select
                  onChange={(e) => setSubject4(e.target.value)}
                  value={subject4}
                  className="border p-2 rounded outline-0"
                  required
                >
                  <option value=""></option>
                  {SSCE_Courses.map((option) => (
                    <option value={option}>{option}</option>
                  ))}
                </select>

                <select
                  onChange={(e) => setGrade4(e.target.value)}
                  value={grade4}
                  className="border p-2 rounded outline-0"
                  required
                >
                  <option value=""></option>
                  {SSCE_Course_Grade.map((option) => (
                    <option value={option}>{option}</option>
                  ))}
                </select>
              </div>
              {/* 5 */}
              <div className="grid grid-cols-2 gap-4 mb-5">
                <select
                  onChange={(e) => setSubject5(e.target.value)}
                  value={subject5}
                  className="border p-2 rounded outline-0"
                  required
                >
                  <option value=""></option>
                  {SSCE_Courses.map((option) => (
                    <option value={option}>{option}</option>
                  ))}
                </select>

                <select
                  onChange={(e) => setGrade5(e.target.value)}
                  value={grade5}
                  className="border p-2 rounded outline-0"
                  required
                >
                  <option value=""></option>
                  {SSCE_Course_Grade.map((option) => (
                    <option value={option}>{option}</option>
                  ))}
                </select>
              </div>
              {/* 6 */}
              <div className="grid grid-cols-2 gap-4 mb-5">
                <select
                  onChange={(e) => setSubject6(e.target.value)}
                  value={subject6}
                  className="border p-2 rounded outline-0"
                >
                  <option value=""></option>
                  {SSCE_Courses.map((option) => (
                    <option value={option}>{option}</option>
                  ))}
                </select>

                <select
                  onChange={(e) => setGrade6(e.target.value)}
                  value={grade6}
                  className="border p-2 rounded outline-0"
                >
                  <option value=""></option>
                  {SSCE_Course_Grade.map((option) => (
                    <option value={option}>{option}</option>
                  ))}
                </select>
              </div>
              {/* 7 */}
              <div className="grid grid-cols-2 gap-4 mb-5">
                <select
                  onChange={(e) => setSubject7(e.target.value)}
                  value={subject7}
                  className="border p-2 rounded outline-0"
                >
                  <option value=""></option>
                  {SSCE_Courses.map((option) => (
                    <option value={option}>{option}</option>
                  ))}
                </select>

                <select
                  onChange={(e) => setGrade7(e.target.value)}
                  value={grade7}
                  className="border p-2 rounded outline-0"
                >
                  <option value=""></option>
                  {SSCE_Course_Grade.map((option) => (
                    <option value={option}>{option}</option>
                  ))}
                </select>
              </div>
              {/* 8 */}
              <div className="grid grid-cols-2 gap-4 mb-5">
                <select
                  onChange={(e) => setSubject8(e.target.value)}
                  value={subject8}
                  className="border p-2 rounded outline-0"
                >
                  <option value=""></option>
                  {SSCE_Courses.map((option) => (
                    <option value={option}>{option}</option>
                  ))}
                </select>

                <select
                  onChange={(e) => setGrade8(e.target.value)}
                  value={grade8}
                  className="border p-2 rounded outline-0"
                >
                  <option value=""></option>
                  {SSCE_Course_Grade.map((option) => (
                    <option value={option}>{option}</option>
                  ))}
                </select>
              </div>
              {/* 9 */}
              <div className="grid grid-cols-2 gap-4 mb-5">
                <select
                  onChange={(e) => setSubject9(e.target.value)}
                  value={subject9}
                  className="border p-2 rounded outline-0"
                >
                  <option value=""></option>
                  {SSCE_Courses.map((option) => (
                    <option value={option}>{option}</option>
                  ))}
                </select>
                <select
                  onChange={(e) => setGrade9(e.target.value)}
                  value={grade9}
                  className="border p-2 rounded outline-0"
                >
                  <option value=""></option>
                  {SSCE_Course_Grade.map((option) => (
                    <option value={option}>{option}</option>
                  ))}
                </select>
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

export default SSCEGrade;
