require("dotenv").config();

const express = require("express");
const {
  auth,
  getSingleUser,
  getUserANdupdate,
} = require("./controllers/user.controlller");
const errorHandler = require("./middlewares/errorHandler");

const app = express();
const cors = require("cors");

const apiRouter = require("./routes");

const connect = require("./Database/connect");
const User = require("./Database/user.models");

app.use(cors());

app.use(express.json());

app.use(apiRouter);
app.use(errorHandler);

const PORT = 5000 || process.env.port;

app.listen(PORT, () => {
  console.log(`app listening on ${PORT}....`);
});
