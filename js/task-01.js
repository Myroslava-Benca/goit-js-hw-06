
const categories = document.querySelectorAll(`.item`)
console.log(`Number of categories: ${ categories.length }`)

const itemList = document.querySelector(`.item`)
const titleList = itemList.firstElementChild.textContent
const listItem = itemList.lastElementChild


categories.forEach((el) => {
    console.log(`Categories: 
    ${el.firstElementChild.textContent}`)
    console.log(`Elements: 
    ${el.lastElementChild.childElementCount}`)
})
