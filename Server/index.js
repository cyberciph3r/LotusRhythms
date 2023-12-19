var express = require("express");
var app = express();
var cors = require("cors");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
require("dotenv").config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));

mongoose.connect(process.env.REACT_APP_MONGODB_CONNECTION_URL);

const userSchema = new mongoose.Schema({
  userInfo: mongoose.Schema.Types.Mixed,
});

const User = mongoose.model("User", userSchema);

app.get("/", (req, res) => {
  res.send("Hello World!!");
});

app.post("/makePayment", (req, res) => {
  const { paymentData } = req.body;

  // process payment...
  res.json({ success: true, message: "Payment successful" });
});

app.post("/enrollUser", (req, res) => {
  const { userData } = req.body;
  console.log(userData);
  const user = new User({
    userInfo: JSON.stringify(userData),
  });
  user.save();
  res.json({ success: true, message: "Enrolled" });
});

app.listen(2002);
