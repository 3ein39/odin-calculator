let display = document.getElementById("display")
let buttons = document.querySelectorAll("button")
let displayValue = ""
let firstValue = ""
let secondValue = ""
let operator = ""
let result = ""
let cnt = 0;
let isSecondValue = false;


buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        // console.log(e.target.innerText);
        if (e.target.innerText === "=") {
            if (secondValue === "0" && operator === "/") {
                alert("Division by zero is not allowed");
                display.value = "";
                displayValue = "";
                firstValue = "";
                secondValue = "";
                operator = "";
                cnt = 0;
                isSecondValue = false;
                return;
            }
            solve();
            displayValue = result;
            firstValue = result;
            secondValue = "";
            operator = "";
            cnt = 1;
            display.value = "";
            updateDisplay();
            return;
        }
        else if (e.target.innerText === "+" || e.target.innerText === "-" || e.target.innerText === "*" || e.target.innerText === "/") {
            operator = e.target.innerText;
            isSecondValue = true;
        } else if (!isSecondValue)
            firstValue += e.target.innerText;
        else if (isSecondValue)
            secondValue += e.target.innerText;

        displayValue += e.target.innerText;
        updateDisplay();
    })
})

function solve() {
    if (operator === "+")
        result = parseFloat(firstValue) + parseFloat(secondValue);
    else if (operator === "-")
        result = parseFloat(firstValue) - parseFloat(secondValue);
    else if (operator === "*")
        result = parseFloat(firstValue) * parseFloat(secondValue);
    else if (operator === "/")
        result = parseFloat(firstValue) / parseFloat(secondValue);
}

function updateDisplay() {
    display.value += displayValue;
    displayValue = "";
}