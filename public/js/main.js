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


