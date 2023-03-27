require("dotenv").config();

const express = require("express");
const cors = require("cors");
const app = express();
const router = require("./router")
const limiter = require("./middlewares/rateLimit")

app.use(cors());
app.use(express.json());
app.use(router);
app.use(limiter);

app.listen(process.env.PORT);