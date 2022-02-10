$("#modify").hide();
$("#1").hide();
$("#2").hide();

var arr = [];
console.log("hello");
$("#add").click(table);
function table() {
    console.log("in sku");

  var a = $("#psku").val();
  var b = $("#pname").val();
  var c = $("#pprice").val();
  var d = $("#pqty").val();
  var e = $("#pp").html("");

  arr.push({ psku: a, pname: b, pprice: c, pqty: d });
  console.log(arr.push);

  display();

  if (check(psku, pname, pprice, pqty) && check(psku)) {
    addVal(psku, pname, pprice, pqty);
    $("#2").text("enter correct details!");
    $("#2").show();
    $("#1").hide();
    display();
  } else if (check(psku) == false) {
    $("#2").text("enter correct details!");
    $("#2").show();
    $("#1").hide();
  }
}

function check(psku, pname, pprice, pqty) {
  if (psku == "") {
    $("#2").text("enter correct details!");
    $("#1").hide();
    $("#2").show();
    return false;
  } else if (pname == "") {
    $("#2").text("enter correct details!");
    $("#1").hide();
    $("#2").show();
    return false;
  } else if (pprice == "") {
    $("#2").text("enter correct details!");
    $("#1").hide();
    $("#2").show();
    return false;
  } else if (pqty == "") {
    $("#2").text("enter correct details!");
    $("#1").hide();
    $("#2").show();
    return false;
  }

  return true;
}

function check(id) {
  for (i = 0; i < arr.length; i++) {
    var obj = arr[i];
    if (obj.psku == id) {
      return false;
    }
  }
  return true;
}

//function addVal(psku, pname, pprice, pqty) {
//newVal = { id: psku, name1: pname, price: pprice, qty: pqty }
//arr.push(newVal);
//}

function display() {
  $("#1").show();
  var dis = "";
  dis += "<tr><th>SKU</th><th>Name</th><th>Price</th><th>Quantity</th></tr>";
  for (i = 0; i < arr.length; i++) {
    dis +=
      "<tr><td>" +
      arr[i].psku +
      "</td><td>" +
      arr[i].pname +
      "</td><td>" +
      arr[i].pprice +
      "</td><td>" +
      arr[i].pqty +
      "</td></tr>" +
      "<a href=" +
      "#" +
      'id="edit" arr-psku=' +
      arr[i].id +
      "> Edit</a><a href=" +
      "#" +
      'id="delete" arr-psku=' +
      arr[i].id +
      "> delete</a>";
  }

  $("#result").html((dis += "</table>"));
  console.log(dis);
  fieldReset();
}
function fieldReset() {
  $("#psku").val("");
  $("#pname").val("");
  $("#pprice").val("");
  $("#pp").html("");
  $("#pqty").val("");
}
var pickId;
$("#result").on("click", "a#modify", function () {
  $("#1").hide();
  $("show").hide();
  var psku = $(this).arr("psku");
  pickId = psku;
  for (i = 0; i < arr.length; i++) {
    var obj = arr[i];
    if (obj.id == psku) {
      var id = obj.id;
      var name2 = obj.name2;
      var price = obj.price;
      var qnty = obj.qnty;
      setInput(id, name2, price, qnty);
    }
  }
});
function setInput(id, name2, price, qnty) {
  $("#id").val(id);
  $("#name").val(name2);
  $("#price").val(price);
  $("#qnty").val(qnty);
  $("#modify").show();
  $("#add").hide();
}
$("#modify").click(function () {
  $("#1").hide();
  $("#2").hide();
  var id = $("#id").val();
  var name = $("#name").val();
  var price = $("#price").val();
  var qnty = $("#qnty").val();
  ifcheck(id, name, price, qnty);
  {
    for (i = 0; i < arr.length; i++) {
      var obj = arr[i];
      if (obj.id == pickId) {
        obj.id = id;
        obj.name = name;
        obj.price = price;
        obj.qnty = qnty;
        display();

        break;
      }
    }
  }
  $("#add").show();
  $("#modify").hide();
  fieldReset();
});
$("#result").on("click", ":a#delete", function () {
  $("#1").hide();
  $("#2").hide();
  var psku = $(this).arr("psku");
  pickid = psku;
  for (i = 0; i < arr.length; i++) {
    var obj = arr[i];
    if (obj.id == psku) {
      arr.splice(i, 1);
      break;
    }
  }
  display();
});
