import mongoose from "mongoose";

// Employee Schema
const employeeSchema = mongoose.Schema({
  name: {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
  },
  phone: { type: Number, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  position: {
    type: String,
    enum: ["Admin", "Manager", "Employee"],
    required: true,
  },
  active: { type: Boolean },
  hireDate: { type: Date },
  createdAt: { type: Date, default: Date.now },
});

const Employees = mongoose.model("employees", employeeSchema);

export default Employees;
