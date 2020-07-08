var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

router.get("/api/burgers", function (req, res) {
  burger.findAll(function (results) {
    res.json(results);
  });
});
router.post("/api/burgers", function (req, res) {
  burger.createOne(req.body, function (results) {
    res.json(results);
  })
});
router.put("/api/burgers", function (req, res) {

  burger.updateOne(req.body, function (results) {
    res.json(results);
  })
});




module.exports = router;