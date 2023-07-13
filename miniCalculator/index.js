
const firstVar = document.getElementById("firstVar")
const secondVar = document.getElementById("secondVar")
const result = document.getElementById("result")

const plusButton = document.getElementById("plusButton")


plusButton.addEventListener("click", ()=> {
    const number1 = parseFloat(firstVar.value);
    const number2 = parseFloat(secondVar.value);
    result.value = number1+number2
})