const nav = document.querySelector('#main');
let rangeOfNavToTheTop = nav.offsetTop;

console.log(window.scrollY);

function newNav() {
  if (window.scrollY >= rangeOfNavToTheTop) {
    // create copy of original nav:*main
    // with their atribute, then change it its css value
    const newNav = document.body.style.paddingTop = nav.offsetHeight + 'px';
    document.body.classList.add('newNav');
  } else {
    document.body.classList.remove('newNav');
    document.body.style.paddingTop = 0;
  }
}

window.addEventListener('scroll', newNav);
