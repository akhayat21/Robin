var db = require("../../models");
module.exports = function(app) {
    //Route for getting all client info
  app.get("/api/Clients", function(req, res) {
    //findAll returns client entries
    db.Client.findAll({}).then(function(dbClients) {
      res.json(dbClients);
      }); 
    });
    //Route for getting client info by id
  app.get("/api/Clients/:id", function(req, res) {
    db.Client.findOne({where: {
        id: req.params.id
      }}).then(function(dbClients) {
          res.json(dbClients);
      })
})

    //POST route for saving new client
  app.post("/api/Clients", function(req, res) {
    console.log(req.body);
    db.Client.create({
      clientName: req.body.clientName,
      contactLastname: req.body.contactLastname,
      contactFirstName: req.body.contactFirstName,
      phoneNumber: req.body.phoneNumber,
      addressLine: req.body.addressLine,
      city: req.body.city,
      state: req.body.state,
      country: req.body.country,
      Email: req.body.Email
    }).then(function(dbClients) {
      res.json(dbClients);
    }).catch(function(err) {
      res.json(err);
    });
  });

  //PUT route for updating Clients. Also get updated Clients data from req.body
  app.put("/api/Clients", function(req, res) {
//Update takes in the object with updat properties and using where we describe which objects to update
 db.Client.update({
  clientName: req.body.clientName,
  contactLastname: req.body.contactLastname,
  contactFirstName: req.body.contactFirstName,
  phoneNumber: req.body.phoneNumber,
  addressLine: req.body.addressLine,
  city: req.body.city,
  state: req.body.state,
  country: req.body.country,
  Email: req.body.Email
 }, {
   where: {
     id: req.body.id
   }
 }).then(function(dbClients) {
   res.json(dbClients);
 })
 .catch(function(err) {
   res.json(err);
 });
  });

//DELETE route for deleting Clients
//req.params.id
app.delete("/api/Clients/:id", function(req, res) {
  db.Client.destroy({
    where: {
      id: req.params.id
    }
  }).then(function(dbClients) {
    //access to Clients inside of callback
    res.json(dbClients);
  });
});
}