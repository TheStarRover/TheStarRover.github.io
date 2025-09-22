// Знаходимо список з id="categories"
const categoriesList = document.querySelector("#categories");

// Знаходимо всі елементи li з класом item
const categories = categoriesList.querySelectorAll(".item");

// Виводимо кількість категорій
console.log(`Number of categories: ${categories.length}`);

// Перебираємо кожен елемент категорії
categories.forEach((category) => {
  // Знаходимо заголовок h2
  const title = category.querySelector("h2").textContent;

  // Рахуємо кількість вкладених li
  const elementsCount = category.querySelectorAll("li").length;

  // Виводимо результат у консоль
  console.log(`Category: ${title}`);
  console.log(`Elements: ${elementsCount}`);
});
