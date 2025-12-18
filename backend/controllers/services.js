import Services from "../models/Services.js";

// Get all services
const getServices = async (req, res) => {
  try {
    const services = await Services.find({});
    res.status(200).json(services);
  } catch (e) {
    console.error(e.message);
    res.status(400).json({ error: e.message });
  }
};

// Add new service
const addService = async (req, res) => {
  try {
    const service = await Services.create(req.body);
    res.status(200).json(service);
    console.log(service);
  } catch (e) {
    console.error(e.message);
    res.status(400).json({ error: e.message });
  }
};

// Remove service
const removeService = async (req, res) => {
  try {
    const newServices = await Services.findByIdAndDelete(req.params.id);
    res.status(200).json(newServices);
    console.log(newServices);
  } catch (e) {
    console.error(e.message);
    res.status(400).json({ error: e.message });
  }
};

// Update service
const updateService = async (req, res) => {
  try {
    const updatedService = await Services.findByIdAndUpdate(
      { _id: req.params.id },
      req.body
    );
    res.status(200).json(updatedService);
  } catch (e) {
    console.error(e.message);
    res.status(400).json({ error: e.message });
  }
};

export default {
  getServices,
  addService,
  removeService,
  updateService,
};
