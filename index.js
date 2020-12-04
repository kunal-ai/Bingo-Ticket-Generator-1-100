
var numberoF = [];
while(numberoF.length < 24){
    var digitoF = Math.floor((Math.random() * 100)+1);
    if(numberoF.indexOf(digitoF) === -1) numberoF.push(digitoF);
}
document.getElementById("td1").textContent = numberoF[0];
document.getElementById("td2").textContent = numberoF[1];
document.getElementById("td3").textContent = numberoF[2];
document.getElementById("td4").textContent = numberoF[3];
document.getElementById("td5").textContent = numberoF[4];
document.getElementById("td6").textContent = numberoF[5];
document.getElementById("td7").textContent = numberoF[6];
document.getElementById("td8").textContent = numberoF[7];
document.getElementById("td9").textContent = numberoF[8];
document.getElementById("td10").textContent = numberoF[9];
document.getElementById("td11").textContent = numberoF[10];
document.getElementById("td12").textContent = numberoF[11];
document.getElementById("td14").textContent = numberoF[12];
document.getElementById("td15").textContent = numberoF[13];
document.getElementById("td16").textContent = numberoF[14];
document.getElementById("td17").textContent = numberoF[15];
document.getElementById("td18").textContent = numberoF[16];
document.getElementById("td19").textContent = numberoF[17];
document.getElementById("td20").textContent = numberoF[18];
document.getElementById("td21").textContent = numberoF[19];
document.getElementById("td22").textContent = numberoF[20];
document.getElementById("td23").textContent = numberoF[21];
document.getElementById("td24").textContent = numberoF[22];
document.getElementById("td25").textContent = numberoF[23];

setTimeout(function(){
 document.getElementById('clik').textContent = "";
}, 13000);
