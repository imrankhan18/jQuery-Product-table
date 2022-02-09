var arr = [];

function skuTable() {
    var a = $("#psku").val();
    var b = $("#pname").val();
    var c = $("#pprice").val();
    var d = $("#pqty").val();

    arr.push({ psku: a, pname: b, pprice: c, pqty: d });

  display();

  function display() {
      $("#button").click(function () {
        var dis = "";
        dis +="<tr><th>SKU</th><th>Name</th><th>Price</th><th>Quantity</th></tr>";
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
            "</td></tr>";
        }
        dis += "</table>";
        $("#result").html(dis);
        console.log(dis);
      });
  }
}

function check()
