const refs = {
    input:document.querySelector("#name-input"),
    nameLabel: document.querySelector("#name-output"),
};

refs.input.addEventListener("input", onIputChange);

function onIputChange(event) {
    if (refs.input.value.trim()) {
        refs.nameLabel.textContent = event.currentTarget.value;
    }
    else  refs.nameLabel.textContent = "незнакомец"
}