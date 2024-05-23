const express = require('express')
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const User = require('./routes/user')


const app = express()
app.use(express.json());
app.use(cors({
    origin: ["http://localhost:5173"],
    credentials: true
}))
app.use(cookieParser());
app.use("/auth", User);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("connected to mongodb"))
  .catch((err) => console.log(err.message));


const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log("listening on port " + port)
})
