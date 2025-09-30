const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

// Знаходимо список з id="categories"
const categoriesList = document.querySelector("#categories");

// Перебираємо кожен елемент інгридиєнтів
ingredients.forEach((ingredient) => {
  const newLi = document.createElement("li");

  const newContent = document.createTextNode(ingredient);

  newLi.appendChild(newContent);

  newLi.appendChild("class=item");

  categoriesList.appendChild(newLi);
});

// document.querySelectorAll("li");
