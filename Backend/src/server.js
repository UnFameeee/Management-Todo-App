const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
Promise.resolve(require('./repository/initiateDB').initalize());
const apiRoute = require("./routes/router") 

const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");  

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Task App API",
      version: "1.0.0",
      description: "A simple Express Library API"
    },
    server: [
      { url: "http://localhost:3000/api/v1" }
    ]
  },
  apis: ["./src/routes/*.js"]
}

const specs = swaggerJsDoc(options)

const app = express();

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs))

app.use(cors());
app.use(express.json());

app.use("/api/v1", apiRoute);

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