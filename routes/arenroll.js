var express = require("express");
var router = express.Router();
var AREnroll  = require("../models/AREnroll");

// Index
router.get("/", function(req, res){
 AREnroll.find({})
 .exec(function(err, arenroll){
  if(err) return res.json(err);
  res.render("arenroll/arindex", {arenroll:arenroll});
 });
});

// New
router.get("/arnew", function(req, res){
 res.render("arenroll/arnew");
});

// New
router.get("/twozeroone", function(req, res){
 res.render("arenroll/twozeroone");
});


// create
router.post("/", function(req, res){
 AREnroll.create(req.body, function(err, arenroll){
  if(err) return res.json(err);
  res.redirect("/");
 });
});

module.exports = router;
