import mongoose from "mongoose";

export const navy_app_server = async () => {
  return await mongoose
    .connect("mongodb://localhost:27017", { dbName: "navy_app" })
    .then(() => {
      console.log(`[server]: Server is running`);
    })
    .catch((err: string) => {
      console.error(err);
    });
};

navy_app_server();
