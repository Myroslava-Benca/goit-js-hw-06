const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsRefs = document.querySelector("#ingredients")

const ingredientsArr = ingredients.map(ingredient => {
  const list = document.createElement("li");
  list.textContent = ingredient;
  list.classList = "item"
  return list
});
 ingredientsRefs.append(...ingredientsArr);
