const jarumDetik = document.querySelector('.detik');
const jarumMenit = document.querySelector('.menit');
const jarumJam = document.querySelector('.jam');

var setDate = () => {
  const initWaktu = new Date();
  const detik = initWaktu.getSeconds();
  const derajatPanahDetik = (detik * 6) + 90;
  jarumDetik.style.transform = `rotate(${derajatPanahDetik}deg)`;

  const menit = initWaktu.getMinutes();
  const derajatPanahMenit = (menit * 6) + 90;
  jarumMenit.style.transform = `rotate(${derajatPanahMenit}deg)`;

  const jam = initWaktu.getHours();
  const derajatPanahJam = (jam * 6) + 90;
  jarumJam.style.transform = `rotate(${derajatPanahJam}deg)`;

};

setInterval(setDate, 1000);

setDate();
