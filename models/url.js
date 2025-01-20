// importing requirements
const mongoose = require("mongoose");

// creating a schema of our url shortner service
const urlSchema = new mongoose.Schema(
  {
    shortId: {
      type: String,
      required: true,
      unique: true,
    },

    redirectURL: {
      type: String,
      required: true,
    },

    visitHistory: [{ timeStamp: { type: Number } }],

    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
    },
  },
  {
    timestamps: true,
  }
);

// creating a model of our schema
const URL = mongoose.model("url", urlSchema);

// exporting model
module.exports = URL;
