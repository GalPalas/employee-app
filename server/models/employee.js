import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  postion: { type: String, required: true },
  office: { type: String, required: true },
  salary: { type: Number, required: true },
});

const Employee = mongoose.model("Employee", employeeSchema);
export default Employee;
