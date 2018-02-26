const background = document.querySelector('.dropDownContainer');
const nav = document.querySelector('.navContainer');
const allNavItem = document.querySelectorAll('.navItems > li');

allNavItem.forEach(navItem => navItem.addEventListener('mouseenter'
, handleMouseEnter));
allNavItem.forEach(navItem => navItem.addEventListener('mouseleave'
, handleMouseLeave));

function handleMouseEnter() {
  // console.log(this);
  this.classList.add('mouse-entered');
  setTimeout(() => this.classList.contains('mouse-entered') &&
   this.classList.add('mouse-entered-active'), 150);
  background.classList.add('open');

  const dropDown = this.querySelector('.dropdown');

  const dropDownPosition = dropDown.getBoundingClientRect();
  // console.log(dropDownPosition);
  const navPosition = nav.getBoundingClientRect();

  const position = {
    height: dropDownPosition.height,
    width: dropDownPosition.width,
    top: dropDownPosition.top - navPosition.top,
    left: dropDownPosition.left - navPosition.left
  };

  background.style.setProperty('width', `${position.width}px`);
  background.style.setProperty('height', `${position.height}px`);
  background.style.setProperty('transform'
  , `translate(${position.left}px, ${position.top}px)`);
}

function handleMouseLeave() {
  this.classList.remove('mouse-entered', 'mouse-entered-acive');
  background.classList.remove('open');
}
