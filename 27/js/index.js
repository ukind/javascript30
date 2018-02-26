const itemContainer = document.querySelector('.itemContainer');

let mouseIsDown = false;
let sliderStart;
let scrollPositionNumber;

itemContainer.addEventListener('mousedown', (e) => {
  mouseIsDown = true;
  itemContainer.classList.add('active');
  // console.log(itemContainer.offsetLeft);
  sliderStart = e.pageX;
  scrollPositionNumber = itemContainer.scrollLeft;
});

itemContainer.addEventListener('mouseleave', () => {
  mouseIsDown = false;
  itemContainer.classList.remove('active');
});

itemContainer.addEventListener('mouseup', () => {
  mouseIsDown = false;
  itemContainer.classList.remove('active');
});

itemContainer.addEventListener('mousemove', (e) => {
  if (!mouseIsDown) {
    return;
  }
  const a = e.pageX - itemContainer.offsetLeft;
  const walk = (a - sliderStart) * 3;
  itemContainer.scrollLeft = scrollPositionNumber - walk;
});
