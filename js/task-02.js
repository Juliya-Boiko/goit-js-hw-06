const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector("#ingredients");

// ingredients.map((ingredient) => {
//   const newElement = document.createElement('li');
//   newElement.classList.add('item');
//   newElement.textContent = ingredient;
//   ingredientsList.append(newElement);
// })

const ingredientsListArray = ingredients.map((ingredient => { 
  const newElement = document.createElement('li');
  newElement.classList.add('item');
  newElement.textContent = ingredient;
  return newElement;
}))

ingredientsList.append(...ingredientsListArray);