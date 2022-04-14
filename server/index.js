require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
const events = require("./routes/events");

// database connection in mongodb
mongoose.connect('mongodb+srv://Lana:Ret123@cluster0.rcpqf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');

// middlewares
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to event application." });
});

// routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/events", events);

const port = process.env.PORT || 8080;
app.listen(port, console.log(`Listening on port ${port}...`));

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback() {
  console.log("Database connected!")
});
