import Customers from "../models/Customers.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// Get all customers
const getCustomers = async (req, res) => {
  try {
    const customers = await Customers.find({});
    res.status(200).json(customers);
  } catch (e) {
    console.error(e.message);
    res.status(400).json({ error: e.message });
  }
};

// Add a new customer
const addCustomer = async (req, res) => {
  try {
    // Create a new customer
    const customer = await Customers.create(req.body);
    // Salt rounds for bcrypt
    const salt = bcrypt.genSaltSync(12);
    // Hash the password
    const hash = await bcrypt.hash(customer.password, salt);
    customer.password = hash;
    // Generate token
    const token = generateToken(customer._id);
    // Save the customer
    await customer.save();

    res.status(201).json({ customer, token });
    console.log(customer.name, "Customer added successfully");

  } catch (e) {
    res.status(500).json({ error: e.message });
    console.log(e.message);
  }
};

// Delete a customer by id
const deleteCustomer = async (req, res) => {
  try {
    const newCustomers = await Customers.findByIdAndDelete(req.params.id);
    res.status(200).json(newCustomers);
    console.log(newCustomers);
  } catch (e) {
    console.error(e.message);
    res.status(400).json({ error: e.message });
  }
};

// Get customer by id
const getCustomerById = async (req, res) => {
  try {
    const updatedCustomer = await Customers.findById({ _id: req.params.id });
    res.status(200).json(updatedCustomer);
  } catch (e) {
    console.error(e.message);
    res.status(400).json({ error: e.message });
  }
};

// Find customer by email
const getCustomerByEmail = async (req, res) => {
  try {
    const customer = await Customers.find({ email: req.params.email });
    res.status(200).json(customer);
  } catch (e) {
    console.error(e.message);
    res.status(400).json({ error: e.message });
  }
};

// Update customer by id
const updateCustomerById = async (req, res) => {
  try {
    const updatedCustomer = await Customers.findByIdAndUpdate(
      { _id: req.params.id },
      req.body
    );
    res.status(200).json(updatedCustomer);
  } catch (e) {
    console.error(e.message);
    res.status(400).json({ error: e.message });
  }
};

// Update customer by email
const updateCustomerByEmail = async (req, res) => {
  try {
    const updatedCustomer = await Customers.find(
      { email: req.params.email },
      req.body
    );
    res.status(200).json(updatedCustomer);
  } catch (e) {
    console.error(e.message);
    res.status(400).json({ error: e.message });
  }
};

// Generate JWT token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "1h" });
};

export default {
  getCustomers,
  getCustomerById,
  getCustomerByEmail,
  addCustomer,
  deleteCustomer,
  updateCustomerById,
  updateCustomerByEmail,
};
