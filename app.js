const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const validate = require("express-validator");
// console.log(validate);

const app = express();

// // here is an example of use of middlewere
// const logger = function(req, res, next){
//   console.log("Logging!");
//   next();
// }

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

// middleware for using validator
// formats errors
app.use(validate({
  errorFormatter: function(param, msg, value) {
    let namespace = param.split('.'),
    root = namespace.shift(),
    formParam = root;

    while(namespace.length){
      formParam += "[" + namespace.shift() + "]";
    }

    return {
      param: formParam,
      msg: msg,
      value: value
    }
  }
}));

// declaring all local variables here
app.use(function(request, respond, next){
  let errors = respond.locals.errors = null;
  next();
})

let title = "Practice App";
let users = [
  {
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@gmail.com",
    id: 1,
  },
  {
    firstName: "Jane",
    lastName: "Doe",
    email: "jane.doe@gmail.com",
    id: 2,
  },
    {
    firstName: "Anthony",
    lastName: "Pagan",
    email: "anthony.pagan@gmail.com",
    id: 3,
  }
];


// So my biggest issue rn is that I'm not sure if the validation properly works when rendering the errors. I don't believe it's firing errors when it's


// will handle a get request from a user to the home page ("/");
app.get("/", function(request, response){
  // response.send("You are an app");
  // with one argument, passes view as entry.
  // two arguments passes values onto the view with <%= %>
  // key is the <%= %> with the variable, value is the particular thing to be rendered
  response.render("index", {
    title: title,
    users: users,
  });
})

app.post("/users/add", function(request, response){
  request.checkBody('firstName', "First Name is a required feild").notEmpty();
  request.checkBody('lastName', "Last Name is a required feild").notEmpty();
  request.checkBody('email', "email is a required feild").notEmpty();

  errors = request.validationErrors();

  if (errors){
    // if errors, you want to just rerender the page
    // otherwise it sits around and waits for an error handler
    // console.log("error");

    // I think keys and values need to match?
    // Or they are reserved values in express.
    response.render("index", {
      title: title,
      users: users,
      errors: errors
  });
  } else {
      let newUser ={
      firstName: request.body.firstName,
      lastName: request.body.lastName,
      email: request.body.email,
    }

    users.push(newUser);

    response.render("index", {
      title: title,
      users: users,
      errors: valErrors
  });
  }



})




app.listen(3000, function(){
  console.log("Server started on port 3k!")
});
