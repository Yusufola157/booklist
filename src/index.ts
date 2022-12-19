import express, { Application } from "express";
const app: Application = express();
const PORT: number | string = process.env.PORT || 2020;
import router from "../Routes/route";
import cors from "cors";
require("../config/db");
app.use(express.json());
app.use(cors);
app.use("/", router);
app.listen(PORT, () => {
  console.log("server is up.....");
});
