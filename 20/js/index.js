

// create object
var recognition = new SpeechRecognition();
recognition.interimResults = true;
recognition.lang = 'en-US';

// for creating new paragraph
let p = document.createElement('p');
const kata = document.querySelector('.kata');
kata.appendChild(p);

recognition.addEventListener('result', e => {
  // when finished recognition of voice, make it as array
  console.log(e);
});

recognition.start();

console.log(this);
