// Import modul readline untuk membaca input dari pengguna
const readline = require('readline');

// Membuat interface untuk membaca input dari terminal
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Fungsi untuk membandingkan dua angka
function perbandinganAngka() {
  rl.question('Masukkan angka pertama: ', (input1) => {
    rl.question('Masukkan angka kedua: ', (input2) => {
      // Mengonversi input menjadi angka (float)
      const angka1 = parseFloat(input1);
      const angka2 = parseFloat(input2);

      // Memeriksa apakah input adalah angka yang valid
      if (!isNaN(angka1) && !isNaN(angka2)) {
        if (angka1 < angka2) {
          console.log(`${angka1} kurang dari ${angka2}`);
        } else if (angka1 > angka2) {
          console.log(`${angka1} lebih besar dari ${angka2}`);
        } else {
          console.log(`${angka1} sama dengan ${angka2}`);
        }
      } else {
        console.log('Input tidak valid. Pastikan Anda memasukkan angka.');
      }

      // Menutup interface readline
      rl.close();
    });
  });
}

// Memanggil fungsi perbandinganAngka untuk menjalankannya
perbandinganAngka();
