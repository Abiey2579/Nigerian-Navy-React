import { Client, Account, Databases, Storage } from "appwrite";

const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1") // Your API Endpoint
  .setProject("645dd92a90424d7387a7"); // Your project ID

export const account = new Account(client);
export const database = new Databases(client);
export const storage = new Storage(client);

// DATABASE ID
export const DATABASE_ID = "";

// COLLECTION IDs
export const BIODATA_COLLECTION = "";
export const NOK_GUARDIAN_COLLECTION = "";
export const EDUCATION_INFO_COLLECTION = "";
export const SSCE_GRADE_COLLECTION = "";
export const ADDITIONAL_INFO_COLLECTION = "";
