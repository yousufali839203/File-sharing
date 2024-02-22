import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const DBConnection = async () => {
  const DB_URL = `mongodb://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@ac-cvqpahe-shard-00-00.yuy5xan.mongodb.net:27017,ac-cvqpahe-shard-00-01.yuy5xan.mongodb.net:27017,ac-cvqpahe-shard-00-02.yuy5xan.mongodb.net:27017/?ssl=true&replicaSet=atlas-10060l-shard-0&authSource=admin&retryWrites=true&w=majority`;
  try {
    await mongoose.connect(DB_URL, { useNewUrlParser: true });
    console.log("MongoDB database connected ");
  } catch (error) {
    console.error("Error while connecting database " + error.message);
  }
};

export default DBConnection;
