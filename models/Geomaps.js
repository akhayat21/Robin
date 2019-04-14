module.exports = function(sequelize, DataTypes) {

    // Geolocation to database to coordinate this data with locations api
   
       var Geomaps = sequelize.define("Geomaps", {

         employeeId: {
           type: DataTypes.INTEGER,
           allowNull: false,
           validate: {
             len: [1,200]
           }
         },
         origin: {
           type: DataTypes.STRING,
           allowNull: false,
           validate: {
             len: [1,200]
           }
         },
          destination: {
           type: DataTypes.STRING,
           allowNull: false,
           validate: {
             len: [1,200]
           }
         },
          timeStart: {
           type: DataTypes.INTEGER,
           allowNull: false,
           validate: {
             len: [1,200]
           }
         },
         
         timeStop: {
           type: DataTypes.INTEGER,
           allowNull: false,
           validate: {
             len: [1,200]
           }
         },
         distanceTravel: {
           type: DataTypes.INTEGER,
           allowNull: false,
           validate: {
             len: [1,200]
           }
         },
         totalHours: {
           type: DataTypes.INTEGER,
           allowNull: false,
           validate: {
             len: [1,200]
           }
         },
         
       });
       return Geomaps;
     };