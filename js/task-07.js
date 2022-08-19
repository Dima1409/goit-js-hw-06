const inputRange = document.querySelector("#font-size-control");

const spanText = document.querySelector("#text");

inputRange.addEventListener("input", changeFontSize);

function changeFontSize() {
  spanText.style.fontSize = `${inputRange.value}px`;
  currentFontSize.textContent = `${inputRange.value}px`;
}

const currentFontSize = document.createElement("div");
currentFontSize.style.color = "teal";
spanText.after(currentFontSize);
currentFontSize.textContent = `${inputRange.value}px`;

spanText.style.fontSize = `${inputRange.value}px`;