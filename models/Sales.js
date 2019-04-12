module.exports = function(sequelize, DataTypes) {

// Column for the sales database 
    var Sales = sequelize.define("Sales", {
      SalesId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          len: [1,100]
        }
      },
      ClientId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          len: [1,100]
        }
      },
      SalesId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          len: [1,100]
        }
      },
      ProductId: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1,200]
        }
      },
      TransactionID: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1,200]
        }
      }   
    });
    return Sales;
  };