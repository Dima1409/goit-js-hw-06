const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ulIngredients = document.querySelector("#ingredients");

let newElement = [];
for (let i = 0; i < ingredients.length; i += 1) {
  const element = document.createElement("li");
  element.classList.add("item");
  element.textContent = ingredients[i];
  newElement.push(element);
}
ulIngredients.append(...newElement);
