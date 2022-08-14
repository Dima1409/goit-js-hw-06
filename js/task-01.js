const category = document.querySelector("#categories");
const categoryLength = category.children.length;
console.log("Number of categories", categoryLength);

const categoryElement = document.querySelectorAll(".item");
for (let i = 0; i < categoryElement.length; i += 1) {
  const title = categoryElement[i].firstElementChild.textContent;

  const categoryItem = categoryElement[i].lastElementChild.children.length;

  console.log("Category:", title);
  console.log("Elements:", categoryItem);
}
