const path = require("path");

const config = {
    port: process.env.PORT || 3000,
    dataDirectory: path.join(__dirname, "../../data"),
    frontendDirectory: path.join(__dirname, "../../frontend")
}

module.exports = config;