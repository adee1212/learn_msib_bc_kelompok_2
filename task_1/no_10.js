const readline = require('readline');
const CryptoJS = require('crypto-js');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Fungsi untuk mengenkripsi teks dengan AES
function enkripsi(teks, kunci) {
  const teksTersandi = CryptoJS.AES.encrypt(teks, kunci).toString();
  return teksTersandi;
}

// Fungsi untuk mendekripsi teks dengan AES
function dekripsi(teksTersandi, kunci) {
  const teksAsli = CryptoJS.AES.decrypt(teksTersandi, kunci).toString(CryptoJS.enc.Utf8);
  return teksAsli;
}

// Meminta pengguna untuk memasukkan kunci rahasia
rl.question('Masukkan kunci rahasia: ', (inputKunci) => {
  const kunciRahasia = inputKunci;

  // Meminta pengguna untuk memasukkan teks yang akan dienkripsi
  rl.question('Masukkan teks yang akan dienkripsi: ', (inputTeks) => {
    const teksAsli = inputTeks;

    // Enkripsi teks
    const teksTersandi = enkripsi(teksAsli, kunciRahasia);
    console.log(`Teks yang dienkripsi: ${teksTersandi}`);

    // Dekripsi teks
    const teksDekripsi = dekripsi(teksTersandi, kunciRahasia);
    console.log(`Teks yang didekripsi: ${teksDekripsi}`);

    rl.close();
  });
});
