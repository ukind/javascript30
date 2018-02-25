
var removeTransition = (e) => e.target.classList.remove('playing');

//oldSchool
const kumpulanTombol = Array.from(document.querySelectorAll('.tombol'));
kumpulanTombol.forEach(function(tiapTombol, index, array) {
  tiapTombol.addEventListener('transitionend', removeTransition);
});

// ES6 Version
// const keys = Array.from(document.querySelectorAll('.key'));
// keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound);

function playSound(e) {
  const audio = document.querySelector(`audio[data-audio-tombol="${e.keyCode}"]`);
  const key = document.querySelector(`div[data-nomorTombol="${e.keyCode}"]`);
  if (!audio) {
    return;
  }

  key.classList.add('playing');
  audio.currentTime = 0;
  audio.play();
}
//OLDSCHOOL
// function removeTransition(e) {
//   e.target.classList.remove('playing');
// }
