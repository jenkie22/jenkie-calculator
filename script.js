function appendToDisplay(value) {

    document.getElementById('display').value+= value;
}

function clearDisplay() {

    document.getElementById('display').value="";
}

function calculateResult() {
    let expression = display.value.replace(/x/g, '*').replace(/÷/g, '/');
    try {
        display.value = eval(expression) || '';
    } catch (error) {
        display.value = 'Error';
    }
}
    

