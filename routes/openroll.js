var express = require("express");
var router = express.Router();
var OPEnroll  = require("../models/OPEnroll");
var keccak256 = require('js-sha3').keccak256;

// Index
router.get("/", function(req, res){
    OPEnroll.find({}).exec(function(err, openroll){
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
    req.body.oppassword = keccak256(keccak256("$SALT$")+req.body.oppassword+keccak256("$SALT_moonlight_summersky$"));
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

    OPEnroll.find({_id:req.params.id}, function(err, openroll){
        if(err) return res.json(err);

        req.body.oppassword = keccak256(keccak256("$SALT$")+req.body.oppassword+keccak256("$SALT_moonlight_summersky$"));

        if(openroll.oppassword == req.body.oppassword){
            OPEnroll.remove({_id:req.params.id}, function(err){
                res.json({"result":"success"});
            });
        }else{
            res.json({"result":"fail"});
        }

    });

});

module.exports = router;
