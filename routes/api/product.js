var db = require("../../models");
module.exports = function(app) {
//GET route for getting all the Products
app.get("/api/Products", function(req, res) {
    // findAll returns all entries for a table when used with no options
    db.Product.findAll({}).then(function(dbProducts) {
      console.log(dbProducts)
      // We have access to the Products as an argument inside of the callback function
      res.json(dbProducts);
    });
  });

   //Route for getting a Product info by id
   app.get("/api/Products/:id", function(req, res) {
    db.Product.findOne({where: {
        id: req.params.id
      }}).then(function(db) {
          res.json(dbProducts);
      })
})
  
  //POST route for saving a new Product
  app.post("/api/Products", function(req, res) {
    console.log(req.body)
    db.Product.create({
      productName: req.body.productName,
      // productLine: req.body.productLine,
      // productVendor: req.body.productVendor,
      productDescription: req.body.productDescription,
      quantityinStock: req.body.quantityinStock,
      // wholesalePrice: req.body.wholesalePrice,
      msrp: req.body.msrp    
    }).then(function(dbProducts) {
      // We have access to the new Products as an argument inside of the callback function
      res.json(dbProducts);
    })
      .catch(function(err) {
  
        res.json(err);
      });
  });
  
  //DELETE route for deleting Products via id. from req.params.id
  app.delete("/api/Products/:id", function(req, res) {
    // We just have to specify which Products we want to destroy with "where"
    db.Product.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbProducts) {
      res.json(dbProducts);
    });
  
  });


  // PUT route for adding stock to Products. We can get the updated Products data from req.body
  app.put("/api/ProductStock", function(req, res) {
  
  // Update takes in an object describing the properties we want to update, and
  // we use where to describe which objects we want to update
  db.Product.update({
      //productName: req.body.productName,
      //productLine: req.body.productLine,
      //productVendor: req.body.productVendor,
      //productDescription: req.body.productDescription,
      quantityinStock: req.body.quantityinStock,
      //wholesalePrice: req.body.wholesalePrice,
      //msrp: req.body.msrp
  }, {
    where: {
      id: req.body.id
    }
  }).then(function(dbProducts) {
    res.json(dbProducts);
  })
  .catch(function(err) {
  
    res.json(err);
      });
    });

  // PUT route for updating Products. We can get the updated Products data from req.body
  app.put("/api/Productsupdate", function(req, res) {
  
  // Update takes in an object describing the properties we want to update, and
  // we use where to describe which objects we want to update
  db.Product.update({
    productName: req.body.productName,
    // productLine: req.body.productLine,
    // productVendor: req.body.productVendor,
    productDescription: req.body.productDescription,
    quantityinStock: req.body.quantityinStock,
    // wholesalePrice: req.body.wholesalePrice,
    msrp: req.body.msrp 
  }, {
    where: {
      id: req.body.id
    }
  }).then(function(dbProducts) {
    res.json(dbProducts);
  })
  .catch(function(err) {
  
    res.json(err);
      });
    });
  }