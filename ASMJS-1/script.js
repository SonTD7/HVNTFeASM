document.getElementById("hien").onclick = hienLen;
function hienLen() {
  alert("Chào mừng đến với ứng dụng JavaScript đầu tiên.");
  hienLen2();
}
function hienLen2() {
  let name = prompt("Yêu cầu đồng chí nhập họ và tên", "Trần Duy Sơn");
  if (name == "" || !isNaN(name)) {
    {
    alert("Tên Việt Nam không có số má ưi. -.-");
    hienLen2();
  }
    
  }  else {
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
  let nameSo = prompt("Số điện thoại", "0972******");
  if (nameSo == "" || isNaN(nameSo)) {
    {
      alert("Yêu cầu đồng chí nhập số điện thoại chứ không phải nhập chữ điện thoại :))")
    }
  } else{
    document.getElementById("sdt").innerHTML = "Liên hệ: " + nameSo;
  }
  hienLen5();
}
function hienLen5() {
  var now = new Date().getFullYear();
  let nameNs = prompt("Năm sinh", "2001");
  if (nameNs > now || nameNs == "" || isNaN(nameNs) || nameNs < 1990) {
    {
      alert("Phải nhập số nhỏ hơn năm hiện tại và lớn hơn 1990 cơ. -.-");
      hienLen5();
    }
  } else {
    document.getElementById("nsinh").innerHTML = "Năm sinh: " + nameNs;
  }
}
