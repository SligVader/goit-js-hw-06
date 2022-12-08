const categoriesRef = document.querySelector("#categories");
const categoriesItemsRef = categoriesRef.children.length;
console.log(`Number of categories:`, categoriesItemsRef);
const elementsRef = document.querySelectorAll(".item");
elementsRef.forEach((li) => {
  console.log(`Category: `, li.firstElementChild.textContent);
  console.log(`Elements: `, li.lastElementChild.children.length);
});
