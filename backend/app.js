//build in modules
const fs = require("fs");

//external modules
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

//init
const app = express();
const indexRoute = require("./routes/indexRoute");
const reportsRoute = require("./routes/reportsRoute");

//middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

//routes
app.use("/", indexRoute);
app.use("/api/reports", reportsRoute);

//serve static files
app.use(express.static("build"));

// //read
// const data = fs.readFileSync("./data/reports.json");
// const reports = JSON.parse(data);
// console.log(reports.size);

/* error handling*/
app.use((req, res, next) => {
  let error = new Error("No such route found");
  console.log(error.message);
  error.status = 404;
  next(error);
});

//universal error handler
app.use((err, req, res, next) => {
  res.status(err.status || 500).send({
    success: false,
    message: err.message,
  });
});

//listening port
app.listen(3001, () => console.log("server is running"));
