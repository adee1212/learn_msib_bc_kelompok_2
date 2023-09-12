const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function kalkulator() {
  rl.question('Masukkan angka pertama: ', (angka1) => {
    rl.question('Masukkan angka kedua: ', (angka2) => {
      const bilangan1 = parseFloat(angka1);
      const bilangan2 = parseFloat(angka2);

      if (!isNaN(bilangan1) && !isNaN(bilangan2)) {
        rl.question('Pilih operasi (a: Pertambahan, b: Pengurangan, c: Pembagian, d: Perkalian): ', (operasi) => {
          if (operasi === 'a') {
            const hasil = bilangan1 + bilangan2;
            console.log(`Hasil pertambahan: ${hasil}`);
          } else if (operasi === 'b') {
            const hasil = bilangan1 - bilangan2;
            console.log(`Hasil pengurangan: ${hasil}`);
          } else if (operasi === 'c') {
            if (bilangan2 !== 0) {
              const hasil = bilangan1 / bilangan2;
              console.log(`Hasil pembagian: ${hasil}`);
            } else {
              console.log('Tidak bisa melakukan pembagian dengan nol.');
            }
          } else if (operasi === 'd') {
            const hasil = bilangan1 * bilangan2;
            console.log(`Hasil perkalian: ${hasil}`);
          } else {
            console.log('Operasi tidak valid.');
          }

          rl.close();
        });
      } else {
        console.log('Masukkan angka yang valid.');
        rl.close();
      }
    });
  });
}

kalkulator();
