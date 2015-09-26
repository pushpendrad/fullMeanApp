var express = require('express');
var jwt = require('jsonwebtoken');
var app = express();
var Config = require('../config/config');
app.set('superSecret', Config.secret);
console.log(app.get('superSecret'));

console.log(app.get('superSecret'));
var loginRoute = function(userRegistration){

    var loginRouter = express.Router();	

	loginRouter.route('/')

	  .post(function(req,res){
		userRegistration.findOne({
		  userName : req.body.userName
		},function(err,user){
		if(err) throw err;
		if (!user) {
		  res.json({success : false, message : 'Authentication failed.User not found.'});
		}
		else if(user){
		  if(user.password != req.body.password){
			res.json({success : false, message : 'Authentication failed. Wrong Password'});
		  }else{
			console.log(app.get('superSecret'));
			var token = jwt.sign(user, app.get('superSecret'),{
				expiresInMinutes : 1440
			});
			res.json({
				success : true,
				message : 'Enjoy your token!',
				token : token
			});
		   }
		}
	});	
	});

	app.use(function(req, res, next) {

	// check header or url parameters or post parameters for token
	var token = req.body.token || req.param('token') || req.headers['x-access-token'];

	// decode token
	if (token) {

		// verifies secret and checks exp
		jwt.verify(token, app.get('superSecret'), function(err, decoded) {			
			if (err) {
				return res.json({ success: false, message: 'Failed to authenticate token.' });		
			} else {
				// if everything is good, save to request for use in other routes
				req.decoded = decoded;	
				next();
			}
		});

	} else {

		// if there is no token
		// return an error
		return res.status(403).send({ 
			success: false, 
			message: 'No token provided.'
		});
		
	}
	
});

return loginRouter;
  };

module.exports = loginRoute;
