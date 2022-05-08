document.getElementById("hien").onclick = hienLen;
function hienLen() {
  alert("Chào mừng đến với ứng dụng JavaScript đầu tiên.");
  hienLen2();
}
function hienLen2() {
  let name = prompt("Yêu cầu đồng chí nhập họ và tên", "Trần Duy Sơn");
  if (name != null) {
    document.getElementById("ten").innerHTML = "Họ và tên: " + name;
  }
  hienLen3();
}
function hienLen3() {
  let name = prompt("Thành phố", "Quảng Ngãi");
  if (name != null) {
    document.getElementById("tp").innerHTML = "Thuộc thành phố: " + name;
  }
  hienLen4();
}
function hienLen4() {
  let name = prompt("Số điện thoại", "0972******");
  if (name != null) {
    document.getElementById("sdt").innerHTML = "Liên hệ: " + name;
  }
  hienLen5();
}
function hienLen5() {
  var now = new Date().getFullYear();
  let nameNs = prompt("Năm sinh", "2001");
  if (nameNs != null) {
    document.getElementById("nsinh").innerHTML = "Năm sinh: " + nameNs;
  }
  if (nameNs > now) {
    {
      alert("Bạn đừng có nừa người, nhập lại đi.");
      hienLen5();
    }
  } else {
    document.getElementById("nsinh").innerHTML = "Năm sinh: " + nameNs;
  }
}
