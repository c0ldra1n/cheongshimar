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
router.get("/fiveone", function(req, res){
 AREnroll.find({})
 .exec(function(err, arenroll){
  if(err) return res.json(err);
  res.render("arenroll/fiveone", {arenroll:arenroll});
 });
});

// New
router.get("/fivetwo", function(req, res){
 AREnroll.find({})
 .exec(function(err, arenroll){
  if(err) return res.json(err);
  res.render("arenroll/fivetwo", {arenroll:arenroll});
 });
});

// New
router.get("/fivethree", function(req, res){
 AREnroll.find({})
 .exec(function(err, arenroll){
  if(err) return res.json(err);
  res.render("arenroll/fivethree", {arenroll:arenroll});
 });
});

// New
router.get("/fivefour", function(req, res){
 AREnroll.find({})
 .exec(function(err, arenroll){
  if(err) return res.json(err);
  res.render("arenroll/fivefour", {arenroll:arenroll});
 });
});

// New
router.get("/fivefive", function(req, res){
 AREnroll.find({})
 .exec(function(err, arenroll){
  if(err) return res.json(err);
  res.render("arenroll/fivefive", {arenroll:arenroll});
 });
});

// New
router.get("/fivesix", function(req, res){
 AREnroll.find({})
 .exec(function(err, arenroll){
  if(err) return res.json(err);
  res.render("arenroll/fivesix", {arenroll:arenroll});
 });
});

// New
router.get("/fiveseven", function(req, res){
 AREnroll.find({})
 .exec(function(err, arenroll){
  if(err) return res.json(err);
  res.render("arenroll/fiveseven", {arenroll:arenroll});
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

// edit
router.get("/:id/edit", function(req, res){
 AREnroll.findOne({_id:req.params.id}, function(err, arenroll){
  if(err) return res.json(err);
  res.render("arenroll/aredit", {arenroll:arenroll});
 });
});

// update
router.put("/:id", function(req, res){
 req.body.updatedAt = Date.now();
 AREnroll.findOneAndUpdate({_id:req.params.id}, req.body, function(err, arenroll){
  if(err) return res.json(err);
  res.redirect("/arenroll/"+req.params.id);
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
