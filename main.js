let body = document.querySelector('body')
let inpText = document.querySelector('.inpTex')
let inpColor = document.querySelector('.inpCol')
let btnPlus = document.querySelector('.btn-plus')
let btn = document.querySelector('.btn')
let btnMinus = document.querySelector('.btn-minus')
let h1 = document.querySelector('h1')


btn.addEventListener('click', () => {
    let inpvalue = inpText.value
    h1.textContent = inpvalue
    inpText.value = ''
})


btnPlus.addEventListener('click', () => {
    let currentVal = parseInt(h1.textContent) || 0  
    h1.textContent = currentVal + 1
})


btnMinus.addEventListener('click', () => {
    let currentVal = parseInt(h1.textContent) || 0  
    h1.textContent = currentVal - 1
})

inpColor.addEventListener('change', () => {
    let col = inpColor.value
    h1.style.color = col
})