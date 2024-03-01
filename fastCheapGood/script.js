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

function countCheckedCheckboxes() {
  let checkedCount = 0;

  checkboxes.forEach(function (checkbox) {
    if (checkbox.checked) {
      checkedCount++;
    }
  });

  return checkedCount;
}

checkboxes.forEach(function (checkbox) {
  checkbox.addEventListener("click", function () {
    const checkedCount = countCheckedCheckboxes();

    if (checkedCount > 2) {
      uncheckLastChecked();
      this.classList.add("last-checked");
    }
  });
});

function uncheckLastChecked() {
  const lastChecked = document.querySelector(".last-checked");
  if (lastChecked) {
    lastChecked.checked = false;
    lastChecked.classList.remove("last-checked");
  }
}
