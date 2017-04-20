var express = require("express");
var app = express();
var bodyParser = require("body-parser");

var mongojs = require("mongojs");
var db = mongojs('cl',['clist']);

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());


app.get('/cl',function(req,res)
{
  /*person1 = {
       name : "ilesh",
       email : "ilesh@gmail.com"
  };

  var contactlist = [person1];
  res.json(contactlist); */   /*This module is using dummy data */

 db.contactlist.find(function(err,data){
    //  /console.log(data);
     res.json(data);

 });

});  //end of get req

app.post('/cl',function(req,res){
     if(req.body!= '{}')
     {

     db.contactlist.insert(req.body,function(err,data){
        // console.log(data);
         res.json(data);
     });
   }
});


app.delete('/cl/:id',function(req,res){
    var id  = req.params.id;
    db.contactlist.remove({_id : mongojs.ObjectId(id)} ,function(err,data)
    {
       res.json(data);
    }
     );

});

app.get('/cl/:id',function(req,res){
    var id = req.params.id;
    db.contactlist.findOne({_id : mongojs.ObjectId(id) }, function(err,data)
    {
      res.json(data);
    } //end of cb functiom
  ); // end of findOne

});


app.put('/cl/:id',function(req,res){
   var id =req.params.id;
   db.contactlist.findAndModify({ query : {_id : mongojs.ObjectId(id)},
   update : { $set : { name :  req.body.name ,  email : req.body.email }} , new : true } , function (err, data)
   {
     res.json(data);
  
   });
});

app.listen(3000);
console.log("server is running !!");
