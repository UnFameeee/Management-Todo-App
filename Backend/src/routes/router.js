const userRouter = require("./user.route");
const taskRouter = require("./task.route")
// const logRouter = require("./log.route");
// const authRouter = require("./auth.route");
const express = require("express");

const apiRoute = express();

apiRoute.use(userRouter);
apiRoute.use(taskRouter);

module.exports = apiRoute;