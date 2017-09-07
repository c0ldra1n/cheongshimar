var express = require("express");
var router = express.Router();
var OPEnroll  = require("../models/OPEnroll");

// Index
router.get("/", function(req, res){
 OPEnroll.find({})
 .exec(function(err, openroll){
  if(err) return res.json(err);
  res.render("openroll/opindex", {openroll:openroll});
 });
});

// New
router.get("/opnew", function(req, res){
 res.render("openroll/opnew");
});

// create
router.post("/", function(req, res){
 OPEnroll.create(req.body, function(err, openroll){
  if(err) return res.json(err);
  res.redirect("openroll");
 });
});

module.exports = router;
