let num1 = 8
let num2 = 2

document.getElementById("num1el").textContent = num1
document.getElementById("num2el").textContent = num2
let sumEl = document.getElementById("sum-el")

function add() {
    let result = num1 + num2
    sumEl.innerText = "Sum: " + num1 + " + " + num2 + " = " + result

}

function subtract() {
    let result = num1 - num2
    sumEl.innerText = "Sum: " +  num1 + " - " + num2 + " = " + result
}

function divide() {
    let result = num1 / num2
    sumEl.innerText = "Sum: " + num1 + " / " + num2 + " = " + result
}

function multiply() {
    let result = num1 * num2
    sumEl.innerText = "Sum: " + num1 + " * " + num2 + " = " + result
}