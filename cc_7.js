// Task 1 - Function Declaration (Scenario: Customer Invoice Calculation)

// Setting up the function to calculate the final invoice amount

function calculateInvoice(subtotal, taxrate, discount) {
    let total = (subtotal + (subtotal*taxrate)) - discount;
    return total;
};


// Declaring values to test the function

let subtotal = 100;
let taxrate = 0.07;
let discount = 15;

// Console-logging the values

console.log(`Grand Total: $${calculateInvoice(100, 0.07, 15)}`)
console.log(`Grand Total: $${calculateInvoice(200, 0.10, 50)}`)