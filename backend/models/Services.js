import mongoose from "mongoose";

const servicesSchema = mongoose.Schema({
  serviceType: {
    type: String,
    required: true,
    enum: ["Landscaping", "Junk Removal", "Moving"],
  },
  service: {
    type: String,
    required: true,
    enum: [
      "Mowing",
      "Weedwhaching",
      "Spring Clean up",
      "Fall Clean Up",
      "Junk Removal",
      "Tree Removal",
      "Snow Removal",
      "Tree & Shrub Pruning",
    ],
  },
  price: { type: Number, required: true },
  discription: { type: String, required: true },
});

const Services = mongoose.model("services", servicesSchema);

export default Services;
