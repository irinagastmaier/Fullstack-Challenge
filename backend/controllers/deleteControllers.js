
const db = require("../model/db");
exports.deleteSingleReport = (req, res) => {
  let idParam = req.params.reportId;
  console.log(idParam);
  db.get("elements").remove({ id: idParam }).write();
  let reports = db.get("elements").sortBy("id").value();
  res.json({ success: true, message: "report deleted", reports: reports });
};