// var testing = () => {
//
// };

const anjings = [{name: 'Kiss', age: 3},
                {name: 'Bruno', age: 4}];

const p = document.querySelector('p');

function testing() {
  const elementP = document.querySelector('p');
  elementP.style.color = '#BADA55';
  elementP.style.fontSize = '50px';
}

console.log('hello');
var test = 'a';
console.log(`hello ${test}`);

console.warn('oh no');

console.error('error occured');

console.info('this is just testing');

//only fired if there is something wrong: fill fire
// console.assert(p.classList.contains('yousi'), 'there is diferrent');
//only fired if there is something wrong: fill fire
// console.assert(p.classList.contains('firstChild'), 'there is no different');

//clear console
// console.clear();

//log element atribut and prototype
// console.dir(p);

anjings.forEach(theAnjing => {
  //create group debuging
  console.group(`Dog: ${theAnjing.name}`);
  console.log(`my dog name is ${theAnjing.name}`);
  console.dir(theAnjing.name);
  console.groupEnd(`the end of dog: $(theAnjing.name)`);
});

//counting element / node / dom
console.count('The Used');
console.count('The Used');
console.count('The Used');
console.count('The Used');
console.count('The Used');

console.time('time of fetching data');
fetch('https://api.github.com/users/ukind')
  .then(rawData => rawData.json)
  .then(rawData => {
    console.timeEnd('time of fetching data');
  });
