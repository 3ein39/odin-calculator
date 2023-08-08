let display = document.getElementById("display")
let buttons = document.querySelectorAll("button")
let displayValue = ""
let firstValue = ""
let secondValue = ""
let operator = ""
let result = ""


buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        console.log(e.target.innerText);
    })
})