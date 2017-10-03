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

// show
router.get("/:id", function(req, res){
    OPEnroll.findOne({_id:req.params.id}, function(err, openroll){
     if(err) return res.json(err);
     res.render("openroll/opshow", {openroll:openroll});
    });
   });
   
   // edit
   router.get("/:id/edit", function(req, res){
    OPEnroll.findOne({_id:req.params.id}, function(err, openroll){
     if(err) return res.json(err);
     res.render("openroll/opedit", {openroll:openroll});
    });
   });
   
   // update
   router.put("/:id", function(req, res){
    req.body.updatedAt = Date.now();
    OPEnroll.findOneAndUpdate({_id:req.params.id}, req.body, function(err, openroll){
     if(err) return res.json(err);
     res.redirect("/openroll/"+req.params.id);
    });
   });
   
   // destroy
   router.delete("/:id", function(req, res){
    OPEnroll.remove({_id:req.params.id}, function(err){
     if(err) return res.json(err);
     res.redirect("/openroll");
    });
   });

module.exports = router;
