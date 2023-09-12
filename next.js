// Buat sebuah fungsi untuk mengalikan dua angka
function perkalian() {
    // Minta pengguna untuk memasukkan dua angka
    let angka1 = parseFloat(prompt("Masukkan angka pertama:"));
    let angka2 = parseFloat(prompt("Masukkan angka kedua:"));
  
    // Perkalian dua angka
    let hasil = angka1 * angka2;
  
    // Tampilkan hasil di console
    console.log("Hasil perkalian adalah: " + hasil);
  }
  
  // Panggil fungsi perkalian
  perkalian();