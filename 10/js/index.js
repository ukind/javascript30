const allCheckBox =
document.querySelectorAll('.todoListItem input[type="checkbox"]');

let firstChecked;

function handleCheck(e) {

  let isInBetween = false;
  if (e.shiftKey && this.checked) {
    // do loop for every checkedbox
    allCheckBox.forEach(checkBox => {
      //will log all chechbox
      //if allCheckBox === this(the selected checbox) or
      if (checkBox === this || checkBox === firstChecked) {
        console.log(checkBox === firstChecked);
        isInBetween = !isInBetween;
        // console.log('check in between');
      }
      if (isInBetween) {
        checkBox.checked = true;
      }
    });
  }
  firstChecked = this;
  console.log(this);
}

allCheckBox.forEach(thisCheckbox => {
  thisCheckbox.addEventListener('click', handleCheck);
});
