const colors = require("colors");
const mongoose = require("mongoose");

// Function to connect to MongoDB
const connectdb = async () => {
  try {
    // Use the local MongoDB URI directly
    const connection = await mongoose.connect(
      "mongodb://localhost:27017/food-app"
    );
    console.log(
      `Connected to database: ${connection.connection.host}`.bgWhite.black
    ); // Added .black for better readability
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectdb;
