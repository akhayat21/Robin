'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Contractors', [
      {
        firstName: "Jane",
        lastName: "Doe",
        email: "yeah@gmail.com",
        teamAssignment: "red",
        weeklyHours: 10,
        totalSales: 15,
        clockIn: 11,
        clockOut: 9,
        startDay: "2019-04-01 08:00:00",
        adminAccess: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: "Jake",
        lastName: "Doe",
        email: "yeahj@gmail.com",
        teamAssignment: "blue",
        weeklyHours: 9,
        totalSales: 12,
        clockIn: 9,
        clockOut: 13,
        startDay: "2019-06-01 08:15:00",
        adminAccess: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
    

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Contractors', null, {});
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
