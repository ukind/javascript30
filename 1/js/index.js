
var removeTransition = (e) => e.target.classList.remove('playing');

//oldSchool
const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(function(element, index, array) {
  element.addEventListener('transitionend', removeTransition);
});

// ES6 Version
// const keys = Array.from(document.querySelectorAll('.key'));
// keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound);

function playSound(e) {
  const audio = document.querySelector(`audio[data-audio-key="${e.keyCode}"]`);
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
  if (!audio) {z
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
