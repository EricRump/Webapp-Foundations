// neue ToDos mit button hinzufügen
const add = document.querySelector(".add");
const liste = document.querySelector(".liste");
let todos = {};
let id = 1;

add.addEventListener("click", function () {
  const input = document.querySelector(".input").value;
  todos[input] = {
    description: input,
    ID: id,
  };
  id++;
  console.log(todos);

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
});
