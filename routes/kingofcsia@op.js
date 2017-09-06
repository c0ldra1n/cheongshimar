var express = require("express");
var router = express.Router();
var OPEnroll  = require("../models/OPEnroll");

// Index
router.get("/", function(req, res){
 OPEnroll.find({})
 .exec(function(err, openroll){
  if(err) return res.json(err);
  res.render("kingofcsia@op/hiddenindex", {openroll:openroll});
 });
});

// show
router.get("/:id", function(req, res){
 OPEnroll.findOne({_id:req.params.id}, function(err, openroll){
  if(err) return res.json(err);
  res.render("kingofcsia@op/hiddenshow", {openroll:openroll});
 });
});

// edit
router.get("/:id/edit", function(req, res){
 OPEnroll.findOne({_id:req.params.id}, function(err, openroll){
  if(err) return res.json(err);
  res.render("kingofcsia@op/hiddenedit", {openroll:openroll});
 });
});

// update
router.put("/:id", function(req, res){
 req.body.updatedAt = Date.now(); // 2
 OPEnroll.findOneAndUpdate({_id:req.params.id}, req.body, function(err, openroll){
  if(err) return res.json(err);
  res.redirect("/kingofcsia@op/"+req.params.id);
 });
});

// destroy
router.delete("/:id", function(req, res){
 OPEnroll.remove({_id:req.params.id}, function(err){
  if(err) return res.json(err);
  res.redirect("/kingofcsia@op");
 });
});

module.exports = router;
