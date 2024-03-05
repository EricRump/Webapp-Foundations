function colorMixer() {
  const red = document.querySelector(".red");
  const green = document.querySelector(".green");
  const blue = document.querySelector(".blue");
  const main = document.querySelector("main");
  const text = document.querySelector("p");

  let redValue = red.value;
  let greenValue = green.value;
  let blueValue = blue.value;

  // Farbe erstellen und dem main hinzufügen

  let rgbValue = `rgb(${redValue}, ${greenValue}, ${blueValue})`;
  main.style.backgroundColor = rgbValue;

  red.addEventListener("input", colorMixer);
  green.addEventListener("input", colorMixer);
  blue.addEventListener("input", colorMixer);

  //RGB als Text anzeigen lassen
  text.textContent = rgbValue;
}
colorMixer();
