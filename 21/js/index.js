const anakPanah = document.querySelector('.anakPanah');
const h1 = document.querySelectorAll('h1');
const nilaiKecepatan = document.querySelector('.kecepatan .value');

// get current location
navigator.geolocation.watchPosition(dataLocation => {
  console.log(dataLocation);
  nilaiKecepatan.textContent = dataLocation.coords.speed;
  // this is the corrent one
  anakPanah.style.transform = `rotate(${dataLocation.coords.heading}deg)`;
  // this is just demo
  anakPanah.style.transform = `rotate(${dataLocation.coords.latitude}deg)`;
}, error => {
  console.error(error);
  console.log('Error');
});

// PERCOBAAN
// navigator.geolocation.watchPosition(successData => {
//   const value = [];
//   const selectedNode = Array.from(h1);
//   for (var i = 0; i < selectedNode.length; i++) {
//     value.push(selectedNode[i].querySelector('.value'));
//     value.forEach((element, number) => {
//       if (number === 0) {
//         element.textContent = successData.coords.speed;
//       } else if (number === 1) {
//         element.textContent = successData.coords.latitude;
//       }
//     });
//
//   }
// }, errorData => {
//   console.error(errorData);
//   console.log('Error');
// });
