const theSecretKey = 'aku';
const pressedKey = [];

const kumpulanPassKey = ['ukind', 'aku'];

window.addEventListener('keyup', event => {
  console.log(event);
  pressedKey.push(event.key);
  // console.table(pressedKey);
  // slice : to add or remove alement in original array
  // slice : (from_array, to_array )
  // if inputer from array, negative. it start counting (for starting)
  // from right to left, and if positive, from left to right
  //              (-5-1) = -6 > char d at index 0. n at -1

  // console.table(kumpulanPassKey);
  pressedKey.slice(-theSecretKey.length - 1,
    pressedKey.length - theSecretKey.length);
  // do calculate: -6, ex:27-5 = 21 => slice(-6, 21)
  // means: at position -6 remove (to right) 21 items (position -6 included in 21 item)
  const test = pressedKey.join('');
  console.log(test);

  function findingPassCode(thePassKey) {
    return kumpulanPassKey.find(elemen => {
      if (thePassKey.includes(elemen)) {
        return elemen;
      }
    });
  }

  if (pressedKey.join('').includes(findingPassCode(test))) {
    console.log('ding - ding');
    const sumArray = pressedKey.length;
    for (var i = 0; i < sumArray; i++) {
      pressedKey.pop();
    }
    // here execute function
  }

});
