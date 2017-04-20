var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var request = require("request");

app.use(bodyParser.json());

app.use(express.static(__dirname+'/public'));


app.post('/getDist',function(req,res){

  var city1 = req.body.zip1;
  var city2 = req.body.zip2;
 console.log(city1);
 console.log(city2);
  request('http://maps.googleapis.com/maps/api/distancematrix/json?origins='+city1+'&destinations='+city2+'&mode=car',function (error,response, body) {
 console.log();
  console.log('error:', error);
//var a = JSON.stringify(body);
parsedBody = JSON.parse(response.body);
  console.log(parsedBody.rows[0].elements[0].distance.text);
  res.send(parsedBody.rows[0].elements[0].distance.text);
});
})
app.listen(8082);
console.log("server is running");
