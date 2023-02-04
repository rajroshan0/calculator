//jshint eversion:6
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
//app.use(bodyParser.text)
app.use(bodyParser.urlencoded({extended: true}));
//app.use(bodyParser.json);


app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
  //res.sendFile(__dirname+"bmiCalculator");
});
app.post("/", function(req, res) {
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);

/* */ */

  var result = num1 + num2;
  // this console.log(request.body) print out the data entered by user in our webpage
  //console.log(req.body.num2);
  //console.log(req.body.num1);
  //console.log(req.body);

  //app.post("/bmiCalculator.html",function(req, res) {
  //var Height = Number(req.body.num1);
  //var Weight = Number(req.body.num2);
//  var result = num1 + num2;
  //res.send("the sum of your two number is "+result2 );
  //});



  res.send("the sum of your two number is " + result);
});



app.get("/bmiCalculator.html",function(req,res){
  res.sendFile(__dirname +"/bmiCalculator.html");
});

app.post("/bmiCalculator.html",function(req,res){
  var weight= parseFloat(req.body.weight);
  var height=parseFloat(req,body.height);

  var bmi=weight / (height*heigh);
  req.send("Your BMI is"+ bmi);
});


app.listen(3000, function() {
  console.log("server started on port 3000")
});
