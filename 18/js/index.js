
const timeSequence = Array.from(document.querySelectorAll('li'));

function getTimeDataSet(time) {
  return time.map(node => {
    return node.dataset.time;
  });
}
const rawTime = getTimeDataSet(timeSequence);
function timeSeparator(rawTime) {
  const menit = rawTime.map(element => {
    const result = element.split(':');
    return parseFloat(result[0]);
  });
  const detik = rawTime.map(element => {
    const result = element.split(':');
    return parseFloat(result[1]);
  });

  return {
    'menit': menit,
    'detik': detik
  };
};
let timeSeparated = timeSeparator(rawTime);
let totalTime = sumDuration(timeSeparated);

function sumDuration(time) {
  let detik = time.detik;
  let menit = time.menit;
  let sumDetik = 0;
  let sumMenit = 0;

  for (var i = 0; i < detik.length; i++) {
    sumDetik += detik[i];
  }
  for (var i = 0; i < menit.length; i++) {
    sumMenit += menit[i];
  }
  let totalDurationSecond = (sumDetik + (sumMenit * 60));
  return {
    'totalDurationSecond': totalDurationSecond
  };
}

const totalDuration = secondsToHms(totalTime.totalDurationSecond);

function secondsToHms(d) {
  d = Number(d);
  var h = Math.floor(d / 3600);
  var m = Math.floor(d % 3600 / 60);
  var s = Math.floor(d % 3600 % 60);

  var hDisplay = h > 0 ? h + (h == 1 ? ' hour, ' : ' hours, ') : '';
  var mDisplay = m > 0 ? m + (m == 1 ? ' minute, ' : ' minutes, ') : '';
  var sDisplay = s > 0 ? s + (s == 1 ? ' second' : ' seconds') : '';
  return {
    'Hour': hDisplay,
    'Minutes': mDisplay,
    'Second': sDisplay
  };
}

console.log(`Total durasi video: ${totalDuration.Hour} ${totalDuration.Minutes} ${totalDuration.Second}`);
