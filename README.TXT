//no id required
curl localhost:3000/user
curl -X POST localhost:3000/user

//id required
curl localhost:3000/user/123
curl -X DELETE localhost:3000/user/456
curl -X PUT localhost:3000/user/456
