const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ulIngredients = document.querySelector("#ingredients");

for (let i = 0; i < ingredients.length; i += 1) {
  const newElement = document.createElement("li");
  newElement.classList.add("item");
  newElement.textContent = ingredients[i];
  console.log(newElement);
  // ulIngredients.appendChild(newElement);
  ulIngredients.append(newElement);
}
