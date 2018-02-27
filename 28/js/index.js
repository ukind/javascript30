const speed = document.querySelector('.speed');
const speedBar = document.querySelector('.speed-bar');
const videoPlayer = document.querySelector('.videoPlayer');

speed.addEventListener('mousemove', speedControl);

function speedControl(e) {
  const barPosition = e.pageY - this.offsetTop;
  const percentage = barPosition / this.offsetHeight;
  const minValue = 0.4;
  const maxValue = 4;
  const height = Math.round(percentage * 100) + '%';
  const playBackSpeed = percentage * (maxValue - minValue) + minValue;
  speedBar.style.height = height;
  speedBar.textContent = playBackSpeed.toFixed(2) + '×';
  videoPlayer.playbackRate = playBackSpeed;
}
