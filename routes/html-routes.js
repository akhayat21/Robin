var db = require("../models");

// Requiring path to so we can use relative routes to our HTML files
var path = require("path");

// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {

  app.get("/", function(req, res) {
    res.render("index");
  });

  app.get("/manager/dash", function(req, res) {
    res.render("./mngerview/mngrview-dash");
  });

 app.get("/manager/dashboard", function(req, res) {
    db.Contractors.findAll({}).then(function(contractors) {
      var weeklyHours = 0;
      var totalSales = 0;
      for (var i = 0; i < contractors.length; i++) {
        weeklyHours += contractors[i].weeklyHours;
        totalSales += contractors[i].totalSales;
      }
      console.log(weeklyHours);
      console.log(totalSales);

      db.Product.findAll({}).then(function(products) {
        res.render("mngrview-dash");
      });
    });
  });
app.get("/manager/products", function(req, res) {
    res.render("./mngerview/mngrview-products");
  });
  app.get("/manager/contractors", function(req, res) {
    res.render("./mngerview/mngrview-contractors");
  });
  app.get("/manager/salestats", function(req, res) {
    res.render("./mngerview/mngrview-salestats");
  });
  app.get("/contractor/salestats", function(req, res) {
    res.render("./contrview/contractorview");
  });
  app.get("/login", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    res.render("login")
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/members", isAuthenticated, function(req, res) {
    res.sendFile(path.join(__dirname, "../public/members.html"));
  });

};
