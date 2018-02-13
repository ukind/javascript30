const allCheckBox =
document.querySelectorAll('.todoListItem input[type="checkbox"]');

let lastChecked;

function handleCheck(e) {
  let isInBetween = false;
  if (e.shiftKey && this.checked) {
    // do loop for every checkedbox
    allCheckBox.forEach(checkBox => {
      //will log all chechbox
      //if allCheckBox === this(the selected checbox) or
      if (checkBox === this || checkBox === lastChecked) {
        isInBetween = !isInBetween;
        console.log('check in between');
      }
      if (isInBetween) {
        checkBox.checked = true;
      }
    });
  }
  lastChecked = this;
}

allCheckBox.forEach(thisCheckbox => {
  thisCheckbox.addEventListener('click', handleCheck);
});
