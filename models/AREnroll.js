var mongoose = require("mongoose");

// schema
var arenrollSchema = mongoose.Schema({
 artwoonecurrent:{type:String},
 twoone:{type:String},
 artwooneroom:{type:String},
 artwoonepurpose:{type:String},
 artwoonename:{type:String},
 artwoonesort:{type:String},
 artwoonesex:{type:String},
 artwoonecurrentgrade:{type:String},
 artwoonepwd:{type:Number, required:true},
},{
 toObject:{virtuals:true}
});

// model & export
var AREnroll = mongoose.model("arenroll", arenrollSchema);
module.exports = AREnroll;
