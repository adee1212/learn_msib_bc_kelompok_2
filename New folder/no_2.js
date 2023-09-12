// Import modul readline untuk membaca input dari pengguna
const readline = require('readline');

// Membuat interface untuk membaca input dari terminal
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Fungsi untuk melakukan konversi dari Celcius ke Fahrenheit
function konversiCelciusToFahrenheit() {
  rl.question('Masukkan suhu dalam Celcius: ', (inputCelcius) => {
    // Mengonversi input menjadi angka (float)
    const celcius = parseFloat(inputCelcius);

    // Memeriksa apakah input adalah angka yang valid
    if (!isNaN(celcius)) {
      const fahrenheit = (celcius * 9/5) + 32;
      console.log(`${celcius} derajat Celcius sama dengan ${fahrenheit.toFixed(2)} derajat Fahrenheit`);
    } else {
      console.log('Input tidak valid. Pastikan Anda memasukkan angka.');
    }

    // Menutup interface readline
    rl.close();
  });
}

// Memanggil fungsi konversi untuk menjalankannya
konversiCelciusToFahrenheit();
