require("dotenv").config();
const express = require("express");
const app = express();

// Requests of content-type - application/json
app.use(express.json());

// Requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

const db = require("./app/models");

db.sequelize.sync();

// First route
app.get("/", (req, res) => {
    res.json({ message: "Hello There!" });
});

require("./app/routes/customer.routes.js")(app);

// Listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});