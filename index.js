var express    = require("express");
var mongoose   = require("mongoose");
mongoose.Promise = global.Promise;
var bodyParser  = require("body-parser");
var methodOverride = require("method-override");
var fs = require('fs');
var app = express();
var schedule = require('node-schedule');

// DB setting
mongoose.connect(process.env.MONGODB_URI, { useMongoClient: true });

var db = mongoose.connection;
db.once("open", function(){
 console.log("DB connected");
});
db.on("error", function(err){
 console.log("DB ERROR : ", err);
});

var scheduler = schedule.scheduleJob('0 0 * * *', function(){
  db.collection('openrolls').drop();
  db.collection('arenrolls').drop();
});

// Other settings
app.set("view engine", "ejs");
app.use(express.static(__dirname+"/public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(methodOverride("_method"));

app.get('/roomnumber2', function (req, res) {
  fs.readFile('public/img/roomnumber2.jpg', function (error, data) {
    res.writeHead(200, {'Content-Type': 'image/jpeg'});
    res.end(data);
  });
});

app.get('/roomnumber5', function (req, res) {
  fs.readFile('public/img/roomnumber5.jpg', function (error, data) {
    res.writeHead(200, {'Content-Type': 'image/jpeg'});
    res.end(data);
  });
});

// Routes
app.use("/", require("./routes/main"));
app.use("/arenroll", require("./routes/arenroll"));
app.use("/openroll", require("./routes/openroll"));
app.use("/kingofcsia@ar", require("./routes/kingofcsia@ar"));
app.use("/kingofcsia@op", require("./routes/kingofcsia@op"));

// Port setting
var port = process.env.PORT || 3000;
app.listen(port, function(){
  console.log('Server On!!!');
});