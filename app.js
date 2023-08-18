let display = document.getElementById("display")
let buttonsH = document.getElementsByClassName("button")
let buttons = Array.from(buttonsH)
let displayValue = ""
let firstValue = ""
let secondValue = ""
let operator = ""
let result = ""
let isSecondValue = false;



addEventListener('keypress', (e) => {
    // console.log(e.key);
    if (e.key === "C") {
        display.innerText = "0";
        displayValue = "";
        firstValue = "";
        secondValue = "";
        operator = "";
        cnt = 0;
        isSecondValue = false;
        return;
    }

    if (e.key === "=" || e.key === "Enter") {
        if (secondValue === "0" && operator === "/") {
            alert("Division by zero is not allowed");
            display.innerText = "";
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
        display.innerText = "";
        updateDisplay();
        return;
    }
    else if (e.key === "+" || e.key === "-" || e.key === "*" || e.key === "/") {
        operator = e.key;
        isSecondValue = true;
    } else if (!isSecondValue)
        displayValue === "0" ? firstValue = e.key : firstValue += e.key;
    else if (isSecondValue)
        secondValue += e.key;

    displayValue += e.key;
    updateDisplay();
})


buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        // console.log(e.target.innerText);

        if (e.target.innerText === "C") {
            display.innerText = "0";
            displayValue = "";
            firstValue = "";
            secondValue = "";
            operator = "";
            cnt = 0;
            isSecondValue = false;
            return;
        }

        if (e.target.innerText === "=") {
            if (secondValue === "0" && operator === "/") {
                alert("Division by zero is not allowed");
                display.innerText = "";
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
            display.innerText = "";
            updateDisplay();
            return;
        }
        else if (e.target.innerText === "+" || e.target.innerText === "-" || e.target.innerText === "*" || e.target.innerText === "/") {
            operator = e.target.innerText;
            isSecondValue = true;
        } else if (!isSecondValue)
            displayValue === "0" ? firstValue = e.target.innerText : firstValue += e.target.innerText;
        else if (isSecondValue)
            secondValue += e.target.innerText;

        displayValue += e.target.innerText;
        updateDisplay();
    })

}

)

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
    display.innerText === "0" ? display.innerText = displayValue : display.innerText += displayValue;
    displayValue = "";
}