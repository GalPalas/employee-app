import express from "express";
import data from "../data.js";
import Employee from "../models/employee.js";
import expressAsyncHandler from "express-async-handler";

const employeeRouter = express.Router();

employeeRouter.get(
  "/seed",
  expressAsyncHandler(async (req, res) => {
    const createEmployees = await Employee.insertMany(data.employees);
    res.send({ createEmployees });
  })
);

employeeRouter.get(
  "/",
  expressAsyncHandler(async (req, res) => {
    const employees = await Employee.find({});
    res.send(employees);
  })
);

export default employeeRouter;
