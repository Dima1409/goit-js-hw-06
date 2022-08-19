function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const ref = {
  input: document.querySelector("#controls>input"), // INPUT
  destroy: document.querySelector("[data-destroy]"), // DESTROY BTN
  create: document.querySelector("[data-create]"), // CREATE BTN
  boxes: document.querySelector("#boxes"), // BOXES DIV
};
/////////////////////////////////////////////////////////////
ref.input.addEventListener("change", handleInputValue);

function handleInputValue() {
  return Number(ref.input.value);
}
const userValue = handleInputValue;
//////////////////////////////////////////////////////////////
ref.create.addEventListener("click", createElementToHtml);

function createElementToHtml() {
  const dimensions = {
    width: 30,
    height: 30,
    nextDivDimensions: 0,
  };
  const elements = [];
  for (let i = 1; i <= userValue(); i += 1) {
    dimensions.nextDivDimensions += 10;
    const a = document.createElement("div");
    a.style.backgroundColor = getRandomHexColor();
    a.style.width = dimensions.width + dimensions.nextDivDimensions + "px";
    a.style.height = dimensions.height + dimensions.nextDivDimensions + "px";

    elements.push(a);
  }
  boxes.append(...elements);
}

// функція для очищення всього списку елементів
ref.destroy.addEventListener("click", handleDestroy);
function handleDestroy() {
  ref.boxes.innerHTML = "";
  ref.input.value = 0;
}
