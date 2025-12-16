import Customers from "../models/Customers.js";
import bcrypt from "bcrypt";

const getCustomers = async (req, res) => {
  try {
    const customers = await Customers.find({});
    res.status(200).json(customers);
  } catch (e) {
    console.error(e.message);
    res.status(400).json({ error: e.message });
  }
};

// Generate JWT token
const generateToken = (id) => {
 return jwt.sign({id}, process.env.JWT_SECRET, { expiresIn: "1h" });
};

const addCustomer = async (req, res) => {
  try {
    const customer = await Customers.create(req.body);
    const hash = await bcrypt.hash(customer.password, 12);
    customer.password = hash;
    const token = generateToken(customer._id);
    await customer.save();
    res.status(201).json({customer});
    console.log(customer.name, "Customer added successfully")
  } catch (e) {
    console.log(e.message);
    res.status(400).json({ error: e.message })
  }
};

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

const getCustomerById = async (req, res) => {
  try {
    const updatedCustomer = await Customers.findById(
      { _id: req.params.id }
    );
    res.status(200).json(updatedCustomer);
  } catch (e) {
    console.error(e.message);
    res.status(400).json({ error: e.message });
  }
};

const getCustomerByEmail = async (req, res) => {
  try {
    const customer = await Customers.find(
      { email: req.params.email }
    );
    res.status(200).json(customer);
  } catch (e) {
    console.error(e.message);
    res.status(400).json({ error: e.message });
  }
};


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




export default {
  getCustomers,
  getCustomerById,
  getCustomerByEmail,
  addCustomer,
  deleteCustomer,
  updateCustomerById,
  updateCustomerByEmail,
};
