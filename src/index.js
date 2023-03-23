require("dotenv").config();

const express = require("express");
const app = express();
const router = require("./router")
const limiter = require("./middlewares/rateLimit")

app.use(express.json());
app.use(router);
app.use(limiter);

app.listen(process.env.PORT);