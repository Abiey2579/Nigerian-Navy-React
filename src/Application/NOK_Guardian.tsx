import ApplicationSteps from "./components/ApplicationSteps";
import Navbar from "./components/Navbar";
import * as uriPaths from "../Asset/common/uriPaths";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const NOKGuardian = () => {
  const [fullName, setFullName] = useState<string>("");
  const [occupation, setOccupation] = useState<string>("");
  const [post, setPost] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [relationShip, setRelationShip] = useState<string>("");
  const [mobileNumber, setMobileNumber] = useState<string>("");
  const [contactAddress, setContactAddress] = useState<string>("");
  const [parentFullName, setparentFullName] = useState<string>("");
  const [parentResidentialAddress, setparResidentialAddress] =
    useState<string>("");

  const [refereeName1, setRefereeName1] = useState<string>("");
  const [refereeAddress1, setRefereeAddress1] = useState<string>("");
  const [refereePhone1, setRefereePhone1] = useState<string>("");

  const [refereeName2, setRefereeName2] = useState<string>("");
  const [refereeAddress2, setRefereeAddress2] = useState<string>("");
  const [refereePhone2, setRefereePhone2] = useState<string>("");

  const [refereeName3, setRefereeName3] = useState<string>("");
  const [refereeAddress3, setRefereeAddress3] = useState<string>("");
  const [refereePhone3, setRefereePhone3] = useState<string>("");

  const navigate = useNavigate();

  const handleNext = () => {
    try {
      if (
        fullName.trim() === "" ||
        occupation.trim() === "" ||
        post.trim() === "" ||
        email.trim() === "" ||
        relationShip.trim() === "" ||
        mobileNumber.trim() === "" ||
        contactAddress.trim() === "" ||
        parentFullName.trim() === "" ||
        parentResidentialAddress.trim() === "" ||
        refereeName1.trim() === "" ||
        refereeAddress1.trim() === "" ||
        refereePhone1.trim() === "" ||
        refereeName2.trim() === "" ||
        refereeAddress2.trim() === "" ||
        refereePhone2.trim() === ""
      ) {
        return;
      }
      navigate(uriPaths.EDUCATION);
    } catch (error) {
      throw new Error((error as Error).message);
    }
  };

  const handlePrevious = () => {
    navigate(uriPaths.BIODATA);
  };

  return (
    <>
      <Navbar />
      <ApplicationSteps />
      <section className="lg:px-24 md:px-10 px-3 mt-5 mb-5">
        <form>
          <h2 className="text-3xl font-bold mb-5">Next of Kin</h2>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
            <div className="flex flex-col">
              <label>
                Full Name <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                className="border p-2 rounded outline-0"
                required
                onChange={(e) => setFullName(e.target.value)}
                value={fullName}
              />
            </div>
            <div className="flex flex-col">
              <label>
                Occupation <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                className="border p-2 rounded outline-0"
                required
                onChange={(e) => setOccupation(e.target.value)}
                value={occupation}
              />
            </div>
            <div className="flex flex-col">
              <label>
                Post <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                className="border p-2 rounded outline-0"
                required
                onChange={(e) => setPost(e.target.value)}
                value={post}
              />
            </div>
            <div className="flex flex-col">
              <label>
                Email <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                className="border p-2 rounded outline-0"
                required
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>
            <div className="flex flex-col">
              <label>
                Relationship <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                className="border p-2 rounded outline-0"
                required
                onChange={(e) => setRelationShip(e.target.value)}
                value={relationShip}
              />
            </div>
            <div className="flex flex-col">
              <label>
                Mobile Number <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                className="border p-2 rounded outline-0"
                required
                onChange={(e) => setMobileNumber(e.target.value)}
                value={mobileNumber}
              />
            </div>
            <div className="flex flex-col">
              <label>
                Contact Address <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                className="border p-2 rounded outline-0"
                required
                onChange={(e) => setContactAddress(e.target.value)}
                value={contactAddress}
              />
            </div>
          </div>
          <h2 className="text-3xl font-bold my-5">
            Parent's / Guardian's Information
          </h2>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
            <div className="flex flex-col">
              <label>
                Full Name <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                className="border p-2 rounded outline-0"
                required
              />
            </div>
            <div className="flex flex-col">
              <label>
                Residential Address <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                className="border p-2 rounded outline-0"
                required
              />
            </div>
          </div>
          <h2 className="text-3xl font-bold my-5">Referees</h2>
          <h3 className="text-2xl font-bold my-3">#1</h3>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
            <div className="flex flex-col">
              <label>
                Referee Name <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                className="border p-2 rounded outline-0"
                required
                onChange={(e) => setRefereeName1(e.target.value)}
                value={refereeName1}
              />
            </div>
            <div className="flex flex-col">
              <label>
                Referee Address <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                className="border p-2 rounded outline-0"
                required
                onChange={(e) => setRefereeAddress1(e.target.value)}
                value={refereeAddress1}
              />
            </div>
            <div className="flex flex-col">
              <label>
                Referee Phone <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                className="border p-2 rounded outline-0"
                required
                onChange={(e) => setRefereePhone1(e.target.value)}
                value={refereePhone1}
              />
            </div>
          </div>
          <h3 className="text-2xl font-bold my-3">#2</h3>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
            <div className="flex flex-col">
              <label>
                Referee Name <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                className="border p-2 rounded outline-0"
                required
                onChange={(e) => setRefereeName2(e.target.value)}
                value={refereeName2}
              />
            </div>
            <div className="flex flex-col">
              <label>
                Referee Address <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                className="border p-2 rounded outline-0"
                required
                onChange={(e) => setRefereeAddress2(e.target.value)}
                value={refereeAddress2}
              />
            </div>
            <div className="flex flex-col">
              <label>
                Referee Phone <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                className="border p-2 rounded outline-0"
                required
                onChange={(e) => setRefereePhone2(e.target.value)}
                value={refereePhone2}
              />
            </div>
          </div>
          <h3 className="text-2xl font-bold my-3">#3</h3>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
            <div className="flex flex-col">
              <label>Referee Name</label>
              <input
                type="text"
                onChange={(e) => setRefereeName3(e.target.value)}
                value={refereeName3}
                className="border p-2 rounded outline-0"
              />
            </div>
            <div className="flex flex-col">
              <label>Referee Address</label>
              <input
                type="text"
                onChange={(e) => setRefereeAddress3(e.target.value)}
                value={refereeAddress3}
                className="border p-2 rounded outline-0"
              />
            </div>
            <div className="flex flex-col">
              <label>Referee Phone</label>
              <input
                type="text"
                onChange={(e) => setRefereePhone3(e.target.value)}
                value={refereePhone3}
                className="border p-2 rounded outline-0 "
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

export default NOKGuardian;
