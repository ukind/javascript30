const daftarBand = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

// repalce : ( )keyword with '', and remove the space
function strip(namaBand) {
  return namaBand.replace(/^(a |the |an )/i, '').trim();
};

// do strip > is 1 or -1 > save temporary > done > assign to variable.
const sortedNamaBand = daftarBand.sort((a, b) => strip(a) > strip(b) ? 1 : -1);

document.querySelector('#BandsName').innerHTML
= sortedNamaBand.map(theBand => `<li>${theBand}</li>`).join('');

console.table(sortedNamaBand);
