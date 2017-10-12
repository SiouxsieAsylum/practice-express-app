const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

// // here is an example of use of middlewere
// const logger = function(req, res, next){
//   console.log("Logging!");
//   next();
// }

// you must use node app in the directory your app is in to launch the app
// nodemon runs the server for you and refreshes whenever you make a change


// // required to use said middlewere.
// app.use(logger);

// how we generate and translate views
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// handles parsing JSONcontent
app.use(bodyParser.json());
//allows us to _______ ?
app.use(bodyParser.urlencoded({extended: false}));

// all front end is in here.
app.use(express.static(path.join(__dirname, "public")));







// will handle a get request from a user to the home page ("/");
app.get("/", function(request, response){
  // response.send("You are an app");
  var title = "Practice App";

  // with one argument, passes view as entry.
  // two arguments passes values onto the view with <%= %>
  response.render("index", {
    title: title
  });
})





app.listen(3000, function(){
  console.log("Server started on port 3k!")
});
