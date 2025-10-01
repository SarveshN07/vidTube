import mongoose from "mongoose";
import { DB_Name } from "../constants.js";

const connectDb = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGO_URI}/${DB_Name}`
    );
    console.log(
      "MongoDb Connected! DB host:",
      connectionInstance.connection.host
    );
  } catch (error) {
    console.log("MongoDb connection Error", error);
    process.exit(1);
  }
};

export default connectDb;
