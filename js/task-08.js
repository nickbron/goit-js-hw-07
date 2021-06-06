const inputBoxRef = (document.querySelector("#controls")).firstElementChild;
const renderBtnRef = document.querySelector('[data-action="render"]');
const destroyBtnRef = document.querySelector('[data-action="destroy"]');
const boxesRef = document.getElementById("boxes");

let size = 30;

renderBtnRef.addEventListener('click', renderBoxes);
destroyBtnRef.addEventListener('click', destroyBoxes);


function renderBoxes() {
  boxesRef.append(...createBoxes(inputBoxRef.value));
}

function destroyBoxes() {
  boxes.innerHTML = '';
  inputBoxRef.value = '';
 
}

function createBoxes(amount) {
    const divBoxes=[];
    for (let i = 0; i < amount; i += 1) {
        const div = document.createElement('div');
        div.style.backgroundColor = randColor();
        div.style.height = `${size}px`;
        div.style.width = `${size}px`;
        size += 10;
        divBoxes.push(div);
    }
    return divBoxes;
}

function randColor() 
{
    var color = "";
    for(var i = 0; i < 3; i++) {
        var sub = Math.floor(Math.random() * 256).toString(16);
        color += (sub.length == 1 ? "0" + sub : sub);
    }
    return "#" + color;
}
