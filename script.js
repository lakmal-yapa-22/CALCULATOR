const display = document.getElementById("display");

function appendNumber(number) {
    if (display.innerText === "0" || display.innerText === "Error") {
        display.innerText = number;
    } else {
        display.innerText += number;
    }
}

function appendOperator(operator) {
    const lastChar = display.innerText.slice(-1);
    if ("+-*/".includes(lastChar)) {
        display.innerText = display.innerText.slice(0, -1) + operator;
    } else {
        display.innerText += operator;
    }
}

function clearDisplay() {
    display.innerText = "0";
}

function deleteLast() {
    if (display.innerText.length > 1) {
        display.innerText = display.innerText.slice(0, -1);
    } else {
        display.innerText = "0";
    }
}

function toggleSign() {
    if (display.innerText !== "0") {
        if (display.innerText.charAt(0) === "-") {
            display.innerText = display.innerText.substring(1);
        } else {
            display.innerText = "-" + display.innerText;
        }
    }
}

function calculate() {
    try {
        display.innerText = eval(display.innerText.replace("×", "*").replace("÷", "/"));
    } catch {
        display.innerText = "Error";
    }
}
