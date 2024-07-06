import mongoose from "mongoose";

export function dbConnection() {
  try {
    let MongoURI = process.env.MongoUrl;
    mongoose.connect(`${MongoURI}`);
    console.log("Database Connected Successfully");
  } catch (error) {
    console.log("Error Connecting in DB", error);
  }
}
