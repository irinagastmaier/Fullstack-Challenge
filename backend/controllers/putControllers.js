const db = require("../model/db");
exports.putUpdateReport = (req, res) => {
  console.log(req.params);
  let idParam = req.params.id;
  console.log(idParam);
  db.get("elements")
    .find({ id: idParam })
    .assign({state: "CLOSED"}) //replace/update
    .write();
    let reports = db.get("elements").filter({state: "OPEN"}).sortBy("id").value();
  res.json({ success: true, message: "report updated", reports: reports });
};