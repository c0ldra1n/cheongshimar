var mongoose = require("mongoose");

// schema
var openrollSchema = mongoose.Schema({
 opcurrent:{type:String},
 opop:{type:String},
 opname:{type:String},
 opsort:{type:String},
 opsex:{type:String},
 opcurrentgrade:{type:String},
 oppwd:{type:Number, required:true},
},{
 toObject:{virtuals:true}
});

// model & export
var OPEnroll = mongoose.model("openroll", openrollSchema);
module.exports = OPEnroll;
