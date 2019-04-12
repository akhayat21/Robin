module.exports = function(sequelize, DataTypes) {

 // Column for the client database 
 
    var Client = sequelize.define("Client", {
      clientName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1,200]
        }
      },
      contactLastname: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1,200]
        }
      },
      contactFirstName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1,200]
        }
      },
      phoneNumber: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          len: [1,200]
        }
      },
      
      addressLine: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1,200]
        }
      },
      city: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1,200]
        }
      },
      state: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1,200]
        }
      },
      country: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1,200]
        }
      },
      Email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true
        }
      },
      
    });
    return Client;
  };