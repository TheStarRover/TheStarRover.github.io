const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatoes",
  "Herbs",
  "Condiments",
];

// Створюємо масив <li> елементів
const items = ingredients.map((ingredient) => {
  const li = document.createElement("li");
  li.textContent = ingredient;
  li.classList.add("item");
  return li;
});

// Знаходимо список <ul> з id="ingredients"
const ingredientsList = document.querySelector("#ingredients");

// Додаємо всі елементи за одну операцію
ingredientsList.append(...items);
