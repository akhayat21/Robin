var db = require("../../models");
module.exports = function(app) {
//GET route for getting all of the contractors
app.get("/api/Contractors", function(req, res) {

    db.Contractors.findAll({}).then(function(dbContractors) {
  
        res.json(dbContractors);
      });
  });

  //Route for getting contractors info by id
  app.get("/api/Contractors/:id", function(req, res) {
    db.Contractors.findOne({where: {
      id: req.params.id
    }}).then(function(dbContractors) {
        res.json(dbContractors);
    })
})
  
  //POST route for saving a new contractors
  app.post("/api/Contractors", function(req, res) {
  
  //create takes an argument of an object describing the item we want to insert into our table
  db.Contractors.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    teamAssignment: req.body.teamAssignment,
    Weekly_hours: req.body.Weekly_hours,
    Total_sales: req.body.Total_sales,
    clockIn: req.body.clockIn,
    clockOut: req.body.clockOut,
    startDay: req.body.startDay,
    adminAccess: req.body.adminAccess
  }).then(function(dbContractors) {
        res.json(dbContractors);
  })
    .catch(function(err) {
    //Catch Error function
      res.json(err);
    });
  
  });
  
  app.delete("/api/Contractors/:id", function(req, res) {
  //Specifiy which Contractors to get rid of with "where"
    db.Contractors.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbContractors) {
      res.json(dbContractors);
    });
  });
  
  // PUT route for updating Contractors. We can get the updated todo data from req.body
  app.put("/api/Contractors", function(req, res) {
  
  // Update takes in an object describing the properties we want to update, and
  // we use where to describe which objects we want to update  
    db.Contractors.update({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    teamAssignment: req.body.teamAssignment,
    Weekly_hours: req.body.Weekly_hours,
    Total_sales: req.body.Total_sales,
    clockIn: req.body.clockIn,
    clockOut: req.body.clockOut,
    startDay: req.body.startDay,
    adminAccess: req.body.adminAccess,
    }, {
      where: {
        id: req.body.id
      }
    }).then(function(dbContractors) {
      res.json(dbContractors);
    })
    .catch(function(err) {
    //catches error to prevent node app crash
      res.json(err);
    });
  });
}