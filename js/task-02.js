  
const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const navEl = document.querySelector("#ingredients");



// ingredients.forEach((elem) => {
 
//   const navItemEl = document.createElement("li");
//    navItemEl.textContent = elem ;
//    console.log(navItemEl);
  
//   navEl.appendChild(navItemEl);
// });

const elements = ingredients.map(elem => {
   const navItemEl = document.createElement("li");
   navItemEl.textContent = elem ;
  console.log(navItemEl);
  return navItemEl;
});

navEl.append(...elements);




  



