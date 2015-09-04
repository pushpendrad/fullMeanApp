var express = require('express');

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
  
        return projectDetailRouter;
    };

    module.exports= projectDetailRoute;