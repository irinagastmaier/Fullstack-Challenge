const db = require("../model/db");

exports.getAllReports = (req, res) => {
  //get all reports from lowdb
  let reports = db.get("elements").sortBy("id").value();
  console.log(db);
  res.json({ reports: reports });
};

exports.getSingleReport = (req, res) => {
  let idParam = parseInt(req.params.id);
  let report = db.get("elements").find({ id: idParam }).value();
  res.json({ success: true, report: report });
};
