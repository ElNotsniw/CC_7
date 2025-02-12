// Task 1 - Function Declaration (Scenario: Customer Invoice Calculation)

// Setting up the function to calculate the final invoice amount

function calculateInvoice(subtotal, taxrate, discount) {
    let total = (subtotal + (subtotal*taxrate)) - discount;
    return total;
};


// Declaring values in the function and console-logging it to test the code

console.log(`Grand Total: $${calculateInvoice(100, 0.07, 15)}`)
console.log(`Grand Total: $${calculateInvoice(200, 0.10, 50)}`)





// Task 2 - Function Expression (Employee Hourly Wage Calculation)

// Setting up the function to calculate hourly wage

const calculateHourlyWage = function(salary, hoursPerWeek) {
    let hourlywage = salary / (hoursPerWeek*52);
    return hourlywage
};


// Declaring values in the function and console-logging it

console.log(`Hourly Wage: $${calculateHourlyWage(52000, 40)}`);
console.log(`Hourly Wage: $${calculateHourlyWage(80000, 30)}`)




// Task 3 - Arrow Function (Scenario: Customer Loyalty Discount)


// Setting up the function to calculate loyalty discount

const calculateLoyaltyDiscount = (amount, years) => {
    let discount;

    if (years >= 5) {
        discount = 0.15;
    } else if (years >= 3) {
        discount = 0.10;
    } else {
        discount = 0.05;
    }

    return amount -(amount * discount);

};


//  Setting up the values and console-logging the results

console.log(`Loyalty Discount: $${calculateLoyaltyDiscount(100, 6)}`)
console.log(`Loyalty Discount: $${calculateLoyaltyDiscount(200, 2)}`)





// Task 4 - Parameters and Arguments (Scenario: Product Shipping Cost Calculation)


// Setting up the function to calculate shipping cost

function calculateShippingCost(weight, location, expedited = false) {
    let baseCost;

    if (location === "USA") {
        baseCost = 5 + (0.5 * weight);
    } else if (location === "Canada") {
        baseCost = 10 + (0.7 * weight);
    }
    if (expedited) {
        baseCost += 10;
    }

    return baseCost;

}


// Declaring values to test the function and console-log the results

console.log(`Shipping Cost: $${calculateShippingCost(10, "USA", true)}`);
console.log(`Shipping Cost: $${calculateShippingCost(5, "Canada", false)}`);



// Task 5 - Returning Values (Scenario: Business Loan Interest Calculation)


// Setting up the function to calculate interest

function calculateInterest(principal, rate, years) {
    let interest = principal * rate * years;
    return interest;
}


// Declaring values to test out the function and console-log the results

console.log(`Interest Amount: $${calculateInterest(1000, 0.05, 3)}`)
console.log(`Interest Amount: $${calculateInterest(5000, 0.07, 5)}`)