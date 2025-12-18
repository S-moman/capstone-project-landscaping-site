import Employees from "../models/Employees.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// Get all employees
const getEmployees = async (req, res) => {
  try {
    const employees = await Employees.find({});
    res.status(200).json(employees);
  } catch (e) {
    console.error(e.message);
    res.status(400).json({ error: e.message });
  }
};

// Register a new employee
const registerEmployee = async (req, res) => {
  try {
    // Create a new employee
    const employee = await Employees.create(req.body);
    // Salt rounds for bcrypt
    const salt = bcrypt.genSaltSync(12);
    // Hash the password
    const hashedPassword = await bcrypt.hash(employee.password, salt);
    employee.password = hashedPassword;
    // Check if employee already exists
    // const existingEmployee = await Employees.findOne({ email });
    // if (existingEmployee) {
    //   return res.status(400).json({ message: "Employee already exists" });
    // }

    // Use JWT token
    const token = generateToken(employee._id);
    // Save the employee
    await employee.save();

    res.status(201).json({ employee, token });
    console.log(employee.name,"created successfully");
    
  } catch (e) {
    res.status(500).json({ error: e.message });
    console.log(e.message);
  }
};

// Delete employee by id
const deleteEmployee = async (req, res) => {
  try {
    const newEmployees = await Employees.findByIdAndDelete(req.params.id);
    res.status(200).json(newEmployees);
    console.log("deleted", newEmployees.name);
  } catch (e) {
    console.error(e.message);
    res.status(400).json({ error: e.message });
  }
};
// Generate JWT token
const generateToken = (id) => {
 return jwt.sign({id}, process.env.JWT_SECRET, { expiresIn: "1h" });
};

export default {
  getEmployees,
  registerEmployee,
  deleteEmployee,
};
