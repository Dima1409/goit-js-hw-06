let counterValue = 0;

const totalValue = document.getElementById("value");
const decrementBtn = document.querySelector('[data-action = "decrement"]');
const incrementBtn = document.querySelector('[data-action = "increment"]');

decrementBtn.addEventListener("click", () => {
  counterValue -= 1;
  totalValue.textContent = counterValue;
});

incrementBtn.addEventListener("click", () => {
  counterValue += 1;
  totalValue.textContent = counterValue;
});
