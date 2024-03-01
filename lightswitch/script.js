const button = document.querySelector("button");
const body = document.querySelector("body");
let title = false;

button.addEventListener("click", function () {
  body.classList.toggle("dark");
  button.classList.toggle("aus");
  title = !title;
  if (title) {
    document.title = "Good Night";
  } else {
    document.title = "Good Morning";
  }
});
