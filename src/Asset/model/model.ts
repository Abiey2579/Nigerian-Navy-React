export interface Biodata {
  $collectionId?: any;
  $createdAt?: any;
  $databaseId?: any;
  $id?: any;
  $permissions?: any;
  $updatedAt?: any;

  title?: string;
  surName?: string;
  firstName?: string;
  otherName?: string;
  religion?: string;
  maritalStatus?: string;
  NoOfChildren?: string;
  DOB?: string;
  gender?: string;
  height?: string;
  stateOfOrigin?: string;
  LGA?: string;
  homeTown?: string;
  examCenter?: string;
  mobileNumber?: string;
  NIN?: string;
  tattoo?: string;
  hobbies?: string;
  department?: string;
  tribalMarks?: string;
  permanentAddress?: string;
  contactAddress?: string;
}

export interface NOK_Guardian {
  $collectionId?: any;
  $createdAt?: any;
  $databaseId?: any;
  $id?: any;
  $permissions?: any;
  $updatedAt?: any;

  fullName?: string;
  occupation?: string;
  post?: string;
  email?: string;
  relationShip?: string;
  mobileNumber?: string;
  contactAddress?: string;
  parentFullName?: string;
  parentResidentialAddress?: string;

  refereeName1?: string;
  refereeAddress1?: string;
  refereePhone1?: string;

  refereeName2?: string;
  refereeAddress2?: string;
  refereePhone2?: string;

  refereeName3?: string;
  refereeAddress3?: string;
  refereePhone3?: string;
}

export interface Education_Info {
  $collectionId?: any;
  $createdAt?: any;
  $databaseId?: any;
  $id?: any;
  $permissions?: any;
  $updatedAt?: any;

  primary?: string;
  primaryFrom?: string;
  primaryTo?: string;

  secondary?: string;
  secondaryQualification?: string;
  secondaryFrom?: string;
  secondaryTo?: string;

  institution?: string;
  courseOfStudy?: string;
  institutionQualification?: string;
  institutionFrom?: string;
  institutionTo?: string;
}

export interface SSCE_Grade {
  $collectionId?: any;
  $createdAt?: any;
  $databaseId?: any;
  $id?: any;
  $permissions?: any;
  $updatedAt?: any;

  examType?: string;
  NoOfSitting?: string;
  centerNo?: string;
  examNo?: string;

  subject1?: string;
  grade1?: string;

  subject2?: string;
  grade2?: string;

  subject3?: string;
  grade3?: string;

  subject4?: string;
  grade4?: string;

  subject5?: string;
  grade5?: string;

  subject6?: string;
  grade6?: string;

  subject7?: string;
  grade7?: string;

  subject8?: string;
  grade8?: string;

  subject9?: string;
  grade9?: string;
}

export interface Additional_Info {
  $collectionId?: any;
  $createdAt?: any;
  $databaseId?: any;
  $id?: any;
  $permissions?: any;
  $updatedAt?: any;

  question1?: string;
  question1_Reason?: string;

  question2?: string;
  question2_Reason?: string;

  question3?: string;
  question3_Reason?: string;
  question3_Duration?: string;

  question4?: string;
  question4_Reason?: string;
  question4_Conviction?: string;

  question5?: string;
  question5_Reason?: string;

  Relative1_Name?: string;
  Relative1_LastRank?: string;
  Relative1_Force?: string;
  Relative1_StillInService?: string;

  Relative2_Name?: string;
  Relative2_LastRank?: string;
  Relative2_Force?: string;
  Relative2_StillInService?: string;
}

export interface Applicant_ID {
  application_id?: string;
}
