import { useState, useEffect, useRef } from "react";
import * as Model from "../Asset/model/model";
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
import {
  save_Biodata,
  fetch_Biodata,
  fetch_Application_ID,
} from "../Asset/config/functions";
import { useNavigate } from "react-router-dom";
import {
  account,
  storage,
  PROFILE_PICTURE_BUCKET,
} from "../Asset/config/appwrite";
import Spinner from "../Components/Spinner";
import { ID } from "appwrite";

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

  const [uid, setUID] = useState<string>("");
  const [providerUid, setProviderUid] = useState<string>("");
  const [spin, setSpin] = useState<boolean>(false);
  const [preventView, setPreventView] = useState<boolean>(true);
  const [imagePreview, setImagePreview] = useState("");
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [profileImage, setProfileImage] = useState<string>("");

  // FETCHED BIODATA STATE
  const [fetched_Biodata_State, set_fetched_Biodata_State] =
    useState<Model.Biodata>();

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
        alert("Fill the required fields");
        return;
      }
      setSpin(true);
      await save_Biodata(
        {
          title: title,
          surName: surName,
          firstName: firstName,
          otherName: otherName,
          religion: religion,
          maritalStatus: maritalStatus,
          NoOfChildren: NoOfChildren,
          DOB: DOB,
          gender: gender,
          height: height,
          stateOfOrigin: stateOfOrigin,
          LGA: LGA,
          homeTown: homeTown,
          examCenter: examCenter,
          mobileNumber: mobileNumber,
          NIN: NIN,
          tattoo: tattoo,
          hobbies: hobbies,
          department: department,
          tribalMarks: tribalMarks,
          permanentAddress: permanentAddress,
          contactAddress: contactAddress,
        },
        uid
      );
      navigate(uriPaths.NOK);
    } catch (error) {
      setSpin(false);
      throw new Error((error as Error).message);
    }
  };

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      if (selectedFile?.size > 100 * 1024) {
        alert("Maximum file size allowed is 100KB.");
        return;
      }
      const reader = new FileReader();
      reader.onload = async () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(selectedFile);
      // Check if the file already exists
      try {
        const files = await storage.listFiles(PROFILE_PICTURE_BUCKET);
        const existingFile = files.files.find((file) => file.name === uid);
        if (existingFile) {
          // Delete the existing file
          await storage.deleteFile(PROFILE_PICTURE_BUCKET, existingFile.$id);
        }
        // Upload the new file
        const file = new File([selectedFile], uid);
        const fileId = await storage.createFile(
          PROFILE_PICTURE_BUCKET,
          ID.unique(),
          file
        );

        alert("Passport Uploaded Successfully");

        const previewLink = await storage.getFilePreview(
          PROFILE_PICTURE_BUCKET,
          fileId.$id
        );

        // Handle the successful file upload
        setProfileImage(previewLink.href);
      } catch (error) {
        throw new Error((error as Error).message);
      }
    }
  };

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
        const fetched_Biodata = await fetch_Biodata(promise.userId);
        if (fetched_Biodata) {
          set_fetched_Biodata_State(fetched_Biodata);
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

  const getProfilePicture = async () => {
    try {
      const promise = await account.getSession("current");

      const files = await storage.listFiles(PROFILE_PICTURE_BUCKET);
      const existingFile = files.files.find(
        (file) => file.name === promise.userId
      );

      if (existingFile) {
        const previewLink = await storage.getFilePreview(
          PROFILE_PICTURE_BUCKET,
          existingFile.$id
        );
        setProfileImage(previewLink.href);
      }
    } catch (error) {
      throw new Error((error as Error).message);
    }
  };

  const effector = async () => {
    await fetchData();
    await getProfilePicture();
  };

  useEffect(() => {
    effector();
  }, []);

  useEffect(() => {
    if (fetched_Biodata_State) {
      // SETTING BACK THE VALUE OF EACH STATE
      setTitle(fetched_Biodata_State?.title ?? "");
      setSurName(fetched_Biodata_State?.surName ?? "");
      setFirstName(fetched_Biodata_State?.firstName ?? "");
      setOtherName(fetched_Biodata_State?.otherName ?? "");
      setReligion(fetched_Biodata_State?.religion ?? "");
      setMaritalStatus(fetched_Biodata_State?.maritalStatus ?? "");
      setNoOfChildren(fetched_Biodata_State?.NoOfChildren ?? "");
      setDOB(fetched_Biodata_State?.DOB ?? "");
      setGender(fetched_Biodata_State?.gender ?? "");
      setHeight(fetched_Biodata_State?.height ?? "");
      setStateOfOrigin(fetched_Biodata_State?.stateOfOrigin ?? "");
      setLGA(fetched_Biodata_State?.LGA ?? "");
      setHomeTown(fetched_Biodata_State?.homeTown ?? "");
      setExamCenter(fetched_Biodata_State?.examCenter ?? "");
      setMobileNumber(fetched_Biodata_State?.mobileNumber ?? "");
      setNIN(fetched_Biodata_State?.NIN ?? "");
      setTattoo(fetched_Biodata_State?.tattoo ?? "");
      setHobbies(fetched_Biodata_State?.hobbies ?? "");
      setDepartment(fetched_Biodata_State?.department ?? "");
      setTribalMarks(fetched_Biodata_State?.tribalMarks ?? "");
      setPermanentAddress(fetched_Biodata_State?.permanentAddress ?? "");
      setContactAddress(fetched_Biodata_State?.contactAddress ?? "");
    }
  }, [fetched_Biodata_State]);

  return (
    <>
      {/* TO PREVENT VIEWING APPLICATION BEFORE LOADING DATA */}
      {preventView === false ? (
        <>
          <Navbar email={providerUid} />
          <ApplicationSteps />
          <section className="lg:px-24 md:px-10 px-3 mt-5 mb-5">
            <div className="flex justify-end mb-4">
              <div className="flex flex-col items-center">
                <div
                  className="w-48 h-52 bg-slate-300 mb-3 bg-center bg-no-repeat bg-cover rounded border"
                  style={{
                    backgroundImage: `url(${profileImage ?? imagePreview})`,
                  }}
                ></div>
                <input
                  type="file"
                  style={{ display: "none" }}
                  ref={fileInputRef}
                  onChange={(e) => handleFileChange(e)}
                  multiple={false}
                />
                <button
                  onClick={handleButtonClick}
                  className="Upload_Passport w-full bg-NAVY_Blue text-white rounded py-2"
                >
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
                    maxLength={11}
                    minLength={11}
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
                    value={providerUid}
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
                    <option
                      value=""
                      disabled
                      className="bg-NAVY_Blue text-white"
                    >
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

export default Biodata;
