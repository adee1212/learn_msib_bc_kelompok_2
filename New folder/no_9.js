const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function formatWaktu(detik) {
  const jam = Math.floor(detik / 3600);
  const sisaDetik = detik % 3600;
  const menit = Math.floor(sisaDetik / 60);
  const detikSisa = sisaDetik % 60;

  return `${jam}:${menit}:${detikSisa}`;
}

rl.question('Masukkan jumlah detik: ', (inputDetik) => {
  const detik = parseInt(inputDetik);

  if (!isNaN(detik) && detik >= 0) {
    const waktuFormatted = formatWaktu(detik);
    console.log(`Waktu dalam format jam:menit:detik= ${waktuFormatted}`);
  } else {
    console.log('Input tidak valid. Pastikan Anda memasukkan jumlah detik yang valid.');
  }

  rl.close();
});
