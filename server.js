var express = require('express');
var sqlite3 = require('sqlite3');
var bodyParser = require('body-parser')

//HelloExpress.db has to be in node directory
var db = new sqlite3.Database(':memory:');

db.serialize(function() {
    db.run("CREATE TABLE Quotes(Quote VARCHAR(255), Author VARCHAR(255));");
    var today = new Date().toLocaleDateString();
    var time  = new Date().toLocaleTimeString();
    var quote = 'Today ('+today+' @ '+time+') is the 1st day of the rest of your life.';
    db.run("INSERT INTO Quotes VALUES ('"+quote+"', 'Unknown')");
});

var app = express();

// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json 
app.use(bodyParser.json())

app.use(express.static('public'))

//this is better - doesn't care where you run node from :-)
//app.use('/static', express.static(path.join(__dirname, 'public')))


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


 app.post('/quotes', function(request,response){
 	var quote = request.body;
 	db.run('INSERT INTO Quotes(quote,author) VALUES (?,?)', quote.quote, quote.author);
 	response.send("inserted " + JSON.stringify(quote));
 });

 app.get('/quotes', function(request,response){
 	db.all('SELECT * from Quotes', function(err,rows){
 			if (  err ) {
 				console.log('ERROR:',err);
 			}
 			console.log('GET QUOTES: The database currently contains the following: '+rows);
 			response.send(rows);
 	});
 });
 app.get('/quotes/:author', function(request,response){
 	db.all('SELECT * from Quotes where Author = ?', [request.params.author], function(err,rows){
 			if (  err ) {
 				console.log('ERROR:',err);
 			}
 			console.log('GET QUOTES for author: '+request.params.author);
 			response.send(rows);
 	});
 });

