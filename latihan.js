// Tugas kecil

/*
1. prompt untuk mengetahui saldo akhir dari apa yg diinputkan oleh user
2. menentukan hari dari tanggal yang ada saat ini di pc kalian
**/

let hari = new Date().getDay();
const jumlahHari = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
const hariIni = jumlahHari[hari];
console.log('Hari ini adalah hari ' + hariIni);