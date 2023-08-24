import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import * as uriPaths from "../Asset/common/uriPaths";

const Requirements = () => {
  return (
    <>
      <Navbar />
      <div className="mt-5 mb-5  text-NAVY_Black leading-loose lg:px-20 md:px-10 px-5">
        <h2 className="text-3xl mb-4 underline">
          <u>The Nigerian Navy Application Guidelines (NNR 36) 2023</u>
        </h2>
        <ol style={{ listStyle: "auto" }}>
          <li>Applicants must be citizen of Nigeria by birth.</li>
          <li>
            Applicants must be between the ages of 18 – 22 years by 31 December
            2023 for School Certificate holders and 18 – 26 years for those with
            higher qualifications such as Nurses, NCE, OND, drivers etc.
          </li>
          <li>Applicants must not be married or have children.</li>
          <li>
            Applicants must be free from any previous criminal conviction by a
            court of law.
          </li>
          <li>
            Applicants with any of the following medical/physical challenges are
            NOT to apply: sight problem, ear problem, communicable diseases,
            mental problems, stammering, or any physical disability. Applicants
            who have tattoos are also not to apply.
          </li>
          <li>
            Applicants must not be below the height of 1.69 meters for males and
            1.650 meters for females.
          </li>
          <li>
            Applicants are required to possess any of the following
            educational/Professional qualifications.
          </li>
          <li>
            West African School Certificate/Senior Secondary School Certificate
            (not more than 2 sittings and not older than 6 years from the date
            of application, also applicable to sub paragraphs b – e)
          </li>
          <li>General Certificate of Education Ordinary Level</li>
          <li>National Examination Council (NECO).</li>
          <li>National Business and Technical Examinations (NABTEB).</li>
          <li>WAEC City and Guilds or London City and Guild.</li>
          <li>f. Ordinary National Diploma (OND).</li>
          <li>
            Any other educational qualification equivalent to those mentioned
            above.
          </li>
          <li>
            h. Applicants would be required to produce their primary school
            leaving certificate at the selection interview.
          </li>
          <li>
            All applicants must indicate/provide their National Identification
            Number (NIN).
          </li>
          <li>
            Applicants are to note that entry requirement into the following
            categories is SSCE or equivalent: B1, B2, B3, B4, B5 C1, D1, D2, D4,
            D5, D6, E1, E2, E3, E4, F1, G, H. Any other additional
            qualifications in these categories can only serve as an added
            advantage for selection into the branch and shall not attract any
            extra advantage whatsoever. See the guide for details.
          </li>
          <li>
            Applicants with other educational/professional qualifications higher
            than those stated in paragraph 1 (a-g) are not to apply. Applicants
            are warned that it is an offence to present false or forged
            documents for the Recruitment.
          </li>
          <li>
            Certificates or qualifications not declared or tendered and accepted
            during the recruitment exercise are not acceptable after recruitment
            and cannot be tendered for the purpose of change of department or
            advancement while already in the Nigerian Navy. Only qualifications
            obtained under proper service provisions are acceptable while in the
            Nigerian Navy.
          </li>
          <li>
            Applicants are required to print out Parent/Guardian consent Form
            and Local Government attestation Form which must be properly
            completed, endorsed and presented during the interview.
          </li>
          <li>
            Applicants must come to the recruitment centres with the following
            documents.
            <ul style={{ listStyle: "inside" }}>
              <li>Photocopies of Birth Certificate or Age Declaration.</li>
              <li>Photocopies of Credentials.</li>
              <li>
                Duly completed Identification Form must be signed by Chairman or
                Secretary of the Applicant’s LGA or by an officer of the rank of
                Commander and above (or equivalent in the Nigerian Army and
                Nigerian Air Force) or Chief Superintendent of Police (CSP) and
                above who hails from the Applicant’s State of Origin.
              </li>
              <li>
                Duly completed Parent/Guardian Consent Form signed by
                Applicant’s Parent or Guardian.
              </li>
              <li>
                Four passport photographs duly signed and stamped at the back by
                (c) above.
              </li>
              <li>
                f. Candidates are to bring the scratch cards of their NECO and
                WAEC results to the recruitment centres.
              </li>
              <li>Application Form is to be completed and submitted online.</li>
              <li>
                Any applicant suspected or confirmed to have impersonated,
                falsified, forged or presented false document(s) shall be
                disqualified from the recruitment exercise and handed over to
                the appropriate law enforcement agency for prosecution.
              </li>
              <li>
                The date for the Recruitment Aptitude Test will be posted on the
                NN portal in due course.
              </li>
            </ul>
          </li>
        </ol>
      </div>

      <div className="mt-5 mb-5  text-NAVY_Black leading-loose lg:px-20 md:px-10 px-5">
        <h2 className="text-3xl mb-4 underline">
          <u>Educational Requirements for Entry into each Category.</u>
        </h2>
        <ol style={{ listStyle: "auto" }}>
          <li>A1 – Marine Engineer Artificer (MEA)</li>
          <p>
            Minimum of OND Lower Credit in Marine or Mechanical Engineering and
            5 credits at SSCE or equivalent including English Language,
            Mathematics, Physics and Chemistry.
          </p>
          <li>A2 – Weapon Electrical Artificers (WEA)</li>
          <p>
            Minimum of OND Lower Credit in Electrical Electronic Engineering and
            5 credits at SSCE or equivalent including English Language,
            Mathematics, Physics and Chemistry.
          </p>
          <li>
            A3 – Aircraft Engineering Artificers (Airframe Engine) Qualification
          </li>
          <p>
            Diploma in Airframe and Engine certified/recognized by ICAO and 5
            credits at SSCE or equivalent including English Language,
            Mathematics, Physics and Chemistry.
          </p>
          <li>
            A4 – Aircraft Engineering Artificers (Avionics & Aircraft Electrics,
            Electrical / Electronics) (AEA-AA/EEE)
          </li>
          <p>
            Certificate/Diploma in Aircraft Electrics & Avionics recognized by
            ICAO and 5 credits at SSCE or equivalent including English Language,
            Mathematics, Physics and Chemistry.
          </p>
          <li>A5 – Hull Engineer Artificers (HEA)</li>
          <p>
            Minimum of OND Lower Credit in Marine or Mechanical Engineering and
            5 credits at SSCE or equivalent including English Language,
            Mathematics, Physics and Chemistry.
          </p>
          <li>B1 – Marine Engineer Mechanics (MEM)</li>
          <p>
            SSCE or equivalent with 5 credits including English Language,
            Mathematics, Physics and Chemistry. Also intermediate City & Guilds
            or Trade Test II could be considered. Technical bias will be an
            advantage.
          </p>
          <li>B2 – Weapon Electrical Mechanics (WEM)</li>
          <p>
            SSCE or equivalent with 5 credits including English Language,
            Mathematics, Physics and Chemistry. Also intermediate City & Guilds
            or Trade Test II could be considered. Technical bias will be an
            advantage.
          </p>
          <li>B3 – Hull Mechanical/Fitters (HMF)</li>
          <p>
            Requirements as in B1 and B2 with additional trade in plumbing,
            welding, machining or woodwork.
          </p>
          <li>B4 – Automobile Mechanics (AM)</li>
          <p>Requirements as in B1.</p>
          <li>B5 – Dockyard Mechanics (DM)</li>
          <p>Requirements as in B1.</p>
          <li>C1 – Communications</li>
          <p>
            SSCE or equivalent with 5 credits including English Language,
            Mathematics and Physics
          </p>
          <li>C2 – Computer</li>
          <p>
            Minimum of OND Lower Credit in Computer Studies/Computer Science,
            Desktop Publishing, Office Suite and must also possess SSCE or
            equivalent with 5 Credits including English Language and
            Mathematics.
          </p>
          <li>C3 – ICT</li>
          <p>
            Minimum of OND Lower Credit in Computer Studies/Computer Science.
            Computer literacy is compulsory and must possess SSCE or equivalent
            with 5 Credits including English Language, Mathematics and Physics.
            Proficiency or industrial certification in any of the under listed
            areas shall be an added advantage.
            <ul>
              <li>Database</li>
              <li>Computer-Aided Design</li>
              <li>Personal Computer Maintenance</li>
              <li>Networking Fundamentals</li>
              <li>Website Development and Management</li>
              <li>Programming</li>
            </ul>
          </p>
          <li>D1 – Seaman</li>
          <p>
            SSCE or equivalent with 5 credits including English Language and
            Mathematics.
          </p>
          <li>D2 – Survey Recorders</li>
          <p>
            Minimum of OND Lower Credit in Land Survey, Cartography, Geographic
            Information System and must also possess SSCE or equivalent with 5
            credits including English Language, Mathematics, Physics or
            Geography or Technical Drawing.
          </p>
          <li>D3 – Sports Men and Women</li>
          <p>
            Athletes should possess SSCE or equivalent with 4 credits including
            English Language and proven talents in sports as well as evidence of
            participation in National Sports Festival. Alternatively, candidates
            must have participated in any National Championship/All African
            Games/Olympic Games or Any International Competitions with License
            from National Sports Federation/State Sports Association.
          </p>
          <li>D4 – Physical Training Instructors</li>
          <p>
            SSCE or equivalent with 5 credits including English Language.
            Interest and proven talents in sports as well as evidence of
            participation in sports at Secondary School/State/YSFON level is
            required.
          </p>
          <li>D5 – Chaplain Assistants</li>
          <p>
            SSCE or equivalent with 5 credits including English Language and
            Christian Religious Knowledge. Two years experience as clergy/church
            worker as well as letter of recommendation from 2 Clerics/churches
            recognized by the NN is required.
          </p>
          <li>D6 – Mosque Assistants</li>
          <p>
            SSCE or equivalent with 5 credits including Arabic, Islamic
            Religious Knowledge and English Language. Two years experience as
            Imam/Mosque attendant as well as letter of recommendation from 2
            Islamic clerics/organizations recognized by the NN is required.
          </p>
          <li>D7– Firemen</li>
          <p>SSCE or equivalent with 5 credits including English Language.</p>
          <li>E1 – Writers</li>
          <p>
            SSCE or equivalent with 5 credits including English Language, Maths,
            Accounts/Economics. Computer skill is compulsory. Also OND/NCE in
            Accounts or Secretariat Administration would be added advantage.
          </p>
          <li>E2 – Store Assistants</li>
          <p>
            SSCE or equivalent with 5 credits including English Language, Maths
            and Economics. Computer skill is an added advantage.
          </p>
          <li>E3 – Caterers</li>
          <p>
            SSCE or equivalent with 5 credits including English Language and
            Home Management/Food Nutrition. Certificate or any proven experience
            as a Waiter or Steward is an advantage.
          </p>
          <li>E4 – Ordinance</li>
          <p>
            Five credits in English Language, Mathematics, Physics, Chemistry
            and any other 2 subjects.
          </p>
          <li>E5 – Project Technicians</li>
          <p>
            Minimum of OND Lower Credit in relevant discipline such as
            Architecture, Quantity Survey, Civil/Structure/Building Technology,
            Electrical/Mechanical installation, Urban and Rural Planning, Estate
            Management, Land Economy and must also possess SSCE or equivalent
            with 5 credits including English Language, Maths and Physics.
          </p>
          <li>F1 – Medical Assistants</li>
          <p>
            SSCE or equivalent with 5 credits in English Language, Maths,
            Chemistry, Biology/Health Science and Physics.
          </p>
          <li>F2 –Health Technicians</li>
          <p>
            The under listed Technicians are under F2:
            <ul>
              <li>Biomedical Engineering Technician</li>
              <li>Dental Surgery Assistant/Dental Health Technician</li>
              <li>Dispensing Optician Technician</li>
              <li>Environmental Health Technician</li>
              <li>Medical Imaging/X-Ray Technician</li>
              <li>Medical Laboratory Technician</li>
              <li>
                Medical Records Assistant/Health Information Management
                Technician
              </li>
              <li>Pharmacy Technician</li>
              <li>Physiotherapy Technician</li>
            </ul>
            A minimum qualification of OND Lower Credit or Professional
            qualification in any of the relevant fields stated above plus
            SSCE/Equivalent with 5 credits including English Language, Physics,
            Chemistry, Biology/Health Science and Mathematics.
          </p>
          <li>G – Bandsmen</li>
          <p>
            SSCE or equivalent with 5 credits including English Language.
            Applicants must be proficient in playing one or more musical
            instruments.
          </p>
          <li>H – Drivers/Mechanics</li>
          <p>
            SSCE or Equivalent with 5 credits including English Language.
            Current Mechanic apprenticeship certificate and evidence of driving
            experience with a verse drivers license as well as a letter of
            recommendation [as a mechanic] from past or present employer is
            required.
          </p>
          <li>J – Journalists</li>
          <p>
            Minimum of OND Lower Credit in Mass Communication, Journalism,
            Photography, Printing Technology, Information Library, Public
            Relations, Graphic Arts, Film Making or Cinematography and must also
            possess SSCE or equivalent with 5 credits including English Language
            and Mathematics.
          </p>
          <li>K – Nurses</li>
          <p>
            Single qualification RN and double qualification in any relevant
            qualification such as RM, A&E, ENT, Psychiatric, Pediatric,
            Orthopedic/Trauma, Ophthalmic, Anesthetic, Public Health,
            Occupational Health, Nephrology/Dialysis and Theatre Nursing.
            Applicants must possess SSCE or equivalent with 5 including English
            Language, Mathematics, Biology/Health Science, Physics and
            Chemistry.
          </p>
          <li>N – Education</li>
          <p>
            NCE in Arts/Science/Technical subjects in addition to SSCE or
            equivalent with 5 Credits including English Language and Mathematics
            for Science/Technical subjects or 5 credits Including English
            Language and at least a pass in Mathematics for Arts subjects.
          </p>
        </ol>
      </div>

      <div className="mt-5 mb-5  text-NAVY_Black leading-loose lg:px-20 md:px-10 px-5">
        <h2 className="text-3xl mb-4 underline">
          <u>General Information for All Applicants</u>
        </h2>
        <ol style={{ listStyle: "auto" }}>
          <li>
            The Nigerian Navy recruitment 2023 exercise will commence with
            screening of applicants’ credentials and an aptitude test at
            designated centres nationwide on a date to be announced later.
          </li>
          <li>
            Applicants are advised in their own interest not to submit multiple
            online applications. Any applicant with multiple submissions will be
            disqualified.
          </li>
          <li>
            Applicants are further advised in their own interest not to give any
            form of gratification or inducement to any person or group of
            persons to assist them on the recruitment exercise.
          </li>
          <li>
            Any applicant who falsifies or forges his/her documents and is
            discovered at anytime will be handed over to the appropriate law
            enforcement agency for prosecution.
          </li>
        </ol>
      </div>

      <div className=" mb-2 flex flex-col items-end text-NAVY_Black leading-loose lg:px-20 md:px-10 px-5">
        <div>
          <p>Signed</p>
          <p>Navy Secretary</p>
          <p>for Chief of the Naval Staff</p>
        </div>
      </div>
      <div className=" mb-5 lg:px-20 md:px-10 px-5">
        <Link
          to={uriPaths.AUTH}
          className="text-center block py-[10px] px-[22px] rounded text-NAVY_Gray hover:text-NAVY_Gray border-0 w-full bg-NAVY_Blue"
          style={{
            backgroundImage:
              "linear-gradient(180deg, #0075ad 10%, #39738f 100%)",
            backgroundSize: "cover",
            textDecoration: "none",
          }}
        >
          Apply Now
        </Link>
      </div>
    </>
  );
};

export default Requirements;
