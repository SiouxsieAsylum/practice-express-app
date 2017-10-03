const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

// // here is an example of use of middlewere
// const logger = function(req, res, next){
//   console.log("Logging!");
//   next();
// }

// // required to use said middlewere.
// app.use(logger);

// handles parsing JSONcontent
app.use(bodyParser.json());
//allows us to _______ ?
app.use(bodyParser.urlencoded({extended: false}));

// all front end is in here.
app.use(express.static(path.join(__dirname, "public")));







// will handle a get request from a user to the home page ("/");
app.get("/", function(request, response){
  response.send("You are an app");
})





app.listen(3000, function(){
  console.log("Server started on port 3k!")
});
