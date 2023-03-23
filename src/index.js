require("dotenv").config();

const express = require("express");
const app = express();
const router = require("./router")

app.use(express.json());
app.use(router);

app.listen(process.env.PORT);