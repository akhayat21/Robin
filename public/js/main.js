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
  })
});

//=======================================================================================================================
//=======================================================================================================================
//=======================================================================================================================

// load table when 
// onclick functions for orders 
$("#submitaddorder").on("click", function() {
  event.preventDefault()
var id = $("#productidelete").val();
$.ajax("/api/Products/" + id, {
  type: "DELETE"
})
});

$("#submitaddorder").on("click", function() {
  event.preventDefault()
var id = $("#productidelete").val();
$.ajax("/api/Products/" + id, {
  type: "DELETE"
})
});

$("#submitaddorder").on("click", function() {
  event.preventDefault()
var id = $("#productidelete").val();
$.ajax("/api/Products/" + id, {
  type: "DELETE"
})
});

//=======================================================================================================================
//=======================================================================================================================
//=======================================================================================================================

// onclick functions for contractor view


$("#submitaddcontractor").on("click", function() {
  event.preventDefault()
var id = $("#productidelete").val();
$.ajax("/api/Products/" + id, {
  type: "DELETE"
})
});
$("#submiteditcontractor").on("click", function() {
  event.preventDefault()
var id = $("#productidelete").val();
$.ajax("/api/Products/" + id, {
  type: "DELETE"
})
});
$("#submitdeletecontractor").on("click", function() {
  event.preventDefault()
var id = $("#productidelete").val();
$.ajax("/api/Products/" + id, {
  type: "DELETE"
})
});