const input = document.getElementById("validation-input");
const datasetLength = Number(input.dataset.length);

input.addEventListener("input", onInputElement);

function onInputElement(event) {
  input.classList.remove("invalid");
  input.classList.remove("valid");

  if (
    event.currentTarget.value.length === datasetLength &&
    !event.currentTarget.value.includes(" ")
  ) {
    input.classList.add("valid");
  } else input.classList.add("invalid");
}
