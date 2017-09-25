//no id required
curl localhost:3000/user
curl -X POST localhost:3000/user

//id required
curl localhost:3000/user/123
curl -X DELETE localhost:3000/user/456
curl -X PUT localhost:3000/user/456

localhost:MyProject davidhay$ curl -i -H "Content-Type: application/json" -X POST -d '{"quote":"Help Ma Boab!","author":"Oor Wullie"}' http://localhost:3000/quotes

HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: text/html; charset=utf-8
Content-Length: 56
ETag: W/"38-sS1wrv8n7kGj+4cBG7gm2+GqUOM"
Date: Mon, 25 Sep 2017 11:38:10 GMT
Connection: keep-alive

inserted {"quote":"Help Ma Boab!","author":"Oor Wullie"}

NOW USING IN MEMORY DB - WHICH IS INITIALISED ON STARTUP.

CREATE TABLE Quotes(Quote VARCHAR(255), Author VARCHAR(255));
INSERT INTO Quotes VALUES ('Life is Short', 'Unknown');


