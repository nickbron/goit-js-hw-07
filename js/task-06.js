const input = document.getElementById("validation-input");
const expectedLength = Number(input.dataset.length);

input.addEventListener("blur", onInputBlur);

function onInputBlur() {
    const isValid = expectedLength === input.value.length;
    if (isValid) {
        setValidStateClasses();
    } else {
        setInvalidStateClasses();
    }
}

function setValidStateClasses() {
    input.classList.remove('invalid');
    input.classList.add('valid');
}

function setInvalidStateClasses() {
    input.classList.remove('valid');
    input.classList.add('invalid');
}

// function addClass(method, value) {input.classList[method](value); }

