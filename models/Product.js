module.exports = function(sequelize, DataTypes) {

// Column for the product database 
    var Product = sequelize.define("Product", {
      productName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1,200]
        }
      },
      productLine: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          len: [1,200]
        }
      },
      productVendor: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          len: [1,200]
        }
      },
      productDescription: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          len: [1,265]
        }
      },
      quantityinStock: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          len: [1,200]
        }
      },
      wholesalePrice: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          len: [1,200]
        }
      },
      msrp: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          len: [1,200]
        }
      },
     
    });
    return Product;
  };