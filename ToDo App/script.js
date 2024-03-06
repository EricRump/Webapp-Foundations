// neue ToDos mit button hinzufügen
const add = document.querySelector(".add");
const liste = document.querySelector(".liste");
let todos = {};
let id = 1;

loadFromLocalStorage();
add.addEventListener("click", addToList);

function addToList() {
  const input = document.querySelector(".input").value;
  todos[input] = {
    description: input,
    ID: id,
    open: true,
  };
  id++;

  // Liste leeren, um Duplikate zu vermeiden
  liste.innerHTML = "";
  // hinzufügen der Todos zur Liste
  Object.keys(todos).forEach(function (i) {
    let todo = todos[i];
    const listItem = document.createElement("li");

    //checkbox hinzufügen
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
document.addEventListener("DOMContentLoaded", function () {
  loadFromLocalStorage();
  addToList();
});
