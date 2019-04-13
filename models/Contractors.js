module.exports = function(sequelize, DataTypes) {


  var Contractors = sequelize.define("Contractors", {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1,200]
      }
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1,200]
      }
    },
    email:  {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    teamAssignment: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1,200]
      }
    },
    Weekly_hours: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [1,100]
      },
    },
    Total_sales: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [1,100]
      },
   
    },
    adminAccess: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    }
  });
  return Contractors;
};