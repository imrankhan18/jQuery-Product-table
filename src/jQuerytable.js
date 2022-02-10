$(document).ready(function () {
  var list = [];

  $("#update").hide();
  $("#delete_id").hide();

  $("#submit").click(function () {
    var pid = $("#pid").val();
    var pname = $("#pname").val();
    var pprice = $("#pprice").val();
    var pquantity = $("#pquantity").val();
    // alert(checkData(pid,pname,pprice,pquantity));
    //alert(pid);

    if (checkData(pid, pname, pprice, pquantity)) {
      if (duplicacy(pid)) {
        insertData(pid, pname, pprice, pquantity);
        display();
      }
    }
  });

  function checkData(pid, pname, pprice, pquantity) {
    if (
      isNaN(pid) ||
      pid == "" ||
      pname == "" ||
      isNaN(pprice) ||
      pprice == "" ||
      isNaN(pquantity) ||
      pquantity == ""
    ) {
      alert("Enter Correct details!!!");
      return false;
    }
    return true;
  }

  function duplicacy(pid) {
    for (let i = 0; i < list.length; i++) {
      if (pid == list[i].id) return false;
    }
    return true;
  }

  function insertData(pid, pname, pprice, pquantity) {
    list.push({
      id: pid,
      name: pname,
      price: pprice,
      quantity: pquantity,
    });
  }

  function editList(pid) {
    //alert(pid);
    var object = getObject(pid);
    $("#submit").hide();
    $("#update").show();
    $("#content").hide();
    $("#editcontent").html(`<label for="productid">Product SKU<input id="epid" name="epid" placeholder="${object.id}" ></label>
                                 <label for="productname">Product Name<input id="epname" name="epname" placeholder="${object.name}"></label>
                                 <label for="productprice">Product Price<input id="epprice" name="epprice" placeholder="${object.price}"></label>
                                <label for="product quantity">Product Quantity<input id="epquantity" name="epquantity" placeholder="${object.quantity}"></label>`);

    $("#update").click(function () {
      var epid = $("#epid").val();
      var epname = $("#epname").val();
      var epprice = $("#epprice").val();
      var epquantity = $("#epquantity").val();

      // alert(epid);
      if (checkData(epid, epname, epprice, epquantity)) {
        if (duplicacy(epid)) {
          object.id = epid;
          object.name = epname;
          object.price = epprice;
          object.quantity = epquantity;

          display();

          $("#submit").show();
          $("#update").hide();
          $("#editcontent").hide();
          $("#content").show();
        } else {
          alert("Product Id already present!!!");
        }
      }
    });
  }

  function getObject(pid) {
    for (let i = 0; i < list.length; i++) {
      if (list[i].id == pid) return list[i];
    }
  }

  function getIndex(pid) {
    for (let i = 0; i < list.length; i++) {
      if (list[i].id == pid) return i;
    }
  }

  $("#output").on("click", "a#edit", function () {
    var getId = $(this).data("pid");
    editList(getId);
  });

  $("#output").on("click", "a#delete", function () {
    var getId = $(this).data("pid");
   // alert(getId);
    deleteId(getId);
  });

  function deleteId(dpid) {
    $("#content").hide();
    $("#submit").hide();
    $("#delete_id").show();
    $("#yes").click(function () {
      var object = getObject(dpid);
      var index = getIndex(dpid);
      alert(object.id);
      $("#content").show();
      $("#submit").show();
      $("#delete_id").hide();
      //$('#d_id').text("hello"+object.id);
      list.splice(index, 1);
      display();
    });

    $("#no").click(function () {
      $("#content").show();
      $("#submit").show();
      $("#delete_id").hide();
    });
  }
  function display() {
    let output = "";
    for (let i = 0; i < list.length; i++) {
      output += `<table><tr><td style="padding:20px">${list[i].id}</td><td style="padding:20px">${list[i].name}</td><td style="padding:20px">${list[i].price}</td><td style="padding:20px">${list[i].quantity}</td><td style="padding:20px"><a href="#" id="edit" data-pid="${list[i].id}">EDIT</a></td><td style="padding:20px"><a href="#" id="delete" data-pid="${list[i].id}">DELETE</td></tr></table>`;
    }

    $("#output").html(`<table >
            <tr>
            <th>ProductId</th>
            <th>productName</th>
            <th>productPrice</th>
            <th>productQuantity</th>
            </tr>
            <tr>
            ${output}
            </tr>
            </table>`);
  }
});
