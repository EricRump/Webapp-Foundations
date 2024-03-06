document.addEventListener("DOMContentLoaded", function () {
  loadFromLocalStorage();
  addToList();
});

// neue ToDos mit button hinzufügen
const add = document.querySelector(".add");
const liste = document.querySelector(".liste");
let todos = [];
let id = todos.length + 1;

loadFromLocalStorage();
add.addEventListener("click", addToList);

function addToList() {
  const input = document.querySelector(".input").value;
  if (input !== "") {
    todos.push({ description: input, ID: id, open: true });
  }
  liste.innerHTML = "";

  // hinzufügen der Todos zur Liste und checkbox davor
  todos.forEach(function (todo) {
    const listItem = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    const span = document.createElement("span");
    span.textContent = todo.description;

    listItem.appendChild(checkbox);
    listItem.appendChild(span);
    liste.appendChild(listItem);
  });
  saveToLocalStorage();
}

// Funktion zum Laden des Local Storage
function loadFromLocalStorage() {
  if (localStorage.getItem("todos")) {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
}

// Funktion zum Speichern der Todos im Local Storage
function saveToLocalStorage() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

const checkboxinliste = document.querySelectorAll(".liste[type='checkbox']");

checkboxinliste.forEach(function (checkbox) {
  checkbox.addEventListener("click", removeDoneToDos);
});

function removeDoneToDos() {
  console.log("hallo");
}
