const db = require("../model/db");

exports.deleteSingleReport = (req, res) => {
  let idParam = parseInt(req.params.id);
  db.get("elements").remove({ id: idParam }).write();
  res.json({ success: true, message: "report deleted" });
};
