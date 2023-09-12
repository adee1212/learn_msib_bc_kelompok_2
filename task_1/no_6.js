// Import modul readline untuk membaca input dari pengguna
const readline = require('readline');

// Membuat interface untuk membaca input dari terminal
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Fungsi untuk menghitung faktorial
function hitungFaktorial(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * hitungFaktorial(n - 1);
  }
}

// Meminta pengguna untuk memasukkan bilangan positif
rl.question('Masukkan bilangan positif: ', (inputN) => {
  // Mengonversi input menjadi angka (integer)
  const n = parseInt(inputN);

  // Memeriksa apakah input adalah angka yang valid dan positif
  if (!isNaN(n) && n >= 0) {
    const faktorial = hitungFaktorial(n);
    console.log(`Faktorial dari ${n} adalah: ${faktorial}`);
  } else {
    console.log('Input tidak valid. Pastikan Anda memasukkan bilangan positif.');
  }

  // Menutup interface readline
  rl.close();
});
