const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const createListRef = document.querySelector("#ingredients");

const ingridientListRef = ingredients.map((ingridient) => {
  const ingridientRef = document.createElement("li");
  ingridientRef.textContent = `${ingridient}`;
  ingridientRef.classList.add("item");
  return ingridientRef;
});
createListRef.append(...ingridientListRef);
