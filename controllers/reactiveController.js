// POST reactive done low

exports.lowReactive = function (req, res) {
  let db_connect = dbo.getDb("AXCPT");
  let myobj = req.body;
  db_connect.collection("reactiveLow").insertMany(myobj, function (err) {
    if (err) {
      res.send("Error with POST");
    } else {
      console.log("User complited low approach reactive");
      res.status(200).send();
    }
  });
};

// POSTreactive done high
exports.highReactive = function (req, res) {
  let db_connect = dbo.getDb("AXCPT");
  let myobj = req.body;
  db_connect.collection("reactiveHigh").insertMany(myobj, function (err) {
    if (err) {
      res.send("Error with POST");
    } else {
      console.log("User complited high approach reactive");
      res.status(200).send();
    }
  });
};
