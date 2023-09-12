// Import modul readline untuk membaca input dari pengguna
const readline = require('readline');

// Membuat interface untuk membaca input dari terminal
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Fungsi untuk menghitung jumlah bilangan ganjil dari 1 hingga range tertentu
function hitungJumlahBilanganGanjil(range) {
  let jumlahGanjil = 0;

  for (let i = 1; i <= range; i++) {
    if (i % 2 !== 0) {
      jumlahGanjil += i;
    }
  }

  return jumlahGanjil;
}

// Meminta pengguna untuk memasukkan range
rl.question('Masukkan range tertentu: ', (inputRange) => {
  // Mengonversi input menjadi angka (integer)
  const range = parseInt(inputRange);

  // Memeriksa apakah input adalah angka yang valid
  if (!isNaN(range) && range >= 1) {
    const hasil = hitungJumlahBilanganGanjil(range);
    console.log(`Jumlah bilangan ganjil dari 1 hingga ${range} adalah: ${hasil}`);
  } else {
    console.log('Input tidak valid. Pastikan Anda memasukkan angka positif.');
  }

  // Menutup interface readline
  rl.close();
});
