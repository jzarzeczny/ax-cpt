const dbo = require("../db/conn");

// POST low proactive
exports.lowProactive = function (req, res) {
  let db_connect = dbo.getDb("AXCPT");
  let myobj = req.body;
  db_connect.collection("proactiveLow").insertMany(myobj, function (err) {
    if (err) {
      res.send("Error with POST");
    } else {
      console.log("User complited low approach proactive");
      res.status(200).send({ message: "User complited low approach" });
    }
  });
};

// POST high proactive
exports.highProactive = function (req, res) {
  let db_connect = dbo.getDb("AXCPT");
  let myobj = req.body;
  db_connect.collection("proactiveHigh").insertMany(myobj, function (err) {
    if (err) {
      res.send("Error with POST");
    } else {
      console.log("User complited high approach proactive");
      res.status(200).send({ message: "User complited high approach" });
    }
  });
};
