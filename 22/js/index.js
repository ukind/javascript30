const aHrefLink = document.querySelectorAll('a');
const highlight = document.createElement('span');

// add class name = 'highlight'
highlight.classList.add('highlight');
// add element to body childnode
document.body.append(highlight);

function showsUp() {
  // getBoundingClientRect : return DOMRect
  const linkCordinat = this.getBoundingClientRect();
  console.log(linkCordinat);
  const posisi = {
    width: linkCordinat.width,
    height: linkCordinat.height,
    top: linkCordinat.y + window.scrollY,
    left: linkCordinat.x + window.scrollX
  };

  // here the magic
  highlight.style.width = `${posisi.width}px`;
  highlight.style.height = `${posisi.height}px`;
  highlight.style.transform = `translate(${posisi.left}px, ${posisi.top}px)`;
}

aHrefLink.forEach(aHrefElement => {
  aHrefElement.addEventListener('mouseenter', showsUp);
});
