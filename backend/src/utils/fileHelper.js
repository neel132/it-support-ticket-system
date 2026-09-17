const fs = require("fs").promises;
const path = require("path");
const config = require("../config/config");

async function readJson(fileName) {
    const filePath = path.join(config.dataDirectory, fileName);
    const content = await fs.readFile(filePath, "utf-8");
    return JSON.parse(content);
}

async function writeJson(fileName, data) {
    const filePath = path.join(config.dataDirectory, fileName);
    await fs.writeFile(filePath, JSON.stringify(data, null, 4), "utf-8");
}

module.exports = {
    readJson,
    writeJson
}