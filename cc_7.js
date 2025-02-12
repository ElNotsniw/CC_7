// Task 1 - Function Declaration (Scenario: Customer Invoice Calculation)

// Setting up the function to calculate the final invoice amount

function calculateInvoice(subtotal, taxrate, discount) {
    let total = (subtotal + (subtotal*taxrate)) - discount;
    return total;
};


// Declaring values in the function and console-logging it to test the code

console.log(`Grand Total: $${calculateInvoice(100, 0.07, 15)}`)                     // Output: Grand Total: $92
console.log(`Grand Total: $${calculateInvoice(200, 0.10, 50)}`)                     // Output: Grand Total: $170






// Task 2 - Function Expression (Employee Hourly Wage Calculation)

// Setting up the function to calculate hourly wage

const calculateHourlyWage = function(salary, hoursPerWeek) {
    let hourlywage = salary / (hoursPerWeek*52);
    return hourlywage
};


// Declaring values in the function and console-logging it

console.log(`Hourly Wage: $${calculateHourlyWage(52000, 40)}`);                 // Output: Hourly Wage: $25
console.log(`Hourly Wage: $${calculateHourlyWage(80000, 30)}`)                  // Output: Hourly Wage: $51.28






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

console.log(`Loyalty Discount: $${calculateLoyaltyDiscount(100, 6)}`)                   // Output: $85
console.log(`Loyalty Discount: $${calculateLoyaltyDiscount(200, 2)}`)                   // Output: $190





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

console.log(`Shipping Cost: $${calculateShippingCost(10, "USA", true)}`);               // Output: Shipping Cost: $20
console.log(`Shipping Cost: $${calculateShippingCost(5, "Canada", false)}`);            // Output: Shipping Cost: $13.5






// Task 5 - Returning Values (Scenario: Business Loan Interest Calculation)


// Setting up the function to calculate interest

function calculateInterest(principal, rate, years) {
    let interest = principal * rate * years;
    return interest;
}


// Declaring values to test out the function and console-log the results

console.log(`Interest Amount: $${calculateInterest(1000, 0.05, 3)}`)            // Output: Interest Amount: $150
console.log(`Interest Amount: $${calculateInterest(5000, 0.07, 5)}`)            // Output: Interest Amount: $1750.00






// Task 6 - Higher-Order Functions (Scenario: Filtering High-Value Transactions)


// Setting up the function to filter high-value transactions

let transactions = [500, 1200, 3000, 800, 2200];

function filterHighValueTransactions(transactions, filterfunction) {
    return transactions.filter(filterfunction);
}


// Console-logging the results to filter out the values that are greater than 1000

console.log(`High-Value Transactions: ${filterHighValueTransactions(transactions, amount => amount > 1000)}`)       // Output: High-Value Transactions: 1200,3000,2200





// Task 7 - Closures (Scenario: Budget Tracker)

// Creating a function to return another function to keep track of expenses and console-logging the balance

function createbudgettracker () {
    let balance = 0

    return function(expense) {
        balance += expense;
        console.log(`Current Balance: $${balance}`)
    };
}   

// Declaring values to keep a running balance

const balance = createbudgettracker();

balance(50)                         // Output: Current Balance: $50
balance(100)                        // Output: Current Balance: $150
balance(200)                        // Output: Current Balance: $350