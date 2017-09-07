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

// Index
router.get("/arindexorchestra", function(req, res){
 AREnroll.find({})
 .exec(function(err, arenroll){
  if(err) return res.json(err);
  res.render("arenroll/arindexorchestra", {arenroll:arenroll});
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

// New
router.get("/twotwo", function(req, res){
 AREnroll.find({})
 .exec(function(err, arenroll){
  if(err) return res.json(err);
  res.render("arenroll/twotwo", {arenroll:arenroll});
 });
});

// New
router.get("/twothree", function(req, res){
 AREnroll.find({})
 .exec(function(err, arenroll){
  if(err) return res.json(err);
  res.render("arenroll/twothree", {arenroll:arenroll});
 });
});

// New
router.get("/twofour", function(req, res){
 AREnroll.find({})
 .exec(function(err, arenroll){
  if(err) return res.json(err);
  res.render("arenroll/twofour", {arenroll:arenroll});
 });
});

// New
router.get("/twofive", function(req, res){
 AREnroll.find({})
 .exec(function(err, arenroll){
  if(err) return res.json(err);
  res.render("arenroll/twofive", {arenroll:arenroll});
 });
});

// New
router.get("/twosix", function(req, res){
 AREnroll.find({})
 .exec(function(err, arenroll){
  if(err) return res.json(err);
  res.render("arenroll/twosix", {arenroll:arenroll});
 });
});

// New
router.get("/orchestra", function(req, res){
 AREnroll.find({})
 .exec(function(err, arenroll){
  if(err) return res.json(err);
  res.render("arenroll/orchestra", {arenroll:arenroll});
 });
});

// create
router.post("/", function(req, res){
 AREnroll.create(req.body, function(err, arenroll){
  if(err) return res.json(err);
  res.redirect("arenroll");
 });
});

// show
router.get("/:id", function(req, res){
 AREnroll.findOne({_id:req.params.id}, function(err, arenroll){
  if(err) return res.json(err);
  res.render("arenroll/arshow", {arenroll:arenroll});
 });
});

// destroy
router.delete("/:id", function(req, res){
 AREnroll.remove({_id:req.params.id}, function(err){
  if(err) return res.json(err);
  res.redirect("/arenroll");
 });
});

module.exports = router;
