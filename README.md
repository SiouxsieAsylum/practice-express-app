# Express.js practice application

### This is a practice express.js app that I'll be making along with a tutorial by Travesty media. Any notes I need will be taken here. 

You need Node.js installed. 

you need two bash commands at the very least. 
`$npm init` : creates a package.json file
`$npm install express` ...duh. 

You can press enter for each thing, except:
description
you can change the entry point name if you want
initialize a git in the folder where your app will be, the json fo;e will read it. 

You can add your dependancies like express to the json file as "dependancies":

```javascript
"dependancies":{
    "express":"*",
    //etc
},
```

**Key dependancies:**
  * `express` - ...duh
  * `body-parser` - I believe this is a JSON parser but not 100% sure
  * `nodemon` - listens for file updates and automatically resets server
  * `ejs` - Embedded javascript in an HTML file
  * `pug` (for template literals)
  * `express-validator` - for validating forms

**Please note!** The comma is very important in a JSON file!

**Also note!** `"*"` will mean the latest version. 

**Triple note!** You cannot have a comma on the last item in an object!! 


After that, run `npm install`

You can run the app in the console by going `node app`

Core of any express app: 
```javascript
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
// actual server run and callback
app.listen(3000, function(){
  console.log("Server started on port 3k!")
  })
  ```

"Cannot GET /" means can't get the home page


# Basic request response format

GET, PUT, POST, DELETE are types of server requests. They have javascript functions named after them (e.g. get() for handling a GET request. )

Far as I can tell, we're looking at this format for all server requests:

```javascript
 yourapp.typeOfRequest(request, response[, next] {
    //do shit here
    })
```


Any change you make will not show until you restart the server. 

  * `.send(string)` => prints out what you put in the parens.
  * `.json(key)` => prints out the value of they key/value pair in a json object
  * `path.join(__dirname, folder)` used to set the path for reading views

# routing cheat sheet

![alt-text](https://github.com/SiouxsieAsylum/practice-express-app/blob/master/public/images/express-routing.png);

# What is middleware!

Middlewere is a series of fucntions hthat have access to the request and response object and to the next function in the stack taht is set up to handle taht request or response. 

**Order is important!** Middlewere must be above the actual route handler. 

   * Look up documentation for body-parser


# Static resources!

 `static folder` is essentially the front end folder. Holds css, jquery, etc. 
 `index.html` will always overwrite any app.js

   -NOT NECESSARY if you'd rather render views. 

# Install nodemon
Helps with the whole server restarting thing.
`npm install nodemon -g` will restart your server with every change you make. 

  * Cheat sheet!!!!
APIs written as JSON objects can be declared as you need them by writing the object and saving it as a variable. Then using the route setter `response` to send it out throught the server.: 

```javascript
app.get(route, function(req,res){
    res.json(obj);
})
```  


# Views
views are the client-side face of the app. 
Unlike index.html, a view has to be set as the default when routing. 
Typically a `.ejs` file. Starts with `index.ejs`, of course. 
To comment out `.ejs` code, wrap the  `<!--` html `-->` and `<%= // %>` the javascript. 

# Form data 
You have to declare in the `<form>` tag the method (typically POST, as forms tend to post to something) and the action, which repeats the path defined in the accompanying `app.post()` function which pressing the submit button will automatically execute. Grab the values with `request.body.name-of-input`. You need form validation, which express validation will work with.     * You may need to use "errors" as the key and value. Ask instructors.








