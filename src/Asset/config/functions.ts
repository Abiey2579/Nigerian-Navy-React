import * as Model from "../model/model";
import {
  firestore,
  BIODATA_COLLECTION,
  NOK_GUARDIAN_COLLECTION,
  ADDITIONAL_INFO_COLLECTION,
  EDUCATION_INFO_COLLECTION,
  SSCE_GRADE_COLLECTION,
  APPLICATION_ID,
} from "./firebase-db";
import { doc, setDoc, getDoc } from "firebase/firestore";

/*
********************************************************
                        APPLICATION ID GENERATOR
********************************************************
*/
function generateRandom6Digits() {
  return Math.floor(100000 + Math.random() * 900000);
}

const random6Digits = generateRandom6Digits();

/*
********************************************************
                        BIODATA
********************************************************
*/
export const save_Biodata = async (Biodata: Model.Biodata, uid: string) => {
  try {
    // Get a reference to the document you want to set
    const docRef = doc(firestore, BIODATA_COLLECTION, uid);
    await setDoc(docRef, Biodata, { merge: true });
  } catch (error) {
    throw new Error((error as Error).message);
  }
};

export const fetch_Biodata = async (uid: string) => {
  try {
    // Get a reference to the document you want to set
    const docRef = doc(firestore, BIODATA_COLLECTION, uid);
    const snapshot = await getDoc(docRef);

    if (snapshot.exists()) {
      const data = snapshot.data();
      return data;
    }
  } catch (error) {
    throw new Error((error as Error).message);
  }
};

/*
********************************************************
                        NOK GUARDIAN
********************************************************
*/
export const save_NOK_Guardian = async (
  NOK_Guardian: Model.NOK_Guardian,
  uid: string
) => {
  try {
    // Get a reference to the document you want to set
    const docRef = doc(firestore, NOK_GUARDIAN_COLLECTION, uid);
    const promise = await setDoc(docRef, NOK_Guardian, { merge: true });

    return promise;
  } catch (error) {
    throw new Error((error as Error).message);
  }
};

export const fetch_NOK_Guardian = async (uid: string) => {
  try {
    // Get a reference to the document you want to set
    const docRef = doc(firestore, NOK_GUARDIAN_COLLECTION, uid);
    const snapshot = await getDoc(docRef);

    if (snapshot.exists()) {
      const data = snapshot.data();
      return data;
    }
  } catch (error) {
    throw new Error((error as Error).message);
  }
};

/*
********************************************************
                        EDUCATION INFO
********************************************************
*/
export const save_Education_Info = async (
  Education_Info: Model.Education_Info,
  uid: string
) => {
  try {
    // Get a reference to the document you want to set
    const docRef = doc(firestore, EDUCATION_INFO_COLLECTION, uid);
    const promise = await setDoc(docRef, Education_Info, { merge: true });

    return promise;
  } catch (error) {
    throw new Error((error as Error).message);
  }
};

export const fetch_Education_Info = async (uid: string) => {
  try {
    // Get a reference to the document you want to set
    const docRef = doc(firestore, EDUCATION_INFO_COLLECTION, uid);
    const snapshot = await getDoc(docRef);

    if (snapshot.exists()) {
      const data = snapshot.data();
      return data;
    }
  } catch (error) {
    throw new Error((error as Error).message);
  }
};

/*
********************************************************
                        SSCE GRADE
********************************************************
*/
export const save_SSCE_Grade = async (
  SSCE_Grade: Model.SSCE_Grade,
  uid: string
) => {
  try {
    // Get a reference to the document you want to set
    const docRef = doc(firestore, SSCE_GRADE_COLLECTION, uid);
    const promise = await setDoc(docRef, SSCE_Grade, { merge: true });

    return promise;
  } catch (error) {
    throw new Error((error as Error).message);
  }
};

export const fetch_SSCE_Grade = async (uid: string) => {
  try {
    // Get a reference to the document you want to set
    const docRef = doc(firestore, SSCE_GRADE_COLLECTION, uid);
    const snapshot = await getDoc(docRef);

    if (snapshot.exists()) {
      const data = snapshot.data();
      return data;
    }
  } catch (error) {
    throw new Error((error as Error).message);
  }
};

/*
********************************************************
                        ADDITIONAL INFO
********************************************************
*/
export const save_Additional_Info = async (
  Additional_Info: Model.Additional_Info,
  uid: string
) => {
  try {
    // Get a reference to the document you want to set
    const docRef = doc(firestore, ADDITIONAL_INFO_COLLECTION, uid);
    const promise = await setDoc(docRef, Additional_Info, { merge: true });

    return promise;
  } catch (error) {
    throw new Error((error as Error).message);
  }
};

export const fetch_Additional_Info = async (uid: string) => {
  try {
    // Get a reference to the document you want to set
    const docRef = doc(firestore, ADDITIONAL_INFO_COLLECTION, uid);
    const snapshot = await getDoc(docRef);

    if (snapshot.exists()) {
      const data = snapshot.data();
      return data;
    }
  } catch (error) {
    throw new Error((error as Error).message);
  }
};

/*
********************************************************
                        FINAL
********************************************************
*/

export const save_Application_ID = async (uid: string) => {
  try {
    // Get a reference to the document you want to set
    const docRef = doc(firestore, APPLICATION_ID, uid);
    const promise = await setDoc(docRef, { application_id: random6Digits });

    return promise;
  } catch (error) {
    throw new Error((error as Error).message);
  }
};

export const fetch_Application_ID = async (uid: string) => {
  try {
    // Get a reference to the document you want to set
    const docRef = doc(firestore, APPLICATION_ID, uid);
    const snapshot = await getDoc(docRef);

    if (snapshot.exists()) {
      const data = snapshot.data();
      return data;
    }
  } catch (error) {
    throw new Error((error as Error).message);
  }
};
