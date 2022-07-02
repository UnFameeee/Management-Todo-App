const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
Promise.resolve(require('./repository/initiateDB').initalize());
const apiRoute = require("./routes/router") 

const app = express();

app.use(cors());
app.use(express.json());

const task = require("./routes/task.route");
const user = require("./routes/user.route");

app.use("/api/v1", apiRoute);
// app.use("/api/v1", user);

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to gacoder.info" });
});

// set port, listen for requests
const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});