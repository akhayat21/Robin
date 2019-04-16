module.exports = function(sequelize, DataTypes) {

// Column for the sales database 
    var Sales = sequelize.define("Sales", {
        // created a salesId for us to track a product sale and also to eventually associate salesId with other databases.
      
        // created a clientId for us to track client's information and also to eventually associate clientId with other databases.

      clientId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          len: [1,100]
        }
      },
        // created a productId for us to track information and also to eventually associate productId with other databases.
      
      productId: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1,200]
        }
      },
        // created a pId for us to track information and also to eventually associate productId with other databases.
    });
    return Sales;
  };