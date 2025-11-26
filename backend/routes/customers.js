import express from "express";

const router = express.Router();

import customerControllers from "../controllers/customers.js";

router
  .route("/")
  .get(customerControllers.getCustomers)
  .post(customerControllers.addCustomer);

router
  .route("/:id")
  .delete(customerControllers.deleteCustomer)
  .patch(customerControllers.updateCustomerById)
  .get(customerControllers.getCustomerById);

router
  .route("/user/:email")
  .patch(customerControllers.updateCustomerByEmail)
  .get(customerControllers.getCustomerByEmail);

// router.route("/login").post(customerControllers.customerLogin)

export default router;
