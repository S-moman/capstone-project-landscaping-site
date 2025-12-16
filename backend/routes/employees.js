import express from "express";

const router = express.Router();

import employeeControllers from "../controllers/employees.js";

router
  .route("/")
  .get(employeeControllers.getEmployees)
  .post(employeeControllers.registerEmployee);

router
  .route("/:id")
  .delete(employeeControllers.deleteEmployee)
//   .patch(employeeControllers.updateEmployeeById)
//   .get(employeeControllers.getEmployeeById);

// router
//   .route("/user/:email")
//   .patch(employeeControllers.updateEmployeeByEmail)
//   .get(employeeControllers.getEmployeeByEmail);

// router
// .route("/employee/login")
// .post(employeeControllers.employeeLogin)

export default router;