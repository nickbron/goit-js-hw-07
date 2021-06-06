const fontSizeControl = document.getElementById('font-size-control');
const textSpan = document.getElementById('text');

fontSizeControl.addEventListener('input', (elem) => {
  textSpan.style.fontSize = `${elem.target.value}px`;
    // console.log(elem.target.value);
});