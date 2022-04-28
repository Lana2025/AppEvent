require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db");
const mongoose = require('mongoose');
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
const eventRoute = require('./routes/event')

// database connection in mongodb
mongoose.connect('mongodb+srv://Lana:Ret123@cluster0.rcpqf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');

// middlewares
app.use(express.json());
app.use(cors());

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to event application." });
});



// routes for registration and login
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use('/events', eventRoute)

const port = process.env.PORT || 8080;


const path = require("path");


app.use(express.static(path.resolve(__dirname, "./client/build")));

app.get("*", function (request, response) {
  response.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
});


app.listen(port, console.log(`Listening on port ${port}...`));

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback() {
  console.log("Database connected!")
});
