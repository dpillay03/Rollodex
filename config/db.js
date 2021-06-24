const mongoose = require("mongoose");
const config = require("config");
const db = config.get("mongoURI");

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      userCreateIndex: true,
    });

    console.log("MongoDB is connected!");
  } catch (err) {
    console.log("MongoDB is NOT connected! Error Message: " + err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
