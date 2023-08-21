import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const Biodata_Schema = new Schema(
  {
    uid: {
      type: String,
      require: true,
    },
    title: {
      type: String,
      require: true,
    },
    surName: {
      type: String,
      require: true,
    },
    firstName: {
      type: String,
      require: true,
    },
    otherName: {
      type: String,
    },
    religion: {
      type: String,
      require: true,
    },
    maritalStatus: {
      type: String,
      require: true,
    },
    NoOfChildren: {
      type: String,
      require: true,
    },
    DOB: {
      type: String,
      require: true,
    },
    gender: {
      type: String,
      require: true,
    },
    height: {
      type: String,
      require: true,
    },
    stateOfOrigin: {
      type: String,
      require: true,
    },
    LGA: {
      type: String,
      require: true,
    },
    homeTown: {
      type: String,
    },
    examCenter: {
      type: String,
      require: true,
    },
    mobileNumber: {
      type: String,
      require: true,
    },
    NIN: {
      type: String,
      require: true,
    },
    tattoo: {
      type: String,
      require: true,
    },
    hobbies: {
      type: String,
    },
    department: {
      type: String,
      require: true,
    },
    tribalMarks: {
      type: String,
      require: true,
    },
    permanentAddress: {
      type: String,
      require: true,
    },
    contactAddress: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

export const BiodataModel = mongoose.model("biodata", Biodata_Schema);
