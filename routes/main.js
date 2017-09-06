var express = require("express");
var router = express.Router();

// Home
router.get("/", function(req, res){
 res.render("main/index");
});

router.get("/about", function(req, res){
 res.render("main/about");
});

router.get("/howtouse", function(req, res){
 res.render("main/howtouse");
});

router.get("/announcement", function(req, res){
 res.render("main/announcement");
});

module.exports = router;
