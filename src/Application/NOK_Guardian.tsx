import ApplicationSteps from "./components/ApplicationSteps";
import Navbar from "./components/Navbar";
import * as uriPaths from "../Asset/common/uriPaths";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  save_NOK_Guardian,
  fetch_NOK_Guardian,
} from "../Asset/config/functions";
import { account } from "../Asset/config/appwrite";
import * as Model from "../Asset/model/model";

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

  // FETCHED NOK GUARDIAN STATE
  const [fetched_NOK_Guardian_State, set_fetched_NOK_Guardian_State] =
    useState<Model.NOK_Guardian>();

  const navigate = useNavigate();
  const handleNext = async () => {
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

      const promise = await save_NOK_Guardian({
        fullName: fullName,
        occupation: occupation,
        post: post,
        email: email,
        relationShip: relationShip,
        mobileNumber: mobileNumber,
        contactAddress: contactAddress,
        parentFullName: parentFullName,
        parentResidentialAddress: parentResidentialAddress,

        refereeName1: refereeName1,
        refereeAddress1: refereeAddress1,
        refereePhone1: refereePhone1,

        refereeName2: refereeName2,
        refereeAddress2: refereeAddress2,
        refereePhone2: refereePhone2,

        refereeName3: refereeName3,
        refereeAddress3: refereeAddress3,
        refereePhone3: refereePhone3,
      });

      console.log(promise);
      // navigate(uriPaths.EDUCATION);
    } catch (error) {
      throw new Error((error as Error).message);
    }
  };

  const handlePrevious = () => {
    navigate(uriPaths.BIODATA);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const promise = await account.getSession("current");
        if (promise.userId) {
          const fetched_NOK_Guardian = await fetch_NOK_Guardian(promise.userId);
          if (fetched_NOK_Guardian) {
            set_fetched_NOK_Guardian_State(fetched_NOK_Guardian);
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
  }, [fetched_NOK_Guardian_State]);

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
                value={fetched_NOK_Guardian_State?.fullName ?? fullName}
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
                value={fetched_NOK_Guardian_State?.occupation ?? occupation}
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
                value={fetched_NOK_Guardian_State?.post ?? post}
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
                value={fetched_NOK_Guardian_State?.email ?? email}
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
                value={fetched_NOK_Guardian_State?.relationShip ?? relationShip}
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
                value={fetched_NOK_Guardian_State?.mobileNumber ?? mobileNumber}
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
                value={
                  fetched_NOK_Guardian_State?.contactAddress ?? contactAddress
                }
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
                value={
                  fetched_NOK_Guardian_State?.parentFullName ?? parentFullName
                }
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
                value={
                  fetched_NOK_Guardian_State?.parentResidentialAddress ??
                  parentResidentialAddress
                }
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
                value={fetched_NOK_Guardian_State?.refereeName1 ?? refereeName1}
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
                value={
                  fetched_NOK_Guardian_State?.refereeAddress1 ?? refereeAddress1
                }
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
                value={
                  fetched_NOK_Guardian_State?.refereePhone1 ?? refereePhone1
                }
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
                value={fetched_NOK_Guardian_State?.refereeName2 ?? refereeName2}
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
                value={
                  fetched_NOK_Guardian_State?.refereeAddress2 ?? refereeAddress2
                }
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
                value={
                  fetched_NOK_Guardian_State?.refereePhone2 ?? refereePhone2
                }
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
                value={fetched_NOK_Guardian_State?.refereeName3 ?? refereeName3}
                className="border p-2 rounded outline-0"
              />
            </div>
            <div className="flex flex-col">
              <label>Referee Address</label>
              <input
                type="text"
                onChange={(e) => setRefereeAddress3(e.target.value)}
                value={
                  fetched_NOK_Guardian_State?.refereeAddress3 ?? refereeAddress3
                }
                className="border p-2 rounded outline-0"
              />
            </div>
            <div className="flex flex-col">
              <label>Referee Phone</label>
              <input
                type="text"
                onChange={(e) => setRefereePhone3(e.target.value)}
                value={
                  fetched_NOK_Guardian_State?.refereePhone3 ?? refereePhone3
                }
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
