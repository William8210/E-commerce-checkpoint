import { OrderModel } from "../../models/ordersModel/Order.js";
import validator from "validator";

async function createNewOrder(req, res) {
  //destructuring information from the schema gotten
  const { customerDetails, totalCost, cartItem, reference } = req.body;

  //check if the customer name is provided, validating details in the backend to avoid malicious or hackers
  //checking if the values we were expecting were actually sent and tallys with our schema
  if (validator.isEmpty(customerDetails.name)) {
    return res.status(400).json({ messsage: "please provide customer name" });
  }
  //check if customer valid email
  if (validator.isEmail(customerDetails.email) === false) {
    return res.status(400).json({ message: "please provide a valid email" });
  }
  //check if customer address is provided
  if (validator.isEmpty(customerDetails.address)) {
    return res.status(400).json({ message: "please provide an address" });
  }

  //check if totalCost is present
  if (totalCost < 0) {
    return res.status(400).json({ message: "Please provide order cost" });
  }

  //check for cartItem
  if (cartItem.length === 0) {
    return res.status(400).json({ message: "please items must be ordered" });
  }
  //check if payment reference is present
  if (validator.isEmpty(reference.trxref)) {
    return res.status(400).json({ message: "Transaction reference is needed" });
  }

  try {
    const order = await OrderModel.create({
      customerDetails: customerDetails,
      totalCost: totalCost,
      reference: reference,
      cartItem: cartItem,
    });
    res.status(201).json({ message: "order successfully created" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export { createNewOrder };

//creating a new folder called models to handle the schemas
