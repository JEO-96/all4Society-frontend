const express = require("express");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const bodyParser = require("body-parser");
const fs= require("fs");
const events = require("./db/events.json");

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.json({
        message: "Welcome to the API",
    });
});

app.get("/dashboard", (req, res) => {
    res.json({
        events: events,
    });
});