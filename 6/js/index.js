const daftarKota = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

// let kota = [];
const cities = [];

fetch(daftarKota)
  .then(rawData => rawData.json())
// save data to array (if the type of data let)
// .then(jsonData => kota = jsonData);

//alteratif of spreading data in array (by using apply(destination, source))
// .then(jsonData => kota.push.apply(kota, jsonData));

//this is alternative of apply function: ('...')
  .then(jsonData => cities.push(...jsonData));

//filtering seach engine
function findCities(searchedWord, citiesDatabase) {
  return citiesDatabase.filter(doFilterElement => {
    //detect if the searched cities was that
    //finding in array of cities
    //create regex: g--global, i--insesitive (upper/lower -- same)
    const regex = new RegExp(searchedWord, 'gi');

    //city and state was the name of array's object element
    return doFilterElement.city.match(regex) ||
    doFilterElement.state.match(regex);
  });
}

function dispayMatches() {
  // console.log(this.value);
  if (!this.value) {
    return suggested.innerHTML = `
    <li>Filter based on City</li>
    <li>or State</li>
    `;
  } else {
    const result = findCities(this.value, cities);
    const html = result.map(place => {
      const regex = new RegExp(this.value, 'gi');
      const cityName = place.city.replace(regex,
        `<span class="hl">${this.value}</span>`);
      const stateName = place.state.replace(regex,
        `<span class="hl">${this.value}</span>`);
      const addComaPopulation = place.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ', ');
      return `
      <li>
      <span class="name">${cityName}, ${stateName}.</span>
      <span class="population">Population: ${addComaPopulation}</span>
      </li>
      `;
    }).join(' ');//add separateor (change comma to space)
    suggested.innerHTML = html;
  }
}

const searchInput = document.querySelector('.search');
const suggested = document.querySelector('.suggested');

searchInput.addEventListener('change', dispayMatches);  searchInput.addEventListener('keyup', dispayMatches);
