const express = require("express");

const recordRoutes = express.Router();

const dbo = require("../db/conn");

recordRoutes.route("/record").get(function (req, res) {
  let db_connect = dbo.getDb("AXCPT");
  db_connect
    .collection("metric")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});
recordRoutes.route("/record/:nickname").get(function (req, res) {
  let db_connect = dbo.getDb("AXCPT");
  console.log(req.params);
  let nickname = req.params.nickname;
  db_connect
    .collection("metric")
    .find({ nickname: nickname })
    .next(function (err, result) {
      if (err) throw err;
      console.log("User looks after his nick!");
      console.log(result);
      res.json(result);
    });
});
recordRoutes.route("/record/add").post(function (req, res) {
  let db_connect = dbo.getDb("AXCPT");
  let myobj = {
    nickname: req.body.nickname,
    age: req.body.age,
    gender: req.body.gender,
    education: req.body.education,
    location: req.body.location,
    agreement: false,
  };
  db_connect.collection("metric").insertOne(myobj, function (err, res) {
    if (err) throw err;
    console.log("New user did metric stuff");
  });
});
recordRoutes.route("/update/:nickname").post(function (req, res) {
  let db_connect = dbo.getDb("AXCPT");
  let query = { nickname: req.params.nickname };
  let newValues = {
    $set: {
      agreement: req.body.agreement,
    },
  };
  db_connect.collection("metric").updateOne(query, newValues, function (err) {
    if (err) throw err;
    console.log("Agreement done");
  });
});
// Get data from the trening mode!
recordRoutes.route("/trening/:nickname").post(function (req, res) {
  let db_connect = dbo.getDb("AXCPT");
  let myobj = req.body;
  db_connect.collection("trening").insertMany(myobj),
    function (err, res) {
      if (err) throw err;
    };
  console.log("User complited trening");
});
// Get data from low-approach reactive
recordRoutes.route("/reactive/low/:nickname").post(function (req, res) {
  let db_connect = dbo.getDb("AXCPT");
  let myobj = req.body;
  db_connect.collection("reactiveLow").insertMany(myobj),
    function (err, res) {
      if (err) throw err;
    };
  console.log("User complited low approach reactive");
});
// Get data from high-approach reactive
recordRoutes.route("/reactive/high/:nickname").post(function (req, res) {
  let db_connect = dbo.getDb("AXCPT");
  let myobj = req.body;
  db_connect.collection("reactiveHigh").insertMany(myobj),
    function (err, res) {
      if (err) throw err;
    };
  console.log("User complited high approach reactive");
});
recordRoutes.route("/proactive/low/:nickname").post(function (req, res) {
  let db_connect = dbo.getDb("AXCPT");
  let myobj = req.body;
  db_connect.collection("proactiveLow").insertMany(myobj),
    function (err, res) {
      if (err) throw err;
    };
  console.log("User complited low approach proactive");
});
recordRoutes.route("/proactive/high/:nickname").post(function (req, res) {
  let db_connect = dbo.getDb("AXCPT");
  let myobj = req.body;
  db_connect.collection("proactiveHigh").insertMany(myobj),
    function (err, res) {
      if (err) throw err;
    };
  console.log("User complited high approach proactive");
});

module.exports = recordRoutes;
