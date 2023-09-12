// Import modul readline untuk membaca input dari pengguna
const readline = require('readline');

// Membuat interface untuk membaca input dari terminal
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Fungsi untuk menghasilkan angka acak antara 1 hingga 10
function generateRandomNumber() {
  return Math.floor(Math.random() * 10) + 1;
}

// Fungsi untuk mengajukan pertanyaan penjumlahan acak
function tanyakanPenjumlahan() {
  const angka1 = generateRandomNumber();
  const angka2 = generateRandomNumber();
  const jawabanBenar = angka1 + angka2;

  rl.question(`Berapa hasil dari ${angka1} + ${angka2}? `, (inputJawaban) => {
    const jawabanPengguna = parseInt(inputJawaban);

    if (!isNaN(jawabanPengguna)) {
      if (jawabanPengguna === jawabanBenar) {
        console.log('Jawaban Anda benar!');
      } else {
        console.log(`Maaf, jawaban Anda salah. Jawaban yang benar adalah ${jawabanBenar}.`);
      }
    } else {
      console.log('Input tidak valid. Pastikan Anda memasukkan angka.');
    }

    // Menutup interface readline
    rl.close();
  });
}

// Memulai permainan dengan mengajukan pertanyaan penjumlahan
tanyakanPenjumlahan();
