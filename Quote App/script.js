const button = document.querySelector("button");
const main = document.querySelector("main");

button.addEventListener("click", function () {
  main.innerHTML = "";
  fetch("https://dummy-apis.netlify.app/api/quote")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const p = document.createElement("p");
      p.innerHTML = data.quote + " <br> - <br>" + data.author;
      main.appendChild(p);
    });
});
