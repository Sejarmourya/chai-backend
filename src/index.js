import dotenv from "dotenv";
import connectDB from "./db/index.js";

// Add these imports if you use Express/Mongoose directly
// import mongoose from "mongoose";
// import { DB_NAME } from "./constants.js";

dotenv.config({ path: './.env' });

connectDB()
.then(() => {
  app.listen(process.env.PORT || 8000, () => {
    console.log(` 0 Server is running on port : ${process.env.PORT }`);
  });
})
.catch((err) => {
  console.log("MONGO DB connection failed !!!", err);
});
  

/*
// Uncomment below to use Express and Mongoose directly

import express from "express";
import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
const app = express();

(async () => {
  try {
    await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);
    app.listen(process.env.PORT, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error;
  }
})();

app.on("error", (err) => {
  console.error("Express app error:", err);
  throw err;
});
*/