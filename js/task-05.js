const input = document.querySelector('#name-input');
const span = document.querySelector('#name-output');


const onInputChange = (event) => {
    console.log(event.currentTarget.value);
    span.textContent = event.currentTarget.value;

    if (span.textContent === "") {
        return span.textContent = 'Anonymous';
    }
}

input.addEventListener('input', onInputChange)

