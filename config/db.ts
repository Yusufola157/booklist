import mongoose from "mongoose";
const URI =
  "mongodb+srv://Sukanmi157:Sukanmi157@cluster0.dorzl9v.mongodb.net/jajiStore?retryWrites=true&w=majority";
mongoose.connect(URI);
mongoose.connection
  .on("open", () => {
    console.log("db is on");
  })
  .once("error", (error) => {
    console.log("an eror occ");
  });
