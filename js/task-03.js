const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const galleryList = document.querySelector(".gallery");
galleryList.style.cssText = `
display: flex;
list-style: none;
align-items: center;
justify-content: space-between;
padding:0;
margin:0;
`;

for (const element of images) {
  galleryList.insertAdjacentHTML(
    "beforeend",
    `<li class="gallery-item"><img style='display:block; border-radius:10px' class='item-image' src="${element.url}" alt="${element.alt}" width="400" '</li>`
  );
}
