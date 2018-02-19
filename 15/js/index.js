const daftarMakanan = document.querySelector('.makanan');
const formAddMakan = document.querySelector('.add-makanan');

formAddMakan.addEventListener('submit', addMakanan);

const KatalogMakanan = [];

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
  // reset the form
  this.reset();
};

function populateMakanan(isi = [], daftarIsi) {
  // create new array from processed array
  daftarIsi.innerHTML = isi.map((element, index) => {
    return `
    <li>
      <label for="">${element.NamaMakanan}</label>
    </li>
    `;
    // wihtout join, will print ','. so need to eliminate ',' by join('')
  }).join('');
};
