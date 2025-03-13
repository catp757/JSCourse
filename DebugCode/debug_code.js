    
function performOperation() {
    
    // Get user input from input fields
    let num1 = parseInt(document.getElementById('input1').value);
    let num2 = parseInt(document.getElementById('input2').value);
    let operation = document.getElementById('operation').value;

    // Check if inputs are valid numbers
    if (!isNaN(num1) && !isNaN(num2)) {

        // Perform the operation
        let result = doCalculation(operation, num1, num2);
        
        // Display the result
        displayResult(result);
    } else {
        displayResult('Error');
    }
}

function doCalculation(operation, a, b) {

    // Introduce a debugger statement to pause execution
    debugger;

    let result = 0;
    if (operation === "add") {
        result = a * b;
    } else if (operation === "multiply") {
        result = a * b;
    } else if (operation === "divide") {
        result = a / b;
    }
    
    // Return the result of the calculation
    return result;

}

function displayResult(result) {
    // Display the result in the paragraph element
    const resultElement = document.getElementById('result');
    let message = '';
    if (result == 'Error') {
       message = "Invalid entries. Please enter valid numbers."
    } else {
       message = `The result is: ${result}`;
    }
    resultElement.textContent = message;
}
        