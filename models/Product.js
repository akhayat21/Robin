module.exports = function(sequelize, DataTypes) {

// Column for the product database  with a general description of each product for us to track.
    var Product = sequelize.define("Product", {
      productName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1,200]
        }
      },
      // productLine: {
      //   type: DataTypes.STRING,
      //   allowNull: false,
      //   validate: {
      //     len: [1,200]
      //   }
      // },
      // This is for us to know the type of ventor that is using or giving the product.
      // productVendor: {
      //   type: DataTypes.STRING,
      //   allowNull: false,
      //   validate: {
      //     len: [1,200]
      //   }
      // },
      // This is to store a brief description of the product usage and special information.
      productDescription: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1,265]
        }
      },//  This is for us to track the quanity of stock in our inventory for us to get alert if we are running short in inventory.
      quantityinStock: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          len: [1,200]
        }
      },
      // We want to store the whole sale price of the product for us to track profit and other financial information.
      // wholesalePrice: {
      //   type: DataTypes.INTEGER,
      //   allowNull: false,
      //   validate: {
      //     len: [1,200]
      //   }
      // }, // This is the manufacturer sales retail price for us to use in financial information.
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