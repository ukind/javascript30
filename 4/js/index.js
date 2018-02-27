const penemu = [
  {first: 'Albert', last: 'Einstein', year: 1879, passed: 1955},
  {first: 'Isaac', last: 'Newton', year: 1643, passed: 1727},
  {first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642},
  {first: 'Marie', last: 'Curie', year: 1867, passed: 1934},
  {first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630},
  {first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543},
  {first: 'Max', last: 'Planck', year: 1858, passed: 1947},
  {first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979},
  {first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852},
  {first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905},
  {first: 'Lise', last: 'Meitner', year: 1878, passed: 1968},
  {first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909}
];

const orang = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric'];

const data = ['car', 'car', 'truct', 'bike', 'walk', 'car', 'van',
'bike', 'walk', 'car', 'van' , 'car', 'truct'];

//filter: by between year 1500 ~ 1600
var bornIn1500 = penemu.filter(pen =>  pen.year >= 1500 && pen.year <= 1600);
console.table(bornIn1500);

//map: get first name and last name from data array-- theName: all data array.
var nameFirstAndLast = penemu.map((theName,i,a) => `${theName.first} ` + `${theName.last}`);
console.table(nameFirstAndLast);

//sort: sorting an array from the older to youngest: (dataX, dataY) (result: (dataX - dataY))
// var sortBirthday = penemu.sort((born,passed) => born.year - passed.year);
// console.table(sortBirthday);
//the alternatif
var anotherSort = penemu.sort((a,b) => a.year > a.passed ? 1 : -1);
console.table(anotherSort);

//reduce: calculate inner array
var allInventorLive = penemu.reduce((total,inventor) => {
  return total += (inventor.passed - inventor.year);}, 0);
console.table(allInventorLive);

//sort: by summing each lived. then compare it between them.
var sortYearsLived = penemu.sort((a,b) => {
  const compareOne = a.passed - a.year;
  const compareTwo = b.passed - b.year;
  if (compareOne > compareTwo) {
    return 1;
  } else {
    return -1;
  }
});
console.table(sortYearsLived);

//get all name with 'de' in boulved in paris in wikipedia page
//url: https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
// const category = document.querySelector('.mw-category');
// const link = Array.from(category.querySelectorAll('.mw-category-group ul li a'));
//
// const allName = link.map(name => name.textContent);
// const allWithDeName = allName.filter(allName => allName.includes('de'));

//feature: sort,split-> new array, destructuring assignment
//             = ..... ....((elementPertama, elementKedua)) ..untuk dibandingkan
const lastName = orang.sort((firstLastName, secondLastName) => {
  // const one = firstLastName.split(', '); //undestructed assignment
  const [aLast, aFirst] = firstLastName.split(', ');
  const [bLast, bFirst] = secondLastName.split(', ');
  return aLast > bLast ? -1 : 1;
});

//output: Object { car: 5, truct: 2, bike: 2, walk: 2, van: 2 }
const transportaion  = data.reduce((total, item) => {
  if (!total[item]) {
    total[item] = 0; //important for initial item
  }
  total[item]++;
  return total;
}, {});

console.log(transportaion);
