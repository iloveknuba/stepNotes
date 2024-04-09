const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

let corsOptions = {
    origin: "http://localhost:52580"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

mongoose
    .connect("mongodb+srv://xxxcccer982:nDPKRxhmQyuq1P8D@cluster0.qg4fjiy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => {
        console.log("Connected to the database!");
    })
    .catch(err => {
        console.log("Cannot connect to the database!", err);
        process.exit();
    });

const db = require("./app/models/card.model")(mongoose);
app.get("/", (req, res) => {
    res.json({ message: "Welcome to  application." });
});

require("./app/routes/card.routes")(app, db.Card);
require("./app/routes/list.routes")(app, db.List);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});