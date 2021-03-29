const express = require("express");

const router = express.Router();

const { getAllReports} = require("../controllers/getControllers");
const {putUpdateReport} = require("../controllers/putControllers");
const {deleteSingleReport} = require ("../controllers/deleteControllers")

router.get("/", getAllReports);

router.put("/:reportId", putUpdateReport);

router.delete("/:reportId", deleteSingleReport);

module.exports = router;
