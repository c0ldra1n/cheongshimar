var mongoose = require("mongoose");

// schema
var arenrollSchema = mongoose.Schema({
 arcurrent:{type:String},
 arar:{type:String},
 arroom:{type:String},
 arpurpose:{type:String},
 arname:{type:String},
 arsort:{type:String},
 arsex:{type:String},
 arcurrentgrade:{type:String},
 arpwd:{type:Number, required:true},
},{
 toObject:{virtuals:true}
});

// model & export
var AREnroll = mongoose.model("arenroll", arenrollSchema);
module.exports = AREnroll;
