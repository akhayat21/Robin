    var db = require("../../models");
    module.exports = function(app) {
  // GET route for getting all of the Sales
  app.get("/api/Sales", function(req, res) {
  
    db.Sales.findAll({}).then(function(dbSales) {
   // We have access to the Sales as an argument inside of the callback function
      res.json(dbSales);
    });
  });

  //Route for getting Sales info by id
  app.get("/api/Sales/:id", function(req, res) {
    db.Sales.findOne({where: {
        id: req.params.id
      }}).then(function(dbSales) {
          res.json(dbSales);
      })
})
    // POST route for saving a new Sale
    app.post("/api/Sales", function(req, res) {
      // create takes an argument of an object describing the item we want to
      // insert into our table. In this case we just we pass in an object with a text
      // and complete property (req.body)
      db.Sales.create({
        SalesId: req.body.SalesId,
        ClientId: req.body.ClientId,
        ProductId: req.body.ProductId,
        TransactionId: req.body.TransactionId
      }).then(function(dbSales) {
        res.json(dbSales);
      })
      .catch(function(err) {
  
        res.json(err);
      });
    });
  //DELETE route for deleting Sales via id from req.params.id
  app.delete("/api/Sales/:id", function(req, res) {
    db.Sales.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbSales) {
      res.json(dbSales);
    });
  });
  
  //PUT route for updating Sales
  app.put("/api/Sales", function(req, res) {
    //Update takes in an object describing the properties we want to update and uses where to describe which objects we want to update
    db.Sales.update({
      SalesId: req.body.SalesId,
      ClientId: req.body.ClientId,
      ProductId: req.body.ProductId,
      TransactionId: req.body.TransactionId
    }, {
      where: {
        id: req.body.id
      }
    }).then(function(dbSales) {
      res.json(dbSales);
    })
    .catch(function(err) {
  
      res.json(err);
    });
  });
}