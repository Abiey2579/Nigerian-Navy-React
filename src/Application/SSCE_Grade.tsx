import { SSCE_Course_Grade, SSCE_Courses } from "../Asset/data/Options";
import ApplicationSteps from "./components/ApplicationSteps";
import Navbar from "./components/Navbar";
import * as uriPaths from "../Asset/common/uriPaths";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

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

  const navigate = useNavigate();
  const handleNext = () => {
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
        return;
      }
      navigate(uriPaths.ADDITIONAL_INFO);
    } catch (error) {
      throw new Error((error as Error).message);
    }
  };

  const handlePrevious = () => {
    navigate(uriPaths.EDUCATION);
  };
  return (
    <>
      <Navbar />
      <ApplicationSteps />
      <section className="lg:px-24 md:px-10 px-3 mt-5 mb-5">
        <form>
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
              <input
                type="number"
                className="border p-2 rounded outline-0"
                required
                onChange={(e) => setNoOfSitting(e.target.value)}
                value={NoOfSitting}
              />
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
              Next
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default SSCEGrade;
