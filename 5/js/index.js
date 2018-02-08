var toggleActive = e => {
  // console.log(e.propertyName);
  if (e.propertyName.includes('flex')) {
    // this.classList.toggle('active-on');
    e.explicitOriginalTarget.classList.toggle('active-on');
  }
};

const panels = document.querySelectorAll('.panel');
panels.forEach(panel => panel.addEventListener('click', toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));

function toggleOpen() {
  console.log('hallo');
  this.classList.toggle('active');
};

// function toggleActive(e) {
//   // console.log(e.propertyName);
//   if (e.propertyName.includes('flex')) {
//     this.classList.toggle('active-on');
//
//   }
// }
