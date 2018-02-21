const allDiv = document.querySelectorAll('div');
const btn = document.querySelector('.tombol');
function logger(e) {

  console.log(this.classList.value);
  // bubbling happens

  e.stopPropagation(); //stop bubbling
}

allDiv.forEach(divElement => {

  divElement.addEventListener('click', logger, {
    // make the bubbling from bottom to up
    // capture: false
    // make the bubbling from top to bottom
    // capture: true,
    //this equal : divElement.removeEventListener()
    once: false //listen only once, and remove it
  });
});
// only once clickable
btn.addEventListener('click', () => {
  console.log('click!!!');
}, {
  once: true
});
