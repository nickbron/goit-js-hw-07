  
const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const navEl = document.querySelector("#ingredients");

// const elements = ingredients.map(elem => {
//    const navItemEl = document.createElement("li");
//    navItemEl.textContent = elem ;
//   console.log(navItemEl);
//   return navItemEl;
// });

const makeIngredients = elem => {
  return elem.map(elem => {
    const navItemEl = document.createElement("li");
    navItemEl.textContent = elem;
    console.log(navItemEl);
    return navItemEl;
  });
};

const elements = makeIngredients(ingredients);
navEl.append(...elements);




  



