module.exports = function(sequelize, DataTypes) {

    // Column for the Notification 
   
       var Notifications = sequelize.define("Notifications", {
           
         notificationId: {  // This individual notification.
           type: DataTypes.INTEGER,
           allowNull: false,
           validate: {
             len: [1,200]
           }
         },
         contractorId: { // The contractor notification.
           type: DataTypes.INTEGER,
           allowNull: false,
           validate: {
             len: [1,200]
           }
         },
         urgency: {  // This is to check the level of urgency.
           type: DataTypes.TEXT,
           allowNull: false,
           validate: {
             len: [1,245]
           }
         },
         note: { // This is to have a discription of the request.
           type: DataTypes.TEXT,
           allowNull: false,
           validate: {
             len: [1,500]
           }
         },
         addressed: { // This is to see if the manager address the issue or not.
           type: DataTypes.BOOLEAN,
           allowNull: false,
           defaultValue: false,
         },
         
       });
       return Notifications;
     };