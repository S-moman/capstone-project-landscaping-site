import mongoose from "mongoose";

const customerSchema = mongoose.Schema({
  name: {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
  },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phone: { type: Number, required: true },
  address: {
    addressLine1: { type: String },
    city: { type: String },
    state: { type: String },
    zipCode: { type: Number },
    active: { type: Boolean },
    createdAt: { type: Date, default: Date.now },
  },
  projectDetails: {type: String},
  projectStartDate: {type: Date}
});

const Customers = mongoose.model("customers", customerSchema);

export default Customers;
