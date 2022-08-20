function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.body;

const changeColorButton = document.querySelector(".change-color");

const colorName = document.querySelector(".color");

changeColorButton.addEventListener("click", handleChangeColor);

function handleChangeColor() {
  const colorBody = getRandomHexColor();
  body.style.backgroundColor = colorBody;
  colorName.textContent = colorBody;
}
