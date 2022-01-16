const express = require("express");
const recordRoutes = express.Router();
const dbo = require("../db/conn");
const getDataController = require("../controllers/getDataController");
const metricController = require("../controllers/metricController");
const treningController = require("../controllers/treningController");
const reactiveController = require("../controllers/reactiveController");
const proactiveController = require("../controllers/proactiveController");

recordRoutes.route("/record").get(getDataController.getUsers);
recordRoutes.route("/record/:nickname").get(getDataController.getUser);
recordRoutes.route("/record/add").post(metricController.metricCreate);

recordRoutes.route("/update/:nickname").post(metricController.metricAgreement);

// Get data from the trening mode!
recordRoutes.route("/trening/:nickname").post(treningController.treningData);

// Get data from low-approach reactive
recordRoutes
  .route("/reactive/low/:nickname")
  .post(reactiveController.lowReactive);

// Get data from high-approach reactive
recordRoutes
  .route("/reactive/high/:nickname")
  .post(reactiveController.highReactive);

recordRoutes
  .route("/proactive/low/:nickname")
  .post(proactiveController.lowProactie);

recordRoutes
  .route("/proactive/high/:nickname")
  .post(proactiveController.highProactie);

module.exports = recordRoutes;
