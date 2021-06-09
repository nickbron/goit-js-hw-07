const refs = {
    input:document.getElementById("validation-input")
};

refs.input.addEventListener("blur", onInputBlur);

function addClassAdd(value){
    refs.input.classList.add(value);
}

function addClassRemove(value){
    refs.input.classList.remove (value);
}

// function addClass(change, value)
// {
//     refs.input.classList.$change(value);
// }


function onInputBlur(event) {
    if (Number(refs.input.dataset.length) === event.currentTarget.value.length) {
         addClassRemove("invalid");
         addClassAdd("valid");
        // addClass(remove, "invalid");
       //  addClass("add", "valid");
        
    }
    else {
         addClassAdd("invalid");
        addClassRemove("valid");
       // addClass(add, "invalid");
       // addClass("remove", "valid");
        
   }
}
