const input = document.querySelector("input");
const button = document.querySelector("button");
const div = document.querySelector("div");

button.addEventListener("click", function () {
  if (input.getAttribute("type") === "text") {
    input.setAttribute("type", "password");
    button.textContent = "Show password";
    div.classList.add("red");
  } else if (input.getAttribute("type") === "password") {
    input.setAttribute("type", "text");
    button.textContent = "Hide password";
    div.classList.remove("red");
  }
});
