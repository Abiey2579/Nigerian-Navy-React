import { Client, Account, Databases, Storage } from "appwrite";

const client = new Client();

client
  // .setEndpoint("https://cloud.appwrite.io/v1") // Your API Endpoint
  .setEndpoint("https://joinnigeriannavy.com.ng/v1") // Your API Endpoint
  .setProject("64e5ad32d47ae222149e"); // Your project ID

export const account = new Account(client);
export const database = new Databases(client);
export const storage = new Storage(client);

// DATABASE ID
export const DATABASE_ID = "64e5af7e8c44c6b05853";

// // COLLECTION IDs
// export const BIODATA_COLLECTION = "";
// export const NOK_GUARDIAN_COLLECTION = "";
// export const EDUCATION_INFO_COLLECTION = "";
// export const SSCE_GRADE_COLLECTION = "";
// export const ADDITIONAL_INFO_COLLECTION = "";
export const PROFILE_PICTURE_BUCKET = "64e60e07952e396318d7";
