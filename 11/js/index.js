//get elements

const videoPlayerContainer = document.querySelector('.videoPlayerContainer');
const videoPlayer = videoPlayerContainer.querySelector('.videoPlayer');
const loading = videoPlayerContainer.querySelector('.loading');
const loadingFilled = videoPlayerContainer.querySelector('.loadingFilled');
const playToggle = videoPlayerContainer.querySelector('.toggle');
const allSkipButton = videoPlayerContainer.querySelectorAll('[data-skip]');
const range = videoPlayerContainer.querySelectorAll('.playerSlider');

function togglePlay() {
  // console.log(this);
  // dont use this because using 2 addEventListener
  const method = videoPlayer.paused ? 'play' : 'pause';
  // toggle the video - play or pause
  // this is method from HTML5 itself
  videoPlayer[method]();
  // console.log(this);
}

function updateButton() {
  // console.log(this);
  const buttonPlayer = this.paused ? '►' : '❚ ❚';
  playToggle.textContent = buttonPlayer;
  // console.log(buttonPlayer);
}

function loadingProgress() {
  const percent = (videoPlayer.currentTime / videoPlayer.duration) * 100;
  // console.log(percent);
  // resize the size of flex element
  loadingFilled.style.flexBasis = `${percent}%`;
  // console.log(percent);
}

function updateVolumeAndSpeed() {
  // this.sliderOne = for volume
  // this.sliderTwo = for playbackRate
  // by using html element name
  videoPlayer[this.name] = this.value;
  console.log(this.value);
}

function skipping() {
  // skip video by using value in dataset (data-skip)
  // calling this. refer to this button
  videoPlayer.currentTime += parseFloat(this.dataset.skip);
}

function setFrame(e) {
  // const a = e.offsetX;
  // console.log(a);
  // duration return seconds of video duration
  const time = (e.offsetX / loading.offsetWidth) * videoPlayer.duration;
  videoPlayer.currentTime = time;
}

videoPlayer.addEventListener('click', togglePlay);
videoPlayer.addEventListener('pause', updateButton);
videoPlayer.addEventListener('play', updateButton);
videoPlayer.addEventListener('timeupdate', loadingProgress);
playToggle.addEventListener('click', togglePlay);

allSkipButton.forEach(eachSkipButton => {
  eachSkipButton.addEventListener('click', skipping);
});

range.forEach(thisSlider => thisSlider.addEventListener('change', updateVolumeAndSpeed));
range.forEach(thisSlider => thisSlider.addEventListener('mousemove',
updateVolumeAndSpeed));


let mousedown = false;
loading.addEventListener('click', setFrame);
loading.addEventListener('mousedown', () => mousedown = true);
loading.addEventListener('mousemove', e => mousedown && setFrame(e));
loading.addEventListener('mouseup', () => mousedown = false);
