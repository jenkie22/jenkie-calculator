<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width,initial-scale=1.0">
        <title>CALCULATOR</title>
        <link rel="stylesheet" href=".\css\style.css">
        <link rel="icon" type="image/x-icon" href=".\img\favicon.ico">
    </head>
    <body>
        <div class="calculator">
            <input type="text" id="display" disabled>
            <div class="buttons">
                <button class="function" onclick="clearDisplay()">C</button>
                <button class="function" onclick="appendToDisplay('+/-')">+/-</button>
                <button class="function" onclick="appendToDisplay('%')">%</button>
                <button class="function" onclick="appendToDisplay('÷')">÷</button>
                <button class="function" onclick="appendToDisplay('7')">7</button>
                <button class="function" onclick="appendToDisplay('8')">8</button>
                <button class="function" onclick="appendToDisplay('9')">9</button>
                <button class="function" onclick="appendToDisplay('x')">×</button>
                <button class="function" onclick="appendToDisplay('4')">4</button>
                <button class="function" onclick="appendToDisplay('5')">5</button>
                <button class="function" onclick="appendToDisplay('6')">6</button>
                <button class="function" onclick="appendToDisplay('-')">-</button>
                <button class="function" onclick="appendToDisplay('1')">1</button>
                <button class="function" onclick="appendToDisplay('2')">2</button>
                <button class="function" onclick="appendToDisplay('3')">3</button>
                <button class="function" onclick="appendToDisplay('+')">+</button>
                <button class="zero" onclick="appendToDisplay('0')">0</button>
                <button class="dot" onclick="appendToDisplay('.')">.</button>
                <button class="equal" onclick="calculateResult()">=</button>
            </div>
        </div>
        <script src=".\js\script.js"></script>
    </body>
</html>
