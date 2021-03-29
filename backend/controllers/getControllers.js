const db = require("../model/db");
exports.getAllReports = (req, res) => {
  //get all reports from lowdb
  let reports = db.get("elements").filter({state: "OPEN"}).sortBy("id").value();
  res.json({ reports: reports });
};