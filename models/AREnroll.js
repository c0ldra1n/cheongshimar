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

 artwotwocurrent:{type:String, unique:true},
 twotwo:{type:String, unique:true},
 artwotworoom:{type:String, unique:true},
 artwotwopurpose:{type:String, unique:true},
 artwotwoname:{type:String, unique:true},
 artwotwosort:{type:String, unique:true},
 artwotwosex:{type:String, unique:true},
 artwotwocurrentgrade:{type:String, unique:true},

 artwothreecurrent:{type:String, unique:true},
 twothree:{type:String, unique:true},
 artwothreeroom:{type:String, unique:true},
 artwothreepurpose:{type:String, unique:true},
 artwothreename:{type:String, unique:true},
 artwothreesort:{type:String, unique:true},
 artwothreesex:{type:String, unique:true},
 artwothreecurrentgrade:{type:String, unique:true},


 artwofourcurrent:{type:String, unique:true},
 twofour:{type:String, unique:true},
 artwofourroom:{type:String, unique:true},
 artwofourpurpose:{type:String, unique:true},
 artwofourname:{type:String, unique:true},
 artwofoursort:{type:String, unique:true},
 artwofoursex:{type:String, unique:true},
 artwofourcurrentgrade:{type:String, unique:true},

 artwofivecurrent:{type:String, unique:true},
 twofive:{type:String, unique:true},
 artwofiveroom:{type:String, unique:true},
 artwofivepurpose:{type:String, unique:true},
 artwofivename:{type:String, unique:true},
 artwofivesort:{type:String, unique:true},
 artwofivesex:{type:String, unique:true},
 artwofivecurrentgrade:{type:String, unique:true},

 artwosixcurrent:{type:String, unique:true},
 twosix:{type:String, unique:true},
 artwosixroom:{type:String, unique:true},
 artwosixpurpose:{type:String, unique:true},
 artwosixname:{type:String, unique:true},
 artwosixsort:{type:String, unique:true},
 artwosixsex:{type:String, unique:true},
 artwosixcurrentgrade:{type:String, unique:true},

},{
 toObject:{virtuals:true}
});

// model & export
var AREnroll = mongoose.model("arenroll", arenrollSchema);
module.exports = AREnroll;
