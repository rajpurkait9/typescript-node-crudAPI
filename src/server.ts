import express from "express";
import { connect } from "http2";
import "dotenv/config";
const app = express();

const key = process.env.MONGO_URI; 
// server start code
const start = async () => {
  try {
    
    await connect(key:String);
    console.log("DB connected sucessfully...");
    app.listen(9001, () => {
      console.log("server is running on port 9001...");
    });
  } catch (error) {
    console.log(error);
  }
};

start();