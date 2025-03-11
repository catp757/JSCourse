let length;
let width;

function calculateArea() {
    length = parseFloat(document.getElementById('length').value);
    width = parseFloat(document.getElementById('width').value);
    let area = length * width;
    document.getElementById('result').innerText = `The area of the rectangle is: ${area}`;
}

function groceryTracker() {
    groceryItem1 = parseFloat(document.getElementById('groceryItem1').value);
    groceryItem2 = parseFloat(document.getElementById('groceryItem2').value);
    groceryItem3 = parseFloat(document.getElementById('groceryItem3').value);
    totalGroceryAmount = groceryItem1 + groceryItem2 + groceryItem3
    document.getElementById('totalGroceryAmount').innerText = `The total amount is: ${totalGroceryAmount}`;
}