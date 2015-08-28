var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var app = express();

//dataBase configuuration
var dbConfig = require('./config/dbConfig.json')['dbConfig'];

var port = process.env.PORT || 5678;

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
//app.use(express.static(__dirname + "/public"));


var db = mongoose.connect("mongodb://"+dbConfig.IP+":"+dbConfig.port+"/"+dbConfig.dbName, function(err){
    if(err)
        throw err;
}); //database configurations are stored in dbConfig file



//Objects of the models
var userRegistration = require('./models/userRegistration');
var projectDetail = require('./models/projectDetail');


//routers

var userRegistrationRouter = require('./routes/userRegistrationRouter')(userRegistration);
var projectDetailRouter = require('./routes/projectDetailRouter')(projectDetail);

//all requests for the register are redirectes to the userRegistrationRouter
app.use('/alm/register',userRegistrationRouter);
app.use('/alm/projectdetails',projectDetailRouter);

app.get('/',function(req,res){
	res.send("Hello from vaibhav");
});

app.listen(port,function() {
	console.log('Grunt is istening on ' + port + ' port');
});
