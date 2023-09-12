// Import modul readline untuk membaca input dari pengguna
const readline = require('readline');

// Membuat interface untuk membaca input dari terminal
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Fungsi untuk menghitung luas segitiga dan panjang sisi miringnya
function hitungLuasSegitiga() {
  rl.question('Masukkan panjang alas segitiga: ', (inputAlas) => {
    rl.question('Masukkan tinggi segitiga: ', (inputTinggi) => {
      // Mengonversi input menjadi angka (float)
      const alas = parseFloat(inputAlas);
      const tinggi = parseFloat(inputTinggi);

      // Memeriksa apakah input adalah angka yang valid
      if (!isNaN(alas) && !isNaN(tinggi) && alas > 0 && tinggi > 0) {
        // Menghitung luas segitiga
        const luas = 0.5 * alas * tinggi;
        
        // Menghitung panjang sisi miring
        const sisiMiring = Math.sqrt(alas * alas + tinggi * tinggi);

        console.log(`Luas segitiga adalah: ${luas.toFixed(2)}`);
        console.log(`Panjang sisi miring adalah: ${sisiMiring.toFixed(2)}`);
      } else {
        console.log('Input tidak valid. Pastikan Anda memasukkan angka positif.');
      }

      // Menutup interface readline
      rl.close();
    });
  });
}

// Memanggil fungsi hitungLuasSegitiga untuk menjalankannya
hitungLuasSegitiga();
