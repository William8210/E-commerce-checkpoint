import mongoose from "mongoose";

async function CONNECT_DATABASE() {
  try {
    await mongoose.connect(process.env.MONGO_DB_CONNECTION_STRING);
    console.log("Database connected succesfully");
  } catch (error) {
    console.log(error);
  }
}

export { CONNECT_DATABASE };

//imported in the index.js and alled inside the app.listen
