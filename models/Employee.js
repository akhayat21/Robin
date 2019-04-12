module.exports = function(sequelize, DataTypes) {

 // Column for the employee database 
  var Employee = sequelize.define("Employee", {
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
    weeklyHours: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [1,100]
      },
    },
    totalSales: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [1,100]
      },
    },
    clockIn: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [1,100]
      },
    },
    clockOut: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [1,100]
      },
    },
    startDay: {
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
  return Employee;
};