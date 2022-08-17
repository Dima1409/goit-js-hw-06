const inputEl = document.getElementById("name-input");
const outputEl = document.getElementById("name-output");

function onInputElement(event) {
  outputEl.textContent = "Anonymous";

  if (event.currentTarget.value.length > 0) {
    outputEl.textContent = event.currentTarget.value;
  }
}

inputEl.addEventListener("input", onInputElement);
