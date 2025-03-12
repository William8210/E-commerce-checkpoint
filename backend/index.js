import express from "express";
import cors from "cors";
import { createNewOrder } from "./controllers/ordersController/createOrder.js"; //always rember to add .js to avoid errors
import dotenv from "dotenv";
import { CONNECT_DATABASE } from "./config/database.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3001; //either we use 3000 and if we are to host live, the hosting platform will give and use their port

app.use(cors()); //must come before any route is created and gives the front end access
app.use(express.json()); // Enables the data from the frontend to be passed to the backend, enables you access the body in the req.body
//The outcome will be a drop down of an object in our backend terminal that is to show it is successful

app.get("/", async (req, res) => {
  res.status(200).json({ message: "Welcome home" });
});

app.post("/api/v1/order/create", createNewOrder);
// app.post("/api/v1/order/create", async (req, res) => {
//   console.log(req.body); // To see if the request actually got to the backend, the data from frontend won't be access until the middleware app.use(express.json()) is initiated

//   res.status(201).json({ message: "Order successfuly created" });
// });

app.listen(PORT, async () => {
  await CONNECT_DATABASE();
  console.log("Server Listening on Port:" + PORT);
});

//We therefore create each route fnctions inside of the controller folder, so our code doesn't look mesy
