var express = require('express');
var app = express();

var projectDetailRoute = function(projectDetail){
var projectDetailRouter = express.Router();

    projectDetailRouter.route('/')

        .get(function(req,res){
            console.log("Inside get of projectDetailRouter");
              projectDetail.find(function(err,data){
                  if(err)
                      res.status(500).send(err);
                  else
                      res.json(data);
                    });
            })

        .post(function(req,res){
            console.log("Inside post of projectDetailRouter");
              var project = new projectDetail(req.body);
                project.save();
                res.status(201).send('Successfully Submitted');
            });

    projectDetailRouter.route('/:projectId')

      .get(function(req,res){
        projectDetail.findById(req.params.projectId,function(err,data){
            if(err)
                res.status(500).send(err);
            else
            res.json(data);
        });
     })
    
    .delete(function(req,res){
       console.log("deleting the id");
        projectDetail.remove({_id:req.params.projectId},function(err)
        {
          console.log("deleted the id");
          console.log(err);
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
  
        return projectDetailRouter;
    };

    module.exports= projectDetailRoute;
