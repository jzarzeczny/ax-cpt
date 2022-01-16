const dbo = require("../db/conn");

// Trening data related to nickname

exports.treningData = function (req, res) {
  let db_connect = dbo.getDb("AXCPT");
  let myobj = req.body;
  db_connect.collection("trening").insertMany(myobj, function (err) {
    if (err) {
      res.send("Error with POST");
    } else {
      console.log("Trening done");
      res.status(200).send({ message: "Trening done" });
    }
  });
};
