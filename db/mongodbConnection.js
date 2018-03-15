const mongoose = require("mongoose");

async function connectMongoDB() {
  try {
    await mongoose.connect("mongodb://localhost/express-books");
    /** ready to use. The `mongoose.connect()` promise resolves to undefined. */
    console.log("Mongoose connected!");
  } catch (error) {
    console.log(error);
    console.log("Mongoose connection problem!");
  }
}

module.exports = connectMongoDB;
