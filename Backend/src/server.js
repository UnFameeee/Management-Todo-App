const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
Promise.resolve(require('./repository/initiateDB').initalize());

const { exception } = require("./middleware/validation.middleware");
const apiRoute = require("./routes/router")

const app = express();

app.use(cors());
app.use(express.json());

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/v1", apiRoute);

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to gacoder.info" });
});

app.use(exception)

// set port, listen for requests
const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});