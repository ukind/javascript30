const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');
const walk = 500;

hero.addEventListener('mousemove', bayangan);

function bayangan(e) {
  // console.log(this);
  // console.log(e);
  const [lebar, tinggi] = [hero.offsetWidth, hero.offsetHeight];
  let [positionX, positionY] = [e.offsetX, e.offsetY];

  // console.log(this);
  // console.log(e.target);

  // jika mouse diatas contenteditable
  if (this !== e.target) {
    positionX = positionX + e.target.offsetLeft;
    positionY = positionY + e.target.offsetTop;
  }
  const xWalk = Math.round((positionX / lebar * walk) - (walk / 2));
  const yWalk = Math.round((positionY / tinggi * walk) - (walk / 2));

  // kanan : positif, kiri : negatif
  text.style.textShadow = `
    ${xWalk}px ${yWalk}px 0 rgba(255, 0, 255, 0.7),
    ${xWalk * -1}px ${yWalk}px 0 rgba(0,255,255,0.7)
    `;

}
// window.addEventListener('mousemove', test);
//
// function test(e) {
//   const test = e.offsetX;
//   console.log(test);
//
// }
