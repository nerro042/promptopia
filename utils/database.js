import mongoose from "mongoose";

let isConnected = false; // track the connection

export const connectDB = async () => {
  mongoose.set("strictQuery", true);

  if (isConnected) {
    console.log("Connected to mongoDB");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGO_URI, {
      dbName: "share-prompt",
    });

    isConnected = true;

    console.log("Connected to mongoDB successfully");
  } catch (error) {
    console.log(error);
  }
};
