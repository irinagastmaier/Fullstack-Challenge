const lowdb = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
//create a json file
const adapter = new FileSync("./data/reports.json");
const db = lowdb(adapter);

module.exports = db;
