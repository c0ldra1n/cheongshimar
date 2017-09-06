var express = require("express");
var router = express.Router();
var AREnroll  = require("../models/AREnroll");

// Index
router.get("/", function(req, res){
 AREnroll.find({})
 .exec(function(err, arenroll){
  if(err) return res.json(err);
  res.render("kingofcsia@ar/hiddenindex", {arenroll:arenroll});
 });
});

// show
router.get("/:id", function(req, res){
 AREnroll.findOne({_id:req.params.id}, function(err, arenroll){
  if(err) return res.json(err);
  res.render("kingofcsia@ar/hiddenshow", {arenroll:arenroll});
 });
});

// edit
router.get("/:id/edit", function(req, res){
 AREnroll.findOne({_id:req.params.id}, function(err, arenroll){
  if(err) return res.json(err);
  res.render("kingofcsia@ar/hiddenedit", {arenroll:arenroll});
 });
});

// update
router.put("/:id", function(req, res){
 req.body.updatedAt = Date.now(); // 2
 AREnroll.findOneAndUpdate({_id:req.params.id}, req.body, function(err, arenroll){
  if(err) return res.json(err);
  res.redirect("/kingofcsia@ar/"+req.params.id);
 });
});

// destroy
router.delete("/:id", function(req, res){
 AREnroll.remove({_id:req.params.id}, function(err){
  if(err) return res.json(err);
  res.redirect("/kingofcsia@ar");
 });
});

module.exports = router;
