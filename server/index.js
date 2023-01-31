const express = require("express");
const users = require("./routes/users");
const avatar = require("./routes/avatar");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const https = require("https");
const fs = require("fs");
const app = express();

mongoose.set("strictQuery", true);

mongoose.connect(
  // "mongodb://shenfeng1945:shenfeng1945@ds239911.mlab.com:39911/reac-im",
  "mongodb+srv://admin:Ev0ZAqJhfym5i4Y3@cluster0.abmio.mongodb.net/?retryWrites=true&w=majority",
  { dbName: "react-im" },
  (error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("mongodb has been connected");
    }
  }
);

app.use(bodyParser.json());
app.use(cors());
app.use(express.static("public"));

app.use("/api/users", users);
app.use("/public/uploadImg", avatar);

// const key = fs.readFileSync("/etc/ssl/shenfeng1945.key", "utf8");
// var cert = fs.readFileSync("/etc/ssl/shenfeng1945.crt", "utf8");
var options = {
  // key: key,
  // cert: cert,
};

app.listen(6061, () => console.log("localhost:6061"));
// https.createServer(options, app).listen(6061);
