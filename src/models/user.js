var bcrypt = require('bcrypt');

module.exports = function(sequelize, DataTypes) {
var User = sequelize.define("user", {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        len: [1,50]
      }
    },

    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        len: [1,50]
      }
    },

    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        len: [1,50]
      }
    },

    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        len: [1,100]
      }
    }
  });


  // User.prototype.generateHash = function(password) {
  //   return bcrypt.hash(password, bcrypt.genSaltSync(8));
  // };

  // User.prototype.validatePassword = function(password) {
  //   return bcrypt.compare(password, this.password);
  // };

  return User;
};

