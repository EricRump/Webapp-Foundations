const add = document.querySelector(".add");
const liste = document.querySelector(".liste");
let todos = [{ description: "", ID: 0, done: false }];
let id = 1;
const checkboxinliste = document.querySelectorAll(".check");

document.addEventListener("DOMContentLoaded", function () {
  loadFromLocalStorage();
  addToList();
});

// Funktion zum Laden des Local Storage
function loadFromLocalStorage() {
  if (localStorage.getItem("todos")) {
    todos = JSON.parse(localStorage.getItem("todos"));
    id = todos.length + 1;
    renderToDos();
    addcheckListener();
  }
}

//Funktion zum hinzufügen des Eventlisteners zu checkboxen
function addcheckListener() {
  checkboxinliste.forEach(function (checkbox) {
    checkbox.addEventListener("click", removeDoneToDos);
  });
}

// Funktion zum Speichern der Todos im Local Storage
function saveToLocalStorage() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

// neue ToDos mit button hinzufügen
loadFromLocalStorage();
add.addEventListener("click", addToList);

function addToList() {
  const input = document.querySelector(".input").value;
  if (input !== "") {
    todos.push({ description: input, ID: id, done: true });
    renderToDos();
    id++;
  }
}

// hinzufügen der Todos zur Liste
function renderToDos() {
  liste.innerHTML = "";

  todos.forEach(function (todo) {
    const listItem = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("check");
    checkbox.dataset.id = todo.ID;
    checkbox.checked = todo.done;

    const span = document.createElement("span");
    span.textContent = todo.description;

    listItem.appendChild(checkbox);
    listItem.appendChild(span);
    liste.appendChild(listItem);
  });
  saveToLocalStorage();
}

liste.addEventListener("change", function (event) {
  if (event.target.classList.contains("check")) {
    const todoID = parseInt(event.target.dataset.id);
    const todo = todos.find((t) => t.ID === todoID);
    todo.done = event.target.checked;
    saveToLocalStorage();
  }
});

// RemoveButton
const removeButton = document.querySelector(".removeButton");
removeButton.addEventListener("click", function () {
  todos.forEach(function (todo, index) {
    if (todo.done === true) {
      todos.splice(index, 1);
    }
  });
  renderToDos();
  saveToLocalStorage();
});

/*function removeDoneToDos() {
  checkboxinliste.forEach(function (checkbox) {
    if (checkbox.checked) {
      const index = parseInt(checkbox.parentElement.dataset.index);
      todos[index].open = false;
    } else {
      todos[index].open = true;
    }
  });
  renderToDos();
  saveToLocalStorage();
  console.log("hallo");
}

// RemoveButton
const removeButton = document.querySelector("removeButton");
removeButton.addEventListener("click", function () {});*/
