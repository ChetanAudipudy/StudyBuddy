
var db = require("../models");
var bcrypt = require('bcrypt');

module.exports = function(app) {
  app.get("/api/users", function(req, res) {
    db.user.findAll({}).then(function(result){
      res.json(result);
    });
  });

  app.post("/api/users", function(req, res) {
    var password = "";
    var confirmPassword = "";
    console.log("password ", req.body);
    if(req.body.password !== req.body.confirmPassword){
      throw new Error("Passwords must match!");
    }

    else{
      hashing();
    }

    function hashing() {
      
      var saltRounds = 10;
      var salt = bcrypt.genSaltSync(saltRounds);
      var password = bcrypt.hashSync(req.body.password, salt);
      createUser(password);
    }

    function createUser(pass) {
      db.user.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: pass
      }).then(function(result){
        res.json(result);
      });
    }
  });

  app.post("/api/users/login", function(req, res) {


      //bcrypt.compareSync(req.body.password, password);
     var users = [];
     
     db.user.findAll({}).then(function(result) {

        users = JSON.parse(JSON.stringify(result));
        console.log(users);

        for(var i = 0; i < users.length; i++){
          console.log(bcrypt.compareSync(req.body.password, users[i].password));
          if(req.body.email === users[i].email && bcrypt.compareSync(req.body.password, users[i].password)){
            res.json(users[i]);
          }
        }

        res.json(new Error("User not found"));

     });
  });

};

// var encrypt = function(password) {

//   var newHash = bcrypt.hash(password, 10);

//   return newHash;
// } 
