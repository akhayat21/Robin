$("#addorder").on("click", function() {
  var name = $(this).data("#clientname");
  var prodid = $(this).data("#productid");
  var salenote = $(this).data("#salenote");
});
$("#editorder").on("click", function() {});
$("#removeorder").on("click", function() {
  $("#");
});

// on click for manager/products page
$("#submitaddproduct").on("click", function() {
    event.preventDefault()
  var name = $("#productname").val();
  var proddesc = $("#productdesc").val();
  var productquantity = $("#productquantity").val();
  var productprice = $("#productprice").val();

  var newprod = {
    productName: name,
    productDescription: proddesc,
    quantityinStock: productquantity,
    msrp: productprice
  } 
  console.log(newprod)
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
