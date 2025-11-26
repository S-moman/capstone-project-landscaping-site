import express from "express";

const router = express.Router();

import servicesControllers from "../controllers/services.js";

router
  .route("/")
  .get(servicesControllers.getServices)
  .post(servicesControllers.addService);

router
  .route("/:id")
  .delete(servicesControllers.removeService)
  .patch(servicesControllers.updateService);

export default router;
