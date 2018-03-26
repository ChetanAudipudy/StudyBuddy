// initializes Node.js packages
var bodyParser = require("body-parser");
var express = require("express");
var reload = require("reload");

// initializes Express.js server and defines port
var app = express();
var PORT = process.env.PORT || 3000;

// sets up data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// imports routes
/*var routes = require("./controllers/CONTROLLERNAME.js");
app.use(routes);*/

// enables reloading
setTimeout(function() { reload(app); }, 5000);

// loads static files
app.use(express.static("./public/"));

// starts Express.js server
app.listen(PORT, function() {
	console.log("This app is listening on PORT: " + PORT + ".");
});