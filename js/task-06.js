const refs = {
    input:document.getElementById("validation-input"),
    nameLabel: document.querySelector("#name-output"),
};

refs.input.addEventListener("blur", onIputBlur);

function onIputBlur(event) {
    if (Number(refs.input.dataset.length) === event.currentTarget.value.length) {
        refs.input.classList.remove("invalid");
        refs.input.classList.add("valid"); }
    else {
        refs.input.classList.add("invalid");
        refs.input.classList.remove("valid");}
}