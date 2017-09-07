var mongoose = require("mongoose");

// schema
var openrollSchema = mongoose.Schema({
 opcurrent:{type:String, required:true},
 opop:{type:String, required:true},
 opname:{type:String, required:true},
 opsort:{type:String, required:true},
 opsex:{type:String, required:true},
 opcurrentgrade:{type:String, required:true},
},{
 toObject:{virtuals:true}
});

// model & export
var OPEnroll = mongoose.model("openroll", openrollSchema);
module.exports = OPEnroll;
