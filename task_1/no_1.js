const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function perkalian() {
  rl.question('Masukkan angka pertama: ', (input1) => {
    rl.question('Masukkan angka kedua: ', (input2) => {
      const angka1 = parseFloat(input1);
      const angka2 = parseFloat(input2);
      
      if (!isNaN(angka1) && !isNaN(angka2)) {
        const hasil = angka1 * angka2;
        console.log("Hasil perkalian adalah: " + hasil);
      } else {
        console.log("Input tidak valid. Pastikan Anda memasukkan angka.");
      }
      
      rl.close();
    });
  });
}

// Panggil fungsi perkalian
perkalian();
