const timeSequence = Array.from(document.querySelectorAll('li'));

const raw = timeSequence.map(node => node.dataset.time);
console.log(raw);
// create new array, with result of calling a provided function on every element in the calling array.
const second = raw.map(separator => {
  // parseFloat -> convert to number
  const [menit, detik] = separator.split(':').map(parseFloat);
  const calculated = (menit * 60) + detik;
  return calculated;
});

// create method for summing all array value. by using reduce
function pengakumulasi(akumulator, currentValue) {
  console.log(akumulator + '+' + currentValue);
  return akumulator + currentValue;
}

const totalDuration = second.reduce(pengakumulasi);

let detikTersisa = totalDuration;
// dibulatkan kebawah: math.floor: 4
const jam = Math.floor(detikTersisa / 3600);
detikTersisa = detikTersisa % 3600;
console.log(detikTersisa);

const menit = Math.floor(detikTersisa / 60);
detikTersisa = detikTersisa % 60;
console.log('Total durasi Video: ' + jam, menit, detikTersisa);
