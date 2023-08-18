let display = document.getElementById("display")
let buttons = document.querySelectorAll("button")
let displayValue = ""
let firstValue = ""
let secondValue = ""
let operator = ""
let result = ""
let cnt = 0;


buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        // console.log(e.target.innerText);
        if (cnt === 0)
            firstValue += e.target.innerText;
        else if (cnt === 1)
            operator = e.target.innerText;
        else if (cnt === 2)
            secondValue += e.target.innerText;
        ++cnt;

        if (cnt === 3) {
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