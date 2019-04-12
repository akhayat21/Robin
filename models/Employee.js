module.exports = function(sequelize, DataTypes) {

 // Column for the employee database 
  var Employee = sequelize.define("Employee", {
    // we want to store employee general information such as firstName, lastName, email. 
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
    // this is to track the assignments for the employee teams.
    teamAssignment: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1,200]
      }
    },  
    // This is to track the employee weekly hours that  is gather formt the clock in and clock out data.
    weeklyHours: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [1,100]
      },
    },
    // This is to track the total sales of the employee.
    totalSales: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [1,100]
      },
    },
    // This clock in and out is  to track the employee hours so that we could add the total hours of the employee.
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
    },// This is to have a database information of the employeee start day with the company.
    startDay: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [1,100]
      },
    },
    // This for the user to have access to our features.
    adminAccess: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    }
  });
  return Employee;
};