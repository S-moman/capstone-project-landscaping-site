import Customers from "../models/Customers.js";
import { jwtDecode } from "jwt-decode";

export const auth = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {

    token = req.headers.authorization.split(" ")[1];

    const decode = jwtDecode.verify(token, process.env.JWT_SECRET);

    req.user = await Customers.findById(decode.id).select("-password");

    return next();
  }
};
