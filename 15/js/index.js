const daftarMakanan = document.querySelector('.makanan');
const formAddMakan = document.querySelector('.add-makanan');

const KatalogMakanan = JSON.parse(localStorage.getItem('KatalogMakanan')) || [];

function addMakanan(e) {
  e.preventDefault();//stoping the reload when submit
  const makanan = (this.querySelector('[name=makanan]')).value;
  const isi = {
    NamaMakanan: makanan,
    done: false
  };

  KatalogMakanan.push(isi);
  populateMakanan(KatalogMakanan, daftarMakanan);
  console.table(KatalogMakanan);
  // add to LocalStorage('name item', array)
  localStorage.setItem('KatalogMakanan', JSON.stringify(KatalogMakanan));
  // reset the form
  this.reset();
};

function populateMakanan(isi = [], daftarIsi) {
  // create new array from processed array
  daftarIsi.innerHTML = isi.map((element, index) => {
    // label for, disamakan dengan id, supaya checkboxnya langsung otomatis terisi ketika label di klik
    return `
    <li>
      <input type="checkbox" data-index=${index} id="item${index}"
      ${isi.done ? 'checked' : ''}>
      <label for="item${index}">${element.NamaMakanan}</label>
    </li>
    `;
  }).join('');// wihtout join, will print ','. so need to eliminate ',' by join('')
};

formAddMakan.addEventListener('submit', addMakanan);
window.addEventListener('load', populateMakanan(KatalogMakanan, daftarMakanan));
