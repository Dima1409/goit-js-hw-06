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
flex-direction: column;
align-items: center;
justify-content: center;
alt: center;
padding:0;
margin:0;
border-radius: 10;
`;

let newElement = [];
for (const element of images) {
  newElement.push(
    `<li class="gallery-item">
    <img style="border-radius: 10px" class='item-image' src="${element.url}" alt="${element.alt}" width='300'</li>`
  );
}

galleryList.insertAdjacentHTML("afterBegin", newElement.join(""));
