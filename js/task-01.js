const navEl = document.querySelectorAll('.item');
console.log("В списке", navEl.length, "категории");

navEl.forEach((elem) => {
 console.log(`Категория: ${elem.firstElementChild.textContent}`);
 console.log(`Количество элементов: ${elem.lastElementChild.children.length}` );
});
