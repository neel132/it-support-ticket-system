const express = require("express");
const cors = require("cors");
const path = require("path");

const config = require("./config/config");
const logger = require("./middleware/logger");
const notFound = require("./middleware/notFound");
const errorHandler = require("./middleware/errorHandler");

const ticketRoutes = require("./routes/ticketRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes");

const app = express();

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.use(cors());
app.use(logger);

app.use("/api/tickets", ticketRoutes);
app.use("/api/dashboard", dashboardRoutes);

app.use(notFound);
app.use(errorHandler);

module.exports = app;