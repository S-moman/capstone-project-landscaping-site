// import Customers from "../models/Customers.js";
import Employees from "../models/Employees.js";
import jwtDecode from "jsonwebtoken";


export const auth = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {

    token = req.headers.authorization.split(" ")[1];

    const decode = jwtDecode.verify(token, process.env.JWT_SECRET);

    req.user = await Employees.findById(decode.id).select("-password");


    return next();
    } catch (e) {
      console.error(e);
      res.status(401).json({ message: "Not authorized, token failed" });
    }
  }
  res.status(401).json({ message: "Not authorized, token failed" });
};
