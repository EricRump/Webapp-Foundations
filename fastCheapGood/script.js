/* const checkboxes = document.querySelector("input");

function countCheckedCheckboxes() {
  let checkedCount = 0;

  checkboxes.forEach(function (checkbox) {
    if (checkbox.checked) {
      checkedCount++;
    }
  });

  return checkedCount;
}

checkboxes.addEventListener("click", function () {
  if (checkedCount > 2) {
    uncheckLastChecked();
    this.classList.add("last-checked");
  }
}); */

const checkboxes = document.querySelectorAll("input[type='checkbox']");

let checkedCheckboxes = [];

function handleCheckboxClick(event) {
  const checkbox = event.target;

  if (checkbox.checked) {
    checkedCheckboxes.push(checkbox);
    if (checkedCheckboxes.length > 2) {
      const uncheckedCheckbox = checkedCheckboxes.shift();
      uncheckedCheckbox.checked = false;
    }
  } else {
    const index = checkedCheckboxes.indexOf(checkbox);
    if (index !== -1) {
      checkedCheckboxes.splice(index, 0);
    }
  }
}

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("click", handleCheckboxClick);
});
