var db = require("../../models");
module.exports = function(app) {
//GET route for getting all the Geomaps
app.get("api/Geomaps", function(req, res) {
    // findAll returns all entries for a maps when used with no options
    db.Geomaps.findAll({}).then(function(dbGeomaps) {
        // We have access to the Geomaps as an argument inside of the callback function
        res.json(dbGeomaps);
      });
    });

 //Route for getting a Geomap info by id
 app.get("/api/Geomaps/:id", function(req, res) {
    db.Geomaps.findOne({where: {
        id: req.params.id
      }}).then(function(db) {
          res.json(dbGeomaps);
      })
    })   

//POST route for saving a new Geomaps post
app.post("api/Geomaps", function(req, res) {
  
    db.Geomaps.create({
      employeeId: req.body.employeeId,
      origin: req.body.origin,
      destination: req.body.destination,
      timeStart: req.body.timeStart,
      timeStop: req.body.timeStop,
      distanceTravel: req.body.distanceTravel,
      totalHours: req.body.totalHours,    
    }).then(function(dbGeomaps) {
      // We have access to the new Maps as an argument inside of the callback function
      res.json(dbGeomaps);
    })
      .catch(function(err) {
  
        res.json(err);
      });
  });
//DELETE route for deleting maps via id. from req.params.id
app.delete("/api/Geomaps/:id", function(req, res) {
    // We just have to specify which maps we want to destroy with "where"
    db.Geomaps.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbGeomaps) {
      res.json(dbGeomaps);
    });
  });

  // PUT route for updating maps. We can get the updated maps data from req.body
  app.put("/api/Geomaps", function(req, res) {
  
    // Update takes in an object describing the properties we want to update, and
    // we use where to describe which objects we want to update
    db.Geomaps.update({
        employeeId: req.body.employeeId,
        origin: req.body.origin,
        destination: req.body.destination,
        timeStart: req.body.timeStart,
        timeStop: req.body.timeStop,
        distanceTravel: req.body.distanceTravel,
        totalHours: req.body.totalHours,    
    }, {
      where: {
        id: req.body.id
      }
    }).then(function(dbGeomaps) {
      res.json(dbGeomaps);
    })
    .catch(function(err) {
    
      res.json(err);
        });
      });

}