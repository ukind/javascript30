// create speechSynthesis object

let speakerActor = [];
var suara;
const speaker = document.querySelector('[name="voice"]');
// selecting by using html attributs element
const speakerOption = document.querySelectorAll('[type="range"], [name="text"]');
const speakButton = document.querySelector('#speak');
const stopButton = document.querySelector('#stop');

function toggleActivator(startOver = true, name, nilai) {
  suara[name] = nilai;
  // setOption(pesan);
  // add textarea value to object
  suara.text = document.querySelector('[name="text"]').value;
  // console.log(pesan);
  window.speechSynthesis.cancel();
  if (startOver) {
    window.speechSynthesis.speak(suara);
  }
}

function setOption() {
  // console.log(this.name, this.value);
  const name = this.name;
  const value = parseFloat(this.value);

  toggleActivator(true, name, value);
  // objectVoice[this.name] = this.value;
  // console.log(objectVoice);

}

function populateVoicer() {
  speakerActor = this.speechSynthesis.getVoices();

  // do filter
  const filter = speakerActor.filter(callback =>
    callback.lang.includes('en')); //lang: available as array key
  // console.log(filter);
  const speakerOption = filter.map(callback => `<option
    value="${callback.name}">${callback.name} (${callback.lang})</option>`).join('');
  speaker.innerHTML = speakerOption;
}

function setSpeaker() {
  suara = new SpeechSynthesisUtterance();
  suara.voice = speakerActor.find(voice => voice.name === this.value);
}

window.addEventListener('load', populateVoicer);
speaker.addEventListener('change', setSpeaker);
speakButton.addEventListener('click', toggleActivator);
stopButton.addEventListener('click', () => toggleActivator(false));
speakerOption.forEach(option => option.addEventListener('change', setOption));
// speaker.addEventListener('change', setSuara);
