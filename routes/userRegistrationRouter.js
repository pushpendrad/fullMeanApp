
var express = require('express');
var app = express();


var userRegisterRoute = function(userRegistration){ 
  var userRegistrationRouter = express.Router();

    userRegistrationRouter.route('/')

        .get(function(req,res){
            console.log("Inside get of user userRegistrationRouter");
              userRegistration.find(function(err,data){
                  if(err)
                      res.status(500).send(err);
                  else
                      res.json(data);
                    });
            })

        .post(function(req,res){
            console.log("Inside post of user userRegistrationRouter");
              var user = new userRegistration(req.body)
                /*{
                  firstName:req.body.firstName,
                  lastName:req.body.lastName,
                  emailId:req.body.emailId,
                  userName:req.body.userName,
                  password: req.body.password
                });*/
                user.save();
                res.status(201).send('Successfully Register');
            });

      userRegistrationRouter.route('/:userName')

        .get(function(req,res){
            userRegistration.findOne({'userName' : req.params.userName}, function(err,data){
              if (err) {
                res.status(500).send(err);
              }
              else {
                console.log("Inside get by Name for login ");
                res.json(data);
              }
            });
        });

        return userRegistrationRouter;
    };

    module.exports= userRegisterRoute;
