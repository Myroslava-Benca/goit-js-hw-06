function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const button = document.querySelector(".change-color")
const color = document.querySelector(".color")

button.addEventListener('click', onButtonClick)

function onButtonClick() {
  document.body.style.backgroundColor = getRandomHexColor();
}