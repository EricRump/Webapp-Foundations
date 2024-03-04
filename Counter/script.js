function updateCounter() {
  //Counter zählt bei click, space und enter
  const main = document.querySelector("main");

  let count = 0;

  const element = document.createElement("p");
  let zähler = document.createTextNode(count.toString());
  element.appendChild(zähler);
  main.appendChild(element);

  main.addEventListener("click", function () {
    count++;
    zähler.textContent = count.toString();
    changeBackgroundColor();
  });
  document.addEventListener("keydown", function (event) {
    if (event.key === "Enter" || event.key === " ") {
      count++;
      zähler.textContent = count.toString();
      changeBackgroundColor();
    }
  });

  // Button zum reseten

  const button = main.querySelector("button");
  button.addEventListener("click", function () {
    count = -1;
    resetBackgroundColor();
  });

  // Ändern der Farbe
  function changeBackgroundColor() {
    const fillPercentage = count % 100;
    const backgroundColor = `linear-gradient(to right, yellowgreen ${fillPercentage}%, yellow ${fillPercentage}%)`;
    main.style.background = backgroundColor;
    if (count % 100 === 0) {
      resetBackgroundColor();
    }
  }

  function resetBackgroundColor() {
    main.style.background = "yellow";
  }
}

updateCounter();
