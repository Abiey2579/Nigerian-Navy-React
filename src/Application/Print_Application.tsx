import Logo from "../Asset/Images/navy_logo.png";

const PrintApplication = () => {
  return (
    <section
      className="lg:px-24 md:px-10 px-3 mt-5 mb-5 mb-10"
      id="Print_Application"
    >
      <div className="grid place-content-start grid-cols-4 gap-4 mt-5">
        <button
          onClick={() => window.print()}
          className="bg-NAVY_Blue border py-2 px-5 rounded outline-0 text-white"
        >
          Print
        </button>
      </div>
      {/* Particulars */}
      <div className="Printable_Area px-10 mb-10 Particulars">
        <div className="MainPrint_Header">
          <div className="flex items-center justify-center">
            <img
              src={Logo}
              width="100px"
              height="90px"
              className="navbar-brand-logo"
            />
            <div className="flex flex-col">
              <span className="text-4xl">NIGERIAN NAVY</span>{" "}
              <span className="text-lg">2022 Recruitment Exercise</span>
            </div>
          </div>

          <h3 className="text-center text-4xl my-8">Application Form</h3>
          <p className="text-center text-lg mb-4">Particular's of Candidate.</p>
        </div>
        <div className="flex justify-end">
          <img src="" className="w-48 h-48 bg-slate-300 rounded" />
        </div>

        <div className="grid grid-cols-1 gap-6 mb-6">
          <p className="text-black">Application Number: NNR32/2022/</p>
          <p className="text-black">National Identification Number: NIN</p>
          <p className="text-black">Department: Department</p>
          <p className="text-black">Exam Centre: ExamCenter</p>
          <p className="text-black">
            Center Location:
            <span className="text-uppercase">CenterLocation</span>
          </p>
        </div>

        <div className="grid md:grid-cols-2 grid-cols-1 gap-5 mb-20 pr-32">
          <p className="text-black">
            Title: <span className="ml-2 text-black">Title</span>
          </p>
          <p className="text-black">
            Surname: <span className="ml-2 text-black">Surname</span>
          </p>
          <p className="text-black">
            First Name: <span className="ml-2 text-black">FirstName</span>
          </p>
          <p className="text-black">
            Other Names: <span className="ml-2 text-black">OtherName</span>
          </p>
          <p className="text-black">
            Religion: <span className="ml-2 text-black">Religion</span>
          </p>
          <p className="text-black">
            Marital Status:{" "}
            <span className="ml-2 text-black">MaritalStatus</span>
          </p>
          <p className="text-black">
            No. of Children: <span className="ml-2 text-black">NoChildren</span>
          </p>
          <p className="text-black">
            Date of Birth: <span className="ml-2 text-black">DOB</span>
          </p>
          <p className="text-black">
            Gender: <span className="ml-2 text-black">Gender</span>
          </p>
          <p className="text-black">
            Height (meters): <span className="ml-2 text-black">Height</span>
          </p>
          <p className="text-black">
            State of Origin:{" "}
            <span className="ml-2 text-black">StateOfOrigin</span>
          </p>
          <p className="text-black">
            LGA of Origin: <span className="ml-2 text-black">LGA</span>
          </p>
          <p className="text-black">
            HomeTown: <span className="ml-2 text-black">HomeTown</span>
          </p>
          <p className="text-black">
            Mobile Number: <span className="ml-2 text-black">MobileNumber</span>
          </p>
          <p className="text-black">
            Hobbies: <span className="ml-2 text-black">Hobbies</span>
          </p>
          <p className="text-black">
            Email: <span className="ml-2 text-black">Email</span>
          </p>
          <p className="text-black">
            Tattoo/Body Marks: <span className="ml-2 text-black">Tattoo</span>
          </p>
          <p className="text-black">
            Tribal Marks: <span className="ml-2 text-black">TribalMarks</span>
          </p>
          <p className="text-black col-span-2">
            Permanent Address:{" "}
            <span className="ml-2 text-black">PermanentAddress</span>
          </p>
          <p className="text-black col-span-2">
            Contact Address:{" "}
            <span className="ml-2 text-black">ContactAddress</span>
          </p>
        </div>
      </div>
      {/* NOK */}
      <div className="Printable_Area mb-10 NOK">
        <div className="MainPrint_Header">
          <div className="flex items-center justify-center">
            <img
              src={Logo}
              width="100px"
              height="90px"
              className="navbar-brand-logo"
            />
            <div className="flex flex-col">
              <span className="text-4xl">NIGERIAN NAVY</span>{" "}
              <span className="text-lg">2022 Recruitment Exercise</span>
            </div>
          </div>
          <h3 className="text-center text-4xl my-8">Application Form</h3>
        </div>
        <h2 className="text-3xl font-bold my-5">Next of Kin</h2>
        <div className="grid grid-cols-2 gap-5 mb-20">
          <p className="text-black">
            Full Name: <span className="ml-2 text-black">NOKFullName</span>
          </p>
          <p className="text-black">
            Occupation: <span className="ml-2 text-black">NOKOccupation</span>
          </p>
          <p className="text-black">
            Post: <span className="ml-2 text-black">NOKPost</span>
          </p>
          <p className="text-black">
            Email: <span className="ml-2 text-black">NOKEmail</span>
          </p>
          <p className="text-black">
            Relationship:{" "}
            <span className="ml-2 text-black">NOKRelationship</span>
          </p>
          <p className="text-black">
            MobileNumber:{" "}
            <span className="ml-2 text-black">NOKMobileNumber</span>
          </p>
          <p className="text-black">
            ContactAddress:{" "}
            <span className="ml-2 text-black">NOKContactAddress</span>
          </p>
        </div>

        <h2 className="text-3xl font-bold my-5">
          Parent's / Guardian's Information
        </h2>
        <div className="grid grid-cols-2 gap-5 mb-20">
          <p className="text-black">
            Full Name:
            <span className="ml-2 text-black">GaurdianFullName</span>
          </p>
          <p className="text-black">
            Residential Address:
            <span className="ml-2 text-black">GaurdianResidentialAddress</span>
          </p>
        </div>

        <h2 className="text-3xl font-bold my-5">Referees</h2>

        <table className="w-full mb-20" cellPadding={12}>
          <thead className="border-b-2 border-t text-left">
            <th>Referee Name</th>
            <th>Referee Address</th>
            <th>Referee Phone</th>
          </thead>
          <tr className="border-b">
            <td>RefereeName1</td>
            <td>RefereeAddress1</td>
            <td>RefereePhone1</td>
          </tr>
          <tr className="border-b">
            <td>RefereeName2</td>
            <td>RefereeAddress2</td>
            <td>RefereePhone2</td>
          </tr>
          <tr className="border-b">
            <td>RefereeName3</td>
            <td>RefereeAddress3</td>
            <td>RefereePhone3</td>
          </tr>
        </table>
      </div>
      {/* Education */}
      <div className="Printable_Area mb-10 Education">
        <div className="MainPrint_Header">
          <div className="flex items-center justify-center">
            <img
              src={Logo}
              width="100px"
              height="90px"
              className="navbar-brand-logo"
            />
            <div className="flex flex-col">
              <span className="text-4xl">NIGERIAN NAVY</span>{" "}
              <span className="text-lg">2022 Recruitment Exercise</span>
            </div>
          </div>
          <h3 className="text-center text-4xl my-8">Application Form</h3>
        </div>

        <h2 className="text-3xl font-bold my-8 block">Primary School</h2>
        <table className="w-full mb-20" cellPadding={12}>
          <thead className="border-b-2 border-t text-left">
            <th>School</th>
            <th>Qualification</th>
            <th>From</th>
            <th>To</th>
          </thead>
          <tr className="border-b">
            <td>PrimarySchool</td>
            <td>PSLC</td>
            <td>PrimaryStart</td>
            <td>PrimaryEnd</td>
          </tr>
        </table>

        <h2 className="text-3xl font-bold my-8">Secondary School</h2>

        <table className="w-full mb-20" cellPadding={12}>
          <thead className="border-b-2 border-t text-left">
            <th>School</th>
            <th>Qualification</th>
            <th>From</th>
            <th>To</th>
          </thead>
          <tr className="border-b">
            <td>SecondarySchool</td>
            <td>SecondaryQualification</td>
            <td>SecondaryStart</td>
            <td>SecondaryEnd</td>
          </tr>
        </table>

        <h2 className="text-3xl font-bold my-8">Tertiary Institution</h2>
        <table className="w-full mb-20" cellPadding={12}>
          <thead className="border-b-2 border-t text-left">
            <th>Institution</th>
            <th>Course of Study</th>
            <th>Type</th>
            <th>From</th>
            <th>To</th>
            <th>ClassNameification</th>
          </thead>
          <tr className="border-b">
            <td>Institution</td>
            <td>Course of Study</td>
            <td>Type</td>
            <td>From</td>
            <td>To</td>
            <td>ClassNameification</td>
          </tr>
        </table>
      </div>
      {/* SSCE */}
      <div className="Printable_Area mb-10 SSCE">
        <div className="MainPrint_Header">
          <div className="flex items-center justify-center">
            <img
              src={Logo}
              width="100px"
              height="90px"
              className="navbar-brand-logo"
            />
            <div className="flex flex-col">
              <span className="text-4xl">NIGERIAN NAVY</span>{" "}
              <span className="text-lg">2022 Recruitment Exercise</span>
            </div>
          </div>
          <h3 className="text-center text-4xl my-8">Application Form</h3>
        </div>

        <div>
          <div className="grid grid-cols-2 gap-5 mb-10">
            <p className="text-black">
              Exam Type: <span className="text-black ml-2">ExamType</span>
            </p>
            <p className="text-black">
              No. of sitting: <span className="text-black ml-2">NoSitting</span>
            </p>
            <p className="text-black">
              Center No.: <span className="text-black ml-2">CenterNo</span>
            </p>
            <p className="text-black">
              Exam No.: <span className="text-black ml-2">ExamNo</span>
            </p>
          </div>
          <table className="w-full mb-20" cellPadding={12}>
            <thead className="border-b-2 border-t text-left">
              <th>Subject</th>
              <th>Grade</th>
            </thead>
            <tr className="border-b">
              <td>English Langaude</td>
              <td>Subject11</td>
            </tr>
            <tr className="border-b">
              <td>Mathematics</td>
              <td>Subject22</td>
            </tr>
            <tr className="border-b">
              <td>Subject3</td>
              <td>Subject33</td>
            </tr>
            <tr className="border-b">
              <td>Subject4</td>
              <td>Subject44</td>
            </tr>
            <tr className="border-b">
              <td>Subject5</td>
              <td>Subject55</td>
            </tr>
            <tr className="border-b">
              <td>Subject6</td>
              <td>Subject66</td>
            </tr>
            <tr className="border-b">
              <td>Subject7</td>
              <td>Subject77</td>
            </tr>
            <tr className="border-b">
              <td>Subject8</td>
              <td>Subject88</td>
            </tr>
            <tr className="border-b">
              <td>Subject9</td>
              <td>Subject99</td>
            </tr>
          </table>
        </div>
      </div>
      {/* Additional */}
      <div className="Printable_Area mb-10 Additional">
        <div className="MainPrint_Header">
          <div className="flex items-center justify-center">
            <img
              src={Logo}
              width="100px"
              height="90px"
              className="navbar-brand-logo"
            />
            <div className="flex flex-col">
              <span className="text-4xl">NIGERIAN NAVY</span>{" "}
              <span className="text-lg">2022 Recruitment Exercise</span>
            </div>
          </div>
          <h3 className="text-center text-4xl my-8">Application Form</h3>
        </div>
        <h2 className="text-3xl font-bold my-5">Additional Information</h2>
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-1">
            <p className="text-black">
              Have you ever served in the Armed Forces or any other security
              agency?: <span className="ml-2 text-black">Question1</span>
            </p>
            <p className="text-black">
              Reason for leaving:{" "}
              <span className="ml-2 text-black">Question11</span>
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-black">
              Do you have any Job Experience?:{" "}
              <span className="ml-2 text-black">Question2</span>{" "}
            </p>
            <p className="text-black">
              Reason for leaving:{" "}
              <span className="ml-2 text-black">Question21</span>
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-black">
              Have you ever been detained by the Police?:{" "}
              <span className="text-black ml-2">Question3</span>
            </p>
            <p className="text-black">
              Reason: <span className="text-black ml-2">Question31</span>
            </p>
            <p className="text-black">
              Duration of detention:{" "}
              <span className="text-black ml-2">Question32</span>
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-black">
              Have you ever been convicted by a Court of Law?:{" "}
              <span className="ml-2 text-black">Question4</span>
            </p>
            <p className="text-black">
              Reason for leaving:{" "}
              <span className="ml-2 text-black">Question41</span>
            </p>
            <p className="text-black">
              Conviction: <span className="ml-2 text-black">Question42</span>
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-black">
              Have you ever travelled out of the country?:{" "}
              <span className="ml-2 text-black">Question5</span>
            </p>
            <p className="text-black">
              Travel details:{" "}
              <span className="ml-2 text-black">Question51</span>
            </p>
          </div>
        </div>

        <h2 className="text-3xl font-bold my-5">
          Do you have any relative(s) serving or that served in the Armed
          Forces?
        </h2>
        <h2 className="text-3xl font-bold my-5">#1</h2>
        <div className="grid grid-cols-2 gap-5 mb-10">
          <p className="text-black">
            Full Name: <span className="ml-2">Relative1FullName</span>
          </p>
          <p className="text-black">
            Last Rank: <span className="ml-2">Relative1LastRank</span>
          </p>
          <p className="text-black">
            Force: <span className="ml-2">Relative1Force</span>
          </p>
          <p className="text-black">
            Still in service: <span className="ml-2">Relative1InService</span>
          </p>
        </div>
        <h2 className="text-3xl font-bold my-5">#2</h2>
        <div className="grid grid-cols-2 gap-5 mb-10">
          <p className="text-black">
            Full Name: <span className="ml-2">Relative2FullName</span>
          </p>
          <p className="text-black">
            Last Rank: <span className="ml-2">Relative2LastRank</span>
          </p>
          <p className="text-black">
            Force: <span className="ml-2">Relative2Force</span>
          </p>
          <p className="text-black">
            Still in service: <span className="ml-2">Relative2InService</span>
          </p>
        </div>
      </div>
      {/* Applicant_Declaration */}
      <div className="Printable_Area mb-10 Applicant_Declaration">
        <div className="MainPrint_Header">
          <div className="flex items-center justify-center">
            <img
              src={Logo}
              width="100px"
              height="90px"
              className="navbar-brand-logo"
            />
            <div className="flex flex-col">
              <span className="text-4xl">NIGERIAN NAVY</span>{" "}
              <span className="text-lg">2022 Recruitment Exercise</span>
            </div>
          </div>

          <h3 className="text-center text-4xl my-8">Application Form</h3>
          <p className="text-center text-xl mb-4">APPLICANT'S DECLARATION</p>
        </div>
        <div className="flex justify-end mb-10">
          <img src="" className="w-48 h-48 bg-slate-300 rounded" />
        </div>
        <div className="row DeclarationContainer mt-5">
          <p className="mb-4">Application Number: NNR32/2022/BOR/3630/</p>
          <p className="mb-4">
            I <span>APPLICANT NAME</span>, hereby declare that the information
            given in this application it true and that if found to be false I
            should be prosecuted.
          </p>
          <div className="flex justify-around mb-8">
            <p>
              Signature:
              ...........................................................................................................
            </p>
            <p>
              Date:
              ...........................................................................................................
            </p>
          </div>
          <p className="text-center font-bold text-lg mb-4">
            Certification by Parents / Gaurdian
          </p>
          <p className="mb-10">
            I
            .......................................................................................................................................................
            parent/gaurdian of
            ........................................................................,
            who is applying for recruitment into the Nigerian Navy, hereby
            certify that I fully understand that my child/ward will (if required
            to) attend the Recruitment Exercise and I shall not demand
            compensation or relief from the Government in respect of death or
            any injury which my child/ward may sustain in the course of or as a
            result of any task given to him/her during the exercise.
          </p>
          <div className="flex justify-around">
            <div className="flex flex-col items-center gap-5">
              <p className="text-center font-bold text-lg ">
                Parent / Gaurdian
              </p>
              <p>
                Name:
                ....................................................................................................................
              </p>
              <p>
                Address:
                ...............................................................................................................
              </p>
              <p>
                Signature:
                ...........................................................................................................
              </p>
              <p>
                Date:
                .......................................................................................................................
              </p>
            </div>
            <div className="flex flex-col gap-5">
              <p className="text-center font-bold text-lg ">Witness</p>
              <p>
                Name:
                ....................................................................................................................
              </p>
              <p>
                Address:
                ...............................................................................................................
              </p>
              <p>
                Signature:
                ...........................................................................................................
              </p>
              <p>
                Date:
                .......................................................................................................................
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* LGA_CERTIFICATION */}
      <div className="Printable_Area mb-10 LGA_CERTIFICATION">
        <div className="MainPrint_Header">
          <div className="flex items-center justify-center">
            <img
              src={Logo}
              width="100px"
              height="90px"
              className="navbar-brand-logo"
            />
            <div className="flex flex-col">
              <span className="text-4xl">NIGERIAN NAVY</span>{" "}
              <span className="text-lg">2022 Recruitment Exercise</span>
            </div>
          </div>

          <h3 className="text-center text-3xl my-8">Application Form</h3>
          <p className="text-center text-xl mb-4">
            LOCAL GOVERNMENT AREA CERTIFICATION
          </p>
        </div>
        <div className="flex justify-end">
          <img src="" className="w-48 h-48 bg-slate-300 rounded" />
        </div>

        <div className="grid grid-cols-1 gap-5 mb-6">
          <p className="text-black">Application Number: NNR32/2022/</p>
        </div>

        <div className="grid grid-cols-2 gap-5 mb-10">
          <p className="text-black">
            Title: <span className="ml-2 text-black">Title</span>
          </p>
          <p className="text-black">
            Surname: <span className="ml-2 text-black">Surname</span>
          </p>
          <p className="text-black">
            First Name: <span className="ml-2 text-black">FirstName</span>
          </p>
          <p className="text-black">
            Other Names: <span className="ml-2 text-black">OtherName</span>
          </p>
          <p className="text-black">
            Religion: <span className="ml-2 text-black">Religion</span>
          </p>
          <p className="text-black">
            Marital Status:{" "}
            <span className="ml-2 text-black">MaritalStatus</span>
          </p>

          <p className="text-black">
            Date of Birth: <span className="ml-2 text-black">DOB</span>
          </p>
          <p className="text-black">
            Gender: <span className="ml-2 text-black">Gender</span>
          </p>
          <p className="text-black">
            State of Origin:{" "}
            <span className="ml-2 text-black">StateOfOrigin</span>
          </p>
          <p className="text-black">
            LGA of Origin: <span className="ml-2 text-black">LGA</span>
          </p>
          <p className="text-black">
            HomeTown: <span className="ml-2 text-black">HomeTown</span>
          </p>
          <p className="text-black">
            Mobile Number: <span className="ml-2 text-black">MobileNumber</span>
          </p>
          <p className="text-black">
            Height (meters): <span className="ml-2 text-black">Height</span>
          </p>
          <p className="text-black">
            Email: <span className="ml-2 text-black">Email</span>
          </p>
          <p className="text-black col-span-2">
            Permanent Address:{" "}
            <span className="ml-2 text-black">PermanentAddress</span>
          </p>
        </div>
        <p className="text-center text-xl mb-4">
          Certification by LGA Chairman / Secretary Or Senior Military Officer
          not below the of Commander or equivalent Or Chief Superintendent of
          Police from Applicant's State of Origin
        </p>
        <p>
          I certify that the applicant
          ....................................................... is an indigene
          of ................................................. L.G.A,
          ................................................... State, and that to
          the best of my knowledge and belief, the facts stated on the form are
          correct. I hereby declare that if any statement made in connection
          with this application is proven to be false I should be prosecuted.
        </p>
        <div className="ml-10 my-5">
          <div className="flex flex-col gap-5">
            <p>
              Name:
              ......................................................................................................................................................
            </p>
            <p>
              Address:
              .................................................................................................................................................
            </p>
            <p>
              Signature:
              .............................................................................................................................................
            </p>
            <p>
              Date:
              .........................................................................................................................................................
            </p>
          </div>
        </div>
      </div>
      {/* Police_CERTIFICATION */}
      <div className="Printable_Area mb-10 Police_CERTIFICATION">
        <div className="MainPrint_Header">
          <div className="flex items-center justify-center">
            <img
              src={Logo}
              width="100px"
              height="90px"
              className="navbar-brand-logo"
            />
            <div className="flex flex-col">
              <span className="text-4xl">NIGERIAN NAVY</span>{" "}
              <span className="text-lg">2022 Recruitment Exercise</span>
            </div>
          </div>

          <h3 className="text-center text-3xl my-8">Application Form</h3>
          <p className="text-center text-xl mb-4">POLICE CERTIFICATION</p>
        </div>
        <div className="flex justify-end">
          <img src="" className="w-48 h-48 bg-slate-300 rounded" />
        </div>
        <div className="grid grid-cols-1 gap-5 mb-6">
          <p className="text-black">Application Number: NNR32/2022/</p>
        </div>

        <div className="grid grid-cols-2 gap-5 mb-10">
          <p className="text-black">
            Title: <span className="ml-2 text-black">Title</span>
          </p>
          <p className="text-black">
            Surname: <span className="ml-2 text-black">Surname</span>
          </p>
          <p className="text-black">
            First Name: <span className="ml-2 text-black">FirstName</span>
          </p>
          <p className="text-black">
            Other Names: <span className="ml-2 text-black">OtherName</span>
          </p>
          <p className="text-black">
            Religion: <span className="ml-2 text-black">Religion</span>
          </p>
          <p className="text-black">
            Marital Status:{" "}
            <span className="ml-2 text-black">MaritalStatus</span>
          </p>

          <p className="text-black">
            Date of Birth: <span className="ml-2 text-black">DOB</span>
          </p>
          <p className="text-black">
            Gender: <span className="ml-2 text-black">Gender</span>
          </p>
          <p className="text-black">
            State of Origin:{" "}
            <span className="ml-2 text-black">StateOfOrigin</span>
          </p>
          <p className="text-black">
            LGA of Origin: <span className="ml-2 text-black">LGA</span>
          </p>
          <p className="text-black">
            HomeTown: <span className="ml-2 text-black">HomeTown</span>
          </p>
          <p className="text-black">
            Mobile Number: <span className="ml-2 text-black">MobileNumber</span>
          </p>
          <p className="text-black">
            Height (meters): <span className="ml-2 text-black">Height</span>
          </p>
          <p className="text-black">
            Email: <span className="ml-2 text-black">Email</span>
          </p>
          <p className="text-black col-span-2">
            Permanent Address:{" "}
            <span className="ml-2 text-black">PermanentAddress</span>
          </p>
        </div>
        <p className="text-center text-xl mb-4">
          Certification by Divisional Police Officer
        </p>
        <p>
          I certify that the applicant
          ....................................................... is an indigene
          of ................................................. L.G.A,
          ................................................... State and that
          his/her parent hails from ............................................
          L.G.A. of ......................................... State, That he/she
          has no criminal record on him/her. (if any state briefly)
          .................................................................................................................................................................................................................................................................................................................................................................................................................
          That to the best of my knowledge and belief that facts stated in the
          form are correct and I hereby declare that if any statement made in
          connection with this application is proven to be false I should be
          prosecuted.
        </p>
        <div className="ml-10 my-5">
          <div className="flex flex-col gap-5">
            <p>
              Name:
              ......................................................................................................................................................
            </p>
            <p>
              Address:
              .................................................................................................................................................
            </p>
            <p>
              Signature:
              .............................................................................................................................................
            </p>
            <p>
              Date:
              .........................................................................................................................................................
            </p>
          </div>
        </div>
      </div>
      {/* Guarantor_Form */}
      <div className="Printable_Area mb-10 Guarantor_Form">
        <div className="MainPrint_Header">
          <div className="flex items-center justify-center">
            <img
              src={Logo}
              width="100px"
              height="90px"
              className="navbar-brand-logo"
            />
            <div className="flex flex-col">
              <span className="text-4xl">NIGERIAN NAVY</span>{" "}
              <span className="text-lg">2022 Recruitment Exercise</span>
            </div>
          </div>

          <h3 className="text-center text-3xl my-8">Application Form</h3>
          <p className="text-center text-xl mb-4">GUARANTOR'S FORM</p>
        </div>
        <div className="flex justify-end">
          <img src="" className="w-48 h-48 bg-slate-300 rounded" />
        </div>
        <div className="grid grid-cols-1 gap-6 mb-6">
          <p className="text-black">Application Number: NNR32/2022/</p>
        </div>

        <div className="grid grid-cols-2 gap-5 mb-6">
          <p className="text-black">
            Title: <span className="ml-2 text-black">Title</span>
          </p>
          <p className="text-black">
            Surname: <span className="ml-2 text-black">Surname</span>
          </p>
          <p className="text-black">
            First Name: <span className="ml-2 text-black">FirstName</span>
          </p>
          <p className="text-black">
            Other Names: <span className="ml-2 text-black">OtherName</span>
          </p>
          <p className="text-black">
            Religion: <span className="ml-2 text-black">Religion</span>
          </p>
          <p className="text-black">
            Marital Status:{" "}
            <span className="ml-2 text-black">MaritalStatus</span>
          </p>

          <p className="text-black">
            Date of Birth: <span className="ml-2 text-black">DOB</span>
          </p>
          <p className="text-black">
            Gender: <span className="ml-2 text-black">Gender</span>
          </p>
          <p className="text-black">
            State of Origin:{" "}
            <span className="ml-2 text-black">StateOfOrigin</span>
          </p>
          <p className="text-black">
            LGA of Origin: <span className="ml-2 text-black">LGA</span>
          </p>
          <p className="text-black">
            HomeTown: <span className="ml-2 text-black">HomeTown</span>
          </p>
          <p className="text-black">
            Mobile Number: <span className="ml-2 text-black">MobileNumber</span>
          </p>
          <p className="text-black">
            Height (meters): <span className="ml-2 text-black">Height</span>
          </p>
          <p className="text-black">
            Email: <span className="ml-2 text-black">Email</span>
          </p>
          <p className="text-black col-span-2">
            Permanent Address:{" "}
            <span className="ml-2 text-black">PermanentAddress</span>
          </p>
        </div>
        <p className="text-center text-xl mb-4">Particular's of Gaurantor</p>
        <div className="row">
          <div className="grid grid-cols-2 gap-2 mb-2">
            <p>
              Surname:
              ......................................................................................................................
            </p>
            <p>
              Middle Name:
              ...........................................................................................................
            </p>
            <p>
              LGA:
              .................................................................................................................................
            </p>
            <p>
              Mobile:
              ..........................................................................................................................
            </p>
            <p>
              Appointment:
              ...........................................................................................................
            </p>
            <p>
              First Name:
              ......................................................................................................................
            </p>
            <p>
              Town:
              ...................................................................................................................................
            </p>
            <p>
              State of Origin:
              ..............................................................................................................
            </p>
            <p>
              E-Mail:
              ..................................................................................................................................
            </p>
            <p>
              How long have you known the candidate:
              ..............................................
            </p>
          </div>
          <div className="grid grid-cols-1 gap-2 mb-6">
            <p>
              Formation/Unit/Office Address:
              ......................................................................................................................................................................................................................................
            </p>
            <p>
              Residential Address:
              ..................................................................................................................................................................................................................................................................
            </p>
            <p>
              Contact Address:
              ..........................................................................................................................................................................................................................................................................
            </p>
            <p>
              Name:
              ...................................................................................................................................................................................................................................................................................................
            </p>
            <p>
              Address:
              ..............................................................................................................................................................................................................................................................................................
            </p>
            <p>
              Signature:
              ...........................................................................................................................................................................................................................................................................................
            </p>
            <p>
              Date:
              ......................................................................................................................................................................................................................................................................................................
            </p>
          </div>
          <p>
            This form is to be filled by a Military Officer not below the rank
            of Lt Col or equipvalent/Police Officer not below the rank of Chief
            Superintendent of Police/Assistant Director at either Federal or
            State Civil Service certifying the eligibility of the applicant. You
            need not to come from an applicant's State of Origin to guarantee
            him/her only be sure of the character. Please note that inability to
            confirm the above given information about you, will lead to
            automatic disqualification of the candidate.
          </p>
        </div>
      </div>
      {/* Official */}
      <div className="Printable_Area Official">
        <div className="MainPrint_Header">
          <div className="flex items-center justify-center">
            <img
              src={Logo}
              width="100px"
              height="90px"
              className="navbar-brand-logo"
            />
            <div className="flex flex-col">
              <span className="text-4xl">NIGERIAN NAVY</span>{" "}
              <span className="text-lg">2022 Recruitment Exercise</span>
            </div>
          </div>

          <h3 className="text-center text-3xl my-8">Application Form</h3>
          <p className="text-center text-xl mb-4">FOR OFFICIAL USE ONLY</p>
        </div>
        <div className="flex justify-end">
          <img src="" className="w-48 h-48 bg-slate-300 rounded" />
        </div>
        <div className="grid grid-cols-1 gap-3 mb-5">
          <p className="text-black">Application Number: NNR32/2022/</p>
          <p>
            Applicant's Full Name:
            <span>Surname FirstName OtherName</span>
          </p>
          <p>
            Data Recieved:
            ...............................................................................................................
          </p>
          <p>
            Education Qualification: Number Of Credits/Passes obtained (SSCE /
            GCE / WASCE / NECO): .........................................
          </p>
          <p>Documents Attached</p>
          <div className="m-auto w-50 flex flex-col gap-3">
            <p>
              a)
              ...................................................................................................................................................................
            </p>
            <p>
              b)
              ...................................................................................................................................................................
            </p>
            <p>
              c)
              ...................................................................................................................................................................
            </p>
            <p>
              d)
              ...................................................................................................................................................................
            </p>
            <p>
              e)
              ...................................................................................................................................................................
            </p>
          </div>
          <p>Detailed Result</p>
          <div className="m-auto w-50 flex flex-col gap-3">
            <p>
              Medical Fitness:
              .................................................................................................................................
            </p>
            <p>
              General aptitute test score:
              ......................................................................................................
            </p>
            <p>
              Vocational aptitude test score:
              .............................................................................................
            </p>
          </div>
          <p>Remark</p>
          <p>
            ........................................................................................................................................................................................................................................................................................................................................................................
          </p>
          <p>
            ........................................................................................................................................................................................................................................................................................................................................................................
          </p>
          <p>
            ........................................................................................................................................................................................................................................................................................................................................................................
          </p>
          <div className="m-auto w-50 flex flex-col gap-3">
            <p>
              Rank:
              ..........................................................................................................................................................
            </p>
            <p>
              Name:
              ........................................................................................................................................................
            </p>
            <p>
              Signature and Date:
              .......................................................................................................................
            </p>
          </div>
          <p>Director, DRRR</p>
          <div className="m-auto w-50 flex flex-col gap-3">
            <p>
              Rank:
              ..........................................................................................................................................................
            </p>
            <p>
              Name:
              ........................................................................................................................................................
            </p>
            <p>
              Signature and Date:
              .......................................................................................................................
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrintApplication;
