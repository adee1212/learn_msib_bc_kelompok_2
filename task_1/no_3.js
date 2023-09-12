const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function perkalian() {
  rl.question('Masukkan harga item pertama: ', (input1) => {
    rl.question('Masukkan harga item kedua: ', (input2) => {
        rl.question('Masukkan harga item ketiga: ', (input3) => {
      const angka1 = parseFloat(input1);
      const angka2 = parseFloat(input2);
      const angka3 = parseFloat(input3);
      
      if (!isNaN(angka1) && !isNaN(angka2) && !isNaN(angka3)) {
        const hasil = angka1 + angka2 + angka3;
        console.log("total Belanjaan adalah: " + hasil);
      } else {
        console.log("Input tidak valid. Pastikan Anda memasukkan angka.");
      }
      
      rl.close();
    });
    });
  });
}

// Panggil fungsi perkalian
perkalian();
