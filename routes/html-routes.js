var db = require("../models");

// Requiring path to so we can use relative routes to our HTML files
var path = require("path");

// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {

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
app.get("/features", function(req, res) {
  res.render("./homepage/features");
});
app.get("/contact", function(req, res) {
  res.render("./homepage/contact");
});
app.get("/manager/products", function(req, res) {
    res.render("./mngerview/mngrview-products");
  });
  app.get("/manager/contractors", function(req, res) {
    res.render("./mngerview/mngrview-contractors");
  });
  app.get("/manager/salesstats", function(req, res) {
    res.render("./mngerview/mngerview-salestats");
  });
  app.get("/contractor", function(req, res) {
    res.render("./contrview/contractorview");
  });

  
  app.get("/manager/dash", function(req, res) {
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

  app.get("/", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    res.render("index")
   // res.sendFile(path.join(__dirname, "../views/index.handlebars"));
  });
  app.get("/signup", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    res.sendFile(path.join(__dirname, "../public/signup.html"));
  });

  app.get("/login", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    res.render("login")
    // res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/members", isAuthenticated, function(req, res) {
    res.sendFile(path.join(__dirname, "../public/members.html"));
  });

};
