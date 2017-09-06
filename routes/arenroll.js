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

// Index
router.get("/arindex2", function(req, res){
 AREnroll.find({})
 .exec(function(err, arenroll){
  if(err) return res.json(err);
  res.render("arenroll/arindex2", {arenroll:arenroll});
 });
});

// Index
router.get("/arindex5", function(req, res){
 AREnroll.find({})
 .exec(function(err, arenroll){
  if(err) return res.json(err);
  res.render("arenroll/arindex5", {arenroll:arenroll});
 });
});

// New
router.get("/arnew", function(req, res){
 res.render("arenroll/arnew");
});

// New
router.get("/twoone", function(req, res){
 AREnroll.find({})
 .exec(function(err, arenroll){
  if(err) return res.json(err);
  res.render("arenroll/twoone", {arenroll:arenroll});
 });
});

// create
router.post("/", function(req, res){
 AREnroll.create(req.body, function(err, arenroll){
  if(err) return res.json(err);
  res.redirect("/");
 });
});

module.exports = router;
