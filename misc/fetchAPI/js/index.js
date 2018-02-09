const ul = document.getElementById('penulis');
const url = 'https://randomuser.me/api/?results=10';

// var createNode = node => {
//   return document.createElement(node);
// };

function createNode(node) {
  return document.createElement(node);
}

var append = (parent, el) => {
  return parent.appendChild(el);
};

fetch(url)
//will get the raw data. not json
// .then(rawData => console.log(rawData));
  .then(rawData => rawData.json())
  .then(function(data) {
    let penulis = data.results;
    return penulis.map(function(penulis) {
      let li = createNode('li');
      let img = createNode('img');
      let span = createNode('span');
      //create img element with source from penulis.picture.medium
      img.src = penulis.picture.medium;
      span.innerHTML = `${penulis.name.first} ${penulis.name.last}`;
      append(li, img);
      append(li, span);
      append(ul, li);
    });
  });
