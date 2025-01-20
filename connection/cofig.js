const mongoose = require("mongoose");

// function to establish connection with mongo DB
async function connect(url) {
  return mongoose.connect(url);
}

// exporting function
module.exports = { connect };
