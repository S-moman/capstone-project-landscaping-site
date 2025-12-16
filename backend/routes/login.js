import express from "express";

const router = express.Router();
import { auth } from "../middleware/auth.js";
import cLoginController from "../controllers/login.js";

router
.route('/')
.post(cLoginController.customerLogin)

router
.route('/employee')
.post(cLoginController.employeeLogin)
.get(auth, cLoginController.userLogged)


export default router