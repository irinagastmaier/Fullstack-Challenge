const express = require("express");

const router = express.Router();

const { getAllReports, getSingleReport } = require("../controllers/getControllers");
const {putUpdateReport} = require("../controllers/putControllers");
const {deleteSingleReport} = require ("../controllers/deleteControllers")

router.get("/", getAllReports);
router.get("/:reportId", getSingleReport);

router.put("/:reportId", putUpdateReport);

router.delete("/:reportId", deleteSingleReport);

module.exports = router;
