import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./conn.js";
import morgan from "morgan";
import servicesRoute from "./routes/services.js";
import userRoute from "./routes/customers.js";
import loginRoute from "./routes/login.js";

const app = express();

const port = process.env.PORT || 8080;

app.use(express.json());
app.use(cors());
app.use(morgan("common"));

app.use("/services", servicesRoute);
app.use("/customers", userRoute);
app.use("/login", loginRoute)

app.get("/", (req, res) => {
  res.json("Hello world, we are live baby!!!");
});

app.listen(port, () => {
  console.log(`Listening on pot: ${port}`);
  connectDB();
});
