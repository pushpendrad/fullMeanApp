var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var app = express();
var jwt = require('jsonwebtoken');
var Config = require('./config/config');
/*
//dataBase configuration used when I store configuraion in json file
var dbConfig = require('./config/dbConfig.json')['dbConfig'];

//database configurations are stored in dbConfig file
var db = mongoose.connect("mongodb://"+dbConfig.IP+":"+dbConfig.port+"/"+dbConfig.dbName, function(err){
    if(err)
        throw err;
});
*/

console.log(Config.secret);

app.set('superSecret', Config.secret);
console.log(app.get('superSecret'));



//connecting to database
mongoose.connect(Config.database);

var port = process.env.PORT || 5678;

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.static(__dirname + "/public"));

//using morgan to log requests to the console
app.use(morgan('dev'));

//Objects of the models
var userRegistration = require('./models/userRegistration');
var projectDetail = require('./models/projectDetail');


//routers
var userRegistrationRouter = require('./routes/userRegistrationRouter')(userRegistration);
var projectDetailRouter = require('./routes/projectDetailRouter')(projectDetail);
var loginRouter = require('./routes/loginRouter')(userRegistration);

//all requests for the register are redirectes to the userRegistrationRouter
app.use('/alm/register',userRegistrationRouter);
app.use('/alm/projectdetails',projectDetailRouter);
app.use('/alm/login',loginRouter);

app.get('/',function(req,res){
	res.send("Hello from vaibhav");
});

app.listen(port,function() {
	console.log('Grunt is istening on ' + port + ' port');
});
