// Get list of all users
exports.getUsers = function (req, res) {
  let db_connect = dbo.getDb("AXCPT");
  db_connect
    .collection("metric")
    .find({})
    .toArray(function (err, result) {
      if (err) {
        res.send("Error with POST");
      } else {
        res.json(result);
      }
    });
};

exports.getUser = function (req, res) {
  let db_connect = dbo.getDb("AXCPT");
  let nickname = req.params.nickname;
  db_connect
    .collection("metric")
    .find({ nickname: nickname })
    .next(function (err, result) {
      if (err) throw err;
      console.log("User looks after his nick!");
      res.json(result);
    });
};
