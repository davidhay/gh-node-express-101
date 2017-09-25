var express = require('express');
var app = express();

//app.use(express.static('public'))

//this is better - doesn't care where you run node from :-)
app.use('/static', express.static(path.join(__dirname, 'public')))

app.listen(3000, function(){
     console.log("Server is listening on port 3000");
 });

 //no id required
 app.post("/user",function(request,response){
 	response.send("POST USER");
 });
 app.get("/user",function(request,response){
 	response.send("GET USERS");
 });
 //id required
 app.get("/user/:userid",function(request,response){
 	 var userid = request.params['userid'];
 	response.send("GET USER ["+userid+"]");
 });
 app.delete("/user/:userid",function(request,response){
 	var userid = request.params['userid'];
 	response.send("DELETE USER ["+userid+"]");
 });
 app.put("/user/:userid",function(request,response){
 	var userid = request.params['userid'];
 	response.send("UPDATE USER ["+userid+"]");
 });