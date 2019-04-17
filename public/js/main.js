// for login
$(document).ready(function() {
  // Getting references to our form and inputs
  var loginForm = $("form.login");
  var emailInput = $("input#email-input");
  var passwordInput = $("input#password-input");

  // When the form is submitted, we validate there's an email and password entered
  loginForm.on("submit", function(event) {
    event.preventDefault();
    var userData = {
      email: emailInput.val().trim(),
      password: passwordInput.val().trim()
    };

    if (!userData.email || !userData.password) {
      return;
    }

    // If we have an email and password we run the loginUser function and clear the form
    loginUser(userData.email, userData.password);
    emailInput.val("");
    passwordInput.val("");
  });

  // loginUser does a post to our "api/login" route and if successful, redirects us the the members page
  function loginUser(email, password) {
    $.post("/api/login", {
      email: email,
      password: password
    }).then(function(data) {
      window.location.replace(data);
      // If there's an error, log the error
    }).catch(function(err) {
      console.log(err);
    });
  }

});




// on click for manager/products page
//add a product button
$("#submitaddproduct").on("click", function() {
    event.preventDefault()
  var name = $("#productname").val();
  var proddesc = $("#productdesc").val();
  var productquantity = $("#productquantity").val();
  var productprice = $("#productprice").val();
  $.post("/api/Products",{
    productName: name,
    productDescription: proddesc,
    quantityinStock: productquantity,
    msrp: productprice
  }).then(
    function() {
      location.reload();
    }
  );
});

//add stock to a product button
$("#submitaddstock").on("click", function() {
    event.preventDefault()
  var id = $("#productid").val();
  var quantity = $("#stockquantity").val();

  $.ajax("/api/ProductStock", {
    type: "PUT",
    data: {
        id: id,
        quantityinStock: quantity
      }
  }).then(
    function() {
      location.reload();
    });
});

//edit a product button
$("#submitupdateproduct").on("click", function() {
    event.preventDefault()
  var id = $("#productidupdate").val();
  var name = $("#productnameupdate").val();
  var proddesc = $("#productdescupdate").val();
  var productquantity = $("#productquantityupdate").val();
  var productprice = $("#productpriceupdate").val();
  $.ajax("/api/Productsupdate", {
    type: "PUT",
    data: {
        id: id,
        productName: name,
        productDescription: proddesc,
        quantityinStock: productquantity,
        msrp: productprice
      }
  }).then(
    function() {
      location.reload();
    }
  );
});

//delete a product button
$("#submitdeleteproduct").on("click", function() {
    event.preventDefault()
  var id = $("#productidelete").val();
  $.ajax("/api/Products/" + id, {
    type: "DELETE"
  }).then(
    function() {
      location.reload();
    }
  );
});

//=======================================================================================================================
//=======================================================================================================================
//=======================================================================================================================
 
// load table when 
// onclick functions for orders 
$("#submitaddorder").on("click", function() {
  event.preventDefault()
var cid = $("#clientid").val();
var pid = $("#productid").val();
var quan = $("#quantity").val();

$.ajax("/api/Sales", {
  type: "POST",
  data: {
    clientid: cid,
    productid: pid,
    quantity: quan
  }
}).then(
  function() {
    location.reload();
  }
);
});

$("#submiteditorder").on("click", function() {
  event.preventDefault()
var id = $("#saleid").val();
var cid = $("#clientid2").val();
var pid = $("#productid2").val();
var quan = $("#quantity2").val();
$.ajax("/api/Sales", {
  type: "PUT",
  data: {
    id: id,
    clientid: cid,
    productid: pid,
    quantity: quan
  }
}).then(
  function() {
    location.reload();
  }
);
});

$("#submitremoveorder").on("click", function() {
  event.preventDefault()
  var id = $("#saleid3").val();
$.ajax("/api/Sales/" + id, {
    type: "DELETE"
  }).then(function() {
      location.reload();
    }
  );
});

//=======================================================================================================================
//=======================================================================================================================
//=======================================================================================================================

// onclick functions for contractor view


$("#submitaddcontractor").on("click", function() {
  event.preventDefault()
var fName = $("#contractorfname").val();
var lName = $("#contractorlname").val();
var teamass = $("#teamass").val();
var email = $("#email").val();
var password = $("#password").val();
$.ajax("/api/Contractors", {
  type: "POST",
  data: {
    firstName: fName,
    lastName: lName,
    email: email,
    teamAssignment: teamass
  }
}).then(function(){
  $.ajax("/api/signup", {
    type: "POST",
    data: {
      email: email,
      password: password
    }
  })
  location.reload();
})

});

$("#submiteditcontractor").on("click", function() {
  event.preventDefault()
  var fName = $("#contractorfname2").val();
  var lName = $("#contractorlname2").val();
  var teamass = $("#teamass2").val();
  var email = $("#email2").val();
  var id = $("#contractorid").val();
$.ajax("/api/Contractors", {
  type: "POST",
  data:{
    id: id,
    firstName: fName,
    lastName: lName,
    email: email,
    teamAssignment: teamass
  }
}).then(function(){
  $.ajax("/api/signup", {
    type: "POST",
    data:{
      email: email,
      password: password
    }
  })
});


});
$("#submitdeletecontractor").on("click", function() {
  event.preventDefault()
  var id = $("#contractorid3").val();
$.ajax("/api/Contractors/" + id, {
  type: "DELETE"
}).then(
  function() {
    location.reload();
  }
);
});