import dotenv from "dotenv";
dotenv.config({ path: "./.env" });

import { app } from "./app.js";

import connectDb from "./db/index.js";

const port = process.env.PORT || 5000;

connectDb()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is listienong on http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.log("MongoDb connection error:", err);
  });
