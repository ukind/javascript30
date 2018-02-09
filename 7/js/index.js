const people = [
  {name: 'Bert', year: 1994},
  {name: 'Quinn', year: 2001},
  {name: 'Jeph', year: 1991},
  {name: 'Dan', year: 2015}
];

const comments = [
  {content: 'Awesome!', id: 14045},
  {content: '凄い', id: 14041},
  {content: '格好いい', id: 14046},
  {content: 'きれい', id: 14043},
  {content: '美しい', id: 14048},
];

//===========================mine====================
//
// var testOlder = element => {
//   let todayYear = 2018;
//   let result = 2018 - element;
//   return result > 19;
// };
//
// // var filter = people.some(test => testOlder(test.year));
// const number = [];
// var getYear = people.forEach(thisValue => {
//   number.push(thisValue.year);
// });
//
// // is at least one person 19 or older?
// console.log(number.some(testOlder));
//
// // is everyone 19 or older?
// console.log(number.every(testOlder));
//
// // find the comment with the ID of $(inputUser)
// function findComments(nameOfArray, searchedValue) {
//   nameOfArray.forEach(findID => {
//     if (findID.id === searchedValue) {
//       return console.log(findID.content);
//     }
//   });
// }

// find the comment with the ID of 140 45
// comments.find((thisValue, index) => {
//   if (thisValue.id === 14048) {
//     console.log(thisValue.content);
//   }
// });
//==========================================================

//if atlest there is person with age more than 19:
const isAdult = people.some(function(person) {
  const currentYear = (new Date()).getFullYear();
  if (currentYear - person.year >= 19) {
    return true;
  }
});

//is everybody 119?
const isAdults = people.every(function(person) {
  const currentYear = (new Date()).getFullYear();
  if (currentYear - person.year >= 19) {
    return true;
  }
});

//find the first item that founded
const comment = comments.find(comment => {
  if (comment.id === 14045) {
    return true;
  }
});

//delete the comment with index 14045
const index = comments.findIndex(thisValue => thisValue.id === 14043);
console.log(index);

const newComments = [
  //1:45,41,46
  //2:48
 ...comments.slice(0, index),
 ...comments.slice(index + 1)
];
