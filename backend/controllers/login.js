import Customers from "../models/Customers.js";
import Employees from "../models/Employees.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { OAuth2Client } from "google-auth-library";

const customerLogin = async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      return res.status(400).json({ error: "Please fill all the fields" });
    }
    const user = await Customers.findOne({ email });
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ error: "Invalid credentials" });
    }
    const token = generateToken(user._id);
    res.status(200).json({
      id: user._id,
      email: user.email,
      name: user.name,
      phone: user.phone,
      address: user.address,
      projectDetails: user.projectDetails,
      projectStartDate: user.projectStartDate,
      token,
    });
    console.log(user.name, "access granted");
  } catch (e) {
    console.log(e.message);
    res.status(400).json({ error: e.message });
  }
};

const employeeLogin = async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      return res.status(400).json({ error: "Please fill all the fields" });
    }
    const user = await Employees.findOne({ email });
    
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ error: "Invalid credentials" });
    } else {
      const token = generateToken(user._id);
      res.status(200).json({
        id: user._id,
        email: user.email,
        name: user.name,
        phone: user.phone,
        address: user.address,
        position: user.position,
        hireDate: user.hireDate,
        token,
      });
      console.log("access granted");
    }
  } catch (e) {
    console.error(e.message);
    res.status(400).json({ error: e.message });
  }
};

const googleLogin = async (req, res) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:5173/login");
  res.header("Referrer-Policy", "no-referrer-when-downgrade");
  const redirect_uri = "http://localhost:3333/login";

  const OAuth2Client = new OAuth2Client(
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET,
    redirect_uri
  );
  const authUrl = OAuth2Client.generateAuthUrl({
    access_type: "offline",
    scope: ["profile", "email"],
  });
  res.status(200).json({ url: authUrl });
};

const userLogged = async (req, res) => {
  res.status(200).json(req.user);
};

// Generate JWT token
const generateToken = (id) => {
  return jwt.sign({id}, process.env.JWT_SECRET, { expiresIn: "1h" });
};

export default {
  customerLogin,
  userLogged,
  employeeLogin,
};
