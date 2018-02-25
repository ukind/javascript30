const jarumDetik = document.querySelector('.detik');
const jarumMenit = document.querySelector('.menit');
const jarumJam = document.querySelector('.jam');

var setDate = () => {
  const waktu = new Date();
  const detik = waktu.getSeconds();
  const derajatPanahDetik = (detik * 6) + 90;
  jarumDetik.style.transform = `rotate(${derajatPanahDetik}deg)`;

  const menit = waktu.getMinutes();
  const derajatPanahMenit = (menit * 6) + 90;
  jarumMenit.style.transform = `rotate(${derajatPanahMenit}deg)`;

  const jam = waktu.getHours();
  const derajatPanahJam = ((jam * 30) + 90) + ((derajatPanahMenit - 90) * 0.17);
  jarumJam.style.transform = `rotate(${derajatPanahJam}deg)`;
};

setInterval(setDate, 1000);

setDate();
