import express from "express";

const router = express.Router();
// import { auth } from "../middleware/auth.js";

import loginController from "../controllers/login.js";

router
.route('/')
.post(loginController.customerLogin)
// .get(loginController.customerLogin)

export default router