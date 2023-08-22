import * as Model from "../model/model";
import { database, DATABASE_ID, BIODATA_COLLECTION } from "./appwrite";
import { ID, Query } from "appwrite";

/*
********************************************************
                        BIODATA
********************************************************
*/
export const save_Biodata = async (Biodata: Model.Biodata) => {
  try {
    const promise = await database.createDocument(
      DATABASE_ID,
      BIODATA_COLLECTION,
      ID.unique(),
      Biodata
    );

    return promise;
  } catch (error) {
    throw new Error((error as Error).message);
  }
};

export const fetch_Biodata = async (uid: string) => {
  try {
    const promise = await database.listDocuments(
      DATABASE_ID,
      BIODATA_COLLECTION,
      [Query.equal("uid", uid), Query.limit(1)]
    );

    const data = promise.documents;

    if (data.length > 0) {
      return data[0];
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
export const save_NOK_Guardian = async (Biodata: Model.NOK_Guardian) => {
  try {
    const promise = await database.createDocument(
      DATABASE_ID,
      BIODATA_COLLECTION,
      ID.unique(),
      Biodata
    );

    return promise;
  } catch (error) {
    throw new Error((error as Error).message);
  }
};

export const fetch_NOK_Guardian = async (uid: string) => {
  try {
    const promise = await database.listDocuments(
      DATABASE_ID,
      BIODATA_COLLECTION,
      [Query.equal("uid", uid), Query.limit(1)]
    );

    const data = promise.documents;

    if (data.length > 0) {
      return data[0];
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
export const save_Education_Info = async (Biodata: Model.Education_Info) => {
  try {
    const promise = await database.createDocument(
      DATABASE_ID,
      BIODATA_COLLECTION,
      ID.unique(),
      Biodata
    );

    return promise;
  } catch (error) {
    throw new Error((error as Error).message);
  }
};

export const fetch_Education_Info = async (uid: string) => {
  try {
    const promise = await database.listDocuments(
      DATABASE_ID,
      BIODATA_COLLECTION,
      [Query.equal("uid", uid), Query.limit(1)]
    );

    const data = promise.documents;

    if (data.length > 0) {
      return data[0];
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
export const save_SSCE_Grade = async (Biodata: Model.SSCE_Grade) => {
  try {
    const promise = await database.createDocument(
      DATABASE_ID,
      BIODATA_COLLECTION,
      ID.unique(),
      Biodata
    );

    return promise;
  } catch (error) {
    throw new Error((error as Error).message);
  }
};

export const fetch_SSCE_Grade = async (uid: string) => {
  try {
    const promise = await database.listDocuments(
      DATABASE_ID,
      BIODATA_COLLECTION,
      [Query.equal("uid", uid), Query.limit(1)]
    );

    const data = promise.documents;

    if (data.length > 0) {
      return data[0];
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
export const save_Additional_Info = async (Biodata: Model.Additional_Info) => {
  try {
    const promise = await database.createDocument(
      DATABASE_ID,
      BIODATA_COLLECTION,
      ID.unique(),
      Biodata
    );

    return promise;
  } catch (error) {
    throw new Error((error as Error).message);
  }
};

export const fetch_Additional_Info = async (uid: string) => {
  try {
    const promise = await database.listDocuments(
      DATABASE_ID,
      BIODATA_COLLECTION,
      [Query.equal("uid", uid), Query.limit(1)]
    );

    const data = promise.documents;

    if (data.length > 0) {
      return data[0];
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
