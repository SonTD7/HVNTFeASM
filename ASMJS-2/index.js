let table = document.createElement("table");
table.className = "table"
//tạo hàng tiêu đề
let tr = document.createElement("tr");
table.appendChild(tr);
tr.className ="tr";
let thStt = document.createElement("th");
thStt.innerText = "STT";
thStt.className = "col-2";
let thName = document.createElement("th");
thName.innerText = "NAME";
thName.className = "col-2";
let thDob = document.createElement("th");
thDob.innerText = "DOB";
thDob.className = "col-2";
let thMaths = document.createElement("th");
thMaths.innerText = "MATHS SCORES";
thMaths.className = "col-2";
let thPhysical = document.createElement("th");
thPhysical.innerText = "PHYSICAL SCORES";
thPhysical.className = "col-2";
let thChemical = document.createElement("th");
thChemical.innerText = "CHEMICAL SCORES";
thChemical.className = "col-2";
tr.appendChild(thStt);
tr.appendChild(thName);
tr.appendChild(thDob);
tr.appendChild(thMaths);
tr.appendChild(thPhysical);
tr.appendChild(thChemical);
var stt = 0;

document.getElementById("btnnhap").onclick = function name(params) {
    var name = document.getElementById("ipname").value;
    var name = document.getElementById("ipname").value;
    var name = document.getElementById("ipname").value;
    var name = document.getElementById("ipname").value;
    var name = document.getElementById("ipname").value;
    var name = document.getElementById("ipname").value;
    stt++;
    content(name)
}

//tạo hàng thông tin
var content = function(stt,name,dob,mathsScores,physicalScores,chemicalScores) {

    let tr1 = document.createElement("tr");
    table.appendChild(tr1);
    let tdStt = document.createElement("td");
    tdStt.innerText = "#"
    let tdName = document.createElement("td");
    tdName.innerText = "#";
    let tdDob = document.createElement("td");
    tdDob.innerText = "#";
    let tdMaths = document.createElement("td");
    tdMaths.innerText = "#";
    let tdPhysical = document.createElement("td");
    tdPhysical.innerText = "#";
    let tdChemical = document.createElement("td");
    tr1.appendChild(tdStt);
    tr1.appendChild(tdName);
    tr1.appendChild(tdDob);
    tr1.appendChild(tdMaths);
    tr1.appendChild(tdPhysical);
    tr1.appendChild(tdChemical);  
}


document.getElementById("root").appendChild(table);