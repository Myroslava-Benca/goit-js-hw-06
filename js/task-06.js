const inputEl = document.getElementById("validation-input");




function onInputBlur(){
    if (inputEl.value.length < inputEl.getAttribute("data-length") ||
inputEl.value.length > inputEl.getAttribute("data-length")
) {
inputEl.classList.add("invalid");
} else {
inputEl.classList.remove("invalid");
inputEl.classList.add("valid");
}
}

inputEl.addEventListener('blur', onInputBlur)