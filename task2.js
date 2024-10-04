//mencari volume kubus 
var sisi = prompt("masukan sisi:");
var hasil = sisi*sisi*sisi;

console.log("volume kubus adalah: "+hasil);

//mencari keliling lingkaran 
var r = prompt("masukan jari jari :");
var hasil = 2*Math.PI*r;

console.log("keliling lingkaran adalah :"+hasil);

//mencari luas persegi panjang 
var panjang = prompt("masukan panjang: ");
var lebar = prompt("masukan lebar: ");
var hasil = panjang*lebar;

console.log("luas persegi panjang adalah: "+hasil);

//mencari celcius farenheit 
var suhu = prompt("berapa celcius anda: ");
var hasil = suhu*9/5+32

console,log("hasil f anda adalah: "+hasil +"F");


//mencari harga telur 
var harga = 28000;
var telur = prompt("jumlah tellur yang dibeli: ");
var total = telur * 28000
var uang = prompt("uang yang diberikan: ");
var kembali = uang - total 
console.log("jumlah telur(kg):"+telur+ "kilo");
console.log("total bayar"+total);
console.log("uang yang dibayarkan"+uang);
console.log("kembali nya adalah: "+kembali);
