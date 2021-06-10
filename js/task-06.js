const input = document.getElementById("validation-input");
const expectedLength = Number(input.dataset.length);

input.addEventListener("blur", onInputBlur);

function onInputBlur() {
const isValid = expectedLength === input.value.length;
if (isValid) {
setClasses("valid", "invalid");
} else {
setClasses("invalid", "valid");
}
}

function setClasses(addClass, remClass) {
    input.classList.add(addClass);
    input.classList.remove(remClass);
}

// function addClass(method, value) {input.classList[method](value); }