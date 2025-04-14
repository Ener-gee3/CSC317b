let memory = parseFloat(localStorage.getItem('memory')) || 0;

function appendValue(value) {
    const display = document.getElementById('display');
    display.value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function backspace() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function calculateResult() {
    const display = document.getElementById('display');
    let expression = display.value;

    expression = expression.replace(/(\d+)%/g, '($1/100)');

    if (/^[\d+\-*/().%\s]+$/.test(expression)) {
        try {
            const result = Function('"use strict"; return (' + expression + ')')();
            display.value = result;
            addHistory(expression, result);
        } catch (e) {
            alert('Invalid Expression');
        }
    } else {
        alert('Invalid Characters Detected!');
    }
}

function addHistory(expression, result) {
    const historyList = document.getElementById('historyList');
    const item = document.createElement('li');
    item.textContent = `${expression} = ${result}`;
    item.classList.add('fade-in');
    historyList.prepend(item);
}

function flashButton(id) {
    const button = document.getElementById(id);
    if (button) {
        button.classList.add('active');
        setTimeout(() => {
            button.classList.remove('active');
        }, 150);
    }
}

window.addEventListener('DOMContentLoaded', () => {
    const buttonMap = {
        'btn0': '0', 'btn1': '1', 'btn2': '2', 'btn3': '3', 'btn4': '4',
        'btn5': '5', 'btn6': '6', 'btn7': '7', 'btn8': '8', 'btn9': '9',
        'add': '+', 'subtract': '-', 'multiply': '*', 'divide': '/',
        'percent': '%', 'open-paren': '(', 'close-paren': ')', 'dot': '.'
    };

    for (const id in buttonMap) {
        const button = document.getElementById(id);
        if (button) {
            button.addEventListener('click', () => {
                appendValue(buttonMap[id]);
            });
        }
    }

    document.getElementById('clear').addEventListener('click', clearDisplay);
    document.getElementById('backspace').addEventListener('click', backspace);
    document.getElementById('equal').addEventListener('click', calculateResult);

    document.getElementById('memoryAdd').addEventListener('click', () => {
        const display = document.getElementById('display');
        if (display.value !== '') {
            memory += parseFloat(display.value) || 0;
            localStorage.setItem('memory', memory);
        }
    });

    document.getElementById('memorySubtract').addEventListener('click', () => {
        const display = document.getElementById('display');
        if (display.value !== '') {
            memory -= parseFloat(display.value) || 0;
            localStorage.setItem('memory', memory);
        }
    });

    document.getElementById('memoryRecall').addEventListener('click', () => {
        document.getElementById('display').value = memory;
    });

    document.getElementById('clearHistory').addEventListener('click', () => {
        document.getElementById('historyList').innerHTML = '';
    });

    const themeSwitch = document.getElementById('themeSwitch');
    themeSwitch.addEventListener('change', () => {
        document.body.classList.toggle('dark');
    });

    document.addEventListener('keydown', (event) => {
        const key = event.key;

        if (/\d/.test(key)) {
            appendValue(key);
            flashButton('btn' + key);
        } else if (key === '+') {
            appendValue('+');
            flashButton('add');
        } else if (key === '-') {
            appendValue('-');
            flashButton('subtract');
        } else if (key === '*') {
            appendValue('*');
            flashButton('multiply');
        } else if (key === '/') {
            appendValue('/');
            flashButton('divide');
        } else if (key === 'Enter' || key === '=') {
            calculateResult();
            flashButton('equal');
        } else if (key === 'Backspace') {
            backspace();
            flashButton('backspace');
        } else if (key === 'Escape' || key.toLowerCase() === 'c') {
            clearDisplay();
            flashButton('clear');
        } else if (key === '(') {
            appendValue('(');
            flashButton('open-paren');
        } else if (key === ')') {
            appendValue(')');
            flashButton('close-paren');
        } else if (key === '.') {
            appendValue('.');
            flashButton('dot');
        } else if (key === '%') {
            appendValue('%');
            flashButton('percent');
        }
    });
});
