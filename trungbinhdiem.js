let inputVatly;
let inputHoahoc;
let inputSinhhoc;
inputVatly = prompt("Điểm vật lý");
inputHoahoc = prompt("Điểm hóa học");
inputSinhhoc = prompt("Điểm sinh học");
let Vatly = parseInt(inputVatly);
let Hoahoc = parseInt(inputHoahoc);
let Sinhhoc = parseInt(inputSinhhoc);
let Total= Vatly + Hoahoc + Sinhhoc;
let Average = (Vatly + Hoahoc + Sinhhoc)/3 ;
document.write("Total: " + Total);
document.write('<br/>')
document.write("Average: " + Average);