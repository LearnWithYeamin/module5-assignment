function calculate() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var operator = document.getElementById('operator').value;
    var result = document.getElementById('result');

    if (isNaN(num1) || isNaN(num2)) {
        result.innerHTML = '<div class="alert alert-danger" role="alert">Please enter valid numbers.</div>';
    } else {
        switch (operator) {
            case 'add':
                result.innerHTML = '<div class="alert alert-success" role="alert">Result: ' + (num1 + num2) + '</div>';
                break;
            case 'subtract':
                result.innerHTML = '<div class="alert alert-success" role="alert">Result: ' + (num1 - num2) + '</div>';
                break;
            case 'multiply':
                result.innerHTML = '<div class="alert alert-success" role="alert">Result: ' + (num1 * num2) + '</div>';
                break;
            case 'divide':
                if (num2 === 0) {
                    result.innerHTML = '<div class="alert alert-danger" role="alert">Division by zero is not allowed.</div>';
                } else {
                    result.innerHTML = '<div class="alert alert-success" role="alert">Result: ' + (num1 / num2) + '</div>';
                }
                break;
            default:
                result.innerHTML = '<div class="alert alert-danger" role="alert">Invalid operation.</div>';
        }
    }
}
