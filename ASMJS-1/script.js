// document.getElementById("hien").onclick = hienLen;
// function hienLen() {
//   alert("Chào mừng đến với ứng dụng JavaScript đầu tiên.");
//   hienLenx("Yêu cầu đồng chí nhập họ và tên", "Tran Duy Son", "yeu cau nhap lai","ten",
//   false);
//   hienLenx("Thành phố", "Quảng Ngãi", "phai nhap ten thanh pho" ,"tp",true);
//   hienLenx("Số điện thoại", "0972******", "phai nhap dung so dien thoai" ,"sdt",true);
// }
// // function hienLen2() {
// //   let name = prompt("Yêu cầu đồng chí nhập họ và tên", "Trần Duy Sơn");
// //   if (name == "" || !isNaN(name)) {
// //     alert("Tên Việt Nam không có số má ưi. -.-");

// //     hienLen2();
// //   } else {
// //     document.getElementById("ten").innerHTML = "Họ và tên: " + name;
// //     hienLen3();
// //   }
// // }

// function hienLenx(message,defaultValue,errorMessage,tagId) {
//   let name = prompt(message,defaultValue);
//   if (name == "" || !isNaN(name)) {
//     alert(errorMessage);

//     hienLenx("Yêu cầu đồng chí nhập họ và tên", "Tran Duy Son","Tên Việt Nam không có số má ưi. -.-", "ten",false);
//   } else {
//     document.getElementById(tagId).innerHTML = name;

//   }
// }

// function hienLen3() {
//   let nameTp = prompt("Thành phố", "Quảng Ngãi");
//   if (nameTp == null) {
//     alert("phai dien vao")
//     hienLen3();
//   } else {document.getElementById("tp").innerHTML = "Thuộc thành phố: " + nameTp;
//   hienLen4();}

// }
// function hienLen4() {
//   let nameSo = prompt("Số điện thoại", "0972******");
//   if (nameSo == "" || isNaN(nameSo)) {
//     alert(
//       "Yêu cầu đồng chí nhập số điện thoại chứ không phải nhập chữ điện thoại :))"
//     );

//     hienLen4();
//   } else {
//     document.getElementById("sdt").innerHTML = "Liên hệ: " + nameSo;
//     hienLen5();
//   }

// }
// function hienLen5() {
//   var now = new Date().getFullYear();
//   let nameNs = prompt("Năm sinh", "2001");
//   if (nameNs > now || nameNs == "" || isNaN(nameNs) || nameNs < 1990) {
//     alert("Phải nhập số nhỏ hơn năm hiện tại và lớn hơn 1990 cơ. -.-");

//     hienLen5();
//   } else {
//     document.getElementById("nsinh").innerHTML = "Năm sinh: " + nameNs;
//   }
// }

document.getElementById("hien").onclick = hienLen;
function hienLen() {
  alert("Chào mừng đến với ứng dụng JavaScript đầu tiên.");
  let name;
  do {
    name = prompt("Yêu cầu đồng chí nhập họ và tên", "Trần Duy Sơn");
    if (name == "" || !isNaN(name)) {
      alert("Tên Việt Nam không có số má ưi. -.-");
    } else {
      document.getElementById("ten").innerHTML = name;
    }
  } while (name == "" || !isNaN(name));
  let nameTp;
  do {
    nameTp = prompt("Thành phố", "Quảng Ngãi");
    if (nameTp == "") {
      alert("Không được để trống.");
    } else {
      document.getElementById("tp").innerHTML = nameTp;
    }
  } while (nameTp == "");
  let nameSo;
  do {
    nameSo = prompt("Số điện thoại", "0972******");
    if (nameSo == "" || isNaN(nameSo)) {
      alert(
        "Yêu cầu đồng chí nhập số điện thoại chứ không phải nhập chữ điện thoại :))"
      );
    } else {
      document.getElementById("sdt").innerHTML = nameSo;
    }
  } while (nameSo == "" || isNaN(nameSo));
  let nameNs;
  do {
    nameNs = prompt("Năm sinh", "2001");
    if (nameNs == "" || isNaN(nameNs)) {
      alert("Phải nhập số nhỏ hơn năm hiện tại và lớn hơn 1990 cơ. -.-");
    } else {
      document.getElementById("nsinh").innerHTML = nameNs;
    }
  } while (nameNs == "" || isNaN(nameNs));
}
document.getElementById("len").style.display = "none";
document.getElementById("showMessage").style.borderBlockColor = "pink";
document.getElementById("showMessage").style.backgroundColor = "green";
document.getElementById("showMessage").onclick = function () {
  document.getElementById("len").style.display = "block";
};
