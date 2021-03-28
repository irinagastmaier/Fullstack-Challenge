const db = require("../model/db");

exports.putUpdateReport = (req, res) => {
  console.log(req.params);
  let idParam = parseInt(req.params.id);
  db.get("elements")
    .find({ id: idParam })
    .assign(req.body) //replace/update
    .write();
  res.json({ success: true, message: "report updated" });
};
