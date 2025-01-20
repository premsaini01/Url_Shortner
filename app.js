// importing components
require("dotenv").config();
const express = require("express");
const path = require("path");
const { connect } = require("./connection/cofig");

const urlRouter = require("./routes/url");
const staticRouter = require("./routes/staticRoute");
const userRouter = require("./routes/user");

// establish connection
connect(process.env.Mongo_URL).then(() => {
  console.log("MongoDb Connected!");
});

// creating app
const app = express();

// port number
const PORT = process.env.PORT || 8080;

// ejs
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

// api routes
app.use("/url", urlRouter);
app.use("/", staticRouter);
app.use("/user", userRouter);

// server starting
app.listen(PORT, () => {
  console.log(`server started at PORT:${PORT} 
    visit: http://localhost:${PORT}`);
});
