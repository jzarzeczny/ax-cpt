const dbo = require("../db/conn");

// POST metric data
exports.metricCreate = function (req, res) {
  let db_connect = dbo.getDb("AXCPT");
  let myobj = {
    nickname: req.body.nickname,
    age: req.body.age,
    gender: req.body.gender,
    education: req.body.education,
    location: req.body.location,
    illness: req.body.illness,
    medicine: req.body.medicine,
    agreement: false,
  };
  db_connect.collection("metric").insertOne(myobj, function (err) {
    if (err) {
      console.log(err);
      res.send("Error with POST");
    } else {
      console.log("New user did metric stuff");
      res.status(200).send();
    }
  });
};

// POST agreement done
exports.metricAgreement = function (req, res) {
  let db_connect = dbo.getDb("AXCPT");
  let query = { nickname: req.params.nickname };
  let newValues = {
    $set: {
      agreement: req.body.agreement,
    },
  };
  db_connect.collection("metric").updateOne(query, newValues, function (err) {
    if (err) {
      res.send("Error with POST");
    } else {
      console.log("Agreement done");
      res.status(200).send();
    }
  });
};
