import express from "express";
import employeeRouter from "./routes/employee.js";
import mongoose from "mongoose";

const app = express();

app.use("/api/employees", employeeRouter);

mongoose.connect(
  "mongodb+srv://Gal:KfjZDmQibBb0Xybu@store.dvf8b.mongodb.net/EmployeeSys?retryWrites=true&w=majority"
);
mongoose.connection.once("open", () => {
  console.log("conneted to database");
});

app.listen(5000, () => console.log("server running on port 5000"));
