import * as Model from "../model/model";
import {
  account,
  database,
  DATABASE_ID,
  USER_PROFILE_COLLECTION,
  ONBOARDING_QA_COLLECTION,
  FRONTEND_101_TOC,
} from "./appwrite";
import { ID, Query } from "appwrite";

export const save_Biodata = async () => {
  try {
    const promise = await database.createDocument(
      DATABASE_ID,
      ONBOARDING_QA_COLLECTION,
      ID.unique(),
      "DataModel"
    );

    return promise;
  } catch (err) {
    return null;
  }
};
