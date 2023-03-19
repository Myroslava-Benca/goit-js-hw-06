const counterContainer = document.querySelector("#counter")
const buttonDecrement = counterContainer.firstElementChild
const buttonIncrement = counterContainer.lastElementChild
const span = document.querySelector("#value")


let counterValue = 0;

const onBtnDecrementClick = (value) => {
    counterValue -= 1;
    span.textContent = counterValue;
};

const onBtnIncrementClick = (value) =>  {
    counterValue += 1;
    span.textContent = counterValue;
};

buttonDecrement.addEventListener("click", onBtnDecrementClick);
buttonIncrement.addEventListener("click", onBtnIncrementClick);