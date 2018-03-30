// initializes Node.js packages
var bodyParser = require("body-parser");
var express = require("express");
var reload = require("reload");

// initializes Express.js server and defines port
var app = express();
var PORT = process.env.PORT || 3000;

var db = require("./src/models");

// sets up data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//loads static files
app.use(express.static("./public"));

// imports routes
/*var routes = require("./controllers/CONTROLLERNAME.js");
app.use(routes);*/
require("./src/routes/user-routes.js")(app);
require("./src/routes/api-routes.js")(app);

// enables reloading
setTimeout(function() { reload(app); }, 5000);




// starts Express.js server
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});