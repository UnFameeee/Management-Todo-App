const userRouter = require("./user.route");
const taskRouter = require("./task.route")
const logRouter = require("./log.route")
const express = require("express");

const apiRoute = express();

apiRoute.use("/user", userRouter);
apiRoute.use("/task", taskRouter);
apiRoute.use("/log", logRouter);

module.exports = apiRoute;