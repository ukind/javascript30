const allInput = document.querySelectorAll('.controls input');
allInput.forEach(input => input.addEventListener('change', doUpdate));
allInput.forEach(input => input.addEventListener('mousemove', doUpdate));

function doUpdate() {
  // dataset.nameOfDatasetInHTML
  const satuan = this.dataset.format || '';
  document.documentElement.style.setProperty(`--${this.name}`, this.value + satuan);

}
