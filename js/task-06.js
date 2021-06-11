<<<<<<< Updated upstream
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
=======
const refs = {
    input:document.getElementById("validation-input"),
    // nameLabel: document.querySelector("#name-output"),
};

refs.input.addEventListener("blur", onInputBlur);

function onInputBlur(event) {
    if (Number(refs.input.dataset.length) === event.currentTarget.value.length) {
        //  refs.input.classList.remove("invalid");
        // refs.input.classList.add("valid");
        classAdd(remove,valid);
    }
    else {
        refs.input.classList.add("invalid");
            // refs.input.classList.remove("valid");
        }
}

function classAdd (classValue,value)
{
    refs.input.classList.classValue("value");
}
>>>>>>> Stashed changes
