const path = require("path");

exports.index = (req, res, next) => {
  console.log(__dirname);
  res.sendFile(path.resolve(__dirname, "../build/index.html"));
};
