var mongoose = require("mongoose");

// schema
var arenrollSchema = mongoose.Schema({
 arcurrent:{type:String, required:true},
 arar:{type:String, required:true},
 arroom:{type:String, required:true},
 arpurpose:{type:String},
 arname:{type:String, required:true},
 arsort:{type:String, required:true},
 arsex:{type:String, required:true},
 arcurrentgrade:{type:String, required:true},
 arpassword:{type:Number, required:true},
},{
 toObject:{virtuals:true}
});

// model & export
var AREnroll = mongoose.model("arenroll", arenrollSchema);
module.exports = AREnroll;
